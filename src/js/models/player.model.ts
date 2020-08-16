class Player {

    playerHealthPercentage: number;
    playerInfoAction: ChildNode;


    constructor(private playerRef: HTMLElement) {
        this.playerRef = playerRef;
        this.playerHealthPercentage = 100;
        this.start();
    }

    inspect() {
        console.log(this.playerRef);
        console.log(this.playerInfoAction);
        console.log(this.playerInfoAction.childNodes);
    }

    private start() {
        if (!this.playerRef) return;

        this.playerInfoAction = this.playerRef.childNodes.item(3).childNodes.item(1);
    }
}

export default Player;