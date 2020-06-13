const fs = require('fs')
const path = require('path')
const basePath = 'js/assets'
console.log('begin')
// const content = fs.readFileSync(path.resolve(basePath,'invictus.txt'))
// console.log(content.toString())
const files = fs.readdirSync(path.resolve(basePath))
const sentences = files.filter((file) => /s[1-4].txt/gi.te )
console.log('end')