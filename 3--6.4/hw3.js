//1
function f(x) {
    console.log(`inside f: x=${x}`);
    x = 5;
    console.log(`inside f: x=${x} (after assignment)`);
}
let x = 3;
console.log(`before calling f: x=${x}`);
f(x);
console.log(`after calling f: x=${x}`);
//before calling f: x=3
//inside f: x=3
//inside f: x=5 (after assignment)
//after calling f: x=3
//passing by value -- deep copy

//2
function f(o) {
    o.message = `set in f (previous value: '${o.message}')`;
}
let o = {
    message: "initial value"
};
console.log(`before calling f: o.message="${o.message}"`);
f(o);
console.log(`after calling f: o.message="${o.message}"`);
/** before calling f: o.message="initial value"
 * after calling f: o.message="set in f (previous value: 'initial value')"
 */

 //3
 function f(o) {
    o.message = "set in f";
    o = {
        message: "new object!"
    };
    console.log(`inside f: o.message="${o.message}" (after assignment)`);
}
let o = {
    message: 'initial value'
};
console.log(`before calling f: o.message="${o.message}"`);
f(o);
console.log(`after calling f: o.message="${o.message}"`);
/**  before calling f: o.message = "initial value"
 *  inside f: o.message = "new object" (after assignment)
 *  after calling f: o.message = "set in f"
 */