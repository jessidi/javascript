
//1

let arr = [9, 11, 12, 1, 3, 6];
// return arr[0];
let res = arr.find((a, i) => {
    if(i === 0) return a;
})
console.log(res);

//2
let words = [2, 1, false, true, 0, 1233, ''];
let filtered = words.filter(x => x !== false && x !== null && x !== 0 && x !== '');
console.log(filtered);
