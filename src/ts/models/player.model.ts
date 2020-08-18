import { IPlayerOptions } from "../interfaces/playerOptions.interface";

import { CountUp, CountUpOptions } from "countup.js";
import { fromEvent, Observable, Subject } from "rxjs";
import { take } from "rxjs/operators";
import Swal from 'sweetalert2'
import generatePlayerCardTemplate from "../templates/player.template";

class Player {

    static playerNumber = 1;

    private _playerOptions: IPlayerOptions;

    private playerPlayButton: HTMLDivElement;
    private playerLife: HTMLElement;
    private playerProgress: HTMLElement;

    private playersContainer: HTMLElement;
    private playerNode: HTMLDivElement;

    playerAttackAction: Observable<Event>;

    constructor() {
        this._playerOptions =  {
            name: `Player ${Player.playerNumber}`,
            health: 100,
            attackDamage: Math.floor(Math.random() * (30 - 20) + 20)
        }
        this.generate();
        Player.playerNumber++;   
    }

    get playerOptions() {
        return this._playerOptions;
    }

    getReady(enemy: Player, callback: CallableFunction) {
        this.playerPlayButton.classList.remove('disable')
        const obs = this.playerAttackAction.pipe(take(1)).subscribe(() => {
            const isEnemyAlive = this.attack(enemy)
            callback(isEnemyAlive);
        })
    }

    attack(enemy: Player) {
        if (!enemy) return;
        this.playerPlayButton.classList.add('disable')
        return enemy.receiveDamage(this._playerOptions.attackDamage)
    }
    inspect() {
        console.log(this._playerOptions);
    }

    receiveDamage(damage: number): boolean {
        let finalLife = this._playerOptions.health - damage;

        if (finalLife < 0) finalLife = 0;
    
        const options: CountUpOptions = {
            startVal: this._playerOptions.health,
            duration: 1.5,
            suffix: '%'
        };

        let lifeChange = new CountUp(this.playerLife, finalLife, options);

        if (!lifeChange.error) {
            this.playerProgress.style.width = `${finalLife}%`
            lifeChange.start();
        } else {
          console.error(lifeChange.error);
        }

        this._playerOptions.health = finalLife;
        
        return finalLife !== 0;
    }


    private generate() {
        const playerTemplate = generatePlayerCardTemplate(Player.playerNumber, this._playerOptions)
        // `
        //     <div class="player">
        //         <div id="player-${Player.playerNumber}" class="player__card">
        //             <h2 class="player__card--title">${}</h2>
        //             <div class="player__info-action">
        //                 <div class="player__info-action__life">
        //                     <div id="p${Player.playerNumber}-life-percentage" class="player__info-action__life__percentage">${this._playerOptions.health}</div>
        //                     <div class="player__info-action__life__bar">
        //                         <div id="p${Player.playerNumber}-life-progress" class="player__info-action__life__bar--progress"></div>
        //                     </div>
        //                 </div>
        //                 <div id="p${Player.playerNumber}-play-button" class="player__info-action__play disable">
        //                     <p class="player__info-action__play--text">Play</p>
        //                 </div>
        //             </div>
        //             <div class="player__image"></div>
        //         </div>
        //     </div>
        // `;

        // Add player to DOM
        this.attachElementToNode(playerTemplate)

        // Register elements
        this.registerPlayerDOMElements();

        // Generate Listener
        this.listerForPlayerEvents();
    }

    private attachElementToNode(element: string) {
        this.playersContainer= document.getElementById('players');
        this.playerNode = document.createElement('div');
        this.playerNode.innerHTML = element;
        this.playersContainer.appendChild(this.playerNode)
    }

    private registerPlayerDOMElements(): void {
        this.playerLife = document.getElementById(`p${Player.playerNumber}-life-percentage`);
        this.playerProgress = document.getElementById(`p${Player.playerNumber}-life-progress`);
        this.playerPlayButton = document.getElementById(`p${Player.playerNumber}-play-button`) as HTMLDivElement;
    }

    unregisterPlayerDOMElements(): void {
        this.playersContainer.removeChild(this.playerNode)
    }

    listerForPlayerEvents() {
        this.playerAttackAction = fromEvent(this.playerPlayButton, 'click');
    }


}

export default Player;