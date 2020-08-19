const player1 = document.getElementById('play1')
const player2 = document.getElementById('play2')
const modal =  document.getElementById('modal')
const play_again = document.getElementById('play-again')
const percent1 = document.getElementById('percent1')
const percent2 = document.getElementById('percent2')
const bar_life1 = document.getElementById('cant-life1')
const bar_life2 = document.getElementById('cant-life2')
const gif = document.getElementById('gif')

let playerLife2 = 0
let playerLife1 = 0

init()

player1.addEventListener('click', () => {
  disablePlayer(1)
  game(1)
})

player2.addEventListener('click', () => {
  disablePlayer(2)
  game(2)
})

play_again.addEventListener('click', () => {
  console.log('play-again')
  init()
})

function init(){
  disablePlayer()
  playerLife2 = 100
  playerLife1 = 100
  modal.classList.add("none")
  gif.innerHTML = ""
  percent1.innerHTML = `${playerLife1}%`
  percent2.innerHTML = `${playerLife1}%`
  bar_life1.style.width = "100%"
  bar_life2.style.width = "100%"
}

function disablePlayer(player = 2){
  if(player === 1){
    player1.classList.add('hiden-play')
    player2.classList.remove('hiden-play')
  }
  else{
    player2.classList.add('hiden-play')
    player1.classList.remove('hiden-play')
  }
}

function randomAttack(){
  let attack = Math.floor(Math.random() * 10) + 1
  return attack
}

function game(player){
  if(playerLife1 > 0 && playerLife2 > 0){
    if (player === 1){
      playerLife2 -= randomAttack()
      percent2.innerHTML = `${playerLife2}%`
      bar_life2.style.width = `${playerLife2}%`
      if(playerLife2 <= 0){
        winner(1)
      }
    } else if (player === 2){
      playerLife1 -= randomAttack()
      percent1.innerHTML = `${playerLife1}%`
      bar_life1.style.width = `${playerLife1}%`
      if(playerLife1 <= 0){
        winner(2)
      }
    }
  }
}

function winner(player){
  modal.classList.remove("none")
  giphy()
  let win = `Player ${player}`
  const playerLabel = document.getElementById('winner')
  playerLabel.innerHTML = win
}

async function giphy(){
  const giphyParams = {
		baseURL: "https://api.giphy.com/v1/gifs/",
		type: "random",
		apiKey: "iUF8SB6tppRCuB5bviHb57mdpcO7JKhH",
		tag: "fail",
		rating: "pg-13"
	}
  const URL = `${giphyParams.baseURL}${giphyParams.type}?api_key=${giphyParams.apiKey}&tag=${giphyParams.tag}&rating=${giphyParams.rating}`
  let api = await fetch(URL)
  let response = await api.json()

  gif.innerHTML = `<img src="${response.data.image_original_url}" alt="instagram"> `
}