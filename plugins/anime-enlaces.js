var handler = async m => 

conn.reply(m.chat, ` 
Próximamente...
 `, m, fpay, )
 
handler.help = ['animelink']
handler.tags = ['anime']
handler.command = /^animelink$/i
 
handler.limit = true
handler.register = true
 
export default handler 
