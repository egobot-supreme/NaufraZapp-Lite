import fetch from 'node-fetch';

const handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {

    // const pp = imagen7;

    // let vn = './media/menu.mp3'
    const img = nzAll.getRandom()
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, { weekday: 'long' });
    const date = d.toLocaleDateString(locale, { day: '2-digit', month: '2-digit', year: 'numeric' });
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const { money, joincount } = global.db.data.users[m.sender];
    const { exp, limit, level, role } = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `╭─────────────────···•⊰ ⋆
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
`.trim();
    if (m.isGroup) {
      let pp = nzAll.getRandom()
     

      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = { 'key': { 'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo' }, 'message': { 'contactMessage': { 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` } }, 'participant': '0@s.whatsapp.net' };
      conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: m });
    } else {
      let pp = nzAll.getRandom()
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = { 'key': { 'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo' }, 'message': { 'contactMessage': { 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` } }, 'participant': '0@s.whatsapp.net' };
      conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: fkontak2 });
    }
  } catch {
    conn.reply(m.chat, '⛔ Ocurrio un error inesperado.', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}

      
