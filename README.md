radix64
=======

radix64 is a JS Library which allow to transform an unsigned Integer into a string with the same characteres as base64URL.
It allow to compress the number into a smaller string which doesn't need to be URLEncoded


##Usage

```javascript
var radix64 = require('radix64').radix64 ;
console.log(radix64( +new Date()));
```
