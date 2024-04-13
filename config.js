/* ⚙️ Credits to:
* AzamiJs
* Elrebelde21
* GataNina-Li */

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['5493873687620', 'Creador', true],
['51929838430'],
['19145948340']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.suittag = ['5493873687620']
global.mods = []
global.prems = []

//Solo desarrolladores aprobados
global.isdev = [['5493873687620'],
['19145948340'],
['51929838430']]

//Aqui encuentras los nombres del bot 
global.packname = '𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥-𝘽𝙚𝙩𝙖'
global.author = '𝙉𝙖𝙪𝙛𝙧𝙖𝙜𝙤'
global.wm = '𝘕𝘢𝘶𝘧𝘳𝘢𝘡𝘢𝘱𝘱-𝘉𝘦𝘵𝘢'
global.wm2 = '𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱-𝘉𝘦𝘵𝘢'
global.azami = '𝘕𝘢𝘶𝘧𝘳𝘢𝘨𝘰'
global.cb = '🅽︎🆉︎︎'

//Las Versiones Y Entre Otros
global.vs = '1.5.0'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '✯ Naufrago ✯'
global.devnum = '+591 62714296'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
