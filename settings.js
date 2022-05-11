//                     zimbot.inc.pressents 
//                     2022 production
//                     Thanks to dikArdnt
                                                                                        //drips


const fs = require('fs')
const chalk = require('chalk')

//global api
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

//other
global.owner = ['918590822912'] 
global.pemilik = ['918590822913'] //pemilik nomor
global.premium = ['918590822912'] //premium number
global.pengguna = 'Janko' //pengguna
global.botnma = 'RC BOT INC' //botnama,botname
global.ownernma = 'Janko' //ownernama,ownername
global.packname = 'RCBOT' // packname
global.author = 'By RC BOT' //authorname
global.sessionName = 'session'
global.prefa = ['#','!','/',''] 
global.sp = '💫'
global.mess = {
    success: '𝙳𝚘𝚗𝚎!',
    admin: 'you must be admin to use this cmd!',
    botAdmin: 'rc bot must be admin neh!',
    owner: 'This cmd is for zim bot owner only',
    group: 'oooh sorry this cmd is for groups only!',
    private: 'goossssh it can only used in dms!',
    bot: 'This cmd  its only for the rc bot host',
    wait: '𝐰𝐚𝐢𝐭 𝐩𝐫𝐨𝐜𝐞𝐬𝐬𝐢𝐧𝐠 ',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
    global.rpg = {
        darahawal: 100,
        besiawal: 15,
        goldawal: 10,
        emeraldawal: 5,
        umpanawal: 5,
        potionawal: 1
     }    

global.thumb = fs.readFileSync('./image/drips.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
