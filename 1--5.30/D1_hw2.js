//A. BASIC
//1
function getWhichDay(a){
    switch(a){
        case 0: return 'Sunday';
                break;
        case 1: return 'Monday';
                break;     
        case 2: return 'Tuesday';  
                 break;   
        case 3: return 'Wednesday';
                break;
        case 4: return 'Thursday';
                break;
        case 5: return 'Friday';
                break;
        case 6 :return 'Saturday';
                break;
    }
}

var date = new Date();
console.log(`Today is: ${getWhichDay(date.getDay())}`);
var hours = date.getHours();
var ampm = hours >= 12 ? 'pm' : 'am';
console.log(`Current time is: ${date.getHours() + ampm}:${date.getMinutes()}:${date.getSeconds()}`);

//2
function getWindow(){
    window.print();
}
//3
var date = new Date();
console.log(`${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`);

//4
var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var perimeter = (side1 + side2 + side3)/2;
var area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
console.log(area);

//5
function rotate(s){
    var arr = s.split("");
    for(var i = 0; i < s.length; i++){
        var end = arr.pop();
        arr.unshift(end);
    }
    return arr.join("");
}
console.log(rotate('w3resource'));

//B. FUNCTIONS
//1
function reverseNum(n){
    n = n + '';
    return n.split("").reverse().join("");
}
console.log(reverseNum(32243));

//2
function isPalindrome(n){
    var i = 0, j = n.length-1;
    while(i < j){
        if(n.charAt(i) != n.charAt(j)) return false;
        i++;
        j--;
    }
    return true;
}
console.log(isPalindrome('ab'));

//3
function generateAll(s){
    var x = [];
    for(var i = 0; i < s.length; i++){
        for(var j = i + 1; j <= s.length; j++){
            x.push(s.substring(i, j));
        }
    }
    return x;
}
console.log(generateAll('dog'));

//4
function rightOrder(s){
    var s = s.split("");
    return s.sort().join("");
}
console.log(rightOrder('webmaster'));

//5
function convertCapital(s){
    var array = [];
    for(word of s.split(" ")){
        var newWord =  word.charAt(0).toUpperCase() + word.substring(1);
        array.push(newWord);
    }
    return array.join(" ");
}
console.log(convertCapital('the quick brown fox' ));


//C. Recursion
//1
function factorial(n){
    var res = 1;
    while(n > 0){
        res *= n;
        n--;
    }
    return res;
}
console.log(factorial(5));

//2
function findGcd(a, b){
    if(b === 0) return a;
    return findGcd(b, a % b);
}
console.log(findGcd(5, 15));

//3
function range(a, b){
    var x = a + 1;
    var array = [];
    while(x < b){
        array.push(x);
        x++;
    }
    return array;
}
console.log(range(2, 9));

//4
function getSum(array){
    var sum = 0;
    for(num of array){
        sum += num;
    }
    return sum;
}
console.log(getSum([1, 2, 3, 4, 5, 6]));

//5
var num = Math.pow(8, 2);
console.log(num);


//D. Conditions and Iterations
//1
function whichLarger(a, b){
    return Math.max(a, b);
}
console.log(whichLarger(2,6));

//2
function findSign(a, b, c){
    if(a * b * c < 0) console.log('The sign is -');
    else console.log('The sign is +');
}
findSign(3, -7, 2);

//3
function sortNum(array){
    return array.sort();
}
console.log(sortNum([0, -1, 4]).reverse());

//4
function findLargest(array){
    return Math.max.apply(null, array);
}
console.log(findLargest([-5, -2, -6, 0, -1]));

//5
function ifEven(num){
    for(var i = 0; i <= num; i++){
        if(i % 2 == 0) console.log(`${i} is even`);
        else console.log(`${i} is odd`);
    }
}
ifEven(15);

//E. Array
//1
function is_array(a){
    return Array.isArray(a);
}
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

//2
function array_Clone(arr){
    var array = [];
    for(item of arr){
        array.push(item);
    }
    return array;
}
console.log(array_Clone([1, 2, [4, 0]]));

//3
function first(arr){
    return arr[0];
}
console.log(first([7, 9, 0, -2]));
console.log(first([[],3]));

//4
function last(arr){
    return arr.pop();
}
console.log(last([7, 9, 0, -2]));
console.log(last([0, 1, [7, 9,-2]]));

//5
function joinArray(arr){
    return arr.join(",");
}
console.log(joinArray(["Red", "Green", "White", "Black"]));

//F. Date
//1
function is_date(d) {
    return d instanceof Date && !isNaN(d);
}
console.log(is_date("October 13, 2014 11:13:00")); 
console.log(is_date(new Date(86400000))); 
console.log(is_date(new Date(99,5,24,11,33,30,0))); 
console.log(is_date([1, 2, 4, 0]));
//2
function curday(c){
    var date = new Date();
    return date.getMonth()+1+c+date.getDate()+c+date.getFullYear();
}
console.log(curday('/'));
console.log(curday('-'));

//3
function getDaysInMonth(month, year){
    return new Date(year, month, 0).getDate();
}
console.log(getDaysInMonth(1, 2012)); 
console.log(getDaysInMonth(2, 2012)); 
console.log(getDaysInMonth(9, 2012)); 
console.log(getDaysInMonth(12, 2012)); 

//4
function month_name(d){
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
    return monthNames[d.getMonth()];
}
console.log(month_name(new Date("10/11/2009"))); 
console.log(month_name(new Date("11/13/2014")));

//5
function compare_dates(a, b){
    if(a.toString() == b.toString()) return "Date1 = Date2" ;
    if(a < b) return "Date2 > Date1";
    return "Date1 > Date2" ;
}
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00'))); 
console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00'))); 
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));

//G. String
//1
function is_string(s){
    return typeof s === 'string' || s instanceof String;
}
console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));

//2
function is_Blank(s){
    return s.trim().length === 0 || s.trim() == null;
}
console.log(is_Blank('')); 
console.log(is_Blank('abc'));

//3
function string_to_array(arr){
    return arr.split(" ");
}
console.log(string_to_array("Robin Singh"));

//4
function truncate_string(s, idx){
    return s.substring(0, idx);
}
console.log(truncate_string("Robin Singh",4));

//H. Math
//1
function base_convert(num, a, b){
    return parseInt(num+'', a).toString(b);
}
console.log(base_convert('E164',16,8)); 
console.log(base_convert(1000,2,8));

//2
function bin_to_dec(bstr) { 
    return parseInt((bstr + '').replace(/[^01]/gi, ''), 2);
}
console.log(bin_to_dec('110011'));
console.log(bin_to_dec('100'));

//4
function rand(min, max) {
    if(min == null && max == null) return 0;
    if(max == null) {
        max = min;
        min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
};
   console.log(rand(1,20));
   console.log(rand(1,10));
   console.log(rand(6));
   console.log(rand());

//I. Regular Expression
//1
function checkUpper(s){
    var c = s.charAt(0);
    return c === c.toUpperCase();
}
console.log(checkUpper('Word'));

//2
function is_creditCard(str)
{
 regexp = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
  
        if (regexp.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
}

console.log(is_creditCard("378282246310006"));

console.log(is_creditCard("37828224630006"));