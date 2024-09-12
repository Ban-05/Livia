const fs = require('fs');

module.exports = {
  config: {
    name: "file",
    version: "1.0",
    author: "OtinXShiva",
    countDown: 5,
    role: 0,
    shortDescription: "Send bot script",
    longDescription: "Send bot specified file ",
    category: "owner",
    guide: "{pn} file name. Ex: .{pn} filename"
  },

  onStart: async function ({ message, args, api, event }) {
    const permission = ["100091833939051",];
    if (!permission.includes(event.senderID)) {
      return api.sendMessage("❄𝐃𝐬𝐥 𝐦𝐨𝐧 𝐜𝐡𝐨𝐮 🌸 𝐬𝐞𝐮𝐥 ♚𝐘𝐯𝐚𝐧 𝐩𝐨𝐰𝐞𝐫♚ 𝐩𝐞𝐮𝐭 𝐮𝐭𝐢𝐥𝐢𝐬𝐞𝐫 𝐥𝐚 𝐜𝐦𝐝 🔘", event.threadID, event.messageID);
    }
    
    const fileName = args[0];
    if (!fileName) {
      return api.sendMessage("Please provide a file name.", event.threadID, event.messageID);
    }

    const filePath = __dirname + `/${fileName}.js`;
    if (!fs.existsSync(filePath)) {
      return api.sendMessage(`la cmd ${fileName}.js n'existe pas`, event.threadID, event.messageID);
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    api.sendMessage({ body: fileContent }, event.threadID);
  }
};
