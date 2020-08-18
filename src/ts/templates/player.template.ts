import { IPlayerOptions } from "../interfaces/playerOptions.interface";

const generatePlayerCardTemplate = (playerNumber: number, { name, health}: IPlayerOptions) => `
    <div class="player">
        <div id="player-${playerNumber}" class="player__card">
            <h2 class="player__card--title">${name}</h2>
            <div class="player__info-action">
                <div class="player__info-action__life">
                    <div id="p${playerNumber}-life-percentage" class="player__info-action__life__percentage">${health}</div>
                    <div class="player__info-action__life__bar">
                        <div id="p${playerNumber}-life-progress" class="player__info-action__life__bar--progress"></div>
                    </div>
                </div>
                <div id="p${playerNumber}-play-button" class="player__info-action__play disable">
                    <p class="player__info-action__play--text">Play</p>
                </div>
            </div>
            <div class="player__image"></div>
        </div>
    </div>
`

export default generatePlayerCardTemplate;