
const fs = require('fs');

let dirname = process.argv[2];
let type = process.argv[3];

fs.readdir(dirname, function(err, files) {    
    let res = files.filter((s) => {
        let idx = s.indexOf('.');   
        let sub = s.substring(idx + 1);
        return sub === type;
    }).join('\n');
    console.log(res);
    
});

