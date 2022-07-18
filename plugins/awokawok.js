let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./src/awokawok.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*AwokAwok*', 'status@broadcast')
}
handler.customPrefix = /awokawok/i
handler.command = new RegExp

module.exports = handler
