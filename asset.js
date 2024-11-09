// Task 1: Create the Asset Module.
export const assets = [
    { id: 1, name: 'Company A Stock', type: 'stock', price: 3000, quantity: 97 },
    { id: 2, name: 'Company B Bond', type: 'bond', price: 2500, quantity: 70 },
    { id: 3, name: 'Company C Stock', type: 'stock', price: 2700, quantity: 90 },
    { id: 4, name: 'Company D Stock', type: 'stock', price: 1700, quantity: 92 },
  ];
// Array created.
  export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
  }
// Code created to find details by id.