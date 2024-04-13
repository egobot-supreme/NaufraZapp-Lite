import { execSync } from 'child_process'

var handler = async (m, { conn, text }) => {

try {
const stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''));
let messager = stdout.toString()
if (messager.includes('Already up to date.')) messager = '『✦』No hay actualizaciones disponibles.'
if (messager.includes('Updating')) messager = '『🛠️』Se ha actualizado el bot correctamente.\n\n' + stdout.toString()
conn.reply(m.chat, messager, m, fake, )
} catch { 
try {
const status = execSync('git status --porcelain')
if (status.length > 0) {
const conflictedFiles = status.toString().split('\n').filter(line => line.trim() !== '').map(line => {
if (line.includes('.npm/') || line.includes('.cache/') || line.includes('tmp/') || line.includes('NaufraBotSession/') || line.includes('npm-debug.log')) {
return null
}
return '*→ ' + line.slice(3) + '*'}).filter(Boolean)
if (conflictedFiles.length > 0) {
const errorMessage = `『✦』 Se han cambiado los archivos sea imagenes y otras cosas en carpetas, tendras que volver a actualizar el bot.\n\nArchivos en conflicto:\n\n${conflictedFiles.join('\n')}`
await conn.reply(m.chat, errorMessage, m, fpay, )
}
}
} catch (error) {
console.error(error)
let errorMessage2 = '『✦』Ocurrio un error inesperado, intentalo de nuevo.'
if (error.message) {
errorMessage2 += '\n*- Mensaje de error:* ' + error.message;
}
await conn.reply(m.chat, errorMessage2, m, fpay, )
}
}

}
handler.help = ['update', 'actualizar']
handler.tags = ['own']
handler.command = /^(update|actualizar|gitpull)$/i
handler.rowner = true

export default handler
