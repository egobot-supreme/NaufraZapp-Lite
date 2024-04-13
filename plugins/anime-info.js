import fetch from 'node-fetch'
  
var handler = async (m, { conn, text }) => {
 
if (!text) return conn.reply(m.chat, `『✦』Ingrese el nombre de un anime por favor.\n\n#animeinfo Kimetsu No Yaiba`, m, fake, )
let res = await fetch('https://api.jikan.moe/v4/manga?q=' + text)
if (!res.ok) return conn.reply(m.chat, `『✦』Error, intentelo de nuevo.`, m, fake, )

let json = await res.json()
let { chapters, title_japanese, url, type, score, members, background, status, volumes, synopsis, favorites } = json.data[0]
let author = json.data[0].authors[0].name
let animeingfo = `Título:
${title_japanese}

Capítulo:
${chapters}

Transmisión:
${type}

Estado:
${status}

Volumes:
${volumes}

Favorito:
${favorites}

Puntaje:
${score}

Miembros:
${members}

Url:
${url}

Autor:
${author}

Fondo:
${background}

Sinopsis:
${synopsis}
 ` 
conn.sendFile(m.chat, json.data[0].images.jpg.image_url, 'anjime.jpg', `『✦』Imformacion de anime` + animeingfo, fkontak, m)

} 
handler.help = ['animeinfo'] 
handler.tags = ['anime'] 
handler.command = /^(animeinfo)$/i 
 
export default handler