/*

hahaha dont worry about nnn who cares brother who carese
enjoy kanda cmd and shake your banana 7 times a day haha


*/


module.exports = {
	config: {
		name: "horny",
		version: "2.0",
		author: "𝗥𝗼𝗖𝗞 𝗘𝘅𝗘",
		countDown: 30,
		role: 2,
		shortDescription: "",
		longDescription: "horny romantic video",
		category: "18+",
		guide: "{p}{n}",
	},

	sentVideos: [],

	onStart: async function ({ api, event, message }) {
		const senderID = event.senderID;

		const loadingMessage = await message.reply({
			body: "𝙬𝙖𝙞𝙩 𝙠𝙤𝙧𝙤 𝙗𝙖𝙗𝙮 🥵",
		});

	const link = [

		
       "https://drive.google.com/uc?export=download&id=1BOVPMYkWg5ocM6YgFJzaKlGVpPnjq2NT",
      "https://drive.google.com/uc?export=download&id=18u9GDdCkMQacxDHSFiMVyoGNVo2Wbi4R",
      "https://drive.google.com/uc?export=download&id=1BGlba3HxCt-mMQx_-lyM1cJ5PBlPaB6-",
      "https://drive.google.com/uc?export=download&id=19hslJln0pu0mYZHW831wohDgtSoMWXOK",
      "https://drive.google.com/uc?export=download&id=19sVkUBB8nH2BuA7fXsMEltfGMWQeXYH-",
      "https://drive.google.com/uc?export=download&id=1BhsTRWlrn7q-vAQwPRfZ-aLYgiGlognp",
      "https://drive.google.com/uc?export=download&id=18hPtMit7wVuGAtIHBwFswQgZ-MpJwF2v",
       "https://drive.google.com/uc?export=download&id=1Ag-htOQfw-5jrlDefAx6ELo2cZXK0wyp",
	"https://drive.google.com/uc?export=download&id=1Arqydz5yfa-mpPZ_nLh6vKzXmAKYGGEK",
	"https://drive.google.com/uc?export=download&id=1D47HAjr4pLBgpd6tY_TDquN1UwDqUEcp",	
	"https://drive.google.com/uc?export=download&id=1Che6EVdtCLGAXzJH3HS5IYqamUJWcJbu",	
       "https://drive.google.com/uc?export=download&id=1BulVTvBIhDjKwCROvx3z91nCnUWv_NoB",
       "https://drive.google.com/uc?export=download&id=1Ab0iktkVs8wsE3Zhc7LnzJANMdJVsBIN",
       "https://drive.google.com/uc?export=download&id=19i0kk8hXtzA4Q8fPXR7YgKriWuMDZHVh",
       "https://drive.google.com/uc?export=download&id=1COzE7QvP_8S1Old53aO9yaUGOIpNeEub",
       "https://drive.google.com/uc?export=download&id=1CSo_Q7QFUIw0ZsS5hwugizduJap7xREp",
       "https://drive.google.com/uc?export=download&id=1BD6DjwPKuP98__dagH8cjvunE68blRm-", 
      "https://drive.google.com/uc?export=download&id=1BkHaqQ-FM8Y6bX8kNaYpQeJhStvJMUM8", 
      "https://drive.google.com/uc?export=download&id=1CY720i7LPwsKSXoQq_dCCEjKQhOhqqoI",
      "https://drive.google.com/uc?export=download&id=19Jgz2i8-JggQpx88YwvUkbOVCSENOMCw",
		 "https://drive.google.com/uc?export=download&id=1AL3JpGsEt14M1TauptQEkgFC1iAXvpM3",
		 "https://drive.google.com/uc?export=download&id=1BF9ftMKptzHQqXGCdYKdsPd_LQu2XukX",
		 "https://drive.google.com/file/d/1D4mpqcpebNrpVsa1w2G6GrNWEyuy_DyY/view?usp=drivesdk",
		 "https://drive.google.com/uc?export=download&id=1CX-t1Icl_D0dKd1J6YwNOfdV82shJNgS",
		 "https://drive.google.com/uc?export=download&id=1BY_qhPDeZDH8SPWJuYMJnGVxU0ZYwfXp",
		 "https://drive.google.com/uc?export=download&id=18sZLYcYZuBRsE408ZWq90kIxvNZ9_6os",
		 "https://drive.google.com/uc?export=download&id=19nUg6XzWLIeoWD9BeXAUN3JD0fA6fbgs",
		 "https://drive.google.com/file/d/1ChY43755H_QJHmceSnMmyztLH2-Lay36/view?usp=drivesdk",
		 "https://drive.google.com/uc?export=download&id=19u2OstXogVtL379KlC2LhoMHbgPCLSvw",
		 "https://drive.google.com/uc?export=download&id=19OW963-Y_1n62W4vfe0YXGo32QdqF7JI",
		 "https://drive.google.com/uc?export=download&id=1C8eJIs9xXcbzKhJFVAX1piPxFuWuzC_h",
		 "https://drive.google.com/uc?export=download&id=18wls5bT8bPvBrTNVRZbUqLfLYdC7djyC",
		 "https://drive.google.com/uc?export=download&id=1B1h8JsFTYJqeoBWxwVMCC2diKLdWZGnz",

	

		





		
		
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
				body: '𝙝𝙤𝙧𝙣𝙮 𝙫𝙞𝙙𝙚𝙤 𝙗𝙖𝙗𝙮 <🥵',
				attachment: await global.utils.getStreamFromURL(randomVideo),
			});

			setTimeout(() => {
				api.unsendMessage(loadingMessage.messageID);
			}, 50000);
		}
	},
}; 
    
