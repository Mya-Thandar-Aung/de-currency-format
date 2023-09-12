const changeFormat = require('./index.js')
const enStr = '1.000,00'
const deStr = '1,000.00'

const deR = changeFormat(enStr)
const enR = changeFormat(deStr)

console.log(enStr, deR)
console.log(deStr, enR)
