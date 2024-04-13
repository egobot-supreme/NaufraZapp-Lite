import fs from 'fs'

let timeout = 60000
let poin = 500

var handler = async (m, { conn, usedPrefix }) => {

conn.tekateki = conn.tekateki ? conn.tekateki : {}
let id = m.chat
if (id in conn.tekateki) {
conn.reply(m.chat, 'Hay acertijos sin resolver aun.', conn.tekateki[id][0], fake, )
throw false
}
let tekateki = JSON.parse(fs.readFileSync(`./storage/juegos/acertijo.json`))
let json = tekateki[Math.floor(Math.random() * tekateki.length)]
let _clue = json.response
let clue = _clue.replace(/[A-Za-z]/g, '_')
let caption = `
『✦』Acertijos:

ⷮ${json.question}

*Tiempo:* ${(timeout / 1000).toFixed(2)} segundos
*Bono:* +${poin} Exp
`.trim()
conn.tekateki[id] = [
await conn.reply(m.chat, caption, m),
json, poin,
setTimeout(async () => {
if (conn.tekateki[id]) await conn.reply(m.chat, `Se termino el Tiempo.`, conn.tekateki[id][0], fake, )
delete conn.tekateki[id]
}, timeout)
]
}

handler.help = ['acertijo', 'acert', 'adivinanza', 'tekateki']
handler.tags = ['juegos']
handler.command = /^(acertijo|acert|adivinanza|tekateki)$/i

handler.register = true

export default handler
