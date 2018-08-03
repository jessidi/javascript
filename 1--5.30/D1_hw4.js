console.log(0.1+0.2); //0.30000000000000004   
//floating point arithmetic is not always 100% accurate:

console.log(0.1+0.2 == 0.3); //false

console.log(1+"2"+"2"); //122

console.log(1+ +"2"+"2"); //32    +"2"  is number 2

console.log(1+ -"1"+"2"); //02

console.log(+"1" + "1" + "2"); //112

console.log("A" - "B" + "2"); //NaN2

console.log("A" - "B" + 2); //NaN

console.log("0 || 1 = "+(0 || 1)); //1   Logical OR

console.log("1 || 2 = "+(1 || 2)); //1   numbers are all true except 0

console.log("0 && 1 = "+(0 && 1)); //0

console.log("1 && 2 = "+(1 && 2)); //2

console.log(false == '0'); // true

console.log(false === '0'); // false