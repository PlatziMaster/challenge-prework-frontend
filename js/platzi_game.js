document.addEventListener("DOMContentLoaded", (event) => {
  console.log('Document is ready')

  // Creo elementos HTML
  const btnPlayerOne = document.getElementById('player_one_btn')
  const numberPlayerOne = document.getElementById('player_one_number')
  const barPlayerOne = document.getElementById('player_one_bar')
  const btnPlayerTwo = document.getElementById('player_two_btn')
  const numberPlayerTwo = document.getElementById('player_two_number')
  const barPlayerTwo = document.getElementById('player_two_bar')
  const againBtn = document.getElementById('again_btn')
  const modal = document.getElementById('modal')
  const winner = document.getElementById('winner')

  class Player {
    constructor(name, life = 100) {
      this.name = name
      this.life = life
    }
  }

  function initialize() {
    hideModal()
    if(btnPlayerOne.classList.contains('blocked') ){
      btnPlayerOne.classList.remove('blocked')
    }
    if(!btnPlayerTwo.classList.contains('blocked')) {
      btnPlayerTwo.classList.add('blocked')
    }
    let players = [ new Player('Player 1'), new Player('Player 2')]
    numberPlayerOne.innerHTML = `${players[0].life} %`
    numberPlayerTwo.innerHTML = `${players[1].life} %`
    barPlayerOne.style.width = `${players[0].life}%`
    barPlayerTwo.style.width = `${players[1].life}%`
    let turn = 0
    let play = [ players, turn ]
    return play
  }

  function chargePower(max, min){
    let digito_aleatorio = Math.round((max - min) * Math.random()) + min;
    return digito_aleatorio;
  }

  function losingHealth(powerAttack){
    console.log('losingHealth')
    if(turn === 0) {
      players[1].life = players[1].life - powerAttack
    }else {
      players[0].life = players[0].life - powerAttack
    }
  }

  function toggleBtn(btnToRemove, btnToAdd) {
      btnToRemove.classList.remove('blocked')
      btnToAdd.classList.add('blocked')
  }

  function changeTurn() { 
    if (turn === 0) {
      turn = 1 
      toggleBtn(btnPlayerTwo, btnPlayerOne)
    }else {
      turn = 0 
      toggleBtn(btnPlayerOne,btnPlayerTwo)
    }
  }

  function updateLife(player) {
    console.log(player)
    if(turn === 0) {
      numberPlayerOne.innerHTML = `${player.life} %`
      barPlayerOne.style.width = `${player.life}%`
    }else {
      numberPlayerTwo.innerHTML = `${player.life} %`
      barPlayerTwo.style.width = `${players[1].life}%`
    }
  }

  function youWin() {
    console.log('youWin')
    if(players[turn].life <= 0) {
      changeTurn()
      console.log(`The winner is: ${players[turn].name}`)
      winner.innerHTML = `${players[turn].name}`
      modal.classList.remove('hidden')
    }
  }

  function playerAttack() {
    console.log('playerAttack')
    let powerAttack = chargePower(90, 10)
    console.log(powerAttack)
    losingHealth(powerAttack)
    console.log(players)
    changeTurn()
    console.log(turn)
    updateLife(players[turn])
    youWin()
  }

  function hideModal() {
    modal.classList.add('hidden')
  }

  function restart() {
    players[0].life = 100
    players[1].life = 100
    turn = 0
    initialize()
  }
  
  let play = initialize()
  let players = play[0]
  let turn = play[1]
  console.log("comenzo el juego.")
  btnPlayerOne.addEventListener('click', playerAttack )
  btnPlayerTwo.addEventListener('click', playerAttack )
  againBtn.addEventListener('click', restart)
});