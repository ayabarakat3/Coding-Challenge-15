// Task 3: Create the Transaction Module
import { getAssetById } from './asset.js'; 
// Code created to import assets from asset.js file

export class Transaction {
    constructor(assetId, type, quantity) {
        const asset = getAssetById(assetId); 

        if (type === "buy") {
            asset.quantity += quantity; 
            console.log(`YAY! You successfully bought ${quantity} units of ${asset.name}, the current quantity is ${asset.quantity}`);
        } else if (type === "sell") {
            if (asset.quantity < quantity) {
                throw new Error(`Sorry! Insufficient quantity for sale of ${asset.name}. Available quantity: ${asset.quantity}`);
            }
            asset.quantity -= quantity;
            console.log(`Successfully sold ${quantity} units of ${asset.name}. New quantity: ${asset.quantity}`);
        } else {
            throw new Error("Sorry! Transaction type invalid");
        }
    }
}

/* Transaction class created. 
Code meant to display error messages when errors occur or when transaction is successful.
Code meant to display the asset, transaction type, and quantity.
*/