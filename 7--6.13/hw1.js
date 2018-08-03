let request = require('request');

let f = () => {
    return new Promise((reslove, reject) => {
        request('https://www.w3schools.com/angular/customers.ph', (error, response, body) => {
            if(error || response.statusCode !== 200) reject({error, response, body});
            else {
                reslove({response, body});
            }
        });
    });
}

f().then((val) => {
    console.log(val.response.statusCode);
    console.log(val.body);
}).catch((e) => {
    console.log('Error:', e.response.statusCode, e.response.statusMessage);
});