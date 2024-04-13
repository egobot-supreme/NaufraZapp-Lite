const items = {
buy: {
limit: { exp: 350 },
potion: { money: 5 },
pickaxe: { money: 30 } 
},
sell: {
potion: { money: 10 },
diamond: { money: 5 },
pickaxe: { money: 15 }
}}

var handler = async (m, { command, usedPrefix, args }) => {

let user = global.db.data.users[m.sender]
const listItems = Object.fromEntries(Object.entries(items[command.toLowerCase()]).filter(([v]) => v && v in user))
const info = `『✦』EJEMPLOS DE USO:
*#${command} limit 10*
    
『✦』ITEMS:
${Object.keys(listItems).map((v) => {
let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
return `${global.rpg.emoticon(v)}${v} ${listItems[v][paymentMethod]} ${global.rpg.emoticon(paymentMethod)}${paymentMethod}`.trim()}).join('\n')}`.trim()
  
const item = (args[0] || '').toLowerCase()
const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
if (!listItems[item]) return conn.reply(m.chat, info, m, fake, )
if (command.toLowerCase() == 'buy') {
let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
if (user[paymentMethod] < listItems[item][paymentMethod] * total) return conn.reply(m.chat, `『✦』No tienes suficientes: *${global.rpg.emoticon(paymentMethod)}${paymentMethod}* para comprar *${total}* ${global.rpg.emoticon(item)}${item}. Tienes que tener: *${(listItems[item][paymentMethod] * total) - user[paymentMethod]}* más ${paymentMethod} para poder comprar`, m, fake, )
user[paymentMethod] -= listItems[item][paymentMethod] * total
user[item] += total
return conn.reply(m.chat, `『✦』Compraste: *${total}* ${global.rpg.emoticon(item)}${item}`, m, fake, )
} else {
if (user[item] < total) return conn.reply(m.chat, `『✦』No tienes suficientes: *${global.rpg.emoticon(item)}${item}*, para vender solo tienes ${user[item]} items`, m, fake, )
user[item] -= total
user.money += listItems[item].money * total
return conn.reply(m.chat, `『✦』Vendes: *${total}* ${global.rpg.emoticon(item)}${item}`, m, fake, )
}

}
handler.help = ['buy', 'sell']
handler.tags = ['rpg']
handler.command = /^(buy|sell)$/i

handler.register = true

export default handler

function isNumber(number) {
if (!number) return number
number = parseInt(number)
return typeof number == 'number' && !isNaN(number)
  }
                                                                        
