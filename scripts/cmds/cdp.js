const fs = require('fs');
const path = './cdp.json'; 

module.exports = {
	config: {
		name: "copuledp",
		aliases: ["cdp","pairdp"],
		version: "1.0",
		author: "𝗕𝗔𝗗𝗕𝗢𝗬 彡",
		countDown: 2,
		role: 0,
		shortDescription: "pairdp",
		longDescription: "cdp",
		category: "image",
		guide: "{pn}"
	}, 

	onStart: async function ({ message }) {
		let pairs = JSON.parse(fs.readFileSync(path, 'utf8'));

		const selectedPair = pairs[Math.floor(Math.random() * pairs.length)]; 

		const maleLink = selectedPair.male;
		const femaleLink = selectedPair.female;
		let attachments = [];
		attachments.push(await global.utils.getStreamFromURL(maleLink));
		attachments.push(await global.utils.getStreamFromURL(femaleLink));
		message.send({
			body: 'cdp',
			attachment: attachments
		});
	}
};
