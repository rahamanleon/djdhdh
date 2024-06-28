const axios = require("axios");

const baseApiUrl = async () => {
  const base = await axios.get(`https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`);
  return base.data.api;
};

module.exports.config = {
  name: "bby",
  aliases: ["baby", "janu"],
  version: "1.0.0",
  role: 0,
  author: "dipto", //modified by xnil
  description: "better than all Sim simi with multiple conversation",
  guide: { en: "[message]" },
  category: "ChatBots",
  coolDowns: 5,
};

module.exports.onReply = async function ({ api, event }) {
  if (event.type === "message_reply") {
    const reply = event.body.toLowerCase();
    if (isNaN(reply)) {
      try {
        const baseUrl = await baseApiUrl();
        const response = await axios.get(`${baseUrl}/baby?text=${encodeURIComponent(reply)}`);
        const ok = response.data.reply;
        await api.sendMessage(
          ok,
          event.threadID,
          (error, info) => {
            if (!error) {
              global.GoatBot.onReply.set(info.messageID, {
                commandName: this.config.name,
                type: "reply",
                messageID: info.messageID,
                author: event.senderID,
                link: ok,
              });
            }
          },
          event.messageID,
        );
      } catch (error) {
        console.error(`Failed to get a reply: ${error.message}`);
        api.sendMessage(`Error: ${error.message}`, event.threadID, event.messageID);
      }
    }
  }
};

module.exports.onChat = async function ({ event, api }) {
  const body = event.body && event.body.toLowerCase().trim();
  if (body === "bby") {
const msgs = ["𝗕𝗲𝘀𝗵𝗶 𝗱𝗮𝗸𝗹𝗲 𝗮𝗺𝗺𝘂 𝗯𝗼𝗸𝗮 𝗱𝗲𝗯𝗮 𝘁𝗼__🥺",
        "𝗕𝗯𝘆 না জানু, বল 😌",
        "বেশি bby Bbby করলে leave নিবো কিন্তু 😒😒",
        "__বেশি বেবি বললে কামুর দিমু 🤭🤭",
        "𝙏𝙪𝙢𝙖𝙧 𝙜𝙛 𝙣𝙖𝙞, 𝙩𝙖𝙮 𝙖𝙢𝙠 𝙙𝙖𝙠𝙨𝙤? 😂😂😂",
        "𝗕𝗯𝘆 না বলে 𝗕𝗼𝘄 বলো 😘",
        "এই এই তোর পরীক্ষা কবে? শুধু 𝗕𝗯𝘆 𝗯𝗯𝘆 করিস 😾",
        "তোরা যে হারে 𝗕𝗯𝘆 ডাকছিস আমি তো সত্যি বাচ্চা হয়ে যাবো_☹😑",
        "আজব তো__😒",
        "𝗕𝗯𝘆 𝗕𝗯𝘆 না করে আমার বস মানে,,BADBOY ,BADBOY ও তো করতে পারো😑?",
        "আমার সোনার বাংলা, তারপরে লাইন কি? 🙈",
        "🍺 এই নাও জুস খাও..!𝗕𝗯𝘆 বলতে বলতে হাপায় গেছো না 🥲",
        "হটাৎ আমাকে মনে পড়লো 🙄",
        "আমি তোমার সিনিয়র আপু ওকে 😼সম্মান দেও🙁",
        "𝗛𝗲𝘆 𝗛𝗮𝗻𝗱𝘀𝗼𝗺𝗲 বলো 😁😁",
        "আরে Bolo আমার জান, কেমন আসো? 😚",
        "একটা 𝑩𝑭 খুঁজে দাও 😿",
        "ফ্রেন্ড রিকোয়েস্ট দিলে ৫ টাকা দিবো 😗",
        "৩২ তারিখ আমার বিয়ে 🐤",
        "হা বলো😒,কি করতে পারি😐😑?",
        "শুনবো না😼 তুমি আমাকে প্রেম করাই দাও নি🥺 পচা তুমি🥺",
        "আগে একটা গান বলো, ☹ নাহলে কথা বলবো না 🥺",
        "বলো কি করতে পারি তোমার জন্য 😚",
        "কথা দেও আমাকে পটাবা...!! 😌",
        "বার বার Disturb করেছিস কোনো 😾, আমার জানু এর সাথে ব্যাস্ত আসি 😋",
        "আমাকে না দেকে একটু পড়তে বসতেও তো পারো 🥺🥺",
        "বার বার ডাকলে মাথা গরম হয় কিন্তু 😑😒",
        "ওই তুমি single না?🫵🤨 😑😒",
        "বলো জানু 😒",
        "Meow🐤",
        "আর কত বার ডাকবা ,শুনছি তো 🤷🏻‍♀️",
        "কি হলো, মিস টিস করচ্ছো নাকি 🤣",
        "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈",
        "আজকে আমার mন ভালো নেই 🙉"];
const rMsg = msgs[Math.floor(Math.random() * msgs.length)];

api.sendMessage(rMsg, event.threadID, (error, info) => {
            if (!error) {
              global.GoatBot.onReply.set(info.messageID, {
                commandName: this.config.name,
                type: "reply",
                messageID: info.messageID,
                author: event.senderID,
                link: rMsg,
              });
            }
          }, event.messageID);
  } else if (body.startsWith("bby ")) {
    const query = body.slice(4).trim();
    if (query) {
      try {
        const baseUrl = await baseApiUrl();
        const response = await axios.get(`${baseUrl}/baby?text=${encodeURIComponent(query)}`);
        const reply = response.data.reply;
        await api.sendMessage(
          { body: reply },
          event.threadID,
          (error, info) => {
            if (!error) {
              global.GoatBot.onReply.set(info.messageID, {
                commandName: this.config.name,
                type: "reply",
                messageID: info.messageID,
                author: event.senderID,
                link: reply,
              });
            }
          },
          event.messageID,
        );
      } catch (error) {
        console.error(`Failed to get an answer: ${error.message}`);
        api.sendMessage(`Error: ${error.message}.\nAn error occurred.`, event.threadID, event.messageID);
      }
    }
  }
};

