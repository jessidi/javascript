'use strict';

function init(){
    for(let i = 1; i <= 13; i++){
        arrayOne.push('Spades - ' + i);
        arrayTwo.push('Hearts - ' + i);
        arrayThree.push('Diamonds - ' + i);
        arrayFour.push('Clubs - ' + i);
    }
}

function joinArray(array){
    return array.join(', ') + '.';
}

function getRandom(targetArray){
    let n = targetArray.length;
    for(let i = 0; i < n; i++){
        let ranIdx = i + Math.floor(Math.random() * (n - i));     
        let temp = targetArray[i];
        targetArray[i] = targetArray[ranIdx];
        targetArray[ranIdx] = temp;
    }
}

let arrayOne = [];
let arrayTwo = [];
let arrayThree = [];
let arrayFour = [];

let lineOne = '';
let lineTwo= '';
let lineThree = '';
let lineFour = '';

console.log('***********************              First Print             *********************');
init();
lineOne = joinArray(arrayOne);
lineTwo = joinArray(arrayTwo);
lineThree = joinArray(arrayThree);
lineFour = joinArray(arrayFour);
console.log(lineOne + '\n' + lineTwo + '\n' + lineThree + '\n' + lineFour);

console.log('***********************              Second Print             *********************');
let arrayOne1 = [...arrayOne];
let arrayTwo1 = [...arrayTwo];
let arrayThree1 = [...arrayThree];
let arrayFour1 = [...arrayFour];

getRandom(arrayOne1);
getRandom(arrayTwo1);
getRandom(arrayThree1);
getRandom(arrayFour1);

let lineOne1 = joinArray(arrayOne1);
let lineTwo1 = joinArray(arrayTwo1);
let lineThree1 = joinArray(arrayThree1);
let lineFour1 = joinArray(arrayFour1);

console.log(lineOne1+ '\n' + lineTwo1 + '\n' + lineThree1 + '\n' + lineFour1);


console.log('***********************              Third Print             *********************');
let arrayWhole = [];
arrayWhole.push(...arrayOne, ...arrayTwo, ...arrayThree, ...arrayFour);
getRandom(arrayWhole);
let line = '';
for(let i = 0; i < 52; i++){
    if(i % 13 === 0){
        line = line + '\n';
    }
    line = line + arrayWhole[i] + ', ';
}
line = line.substring(0, line.length - 2) + '.';
console.log(line);
