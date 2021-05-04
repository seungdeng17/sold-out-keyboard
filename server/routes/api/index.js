const router = require("express").Router();
const controller = require("./controller.js");

router.post("/keyboard", controller.addKeyboard);
router.delete("/keyboard", controller.removeKeyboard);
router.get("/keyboard", controller.getKeyboard);

router.get("/admin/db", controller.getDB);

module.exports = router;
