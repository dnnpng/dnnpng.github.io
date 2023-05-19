document.addEventListener('DOMContentLoaded', () => {

const cardArray = [
  {
    name: 'black',
    img: 'image1.png'
  },
  {
    name: 'black',
    img: 'image1.png'
  },
  {
    name: 'pink',
    img: 'image2.png'
  },
  {
    name: 'pink',
    img: 'image2.png'
  },
  {
    name: 'white',
    img: 'image3.png'
  },
  {
    name: 'white',
    img: 'image3.png'
  },
  {
    name: 'purple',
    img: 'image4.png'
  },
  {
    name: 'purple',
    img: 'image4.png'
  },
  {
    name: 'red',
    img: 'image5.png'
  },
  {
    name: 'red',
    img: 'image5.png'
  },
  {
    name: 'orange',
    img: 'image6.png'
  },
  {
    name: 'orange',
    img: 'image6.png'
  },
]

cardArray.sort( () => 0.5 - Math.random() )

const grid = document.querySelector('.grid')
const attemptsHolder = document.querySelector('#attemptsHolder')
const resultDisplay = document.querySelector('#resultDisplay ')
const cardsInGame = 12;

var attempts = 0;
var cardsWon = 0;
attemptsHolder.textContent = attempts;
resultDisplay.textContent = cardsWon;


var cardsChosen = []
cardsChosenId = []

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    var card = document.createElement('img')
    card.setAttribute('src','blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    grid.appendChild(card)
  }
}



function flipCard() {
  var cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500)
  }
}


//check for matches
function checkForMatch() {
  attempts++;
  const cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]
  if (cardsChosen[0] == cardsChosen[1]) {
    cardsWon++;
    cards[optionOneId].setAttribute('src','image1.png')
    cards[optionTwoId].setAttribute('src','image1.png')
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)
  } else {
    cards[optionOneId].setAttribute('src','blank.png')
    cards[optionTwoId].setAttribute('src','blank.png')
  }
  cardsChosen = []
  cardsChosenId = []

  attemptsHolder.textContent = attempts
  resultDisplay.textContent = cardsWon

  if (cardsWon.length == cardArray.length/2) {
    resultDisplay.innerHTML = 'Congratulations! You found them all'
  }
}

createBoard()


})
