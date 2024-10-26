const number = 400;
console.log(number);
console.log(typeof number);


const newnum = new Number(200);
console.log(newnum);
console.log(typeof newnum);

console.log(newnum.toString().length);

const other = 123.567;
console.log(other.toPrecision(3));

const hundreds = 1000000000;
console.log(hundreds.toLocaleString('en-IN'));