(function () {
    try {
        throw new Error();
    } catch (x) {
        console.log(x);
        var x = 1, y = 2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();
//1
//undefined
//2
