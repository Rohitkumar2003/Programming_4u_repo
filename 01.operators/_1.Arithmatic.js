

// // Arithmatic Operators 

// console.log('5 + 2 =', 5+2);
// console.log('5 - 2 =', 5-2);
// console.log('10 / 2 =', 10/2);
// console.log('5 % 2 =', 5%2);
// console.log('2** 3 =', 2**3);



// challenge 1 :- On a Shopping Web-app, calculate the total cost of the product when given the (prize = 150), and the (quntity = 3), also calculate a 10% discount on the total coast and display the discounted prize ?

let prize_per_item = 150;
let quntity = 3;
let total_prize = prize_per_item * quntity;
let discount = total_prize * (10/100);
let discount_prize = total_prize - discount;

console.log(`Prize Per Item:`,prize_per_item);
console.log(`Quntity:`,quntity);
console.log(`Discount:`, discount);
console.log(`Total Prize:`, total_prize);
console.log(`Discount Prize:`, discount_prize);


