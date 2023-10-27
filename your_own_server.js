const fs = require('fs');
const http = require('http');
const fileContent = fs.readFileSync("D:/web development/Javascript/Node.js/geting_info.html", "utf-8");
// Sync to makew the reading function to be synchronous
// Reading an HTML file to serve it on the server creating using the http module ....

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type' : 'text/html'});
    res.end(fileContent);
    // To serve it on the server after reading it
    // req -> request AND res -> response
});

// Till now we have made the server and now we will make this server lisetn on its port[Most accurate andprecise line for the notes]

// server.listen(80, '127.0.0.1', () => {
//     console.log(`\n Listening on the port 80`);
// });

// The reason for listening to the server at port 80 is that we dont have to explicitly write anything else in the URL. For ex- If Wer have taken 8000, we have to explicity write it on the URL to get the request Back(or in simple word to get out html file on the server while beiong listened to at that port).... 

// Let's listen it on the port 8000
server.listen(8000, '127.0.0.1', ()=>{
    console.log("\n Listening on the port 8000");
});

// Now go to the local host server on ythe brower to get th erequest
