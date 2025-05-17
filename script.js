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

function getHumanChoice() {
    let choice = prompt("Pick one of the options (rock, paper, scissors): ");
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        let winner = 0;
        if (humanChoice === 'rock' && computerChoice === 'scissors') {
            console.log('You win! Rock beats scissors.')
        } else if (humanChoice === 'rock' && computerChoice === 'paper') {
            console.log('You lose! Paper beats rock.');
            winner = 1;
        } else if (humanChoice === 'rock' && computerChoice === 'rock') {
            console.log('Tie.');
            winner = 2;
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            console.log('You win! Scissors beats paper.')
        } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            console.log('You lose! Rock beats scissors.');
            winner = 1
        } else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
            console.log('Tie.');
            winner = 2;
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            console.log('You win! Paper beats rock.')
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            console.log('You lose! Scissors beats paper.');
            winner = 1;
        } else if (humanChoice === 'paper' && computerChoice === 'paper') {
            console.log('Tie.');
            winner = 2;
        }
        if (winner === 0) {
            humanScore++;
        } else if (winner === 1) {
            computerScore++;
        }
    }

    for (let round = 1; round <= 5; round++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log('Congratulations, you win!');
    } else if (computerScore > humanScore) {
        console.log('Sorry, you lost this time. Try again');
    } else {
        console.log('You tied!')
    }
}

playGame()
