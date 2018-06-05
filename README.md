# Memory Game Project

## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)

## Instructions for Game Play

Welcome to Fox's Memory Match. To play: Select two cards by clicking or touching a card. 
If the cards match they will stay face up, if they do not match they will turn back over. 
Continue matching the cards until all eight pairs are matched. 

When you match all the pairs, you win the game! Congratulate yourself on a job well done and feel free to start over.


## Dev Notes

This has been one of the most challenging and yet rewarding projects I have worked on to date. 
The game consists of the base code given by Udacity's FEND program, and influenced stackoverflow, and W3 Schools.

// Shuffle function http://stackoverflow.com/a/2450976
// Timer Function https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript*/
// Modal code https://www.w3schools.com/howto/howto_css_modals.asp

The code for the timer function and modal were used as a template of sorts for the code that was ultimately written for this project.

This project uses both vanilla JavaScript and JQuery to programmatically create a deck of cards for the user, shuffle the cards and place them in a 4x4 layout. Using event listeners on each of the individual cards allows for the selection or "flipping" of the cards in order to make matches. 
 
The timer function, though roughly contructed, keeps track of how long it takes the player to complete a game. The timer starts on page load and continues until all eight pairs are matched and the game is won. The timer is then displayed on the winning modal. 

The moves and star function keep track of the number of moves, and consquencially, the "star score" of the player. Each time a player clicks on a card, one move is added to the move count. The amount of stars a player has receives is based on the number of moves they have made during game play. 0-20 moves the player retains all three stars. 21-40 the player receives a score of two stars. 41-60 the player receives one star, and for games above 61 moves, the player does not receive any stars. 

The reset function on the upper right side of the playing board, completely resets the board. The timer is reset, deck reshuffled, stars refilled and moves set back to zero.

On the Winner's Modal, the player's final score, time and moves is displayed as well as the option to start another game, or simply exit the modal. If the player selects the "play again" option, the modal is closed and the game reset. Selecting the "X" option closes the modal and leaves the board, timer, score and moves set to what they were when the player won the game.  
