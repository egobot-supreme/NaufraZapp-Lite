var handler = async (m, { conn }) => {

let totalf = Object.values(global.plugins).filter( (v) => v.help && v.tags ).length

conn.reply(m.chat, `${totalf} de comandos.`, m, fpay, )

}
handler.help = ['totalf']
handler.tags = ['database']
handler.command = ['totalf']

handler.register = true

export default handler 
