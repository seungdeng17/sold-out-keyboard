const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", require("./routes/api"));

const port = 3001;

// Database
const { db } = require("./db.js");

// Scheduler
require("./scheduler/keyboard.js")(db);

app.listen(port, function () {
  console.log("Express server has started on port " + port);
});
