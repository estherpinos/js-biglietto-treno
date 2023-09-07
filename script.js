const kilometers = prompt('Quanti kilometri vuoi fare?');
const age = prompt('Quanti anni hai?');
let price = 0.21 * kilometers; 
let discountChild = price * 0.2;
let discountAdult = price * 0.4;


if (age<18) price = price - discountChild;
if (age>65) price = price - discountAdult;


const message = `
  
  Il prezzo del biglietto è ${price.toFixed(2)}€
`;

document.getElementById('output').innerHTML = message;
