let cnt = 0;
function count(num, cnt){
    if(num === 1) return cnt;
    if(num % 2 === 0) return count(num / 2, cnt+1);
    return count(num*3+1, cnt+1);
}
console.log(count(8, 0));
console.log(count(3, 0));

