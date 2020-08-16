import getData from '../utils/getData';

const modal = async () => {

  const modal = document.getElementById('modal');
  const overlay = document.getElementById('overlay');
  const playAgain = document.getElementById('play-again');
  const gifElement = document.getElementById('gif');

  const GIPHY_API_KEY = `f5aTC4X3IB91phUNWUuEKHPqPxVNVqBz`;
  const API_URL = `http://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}`;
  const gif = await getData(API_URL);

  const modalManager = e => {

    modal.classList.add('out');
    overlay.classList.add('out');
    modal.classList.remove('in');
    overlay.classList.remove('in');

    modal.addEventListener('animationend', () => location.reload());

  }

  playAgain.addEventListener('click', modalManager);
  gifElement.setAttribute('src', gif.data.fixed_height_downsampled_url);

}

export default modal