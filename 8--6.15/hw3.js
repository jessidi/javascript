const http = require('http');
const url = require('url');

const server = http.createServer(function(req,res){
    let pathname = url.parse(req.url).pathname;
    let query = url.parse(req.url).query;
    console.log(pathname);
    console.log(query);
    if(pathname === '/api/parsetime'){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let time = query.split("T")[1].split(".")[0].split(":");
        let hour = time[0];
        let minute = time[1];
        let second = time[2];
        let obj = {
            hour: hour,
            minute: minute,
            second: second
        };
        res.end(JSON.stringify(obj)); 
    } else if(pathname === '/api/unixtime'){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let time = query.split("T")[0].split("=")[1].split("-");
        let unix = new Date(time[0], time[1], time[2]).getTime();
        res.end(JSON.stringify({unixtime: unix}));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h2>Please enter valid url<h2>');
    }
});

const port = process.argv[2];
server.listen(port, function() {
    console.log(`server startd on port ${port}...`);
});