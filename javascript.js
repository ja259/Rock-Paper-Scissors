/* javascript.js */


const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection button');
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');

let computerScore = 1;
let playerScore = 1;

const rockIcon = "fas fa-hand-rock";
const paperIcon = "fas fa-hand-paper";
const scissorsIcon = "fas fa-hand-scissors";

const randomClasses = [rockIcon, paperIcon, scissorsIcon];
const text = document.getElementById('demo');
const text2 = document.getElementById('demo2');

const tie = ()=>{
    text.innerHTML = "It's a Tie! ";
    text.style.color = 'orange';
    text2.innerHTML = text.innerHTML;
    text2.style.color = 'orange';
}

const win = ()=>{
    text.innerHTML = "It's a Win! ";
    text.style.color = 'rgb(1, 146, 1)';
    text2.innerHTML = text.innerHTML;
    text2.style.color = 'rgb(1, 146, 1)';
}

const lose = ()=>{
    text.innerHTML = "You Lose! ";
    text.style.color = 'red';
    text2.innerHTML = text.innerHTML;
    text2.style.color = 'red';
}



const getPlayerChoice = playerInput => {
    playerInput = playerInput.toLowerCase();
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
        return "It's a tie!";
    }
    if(playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            return 'You Lose!';
        }else{
            return " It's a win!";
        }
    }
    if(playerSelection === 'paper'){
        if(computerSelection === 'scissors' || 'rock'){
            return 'You lose!';
        }else{
            return " It's a win!";
        }
    }
    if(playerSelection === 'scissors'){
        if(computerSelection === 'rock' || 'paper'){
            return 'You lose!';
        }else{
            return " It's a win!";
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