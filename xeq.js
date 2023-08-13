const fs = require('fs')
const chalk = require('chalk')
const tiktok = require("./XEQUILLE/download/tiktok")
const facebook = require("./XEQUILLE/download/facebook")
const instagram = require("./XEQUILLE/download/instagram")
const twitter = require("./XEQUILLE/download/twitter")


//MODULNYA BY HW
global.baileys = require('@whiskeysockets/baileys') 
global.adiwajshing = require('@adiwajshing/baileys') 

global.gr = 'https://chat.whatsapp.com/IfWgGV9jV2NBEWXYZCK4NN'
global.ig = '@I.Jacquille' // ubah aja
global.email = 'psyaibrahim@gmail.com' //serah
global.region = 'Japanese' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Xequille' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['628983784623'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = `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`
//====================BY Hw Mods=============================//
global.botname = 'XEC-BOTZ' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'XEC-BOTZ PACK' // ubah aja ini nama sticker
global.author = '© XEC-BOTZ' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'session' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 10
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})