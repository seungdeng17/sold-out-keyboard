const CronJob = require("cron").CronJob;
const axios = require("axios");
const { JSDOM } = require("jsdom");
const { sendEmail } = require("../mail/sender.js");

module.exports = async function (db) {
  new CronJob(
    "0 * * * * *",
    function () {
      const baseUrl = "https://www.leopold.co.kr/Shop/Item.php?ItId=";
      const keyboardTable = db.get("keyboard").value();
      console.log(keyboardTable);

      keyboardTable.forEach(async ({ number, email }) => {
        const res = await axios(baseUrl + number);
        const dom = new JSDOM(res.data);
        const text = dom.window.document.querySelector("#formItem tbody tr:nth-child(2)").textContent.trim();

        if (text.match(/품절/)) return console.log("품절 상태");
        sendEmail(email, number);
      });
    },
    function () {
      console.log("Error CronJob.");
    },
    true,
    "Asia/Seoul",
  );
};
