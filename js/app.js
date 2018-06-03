let cards=['fa-diamond', 'fa-diamond',
		   'fa-paper-plane-o', 'fa-paper-plane-o',
		   'fa-anchor', 'fa-anchor',
		   'fa-bolt', 'fa-bolt',
		   'fa-cube', 'fa-cube',
		   'fa-leaf', 'fa-leaf',
		   'fa-bicycle', 'fa-bicycle',
		   'fa-bomb', 'fa-bomb'];
let openCards=[];
let matches = 0;
let deck=document.querySelector('.deck');
let indCard=cards.map(function generateCard(card){
	return `<li class="card" id="${card}"><i class="fa ${card}"></i></li>`;
});
let moves=document.getElementById('moves').innerHTML=0;
moves=0;
deck.innerHTML=shuffle(indCard).join('');

//JS for Modal 
let modal=document.querySelector('#win');
let close=document.querySelector('.close');

function openModal(){
	document.querySelector('#final-stars').innerHTML = document.querySelector('.stars').innerHTML;
	document.querySelector('#final-time').innerHTML = document.querySelector('.timer').innerHTML;
	document.querySelector('#final-moves').innerHTML = moves;
	$('#win').attr('style', 'display:block');
}
function closeModal(){
	$('#win').attr('style', 'display:none');
}
function resetWithModal(){
	closeModal();
	reset();
}
$('.close').click(closeModal);
$('#no').click(closeModal);
$('#yes').click(resetWithModal);

function flipCard(){
	if(!this.classList.contains('open show')&&!this.classList.contains('match')){
		openCards.push(this);
		$(this).addClass('open show');
			if(openCards.length == 2){
				if(openCards[0].id === openCards[1].id){
					$(openCards[0]).addClass('match');
					$(openCards[1]).addClass('match');
					openCards=[];
					matches +=1;
						if (matches == 8){
						openModal();
						};
				}else{
					setTimeout(function(){
					openCards.forEach(function(){
						$('.card').removeClass('open show');
					});
					openCards=[];
				}, 500);
				} 
			} 
	};

};

$('.card').click(flipCard);


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
$('.card').click(moveCounter);
function moveCounter(){
	moves += 1;
	document.querySelector('.moves').innerHTML = moves;
};	
function starScore(){
	let star = "";
	function starHTML(starsLeft){
		for(let i =0; i<starsLeft; i++){
		star+= '<li><i class="fa fa-star"></i></li>'
		}
		document.querySelector('.stars').innerHTML = star;
	};
	let mCount=document.querySelector('.moves').innerText;
	if (mCount > 0 && mCount < 10){
			starHTML(3);
		}else if (mCount >= 11 && mCount <20){
			starHTML(2);
		}else if (mCount >=21 && mCount <30){
			starHTML(1);
		}else if (mCount >31){
			starHTML(0);
		}
};
/*
 * set up the event listener for a card. If a card is clicked:
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
/* Timer Function borrowed from code found at: 
https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript*/
let minutesLabel=document.getElementById('minutes');
let secondsLabel=document.getElementById('seconds');
let totalSeconds=0;

let timer = setInterval(setTime, 1000);
function pad(val){
	let valString = val + "";
	if(valString.length < 2){
		return '0' +valString;
	}else{
		return valString;
	}
};
function setTime(){
	++totalSeconds;
	secondsLabel.innerHTML=pad(totalSeconds%60);
	minutesLabel.innerHTML=pad(parseInt(totalSeconds/60));
};
function stopTime(){
	clearInterval(timer);
};

/*Reset Function */
function reset(){
	moves=document.querySelector('.moves').innerHTML=0;
	deck.innerHTML=shuffle(indCard).join('');
	$('.card').click(flipCard);
	$('.card').click(moveCounter);
	totalSeconds=0;
	secondsLabel.innerHTML='00';
	minutesLabel.innerHTML='00';
};
<<<<<<< HEAD
$('#reset').click(reset);
||||||| parent of f06a5b2... Feat: modal for winning fully functional
$('#reset').click(reset);


//JS for Modal 
let modal=document.querySelector('#win');
let close=document.querySelector('.close');
let fStars=document.querySelector('#final-stars');
let stars=document.querySelector('.stars').innerHTML;
let fTime=document.querySelector('#final-time');
let fMoves=document.querySelector('#final-moves');
function openModal(){
	fStars.innerHTML = document.querySelector('.stars').innerHTML;
	fTime.innerHTML = document.querySelector('.timer').innerHTML;
	fMoves.innerHTML = moves;
	$('#win').attr('style', 'display:block');
}
function closeModal(){
	$('#win').attr('style', 'display:none');
}
function resetWithModal(){
	closeModal();
	reset();
}
$('.close').click(closeModal);
$('#no').click(closeModal);
$('#yes').click(resetWithModal);
=======
$('#reset').click(reset);


>>>>>>> f06a5b2... Feat: modal for winning fully functional
