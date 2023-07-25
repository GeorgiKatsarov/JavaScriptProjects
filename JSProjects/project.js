// 1. We need to know how much money is deposited 
// 2. We need to know how many lines they want to bet on
// 3. We need to know how much money is betted and to collect it
// 4. We need to spin the slot machine
// 5. Check if the user won
// 6. Give the user the reword
// 7. Play again 

const prompt = require("prompt-sync")();

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

const getBet = () => {
    while (true){
        const bet = parseFloat(prompt("How much do you want to bet: "));

        if (isNaN(bet) || bet<=0 || bet>balance){
            console.log("Please enter a valid bet!");
        }else{
            return bet;
        }
    }
}
let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet();