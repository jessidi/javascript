const http = require('http');
let list = [];

list.push(process.argv[2]);
list.push(process.argv[3]);
list.push(process.argv[4]);
let fullString = '';
http.get(list[0], (res) => {
    console.log('----------------------Currently getting ----------------------',list[0]);
    
    res.on('data', (data) => {
        fullString += data.toString();
    });
    res.on('end', () => {
        console.log(fullString);
        fullString = '';

        http.get(list[1], (res) => {
            console.log('----------------------Currently getting ----------------------',list[1]);
            res.on('data', (data) => {
                fullString += data.toString();
            });
            res.on('end', () => {
                console.log(fullString);
                fullString = '';
                
                http.get(list[2], (res) => {
                    console.log('----------------------Currently getting ---------------------- ',list[2]);
                    res.on('data', (data) => {
                        fullString += data.toString();
                    });
                    res.on('end', () => {
                        console.log(fullString);
                    });
                });

            });

        });
    });

})

