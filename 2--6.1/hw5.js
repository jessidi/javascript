/*
Write a JS function: 
o	there are unlimited numbers of 1c, 5c, 25c, 50c
o	pick 48 coins to have 1 dollar
o	identify 2 solutions
o	print out 2 solutions, each of which has 48 coins.
*/

var coins = [1, 5, 25, 50];
var num = 48;
var sum = 100;
var res = [];
var a, b, c, d;
flag: {
    for (a = 0; a <= 48; a++) {
        for (b = 0; b <= 20; b++) {
            for (c = 0; c <= 4; c++) {
                for (d = 0; d <= 2; d++) {
                    if (a + b + c + d == num && a * coins[0] + b * coins[1] + c * coins[2] + d * coins[3] == sum) {
                        res.push([a, b, c, d]);
                        if (res.length == 2) break flag;
                    }
                }
            }
        }
    }
}
console.log(res);



