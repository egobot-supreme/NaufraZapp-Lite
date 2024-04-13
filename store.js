import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import fs from 'fs'
import moment from 'moment-timezone'
import path, { join } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString() }; global.__dirname = function dirname(pathURL) { return path.dirname(global.__filename(pathURL, true)) }; global.__require = function require(dir = import.meta.url) { return createRequire(dir) }
const __dirname = global.__dirname(import.meta.url)

//Imagenes
global.imagen1 = fs.readFileSync('./storage/logos/Menu1.jpg')
global.imagen2 = fs.readFileSync('./storage/logos/Menu2.jpg')
global.imagen3 = fs.readFileSync('./storage/logos/Menu3.jpg')
global.imagen4 = fs.readFileSync('./storage/logos/Menu4.jpg')
global.icon = fs.readFileSync('./storage/logos/icon.webp')

global.config = fs.readFileSync('./storage/imagenes/configuraciones.jpg')
global.suerte = fs.readFileSync('./storage/imagenes/suerte.jpg')
global.oracion = fs.readFileSync('./storage/imagenes/oracion.jpg')
global.rosas = fs.readFileSync('./storage/imagenes/rosas.jpg')
global.refran = fs.readFileSync('./storage/imagenes/refran.jpg')
global.linksjpg = fs.readFileSync('./storage/imagenes/Links.jpg')

var img = 'https://i.postimg.cc/Y9t2mzvt/Menu2.jpg';
var img1 = 'https://i.postimg.cc/T386DJsB/Menu3.jpg';
var img2 = 'https://i.postimg.cc/T386DJsB/Menu3.jpg';
var img3 = 'https://i.postimg.cc/43sR8Ns5/Menu4.jpg'; //prem
var img4 = 'https://i.postimg.cc/j5T9x8L4/f0304022-da50-4a0a-8be4-6b4138bab3af.jpg'; //prem
var img5 = 'https://i.postimg.cc/j5T9x8L4/f0304022-da50-4a0a-8be4-6b4138bab3af.jpg';
var img6 = 'https://i.postimg.cc/8zq93kG3/c9737e9e-4e19-4f75-95d3-e56c746fb97e.jpg';
var img7 = 'https://i.postimg.cc/8zq93kG3/c9737e9e-4e19-4f75-95d3-e56c746fb97e.jpg';
var img8 = 'https://i.postimg.cc/GtK1wWKD/db93517c-0588-4a1b-b9a7-641b235597ad.jpg';
var img9 = 'https://i.postimg.cc/cLb0JNSM/474106d3-382b-4964-af1e-fbfb35d495cd.jpg';
var img10 = 'https://i.postimg.cc/PqvxZdBD/06efe094-8f28-444e-b3d4-7474a9ee7f3e.jpg'

var iimg1 = 'https://i.postimg.cc/t4KK7yy7/11fe6d78ece25ee972ee8de229e182a9.jpg';
var iimg2 = 'https://i.postimg.cc/5t5R0Cnk/66945863cdf7c56b212c2280e91d497b.jpg';
var iimg3 = 'https://i.postimg.cc/x1D5zdJr/0c967c4af27aa805391e3be495936acd.jpg';
var iimg4 = 'https://i.postimg.cc/kM2LNB4D/89aaf3a76c5af6c6904716889463a278.jpg';
var iimg5 = 'https://i.postimg.cc/gJntKTG1/e872a51954db06122d6108df482ef157.jpg'


global.ImgAll = [img, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]
global.nzImg = [iimg1, iimg2, iimg3, iimg4, iimg5]
//Enlaces
global.yt = 'https://youtube.com/@user-bw5wl4ye8r?si=qN8bP4ZdKm3yXwbx'
global.ig = 'https://www.instagram.com/naufrazapp?igsh=Y2g1ZXJxbm53eXAy'
global.md = 'https://github.com/Bots-WhatsApp-OFC'
global.paypal = 'https://www.paypal.me/NaufragoSolano'
global.git = 'https://www.paypal.me/ColaboracionBotOFC'
global.linkwabot = 'https://wa.me/5493873687620'
global.email = 'guardianbotmdoficial@gmail.com'
global.group = 'https://chat.whatsapp.com/I7A2Q6EXtmE6d7zOxyYF3L' //Grupo ofc
global.group2 = 'https://chat.whatsapp.com/I7A2Q6EXtmE6d7zOxyYF3L' //enlace curiosity
global.group3 = 'https://chat.whatsapp.com/I7A2Q6EXtmE6d7zOxyYF3L' //Curiosity global
global.group4 = 'https://chat.whatsapp.com/I7A2Q6EXtmE6d7zOxyYF3L' //colaboración multi bots
global.group5 = 'https://chat.whatsapp.com/I7A2Q6EXtmE6d7zOxyYF3L' //Colaboración CuriosityBot - NovaBot
global.group6 = 'https://chat.whatsapp.com/I7A2Q6EXtmE6d7zOxyYF3L' //Colaboración GataBot - CuriosityBot
global.group7 = 'https://chat.whatsapp.com/I7A2Q6EXtmE6d7zOxyYF3L' //Colaboración CuriosityBot - Criwilop
global.group8 = 'https://chat.whatsapp.com/I7A2Q6EXtmE6d7zOxyYF3L' //Colaboración CuriosityBot - SakuraBot
global.group9 = 'https://chat.whatsapp.com/I7A2Q6EXtmE6d7zOxyYF3L' //Colaboración OnyxBot - CuriosityBot
global.channel = 'https://whatsapp.com/channel/0029VaRibRvDuMRj6ozMSN1l'
global.linkSity = [yt, ig, md, paypal, git, channel]
global.redesMenu = [yt, ig, md, paypal, git, linkwabot, email, group, group2, group3, group4, group5, group6, group7, group8, group9, channel]
global.naufraImg = [img, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, iimg1, iimg2, iimg3, iimg4, iimg5]

