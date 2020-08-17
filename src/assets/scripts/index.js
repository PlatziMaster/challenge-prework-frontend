const buttonPlayerOne = document.getElementById('player-one')
const buttonPlayerTwo = document.getElementById('player-two')
const liveBarOne = document.getElementById('liveBar-playerOne')
const liveBarTwo = document.getElementById('liveBar-playerTwo')
const livePercentOne = document.getElementById('livePercent-playerOne')
const livePercentTwo = document.getElementById('livePercent-playerTwo')
const modal = document.getElementById('modal')
const randomGif = document.getElementById('random-gif')
const winner = document.getElementById('winner')
const buttonReset = document.getElementById('button-reset')
const modalBackground = document.getElementById('modal--back')
const API_URL = 'https://api.giphy.com/v1/gifs/random?api_key=7uYc58im8HJepaOblr6SvDm6mQ95Kzlu&tag=&rating=g'

const PLAYER_DEATH = 0
const MAX_POWER = 25
const MIN_POWER = 14
let auxToggle = true

let playerOneLive = 100
let playerTwoLive = 100

const anyPlayerIsAlive = () => playerOneLive > PLAYER_DEATH && playerTwoLive > PLAYER_DEATH

const calcPower = () => Math.round((Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER))

const playerOneAttack = () => playerTwoLive = playerTwoLive - calcPower()
const playerTwoAttack = () => playerOneLive = playerOneLive - calcPower()

const turnToPlayer = () => {
  fight()
  toggleAux()
  disableButton()
}

const toggleAux = () => auxToggle ? auxToggle = false : auxToggle = true

const fight = () => {

  if (auxToggle && anyPlayerIsAlive()) {
    playerOneAttack()
    drawPlayerTwoLive()
    if (playerTwoLive <= PLAYER_DEATH) {
      displayWinner()
    }
  } else if (!auxToggle && anyPlayerIsAlive()) {
    playerTwoAttack()
    drawPlayerOneLive()
    if (playerOneLive <= PLAYER_DEATH) {
      displayWinner()
    }
  } 
}
const disableButton = () => {
  if (!auxToggle) {
    buttonPlayerTwo.disabled = false
    buttonPlayerOne.disabled = true
    buttonPlayerOne.classList.add("button--play-disabled")
    buttonPlayerTwo.classList.remove("button--play-disabled")
  } else {
    buttonPlayerTwo.disabled = true
    buttonPlayerOne.disabled = false
    buttonPlayerOne.classList.remove("button--play-disabled")
    buttonPlayerTwo.classList.add("button--play-disabled")
  }
}

const resetButtons = () => {
  if (!auxToggle) {
    auxToggle = true
    buttonPlayerOne.classList.remove("button--play-disabled")
    buttonPlayerTwo.classList.add("button--play-disabled")
    buttonPlayerTwo.disabled = true
    buttonPlayerOne.disabled = false
  }
}

const displayWinner = () => {
  fetchImage(API_URL)
  if (playerOneLive <= PLAYER_DEATH) {
    winner.innerHTML = 'Player 2'
  } else {
    winner.innerHTML = 'Player 1'
  }
  modal.style.display = 'block'
  modalBackground.style.display = 'block'
}
const drawPlayerOneLive = () => {
  liveBarOne.style.borderRadius = "30px 0px 0px 30px"
  liveBarOne.style.width = `${playerOneLive}%`
  livePercentOne.innerHTML = `${playerOneLive}%`
}
const drawPlayerTwoLive = () => {
  liveBarTwo.style.borderRadius = "30px 0px 0px 30px"
  liveBarTwo.style.width = `${playerTwoLive}%`
  livePercentTwo.innerHTML = `${playerTwoLive}%`
}

const resetGame = () => {
  playerOneLive = 100
  playerTwoLive = 100
  drawPlayerOneLive()
  drawPlayerTwoLive()
  liveBarOne.style.borderRadius = "30px 30px 30px 30px"
  liveBarTwo.style.borderRadius = "30px 30px 30px 30px"
  resetButtons()
  modal.style.display = "none"
  modalBackground.style.display = "none"
}
buttonPlayerOne.addEventListener('click', turnToPlayer)
buttonPlayerTwo.addEventListener('click', turnToPlayer)
buttonReset.addEventListener('click', resetGame)

const fetchImage = (URL) => {
  fetch(URL)
    .then( response => response.json())
    .then(data => data.data.image_original_url)
    .then(imgSrc => randomGif.src = imgSrc)
    .catch(error => {
      randomGif.src = './assets/images/error.png'
      console.log(error)
    })
}
