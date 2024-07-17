function game(first, second) {   
    const winConditions = {
        rock: 'sizz',
        paper: 'rock',
        sizz: 'paper'
    };
    if (winConditions[first] === second) {
        return 'You win';
    } else if (first === second) {
        return 'It\'s a tie';
    } else {
        return 'You lose';
    }
}

console.log(game('rock', 'paper'));