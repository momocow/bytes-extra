const bytes = require('bytes')

module.exports = function (value, options) {
  if (typeof value === 'string') {
    let parsed = bytes.parse(value)
    return {result: parsed, to: function(unitIn, optIn = {}){
      Object.assign(optIn, {unit: unitIn})
      return bytes.format(parsed, optIn)
    }}
  }

  if (typeof value === 'number') {
    return bytes.format(value, options)
  }

  return null
}

module.exports.parse = bytes.parse
module.exports.format = bytes.format
