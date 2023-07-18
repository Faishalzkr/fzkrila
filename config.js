
// - Ubah nomor owner dan wm di sini.
// + Daftar apikey terlebih dahulu sebelum menggunakan svript ini link
//https://api.betabotz.org
//https://api.botcahx.live
// - Jika sudah mendaftar salin key yang ada di profie dan paste di global.lann && global.btc
// - Contoh global.btc = 'ngaksk?'//register di https://api.botcahx.live
// - Contoh global.lann = 'Ntahla' //register key di https://api.betabotz.org
// - Jika sudah maka lanjutkan untuk mengubah nomor owner dan wm.


// List Key 
// Betabotz = digunakan hampir di semua fitur kecuali linkshort
// Botcahx  = digunakan untuk linkshort saja

global.owner = ['62895637941123']  
global.mods = ['62895637941123'] 
global.prems = ['62895637941123']
global.nameowner = 'fzkrila'
global.numberowner = '62895637941123' 
global.mail = 'firzkrila@gmail.com' 
global.dana = '62895637941123'
global.pulsa = '62895637941123'
global.gopay = '6285784739760'
global.namebot = 'CrowBOT'
global.gc = 'https://chat.whatsapp.com/I7EaMPqWXiY3OV9fIOOlRJ'
global.web = 'https://github.com/faishalzkr'
global.instagram = 'https://instagram.com/fzkrilaa_'
global.wm = 'CrowBOT'
global.watermark = wm
global.wm2 = '⫹⫺ CrowBOT'
global.wm3 = '© fzkrilaa_'
global.wm4 = 'made by +62 878 4855 6719'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made by'
global.author = '+62 878 4855 6719'

//---- image thumbnail 
global.thumb = 'https://telegra.ph/file/e90bf0c910b09eda2cb03.jpg'

//===> Apikey
global.lann = 'JduVRwkr' //isi apikey mu https://api.betabotz.org
global.btc = 'aAW5OJXJ'//Isi apikey di https://api.botcahx.live
global.APIs = {   
  lann: 'https://api.betabotz.org',
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.betabotz.org': 'JduVRwkr' //isi apikey mu https://api.betabotz.org
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
