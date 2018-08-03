let totalMoney = 6;
let totalRound = 10;
let roundMoney = 0;
let round = 0;
let rollDices = [];

const squares = {
    crown: 0,
    anchor: 0,
    heart: 0,
    club: 0,
    spade: 0,
    diamond: 0
}

while(totalMoney > 0 && round < totalRound){
    let cnt = squares;
    round++;
    console.log(`Round ${round}`);
    console.log(`Total money ${totalMoney}`);
    roundMoney = getNumber(totalMoney) + 1;

    while(roundMoney > 0){
        let type = getType();
        let typeMoney = getNumber(roundMoney+1);
        cnt[type] = typeMoney;
        roundMoney = roundMoney - typeMoney;
        console.log(`Bet for ${type} is ${roundMoney}`);
    }
    for(let i = 0; i < 3; i++){
        rollDices[i] = getType();
    }
    let win = 0;
    for(let i = 0; i < 3; i++){
        let die = rollDices[i];
        win += cnt[die];
    }
    totalMoney = win + totalMoney - roundMoney;
    console.log(`total money is ${totalMoney}`);
}

function getNumber(max){
    return Math.floor(Math.random() * Math.floor(max));
}

function getType() {
    let symbols = ["crown", "anchor", "heart", "club", "spade", "diamond"];
    return symbols[getNumber(6)];
    
}
console.log(getType());
