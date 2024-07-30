const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_20_37_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDAsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDYzLFxuICAgICAgICA1NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgxLFxuICAgICAgICA1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDU4LFxuICAgICAgICAxODcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMyxcbiAgICAgICAgOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMSxcbiAgICAgICAgODYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMxLFxuICAgICAgICA0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzksXG4gICAgICAgIDYzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDk4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE4LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NixcbiAgICAgICAgMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgyLFxuICAgICAgICA3NixcbiAgICAgICAgNjcsXG4gICAgICAgIDM3LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDUzLFxuICAgICAgICA4MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODUsXG4gICAgICAgIDcyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExLFxuICAgICAgICA1NixcbiAgICAgICAgNjksXG4gICAgICAgIDk0LFxuICAgICAgICA3NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDksXG4gICAgICAgIDM4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI3LFxuICAgICAgICAzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwLFxuICAgICAgICAzMixcbiAgICAgICAgNzksXG4gICAgICAgIDcwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDY2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDksXG4gICAgICAgIDUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk2LFxuICAgICAgICA2OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgODksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjUwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiT2JGUXlSMWVSUW1YOUhoYTh3bkhGRVcyOTBEYjM0VVZVYU9YSHkrcE9iZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQlo0a1V0dWFSYzJqLVNGSlRVLU9Fd1wiLFxuICBcInBob25lSWRcIjogXCJiOTEwODFjMS01OGVkLTRkNGUtYTZjMC02YWY1OTI4NWY5ZDhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI0LFxuICAgICAgNDcsXG4gICAgICAxNTEsXG4gICAgICAyMzMsXG4gICAgICAyNixcbiAgICAgIDI0NCxcbiAgICAgIDE1MyxcbiAgICAgIDE3NSxcbiAgICAgIDk3LFxuICAgICAgNTEsXG4gICAgICAyMTIsXG4gICAgICAxMDcsXG4gICAgICAxNjksXG4gICAgICAxNixcbiAgICAgIDg1LFxuICAgICAgNzgsXG4gICAgICAxNTYsXG4gICAgICA4NCxcbiAgICAgIDI0MSxcbiAgICAgIDEyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNixcbiAgICAgIDYwLFxuICAgICAgMixcbiAgICAgIDE5MCxcbiAgICAgIDg5LFxuICAgICAgNDYsXG4gICAgICAyMjcsXG4gICAgICAyLFxuICAgICAgMTEzLFxuICAgICAgMTY4LFxuICAgICAgNzMsXG4gICAgICA5MyxcbiAgICAgIDEyOSxcbiAgICAgIDUzLFxuICAgICAgMTA2LFxuICAgICAgMTk0LFxuICAgICAgMTUsXG4gICAgICA0LFxuICAgICAgNjEsXG4gICAgICA1OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWRkpYWFZLNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMzQ3OTA4MDM1OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTg4MjMwOTU4ODE5NDY6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVNlaXBZSEVPYWRwYlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxQXlCd3dobTBRSkNYaXBPK2IrRURrT3U4M1YvNjRyUUYwemFyOXZVZWlVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlY1QWQ4YXgzNnRuMDhGcjl4VDI2aDNIakRHSUk1KzRBZGdYamJuYTBYblhvNHB6SVhNeGFaTEZBdGh1U3JTNHdCb1J6aGpCS0dNd1NTMGFGNXdnYkRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjloRUg3V0I5NTB6SWpwNHpubnFvemI2eE5QSVpEbHN5NmNpZ0czM0cxUGdyaWUxeHNjdllEMlAwYjJHM0tkZXdmakZEWW04VmlhTWh6ay9wRHJqUmhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzM0NzkwODAzNToxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIzNzE4MTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFZTNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVlMy5qc29uIjogIntcImtleURhdGFcIjpcIlZwNmVHYUFsVTE1VXlaODBTVFVjSzgwMXA5eEpJU2Vtb3E0SjdlSm5HRnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkyNTM1MzI4MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
