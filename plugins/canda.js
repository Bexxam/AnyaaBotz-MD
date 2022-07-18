let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./src/canda.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*Baperan:v*', 'status@broadcast')
}
handler.customPrefix = /canda/i
handler.command = new RegExp

module.exports = handler
