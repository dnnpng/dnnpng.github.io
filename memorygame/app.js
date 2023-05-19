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

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
const attemptDisplay = document.querySelector('#attempts');
var cardsChosen = [];
var cardsChosenId = [];
var attempts = 0;
var cardsWon = [];

//creating board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src', 'blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    }
}

//check match
function checkForMatch() {
    attempts++;
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
        cards[optionOneId].setAttribute('src', 'yes.png');
        cards[optionTwoId].setAttribute('src', 'yes.png');
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'blank.png');
        cards[optionTwoId].setAttribute('src', 'blank.png');
    }
    cardsChosen = [];
    cardsChosenId = [];
    attemptDisplay.textContent = attempts;
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations, you found them all!';
    }
}

//flip card
function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}

createBoard ();

})