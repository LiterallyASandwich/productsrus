require('dotenv').config();
require('./config/database');


const Item = require('./models/item');

// IIFE
// Immediately Invoked Function Expression
(async function() {
 

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Do Hickey Thingy McBob', price: 5.95, description: "It's kinda cool"},
    {name: 'Banana', price: 6.95, description: "DO NOT EAT"},
    {name: 'Candy', price: 3.95, description: "Stole this from a baby"},
    {name: 'Nuclear Warhead', price: 1111114.95, description: "You know what this is, don't ask how"},
    {name: 'Car', price: 11113.95, description: "It's a car"},
    {name: 'Taxidermied Horse', price: 225.95, description: "Howard, my beloved"},
    {name: 'Mannequin with the word: друг, written on it', price: 1.95, description: "Friend"},
    {name: 'Thingy from Nevada', price: 444.95, description: "Klaatu barada nikto"},
    {name: 'Incomprehensible horror', price: 0.95, description: "Don't ask"},
    {name: 'Spaghetti', price: 7.95, description: "Just a plate of spagetti"},
  ]);

  console.log(items)

  process.exit();

})();
