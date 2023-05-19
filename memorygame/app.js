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

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
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
//check for matches
function checkForMatch() {
  var cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]
  if (cardsChosen[0] === cardsChosen[1]) {
    alert('You found a match')
    cards[optionOneId].setAttribute('src','image1')
    cards[optionTwoId].setAttribute('src','image1')
    cardsWon.push(cardsChosen)
  } else {
    cards[optionOneId].setAttribute('src','blank.png')
    cards[optionTwoId].setAttribute('src','blank.png')
    alert('Sorry, try again')
  }
  cardsChosen = []
  cardsChosenId = []
  resultDisplay.textContent = cardsWon.length
  if (cardsWon.length === cardArray.length/2) {
    resultDisplay.textContent = 'Congratulations! You found them all'
  }
}

//flip your card
function flipCard() {
  var cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500)
  }
}

createBoard()


console.log(grid)
