const { config } = global.GoatBot;
const { writeFileSync } = require("fs-extra");

module.exports = {
  config: {
    name: "whitelist",
    version: "1.1",
    author: "Rahman Leon",
    countDown: 5,
    role: 2,
    shortDescription: {
      vi: "Quản lý danh sách trắng: thêm, xóa, liệt kê người dùng",
      en: "Manage whitelist: add, remove, list users",
    },
    longDescription: {
      vi: "Quản lý danh sách trắng: thêm, xóa, liệt kê người dùng",
      en: "Manage whitelist: add, remove, list users",
    },
    category: "box chat",
    guide: {
      vi: '   {pn} [add | -a] <uid | @tag>: Thêm người dùng vào danh sách trắng\n' +
        '   {pn} [remove | -r] <uid | @tag>: Xóa người dùng khỏi danh sách trắng\n' +
        '   {pn} [list | -l]: Liệt kê danh sách trắng\n' +
        '   {pn} [show | -s] <uid | @tag>: Hiển thị thông tin về người dùng trong danh sách trắng\n' +
        '   {pn} [toggle | -t]: Bật/Tắt chế độ danh sách trắng',
      en: '   {pn} [add | -a] <uid | @tag>: Add user to whitelist\n' +
        '   {pn} [remove | -r] <uid | @tag>: Remove user from whitelist\n' +
        '   {pn} [list | -l]: List all users in whitelist\n' +
        '   {pn} [show | -s] <uid | @tag>: Show information about user in whitelist\n' +
        '   {pn} [toggle | -t]: Enable/Disable whitelist mode',
    },
    aliases: ["wlt"],
  },

  langs: {
    vi: {
      added: "✅ | Đã thêm vào danh sách trắng cho %1 người dùng:\n%2",
      alreadyInWhiteList: "\n⚠ | %1 người dùng đã có trong danh sách trắng từ trước rồi:\n%2",
      missingIdAdd: "⚠ | Vui lòng nhập ID hoặc tag người dùng muốn thêm vào danh sách trắng",
      removed: "✅ | Đã xóa khỏi danh sách trắng của %1 người dùng:\n%2",
      notInWhiteList: "⚠ | %1 người dùng không có trong danh sách trắng:\n%2",
      missingIdRemove: "⚠ | Vui lòng nhập ID hoặc tag người dùng muốn xóa khỏi danh sách trắng",
      listWhiteList: "📋 | Danh sách trắng:\n%1",
      whiteListModeDisabled: "⚠ | Chế độ danh sách trắng hiện đang tắt.",
      showUserInfo: "👤 | Thông tin về người dùng trong danh sách trắng:\n%1",
      missingIdShow: "⚠ | Vui lòng nhập ID hoặc tag người dùng muốn xem thông tin",
      whiteListModeToggledOn: "✅ | Chế độ danh sách trắng đã được bật.",
      whiteListModeToggledOff: "✅ | Chế độ danh sách trắng đã được tắt.",
    },
    en: {
      added: "✅ | Added to whitelist for %1 user(s):\n%2",
      alreadyInWhiteList: "\n⚠ | %1 user(s) already in the whitelist:\n%2",
      missingIdAdd: "⚠ | Please enter ID or tag user to add to whitelist",
      removed: "✅ | Removed from whitelist for %1 user(s):\n%2",
      notInWhiteList: "⚠ | %1 user(s) not in the whitelist:\n%2",
      missingIdRemove: "⚠ | Please enter ID or tag user to remove from whitelist",
      listWhiteList: "📋 | List of users in whitelist:\n%1",
      whiteListModeDisabled: "⚠ | Whitelist mode is currently disabled.",
      showUserInfo: "👤 | Information about user in whitelist:\n%1",
      missingIdShow: "⚠ | Please enter ID or tag user to view information",
      whiteListModeToggledOn: "✅ | Whitelist mode has been toggled on.",
      whiteListModeToggledOff: "✅ | Whitelist mode has been toggled off.",
      },
  },

  onStart: async function ({ message, args, event, usersData, getLang }) {
    const { whiteListMode } = config;
    const { whiteListIds, enable } = whiteListMode;

    switch (args[0]) {
      case "add":
      case "-a": {
        if (args[1]) {
          let uids = [];
          if (Object.keys(event.mentions).length > 0)
            uids = Object.keys(event.mentions);
          else if (event.messageReply)
            uids.push(event.messageReply.senderID);
          else
            uids = args.slice(1).filter(arg => !isNaN(arg));

          const notInWhiteList = uids.filter(uid => !whiteListIds.includes(uid));

          whiteListIds.push(...notInWhiteList);
          writeFileSync(global.client.dirConfig, JSON.stringify(config, null, 2));

          const getNames = await Promise.all(uids.map(uid => usersData.getName(uid).then(name => ({ uid, name }))));

          return message.reply(
            notInWhiteList.length > 0 ?
              getLang("added", notInWhiteList.length, getNames.map(({ uid, name }) => `• ${name} (${uid})`).join("\n")) :
              getLang("alreadyInWhiteList")
          );
        } else {
          return message.reply(getLang("missingIdAdd"));
        }
      }
      case "remove":
      case "-r": {
        if (args[1]) {
          let uids = [];
          if (Object.keys(event.mentions).length > 0)
            uids = Object.keys(event.mentions);
          else
            uids = args.slice(1).filter(arg => !isNaN(arg));

          const inWhiteList = uids.filter(uid => whiteListIds.includes(uid));

          config.whiteListMode.whiteListIds = whiteListIds.filter(uid => !inWhiteList.includes(uid));
          writeFileSync(global.client.dirConfig, JSON.stringify(config, null, 2));

          const getNames = await Promise.all(inWhiteList.map(uid => usersData.getName(uid).then(name => ({ uid, name }))));

          return message.reply(
            inWhiteList.length > 0 ?
              getLang("removed", inWhiteList.length, getNames.map(({ uid, name }) => `• ${name} (${uid})`).join("\n")) :
              getLang("notInWhiteList")
          );
        } else {
          return message.reply(getLang("missingIdRemove"));
        }
      }
      case "list":
      case "-l": {
        const getNames = await Promise.all(whiteListIds.map(uid => usersData.getName(uid).then(name => ({ uid, name }))));
        return message.reply(
          getLang("listWhiteList", getNames.map(({ uid, name }) => `• ${name} (${uid})`).join("\n"))
        );
      }
      case "show":
      case "-s": {
        if (args[1]) {
          const uidToShow = args[1];
          if (whiteListIds.includes(uidToShow)) {
            const userInfo = await usersData.getName(uidToShow).then(name => ({ uid: uidToShow, name }));
            return message.reply(getLang("showUserInfo", `• ${userInfo.name} (${userInfo.uid})`));
          } else {
            return message.reply(getLang("notInWhiteList"));
          }
        } else {
          return message.reply(getLang("missingIdShow"));
        }
      }
      case "toggle":
      case "-t": {
        whiteListMode.enable = !enable;
        writeFileSync(global.client.dirConfig, JSON.stringify(config, null, 2));

        const toggleMessage = enable ? getLang("whiteListModeToggledOff") : getLang("whiteListModeToggledOn");
        return message.reply(toggleMessage);
      }
      default:
        return message.SyntaxError();
    }
  },
};
