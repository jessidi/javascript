function Shape(type){
    this.type = type;
    this.getType = function(){
        return this.type;
    }
}

function Triangle(a, b, c){
    this.a = a;
    this.b = b;
    this.c = c;
}

Triangle.prototype = new Shape();
Triangle.prototype.type = 'triangle';
Triangle.prototype.constructor = Triangle;
//Need to add above line because we just set Triangle.prototype to reference 
//an object that inherits its properties from Shape.prototype!
Triangle.prototype.getPerimeter = function() {
    return this.a + this.b + this.c;
}
var t = new Triangle(1, 2, 3);

console.log(t.constructor === Triangle);
console.log(Shape.prototype.isPrototypeOf(t));
//whether the calling object lies in the prototype chain of the specified object.
console.log(t.getPerimeter());
console.log(t.getType());
console.log('*************');
for (var property in t) { 
    console.log(property);
       
    if (t.hasOwnProperty(property)) {
      console.log(property, '=', t[property]);
    }
}

Array.prototype.shuffle = function(){
    let n = this.length;
    for(let i = 0; i < this.length; i++){
        let idx = i + Math.floor(Math.random() * (n - i));
        [this[idx], this[i]] = [this[i], this[idx]];
    }
    return this;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array.shuffle());