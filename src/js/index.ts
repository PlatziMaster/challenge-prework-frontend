import Player from './models/player.model';
import init from './init';
import PlatziGame from './models/platziGame.model';

init();

// const firstPlayer: Player = new Player();
// const secondPlayer: Player = new Player();

const platziGame = PlatziGame.gameInstance();

platziGame.addNewPlayer(new Player);
platziGame.addNewPlayer(new Player);

platziGame.startGame();

// firstPlayer.inspect()
// secondPlayer.inspect()

// firstPlayer.getReady(secondPlayer);

// firstPlayer.inspect()
// secondPlayer.inspect()



// function makeDamage(player: number) {

//     let initialValue: number;
//     let finalValue: number;
//     let playerLifePercentage: HTMLElement;
//     let playerLifeProgress: HTMLElement;

//     console.log(player)

//     if (player === 1) {
//         playerLifePercentage = firstPlayerLifePercentage;
//         playerLifeProgress = firstPlayerLifeProgress
//         let initial: string = firstPlayerLifePercentage.innerHTML;
//         initialValue = Number(initial.substring(0, initial.length - 1))
//     } else if (player === 2) {
//         playerLifePercentage = secondPlayerLifePercentage;
//         playerLifeProgress = secondPlayerLifeProgress
//         let initial: string = secondPlayerLifePercentage.innerHTML;
//         initialValue = Number(initial.substring(0, initial.length - 1))
//     }
    
//     finalValue = initialValue - 15;

//     if (finalValue < 0 ) finalValue = 0;

//     const options: CountUpOptions = {
//         startVal: initialValue,
//         duration: 1.5,
//         suffix: '%'
//     };
//     let lifeChange = new CountUp(playerLifePercentage, finalValue, options);
//     if (!lifeChange.error) {
//         playerLifeProgress.style.width = `${finalValue}%`
//         lifeChange.start();
//     } else {
//       console.error(lifeChange.error);
//     }
    
// }

