const axios = require("axios");

module.exports.config = {
  name: "baby",
  version: "1.0.0",
  role: 0, 
  author: "dipto", 
  description: "better then all Sim simi with multiple conversation",
  usePrefix: true,
  guide: "[message]",
  category: "ChatBots",
  coolDowns: 5,
};
module.exports.onReply = async function ({ api, event}) {
  if (event.type == "message_reply") {
  const reply = event.body.toLowerCase();;
  if (isNaN(reply)) {
    const response = await axios.get(`https://nobs-api.onrender.com/dipto/baby?text=${reply}')
{encodeURIComponent(reply)}`)
    const ok = response.data.reply;
    if(response.data.react){
      api.setMessageReaction(response.data.react, event.messageID, (err) => {}, true);
    }
    await api.sendMessage(ok ,event.threadID,(error, info) => {
  global.GoatBot.onReply.set(info.messageID,{
    commandName: this.config.name,
    type: 'reply',
    messageID: info.messageID,
    author: event.senderID,
    link: ok
  })},event.messageID)
  }
  }
}
module.exports.onStart = async function ({ api, args, event }) {
  try {
    const dipto = args.join(" ").toLowerCase();
    if (!args[0]) {
      api.sendMessage(
        "Please provide a question to answer\n\nExample:\nbaby ki koro",
  event.threadID,  event.messageID ); return;}
    if (dipto) {
      const response = await axios.get(`https://nobs-api.onrender.com/dipto/baby?text=${dipto}`);
         const mg = response.data.reply;
      if(response.data.react){
        api.setMessageReaction(response.data.react, event.messageID, (err) => {}, true);
      }
      await api.sendMessage({body: mg ,},event.threadID,(error, info) => {
  global.GoatBot.onReply.set(info.messageID,{
        commandName: this.config.name,
    type: 'reply',
    messageID: info.messageID,
    author: event.senderID,
    link: mg
  })},event.messageID);
    }
  } catch (error) {console.error(`Failed to get an answer: ${error.message}`);
api.sendMessage(`${error.message}.\nAn error`,event.threadID,event.messageID);}
};
