module.exports.config = {
    name: "album2",
    version: "1.0.3",
    role: 2,
    author: "Nazrul",
    description: "Album video",
    category: "Album",
    countDown: 5
  };
  
  module.exports.onStart = async function({ event, api, args }) {
    if (!args[0]) return api.sendMessage("«------•I|[💫ミ★  𝐍𝐀𝐙𝐑𝐔𝐋 𝐏𝐑𝐎𝐉𝐄𝐂𝐓 𝐕𝐈𝐃𝐄𝐎 𝐋𝐈𝐒𝐓  ★彡💫]|I{•------»\n⊰᯽⊱┈──╌❊𝐍𝐚𝐳𝐫𝐮𝐥❊╌──┈⊰᯽⊱\n𝐍𝐨.𝟎 𒁂 𝐀𝐭𝐭𝐢𝐭𝐮d𝐞 𝗩𝗶𝗱𝗲𝗼'𝘀 😎💫 \n𝐍𝐨.𝟏 𒁂𝗦𝘁𝗮𝘁𝘂𝘀 𝗩𝗶𝗱𝗲𝗼'𝘀 🥰💫 \n𝐍𝐨.𝟐 𒁂 𝗡𝗮𝘁𝘂𝗿𝗮𝗹 𝘃𝗶𝗱𝗲𝗼'𝘀 😽💫 \n𝐍𝐨.𝟑 𒁂 𝗜𝘀𝗹𝗮𝗺𝗶𝗰 𝘃𝗶𝗱𝗲𝗼'𝘀 🕋💫 \n𝐍𝐨.𝟒 𒁂𝗟𝗼𝘃𝗲 𝗩𝗶𝗱𝗲𝗼'𝘀 ❤️💫\n𝐍𝐨.𝟓 𒁂𝗦𝘂𝗿𝗮 𝗩𝗶𝗱𝗲𝗼'𝘀 😊 💫\n𝐍𝐨.𝟔 𒁂 𝗦𝘁𝗮𝘁𝘂𝘀 𝗩𝗶𝗱𝗲𝗼'𝘀 🤔💫\n𝐍𝐨.𝟕 𒁂 𝗙𝗿𝗲𝗲 𝗙𝗶𝗿𝗲 𝗩𝗶𝗱𝗲𝗼'𝘀 😈💫\n𝐍𝐨.𝟖 𒁂𝗦𝗮𝗱 𝗩𝗶𝗱𝗲𝗼'𝘀 🥹💫\n𝐍𝐨.𝟗 𒁂 𝗔𝗻𝗶𝗺𝗲 𝗩𝗶𝗱𝗲𝗼'𝘀 🤠💫\n𝐍𝐨.𝟏𝟎 𒁂 𝗦𝗵𝗼𝗿𝘁 𝗠𝗶𝘅 𝗩𝗶𝗱𝗲𝗼'𝘀 🥳💫 \n𝐍𝐨.𝟏𝟏 𒁂 𝗖𝗼𝘂𝗽𝗹𝗲 𝗩𝗶𝗱𝗲𝗼'𝘀 🧡💫 \n𝐍𝐨.𝟏𝟐 𒁂 𝗖𝘂𝘁𝗲 𝗕𝗮𝗯𝘆 𝗩𝗶𝗱𝗲𝗼'𝘀 🤫💫 \n𝐍𝐨.𝟏𝟑 𒁂 𝗧𝗿𝘂𝗲 𝗟𝗶𝗻𝗲 𝗩𝗶𝗱𝗲𝗼'𝘀 🙂💫\n\n«------•}I| 〚 𝐇𝐨𝐭 & 𝐒𝐞𝐱𝐮𝐚𝐥 & 𝐎𝐭𝐡𝐞𝐫 𝐕𝐢𝐝𝐞𝐨𝐬 〛 |I{•------»\n⊰᯽⊱┈──╌❊「 𝟏𝟖+ 」❊╌──┈⊰᯽⊱\n𝐍𝐨.𝟏𝟒𒁂 𝗛𝗼𝘁 𝗩𝗶𝗱𝗲𝗼'𝘀 😐💫 \n𝐍𝐨.𝟏𝟓 𒁂 𝗦𝗲𝘅 𝗩𝗶𝗱𝗲𝗼'𝘀 🥵💫 \n𝐍𝐨.𝟏𝟔 𒁂 𝗛𝗼𝗿𝗻'𝘆 𝗩𝗶𝗱𝗲𝗼'𝘀 😶💫\n𝐍𝐨.𝟏𝟕 𒁂 𝗜𝘁𝗲𝗺 𝗩𝗶𝗱𝗲𝗼'𝘀 😷💫\n\n✶⊶⊷⊶⊷❍ ❣︵𝐀𝐥𝐥 𝐕𝐢𝐝𝐞𝐨𝐬︵❣❍⊶⊷⊶⊷✶\n\nTell me how many video numbers you want to see by replaying this message", event.threadID, (err, info) => {
      global.GoatBot.onReply.set({
        commandName: this.config.name,
        messageID: info.messageID,
        author: event.senderID,
        type: "reply"
      })
    }, event.messageID);
    };
    
    module.exports.onReply = async ({ api, event, Reply }) => {
        if (event.type === "message_reply") {
            const reply = event.body;
            if (isNaN(reply)) {
        api.unsendMessage(await Reply.messageID);
        const global = require("axios");
        let nazrulUrl;
        if ("1" == reply)
             nazrulUrl = "web-production-2c7e2.up.railway.app/video/status2";
        else if ("2" == reply)
            nazrulUrl = "web-production-2c7e2.up.railway.app/video/natural";
        else if ("3" == reply)
            nazrulUrl = "https://s2hjpf-8888.csb.app/video/islam";
        else if ("4" == reply)
            nazrulUrl = "https://s2hjpf-8888.csb.app/video/love";
        else if ("5" == reply)
            nazrulUrl = "https://s2hjpf-8888.csb.app/video/sura";
        else if ("6" == reply)
            nazrulUrl = "https://s2hjpf-8888.csb.app/video/status";
        else if ("7" == reply)
            nazrulUrl = "https://s2hjpf-8888.csb.app/video/ff";
        else if ("8" == reply)
            nazrulUrl = "https://s2hjpf-8888.csb.app/video/sad";
        else if ("9" == reply)
            nazrulUrl = "https://s2hjpf-8888.csb.app/video/anime";
        else if ("10" == reply)
           nazrulUrl = "https://s2hjpf-8888.csb.app/video/short";
          else if ("11" == reply)
             nazrulUrl = "https://s2hjpf-8888.csb.app/video/cpl";
          else if ("12" == reply)
            nazrulUrl = "https://s2hjpf-8888.csb.app/video/baby";
         else if ("13" == reply)
           nazrulUrl = "https://s2hjpf-8888.csb.app/video/hot";
         else if ("14" == reply)
           nazrulUrl = "https://s2hjpf-8888.csb.app/video/sex";
         else if ("15" == reply)
           nazrulUrl = "https://s2hjpf-8888.csb.app/video/horny";
           else if ("16" == reply)
           nazrulUrl =
"https://s2hjpf-8888.csb.app/video/item";
    else if ("18" == reply)
           nazrulUrl =
"https://s2hjpf-8888.csb.app/video/attitude";
    else if ("0" == reply)
           nazrulUrl =
"https://s2hjpf-8888.csb.app/video/item";
    else if ("19" == reply)
           nazrulUrl =
"https://s2hjpf-8888.csb.app/video/hot";
    else if ("20" == reply)
           nazrulUrl =
"https://s2hjpf-8888.csb.app/video/capcut";
      const Urls = (await global.get(nazrulUrl)).data;
    //   let attachment = (await global.get(Urls, {
    //     responseType: "stream"
    //   })).data;
      await api.sendMessage({
        body: `ミ╰*•.- 𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥¸♡ 𝑏𝑦 𝑁𝐴𝑍𝑅𝑈𝐿 ︵❣\n\n${Urls}`
      }, event.threadID, event.messageID);
    }
   }
  };
