let billAmount = Number(prompt("Enter bill amount:"));
let taxRate = Number(prompt("Enter tax rate:"));
let tipPercent = Number(prompt("Enter tip percent:"));
let people = Number(prompt("Enter number of people:"));

let tax = billAmount * taxRate;
let tip = billAmount * tipPercent / 100;
let grandTotal = billAmount + tax + tip;
let share = grandTotal / people;

console.log(`----- Receipt -----`);
console.log(`Bill Amount: ${billAmount}`);
console.log(`Tax: ${tax.toFixed(2)}`);
console.log(`Tip: ${tip.toFixed(2)}`);
console.log(`Grand Total: ${grandTotal.toFixed(2)}`);
console.log(`Number of People: ${people}`);
console.log(`Each person pays: ${share.toFixed(2)}`);
