const express = require('express');
const fs = require('fs');
const app = express();

const port = 80;
const home = fs.readFileSync('D:/webdevelopment/Javascript/Node.js/Express/customModule_express/home.html');

const about = fs.readFileSync('D:/webdevelopment/Javascript/Node.js/Express/customModule_express/about.html');

const services = fs.readFileSync('D:/webdevelopment/Javascript/Node.js/Express/customModule_express/services.html');

const membership = fs.readFileSync('D:/webdevelopment/Javascript/Node.js/Express/customModule_express/membership.html');

const contact = fs.readFileSync('D:/webdevelopment/Javascript/Node.js/Express/customModule_express/contact.html');

app.get("/", (req, res) => {
    res.send(home);
});

app.get("/about", (req,res) => {
    res.send(about);
});

app.get("/services", (req, res) => {
    res.send(services);
});

// To get the post request using express at the endpoint '/services'
app.post("/services", (req, res) => {
    // res.send("This is A post request");
    // Only one of these send responses work.  The on eat the top gets sent as a response to the api request at a specific endpoint
    res.send(services);
});


app.get("/membership", (req, res) => {
    res.send(membership);
});

app.get("/contact", (req, res) => {
    res.send(contact);
    // If we make a get api request on the port 80 with the endpoint '/contact', you will get that file as the response in the postman..
});

app.listen(port, () => {
    console.log(`The Application successfully On the post ${port}`);
    console.log(`We also used the nodemon to contantly udate the server to constantly cope wioth the changes made in the original file`);
});