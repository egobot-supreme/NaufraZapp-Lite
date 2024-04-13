/*

⚠ PROHIBIDO EDITAR ⚠ -- ⚠ PROHIBIDO EDITAR ⚠ -- ⚠ PROHIBIDO EDITAR ⚠

El codigo de este archivo fue realizado por:
- ReyEndymion (https://github.com/ReyEndymion)

⚠ PROHIBIDO EDITAR ⚠ -- ⚠ PROHIBIDO EDITAR ⚠ -- ⚠ PROHIBIDO EDITAR ⚠

*/

import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch, rmSync, promises as fs} from 'fs'
import path, { join } from 'path'

var handler  = async (m, { conn }, args) => {

let parentw = conn
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let uniqid = `${who.split`@`[0]}` //parentw.getName(who)
if (global.conn.user.jid !== conn.user.jid) await conn.reply(m.chat, '『✦』Este comando solo funciona en el bot oficial.', m, fpay, )
else {
await conn.reply(m.chat, '『✦』Eliminando archivos...', m, fpay, )
}

try {
        
fs.rmdir('./BotsWhatsAppOFC/' + uniqid, { recursive: true, force: true })
.then(() => {
console.log('『✦』Archivos innecesarios eliminados.')
})
await conn.reply(m.chat, '『✦』 Archivos innecesarios eliminados', m, fpay, )

} catch(err) {
console.error('『✦』La carpeta o sesion: ', err)
}
            
}
handler.help = ['delete']
handler.tags = ['jadibot']
handler.command = /^(deletebot)$/i

handler.fail = null
handler.register = true
  
export default handler
