import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
try {
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let menu = `╭─────────────────···•⊰ ⋆
│👋🏻 Hola ${taguser}
│soy ${wm}
│•────────────────···•⊰
│Fecha: ${date}
│Tiempo activo: ${uptime}
╰─────────────────···•⊰ ⋆
• https://youtube.com/@user-bw5wl4ye8r?si=qN8bP4ZdKm3yXwbx

• https://www.atom.bio/bots-whatsapp-ofc
${readMore}
•─•❮📑 \`INFORMACION\` 📑❯:
░⃟⃜📚ꪳ۫₎۬۟〬•⊰ #contacto
░⃟⃜📚ꪳ۫₎۬۟〬•⊰ #creador
░⃟⃜📚ꪳ۫₎۬۟〬•⊰ #contactos
░⃟⃜📚ꪳ۫₎۬۟〬•⊰ #cuentasofc
░⃟⃜📚ꪳ۫₎۬۟〬•⊰ #cuentas
░⃟⃜📚ꪳ۫₎۬۟〬•⊰ #gruponz
░⃟⃜📚ꪳ۫₎۬۟〬•⊰ #dash
░⃟⃜📚ꪳ۫₎۬۟〬•⊰ #dashboard
░⃟⃜📚ꪳ۫₎۬۟〬•⊰ #views
░⃟⃜📚ꪳ۫₎۬۟〬•⊰ #database
░⃟⃜📚ꪳ۫₎۬۟〬•⊰ #usuarios
░⃟⃜📚ꪳ۫₎۬۟〬•⊰ #user
░⃟⃜📚ꪳ۫₎۬۟〬•⊰ #donar

•─•❮👥 \`GRUPOS\` 👥❯:
░⃟⃜🌎ꪳ۫₎۬۟〬•⊰ #add
░⃟⃜🌎ꪳ۫₎۬۟〬•⊰ #admins
░⃟⃜🌎ꪳ۫₎۬۟〬•⊰ #aprobar
░⃟⃜🌎ꪳ۫₎۬۟〬•⊰ #group abrir
░⃟⃜🌎ꪳ۫₎۬۟〬•⊰ #grupo cerrar
░⃟⃜🌎ꪳ۫₎۬۟〬•⊰ #demote
░⃟⃜🌎ꪳ۫₎۬۟〬•⊰ #hidetag
░⃟⃜🌎ꪳ۫₎۬۟〬•⊰ #idgc
░⃟⃜🌎ꪳ۫₎۬۟〬•⊰ #infogrupo
░⃟⃜🌎ꪳ۫₎۬۟〬•⊰ #kick
░⃟⃜🌎ꪳ۫₎۬۟〬•⊰ #link
░⃟⃜🌎ꪳ۫₎۬۟〬•⊰ #listanum
░⃟⃜🌎ꪳ۫₎۬۟〬•⊰ #kicknum
░⃟⃜🌎ꪳ۫₎۬۟〬•⊰ #promote
░⃟⃜🌎ꪳ۫₎۬۟〬•⊰ #revoke
░⃟⃜🌎ꪳ۫₎۬۟〬•⊰ #setbye
░⃟⃜🌎ꪳ۫₎۬۟〬•⊰ #setdesc
░⃟⃜🌎ꪳ۫₎۬۟〬•⊰ #setname
░⃟⃜🌎ꪳ۫₎۬۟〬•⊰ #setpp
░⃟⃜🌎ꪳ۫₎۬۟〬•⊰ #setppgc
░⃟⃜🌎ꪳ۫₎۬۟〬•⊰ #setppgroup
░⃟⃜🌎ꪳ۫₎۬۟〬•⊰ #setwelcome
░⃟⃜🌎ꪳ۫₎۬۟〬•⊰ #simulate
░⃟⃜🌎ꪳ۫₎۬۟〬•⊰ #tagall

•─•❮🎰 \`JUEGOS\` 🎰❯:
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #love
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #suerte
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #ruleta
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #ruletas
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #acertijo
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #acert
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #adivinanza
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #tekateki
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #advpe
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #adv
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #película
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #películas
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #cancion
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #delttt
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #delttc
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #delxo
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #doxear
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #doxeo
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #doxxeo
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #gay
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #los10
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #mates
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #personalidad
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #ppt
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #pregunta
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #reto
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #fap
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #afk
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #bal
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #crime
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #daily
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #claim
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #heal
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #buy
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #sell
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #levelup
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #minar
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #myns
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #profile @tag
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #repair
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #saquear @tag
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #tagme
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #transfer
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #reg
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #work
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #leaderboard
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #limit @tag
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #ship
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #simi
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #slot
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #buscarpalabra
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #sopa
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #soup
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #spdepalabras
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #tictactoe
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #topgays
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #topotakus
░⃟⃜🎮ꪳ۫₎۬۟〬•⊰ #topheteros

•─•❮⬇️ \`DESCARGAS\` ⬇️❯:
░⃟⃜💾ꪳ۫₎۬۟〬•⊰ #fb
░⃟⃜💾ꪳ۫₎۬۟〬•⊰ #gitclone
░⃟⃜💾ꪳ۫₎۬۟〬•⊰ #ig
░⃟⃜💾ꪳ۫₎۬۟〬•⊰ #fetch
░⃟⃜💾ꪳ۫₎۬۟〬•⊰ #get
░⃟⃜💾ꪳ۫₎۬۟〬•⊰ #pelisplus
░⃟⃜💾ꪳ۫₎۬۟〬•⊰ #githubsearch
░⃟⃜💾ꪳ۫₎۬۟〬•⊰ #npmsearch
░⃟⃜💾ꪳ۫₎۬۟〬•⊰ #ytsearch
░⃟⃜💾ꪳ۫₎۬۟〬•⊰ #dlmodlatest
░⃟⃜💾ꪳ۫₎۬۟〬•⊰ #mediafire
░⃟⃜💾ꪳ۫₎۬۟〬•⊰ #apkmod
░⃟⃜💾ꪳ۫₎۬۟〬•⊰ #play
░⃟⃜💾ꪳ۫₎۬۟〬•⊰ #bard
░⃟⃜💾ꪳ۫₎۬۟〬•⊰ #bardimg
░⃟⃜💾ꪳ۫₎۬۟〬•⊰ #dalle
░⃟⃜💾ꪳ۫₎۬۟〬•⊰ #consejo
░⃟⃜💾ꪳ۫₎۬۟〬•⊰ #oracion
░⃟⃜💾ꪳ۫₎۬۟〬•⊰ #piropo
░⃟⃜💾ꪳ۫₎۬۟〬•⊰ #refran
░⃟⃜💾ꪳ۫₎۬۟〬•⊰ #dall2
░⃟⃜💾ꪳ۫₎۬۟〬•⊰ #hd
░⃟⃜💾ꪳ۫₎۬۟〬•⊰ #openia
░⃟⃜💾ꪳ۫₎۬۟〬•⊰ #chatgpt
░⃟⃜💾ꪳ۫₎۬۟〬•⊰ #ia
░⃟⃜💾ꪳ۫₎۬۟〬•⊰ #gimage
░⃟⃜💾ꪳ۫₎۬۟〬•⊰ #imagen
░⃟⃜💾ꪳ۫₎۬۟〬•⊰ #pinterest
░⃟⃜💾ꪳ۫₎۬۟〬•⊰ #play2
░⃟⃜💾ꪳ۫₎۬۟〬•⊰ #play3
░⃟⃜💾ꪳ۫₎۬۟〬•⊰ #play4
░⃟⃜💾ꪳ۫₎۬۟〬•⊰ #tiktok
░⃟⃜💾ꪳ۫₎۬۟〬•⊰ #tiktokslide
░⃟⃜💾ꪳ۫₎۬۟〬•⊰ #yta
░⃟⃜💾ꪳ۫₎۬۟〬•⊰ #ytv

•─•❮🤖 \`SUB BOTS\` 🤖❯:
░⃟⃜🌐ꪳ۫₎۬۟〬•⊰ #bcbot
░⃟⃜🌐ꪳ۫₎۬۟〬•⊰ #delete
░⃟⃜🌐ꪳ۫₎۬۟〬•⊰ #berhenti
░⃟⃜🌐ꪳ۫₎۬۟〬•⊰ #stop
░⃟⃜🌐ꪳ۫₎۬۟〬•⊰ #listjadibot
░⃟⃜🌐ꪳ۫₎۬۟〬•⊰ #bots
░⃟⃜🌐ꪳ۫₎۬۟〬•⊰ #subsbots
░⃟⃜🌐ꪳ۫₎۬۟〬•⊰ #jadibot
░⃟⃜🌐ꪳ۫₎۬۟〬•⊰ #serbot
░⃟⃜🌐ꪳ۫₎۬۟〬•⊰ #getcode
░⃟⃜🌐ꪳ۫₎۬۟〬•⊰ #rentbot
░⃟⃜🌐ꪳ۫₎۬۟〬•⊰ #token
░⃟⃜🌐ꪳ۫₎۬۟〬•⊰ #gettoken
░⃟⃜🌐ꪳ۫₎۬۟〬•⊰ #serbottoken

•─•❮🌆 \`ALEATORIO\` 🌆❯:
░⃟⃜🪄ꪳ۫₎۬۟〬•⊰ #ds
░⃟⃜🪄ꪳ۫₎۬۟〬•⊰ #fixmsgespera
░⃟⃜🪄ꪳ۫₎۬۟〬•⊰ #listafakes
░⃟⃜🪄ꪳ۫₎۬۟〬•⊰ #menu
░⃟⃜🪄ꪳ۫₎۬۟〬•⊰ #menuaudios
░⃟⃜🪄ꪳ۫₎۬۟〬•⊰ #china
░⃟⃜🪄ꪳ۫₎۬۟〬•⊰ #meme
░⃟⃜🪄ꪳ۫₎۬۟〬•⊰ #vietnamita
░⃟⃜🪄ꪳ۫₎۬۟〬•⊰ #tailandes
░⃟⃜🪄ꪳ۫₎۬۟〬•⊰ #indonesia
░⃟⃜🪄ꪳ۫₎۬۟〬•⊰ #japones
░⃟⃜🪄ꪳ۫₎۬۟〬•⊰ #coreana
░⃟⃜🪄ꪳ۫₎۬۟〬•⊰ #malaya
░⃟⃜🪄ꪳ۫₎۬۟〬•⊰ #audios
░⃟⃜🪄ꪳ۫₎۬۟〬•⊰ #animelink
░⃟⃜🪄ꪳ۫₎۬۟〬•⊰ #fanart
░⃟⃜🪄ꪳ۫₎۬۟〬•⊰ #husbu
░⃟⃜🪄ꪳ۫₎۬۟〬•⊰ #kanna
░⃟⃜🪄ꪳ۫₎۬۟〬•⊰ #megumin
░⃟⃜🪄ꪳ۫₎۬۟〬•⊰ #neko
░⃟⃜🪄ꪳ۫₎۬۟〬•⊰ #shota
░⃟⃜🪄ꪳ۫₎۬۟〬•⊰ #waifu
░⃟⃜🪄ꪳ۫₎۬۟〬•⊰ #elaina
░⃟⃜🪄ꪳ۫₎۬۟〬•⊰ #animeinfo
░⃟⃜🪄ꪳ۫₎۬۟〬•⊰ #lolice
░⃟⃜🪄ꪳ۫₎۬۟〬•⊰ #ping
░⃟⃜🪄ꪳ۫₎۬۟〬•⊰ #reporte
░⃟⃜🪄ꪳ۫₎۬۟〬•⊰ #request
░⃟⃜🪄ꪳ۫₎۬۟〬•⊰ #speedtest
░⃟⃜🪄ꪳ۫₎۬۟〬•⊰ #estado
░⃟⃜🪄ꪳ۫₎۬۟〬•⊰ #status

•─•❮🎨 \`STICKERS\` 🎨❯:
░⃟⃜🪩ꪳ۫₎۬۟〬•⊰ #s
░⃟⃜🪩ꪳ۫₎۬۟〬•⊰ #toanime
░⃟⃜🪩ꪳ۫₎۬۟〬•⊰ #togifaud
░⃟⃜🪩ꪳ۫₎۬۟〬•⊰ #toimg
░⃟⃜🪩ꪳ۫₎۬۟〬•⊰ #tomp3
░⃟⃜🪩ꪳ۫₎۬۟〬•⊰ #tovn
░⃟⃜🪩ꪳ۫₎۬۟〬•⊰ #tourl
░⃟⃜🪩ꪳ۫₎۬۟〬•⊰ #tovideo
░⃟⃜🪩ꪳ۫₎۬۟〬•⊰ #tts
░⃟⃜🪩ꪳ۫₎۬۟〬•⊰ #stickers
░⃟⃜🪩ꪳ۫₎۬۟〬•⊰ #wm packname|author

•─•❮🎧 \`AUDIO EDIT\` 🎧❯:
░⃟⃜🎤ꪳ۫₎۬۟〬•⊰ #bass
░⃟⃜🎤ꪳ۫₎۬۟〬•⊰ #blown
░⃟⃜🎤ꪳ۫₎۬۟〬•⊰ #deep
░⃟⃜🎤ꪳ۫₎۬۟〬•⊰ #earrape
░⃟⃜🎤ꪳ۫₎۬۟〬•⊰ #fast
░⃟⃜🎤ꪳ۫₎۬۟〬•⊰ #fat
░⃟⃜🎤ꪳ۫₎۬۟〬•⊰ #nightcore
░⃟⃜🎤ꪳ۫₎۬۟〬•⊰ #reverse
░⃟⃜🎤ꪳ۫₎۬۟〬•⊰ #robot
░⃟⃜🎤ꪳ۫₎۬۟〬•⊰ #slow
░⃟⃜🎤ꪳ۫₎۬۟〬•⊰ #smooth
░⃟⃜🎤ꪳ۫₎۬۟〬•⊰ #tupai

•─•❮⚙️ \`HERRAMIENTAS\` ⚙️❯:
░⃟⃜🧰ꪳ۫₎۬۟〬•⊰ #acortar
░⃟⃜🧰ꪳ۫₎۬۟〬•⊰ #delete
░⃟⃜🧰ꪳ۫₎۬۟〬•⊰ #dropmail
░⃟⃜🧰ꪳ۫₎۬۟〬•⊰ #enable
░⃟⃜🧰ꪳ۫₎۬۟〬•⊰ #disable
░⃟⃜🧰ꪳ۫₎۬۟〬•⊰ #fake
░⃟⃜🧰ꪳ۫₎۬۟〬•⊰ #readviewonce
░⃟⃜🧰ꪳ۫₎۬۟〬•⊰ #nowa
░⃟⃜🧰ꪳ۫₎۬۟〬•⊰ #qrcode
░⃟⃜🧰ꪳ۫₎۬۟〬•⊰ #spoiler
░⃟⃜🧰ꪳ۫₎۬۟〬•⊰ #readqr
░⃟⃜🧰ꪳ۫₎۬۟〬•⊰ #style
░⃟⃜🧰ꪳ۫₎۬۟〬•⊰ #traducir
░⃟⃜🧰ꪳ۫₎۬۟〬•⊰ #codesidiomas


•─•❮🎉 \`OWNER\` 🎉❯:
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ #autoadmin
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ #backup
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ #respaldo
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ #copia
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ #banchat
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ #broadcastgroup <teks>
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ #bcgc <teks>
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ #block
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ #unblock
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ #blocklist
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ #cleartmp
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ #dsowner
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ #enable
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ #disable
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ #totalf
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ #setcmd
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ #delcmd
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ #listcmd
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ #unbanchat
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ >
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ =>
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ $
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ #getplugin
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ #join
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ #out
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ #leavegc
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ #salir
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ #setbotname
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ #restart
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ #saveplugin
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ #unbanuser
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ #update
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ #actualizar

> NaufraZapp-Beta
 `.trim()
    
const vi = ['https://qu.ax/ygwT.mp4', 'https://qu.ax/iFCi.mp4', 'https://qu.ax/jie.mp4', 'https://qu.ax/Pbha.mp4', 'https://qu.ax/bdvm.mp4']
try {
await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, contextInfo: channel })
//await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: { url: imgAll.getRandom() }, gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: nzImg.getRandom(), gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try{
await conn.sendFile(m.chat, imagen5, 'menu.jpg', menu, fkontak, false, { mentions: [m.sender, global.conn.user.jid] })
} catch (error) {
return 
}}}} 
} catch (e) {
    conn.reply(m.chat, 'Ocurrio un error inesperado.', m);
    }
};

handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|menucompleto|allmenu|allm|m|\?)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

