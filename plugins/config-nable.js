var handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'welcome':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'autolevelup':
case 'levelup':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.autolevelup = isEnable
break
case 'simsimi':
case 'simi':
case 'modoia':
case 'chatbot':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.simi = isEnable
break
case 'detect':
case 'detector':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'detect2':
case 'detector2':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect2 = isEnable
break
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break 
case 'reaction': case 'reaccion': case 'emojis': case 'antiemojis': case 'reacciones': case 'reaciones':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.reaction = isEnable          
break 
case 'audios':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.audios = isEnable;
      break;
case 'antibule':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antibule = !isEnable
break
case 'antidelete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'antiviewonce':
case 'antiver1':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.viewonce = isEnable
break
case 'public':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'antilink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'antilink2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable
break
case 'antitraba':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antitraba = isEnable
break
case 'antitoxic':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiToxic = isEnable
break
case 'game': case 'juegos': case 'fun': case 'ruleta':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.game = isEnable          
break    
case 'modohorny':
case 'adultos':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable
break
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable
break
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable
break
case 'autobio':
isAll = true
if (!(isOwner)) {
global.dfail('rowner', m, conn)
throw false
}
bot.autoBio = isEnable
break
case 'restrict':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'modejadibot':
case 'subbots':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.modejadibot = isEnable
break     
case 'nyimak':
case 'naufrabot':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'autoread':
case 'autoleer':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['autoread'] = isEnable
break
case 'sololatinos':
case 'sololatino':
case 'onlylatinos':
case 'onlylat':
case 'antiarabe':
case 'antifake':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.onlyLatinos = isEnable
break
case 'modoadmin':
case 'soloadmin':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable
break
case 'antistickers':
case 'antisticker':
case 'antipegatina':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
throw false
}}
chat.antiSticker = isEnable
break
case 'pconly':
case 'soloprivados':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'sologrupos':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'nsfw':
case '🔞':
case '+18':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.nsfw = isEnable
break
case 'antiprivado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break
case 'swonly':
case 'ownerbot':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
default:
if (!/[01]/.test(command)) return await conn.reply(m.chat, `┌───────────────────•⊰
│📘 \`Ajustes / Funciones\` 📘
└───────────────────•⊰
•⊰『 REACCIONES 』⊱•
_#off *reaction*_
_#on *reaction*_
•────────────────•
•⊰『 AUDIOS BOT 』⊱•
_#off *audios*_
_#on *audios*_
•────────────────•
•⊰『 DAR BIENVENIDA 』⊱•
_#off *welcome*_
_#on *welcome*_
•────────────────•
•⊰『 DETECTAR 』⊱•
_#off *detector*_
_#on *detector*_
•────────────────•
•⊰『 DETECTAR 2 』⊱•
_#off *detector2*_
_#on *detector2*_
•────────────────•
•⊰『 ANTILINK 』⊱•
_#off *antilink*_
_#on *antilink*_
•────────────────•
•⊰『 ANTILINK 2 』⊱•
_#off *antilink2*_
_#on *antilink2*_
•────────────────•
•⊰『 ANTI FALSOS 』⊱•
_#off *antifake*_
_#on *antifake*_
•────────────────•
•⊰『 ANTI TRABAS 』⊱•
_#off *antitraba*_
_#on *antitraba*_
•────────────────•
•⊰『 ANTI TOXICOS/AS 』⊱•
_#off *antitoxic*_
_#on *antitoxic*_
•────────────────•
•⊰『 AUTO NIVEL 』⊱•
_#off *autolevelup*_
_#on *autolevelup*_
•────────────────•
•⊰『 AUTO CHATGPT 』⊱•
_#off *modoia*_
_#on *modoia*_
•────────────────•
•⊰『 ANTIVER UNA VEZ 』⊱•
_#off *antiver1*_
_#on *antiver1*_
•────────────────•
•⊰『 SOLO ADMINS 』⊱•
_#off *soloadmin*_
_#on *soloadmin*_
•────────────────•
•⊰『 ANTI STICKERS 』⊱•
_#off *antisticker*_
_#on *antisticker*_
•────────────────•
•⊰『 AUTO STICKER 』⊱•
_#off *autosticker*_
_#on *autosticker*_
•────────────────•
•⊰『 ANTI BULE 』⊱•
_#off *antibule*_
_#on *antibule*_
•────────────────•
•⊰『CONTENIDO ADULTO』⊱•
_#off 🔞_
_#on 🔞_
•────────────────•
•⊰『 SOLO WONERS 』⊱•
_#off *ownerbot*_
_#on *ownerbot*_
•────────────────•
•⊰『 ACTIVAR SUB BOTS 』⊱•
_#off *subbots*_
_#on *subbots*_
•────────────────•
•⊰『 NÁUFRABOT 』⊱•
_#off *naufrabot*_
_#on *naufrabot*_
•────────────────•
•⊰『 RESTRICCIONES 』⊱•
_#off *restrict*_
_#on *restrict*_
•────────────────•
•⊰『 MODO PÚBLICO 』⊱•
_#off *public*_
_#on *public*_
•────────────────•
•⊰『 BOT PRIVADO 』⊱•
_#off *soloprivados*_
_#on *soloprivados*_
•────────────────•
•⊰『 BOT GRUPAL 』⊱•
_#off *sologrupos*_
_#on *sologrupos*_
•────────────────•
•⊰『 DEJAR EN VISTO 』⊱•
_#off *autoleer*_
_#on *autoleer*_
•────────────────•
> NaufraZapp-Beta`, m, fake, )
throw false
}
conn.reply(m.chat, `┏•════════════════•\n${isEnable ? '┃『❇️』' : '┃『✅』'} COMANDO: ${type}\n┃『⚙️』ESTADO: ${isEnable ? '*Activado*' : '*Desactivado*'}\n┃『💾』PARA: ${isAll ? '*Este bot.*' : isUser ? '' : '*Este chat.*'}\n┗•════════════════•`, m, fake, )

}
handler.help = ['en', 'dis'].map(v => v + 'able')
handler.tags = ['nable', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

export default handler
