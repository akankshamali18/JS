//singleton
// Object.create

//object litreals

const mysym = Symbol("KEY1")

const juser = {
    name:"AKKU",
    age:20,
    [mysym]:"KEY1",
    city:"SANGLI",
    isLogin:false,
    lastlogin:["MON","SUN"]
}

// console.log(juser.name);
// console.log(juser["age"]);
// console.log(juser[mysym]);

// juser.age=21;
// console.log(juser);
// Object.freeze(juser)
// juser.age=23;
// console.log(juser);


juser.greeting = function(){
    console.log("HELLO WELCOME");
}

juser.greeting2 = function(){
    console.log(`HELLO WELCOME , ${this.name}`);
}

console.log(juser.greeting());
console.log(juser.greeting2());