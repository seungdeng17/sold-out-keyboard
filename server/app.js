// require("./scheduler/keyboard.js")();

const { db } = require("./db.js");
db.get("keyboard")
  .push({
    number: "1550022100",
    email: "stlee@rsupport.com",
  })
  .write();

console.log(db.get("keyboard").value());
