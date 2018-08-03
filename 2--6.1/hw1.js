
//1
function f() {
    var a = 10;
    if (a > 5) {
        a = 7;
    }
    console.log(a);
}
//answer: nothing happened



//2. 
function f() {
    if(true) {
        var a = 5;
    }
    console.log(a);
}
f();
//answer: 5




//3.
function f() {
	a = 3;
}
f();
console.log(a);
//answer: 3




//4.
var a = 5;
function first() {
    a = 6;
}
function second() {
    console.log(a);
}
first(); 
second(); //6




//5. 
var a = 5;
function f() {
    var a = 7;
    console.log(a);
}
//nothing happened


//6. 

var a = 1; 
function b() { 
    a = 10; 
    return; 
    function a() {
        console.log('hi');
        
    } 
} 
b(); 
console.log(a);// 1