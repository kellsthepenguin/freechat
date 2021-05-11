const fs = require('fs')

let text = ''

for (let i = 0; i < 1000; i++) {
  text += String.fromCharCode(Math.floor(Math.random() * 65535))
}

console.log(text)

if (!fs.existsSync('./resources/')) {
  fs.mkdirSync('./resources/')
}

if (!fs.existsSync('./resources/private.key')) {
  fs.appendFileSync('./resources/private.key', text)
}

fs.writeFileSync('./resources/private.key', text)
