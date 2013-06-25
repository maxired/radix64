radix64
=======
[![Build Status](https://travis-ci.org/maxired/radix64.png?branch=master)](https://travis-ci.org/maxired/radix64)

radix64 is a JS Library which allow to transform an unsigned Integer into a string with the same characteres as base64URL.
It allow to compress the number into a smaller string which doesn't need to be URLEncoded
The default behavior is to encode using Base64URL, as defined in [rfc 4648](http://tools.ietf.org/html/rfc4648)

##Basic Usage

```javascript
var radix64 = require('radix64').radix64 ;
console.log(radix64( +new Date()));

```

###Options
Several mapping option is available
 * base64 : respect base64 charactere map from [rfc 4648](http://tools.ietf.org/html/rfc4648).
 * base64URL : default option. The output can safely be use in URLs without beeing url encoded.
 * base64Natural : follow a more natural order of mapping, begining the same way a Hexadecimal.
 * base64Ascii : same caractere as base64URL, but order in the ascii code order. It allows comparaison of output of the same length.


###Usage with Options
```javascript
var radix64 = require('radix64') ;
console.log(radix64.radix64( +new Date()) , radix64.methods.BASE64URL );
```

##ASCII64
The base64Ascii method allows to compare output from same length, but doesn't work for output of differents length.
The Ascii64 methods aims to solve this problem, by adding padding to the output
###Sample
```javascript
var ascii64 = require('radix64').ascii64 ;
assert.ok ( ascii(65) > ascii(63));
```
