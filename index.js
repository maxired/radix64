var methods = {
	base64: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
	base64URL: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
	base64URLNaturalSort: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_",
	base64URLASCIISort: "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz"
};

var methodsEnum = {
	BASE64: 'base64',
	BASE64URL: 'base64URL',
	BASE64NATURAL: 'base64URLNaturalSort',
	BASE64ASCII: 'base64URLASCIISort',
	DEFAULT: 'base64URL'
};

var convertOne = function(number, method) {
	var tmp = number & 63;
	var array = methods[method || methodsEnum.DEFAULT];
	return array[number];
};

var radix64 = function(number, method) {

	if (number < 64) {
		return convertOne(number, method);
	}
	return '' + radix64(Math.floor(number / 64), method) + convertOne(number & 63, method);

}

var ascii64 = function(number, pad) {
	pad = pad || 10;
	
	function addpadding(pad) {
		return (pad <= 0 ? '' : '-'+addpadding(pad - 1));
	};

	var toreturn = radix64(number, methodsEnum.BASE64ASCII);
	if (toreturn.length < pad) {
		toreturn = addpadding(pad - toreturn.length) + toreturn;
	}
	return toreturn;

}

module.exports = {
	radix64: radix64,
	methods: methodsEnum,
	ascii64: ascii64,
	base64 : function(n){ return radix64(n , methodsEnum.BASE64)},
	base64URL : function(n){ return radix64(n , methodsEnum.BASE64URL)},
	base64Natural : function(n){ return radix64(n , methodsEnum.BASE64NATURAL)},
	base64ASCII : function(n){ return radix64(n , methodsEnum.BASE64ASCII)},
}