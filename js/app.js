/*
 * Create a list that holds all of your cards
 */
let cards=[];
let openCards=[];

// let cardHTML= `<li class="card"><i class="fa ${cardClass}"></i></li>`
function flipCard(){
	if(!this.classList.contains('open show')&&!this.classList.contains('match')){
		$(this).addClass('open show');
		openCards.push(this.id);
			if(openCards.length == 2){
				if(openCards[0] === openCards[1]){
					$(openCards[0]).addClass('match');
					$(openCards[1]).addClass('match');
					console.log(openCards);
					// openCards=[];
				}else{
					setTimeout(function(){
					openCards.forEach(function(){
						$('.card').removeClass('open show');
					});
					openCards=[];
				}, 1000);}
				
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
