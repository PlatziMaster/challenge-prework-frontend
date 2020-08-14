const $playOne = document.getElementById('playOne')
const $playTwo = document.getElementById('playTwo')
const $widthLifeOne = document.getElementById('lifeBoxOne')
const $widthLifeTwo = document.getElementById('lifeBoxTwo')
const $textOne = document.getElementById('lifePercentOne')
const $textTwo = document.getElementById('lifePercentTwo')

let playNumberOne = 100
let playNumberTwo = 100

let blockOne = true
let blockTwo = false

function changingText ($container, valorText, $content) {
  $container.innerHTML = `${valorText}%`
  borderRadiusBox($content, valorText)
  heigthBox($content, valorText)
}

function heigthBox ($container, valorText) {
  debugger
  switch (valorText) {
    case 1:
      $container.style.height = '14px'
      break;
    case 2:
      $container.style.height = '25px'
      break;
    case 3:
      $container.style.height = '27px'
      break;
    case 4:
      $container.style.height = '30px'
      break;
    case 5:
      $container.style.height = '35px'
      break;
    case 6:
      $container.style.height = '38px'
      break;
    case 7:
      $container.style.height = '38px'
      break;
    case 8:
      $container.style.height = '40px'
      break;
    default:
      $container.style.height = '44px'
      break;
  }
}

function borderRadiusBox ($container, valorText) {
  debugger
  switch (valorText) {
    case 1:
      $container.style.borderRadius = "100px 0px 0px 100px"
      break;
    case 2:
      $container.style.borderRadius = "100px 0px 0px 100px"
      break;
    case 3:
      $container.style.borderRadius = "100px 0px 0px 100px"
      break;
    case 4:
      $container.style.borderRadius = "100px 0px 0px 100px"
      break;
    case 5:
      $container.style.borderRadius = "100px 0px 0px 100px"
      break;
    case 6:
      $container.style.borderRadius = "100px 0px 0px 100px"
      break;
    case 7:
      $container.style.borderRadius = "100px 0px 0px 100px"
      break;
    case 8:
      $container.style.borderRadius = "100px 0px 0px 100px"
      break;
    case 9:
      $container.style.borderRadius = "20px 0px 0px 20px"
      break;
    case 92:
      $container.style.borderRadius = "30px 3px 3px 30px"
      break;
    case 93:
      $container.style.borderRadius = "30px 5px 5px 30px"
      break;
    case 94:
      $container.style.borderRadius = "30px 9px 9px 30px"
      break;
    case 95:
      $container.style.borderRadius = "30px 12px 12px 30px"
      break;
    case 96:
      $container.style.borderRadius = "30px 16px 16px 30px"
      break;
    case 97:
      $container.style.borderRadius = "30px 18px 18px 30px"
      break;
    case 98:
      $container.style.borderRadius = "30px 22px 22px 30px"
      break;
    case 99:
      $container.style.borderRadius = "30px 29px 29px 30px"
      break;
    case 100:
      $container.style.borderRadius = "30px 30px 30px 30px"
      break;
    default:
      $container.style.borderRadius = "30px 0px 0px 30px"
      break;
  }

}

function blockWidth ($container, widthContent) {
  $container.style.width = `${widthContent}%`
}

function reset () {
  blockWidth($widthLifeOne, playNumberOne)
  blockWidth($widthLifeTwo, playNumberTwo)
  changingText($textOne, playNumberOne, $widthLifeOne)
  changingText($textTwo, playNumberTwo, $widthLifeTwo)
  blockOne = true
  blockTwo = false
}

function numberCheck (num, $content, $text, one, two) {
  num = num - getRandom(1, num)
  blockOne = one
  blockTwo = two
  blockWidth($content, num)
  changingText($text, num, $content)
  return num
}

$playOne.addEventListener('click', async(event) => {
  if (blockOne == true) {
    playNumberOne = numberCheck(playNumberOne, $widthLifeOne, $textOne, false, true)
  }
  if (playNumberOne == 0) {
    alert('The winner is: Player 2')
    playNumberOne = 100
    playNumberTwo = 100
    reset()
  }
})

$playTwo.addEventListener('click', async(event) => {
  if (blockTwo == true) {
    playNumberTwo = numberCheck(playNumberTwo, $widthLifeTwo, $textTwo, true, false)
  }
  if (playNumberTwo == 0) {
    alert('The winner is: Player 1')
    playNumberOne = 100
    playNumberTwo = 100
    reset()
  }
})

function getRandom (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}
