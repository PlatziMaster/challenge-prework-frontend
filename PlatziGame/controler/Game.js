

const modal = document.getElementById('modalView');
const modalGif = document.getElementById('modalGif');
const whinerLabel = document.getElementById('whinerLabel');
const healtPlayer1 = [
    document.getElementById('pHealtPlayer1'),
    document.getElementById('nHealtPlayer1'),
];
const healtPlayer2 = [
    document.getElementById('pHealtPlayer2'),
    document.getElementById('nHealtPlayer2'),
];
const healtPlayers =[ healtPlayer1,healtPlayer2];

let jugadores = [new Jugador(1),new Jugador(2)];

function hacerDañoAJugador(quienLanzoAtaque){
    const daño = jugadores[quienLanzoAtaque].hacerDaño() ;
    const quienReciveDano = (quienLanzoAtaque+1)%2;
    if(!jugadores[quienReciveDano].recibirDaño(daño)){
        MostrarModal(jugadores[quienLanzoAtaque].getId());
        return 0;
    }
    actualizarBarraDeVida(quienReciveDano);
   
}
function actualizarBarraDeVida(jugador){
    healtPlayers[jugador][0].style.flexGrow = jugadores[jugador].getHealt()
    healtPlayers[jugador][1].style.flexGrow = jugadores[jugador].getDamage()
}
function MostrarModal(jugador){
    whinerLabel.innerHTML = `Player ${jugador}`;
    obtenerGift()
    .then((gifts)=>{
        const {data} = gifts;
        const urslImages = data.map(gif => gif.images.downsized_large.url);
        let urlElegida = urslImages[Math.floor(Math.random() * urslImages.length)];
        modalGif.setAttribute('src',urlElegida);
    })
    .catch(()=>{
        console.log('error')
    })  
    modal.classList.remove('hide')
}
function obtenerGift(){
    const url = "http://api.giphy.com/v1/gifs/search?q=winner&api_key=4quN3Z1vE3QA3o0qXRor70NioXGu33cN&limit=5";
    const opts = {crossDomain: true};
    return new Promise((resolve,reject)=>{
        $
		.get(url,opts,data=>{
			resolve(data)
		})
		.fail(() => reject(id)); 
    });
}
function reStartJuego(){
    modal.classList.add('hide');
    jugadores = [new Jugador(1),new Jugador(2)];
    for(let i=0; i<2;i++){
        healtPlayers[i][0].style.flexGrow = 100;
        healtPlayers[i][1].style.flexGrow = 0;
    }
}