function reverse(x){
    let res = 0;
    while(x !== 0){
        let digit = x % 10;
        res = res * 10 + digit;
        x = parseInt(x / 10);
        try{
            if(Math.abs(res) > Math.pow(2, 31)) throw new Error();
        }catch(e) {                        
            return 0;
        }
    }
    return res;
}

console.log(reverse(1534236469));
