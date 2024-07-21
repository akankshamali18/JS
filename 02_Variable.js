//var decalred variable can be re-declared and re-initialized
var a=10;
console.log(a);

//let decalred variable can be re-initialize not redeclared
let b=10;
b=20;
console.log(b);


//const declared variable cant do both
const d = 20;
const add = b+d;
console.log(add);

if(true){
    let x=6;
}
console.log(x);//out of scope

console.log(b===undefined)
var b2;

function a(){
    console.log(b);
    var b="local value";
}

//we can create first class function by redeclaring variable name
var a = () => {
    console.log("In a function a");
}
a();


let z=10;
console.log(z);

 z = () => {
    console.log("In a function z");
}
b();

const c=30;
console.log(c);
c = () => {         //not possible
    console.log("In a function c");
 }