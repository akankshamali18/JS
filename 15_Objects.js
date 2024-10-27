let user = {}


user.id="123a"
user.name="AKKU"
user.islogin = false
user.age = 20
// console.log(user);

let man ={
    email:"a@gmail.com",
    fullname:{
        first:{
            n:"AKKU",
            lname:{
                n:"MALI"
            }
        },
       
    }
}

// console.log(man.fullname.first.lname.n);


let obj1 = {1:"a",2:"b"}
let obj2 = {3:"c",4:"d"}

// let obj3 = Object.assign({},obj1,obj2)

// let obj3 = {...obj1,...obj2}    //speread operator
// console.log(obj3);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));