global.nzVideos = ['https://qu.ax/ygwT.mp4', 'https://qu.ax/iFCi.mp4', 'https://qu.ax/jie.mp4', 'https://qu.ax/Pbha.mp4', 'https://qu.ax/bdvm.mp4']
global.nzAll = ['https://qu.ax/ygwT.mp4', 'https://qu.ax/iFCi.mp4', 'https://qu.ax/jie.mp4', 'https://qu.ax/Pbha.mp4', 'https://qu.ax/bdvm.mp4', iimg1, iimg2, iimg3, iimg4, iimg5]

//Raíz
global.raiz = './'
global.aniD = 'NaufraBotSession/'
global.dirP = raiz//+aniD
global.authFile = join(__dirname, `NaufraBotSession/`)
global.authFileRespald = join(__dirname, `sesionRespaldo/`)
global.temp = join(__dirname, 'tmp')
global.media = raiz+'media/'
global.jadibts = join(__dirname, 'BotsWhatsAppOFC/')
global.raiz = './storage/logos/Menu1.jpg'

//Reacciones De Comandos.!
global.rwait = '⏰'
global.done = '✅'
global.error = '❌'

//Cargando
global.wait = '*20%*'
global.waitt = '*80%*'
global.waittt = '*99%*'
global.waitttt = '*100%*'

//fake
global.fsizedoc = '999999'
global.fpagedoc = '9999'

//Apis
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']
global.itsrose = ['4b146102c4d500809da9d1ff']

global.APIs = {
amel: 'https://melcanz.com',
bx: 'https://bx-hunter.herokuapp.com',
nrtm: 'https://nurutomo.herokuapp.com',
xteam: 'https://api.xteam.xyz',
nzcha: 'http://nzcha-apii.herokuapp.com',
bg: 'http://bochil.ddns.net',
fdci: 'https://api.fdci.se',
dzx: 'https://api.dhamzxploit.my.id',
bsbt: 'https://bsbt-api-rest.herokuapp.com',
zahir: 'https://zahirr-web.herokuapp.com',
zeks: 'https://api.zeks.me',
hardianto: 'https://hardianto-chan.herokuapp.com',
pencarikode: 'https://pencarikode.xyz',
LeysCoder: 'https://leyscoders-api.herokuapp.com',
adiisus: 'https://adiixyzapi.herokuapp.com',
lol: 'https://api.lolhuman.xyz',
fgmods: 'https://api-fgmods.ddns.net',
pencarikode: 'https://pencarikode.xyz',
Velgrynd: 'https://velgrynd.herokuapp.com',
rey: 'https://server-api-rey.herokuapp.com',
hardianto: 'http://hardianto-chan.herokuapp.com',
shadow: 'https://api.reysekha.xyz',
apialc: 'https://api-alc.herokuapp.com',
botstyle: 'https://botstyle-api.herokuapp.com',
neoxr: 'https://neoxr-api.herokuapp.com',
ana: 'https://anabotofc.herokuapp.com/',
kanx: 'https://kannxapi.herokuapp.com/',
dhnjing: 'https://dhnjing.xyz'
},

global.APIKeys = {
'https://api-alc.herokuapp.com': 'ConfuMods',
'https://api.reysekha.xyz': 'apirey',
'https://melcanz.com': 'F3bOrWzY',
'https://bx-hunter.herokuapp.com': 'Ikyy69',
'https://api.xteam.xyz': '5bd33b276d41d6b4',
'https://zahirr-web.herokuapp.com': 'zahirgans',
'https://bsbt-api-rest.herokuapp.com': 'benniismael',
'https://api.zeks.me': 'apivinz',
'https://hardianto-chan.herokuapp.com': 'hardianto',
'https://pencarikode.xyz': 'pais',
'https://api-fgmods.ddns.net': 'fg-dylux',
'https://leyscoders-api.herokuapp.com': 'MIMINGANZ',
'https://server-api-rey.herokuapp.com': 'apirey',
'https://api.lolhuman.xyz': 'GataDios',
'https://botstyle-api.herokuapp.com': 'Eyar749L',
'https://neoxr-api.herokuapp.com': 'yntkts',
'https://anabotofc.herokuapp.com/': 'AnaBot'
}

//Rpg
global.multiplier = 200 // Cuanto más alto, más difícil subir de nivel

global.rpg = {
emoticon(string) {
string = string.toLowerCase()
let emot = {
level: '🏆', limit: '💎', exp: '✨',
health: '❤️',
money: '💵',
potion: '🥤',
pickaxe: '⛏️' 
}

let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]]
}}

global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, {weekday: 'long'})
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'})
global.mes = d.toLocaleDateString('es', {month: 'long'})
global.año = d.toLocaleDateString('es', {year: 'numeric'})
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true})

var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)
  

//No muevas nada de aqui
let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellowBright('Se actualizo el archivo store.js'))
import(`${file}?update=${Date.now()}`)
})
