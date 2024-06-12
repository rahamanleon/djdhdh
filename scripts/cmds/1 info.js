const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
  config: {
    name: "info",
    aliases: ["inf", "in4"],
    version: "2.0",
    author: "MR.AYAN",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "",
      en: "Sends information about the bot and admin along with an image."
    },
    longDescription: {
      vi: "",
      en: "Sends information about the bot and admin along with an image."
    },
    category: "Information",
    guide: {
      en: "{pn}"
    },
    envConfig: {}
  },

  onStart: async function ({ message }) {
    this.sendInfo(message);
  },

  onChat: async function ({ event, message }) {
    if (event.body && event.body.toLowerCase() === "info") {
      this.sendInfo(message);
    }
  },

  sendInfo: async function (message) {
    const botName = "♡︎Your baby";
    const botPrefix = ".";
    const authorName = "𝘽𝘼𝘿𝘽𝙊𝙔";
    const authorFB = "https://m.me/NOOBS.DEVELOPER.AYAN";
    const authorInsta = "secret";
    const status = "𝙇𝙤𝙖𝙙𝙞𝙣𝙜";

    const urls = JSON.parse(fs.readFileSync('scripts/cmds/assets/info.json'));
    const link = urls[Math.floor(Math.random() * urls.length)];

    const now = moment().tz('Asia/Dhaka');
    const date = now.format('MMMM Do YYYY');
    const time = now.format('h:mm:ss A');

    const uptime = process.uptime();
    const seconds = Math.floor(uptime % 60);
    const minutes = Math.floor((uptime / 60) % 60);
    const hours = Math.floor((uptime / (60 * 60)) % 24);
    const days = Math.floor(uptime / (60 * 60 * 24));
    const uptimeString = `${hours}h ${minutes}m ${seconds}sec`;

    message.reply({
      body: `
𝘽𝙊𝙏 & 𝙊𝙒𝙉𝙀𝙍 𝙄𝙉𝙁𝙊
_________________________
___________________________
𝘽𝙊𝙏 𝙉𝘼𝙈𝙀↠ ${botName}

𝘽𝙊𝙏 𝙋𝙍𝙀𝙁𝙄𝙓↠ ${botPrefix}

𝙊𝙒𝙉𝙀𝙍 𝙉𝘼𝙈𝙀↠ ${authorName}

𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆↠ ${authorFB}

𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈↠ ${authorInsta}

𝙎𝙏𝘼𝙏𝙐𝙎↠ ${status}

𝘿𝘼𝙏𝙀↠ ${date}

𝙏𝙄𝙈𝙀↠ ${time}

𝙐𝙋𝙏𝙄𝙈𝙀↠ ${uptimeString}

﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋
𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙄𝙉𝙂 ↠ \➪${botName}
﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏`,
      attachment: await global.utils.getStreamFromURL(link)
    });
  }
};
