// require the uuidv4 package to generate an { id : uuidv4()}
const uuid = require("uuidv4");
const express = require("express");
const app = express();
const PORT = 8080;
// cosnt fs = require('fs');
class notebook {
  // create getNotes() function
  //  inside of this function, you want to READ from the db.json file
  // contents of the json file will be displayed on the page
  // to read a file - readFile() which is a part of the 'fs' package
  // create addNotes() function
  //   inside of this function you want to write to the file. using the writeFile() from the 'fs'
  // create deleteNotes() function
  //   check against all of the notes to see which one has the id you're looking to delete
  // call getNotes() and then 'filter' the results to find the id you're looking for and return the ones that dont match
}
