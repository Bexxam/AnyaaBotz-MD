let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./src/pembohong.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*Yang Bener?*', 'status@broadcast')
}
handler.customPrefix = /beneran/i
handler.command = new RegExp

module.exports = handler
