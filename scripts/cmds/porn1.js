/*

hahaha dont worry about nnn who cares brother who carese
enjoy kanda cmd and shake your banana 7 times a day haha


*/


module.exports = {
	config: {
		name: "porn",
		version: "2.0",
		author: "𝗥𝗼𝗖𝗞 𝗘𝘅𝗘",
		countDown: 30,
		role: 2,
		shortDescription: "",
		longDescription: "porn video",
		category: "18+",
		guide: "{p}{n}",
	},

	sentVideos: [],

	onStart: async function ({ api, event, message }) {
		const senderID = event.senderID;

		const loadingMessage = await message.reply({
			body: "𝗹𝗼𝗮𝗱𝗶𝗻𝗴 𝗽𝗼𝗿𝗻 𝘄𝗮𝗶𝘁 𝗸𝗼𝗿𝗼 𝗯𝗮𝗯𝘆 🥵",
		});

	const link = [

		"https://tinyurl.com/2awtrhar",
    "https://tinyurl.com/24qoarvu",
    "https://tinyurl.com/22kyhfan",
    "https://tinyurl.com/27dswm7b",
    "https://tinyurl.com/27cwjgfj",
    "https://tinyurl.com/28wfg836",
    "https://tinyurl.com/28n8avfp",
    "https://tinyurl.com/2dazymox",
    "https://tinyurl.com/2ych6fpc",
    "https://tinyurl.com/29jpn9u5",
    "https://tinyurl.com/2bxwa9su",
    "https://tinyurl.com/2y42bdj6",
    "https://tinyurl.com/2bhqxvhz",
    "https://tinyurl.com/2aa224cg",
    "https://tinyurl.com/27emvkyp",
    "https://tinyurl.com/28jt8enj",
    "https://tinyurl.com/273mtazv",
    "https://tinyurl.com/2dnbqgjc",
    "https://tinyurl.com/2yfdqc4h",
    "https://tinyurl.com/2xlkk6e7",
    "https://tinyurl.com/26cbjvbu",
    "https://tinyurl.com/24e9vhdw",
    "https://tinyurl.com/27en9z4d",
    "https://tinyurl.com/2avzgvwe",
    "https://tinyurl.com/2aphztyk",
    "https://tinyurl.com/2dma38ze",
    "https://tinyurl.com/2yqdw9w7",
    "https://tinyurl.com/22zgj2cj",
    "https://tinyurl.com/27j5gnjv",
    "https://tinyurl.com/22ftqqyl",
    "https://tinyurl.com/2xlnrsvm",
    "https://tinyurl.com/2dzhbd88",
    "https://tinyurl.com/2aw2m6sk",
    "https://tinyurl.com/2b9fob6c",
    "https://tinyurl.com/273n85oz",
    "https://tinyurl.com/2ybrfyna",
    "https://tinyurl.com/2yrtvvhg",
    "https://tinyurl.com/223ooorg",
    "https://tinyurl.com/27fyn49t",
    "https://tinyurl.com/2yol376q",
    "https://tinyurl.com/273pf3v4",
    "https://tinyurl.com/2973o7kz",



		
		
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
				body: '𝙥𝙤𝙧𝙣 𝙫𝙞𝙙𝙚𝙤 𝙗𝙖𝙗𝙮 <🥵',
				attachment: await global.utils.getStreamFromURL(randomVideo),
			});

			setTimeout(() => {
				api.unsendMessage(loadingMessage.messageID);
			}, 50000);
		}
	},
}; 

