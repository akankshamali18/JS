const a1 = ["A","B","C","D"]
const a2 = ["1","2","3","4"]

// const arr= a1.concat(a2);
// console.log(arr);

// const all = [...a1,...a2]
// console.log(all);


const realarr = [1,2,[4,6,[5,6]]]
const real1 = realarr.flat(Infinity);
console.log(real1);

console.log(Array.isArray("AKANKSHA"));
console.log(Array.from("AKANKSHA"));
console.log(Array.from({name:"AKKU"}));

let a =10;
let b=2;
let c= 30;

console.log(Array.of(a,b,c));