module.exports.onStart = async function ({ api, args, event }) {
  try {
    const query = args.join(" ").toLowerCase();
    if (!query) {
const msgs = ["𝗕𝗲𝘀𝗵𝗶 𝗱𝗮𝗸𝗹𝗲 𝗮𝗺𝗺𝘂 𝗯𝗼𝗸𝗮 𝗱𝗲𝗯𝗮 𝘁𝗼__🥺",
        "𝗕𝗯𝘆 না জানু, বল 😌",
        "বেশি bby Bbby করলে leave নিবো কিন্তু 😒😒",
        "__বেশি বেবি বললে কামুর দিমু 🤭🤭",
        "𝙏𝙪𝙢𝙖𝙧 𝙜𝙛 𝙣𝙖𝙞, 𝙩𝙖𝙮 𝙖𝙢𝙠 𝙙𝙖𝙠𝙨𝙤? 😂😂😂",
        "𝗕𝗯𝘆 না বলে 𝗕𝗼𝘄 বলো 😘",
        "এই এই তোর পরীক্ষা কবে? শুধু 𝗕𝗯𝘆 𝗯𝗯𝘆 করিস 😾",
        "তোরা যে হারে 𝗕𝗯𝘆 ডাকছিস আমি তো সত্যি বাচ্চা হয়ে যাবো_☹😑",
        "আমার সোনার বাংলা, তারপরে লাইন কি? 🙈",
        "🍺 এই নাও জুস খাও..!𝗕𝗯𝘆 বলতে বলতে হাপায় গেছো না 🥲",
        "হটাৎ আমাকে মনে পড়লো 🙄",
        "𝗛𝗲𝘆 𝗛𝗮𝗻𝗱𝘀𝗼𝗺𝗲 বলো 😁😁",
        "আরে Bolo আমার জান, কেমন আসো? 😚",
        "একটা 𝑩𝑭 খুঁজে দাও 😿",
        "ফ্রেন্ড রিকোয়েস্ট দিলে ৫ টাকা দিবো 😗",
        "৩২ তারিখ আমার বিয়ে 🐤",
        "আগে একটা গান বলো, ☹ নাহলে কথা বলবো না 🥺",
        "বলো কি করতে পারি তোমার জন্য 😚",
        "°কথা দেও আমাকে পটাবা...!! 😌",
        "বার বার Disturb করেছিস কোনো 😾, আমার জানু এর সাথে ব্যাস্ত আসি 😋",
        "আমাকে না দেকে একটু পড়তেও বসতে তো পারো 🥺🥺",
        "বার বার ডাকলে মাথা গরম হয় কিন্তু 😑😒",
        "ওই তুমি single না?🫵🤨 😑😒",
        "বলো জানু 🌚",
        "কি হলো, মিস টিস করচ্ছিস নাকি 🤣",
        "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈",
        "আজকে আমার মন ভালো নেই 🙉"];
const rMsg = msgs[Math.floor(Math.random() * msgs.length)];

api.sendMessage(rMsg, event.threadID, event.messageID);
    }
    const baseUrl = await baseApiUrl();
    const response = await axios.get(`${baseUrl}/baby?text=${encodeURIComponent(query)}`);
    const reply = response.data.reply;
    await api.sendMessage(
      { body: reply },
      event.threadID,
      (error, info) => {
        if (!error) {
          global.GoatBot.onReply.set(info.messageID, {
            commandName: this.config.name,
            type: "reply",
            messageID: info.messageID,
            author: event.senderID,
            link: reply,
          });
        }
      },
      event.messageID,
    );
  } catch (error) {
    console.error(`Failed to get an answer: ${error.message}`);
    api.sendMessage(`${error.message}.\nAn error occurred.`, event.threadID, event.messageID);
  }
};
