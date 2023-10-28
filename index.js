const http = require('http');
const fs = require('fs');
const { createSecretKey } = require('crypto');

const hostname = '127.0.0.1';
const port = 3000;
// const home = fs.readFileSync('index.html');
const home = fs.readFileSync('D:/web development/Javascript/Node.js/customBackend/index.html');
// const about = fs.readFileSync('about.html');
const about = fs.readFileSync('D:/web development/Javascript/Node.js/customBackend/about.html');
// const contact = fs.readFileSync('contact.html');
const contact = fs.readFileSync('D:/web development/Javascript/Node.js/customBackend/contact.html');
// const service = fs.readFileSync('service.html');
const service = fs.readFileSync('D:/web development/Javascript/Node.js/customBackend/service.html');

const server = http.createServer((req, res) =>{
    console.log(req.url);
    let url = req.url;
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    if(url == '/'){
        res.end(home);          // Here we served Home variable withindex.html file
    }

    else if(url =='/about'){
        res.end(about);
    }

    else if(url == '/contact'){
        res.end(contact);
    }

    else if(url == '/service'){
        res.end(service);
    }

    else{
        res.statusCode = 404;
        res.end(`<h1>404 Not Found<h1>`);
    }
})

server.listen(port, hostname, ()=>{
    console.log(`Server Running at http://${hostname}:${port}/`);
})