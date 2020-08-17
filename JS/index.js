const colors = [
    '#1A46E5',

]

function resultado1(){
    let resultado = document.querySelector('.resultado');
    resultado.classList.toggle('active');

    let winner = document.getElementById('winner')
    winner.innerHTML = 'Player 2'
}

function resultado2(){
    let resultado = document.querySelector('.resultado');
    resultado.classList.toggle('active');

    let winner = document.getElementById('winner')
    winner.innerHTML = 'Player 1'
}


function botonesJuegoOne(){
    let one_button = document.querySelector('.botone');
    one_button.classList.toggle('active');
    let two_button = document.querySelector('.bottwo');
    two_button.classList.toggle('active');

    vidaPersonaje2()
}

function botonesJuegoTwo(){
    let two_button = document.querySelector('.bottwo');
    two_button.classList.toggle('active');
    let one_button = document.querySelector('.botone');
    one_button.classList.toggle('active');

    vidaPersonaje1()
}


function vidaPersonaje1(){
    
    let life_two = document.getElementById('progressone');
    let life_progress= document.getElementById('life_count_one');

    let life = life_two.clientWidth;
    
    let damage = Math.random()* (30 - 5) + 5;
    
    life = life - damage;
    life_two.style.width = life + 'px';
  
    life_percent = (life * 100) / 200

    life_progress.innerHTML= Math.round(life_percent) + '%'

    if (life <= 0){
        resultado1();
    }
}

function vidaPersonaje2(){
    
    let life_two = document.getElementById('progresstwo');
    let life_progress= document.getElementById('life_count_two');

    let life = life_two.clientWidth;
    let damage = Math.random()* (30 - 5) + 5;
    
    console.log(life);
    life = life - damage;
    life_two.style.width = life + 'px';

    life_percent = (life * 100) / 200

    life_progress.innerHTML= Math.round(life_percent) + '%'


    if (life <= 0){
        resultado2();
    }
}


function createSquare(){
    const section = document.querySelector('body');
    const square = document.createElement('span');

    let size = Math.random() * 10;
    
    number = Math.random() * (500 - 50) + 50

    square.style.width = number + 'px';
    square.style.height = number + 'px';

    square.style.top = Math.random() * innerHeight + 'px';
    square.style.left = Math.random() * innerWidth + 'px';

    const bg = colors[Math.floor(Math.random() * colors.length)]
    square.style.background = bg

    section.appendChild(square);

    setTimeout(() => {
        square.remove()
    }, 5000)
}

setInterval(createSquare, 150)