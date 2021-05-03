const { db } = require("../../db.js");

// [POST] 키보드, 이메일 알림 추가
exports.addKeyboard = (req, res) => {
  const { email, number } = req.body;
  if (!email || !number) return res.status(400).json({ resultCode: "400", message: "메일 주소와 제품 번호를 정확히 입력하세요." });

  const keyboardTable = db.get("keyboard").value();
  const duplicateEmail = keyboardTable.filter((data) => data.email === email);
  const duplicateData = keyboardTable.filter((data) => data.email === email && data.number === number);

  if (duplicateData.length) return res.status(200).json({ resultCode: "400", message: "이미 등록 된 정보에요." });
  if (duplicateEmail.length >= 5) return res.status(200).json({ resultCode: "400", message: "메일 당 5건까지 등록돼요." });
  if (keyboardTable.length >= 100) return res.status(200).json({ resultCode: "400", message: "대기열이 모두 찼네요." });

  db.get("keyboard")
    .push({
      email,
      number,
    })
    .write();

  return res.status(201).json({ resultCode: "100", message: "등록 되었어요." });
};

// [DELETE] 키보드, 이메일 알림 삭제
exports.removeKeyboard = (req, res) => {
  const { email, number } = req.body;
  if (!email || !number) return res.status(400).json({ resultCode: "400", message: "메일 주소와 제품 번호를 정확히 입력하세요." });

  const keyboardTable = db.get("keyboard").value();
  const removeData = keyboardTable.filter((data) => data.email === email && data.number === number);

  if (!removeData.length) return res.status(200).json({ resultCode: "400", message: "조회 된 정보가 없네요." });

  db.get("keyboard")
    .remove({
      email,
      number,
    })
    .write();

  return res.status(200).json({ resultCode: "100", message: "삭제 되었어요." });
};

// [GET] 메일로 등록한 내용 조회
exports.getKeyboard = (req, res) => {
  const { email } = req.query;
  if (!email) return res.status(400).json({ resultCode: "400", message: "메일를 정확히 입력하세요." });

  const keyboardTable = db.get("keyboard").value();
  const duplicateEmail = keyboardTable.filter((data) => data.email === email);

  return res.status(200).json({ resultCode: "100", data: duplicateEmail });
};
