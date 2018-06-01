let cards=['fa-diamond', 'fa-diamond',
		   'fa-paper-plane-o', 'fa-paper-plane-o',
		   'fa-anchor', 'fa-anchor',
		   'fa-bolt', 'fa-bolt',
		   'fa-cube', 'fa-cube',
		   'fa-leaf', 'fa-leaf',
		   'fa-bicycle', 'fa-bicycle',
		   'fa-bomb', 'fa-bomb'];
let openCards=[];
let deck = document.querySelector('.deck');
let indCard = shuffle(cards).map(function generateCard(card){
	return `<li class="card" id="${card}"><i class="fa ${card}"></i></li>`;
});

deck.innerHTML=indCard.join('');

function flipCard(){
	if(!this.classList.contains('open show')&&!this.classList.contains('match')){
		openCards.push(this);
		$(this).addClass('open show');
			if(openCards.length == 2){
				if(openCards[0].id === openCards[1].id){
					$(openCards[0]).addClass('match');
					$(openCards[1]).addClass('match');
					console.log('match');
					openCards=[];
				}else{
					setTimeout(function(){
					openCards.forEach(function(){
						$('.card').removeClass('open show');
					});
					openCards=[];
				}, 1000);
				}
			}
	};

};

$('.card').click(flipCard);


/*
 * Display the cards on the page
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
};

/* Star Score*/

let starCount = document.querySelector('.stars').innerHTML

function starScore(mCount){
	function starHTML(starsLeft){
	let star = "";
	for(let i =0; i<starsLeft; i++){
		star+= '<li><i class="fa fa-star"></i></li>'
}
document.querySelector('.stars').innerHTML = star;
};
	let sCount=document.querySelector('.stars')
	if (mCount > 0 && mCount < 10){
			sCount.innerHTML=starHTML(3);
		}else if (mCount >= 11 && mCount <20){
			sCount.innerHTML=starHTML(2);
		}else if (mCount>=21 && mCount <30){
			sCount.innerHTML=starHTML(1);
		}else if (mCount >31){
			sCount.innerHTML=starHTML(0);
		}
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
