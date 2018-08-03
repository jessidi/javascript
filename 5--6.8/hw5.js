//1
function getSqrt(num){
    if(parseInt(num) !== num) return 'Not valid! Must be an integer!';
    return Math.sqrt(num);
}

console.log(getSqrt(9.5));

//2
function getMaxOne(array){
    let res = 0;
    let sum = 0;
    array.forEach(x => {
        if(x === 1) {
            sum++;
            res = Math.max(res, sum);
        }
        else {
            sum = 0;
        }
    });
    return res;
}
let array = [1,1,0,1,1,1];
console.log(getMaxOne(array));

//3
function longestPrefix(array){
    let target = array[0];
    for(let i = 1; i < array.length; i++){
        while(array[i].indexOf(target) !== 0){
            target = target.substring(0, target.length - 1);
            if(target === "") return "";
        }
    }
    return target;
}
let arr = ["concrete", "conclude", "conclusion"];
console.log(longestPrefix(arr));

//4
function print(n){
    let array = [];
    for(let i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            array.push('FizzBuzz');
        }else if(i % 3 === 0){
            array.push('Fizz');
        }else if(i % 5 === 0){
            array.push('Buzz');
        }else array.push(i + '');
    }
    return array;
}
console.log(print(15));
