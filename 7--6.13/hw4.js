let student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 
};

//1
function list(obj){
    let arr = [];
    for(let key in obj){
        arr.push(key);
    }
    return arr;
}
    
console.log(list(student));

//2
function getLength(obj){
    let sum = 0;
    for(let key in obj) sum++;
    return sum;
}
console.log(getLength(student));

//3
function getMethods(obj){
    return Object.getOwnPropertyNames(obj);
}
console.log(getMethods(student));

//4
