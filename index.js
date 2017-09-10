const bytes = require('bytes')

module.exports = function (value, options) {
  if (typeof value === 'string') {
    let parsed = bytes.parse(value)
    if(!options || !options.unit){
      return parsed
    }
    return bytes.format(parsed, options)
  }

  if (typeof value === 'number') {
    return bytes.format(value, options)
  }

  return null
}

module.exports.parse = bytes.parse
module.exports.format = bytes.format
