const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// initialize the app and create a port
const app = express();
const PORT = 8080;

// set up middleware to handle post data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Start the server on port
app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));
