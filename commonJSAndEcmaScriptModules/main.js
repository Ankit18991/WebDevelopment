/* // const http = require('node:http');
import http from "http"

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1> Hello World </h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/

/* --> By making the "type: module" in package.json file
import {a, b} from "./myModules.js"             // Importing Named EXPORTS
console.log(a, b)

import utkarsh from "./myModules.js"            // Importing Default Exports
console.log(utkarsh)
//  This worked because we are importing the defaul values from this defaul export object byn any name, it could be named as utkarsh, harry or the original name 'obj' because we are importing the default exported value from the "myModules.js" as 'utkarsh'..
*/

// Using simple require()
const a = require("./myModule2.js");
console.log(a, __dirname, __filename);