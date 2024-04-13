import fs from 'fs'

async function handler(m, {usedPrefix}) {

const user = m.sender.split('@')[0]
if (fs.existsSync('./BotsWhatsAppOFC/' + user + '/creds.json')) {
let token = Buffer.from(fs.readFileSync('./BotsWhatsAppOFC/' + user + '/creds.json'), 'utf-8').toString('base64')

await conn.reply(m.chat, `『✦』 *El token te permite iniciar sesion en otros bots, recomendamos no compartirlo con nadie*\n\nTu token es:`, m, fake, )
await conn.reply(m.chat, token, m, fpay, )
} else {
await conn.reply(m.chat, `『✦』No tienes un cupon, usa el comando: #nzsub`, m, fpay, )
}

}
handler.help = ['token', 'gettoken', 'serbottoken']
handler.command = ['token', 'gettoken', 'serbottoken']
handler.tags = ['jadibot']

handler.private = true
handler.register = true

export default handler 
