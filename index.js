var convertOne = function(number) {
	var tmp = number & 63;

	if (tmp < 26) {
		return String.fromCharCode(65 + tmp);

	} else if (tmp < 52) {
		return String.fromCharCode(97 + tmp - 26);
	} else if (tmp < 62) {
		return String.fromCharCode(tmp - 52 + 48)
	} else if (tmp == 62) {
		return '-';
	} else {
		return '_';
	}
};

var radix64 = function(number) {

	if (number < 64) {
		return convertOne(number);
	}
	return '' + radix64(Math.floor(number / 64)) + convertOne(number & 63);

}

module.exports = {
	radix64: radix64
}