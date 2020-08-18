import { IPlayerOptions } from "../interfaces/playerOptions.interface";

import { CountUp, CountUpOptions } from "countup.js";
import { fromEvent, Observable, Subject } from "rxjs";
import { take } from "rxjs/operators";
import generatePlayerCardTemplate from "../templates/player.template";

class Player {

    /**
     * The current player
     */
    static playerNumber = 1;

    /**
     * Player configuration options
     */
    private _playerOptions: IPlayerOptions;

    private playerPlayButton: HTMLDivElement;
    private playerLife: HTMLElement;
    private playerProgress: HTMLElement;

    private playersContainer: HTMLElement;
    private playerNode: HTMLDivElement;

    /**
     * Register attack action when created
     */
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

    /**
     * Expose current player options
     */
    get playerOptions() {
        return this._playerOptions;
    }

    /**
     * Prepare the player yo play and attack
     * @param enemy enemy player
     * @param callback action after attack
     */
    getReady(enemy: Player, callback: CallableFunction) {
        this.playerPlayButton.classList.remove('disable')
        const obs = this.playerAttackAction.pipe(take(1)).subscribe(() => {
            const isEnemyAlive = this.attack(enemy)
            callback(isEnemyAlive);
        })
    }

    /**
     * Attack the enemy player
     * @param enemy enemy player
     * @returns if enemy player is death
     */
    attack(enemy: Player) {
        if (!enemy) return;
        this.playerPlayButton.classList.add('disable')
        return enemy.receiveDamage(this._playerOptions.attackDamage)
    }


    /**
     * Receives damage when enemy attack current player
     * @param damage damage taken
     * @returns true if current player is alive
     */
    receiveDamage(damage: number): boolean {
        let finalLife = this._playerOptions.health - damage;

        // Evoid negative health
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

        // Update current player health
        this._playerOptions.health = finalLife;
        
        return finalLife !== 0;
    }


    /**
     * Generates player in the DOM
     */
    private generate() {
        const playerTemplate = generatePlayerCardTemplate(Player.playerNumber, this._playerOptions)

        // Add player to DOM
        this.attachElementToNode(playerTemplate)

        // Register elements
        this.registerPlayerDOMElements();

        // Generate Listeners
        this.listerForPlayerEvents();
    }

    private attachElementToNode(element: string) {
        this.playersContainer= document.getElementById('players');
        this.playerNode = document.createElement('div');
        this.playerNode.innerHTML = element;
        this.playersContainer.appendChild(this.playerNode)
    }

    /**
     * Registers player DOM elements
     */
    private registerPlayerDOMElements(): void {
        this.playerLife = document.getElementById(`p${Player.playerNumber}-life-percentage`);
        this.playerProgress = document.getElementById(`p${Player.playerNumber}-life-progress`);
        this.playerPlayButton = document.getElementById(`p${Player.playerNumber}-play-button`) as HTMLDivElement;
    }

    /**
     * Delete player from DOM
     */
    unregisterPlayerDOMElements(): void {
        this.playersContainer.removeChild(this.playerNode)
    }

    /**
     * Listers for player events like 'attack' when created
     */
    listerForPlayerEvents() {
        this.playerAttackAction = fromEvent(this.playerPlayButton, 'click');
    }

}

export default Player;