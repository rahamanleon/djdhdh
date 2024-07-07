module.exports = {
  config: {
    name: "anime",
    aliases: ["animevideo", "animevdo", "anivid"],
    version: "1.0",
    author: "𝗥𝗼𝗖𝗞 𝗘𝘅𝗘",
    countDown: 20,
    role: 0,
    shortDescription: "get anime video",
    longDescription: "get random anime video",
    category: "anime",
    guide: "{pn} animevdo",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    const loadingMessage = await message.reply({
      body: "Loading random anime video... Please wait! 🕐",
    });

    const link = [
      "https://drive.google.com/uc?export=download&id=1cyB6E3z4-_Dr4mlYFB87DlWkUlC_KvrR",// video credits xenoz (youtube)
      "https://drive.google.com/uc?export=download&id=1Q5L8SGKYpNrXtJ6mffcwMA9bcUtegtga",
      "https://drive.google.com/uc?export=download&id=1u8JzKCTubRhnh0APo2mMob-mQM0CoNYj",
      "https://drive.google.com/uc?export=download&id=10Eh24_8XaKIKSDXtJsGfqTdt-9jebyew",
      "https://drive.google.com/uc?export=download&id=10mpjpyWPsLbCm_4dGH6KOYDOpYsuoukC",
      "https://drive.google.com/uc?export=download&id=1JBIo966g0MmUT27S1yc0B06lASt4dD9V",
      "https://drive.google.com/uc?export=download&id=1w_HUyAFHnVfkUl8XLY01pxs8dnmQNEVn",
      "https://drive.google.com/uc?export=download&id=1EoeMITZrSNB1PpPjsh5cmsFzbjMZKH2c",
      "https://drive.google.com/uc?export=download&id=1Kh4qvle57FlMjcam-JNxTQtPZe2uxrJ8",
      "https://drive.google.com/uc?export=download&id=1KtyLzqbyJpq5_ke0Cb6gD89ZNf0NQm0t",
      "https://drive.google.com/uc?export=download&id=10VtDYtxU4HssVab_BOPaQNiaJ77d66VJ",
      "https://drive.google.com/uc?export=download&id=10gQfwFoqiyB4fkNFzQf8NPvE39qQ7PmZ",
      "https://drive.google.com/uc?export=download&id=10eIiMRVky9SOTWt8P2VJC-tQ70WZfAvk",
      "https://drive.google.com/uc?export=download&id=10ajoeUgQzl9d57hxHftGiTTX6eZggtBr",
      "https://drive.google.com/uc?export=download&id=10U5Cr2Xe_4NjIN-CulCglAzIil-AQSvK",
      "https://drive.google.com/uc?export=download&id=105w18VNqYoZno17k3l6x9_hsTdQZ6WZK",
      "https://drive.google.com/uc?export=download&id=10ErXxOp8vaDPYMWPWDt8EY4p0uiUguQh",
      "https://drive.google.com/uc?export=download&id=10Odf8bSC1lPhZFtyYBYz2Z0hxj8B_J5X",
      "https://drive.google.com/uc?export=download&id=10TKliZXJ_lR9z7Nkoia4gugOexr5XhaF",
      "https://drive.google.com/uc?export=download&id=10LsPToktmOch4gJwweTjtxwABZXLY5xp",
      "https://drive.google.com/uc?export=download&id=10CPcrS_BoY4kxOACOQBTPaSKXDwjnQRj",
      "https://drive.google.com/uc?export=download&id=1vy0ZldnlTqXgwJ36HxOXC9hLObgNkTZ-",
      "https://drive.google.com/uc?export=download&id=1hPZhzKm_uj6HRsEdFAH1lPFFF8vC-lTB",
      "https://drive.google.com/uc?export=download&id=1AJCeDc-MvtvSspz7oX98ywzDB3Z29bSu",
      "https://drive.google.com/uc?export=download&id=1reVD_c5kK29iTdLAu_7sYFBB0hzrRkAx",
      "https://drive.google.com/uc?export=download&id=1vmnlCwp40mmjW6aFob_wD_U1PmOgRYst",
      "https://drive.google.com/uc?export=download&id=1R0n8HQgMEEAlaL6YJ3JiDs_6oBdsjN0e",
      "https://drive.google.com/uc?export=download&id=1tUJEum_tf79gj9420mHx-_q7f0QP27DC",
      "https://drive.google.com/uc?export=download&id=10VzpoHo0QIR4Y0B6L8pmY1QqkhQPTrMO",
      "https://drive.google.com/uc?export=download&id=1hAKRt-oOSNnUNYjDQG-OF-tdzN_qJFoR",
      "https://drive.google.com/uc?export=download&id=1HrvT5jaPsPi66seHCLBkRbTziXJUkntn",
      "https://drive.google.com/uc?export=download&id=1v8k2YxBme5zEumlNiLIry5SDMryfkBts",
      "https://drive.google.com/uc?export=download&id=1x01XDJoJMbtUjWztomF25Ne1Up4cWQoC",
      "https://drive.google.com/uc?export=download&id=12j65dstfkMUHMSmQU8FnZi2RyHPHJipx",
      "https://drive.google.com/uc?export=download&id=13ImpZl3aLHpwlYhWvjKLfiRvFsK3kl5z",
      "https://drive.google.com/uc?export=download&id=1EdFmtprVtt652PDocRlgeXXxIQRYTSQw",
      "https://drive.google.com/uc?export=download&id=1EdFmtprVtt652PDocRlgeXXxIQRYTSQw",
      "https://drive.google.com/uc?export=download&id=1QdLGspkvM-Gf1SHh2fJf8zPbrZaURTJs",
      "https://drive.google.com/uc?export=download&id=1RyG2Lh1cp6lq9IEIr4vVaDyu21RW_pav",
      "https://drive.google.com/uc?export=download&id=1043BWzwKE8lvmlXh5Ditm_dVB6bIbaqj",
      "https://drive.google.com/uc?export=download&id=1zlmaoBVrk9GKPZ_2XYZzzQkFMdiszSzL",
      "https://drive.google.com/uc?export=download&id=1rcxnb5U4gnwSiZhOcsbahqzE003LKYXc",
      "https://drive.google.com/uc?export=download&id=12cjBYkdDR4BMKj1H4aV6rfa7sVuoU3eU",
      "https://drive.google.com/uc?export=download&id=1aBHnJ7AgkQKC9RBIycVN-l6F4kdeX3hf",
      "https://drive.google.com/uc?export=download&id=13X4yhx9Nr8tIleXtxC7bV1Rfjt1FXeDv",
      "https://drive.google.com/uc?export=download&id=1uuajuhhLPlLXlSRBdzmwGfIMAV6WwW5u",
      "https://drive.google.com/uc?export=download&id=10vuTl8ChI5W0Lys43oIPCq1aLNjSK1zD",
      "https://drive.google.com/uc?export=download&id=1wkoC5kbo4GuDEqoEXoz40DwZi6OMKiSI",
      "https://drive.google.com/uc?export=download&id=11_ejNMuVpbbwN18pevgl65HgwT8badZC",
      "https://drive.google.com/uc?export=download&id=11G7aAQxzq_cklzy-6C_UihgxWsRj0Wul",
      "https://drive.google.com/uc?export=download&id=1154s7nD2-WeS9obuqQGbTGSmeoTHtdpe",
      "https://drive.google.com/uc?export=download&id=11fH3XCFrJoiybU3VeoKfsUShLdphWhIW",
      "https://drive.google.com/uc?export=download&id=11OYzZ1Wt0QyvxNW92ZkdkwRcQg_Iejt0",
      "https://drive.google.com/uc?export=download&id=116Eg9n4sel9mieywe4i01DOf-dWdiP88",
      "https://drive.google.com/uc?export=download&id=11fH3XCFrJoiybU3VeoKfsUShLdphWhIW",
      "https://drive.google.com/uc?export=download&id=10x-ZVs_ntPRmiMNj6NQ3OzqyMpavvcLs",
 
      
      
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
