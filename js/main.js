
const imgModal = document.getElementById("modal-image")
var randon = Math.floor(Math.random() * 100)

function renderImageGif(image){    
    imgModal.setAttribute('src', image)
}

fetch(`https://pokeapi.co/api/v2/pokemon/${randon}`)
.then(response => response.json())
.then(dataImage =>{       
    renderImageGif(dataImage.sprites.front_default)
})

var clickPlayer1 = document.getElementById("player1")
var clickPlayer2 = document.getElementById("player2")
var clickClosed = document.getElementById("btn-closed")
clickPlayer1.addEventListener("click", player1)
clickPlayer2.addEventListener("click", player2)


function player1() {
    
    document.getElementById("progress-life-player2").style.backgroundColor = "#1A46E5"  

    var player1 = document.getElementById("progress-life-por-player2").innerHTML = Math.floor(Math.random() * 100) + '%'

    if (player1 === "0%") {    
        open("#miModal", "width=120,height=300,scrollbars=NO")     
        
    }
    
    console.log(`quitar vida player 2 ${player1}`)    
  
}

function  player2() {

    document.getElementById("progress-life-player1").style.backgroundColor = "#1A46E5"

    var player2 = document.getElementById("progress-life-por-player1").innerHTML = Math.floor(Math.random() * 100) + '%'

    if (player2 === "0%") {
        open("#miModal", "width=120,height=300,scrollbars=NO")                
    }

    console.log(`quitar vida player 1 ${player2}`)
}
