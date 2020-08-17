'use strict'

const winner = document.getElementById('winner')
const btn_player_1 = document.getElementById('btn_player_1')
const btn_player_2 = document.getElementById('btn_player_2')
const player_1_life = document.getElementById('player_1_life')
const player_2_life = document.getElementById('player_2_life')
const player_1_life_g = document.getElementById('player_1_life_g')
const player_2_life_g = document.getElementById('player_2_life_g')
const card__gif = document.getElementsByClassName('card__gif')[0]
const modal = document.getElementById('modal')
const span = document.getElementsByClassName('btn__play--again')[0]

const players = {
  player_1: {
    life: 100,
  },
  player_2: {
    life: 100,
  },
}

var turn = 'btn_player_1'

class Gif {
  constructor() {
    this.api_key = '6kYAkQBA8YPQLiGdydHT8mxx17PFFQzF'
  }

  async getGif() {
    let gif = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${this.api_key}&tag=winner&rating=g`,
      {
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const { data } = await gif.json()
    console.log(data.images.downsized_medium.url)
    card__gif.style.backgroundImage = `url('${data.images.downsized_medium.url}')`
  }
}

// modal.style.display = "block";

const gif = new Gif()

const lifeLevel = (life) => {
  switch (true) {
    case life > 90:
      return 'life_90'

    case life > 80:
      return 'life_80'

    case life > 70:
      return 'life_70'

    case life > 60:
      return 'life_60'

    case life > 50:
      return 'life_50'

    case life > 40:
      return 'life_40'

    case life > 30:
      return 'life_30'

    case life > 20:
      return 'life_20'

    case life > 1:
      return 'life_10'

    default:
      return 'life_0'
  }
}

const resetGamme = () => {
  players.player_1.life = 100
  players.player_2.life = 100
  player_1_life.textContent = `100%`
  player_2_life.textContent = `100%`
  player_1_life_g.className = `card_actions__percentage--graphic life_100`
  player_2_life_g.className = `card_actions__percentage--graphic life_100`
  btn_player_1.className = 'card_actions--button'
  btn_player_2.className = 'card_actions--button disabled'
  return
}

const checkWinner = () => {
  if (players.player_1.life == 0) {
    console.log('Player 2 Winner')
    resetGamme()
    gif.getGif()
    winner.textContent = 'Player 2'
    modal.style.display = 'block'
  } else if (players.player_2.life == 0) {
    console.log('Player 1 Winner')
    resetGamme()
    gif.getGif()
    winner.textContent = 'Player 1'
    modal.style.display = 'block'
  }
}

const attack = (player) => {
  let value = Math.floor(Math.random() * (30 - 0) + 0)

  if (player == 'btn_player_1') {
    let life = players.player_2.life
    life - value >= 0 ? (life -= value) : (life = 0)
    players.player_2.life = life
    player_2_life.textContent = `${players.player_2.life}%`
    player_2_life_g.className = `card_actions__percentage--graphic ${lifeLevel(
      life
    )}`
  } else {
    let life = players.player_1.life
    life - value >= 0 ? (life -= value) : (life = 0)
    players.player_1.life = life
    player_1_life.textContent = `${players.player_1.life}%`
    player_1_life_g.className = `card_actions__percentage--graphic ${lifeLevel(
      life
    )}`
  }

  checkWinner()
}

const play = (event) => {
  if (event.target.id == turn) {
    if (turn == 'btn_player_1' ) {
      btn_player_2.className = 'card_actions--button'
      btn_player_1.className = 'card_actions--button disabled'
    } else {
      btn_player_1.className = 'card_actions--button'
      btn_player_2.className = 'card_actions--button disabled'
    }
    attack(event.target.id)
    turn = turn == 'btn_player_1' ? 'btn_player_2' : 'btn_player_1'
    
  } else {
    swal("it's not your turn");
  }
}

btn_player_1.addEventListener('click', (event) => {
  play(event)
})

btn_player_2.addEventListener('click', (event) => {
  play(event)
})



span.onclick = function () {
  modal.style.display = 'none'
}
