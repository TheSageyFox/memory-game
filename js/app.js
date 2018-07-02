//create an array to hold the name of each of the cards that will be used during the game play. There should be eight unique names/IDs,
// each of the names should be listed twice for a total of sixteen cards.
let cards = ['fa-diamond', 'fa-diamond',
		     'fa-paper-plane-o', 'fa-paper-plane-o',
		     'fa-anchor', 'fa-anchor',
		     'fa-bolt', 'fa-bolt',
		     'fa-cube', 'fa-cube',
		     'fa-leaf', 'fa-leaf',
		     'fa-bicycle', 'fa-bicycle',
		     'fa-bomb', 'fa-bomb'];
let openCards = [];
let matches = 0;
//This selects the location of the deck within the DOM. This is where the programmatically created deck will be populated.
let deck = document.querySelector('.deck');
//mapping through the cards array allows you to create the playing deck programmatically, with a few lines of code rather than having 
//to write out the entire deck's HTML code. It allows you to feed the new array into the shuffle function which will create a unique 
//deck pattern on page reload or when the game is reset.
let indCard = cards.map(function generateCard(card){
	return `<li class="card" id="${card}"><i class="fa ${card}"></i></li>`;
});
//This selects the location of the moves counter within the game and sets the initial move counter to zero.
let moves = document.getElementById('moves').innerHTML = 0;
moves = 0;
//Creates the deck and inserts it into the DOM in index.html. The join('') method changes the array of indCard into a string.
deck.innerHTML = shuffle(indCard).join('');

//JS for Modal
let modal = document.querySelector('#win');
let close = document.querySelector('.close');
//This function opens the modal upon completion of the game. It is called in the flipCard function where the number of matches
//is assessed on each card flip. The first three lines of code in the function select the final number of stars, moves and time upon
//winning the game. It is then fed into the HTML of the modal residing in index.html. 
//The game timer is stopped by the stopTime(); function.
//The modal's CSS display attribute is changed from display:none to display:block to allow the modal to appear upon winning. 
function openModal(){
	document.querySelector('#final-stars').innerHTML = document.querySelector('.stars').innerHTML;
	document.querySelector('#final-time').innerHTML = document.querySelector('.timer').innerHTML;
	document.querySelector('#final-moves').innerHTML = moves;
	$('#win').attr('style', 'display:block');
	stopTime();
}
//Closes the modal by changing the CSS style attribute of display from block to none. 
function closeModal(){
	$('#win').attr('style', 'display:none');
}
//Creates a function to reset the game from the modal. Using this option the modal is closed and the game reset via the 
//reset(); function.
function resetWithModal(){
	closeModal();
	reset();
}
//Utilizes jQuery to manipulate the modal's selection buttons to close, start a new game or exit the modal without starting a 
//new game. 
$('.close').click(closeModal);
$('#no').click(closeModal);
$('#yes').click(resetWithModal);
//This function 'flips' the cards, checks the cards for a match, flips them back over if there is no match, checks for winning 
//conditions, and adjusts the number of matches. The first line is a conditional that checks the clicked card to make sure it does not 
//contain the 'open, show or match' class. If the cards do not contain any of these three classes the object data is then pushed into 
//the openCards array. The 'flipped' card then has the open and show class added to it to reveal the card's symbol. If there is two
//cards "flipped" the conditional then checks if the id of the first card added to the openCards array matches the id of the second 
//card in the openCards array. If the ids match, the match class is added to the cards, the openCards array is cleared, and the matches
//count has one match added to it. If the match count equals eight the game is won and the winner's modal is trigger using the 
//openModal function. Otherwise the classes of 'open' and 'show' are removed from the cards allowing them to be 'flipped' back over
//
function flipCard(){
	if(!this.classList.contains('open show')&&!this.classList.contains('match')){
		openCards.push(this);
		$(this).addClass('open show');
			if(openCards.length == 2){
				if(openCards[0].id === openCards[1].id){
					$(openCards[0]).addClass('match');
					$(openCards[1]).addClass('match');
					openCards = [];
					matches += 1;
						if (matches == 8){
						openModal();
						};
				}else{
					setTimeout(function(){
					openCards.forEach(function(){
						$('.card').removeClass('open show');
					});
					openCards = [];
				}, 500);
				}
			}
	};
}
//Using jQuery this sets an event listener for 'click' on the .card class. When a card is clicked on, the flipCard(); function will run.
$('.card').click(flipCard);
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array){
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
/* Star Score*/
$('.card').click(moveCounter);

function moveCounter(){
	moves += 1;
	document.querySelector('.moves').innerHTML = moves;
	if (moves > 0 && moves < 20){
			starHTML(3);
		}else if (moves >= 21 && moves < 40){
			starHTML(2);
		}else if (moves >= 41 && moves < 60){
			starHTML(1);
		}else if (moves > 61){
			starHTML(0);
		}
}
function starHTML(starsLeft){
		let star = "";
		for(let i = 0; i<starsLeft; i++){
		star += '<li><i class="fa fa-star"></i></li>'
		}
		document.querySelector('.stars').innerHTML = star;
}
/* Timer Function - design created using code found at: https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript*/
let minutesLabel = document.getElementById('minutes');
let secondsLabel = document.getElementById('seconds');
let totalSeconds = 0;
let timer = setInterval(setTime, 1000);

function pad(val){
	let valString = val + "";
	if(valString.length < 2){
		return '0' +valString;
	}else{
		return valString;
	}
}

function setTime(){
	++totalSeconds;
	secondsLabel.innerHTML = pad(totalSeconds%60);
	minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
}

function stopTime(){
	clearInterval(timer);
}
/*Reset Function */
function reset(){
	moves = document.querySelector('.moves').innerHTML = 0;
	deck.innerHTML = shuffle(indCard).join('');
	$('.card').click(flipCard);
	$('.card').click(moveCounter);
	matches = 0;
	totalSeconds = 0;
	secondsLabel.innerHTML = '00';
	minutesLabel.innerHTML = '00';
	let timer = setInterval(setTime, 1000);
	starHTML(3);
}
$('#reset').click(reset);