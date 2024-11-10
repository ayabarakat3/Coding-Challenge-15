// Task 2: Create the Portfolio Module
import { assets } from './asset.js';
// Code created to import assets from asset.js file. 
export function calculatePortfolioValue() {
    return assets.reduce((total, asset) => total + asset.price * asset.quantity, 0);
}
// Function created to calculate total value of the portfolio
export function getPortfolioAllocation() {
    const totalSum = calculatePortfolioValue(); 
    return assets.map(asset => ({
    name: asset.name,
    allocation: ((asset.price * asset.quantity) / totalSum) * 100
    }));
}
// Function created to calculate the percentage allocation for every asset. 