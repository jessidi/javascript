//1. Write a JavaScript program to calculate the factorial of a number.
function factorial(n){
    if(n === 1) return 1;
    return n * factorial(n-1);
}

console.log(factorial(5));

//2. Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers. 
function gcd(a, b){
    if(b === 0) return a;
    return gcd(b, a % b);
}
console.log(gcd(10,16));

//3. Write a JavaScript program to get the integers in range (x, y).
//Example : range(2, 9)
//Expected Output : [3, 4, 5, 6, 7, 8]
function getFromRange(a, b){
    if(b - a === 2) return [a + 1];
    else {
        let list = getFromRange(a, b-1);
        list.push(b-1);
        return list;
    }
}
console.log(getFromRange(2, 9));

/**
 * 4. Write a JavaScript program to compute the sum of an array of integers.
Example : array = [1, 2, 3, 4, 5, 6]
Expected Output : 21 
 */

function sum(array){
    if(array.length === 0) return 0;
    return array.pop() + sum(array);
}
console.log(sum([1, 2, 3, 4, 5, 6]));

/**
 *  5. Write a JavaScript program to compute the exponent of a number.
 *   Note : The exponent of a number says how many times the base number is used as a factor.
    8,2 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.
 */
function exponentOfNum(base, exponent){
    if(exponent === 0) return 1;
    return base * exponentOfNum(base, exponent - 1);
}
console.log(exponentOfNum(2, 10));

/**
 * 6. Write a JavaScript program to get the first n Fibonacci numbers. 
  Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.
 */

 function getFibonacci(n){
    if(n === 1) return [0];
    if(n === 2) return [0, 1];
    let res = getFibonacci(n-1);
    res.push(res[res.length-1] + res[res.length-2]);
    return res;
 }
 console.log(getFibonacci(7));
 
 //Write a JavaScript program to check whether a number is even or not. 
 function evenOrNot(n){
    if(n < 0) return evenOrNot(Math.abs(n));
    if(n === 1) return false;
    if(n === 0) return true;
    return evenOrNot(n - 2);
 }
 console.log(evenOrNot(-45));
 
//Write a JavaScript program for binary search. 
//Sample array : [0,1,2,3,4,5,6]    console.log(l.br_search(5)) will return '5' 

function binarySearch(array, target){
    let end = array.length;
    let mid = Math.floor(end / 2);
    if(array[mid] > target) {
        let newArr = array.slice(0, mid);
        return binarySearch(newArr, target);
    }else if(array[mid] < target){
        let newArr = array.slice(mid + 1, array.length);
        return binarySearch(newArr, target);
    }
    else return mid;
}

console.log(binarySearch([0,1,2,3,4,5,6]));

