//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "94758437638";
global.sudo = process.env.SUDO || "94758437638";
global.owner = process.env.OWNER_NUMBER || "94758437638";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUlJc2pGYi9ROExzNEJ2Z3c5a0FCazNCZThWb2pMTXB1b0RFdUtsbmozYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmlGdC96UWJJMUplOHVVbmxWYUhtdlowaFZqYWNNNTZPM0VCemMyZWhndz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrT0FCMDJNR1VBRXliNFhxNjdkSU0zYldIWjJiTGMrUXcvVkNVZG9TaWtjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQdkwyS3dVZGRsQXhFRWNnVTlSSmU0SVRYWk9qMnBxSk15Sk95a25zdXlnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhKdmM0VkZUNFNXRko2U25uTjhneTA5eitXbUZtRTZqN2s2T3pBbGZ4bGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZKQXYwZ3A2N0wrS29IZnpBY1prTHFXUjVZOHR6WDdHQk1FcEVSMHd0QVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU5RR1AyNjl5YVpaZXlaTXMzeDlEV1B1NHZIaVhFT2o2bnhxNDdtUHdGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibjdnZjQrTlVhYkpBNnRONG1BZEwwNDUvZ1hYR3ppMW5KcDdWeWhzY1RXST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZwZlc0QS9zNE4rLzhNbC9ZOEVXWVVCZUJwcDlJQjR4L0U0Q0s1MVdGSm56OWFubGlzSmlIQlR4enR0TkNCSVd4K05aMnBzRElRMCtLNXRyeDM4QkN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc2LCJhZHZTZWNyZXRLZXkiOiJQK1p3YkovNENJTzdteTd4ZHhGK2dFQXg4WTI1YW5KS1QwMjlxaGNKU2hNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc2NTMwMDkwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBMzhDNEQwQzIyMUMyRTI5ODhDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE4MzE5Mjd9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc2NTMwMDkwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBODI0ODE0QUQyNzhFMTNGMkMzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE4MzE5Mjl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InFZRHR5MEpnVGJ5cE5kZTFmVHFTOVEiLCJwaG9uZUlkIjoiOWJhZjJhNDAtZDBkYy00ZDQ0LTg5ZWQtZjY3Yzk4ZmY4NzAyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikl0Skx2R3dWSUJCSys1bUJrNkNyNnJnWDlBcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlRnZOcDJtSFJOU3VuWTB0aTNHTFRqYXNncm89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQzEzRFNTR0QiLCJtZSI6eyJpZCI6Ijk0Nzc2NTMwMDkwOjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiU2FiYmUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lTL3Jwd0pFT2FqaExVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImZvRzFoVzlmaGN6VFJMUlJvekZVRk1JbUxHbCtaVFUyMnZaVXZYSXI5QUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlRZNFErdlBsU0prZXArK082alZPUGxvbFpEcHFkOWhrZmVNd1pseE5BK0g0RG9iZjZqUHJZQURUcElkYTdYUnJnUndFMGxjdTRBaU16QWxvaU85aGdBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ2elM4NXR3NEMrV095dE9vaVpRb2wxZ0VwK0cxbk5hbFlqUU4waXprNmVScVNFZ2Q3d1dXMmU0ZEVKWFZjd0JEVXpmZkFUOER3YThaaCtKSEZRKzVCQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzc2NTMwMDkwOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWDZCdFlWdlg0WE0wMFMwVWFNeFZCVENKaXhwZm1VMU50cjJWTDF5Sy9RQSJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTgzMTkyNCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDWU8ifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-Sasshika indusara😍",
  author: process.env.PACK_AUTHER || "Sabee",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "SABEE-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "Sasshika",
  errorChat: process.env.ERROR_CHAT || "94758437638",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
