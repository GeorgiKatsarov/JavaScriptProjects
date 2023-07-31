// 1. We need to know how much money is deposited 
// 2. We need to know how many lines they want to bet on
// 3. We need to know how much money is betted and to collect it
// 4. We need to spin the slot machine
// 5. Check if the user won
// 6. Give the user the reword
// 7. Play again 

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;
const SYMBOWS_COUNT = {
    "A":2,
    "B":4,
    "C":6,
    "D":8
}
const SYMBOWS_VALUES = {
    "A":5,
    "B":4,
    "C":3,
    "D":2
}

const deposit = () => {
    while(true){
        const depositAmount = prompt("Enter the size of your deposit: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){
            console.log("Please enter a valid deposit!");
        }else{
            return numberDepositAmount;
        }
    }
};


const getNumberOfLines = () => {
    while (true){
        const numberOfLines = parseFloat(prompt("How many lines do you want to bet on? (1,2,3): "));

        if (isNaN(numberOfLines) || numberOfLines>3 || numberOfLines<1){
            console.log("Please enter a valid number of lines!");
        }else{
            return numberOfLines;
        }
    }
}

const getBet = (balance, numberOfLines) => {
    while (true){
        const bet = parseFloat(prompt("How much do you want to bet: "));

        if (isNaN(bet) || bet <= 0 || bet > balance/numberOfLines) {
            console.log("Please enter a valid bet!");
        } else {
            return bet;
        }
    }
}

const spin = () => {
    const symbols = [];
    for (const[symbol, count] of Object.entries(SYMBOWS_COUNT)) {
        for (let i = 0; i<count; i++) {
            symbols.push(symbol);
        }
    }

    const reels = [[], [], []];
    for (let i = 0; i < COLS; i++) {
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }
    
    return reels;
}
let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
const reels = spin();
console.log(reels);
