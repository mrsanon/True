/**
   * Created By mrsanon
   * Contact Me on wa.me/94766816809
   * Follow https://github.com/mrsanon
**/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'bee20bed87',
}
//======================================//

global.wm = 'π±π°ππ.πππππ'
global.ucpn = ''

//================= Url =================//
global.linkgc = 'https://chat.whatsapp.com/IfrEWJ30nUd3Cbi3uIvtIb'
global.linkig = 'https://www.instagram.com/reel/Ccx79E0A8Rt/?igshid=YmMyMTA2M='
global.linkyt = 'https://youtu.be/RnpyRe_7A'
global.linkfb = 'https://fb.watch/aYv0jfAO'
global.web = 'https://Thisan04.github.io'
global.web1 = 'https://.repl.co'
global.linkgh = 'https://github.com/mrsanon'

global.session = process.env.SESSION_ID|| ''
global.titlink = 'Folllow me on Instagram'
global.bodlink = 'Lord-official'
// Other
global.watermark = 'π±π°MR.SANON'
global.owner = ['94766816809']
global.premium = ['94766816809']
global.packname = 'πΌπππΌππΌ ππΏ'
global.author = 'ππ·πΈππ°π½'
global.sessionName = 'lord'
global.prefa = ['','!','.','π¦',',','*']
global.sp = 'βοΈ'
global.mess = {
    success: 'πΊππππππβοΈ',
    admin: 'Group Admin Special Features!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'Bot Owner Special Features',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'Bot Number Users Special Feature',
    wait: 'Loading...',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/lord.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
