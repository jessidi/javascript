//1
function printing() {
    console.log(1); 
    setTimeout(function() { console.log(2); }, 1000); 
    setTimeout(function() { console.log(3); }, 0); 
    console.log(4);
 }
 printing();
 //1
 //4
 //3
 //2


//2
 for (var i = 0; i < 4; i++) {
    setTimeout(() => console.log(i), 0);
  }
  //4
  //4
  //4
  //4



//3
for (let i = 0; i < 4; i++) {
    (function (i) {
      setTimeout(() => console.log(i), 0)
    })(i)
}
//0
//1
//2
//3



//4
console.log("Before the timeout");
setTimeout(function() { console.log("In the timeout function"); }, 0);
console.log("After the timeout");
/**
    Before the timeout
    After the timeout
    In the timeout function 
**/



//5
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
    setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}
/**     Index: 4, element: undefined
 *      Index: 4, element: undefined
 *      Index: 4, element: undefined
 *      Index: 4, element: undefined
 */




 //6
 function start(time) {
    let start = new Date();
    console.log('Start ------ ' + start);
    console.log(`Program will stop in ${time}s`);
    time = time * 1000;
    setTimeout(() => {
        console.log('Stop ------ ' + new Date());
        }, time);
    let count = time;
    while(count > 0){
        if(count !== time) console.log(count/1000 + 's');
        while(new Date().getTime() < start.getTime() + 1000){}
        start = new Date();
        count = count - 1000;
    }
}
start(8);

// function start(time) {
//     time = time * 1000;
//     console.log('Program will start after ' + time/1000 + 's');
//     setTimeout(function() {
//         setTimeout(() => {
//             console.log('Stop ------ ' + new Date());
//          }, time);
//         let start = new Date();
//         console.log('Start ------ ' + start);
//         let count = time;
//         while(count > 0){
//             if(count !== time) console.log(count/1000 + 's');
//             while(new Date().getTime() < start.getTime() + 1000){}
//             start = new Date();
//             count = count - 1000;
//         }
//     }, time);
// }
// console.log(new Date());

// start(8);



