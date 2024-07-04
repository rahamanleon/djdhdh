js module.exports = {

 config: {

   name: "bye",

   version: "1.0",

   author: "𝗥𝗼𝗖𝗞 𝗘𝘅𝗘",

   countDown: 5,

   role: 0,

   shortDescription: "no prefix",

   longDescription: "no prefix",

   category: "no prefix",

 },

  

 onStart: async function(){}, 

 onChat: async function({ event, message, getLang }) {

 if (event.body && event.body.toLowerCase() === "bye") {

 return message.reply({

 body: "𝗧𝗮𝗧𝗮 👸",

 attachment: await global.utils.getStreamFromURL("https://drive.google.com/uc?export=download&id=1-VA3LhKBgiRwocKtPqTsYa242LdZhDdm")

 });

 }

 }

}
