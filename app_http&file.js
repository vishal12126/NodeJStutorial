const http = require('http');
const fs = require('fs');

http.createServer((req,res) => {
    //return html file example
    // const readStream = fs.createReadStream('./static/index.html');
    // res.writeHead(200,{'content-type': 'text/html'});

    //return json
    // const readStream = fs.createReadStream('./static/example.json');
    // res.writeHead(200,{'content-type': 'application/json'});

    //return image file
    const readStream = fs.createReadStream('./static/example.png');
    res.writeHead(200,{'content-type': 'image/png'});
    readStream.pipe(res);
}).listen(3000);