Documentatioimport Player from "./player.model";
import { environment } from "../env";
import generateWinnerModalTemplate from "../templates/winner.template";
import { IPlayerOptions } from "../interfaces/playerOptions.interface";
import { take } from "rxjs/operators";
import { Observable, fromEvent } from "rxjs";

class PlatziGame {

    /**
     * Game instance of platzi game -> SINGLETON
     */
    private static GAME_INSTANCE: PlatziGame;

    /**
     * Players of platzi game
     */
    private static players: Player[];

    /**
     * Active players of platzi game
     */
    activePlayers: number;

    /**
     * Current turn of platzi game
     */
    currentTurn: number;

    /**
     * Current player of platzi game
     */
    currentPlayer: Player;

    /**
     * Modal container used when one player win the game
     */
    modalContainer: HTMLElement

    /**
     * Play again button
     */
    playAgainButton: HTMLElement;

    /**
     * Play again button action of platzi game
     */
    playAgainAction: Observable<Event>;


    private constructor() {
        PlatziGame.players = []
        this.activePlayers = 0;
        this.currentTurn = 0;
    }

    /**
     * Platzi game instance
     * @returns current instance and create one if not exists
     */
    static gameInstance() {
        if (!PlatziGame.GAME_INSTANCE) {
            PlatziGame.GAME_INSTANCE = new PlatziGame();
        }
        return PlatziGame.GAME_INSTANCE;
    }

    /**
     * Adds new player to current game
     * @param player 
     */
    addNewPlayer(player: Player) {
        PlatziGame.players.push(player)
    }

    getPlayer(index) {
        return PlatziGame.players[index]
    }

    /**
     * Ends game and get a GIF from GIPHY
     * @param playerIndex 
     */
    async endGame(playerIndex) {
        const playerData: IPlayerOptions = this.getPlayer(playerIndex).playerOptions;
        const gifRAWData = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${environment.GIPHY_KEY}&limit=1`)
        const gifData = await gifRAWData.json()
        const gifImage = gifData.data;
        const modalTemplate: string = generateWinnerModalTemplate(gifImage, playerData)
        this.showWinnerModal(modalTemplate)
    }

    /**
     * Shows winner modal
     * @param modalTemplate HTML to render
     */
    showWinnerModal(modalTemplate: string) {
        this.modalContainer = document.getElementById('modal');
        const child: HTMLDivElement = document.createElement('div')
        child.innerHTML = modalTemplate;
        child.className = "winner"
        this.modalContainer.appendChild(child);

        this.playAgain(child)
    }

    /**
     * Wait if the user want's to play again
     * @param child modal ref
     */
    playAgain(child: HTMLElement) {
        this.playAgainButton = document.getElementById('play-again')
        this.playAgainAction = fromEvent(this.playAgainButton, 'click');
        this.playAgainAction.pipe(take(1)).subscribe(() => {
            this.modalContainer.removeChild(child);
            this.startGame();
        })
    }

    /**
     * Starts game
     * @param [numberOfPlayers] usually 2 players
     */
    startGame(numberOfPlayers = 2) {

        // Clean the game
        this.resetAll();

        this.activePlayers = numberOfPlayers - 1

        for (let index = 0; index < numberOfPlayers; index++) {
            this.addNewPlayer(new Player);
        }

        this.nextPlayer(0);
    }

    /**
     * Preapare the next player to play
     * @param playerIndex 
     */
    nextPlayer(playerIndex: number) {
        let nextPlayer;

        if (playerIndex > this.activePlayers) playerIndex = 0;

        nextPlayer = playerIndex + 1;
        if (nextPlayer > this.activePlayers) nextPlayer = 0;
        
        this.currentPlayer = this.getPlayer(playerIndex)
        this.currentPlayer.getReady(this.getPlayer(nextPlayer), (isEnemyAlive: boolean) => {
            console.log(isEnemyAlive)
            if(isEnemyAlive) {
                this.nextPlayer(playerIndex + 1);
            } else {
                this.endGame(playerIndex);
            }
        })

        this.currentTurn++;
    }

    /**
     * Resets all parameters
     */
    resetAll() {

        // Delete all player from DOM
        if (PlatziGame.players.length > 0) {
            for (let index = 0; index < PlatziGame.players.length; index++) {
                const element = PlatziGame.players[index];
                element.unregisterPlayerDOMElements();
            }
        }
        
        PlatziGame.players = []
        Player.playerNumber = 1;
        this.activePlayers = 0;
        this.currentTurn = 0;
    }

}

export default PlatziGame;