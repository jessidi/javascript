
var showCards = function (cards,types) {
    for (let i = 0; i < cards.length; i++) {
        let deckLine = Math.floor(i / 13);
        let typeIndex = Math.floor(cards[i] / 13);
        let div = document.createElement("div");
        div.setAttribute("class","cards");
        let img = document.createElement("img");
        let src = 'cards/' + types[typeIndex] + '/' + (cards[i] % 13+1) + '.png';
        img.setAttribute("src", src);
        img.setAttribute("class","cards-images");
        div.appendChild(img);
        let line = document.getElementsByClassName('cards-line')[deckLine];
        line.appendChild(div);
    }
}

var deleteCards = function () {
    let cardsDivList = document.getElementsByClassName("cards");
    let len = cardsDivList.length;
    for (let i=0;i<len;i++) {
        cardsDivList[i].remove();
    }
}

var orderShuffle = function () {
    deleteCards();
    var types = ['club', 'heart', 'spade', 'diamond'];
    var cards = [];
    for (let i = 0; i < 52; i++) {
        cards.push(i);
    }
    showCards(cards,types);
}

var swap = function (i, j, array) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

var rangeShuffle = function (cards,begin,end) {
    for (let i = end; i > begin; i--) {
        let offset = Math.floor(Math.random() * (i-begin + 1));
        swap(begin+offset, i, cards);
    }
}

var randomCrossLine = function () {
    deleteCards();
    var types = ['club', 'heart', 'spade', 'diamond'];
    var cards = [];
    for (let i = 0; i < 52; i++) {
        cards.push(i);
    }
    rangeShuffle(cards,0,cards.length-1);
    showCards(cards,types);
}

var randomPerLine = function () {
    deleteCards();
    var types = ['club', 'heart', 'spade', 'diamond'];
    var cards = [];
    for (let i = 0; i < 52; i++) {
        cards.push(i);
    }
    rangeShuffle(cards,0,12);
    rangeShuffle(cards,13,25);
    rangeShuffle(cards,26,38);
    rangeShuffle(cards,39,51);
    showCards(cards,types);
}









