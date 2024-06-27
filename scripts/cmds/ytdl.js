const axios = require("axios");

const ytdl = require("ytdl-core");

const fs = require("fs-extra");

const path = require("path");



async function searchYouTube(keywords) {

    try {

        const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(keywords)}`;

        const res = await axios.get(url);

        const getJson = JSON.parse(res.data.split("ytInitialData = ")[1].split(";</script>")[0]);

        const videos = getJson.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents;

        

        if (!videos.length) {

            throw new Error('No videos found for the provided keywords.');

        }



        const videoId = videos[0].videoRenderer.videoId;

        return `https://www.youtube.com/watch?v=${videoId}`;

    } catch (error) {

        throw new Error('Failed to search YouTube.');

    }

}



async function downloadVideo(videoUrl, outputPath, type) {

    try {

        const info = await ytdl.getInfo(videoUrl);

        const formats = ytdl.filterFormats(info.formats, type === 'audio' ? 'audioonly' : 'videoandaudio');

        const bestFormat = formats.find(f => f[type === 'audio' ? 'mimeType' : 'container'] === (type === 'audio' ? 'audio/webm; codecs="opus"' : 'mp4'));



        if (!bestFormat) {

            throw new Error(`No suitable ${type} format found for the provided video URL.`);

        }



        // Ensure the directory exists

        await fs.ensureDir(path.dirname(outputPath));



        const stream = ytdl.downloadFromInfo(info, { filter: format => format.itag === bestFormat.itag });

        const writeStream = fs.createWriteStream(outputPath);



        stream.pipe(writeStream);



        await new Promise((resolve, reject) => {

            writeStream.on('finish', resolve);

            writeStream.on('error', reject);

        });



        return outputPath;

    } catch (error) {

        throw error;

    }

}



module.exports = {

    config: {

        name: "ytdl",

        version: "1.0",

        author: "Rahman Leon",

        countDown: 5,

        role: 0,

        category: "download",

        shortDescription: "Download and send YouTube videos",

        longDescription: "Download YouTube videos using ytdl-core library and send them as replies",

        guide: {

            en: '{pn} [-a/audio or -v/video] video_url',

        },

    },



    onStart: async function ({ message, args }) {

        try {

            let type;

            let videoUrl;



            // Check if the user specified audio or video download

            if (args[0] === '-a' || args[0] === 'audio') {

                type = 'audio';

                args.shift(); // Remove the flag from the arguments

            } else if (args[0] === '-v' || args[0] === 'video') {

                type = 'video';

                args.shift(); // Remove the flag from the arguments

            } else {

                // If no type is specified, prompt the user to select one

                await message.reply('Please specify whether you want to download video or audio by using `-v/video` or `-a/audio` flag.');

                return;

            }



            // Check if the user provided a YouTube video URL or search keywords

            if (ytdl.validateURL(args[0])) {

                videoUrl = args[0];

            } else {

                // If it's not a URL, assume it's search keywords and search YouTube

                const keywords = args.join(' ');

                videoUrl = await searchYouTube(keywords);

            }



            if (!videoUrl) {

                await message.reply('No video found. Please try again with a different search query.');

                return;

            }



            const tempDir = path.join(__dirname, 'downloads');

            const fileName = `${Date.now()}.${type === 'audio' ? 'mp3' : 'mp4'}`;

            const outputPath = path.join(tempDir, fileName);



            const downloadedFilePath = await downloadVideo(videoUrl, outputPath, type);



            // Send the appropriate success message based on the type of download

            const successMessage = type === 'audio' ? 'Audio sent successfully!' : 'Video sent successfully!';

            await message.reply({

                attachment: fs.createReadStream(downloadedFilePath)

            });



            message.reply(successMessage);

        } catch (error) {

            console.error('Error:', error);

            message.reply('Failed to download or send the video. Please try again later.');

        }

    },

};
