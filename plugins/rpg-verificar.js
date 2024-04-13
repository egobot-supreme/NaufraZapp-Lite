import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
  let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/1861aab98389b13db8588.jpg')
  if (user.registered === true) throw `*『✦』Usted ya se encuentra registrado/a, quiere registrarse otra vez?, use estos comandos.\n*${usedPrefix}unreg*`
  if (!Reg.test(text)) throw `『✦』La verificación es incorrecta, use como en este ejemplo:\n\n*${usedPrefix + command}* ${name2}.23`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '*『✦』Ingrese su nombre por favor...'
  if (!age) throw '*『✦』Ingrese su edad por favor...'
  if (name.length >= 30) throw '*『✦』Viejo/a sabroso/a. Ingrese un edad por lo menos de 29.*' 
  age = parseInt(age)
  if (age > 100) throw '『✦』No, ingrese una edad de por lo menos 19 o 20 si usted es joven.'
  if (age < 5) throw '『✦』Lo siento pero no aceptamos niños aqui.'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
m.react('✅') 
let regbot = `
┌•━•❲『✦ REGISTRO ✦』❳
┃𝙉𝙤𝙢𝙗𝙧𝙚:
┃ ${name}
┠───────────────•
┃𝙀𝙙𝙖𝙙:
┃ ${age} años
┠───────────────•
┃𝘾𝙤𝙙𝙞𝙜𝙤 𝙙𝙚 𝙫𝙚𝙧𝙞𝙛𝙞𝙘𝙖𝙘𝙞𝙤𝙣:
┃ ${sn}
└•━•❲『✦ REGISTRO ✦』❳`
await m.reply(regbot)
//await conn.sendUrl(m.chat, regbot, m, { externalAdReply: { mediaType: 1, renderLargerThumbnail: true, thumbnail: pp, thumbnailUrl: pp, title: '✅ 𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝙊 ✅', }})

}
handler.help = ['reg'].map(v => v + ' <nombre.edad>')
handler.tags = ['rg']

handler.command = ['verify', 'verificar', 'reg', 'register', 'registrar'] 

export default handler


