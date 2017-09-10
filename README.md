# bytes-extra
Extend the package 'bytes' to directly  perform conversion between units  

[![npm](https://img.shields.io/npm/v/bytes-extra.svg)](https://www.npmjs.com/package/bytes-extra)
[![npm](https://img.shields.io/npm/l/bytes-extra.svg)](https://github.com/momocow/bytes-extra)
[![Build Status](https://travis-ci.org/momocow/bytes-extra.svg?branch=master)](https://travis-ci.org/momocow/bytes-extra)
[![npm](https://img.shields.io/npm/dm/bytes-extra.svg)](https://www.npmjs.com/package/bytes-extra)
[![Coverage Status](https://coveralls.io/repos/github/momocow/bytes-extra/badge.svg?branch=master)](https://coveralls.io/github/momocow/bytes-extra?branch=master)

# Installation
- `npm install bytes-extra --save`

# Usage
All functions from the original package `bytes` are available.
```
const bytes = require('bytes-extra')

// as usual
bytes(1024)                  //'1KB'
bytes()                      // null
bytes('1GB')                 // 1073741824
```
If a string is provided as the first argument and the second argument `options` contains `unit` field, an string is returned as the unit conversion result.  
```
bytes('1GB', {unit: 'MB'})   //'1024MB'
```
