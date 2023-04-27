/* javascript.js */

const getPlayerChoice = playerInput => {
    playerInput = playerInput.toLowercase();
    if(playerInput === 'rock' || playerInput === 'paper' || playerInput === 'scissors'){
        return playerInput;
    } else{
        console.log('Error!');
    }
}

const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 3:
            return 'scissors';        
    }
}

const determineWinner = (playerSelection,computerSelection) => {
    if( playerSelection === computerSelection){
        return 'The game was a tie!';
    }
    if(playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            return 'You Lose! Paper beats Rock';
        }else{
            return 'Player won!';
        }
    }
    if(playerSelection === 'paper'){
        if(computerSelection === 'scissors' || 'rock'){
            return 'You lose! Scissors or rock beats paper';
        }else{
            return 'Player won!';
        }
    }
    if(playerSelection === 'scissors'){
        if(computerSelection === 'rock' || 'paper'){
            return 'You lose! Rock or paper beats scissors';
        }else{
            return 'Player won!';
        }
    }
}
function playRound(){
    let playerSelection = getPlayerChoice('rock');
    let computerSelection = getComputerChoice('scissors');
    console.log(playerSelection,computerSelection);
    console.log(determineWinner(playerSelection,computerSelection));
}
console.log(playRound());