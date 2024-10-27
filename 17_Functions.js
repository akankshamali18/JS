// function add(n1,n2){
//     console.log(n1+n2);
// }

let res = add(2,3)
add(2,"a")
add("a",2)
add(2,"3")
add("2",3)
console.log("RESULT =",res);

function add(n1,n2){
    return n1+n2;
}

function login(user){
    return `${user} loggd in`
}
console.log(login("AKANKSHA"));
