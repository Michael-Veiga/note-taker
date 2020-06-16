// require express
const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const db = path.join(__dirname, "../db/db.json");
const { v4: uuidv4 } = require("uuid");

// get request for /api/notes
router.get("/notes", function (req, res) {
  // read from data file using fs
  fs.readFile(db, "utf-8", (err, data) => {
    if (err) {
      throw err;
    }
    // res.json(data)
    res.json(JSON.parse(data));
    console.log("notes have been returned");
  });
});

// post request for /api/notes
router.post("/notes", (req, res) => {
  // create a variable that adds a note
  let addNote = req.body;
  // create an array for note title text and id
  let notesArray = [];
  // read from data file using fs
  fs.readFile(db, "utf8", (err, data) => {
    if (err) {
      throw err;
    }
    notesArray = JSON.parse(data);

    if (!notesArray) {
      throw new error("Note must have title and text");
    }
    // use uuid to assign each new note
    addNote.id = uuidv4();
    // push the array to the addNote variable only after realizing an hour later that the push() function was fine, but you accidentally deleted your db.json
    notesArray.push(addNote);

    // write to the data file
    fs.writeFile(db, JSON.stringify(notesArray), (err) => {
      if (err) {
        throw err;
      }
      console.log("Your note has been added successfully");
    });
  });
  res.json(addNote);
});
// delete request "notes/:id"
router.delete("/notes/:id", (req, res) => {
  let addNote = req.body;
  let notesArray = [];
  fs.readFile(db, "utf8", (err, data) => {
    if (err) {
      throw err;
    }

    notesArray = JSON.parse(data);
    // create a variable to hold request parameters
    let selector = req.params.id;
    // filter the notesArray to single out any non-matching ids so that the right note is deleted
    const findId = notesArray.filter((note) => {
      // return the note id and selector
      return note.id != selector;
    });

    // write to the data file with the updated information
    fs.writeFile(db, JSON.stringify(findId), (err) => {
      if (err) {
        throw err;
      } else {
        console.log("Your notes have been replaced");
      }
    });
  });
  res.json(addNote);
});

module.exports = router;
