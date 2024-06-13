module.exports = {
  config: {
    name: "janu",
    version: "1.0",
    author: "dipto",
    role: 0,
    description: {
      en: "no prefix ."
    },
    category: "System",
    guide: {
      en: "just type bby"
    }
  },

  onStart: async function () { },
onChat: async function ({ api, event, message}) {
const dipto = event.body
If(dipto.startsWith("bby)){
    const tl = ["এত ডাকো কেনো","oi chup" ];
    const rand = tl[Math.floor(Math.random() * tl.length)];
message.reply(rand)
 },
}
