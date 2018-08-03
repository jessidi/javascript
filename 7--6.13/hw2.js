//1. Write a JavaScript function to convert any given object into a list of `[key, value]` pairs
obj = {
    id: 12,
    name: 'miemeiDi',
    school: 'UCI'
}
function convert(obj) {
    let array = [];
    for(key in obj){
        array.push([key, obj[key]]);
    }
    return array;
}
console.log(convert(obj));

//2. Write a JavaScript function to get a copy of any given object where the keys have become the values and the values become the keys.
function change(obj) {
    let res = {};
    for(key in obj){
        res[obj[key]] = key;
    }
    return res;
}
console.log(change(obj));

//3. Write a JavaScript function to check if any given object contains a given property.
function check(obj, target){
    for(key in obj){
        if(key === target) return true;
    }
    return false;
}
console.log(check(obj, 'id'));
