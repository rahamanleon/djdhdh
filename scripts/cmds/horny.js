/*

hahaha dont worry about nnn who cares brother who carese
enjoy kanda cmd and shake your banana 7 times a day haha


*/


module.exports = {
	config: {
		name: "horny",
		version: "2.0",
		author: "ROCK",
		countDown: 30,
		role: 2,
		shortDescription: "",
		longDescription: "get kanda/p***n video hilake sojaa",
		category: "18+",
		guide: "{p}{n}",
	},

	sentVideos: [],

	onStart: async function ({ api, event, message }) {
		const senderID = event.senderID;

		const loadingMessage = await message.reply({
			body: "⏳| Please Wait...",
		});

		const link = [
			"https://drive.google.com/uc?export=download&id=1BOVPMYkWg5ocM6YgFJzaKlGVpPnjq2NT",
      "https://drive.google.com/uc?export=download&id=18u9GDdCkMQacxDHSFiMVyoGNVo2Wbi4R",
      "https://drive.google.com/uc?export=download&id=1BGlba3HxCt-mMQx_-lyM1cJ5PBlPaB6-",
      "https://drive.google.com/uc?export=download&id=19hslJln0pu0mYZHW831wohDgtSoMWXOK",
      "https://drive.google.com/uc?export=download&id=19sVkUBB8nH2BuA7fXsMEltfGMWQeXYH-",
      "https://drive.google.com/uc?export=download&id=1BhsTRWlrn7q-vAQwPRfZ-aLYgiGlognp",
      "https://drive.google.com/uc?export=download&id=18hPtMit7wVuGAtIHBwFswQgZ-MpJwF2v",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
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
				body: '✅𝙝𝙚𝙧𝙚 𝙮𝙤𝙪𝙧 𝙝𝙤𝙧𝙣𝙮 𝙫𝙞𝙙𝙚𝙤 𝙗𝙖𝙗𝙮',
				attachment: await global.utils.getStreamFromURL(randomVideo),
			});

			setTimeout(() => {
				api.unsendMessage(loadingMessage.messageID);
			}, 50000);
		}
	},
}; 
    
