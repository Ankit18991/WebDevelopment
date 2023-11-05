const express = require('express');
const fs = require('fs');
const path = require('path');
const pug = require('pug');
const app = express();

const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));  // For serving static files
// We are gonna use a middleware to get the data of the user as soon as he or she posts request/submits the form
app.use(express.urlencoded());
// This middleware helps to bring your form's data to Express

// PUG SPECIFIC STUFF/CONFIGURATION
app.set('view engine', 'pug');      // Set the template engine as pug
app.set('views',path.join(__dirname, 'views'));   // Set the View directory

// ENDPOINTS
app.get("/",(req, res) =>{
    const con = "This is The best content on pug on the internet so far, so use it wisely."
    const params = {'title': 'pubG is the best game', 'content': con};
    res.status(200).render('index.pug',params);
    // we will also have to send or render the variable that we are gonna use on the pug html file
});

app.post("/",(req, res) =>{
    let naam = req.body.name;
    age = req.body.age;
    gendar = req.body.gender;
    address = req.body.address;
    more = req.body.more;
    // we accessing the values in the name attribute of the input tag of our form..Whatyever we wrote in the name attribut of inout tag, we are using to access it here in variables.(we did .name, .address ,.. to access it one by one)
    // TO get the response of use in the form
    let outputToWrite = `The name of the Client is ${naam} \n ${age} years old \n ${gendar} \n Residing at --> ${address} \n More About Him/Her: ${more} \n \n`;
    fs.writeFileSync("./static/output.txt",outputToWrite);
    const con = "You have Filled THe form";
    const params = {'message': 'Your From Has been Submitted Succesfully', 'content': con};
    res.status(200).render('index.pug',params);
});


// START THE SERVER
app.listen(port, () => {
    console.log(`The Application successfully On the post ${port}`);
    console.log(`We also used the nodemon to contantly udate the server to constantly cope wioth the changes made in the original file`);
});

// In case if the pug template does notload, just delete the node-modules folder and reinstall everything :)