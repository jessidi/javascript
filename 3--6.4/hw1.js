//1
var foo = { 
    bar: { 
        deep: 'pony', 
        dangerouslySetInnerHTML: 'lol' 
    }
};
var {
    bar: { 
    deep, 
    dangerouslySetInnerHTML: sure}
} = foo;
console.log(deep);//pony
console.log(sure);//lol

//2
function es6 () {
    var left = 10;
    var right = 20;
    if (right > left) {
      [left, right] = [right, left]
    }
  }
  es6();//left:20, right: left

  //3
var {foo} = {bar: 'baz'};
console.log(foo);//undefined

//4
var key = 'such_dynamic';
var { [key]: foo } = { such_dynamic: 'bar' };
console.log(foo);//foo=bar
//Computed property names


//5
var [a] = [];
console.log(a);//undefined
var [b=10] = [undefined];
console.log(b);//10
var [c=10] = [];
console.log(c);//10
//have default values, will use default value if it's undefined

//6
function getCoords () {
    return {
      x: 10,
      y: 22
    };
  };
  var {x, y} = getCoords();
  console.log(x);//10
  console.log(y);//22
  
  //6
  function random ({ min=1, max=300 }) {
    return Math.floor(Math.random() * (max - min)) + min
  }
  console.log(random({}));//[1,300)
  console.log(random({max: 24}));//[1,24)
  
  //7
  var a = "milk";
  var b = "coffee";
  var c = [];
  c.push(...a, ...b);
  c = c.join("");
  console.log(c);
  
//8
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); //1
console.log(y); //2
console.log(z); //{a:3, b:4}
//Rest Properties: collect the remaining property keys that are not already picked off by the destructuring pattern. 
//Those keys and their values are copied onto a new object.


//9
function compare(a, b) {
        return a - b;
    }
    
let result = compare(...[1, 2]);
console.log(result); //-1
    
//10
var rivers = ['Nile', 'Ganges', 'Yangte'];
var moreRivers = ['Danube', 'Amazon'];
 
rivers.push(...moreRivers);
console.log(rivers);//[Nile', 'Ganges', 'Yangte', Danube', 'Amazon']

//11
let chars = ['A', ...'BC', 'D'];
console.log(chars); //['A', 'B', 'C', 'D']
