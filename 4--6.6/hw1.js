//1
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);//bar
        console.log("outer func:  self.foo = " + self.foo);//bar
        (function() {            
            console.log("inner func:  this.foo = " + this.foo);//undefined
            console.log("inner func:  self.foo = " + self.foo);//bar
        }());
    }
};
myObject.func();
/**Calling a function without a leading parent object 
 * will generally get you the global object 
 * which in most browsers means the window object.
 */


//2
var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        			return this._name;
    			}
};

var stoleSecretIdentity = hero.getSecretIdentity;
//fix-------hero.getSecretIdentity.bind(hero);
console.log(stoleSecretIdentity());//undefined
console.log(hero.getSecretIdentity());//John Doe


//3
var d = {};
[ 'zebra', 'horse' ].forEach(function(k) {
        d[k] = undefined;
    }
);
// d = {
//     zebra: undefined,
//     horse: undefined
// }

//4
var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);//456
//Object to String ----> [object Object]

