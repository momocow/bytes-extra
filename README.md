# bytes-extra
Extend the package 'bytes' to directly  perform conversion between units

# Installation
- `npm install bytes-extra --save`

# Usage
All functions from the original package `bytes` are still available, except the direct call with a string as the first argument.
```
const bytes = require('bytes-extra')

bytes(1024)            //'1KB'
bytes()                //null
bytes('1GB').to('MB')  //'1024MB'
```
If a string is provided as the first argument, an object is returned as the following structure.  
```
{
  result: number,                    //Result from the original 'bytes' package
  to: (unit, options) => string      //function
}
```
