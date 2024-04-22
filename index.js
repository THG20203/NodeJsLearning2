const fs = require("fs");
/* superagent module, a popular library for making HTTP requests. */
const superagent = require("superagent");

/* This function reads the content of a file named dog.txt located in
the same directory as the script (__dirname is a Node.js global variable 
that holds the directory path of the current module). The readFile 
function is asynchronous and takes a callback function that executes 
once the file read operation is complete or if it encounters an error.
err: If an error occurs during the file read operation, this parameter will 
contain an error object. data: If the file is read successfully, this 
parameter contains the contents of the file. */
fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
    console.log(`Breed: ${data}`);

    superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .end((err, res) => {
        console.log(res.body.message);

        /* callback function to save in new file */
        fs.writeFile()
    });
});