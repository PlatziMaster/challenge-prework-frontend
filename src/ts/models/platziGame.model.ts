import Player from "./player.model";
import Swal from "sweetalert2";
import { environment } from "../env";
import generateWinnerModalTemplate from "../templates/winner.template";
import { IPlayerOptions } from "../interfaces/playerOptions.interface";
import { take } from "rxjs/operators";
import { Observable, fromEvent } from "rxjs";

class PlatziGame {

    private static GAME_INSTANCE: PlatziGame;
    private static players: Player[];
    activePlayers: number;
    currentTurn: number;
    currentPlayer: Player;

    modalContainer: HTMLElement
    playAgainButton: HTMLElement;

    playAgainAction: Observable<Event>;


    private constructor() {
        PlatziGame.players = []
        this.activePlayers = 0;
        this.currentTurn = 0;
    }

    static gameInstance() {
        if (!PlatziGame.GAME_INSTANCE) {
            PlatziGame.GAME_INSTANCE = new PlatziGame();
        }
        return PlatziGame.GAME_INSTANCE;
    }

    addNewPlayer(player: Player) {
        // PlatziGame.add(player);
        PlatziGame.players.push(player)
    }

    getPlayer(index) {
        return PlatziGame.players[index]
    }

    async endGame(playerIndex) {
        const playerData: IPlayerOptions = this.getPlayer(playerIndex).playerOptions;
        // const gifRAWData = await fetch(`http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=${environment.GIPHY_KEY}&limit=1`)
        const gifRAWData = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${environment.GIPHY_KEY}&limit=1`)
        const gifData = await gifRAWData.json()
        const gifImage = gifData.data;
        const modalTemplate: string = generateWinnerModalTemplate(gifImage, playerData)
        this.showWinnerModal(modalTemplate)
    }

    showWinnerModal(modalTemplate: string) {
        this.modalContainer = document.getElementById('modal');
        const child = document.createElement('div')
        child.innerHTML = modalTemplate;
        child.className = "winner"
        this.modalContainer.appendChild(child);

        this.playAgain(child)
    }

    playAgain(child) {
        this.playAgainButton = document.getElementById('play-again')
        this.playAgainAction = fromEvent(this.playAgainButton, 'click');
        this.playAgainAction.pipe(take(1)).subscribe(() => {
            console.log('show me babby :>> ');
            this.modalContainer.removeChild(child);
            this.startGame();
        })
        if (this.playAgainButton) {
        }
    }

    startGame(numberOfPlayers = 2) {

        this.resetAll();

        this.activePlayers = numberOfPlayers - 1

        for (let index = 0; index < numberOfPlayers; index++) {
            this.addNewPlayer(new Player);
        }

        this.nextPlayer(0);
    }

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

    resetAll() {

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