import Player from "./player.model";
import Swal from "sweetalert2";
import { environment } from "../env";
import generateWinnerModalTemplate from "../templates/winner.template";
import { IPlayerOptions } from "../interfaces/playerOptions.interface";

class PlatziGame {

    private static GAME_INSTANCE: PlatziGame;
    private static players: Player[];
    static isGameRunning;
    activePlayers: number;
    playerTurn: number;
    currentPlayer: Player;


    private constructor() {
        PlatziGame.players = []
        PlatziGame.isGameRunning = true;
        this.activePlayers = 0;
        this.playerTurn = 0;
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
        const modalContainer: HTMLElement = document.getElementById('modal');
        const child = document.createElement('div')
        child.innerHTML = modalTemplate;
        child.className = "winner"
        modalContainer.appendChild(child);
    }

    startGame() {
        this.activePlayers = PlatziGame.players.length - 1;

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
    }

    resetStats() {
        PlatziGame.players = []
        this.activePlayers = 0;
        this.playerTurn = 0;
    }

}

export default PlatziGame;