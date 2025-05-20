function getComputerChoice() {
    let val = Math.floor(Math.random() * 3);
    if (val === 0) {
        return 'rock';
    } else if (val === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let winner = 0;
    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        round.textContent = 'You win! Rock beats scissors.';
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        round.textContent = 'You lose! Paper beats rock.';
        winner = 1;
    } else if (humanChoice === 'rock' && computerChoice === 'rock') {
        round.textContent = 'Tie.';
        winner = 2;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        round.textContent = 'You win! Scissors beats paper.';
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        round.textContent = 'You lose! Rock beats scissors.';
        winner = 1
    } else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
        round.textContent = 'Tie.';
        winner = 2;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        round.textContent = 'You win! Paper beats rock.';
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        round.textContent = 'You lose! Scissors beats paper.';
        winner = 1;
    } else if (humanChoice === 'paper' && computerChoice === 'paper') {
        round.textContent = 'Tie.';
        winner = 2;
    }
    if (winner === 0) {
        humanScore++;
    } else if (winner === 1) {
        computerScore++;
    }
    human.textContent = `Human: ${humanScore}`;
    computer.textContent = `Computer: ${computerScore}`;
}

let humanScore = 0;
let computerScore = 0;

let choices = document.querySelector('#choices');
let round = document.querySelector('#round');
let human = document.querySelector('#human');
let computer = document.querySelector('#computer');

choices.addEventListener('click', (event) => {
    let computerSelection = getComputerChoice();
    let choice = event.target;
    playRound(choice.id, computerSelection);

    if (humanScore === 5) {
        winner.textContent = 'Congratulations, you win!';
        restart();
    } else if (computerScore === 5) {
        winner.textContent = 'Sorry, you lost this time. Try again.';
        restart();
    }
});

function restart() {
    let restartBtn = document.createElement('button');
    restartBtn.textContent = 'Play again';
    let body = document.querySelector('body');
    restartBtn.addEventListener('click', () => {
        humanScore = 0;
        computerScore = 0;
        round.textContent = '';
        winner.textContent = '';
        human.textContent = 'Human: 0';
        computer.textContent = 'Computer: 0';
        body.removeChild(restartBtn);
    });
    body.appendChild(restartBtn);
}