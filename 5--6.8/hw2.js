
const fs = require('fs');
let data = fs.readFileSync('coordinates.json', 'utf-8');
let objArray = JSON.parse(data);

function getOrderedCoordinates(originX, originY){
    let array = objArray.map(x => x.value);
    array.sort((a, b) => {
        let arrayA = a.split(',');
        let arrayB = b.split(',');
        let xOfa = parseInt(arrayA[0]);
        let yOfa = parseInt(arrayA[1]);
        let xOfb = parseInt(arrayB[0]);
        let yOfb = parseInt(arrayB[1]);
        let aToOrigin = (xOfa - originX) * (xOfa - originX) + (yOfa - originY) * (yOfa - originY);
        let bToOrigin = (xOfb - originX) * (xOfb - originX) + (yOfb - originY) * (yOfb - originY);
        if(aToOrigin === bToOrigin) return xOfa - xOfb;
        return aToOrigin - bToOrigin;
    });
    return array;   
}

let a = getOrderedCoordinates(9, 20);
console.log(a);

/**
 * const fs = require('fs');
let data = fs.readFileSync('coordinates.json', 'utf-8');
let objArray = JSON.parse(data);

function getOrderedCoordinates(originX, originY){
    let array = objArray.map(x => x.value);
    array.sort((a, b) => {
        let arrayA = a.split(',');
        let arrayB = b.split(',');
        let xOfa = parseInt(arrayA[0]);
        let yOfa = parseInt(arrayA[1]);
        let objA = {
            x: xOfa,
            y: yOfa
        }
        let xOfb = parseInt(arrayB[0]);
        let yOfb = parseInt(arrayB[1]);
        let objB = {
            x: xOfb,
            y: yOfb
        }
        let origin = {
            x: originX,
            y: originY
        }

        let aToOrigin = getDistance(objA, origin);
        let bToOrigin = getDistance(objB, origin);
        if(aToOrigin === bToOrigin) return objA.x - objB.x;
        return aToOrigin - bToOrigin;
    });
    return array;   
}

function getDistance(a, b){
    return (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y);
}

let a = getOrderedCoordinates(0, 0);
console.log(a);
 */