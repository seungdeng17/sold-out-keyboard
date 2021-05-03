const { db } = require("./db.js");
require("./scheduler/keyboard.js")(db);

// db.get("keyboard")
// .push({
//   number: "1550022100",
//   email: "stlee@rsupport.com",
// })
// .write();
