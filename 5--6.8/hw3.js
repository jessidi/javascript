//example 1
const myString = "99 bottles of beer on the wall " +
"take 1 down and pass it around -- " +
"98 bottles of beer on the wall.";

const match = myString.match(/[\-0-9a-z.]/ig);
//one hyphen or number or letter

const match1 = myString.match(/[^\-0-9a-z.]/);
//[" "]

const match2  = myString.match(/[0-9][0-9][0-9]|[0-9][0-9]|[0-9]/);
//["99"]

const match3 = myString.match(/[0-9]+/);
//["99"]



//example 2
const stuff = 'hight: 9\n' + 'medium: 5\n' + 'low: 2\n';
console.log(stuff);

const levels = stuff.match(/:\s*[0-9]/g);// \s white space
//[": 9", ": 5", ": 2"]



// example 3
const messyPhone = '(505) 555-1515';
const neatPhone = messyPhone.replace(/\D/g, '');  // \D not digit
// '5055551515'



// example 4
const field = ' something ';
const valid = /\S/.test(field); // \S not white space
//true




// example 5
const input = "Address: 333 Main St., Anywhere, NY, 55532. Phone: 555-555-2525.";
const match11 = input.match(/\d{5}.*/);
// ["55532. Phone: 555-555-2525."]

const equation = "(2 + 3.5) * 7";
const match12 = equation.match(/\(\d \+ \d\.\d\) \* \d/);
console.log(match12);

//["(2 + 3.5) * 7"]



// example 6
const text = "Visit oreilly.com today!";
const match13 = text.match(/[a-z]+(?:\.com|\.org|\.edu)/i);
// ?: non-capturing group  如果不加就是["oreilly.com", ".com"]
//"oreilly.com"



// example 7 
const promo = "Opening for XAAX is the dynamic GOOG! At the box office now!";
const bands = promo.match(/(?:[A-Z])(?:[A-Z])\2\1/g);
// group 2： \2 对应第二个括号里的值
// \1 对应第一个括号里的值
//如果没有?: 结果就是["XAAX", "GOOG"]
//否则得到null




// example 8
const input1 = "One two three";
let a11 = input1.replace(/two/, '($`)'); 		// "One (One ) three"
let a12 = input1.replace(/\w+/g, '($&)'); 		// "(One) (two) (three)"
//$` is a special variable which holds the contents before the match
//$& holds what was matched 

// example 9
const input2 = "It was the best of times, it was the worst of times";
const beginning = input2.match(/^\w+/g); 		// "It"
const end = input2.match(/\w+$/g); 			// "times"
const everything = input2.match(/^.*$/g); 		// sames as input2
const nomatch1 = input2.match(/^best/ig);//null
const nomatch2 = input2.match(/worst$/ig);//null





// example 10
const input3 = "One line\nTwo lines\nThree lines\nFour";
const beginnings = input3.match(/^\w+/mg); 		// ["One", "Two", "Three", "Four"]
const endings = input3.match(/\w+$/mg); 		// ["line", "lines", "lines", "Four"]





// example 11
const inputs = [
"john@doe.com", 				// nothing but the email
"john@doe.com is my email", 			// email at the beginning
"my email is john@doe.com", 			// email at the end
"use john@doe.com, my email", 		// email in the middle, with comma afterward
"my email:john@doe.com.", 			// email surrounded with punctuation
];

const emailMatcher =
/\b[a-z][a-z0-9._-]*@[a-z][a-z0-9_-]+\.[a-z]+(?:\.[a-z]+)?\b/ig;
let res = inputs.map(s => s.replace(emailMatcher, '<a href="mailto:$&">$&</a>'));
console.log(res);

// returns [
// "<a href="mailto:john@doe.com">john@doe.com</a>",
// "<a href="mailto:john@doe.com">john@doe.com</a> is my email",
// "my email is <a href="mailto:john@doe.com">john@doe.com</a>",
// "use <a href="mailto:john@doe.com">john@doe.com</a>, my email",
// "my email:<a href="mailto:john@doe.com>john@doe.com</a>.",
// ]
