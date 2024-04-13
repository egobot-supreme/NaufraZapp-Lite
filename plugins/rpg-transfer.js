const items = [
    'limit', 'exp',
]
let confirmation = {}
async function handler(m, { conn, args, usedPrefix, command }) {
    if (confirmation[m.sender]) return m.reply('『✦』Estas haciendo una transferencia a un numero.')
    let user = global.db.data.users[m.sender]
    const item = items.filter(v => v in user && typeof user[v] == 'number')
    let lol = `『✦』Use los comandos de la siguiente manera:

• ${usedPrefix + command} tipo • cantidad • @user

*EJEMPLAR:*
${usedPrefix + command} exp 100 @53848374739

『✦』Recurso de transferencia:
💎 *limit* = diamante
⚡ *exp* = experiencia`.trim()
    const type = (args[0] || '').toLowerCase()
    if (!item.includes(type)) return m.reply(lol)
    const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
    if (!who) return m.reply('『✦』Etiqueta al usuario por favor.')
    if (!(who in global.db.data.users)) return m.reply(`『✦』 *El participante: ${who} no registrado en mi base de datos.*`)
    if (user[type] * 1 < count) return m.reply(`『✦』 *No tienes suficiente: ${type}  para transferir.*`)
    let confirm = `
『✦』¿Esta seguro de hacer una transferencia de: *${count}* ${type} a *@${(who || '').replace(/@s\.whatsapp\.net/g, '')}* ? 

Escriba: (si) para acertar
Escriba: (no) para cancelar

> 60 segundos de tiempo.
`.trim()
    let c = 'NaufraZapp-Beta'
    await conn.reply(m.chat, confirm, m, { mentions: [who] })
    //conn.sendButton(m.chat, confirm, c, null, [['si'], ['no']], m, { mentions: [who] })
    confirmation[m.sender] = {
        sender: m.sender,
        to: who,
        message: m,
        type,
        count,
        timeout: setTimeout(() => (m.reply('『✦』Se ha terminado el tiempo de transferencia, se cancela el comando.'), delete confirmation[m.sender]), 60 * 1000)
    }
}

handler.before = async m => {
    if (m.isBaileys) return
    if (!(m.sender in confirmation)) return
    if (!m.text) return
    let { timeout, sender, message, to, type, count } = confirmation[m.sender]
    if (m.id === message.id) return
    let user = global.db.data.users[sender]
    let _user = global.db.data.users[to]
    if (/^No|no$/i.test(m.text) ) { 
    //if (/no?/g.test(m.text.toLowerCase())) {
        clearTimeout(timeout)
        delete confirmation[sender]
        return m.reply('『✦』Transferencia cancelada.')
    }
    if (/^Si|si$/i.test(m.text) ) { 
   // if (/si?/g.test(m.text.toLowerCase())) {
        let previous = user[type] * 1
        let _previous = _user[type] * 1
        user[type] -= count * 1
        _user[type] += count * 1
        if (previous > user[type] * 1 && _previous < _user[type] * 1) m.reply(`『✦』Se ha realizado la transferencia en: *${count}* de *${type}* a @${(to || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [to] })
        else {
            user[type] = previous
            _user[type] = _previous
            m.reply(`『✦』Ocurrio un error al transferir: *${count}* ${type} a *@${(to || '').replace(/@s\.whatsapp\.net/g, '')}*\n\n> Intentelo de nuevo.`, null, { mentions: [to] })
        }
        clearTimeout(timeout)
        delete confirmation[sender]
    }
}

handler.help = ['transfer'].map(v => v + ' [tipo] [cantidad] [@tag]')
handler.tags = ['rg']
handler.command = ['payxp', 'transfer', 'darxp'] 

handler.disabled = false

export default handler

function special(type) {
    let b = type.toLowerCase()
    let special = (['common', 'uncommon', 'mythic', 'legendary', 'pet'].includes(b) ? ' Crate' : '')
    return special
}

function isNumber(x) {
    return !isNaN(x)
        }
        
