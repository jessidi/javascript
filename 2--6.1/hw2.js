//1
function f(){
    var a = b = 3;
  }
  
f();
  
console.log("a defined? " + (typeof a !== 'undefined')); //false
console.log("b defined? " + (typeof b !== 'undefined')); //true

//2
function foo1(){
  return {
      bar: "hello"
  };
}

function foo2(){
  return
  {
      bar: "hello"
  };
}

//3
var a = [1, 2, 3];
a[10] = 99;
console.log(a[6]);  //undefined
//index 3-9 will be undefined

//4
var num = 10,
    name = "Addy Osmani",
    obj1 = {
      value: "first value"
    },
    obj2 = {
     value: "second value"
    },
    obj3 = obj2;
 
function change(num, name, obj1, obj2) {
    num = num * 10;
    name = "Paul Irish";
    obj1 = obj2;
    obj2.value = "new value";
}
 
change(num, name, obj1, obj2);
 
console.log(num);//10
console.log(name);// "Addy Osmani"
console.log(obj1.value); //"first value"
console.log(obj2.value); //"new value"
console.log(obj3.value); //"new value"

/**
 * Primitive type (string, number, etc.) are passed by value and objects are passed by reference.
 * If you change a property of the passed object, the change will be affected. 
 * However, you assign a new object to the passed object, the changes will not be reflected.
 */