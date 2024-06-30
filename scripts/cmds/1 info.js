const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
  config: {
    name: "info",
    aliases: ["owner", "admin"],
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
    const botName = "𝗬𝗼𝘂𝗿 𝗕𝗮𝗯𝘆";
    const botPrefix = ".";
    const authorName = "𝗕𝗔𝗗𝗕𝗢𝗬";
    const gender = "𝗠𝗮𝗹𝗲";
    const relationship = "𝗦𝗲𝗰𝗿𝗲𝘁";
    const authorFB = "𝗞𝘂𝗷𝗲 𝗱𝗲𝗸𝗵𝗼 𝗽𝗲𝘆𝗲 𝗷𝗮𝗶𝗯𝗮";
    const status = "𝗛𝗮𝘁𝗲𝗿𝘀 𝗮𝗿𝗲 𝗺𝘆 𝗺𝗼𝘁𝗶𝘃𝗮𝘁𝗼𝗿𝘀";

    const urls = JSON.parse(fs.readFileSync('scripts/cmds/assets/info.json'));
    const link = urls[Math.floor(Math.random() * urls.length)];

    const now = moment().tz('Asia/Dhaka');

    const uptime = process.uptime();
    const seconds = Math.floor(uptime % 60);
    const minutes = Math.floor((uptime / 60) % 60);
    const hours = Math.floor((uptime / (60 * 60)) % 24);
    const days = Math.floor(uptime / (60 * 60 * 24));
    const uptimeString = `${hours}h ${minutes}m ${seconds}sec`;

    message.reply({
      body: `
𝐀𝗱𝗺𝗶𝗻 𝐈𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻

◊──────────────────◊

          Name: ${authorName}

          Gender: ${gender}

          Facebook: ${authorFB}

          relationship: ${relationship}
   
          Status: ${status}

   
◊──────────────────◊
Thanks for using : ${botName}
`,
      attachment: await global.utils.getStreamFromURL(link)
    });
  }
};
