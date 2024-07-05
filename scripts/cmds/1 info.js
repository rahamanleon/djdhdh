const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
  config: {
    name: "information",
    aliases: ["info", "in4"],
    version: "2.0",
    author: "𝗥𝗼𝗖𝗞 𝗘𝘅𝗘",
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
    const botName = "𝗬𝗼𝘂𝗿 𝗯𝗮𝗯𝘆";
    const botPrefix = "!";
    const authorName = "𝗘𝘅𝗘 𝗕𝗔𝗗𝗕𝗢𝗬";
    const authorFB = "𝗹𝗼𝗮𝗱𝗶𝗻𝗴";
    const authorInsta = "𝗹𝗼𝗮𝗱𝗶𝗻𝗴";
    const relationship = "𝘀𝗲𝗰𝗿𝗲𝘁";

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
≡≡║Bot & Owner Info║≡≡
__________________________

    Bot Name: ${botName}

    Bot Prefix: ${botPrefix}

    Owner Name: ${authorName}
  
    Facebook: ${authorFB}

    Instagram: ${authorInsta}

    relationship: ${relationship}
     
    Date: ${date}

    Time: ${time}

    Uptime: ${uptimeString}

______________________________
 𝗧𝗵𝗮𝗻𝗸𝘀 𝗳𝗼𝗿 𝘂𝘀𝗶𝗻𝗴: \${botName}
______________________________`,
      attachment: await global.utils.getStreamFromURL(link)
    });
  }
};
