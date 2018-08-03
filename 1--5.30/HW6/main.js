function raiseBet(e) {
    if (document.getElementById(e).value<100 && document.getElementById('balance').value>0) {
        document.getElementById(e).value++;
        // document.getElementById('balance').value--;
    } 
}

function decreaseBet(e) {
    if (document.getElementById(e).value>0) {
        document.getElementById(e).value--;
        // document.getElementById('balance').value++;
    } 
}

function oneRandomRound() {
    let res = [];
    for (let i=0;i<3;i++) {
        res.push(Math.floor(Math.random()*6));
    }
    return res;
}

function oneRoundLoss() {
    let res = 0;
    let betList = ['heart','crown','diamond','club','anchor','spade'];
    for (let bet of betList) {
        res = res+ +document.getElementById(bet).value;
    }
    return Number(res);
}

function startGame() {
    let round = Number(document.getElementById('round').value);
    let win = 0;
    let resText = '';
    let loss = oneRoundLoss();
    for (let i=1;i<=round;i++) {
        if (Number(document.getElementById('balance').value)<loss) {
            alert("Sorry! You don't have enough cents to play!");
            break;
        }
        document.getElementById('balance').value=document.getElementById('balance').value-loss;
        resText= resText+i+' round dices result: '
        let res = oneRandomRound();
        let betList = ['heart','crown','diamond','club','anchor','spade'];
        for (let i of res) {
            let winBet = betList[i];
            resText = resText+winBet+' ';
            win = win+ +document.getElementById(winBet).value;
        }
    }
    document.getElementById('win').value=win;
    document.getElementById('balance').value=Number(document.getElementById('balance').value)+ +win;
    document.getElementById('result').value=resText;
}