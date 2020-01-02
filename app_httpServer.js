const http = require('http');
const server = http.createServer((req,res) => {
    if(req.url ==='/') { // condition for root domain
    res.write('hello world from node js server'); // will create what response we want to send
    res.end(); //Will send response
    } else {
        res.write('using some other domain'); 
    res.end(); 
    }
});

server.listen('3000'); //defining on what port does our server will listen