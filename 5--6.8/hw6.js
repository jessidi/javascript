
function getSpiral(){
    $("table").remove();
    $("p").remove();
    let n = document.getElementById("num").value;
    document.getElementById("num").value = "";
    if(isNaN(n) || parseInt(n) != n || n == 0) {
        invalidMessage();
        return;
    }

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
    createTable(array);
}

function invalidMessage(){
    var p = document.createElement('p');
    var textnode = document.createTextNode('Please enter valid integer!');
    p.appendChild(textnode);
    document.body.appendChild(p);
}

function createTable(data){
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');
    data.forEach(rowData => {
        var row = document.createElement('tr');
        rowData.forEach(x => {
            var cell = document.createElement('td');
            cell.appendChild(document.createTextNode(x));
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });
    table.appendChild(tableBody);
    document.body.appendChild(table);
}
