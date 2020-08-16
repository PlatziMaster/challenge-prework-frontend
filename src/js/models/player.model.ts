import { CountUp, CountUpOptions } from "countup.js";

class Player {

    static playerNumber = 1;

    private playerOptions = {
        name: `Player ${Player.playerNumber}`,
        health: 100,
        attackDamage: Math.floor(Math.random() * (15 - 10) + 10)
    }

    private playerPlayButton: HTMLDivElement;
    private playerLife: HTMLElement;
    private playerProgress: HTMLElement;
    private playerNode: HTMLDivElement;

    constructor() {
        this.generate();
        Player.playerNumber++;
    }

    private prepareAttack(enemy: Player, callback: CallableFunction) {
        enemy.receiveDamage(this.playerOptions.attackDamage)
        this.playerPlayButton.classList.add('disable')
        if (callback) callback();
    }

    getReady(enemy: Player, callback: CallableFunction) {
        this.playerPlayButton.classList.remove('disable')
        this.playerPlayButton.addEventListener('click', () => this.prepareAttack(enemy, callback));
    }

    endTurn(enemy: Player, callback: CallableFunction) {
        this.playerPlayButton.removeEventListener('click', () => this.prepareAttack(enemy, callback));
    }

    inspect() {
        console.log(this.playerOptions);
    }

    attack(enemy: Player) {
        enemy.receiveDamage(this.playerOptions.attackDamage)
    }

    receiveDamage(damage: number) {
        // this.playerOptions.health = this.playerOptions.health - damage;
    
        // if (player === 1) {
        //     playerLifePercentage = firstPlayerLifePercentage;
        //     playerLifeProgress = firstPlayerLifeProgress
        //     let initial: string = firstPlayerLifePercentage.innerHTML;
        //     initialValue = Number(initial.substring(0, initial.length - 1))
        // } else if (player === 2) {
        //     playerLifePercentage = secondPlayerLifePercentage;
        //     playerLifeProgress = secondPlayerLifeProgress
        //     let initial: string = secondPlayerLifePercentage.innerHTML;
        //     initialValue = Number(initial.substring(0, initial.length - 1))
        // }
        
        // finalValue = initialValue - 15;
    
        // if (finalValue < 0 ) finalValue = 0;
    
        const options: CountUpOptions = {
            startVal: this.playerOptions.health,
            duration: 1.5,
            suffix: '%'
        };

        let lifeChange = new CountUp(this.playerLife, this.playerOptions.health - damage, options);

        if (!lifeChange.error) {
            this.playerProgress.style.width = `${this.playerOptions.health - damage}%`
            lifeChange.start();
        } else {
          console.error(lifeChange.error);
        }

        this.playerOptions.health = this.playerOptions.health - damage;
        
    }

    private generate() {
        const playerTemplate = `
            <div class="player">
                <div id="second-player" class="player__card">
                    <h2 class="player__card--title">${this.playerOptions.name}</h2>
                    <div class="player__info-action">
                        <div class="player__info-action__life">
                            <div id="p${Player.playerNumber}-life-percentage" class="player__info-action__life__percentage">${this.playerOptions.health}</div>
                            <div class="player__info-action__life__bar">
                                <div id="p${Player.playerNumber}-life-progress" class="player__info-action__life__bar--progress"></div>
                            </div>
                        </div>
                        <div id="p${Player.playerNumber}-play-button" class="player__info-action__play disable">
                            <p class="player__info-action__play--text">Play</p>
                        </div>
                    </div>
                    <div class="player__image"></div>
                </div>
            </div>
        `;

        // Add player to DOM
        this.attachElementToNode(playerTemplate)

        // Register elements
        this.registerPlayerDOMElements();
    }

    private attachElementToNode(element: string) {
        const playersContainer: HTMLElement = document.getElementById('players');
        this.playerNode = document.createElement('div');
        this.playerNode.innerHTML = element;
        playersContainer.appendChild(this.playerNode)
    }

    private registerPlayerDOMElements(): void {
        this.playerLife = document.getElementById(`p${Player.playerNumber}-life-percentage`);
        this.playerProgress = document.getElementById(`p${Player.playerNumber}-life-progress`);
        this.playerPlayButton = document.getElementById(`p${Player.playerNumber}-play-button`) as HTMLDivElement;
    }


}

export default Player;