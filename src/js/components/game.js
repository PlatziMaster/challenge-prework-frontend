const game = () => {

  const perLifeUno = document.getElementById('life-percent-1');
  const lifeUno = document.getElementById('life-player-1');
  const atackUno = document.getElementById('play-1');

  const perLifeDos = document.getElementById('life-percent-2');
  const lifeDos = document.getElementById('life-player-2');
  const atackDos = document.getElementById('play-2');

  const playerWin = document.getElementById('player-win');

  let lifePerUno = 100;
  let lifeFillUno = 200;

  let lifePerDos = 100;
  let lifeFillDos = 200;

  //Ataque Player 1
  function figthUno(e) {

    const randomNum = Math.random()

    let percent = lifePerDos - Math.floor(randomNum * 100);
    let fill =  lifeFillDos - Math.floor(randomNum * 100 * 2);

    if (lifePerDos < 100 && lifeFillDos < 200) {
      if(percent < 0) {
        perLifeDos.innerHTML = `${0}%`;
        lifeDos.style.width = `${ 0}px`;

        console.log('Ganaste');
        //Abre modal cuando termina el juego
        modal.classList.add('in');
        overlay.classList.add('in');
        modal.classList.remove('out');
        overlay.classList.remove('out');
        overlay.style.visibility = 'visible';
        playerWin.innerHTML = '1';

      } else {
        perLifeDos.innerHTML = `${percent}%`;
        lifeDos.style.width = `${ fill}px`;
      }
    } else {
      perLifeDos.innerHTML = `${percent}%`;
      lifeDos.style.width = `${ fill}px`;
      lifePerDos = percent;
      lifeFillDos = fill;
    }

    //Desactivamos ataque por el turno del oponente
    atackDos.addEventListener('click', figthDos);
    atackUno.removeEventListener('click', figthUno);

    atackDos.style.backgroundColor = 'var(--color-primary)';
    atackUno.style.transform = 'scale(.99)';
    atackUno.style.backgroundColor = 'var(--color-gray-block)';
    atackUno.style.transform = 'unset';

  }

  //Ataque Player 2
  function figthDos(e) {

    const randomNum = Math.random()

    let percent = lifePerUno - Math.floor(randomNum * 100);
    let fill =  lifeFillUno - Math.floor(randomNum * 100 * 2);

    if (lifePerUno < 100 && lifeFillUno < 200) {
      if(percent < 0) {
        perLifeUno.innerHTML = `${0}%`;
        lifeUno.style.width = `${ 0}px`;

        console.log('Perdiste');
        //Abre modal cuando termina el juego
        modal.classList.add('in');
        overlay.classList.add('in');
        modal.classList.remove('out');
        overlay.classList.remove('out');
        overlay.style.visibility = 'visible';
        playerWin.innerHTML = '2';

      } else {
        perLifeUno.innerHTML = `${percent}%`;
        lifeUno.style.width = `${ fill}px`;
      }
    } else {
      perLifeUno.innerHTML = `${percent}%`;
      lifeUno.style.width = `${ fill}px`;
      lifePerUno = percent;
      lifeFillUno = fill;
    }

    //Desactivamos ataque por el turno del oponente
    atackUno.addEventListener('click', figthUno);
    atackDos.removeEventListener('click', figthDos);

    atackUno.style.backgroundColor = 'var(--color-primary)'
    atackDos.style.transform = 'scale(.99)';
    atackDos.style.backgroundColor = 'var(--color-gray-block)';
    atackDos.style.transform = 'unset';


  }
  //Comienza el juego Palyer 1, por eso desativamos Player 2
  atackDos.style.transform = 'scale(.99)';
  atackDos.style.backgroundColor = 'var(--color-gray-block)';
  atackDos.style.transform = 'unset';

  atackUno.addEventListener('click', figthUno);

}

export default game;