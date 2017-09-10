# bytes-extra
Extend the package 'bytes' to directly  perform conversion between units

# Installation
- `npm install bytes-extra --save`

# Usage
All functions from the original package `bytes` are still available, except the direct call with a string as the first argument.
```
const bytes = require('bytes-extra')

// as usual
bytes(1024)                  //'1KB'
bytes()                      // null

bytes('1GB').result          // 1073741824
bytes('1GB').to('MB')        //'1024MB'

bytes('1MB')                 // 1048576

let opt = {decimalPlaces: 5, unitSeparator: '/'}
bytes('1MB').to('GB', opt)   //'0.00098/GB'
```
If a string is provided as the first argument, an object is returned as the following structure.  
```
{
  result: number,                    //Result from the original 'bytes' package
  to: (unitIn, options) => string      //function
}
```
The `options` is the same as options in the original package `bytes`, while `unit` field will be overriden by argument `unitIn`
