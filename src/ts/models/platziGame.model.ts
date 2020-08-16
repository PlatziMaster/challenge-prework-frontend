import Player from "./player.model";

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
        this.currentPlayer.getReady(this.getPlayer(nextPlayer), () => {
            this.nextPlayer(playerIndex + 1);
        })
    }

    endGame() {
        PlatziGame.players = []
        this.activePlayers = 0;
        this.playerTurn = 0;
    }

}

export default PlatziGame;