const getDeck = document.getElementsByClassName('deck');
const myDeck = getDeck[0];

/*
 * Create a list that holds all of your cards
 */

const deck = [];
const cardValues = [
'<i class="fa fa-anchor"></i>',
'<i class="fa fa-anchor"></i>',
'<i class="fa fa-bicycle"></i>',
'<i class="fa fa-bicycle"></i>',
'<i class="fa fa-bolt"></i>',
'<i class="fa fa-bolt"></i>',
'<i class="fa fa-bomb"></i>',
'<i class="fa fa-bomb"></i>',
'<i class="fa fa-cube"></i>',
'<i class="fa fa-cube"></i>',
'<i class="fa fa-diamond"></i>',
'<i class="fa fa-diamond"></i>',
'<i class="fa fa-leaf"></i>',
'<i class="fa fa-leaf"></i>',
'<i class="fa fa-paper-plane-o"></i>',
'<i class="fa fa-paper-plane-o"></i>'
];

shuffle(cardValues);

let cardString = "";
for (let i = 0; i < 12; i++) {
  const newCard = '<li class="card"></li>';
  cardString += newCard;
};

/* Display the cards on the page  */
myDeck.innerHTML = cardString;

/* Select all cards on the board */
const myCards = document.getElementsByClassName('card');


/*
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */



// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}



/* Adding Click handler to cards on the board */
for (let i=0; i<myCards.length; i++){
    myCards[i].innerHTML = cardValues[i];
    myCards[i].addEventListener('click', function(){
        // console.log('clicked');
        this.className += ' open show';

    });
};


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
