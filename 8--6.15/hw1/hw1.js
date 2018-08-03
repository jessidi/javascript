var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/matrix', function (req, res) {
    let n = req.query.number;
    console.log(n);
    if(n === '' || n === undefined) {
      res.sendFile(__dirname + '/hw1.html');
      return;
    }
    let parseN = parseInt(n);
    if(parseN <= 0 || isNaN(parseN) || parseN != n) {
      res.render('errpage');
      return;
    } 
    let array = getSpiral(n);
    // res.send('<!DOCTYPE><html> <head><meta charset="utf-8"><title>Spiral Matrix</title></head><body><div class="in" style="text-align: center">'
    //        +'<h1>Spiral Matrix</h1><form method="get" action="/matrix" id="pass"><input id="num" type="text" name="number" placeholder="please enter an integer" >'
    //        +'<input type="submit" class="btn">Get Spiral Matrix!</button><div>'+array+'</div></form></div></body></html>');
    res.render('matrix', {array:array});
});


app.listen(3000, () => {
    console.log('server started on port 3000...');
});

function getSpiral(n){
  let array = [[]];
  let num = 1;
  let left = 0, right = n - 1, top = 0, bottom = n - 1;
  while(left < right && top < bottom){
      if(array[top] === undefined) array[top] = [];
      if(array[bottom] === undefined) array[bottom] = [];
      for(let i = left; i < right; i++){
          array[top][i] = num++;
      }
      for(let i = top; i < bottom; i++){
          if(array[i] === undefined) array[i] = [];
          array[i][right] = num++;
      }
      for(let i = right; i > left; i--){
          array[bottom][i] = num++;
      }
      for(let i = bottom; i > top; i--){
          array[i][left] = num++;
      }
      top++;
      bottom--;
      left++;
      right--;
  }
  if(n % 2 === 1) array[(n-1) / 2][(n-1) / 2] = num;
  return array;
}
