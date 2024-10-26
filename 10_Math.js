const number = 400;
// console.log(number);
// console.log(typeof number);


const newnum = new Number(200);
// console.log(newnum);
// console.log(typeof newnum);

// console.log(newnum.toString().length);

const other = 123.567;
// console.log(other.toPrecision(3));

const hundreds = 1000000000;
// console.log(hundreds.toLocaleString('en-IN'));



//**********************************MATH********************************** */

// console.log(Math);
// console.log(Math.round(3.4));
// console.log(Math.abs(-2));
// console.log(Math.ceil(3.1));
// console.log(Math.floor(3.1));
// console.log(Math.max(2,5,98,7,6));
// console.log(Math.min(2,5,98,7,6));

console.log(Math.floor(Math.random()*10));

let max =20;
let min =10;

console.log(Math.floor(Math.random()*(max - min + 1))+min);