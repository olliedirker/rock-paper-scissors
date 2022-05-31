var startButton = document.getElementById('start')
var scoresDiv = document.getElementById('scores')

var losses = 0;
var wins = 0;

var lossesTable = document.createElement('h1');
var winsTable = document.createElement('h1');

scoresDiv.append(lossesTable);
scoresDiv.append(winsTable);

//startButton.addEventListener('click', console.log('hello world'));

function game() {
    var userInput = window.prompt('Rock, Paper, Scissors?');

    var compChoices = ["Rock", "Paper", "Scissors"];

    var randomInput = Math.floor(Math.random() * compChoices.length);

    var finalCompChoice = compChoices[randomInput];

    if (userInput === finalCompChoice) {
        console.log('Tie game, try again!')
    }
    else if (userInput === 'Rock' && finalCompChoice === 'Paper') {
        console.log('You Lose, Computer Wins');
        window.confirm('You lose, computer wins');
        losses++
    }
    else if (userInput === 'Rock' && finalCompChoice === 'Scissors') {
        console.log('You Win, Computer Lose');
        window.confirm('You Win, Computer Lose');
        wins++
    }
    else if (userInput === 'Paper' && finalCompChoice === 'Rock') {
        console.log('You Win, Computer Loses');
        window.confirm('You Win, computer loses');
        wins++;
    }
    else if (userInput === 'Paper' && finalCompChoice === 'Scissors') {
        console.log('You Lose, Computer Wins');
        window.confirm('You lose, computer wins');
        losses++;
    }
    else if (userInput === 'Scissors' && finalCompChoice === 'Rock') {
        console.log('You lose, Computer wins');
        window.confirm('You lose, computer loses');
        losses++;
    }
    else if (userInput === 'Scissors' && finalCompChoice === 'Paper'){
        console.log('You Win, Computer Loses');
        window.confirm('You win, computer loses');
        wins++;
    }

    var playAgain = window.confirm('Play again?');

    if (playAgain === true){
        game();
    }else{
        return;
    }
}

 startButton.addEventListener('click',game);