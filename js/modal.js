let modal = document.getElementById("modal");
let container = document.getElementById("container");
let winner = document.getElementById("winner");
let repetir = document.getElementById("play_again");
let play = document.getElementById("Button");
play.addEventListener("click", function(){
    modal.style.display = "block"
})
modal.addEventListener("click", function(){
    modal.style.display = "block"
})

repetir.addEventListener("click", function(){
    modal.style.display = "none"
})