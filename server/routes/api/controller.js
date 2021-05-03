const { db } = require("../../db.js");

// [POST] 키보드, 이메일 알림 추가
exports.addKeyboard = (req, res) => {
  const { email, number } = req.body;
  if (!email || !number) return res.status(404).json({ result: false, message: "메일 주소와 제품 번호를 정확히 입력해주세요." });

  const keyboardTable = db.get("keyboard").value();
  const duplicateData = keyboardTable.filter((data) => data.email === email && data.number === number);

  if (duplicateData.length) return res.status(200).json({ result: false, message: "이미 등록 된 정보에요." });

  db.get("keyboard")
    .push({
      email,
      number,
    })
    .write();

  return res.status(201).json({ result: true, message: "등록 되었어요." });
};

// [DELETE] 키보드, 이메일 알림 삭제
exports.removeKeyboard = (req, res) => {
  const { email, number } = req.body;
  if (!email || !number) return res.status(404).json({ result: false, message: "메일 주소와 제품 번호를 정확히 입력해주세요." });

  const keyboardTable = db.get("keyboard").value();
  const removeData = keyboardTable.filter((data) => data.email === email && data.number === number);

  if (!removeData.length) return res.status(200).json({ result: false, message: "조회 된 정보가 없네요." });

  db.get("keyboard")
    .remove({
      email,
      number,
    })
    .write();

  return res.status(200).json({ result: true, message: "삭제 되었어요." });
};
