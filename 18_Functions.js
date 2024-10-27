function calculate(...num){
    return num
}
console.log(calculate(200,3,344,5,6,8,53,3));


function calculate1(val1,val2,...num){
    return num
}
console.log(calculate1(200,100,300,400,500));


// const newarray = [100,200,300,400,500,600]
function secondelement(getarray){
    return getarray[1]
}
console.log(secondelement([200,300,400,500,600]));