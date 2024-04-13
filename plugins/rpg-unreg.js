import { createHash } from 'crypto'
let handler = async function (m, { args, command }) {

if (command == 'unregister' || command == 'unreg') {
if (!args[0]) throw `*『✦』Ingrese su codigo de verificación, por ejemplo:* \`0dg2k\`\n\n*『✦』Si ha olvidado su codigo, use el comando:* \`#myns\``
let user = global.db.data.users[m.sender]
var sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)
if (args[0] !== sn) throw `*『✦』Codigo incorrecto, verifiquelo por favor.*`
user.registered = false
m.reply(`*『✦』Se ha eliminado con éxito el registro.*`)
}

if (command == 'sn' || command == 'myns') {
conn.fakeReply(m.chat, sn, '5493873687620@s.whatsapp.net', '『✦』Aqui tienes tu código de verificación.', 'status@broadcast')
}

}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <numero de serie>')
handler.tags = ['rg']
handler.command = /^unreg(ister)|myns|ns?$/i
handler.register = true
export default handler
