const changeFormat = (str) => {
  return str.replace(/[,.]/g, m => ( m === ',' ? '.':','))
}

module.exports = changeFormat
