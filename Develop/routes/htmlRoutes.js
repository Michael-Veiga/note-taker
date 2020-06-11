// install your packages which may include 'path', 'express' (router from express)
const path = require("path");
var router = require("express").Router();
// get /notes route
router.get("/notes", function (req, res) {
  // sendFile() - directory, filename you want displayed
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// get "*" route
router.get("*", function (req, res) {
  // sendFile() - directory, filename you want displayed
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// export the Router
module.exports = router;
