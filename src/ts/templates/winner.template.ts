import { IPlayerOptions } from "../interfaces/playerOptions.interface";


    // <img src="${url}"/>
const generateWinnerModalTemplate = ({ images: { original: { url } } }, { name }: IPlayerOptions) => `
    <div class="winner__content">
        <div class="winner__content__image">
            <img src="${ url }"/>
        </div>
        <div class="winner__content__congrats">
            <p>The winner is ${ name }</p>
            <p>Player 1</p>
            <button id="play-again" class="play-again" type="button">Play Again</button>
        </div>
    </div>
`

export default generateWinnerModalTemplate;