//1
let a = Number.isInteger(5/2);
console.log(a);

let b = 2;
let res = b === parseInt(b, 10);
console.log(res);

let check = (typeof b === 'number') && (b % 1 === 0);
console.log(check);

//2
function sum(x){
    if(arguments.length > 1) {
        let res = 0;
        for(let i = 0; i < arguments.length; i++){
            res += arguments[i];
        }
        return res;
    }
    return function(y) {return x + y};
}
console.log(sum(2)(3));
console.log(sum(2, 3));

//3
console.log(
    (function f(n){
        return ( (n > 1) ? n * f(n-1) : n)
    })(10)
);
//3628800

//4
(function(x) {
    return (function(y) {
        		console.log(x);
    	    })(2);
})(1);
//1


