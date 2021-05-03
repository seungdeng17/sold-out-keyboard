const CronJob = require("cron").CronJob;
const axios = require("axios");
const { JSDOM } = require("jsdom");
const { sendEmail } = require("../mail/sender.js");

module.exports = async function () {
  new CronJob(
    "0 * * * * *",
    async function () {
      const baseUrl = "https://www.leopold.co.kr/Shop/Item.php?ItId=";
      const arr = ["1550022100"];

      const res = await axios(baseUrl + arr[0]);
      const dom = new JSDOM(res.data);
      const text = dom.window.document.querySelector("#formItem tbody tr:nth-child(2)").textContent.trim();

      if (text.match(/품절/)) return console.log("품절 상태");
      sendEmail("stlee@rsupport.com", arr[0]);
    },
    function () {
      console.log("Error CronJob.");
    },
    true,
    "Asia/Seoul",
  );
};
