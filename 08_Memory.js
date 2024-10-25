//stack(primitive) heap(non primitive)

let myname = "Akanksha"
let mname = myname;
mname = "Akku";
console.log(mname);
console.log(myname);

let userOne = {
    name:"Akanksha",
    age:20
}
console.log(userOne);
let userTwo = userOne;
console.log(userTwo);
userTwo.age=21;
console.log(userTwo);
console.log(userOne);