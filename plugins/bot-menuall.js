import fetch from 'node-fetch';

const handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {

    // let vn = './media/menu.mp3'
    //const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, { weekday: 'long' });
    const date = d.toLocaleDateString(locale, { day: '2-digit', month: '2-digit', year: 'numeric' });
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
        const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
  const {exp, diamond, level, role} = global.db.data.users[m.sender];
      const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': saludo, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${saludo},;;;\nFN:${saludo},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.reply(m.chat, '⏳ 𝑪𝑨𝑹𝑮𝑨𝑵𝑫𝑶...',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: 'Hola ' + taguser, body: '🍿 𝑬𝒔𝒕𝒐𝒚 𝒆𝒏𝒗𝒊𝒂𝒏𝒅𝒐 𝒆𝒍 𝒎𝒆𝒏𝒖, 𝒆𝒔𝒑𝒆𝒓𝒆 𝒑𝒐𝒓 𝒇𝒂𝒗𝒐𝒓...', sourceUrl: global.comprarbots, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('📍');
    await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
  let txt =`
╭─────────────────···•⊰ ⋆
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

> NaufraZapp-MD`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '🌹⸽⃕  𝕾𝖆𝖐𝖚𝖗𝖆 - 𝕭𝖔𝖙 - 𝕷𝖎𝖙𝖊 - 𝕸𝕯 🌸⸽⃕✰', "containsAutoReply": true, "mediaType": 1, "thumbnail": img3, "mediaUrl": global.channel, "sourceUrl": global.channel}}}, {quoted: fkon});
 // m.react('🧩');
  } catch {
    conn.reply(m.chat, '🧸 *Ocurrió Un Error*', m);
  }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menu|menú|allmenu|help|menucompleto)$/i;
handler.register = true
export default handler;

    

  
