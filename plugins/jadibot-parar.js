var handler  = async (m, { conn }) => {
    
if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, '『✦』Este comando solo funciona en el bot oficial.', m, fpay, )
else {
await conn.reply(m.chat, '**c apaga :,v**', m, fpay, )
conn.isInit = false
conn.ws.close()
}
      
}
handler.help = ['berhenti','stop']
handler.tags = ['jadibot']
handler.command = /^(berhenti|stop)$/i

handler.owner = true
  
handler.fail = null
  
export default handler
