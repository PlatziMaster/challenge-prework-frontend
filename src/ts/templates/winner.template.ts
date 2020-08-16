import { IPlayerOptions } from "../interfaces/playerOptions.interface";


    // <img src="${url}"/>
const generateWinnerModalTemplate = ({ images: { original: { url } } }, { name }: IPlayerOptions) => `
    <div class="winner__content">
    <div class="winner__content__image">
        <img src="https://media.giphy.com/media/LmGy3kz8PliOpricMx/giphy.gif"/>
    </div>
    <div class="winner__content__congrats">
        <p>The winner is</p>
        <p>Player 1</p>
        <button class="play-again" type="button">Play Again</button>
    </div>
    </div>
`

export default generateWinnerModalTemplate;