let name = "AKANKSHA"
const age =20;

name1 = name.concat("AJS")
console.log(name1);

// console.log(`HELLO MY NAME IS ${name} and my age is ${age}`);

let newName = new String("AKANKSHA")
// let tempName = newName;
// console.log(newName);
// console.log(tempName);

newName = newName.concat("HI")
console.log(newName);
// console.log(tempName);

// console.log(typeof newName);
// console.log(typeof name);

console.log(newName.slice(-8,4));
console.log(newName.substring(0,4));

const newstring = "  Akanksha   "
console.log(newstring.trim());

const url = "https://akankshamali%20@gmail.com"
console.log(url.replace("%20","-"));