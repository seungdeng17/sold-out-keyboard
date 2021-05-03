const CronJob = require("cron").CronJob;
const axios = require("axios");
const { JSDOM } = require("jsdom");
const { sendEmail } = require("../mail/sender.js");

module.exports = async function (db) {
  new CronJob(
    "0 0 * * * *",
    function () {
      const baseUrl = "https://www.leopold.co.kr/Shop/Item.php?ItId=";
      const keyboardTable = db.get("keyboard").value();

      if (!keyboardTable.length) return;

      keyboardTable.forEach(async ({ number, email }) => {
        const res = await axios(baseUrl + number);
        const dom = new JSDOM(res.data);
        const el = dom.window.document.querySelector("#formItem tbody tr:nth-child(2)");

        if (!el) return db.get("keyboard").remove({ email, number }).write();
        if (el.textContent.trim().match(/품절/)) return;

        sendEmail(email, number);
        db.get("keyboard").remove({ email, number }).write();
      });
    },
    function () {
      console.log("Error CronJob.");
    },
    true,
    "Asia/Seoul",
  );
};
