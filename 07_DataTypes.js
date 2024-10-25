//primitive

// 7 types : BigInt , Number , String , null , SYmbol , Boolean , Undefined


const score=300;
const score1=100.2;

const isLogin = true;
const temp = null;
let a;

const id = Symbol("123");
const id1 = Symbol("123");
console.log(id);
console.log(typeof id);
console.log(id === id1);


//non prrimitive (refernce)
//Array , objects , functions

const names = ["akku","shubham"];
console.log(names);

let myobj = {
    name:"Akanksha",
    age:20,
}

console.log(myobj);

console.log(typeof names);
console.log(typeof myobj);


const my = function a(){
    console.log("MY FUNCTION");
}


