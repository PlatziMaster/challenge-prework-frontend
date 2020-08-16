import Player from './models/player.model';
import sleep from './utils/sleep.utility';

const firstPlayerRef: HTMLElement = document.getElementById('first-player');
const firstPlayerLifePercentage: HTMLElement = document.getElementById('p1-life-percentage');
const firstPlayerLifeProgress: HTMLElement = document.getElementById('p1-life-progress');
const firstPlayerPlayButton: HTMLElement = document.getElementById('p1-play-button');

const secondPlayerRef: HTMLElement = document.getElementById('second-player');
const secondPlayerLifePercentage: HTMLElement = document.getElementById('p2-life-percentage');
const secondPlayerLifeProgress: HTMLElement = document.getElementById('p2-life-progress');
const secondPlayerPlayButton: HTMLElement = document.getElementById('p2-play-button');

const firstPlayer: Player = new Player(firstPlayerRef);
const secondPlayer: Player = new Player(firstPlayerRef);

firstPlayer.inspect()

function fillPercentage(value: number): void {
    firstPlayerLifePercentage.innerHTML = `${value}%`
    firstPlayerLifeProgress.style.width = `${value}%`
}

setTimeout(() => {
    console.log('firstPlayerLifePercentage :>> ', firstPlayerLifePercentage);
    console.log('firstPlayerLifePercentage :>> ', firstPlayerLifePercentage.innerHTML);
    let initialvalue: string = firstPlayerLifePercentage.innerHTML;
    initialvalue = initialvalue.substring(0, initialvalue.length - 1)
    console.log('initialvalue :>> ', initialvalue);
    const finalValue: number = 75;
    for (let index = Number(initialvalue); index >= finalValue; index--) {
        console.log('index :>> ', index);
        fillPercentage(index)
        sleep(300);
    }
    console.log('firstPlayerLifeProgress :>> ', firstPlayerLifeProgress);
    // firstPlayerLifeProgress.innerHTML = "75%"
    // firstPlayerLifeProgress.style.width ="75%"
}, 2500);
