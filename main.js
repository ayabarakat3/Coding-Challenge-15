// Task 4: Create the Main Application
import { calculatePortfolioValue, getPortfolioAllocation } from "./portfolio.js";
import { Transaction } from "./transaction.js";
// Code meant to import necessary information from other files.

function displayPortfolio() {
    let portfolioValue = calculatePortfolioValue();
    let portfolioAllocation = getPortfolioAllocation();

    document.getElementById('portfolio-value').innerHTML = `Total Portfolio Value is $${portfolioValue}`;

    let allocationDetails = '';
    portfolioAllocation.forEach(allocation => {
        allocationDetails += `${allocation.name}: ${allocation.allocation.toFixed(2)}%<br>`;
    });
    document.getElementById('portfolio-allocation').innerHTML = allocationDetails;
}
// Code meant to display portfolio details. 
function displayTransactions(transactions) {
    let transactionDetails = '';
    transactions.forEach(transaction => {
        transactionDetails += `Transaction ${transaction.type} ${transaction.quantity} of ${transaction.assetName} and ID: ${transaction.assetId})<br>`;
    });
    document.getElementById('transaction-log').innerHTML = transactionDetails;
}
// Code meant to display and log any transactions made. 
try {
    const transactions = [
        new Transaction(1, "buy", 45), 
        new Transaction(2, "sell", 130),
        new Transaction(3, "buy", 95)
];
// Code meant to be tested using the code above. 
    displayTransactions(transactions);
    displayPortfolio();
} catch (error) {
    console.error(error.message);
}
// Code meant to diplay portfolio details and display error messages when they occur.
// Catch used in code to catch any errors and siaply message when errors are found.  
