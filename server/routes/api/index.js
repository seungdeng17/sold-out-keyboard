const router = require("express").Router();
const controller = require("./controller.js");

// [POST] 키보드, 이메일 알람 추가
router.post("/keyboard", controller.addKeyboard);

// [DELETE] 키보드, 이메일 알람 삭제
router.delete("/keyboard", controller.removeKeyboard);

// [GET] 메일로 등록한 내용 조회
router.get("/keyboard", controller.getKeyboard);

module.exports = router;
