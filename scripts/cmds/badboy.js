module.exports = {
    config: {
        name: "badboy",
        version: "1.0",
        author: "MR.AYAN", //** original author fb I'd :  **//
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "ayan") return message.reply("আমাকে বলতে পারেন বস ঘুমাইছে-!!🥀");
}
}; 
