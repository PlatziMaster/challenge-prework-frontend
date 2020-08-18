import Player from './models/player.model';
import init from './init';
import PlatziGame from './models/platziGame.model';

init();

const platziGame = PlatziGame.gameInstance();

platziGame.startGame();