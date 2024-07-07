module.exports = {
  config: {
    name: "jynixff",
    version: "1.0",
    author: "𝗥𝗼𝗖𝗞 𝗘𝘅𝗘",
    countDown: 20,
    role: 0,
    shortDescription: "get ff video",
    longDescription: "get random ff video",
    category: "firefire",
    guide: "{pn} animevdo",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    const loadingMessage = await message.reply({
      body: "Loading jynixff video... Please wait! 🕐",
    });

    const link = [
      "https://tinyurl.com/268cp8o5",
      "https://tinyurl.com/26fyyetm",
      "https://tinyurl.com/28veqgst",
      "https://tinyurl.com/2c6dfpls",
      "https://tinyurl.com/27fkqtym",
      "https://tinyurl.com/25kwxgd2",
      "https://tinyurl.com/2cv77p8u"
      "https://tinyurl.com/2b5g36vg",
      "https://tinyurl.com/26fsew5k",

      
  
      
      // Add more video links here
    ];

    const availableVideos = link.filter(video => !this.sentVideos.includes(video));

    if (availableVideos.length === 0) {
      this.sentVideos = [];
    }

    const randomIndex = Math.floor(Math.random() * availableVideos.length);
    const randomVideo = availableVideos[randomIndex];

    this.sentVideos.push(randomVideo);

    if (senderID !== null) {
      message.reply({
        body: 'ENJOY..🤍',
        attachment: await global.utils.getStreamFromURL(randomVideo),
      });

      setTimeout(() => {
        api.unsendMessage(loadingMessage.messageID);
      }, 5000);
    }
  },
}; 
