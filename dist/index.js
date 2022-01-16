
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./avalab-sdk.cjs.production.min.js')
} else {
  module.exports = require('./avalab-sdk.cjs.development.js')
}
