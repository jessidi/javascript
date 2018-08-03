const http = require('http');
const map = require('through2-map');
const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'plain/text' })
    if(req.method !== 'POST'){
        res.end('Please send me a POST request!');
    } else {
        req.pipe(map(chunk => {
            return chunk.toString().toUpperCase();
        })).pipe(res);
    }
});
const port = process.argv[2];
server.listen(port, () => {
    console.log(`server started on port ${port}...`);
    
})