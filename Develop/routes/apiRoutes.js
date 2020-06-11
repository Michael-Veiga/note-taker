// require express
const router = require("express").Router();
// require the class file so you can use the functions that you created
const notebook = require("../db/notebook");

// get request for /api/notes
router.get("/notes", function (req, res) {
  // call the getNotes() from the class that you required
  notebook
    .getNotes()
    // res.json(notes)
    .then((notes) => res.json(notes));
});

// post request for /api/notes
router.post("/notes", function (req, res) {
  // call the addNotes() from the class that you required
  notebook
    .addNotes(req.body)
    // res.json(note)
    .then((note) => res.json(note));
});

//  /api/notes/:id
// call the deleteNote() function
