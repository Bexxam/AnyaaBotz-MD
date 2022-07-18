let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./src/Dongo.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*Dongo*', 'status@broadcast')
}
handler.customPrefix = /dongo/i
handler.command = new RegExp

module.exports = handler
