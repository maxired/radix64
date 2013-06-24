var radix64 = require('../');
var assert = require('chai').assert;



var base64cases = [{
		num: 0,
		out: 'A'
	}, {
		num: 3,
		out: 'D'
	}, {
		num: 25,
		out: 'Z'
	}, {
		num: 26,
		out: 'a'
	}, {
		num: 51,
		out: 'z'
	}, {
		num: 52,
		out: '0'
	}, {
		num: 61,
		out: '9'
	}, {
		num: 61,
		out: '9'
	}, {
		num: 62,
		out: '+'
	}, {
		num: 63,
		out: '/'
	}
];

var urlcases = [{
		num: 0,
		out: 'A'
	}, {
		num: 3,
		out: 'D'
	}, {
		num: 25,
		out: 'Z'
	}, {
		num: 26,
		out: 'a'
	}, {
		num: 51,
		out: 'z'
	}, {
		num: 52,
		out: '0'
	}, {
		num: 61,
		out: '9'
	}, {
		num: 61,
		out: '9'
	}, {
		num: 62,
		out: '-'
	}, {
		num: 63,
		out: '_'
	}
];


var naturalCases = [{
		num: 0,
		out: '0'
	}, {
		num: 3,
		out: '3'
	}, {
		num: 10,
		out: 'A'
	}, {
		num: 15,
		out: 'F'
	}, {
		num: 35,
		out: 'Z'
	}, {
		num: 36,
		out: 'a'
	}, {
		num: 61,
		out: 'z'
	}, {
		num: 62,
		out: '-'
	}, {
		num: 63,
		out: '_'
	}
];



var ASCIICases = [{
		num: 0,
		out: '-'
	}, {
		num: 1,
		out: '0'
	}, {
		num: 11,
		out: 'A'
	}, {
		num: 16,
		out: 'F'
	}, {
		num: 36,
		out: 'Z'
	}, {
		num: 37,
		out: '_'
	}, {
		num: 38,
		out: 'a'
	}, {
		num: 63,
		out: 'z'
	}
];



describe("calling radix with BASE64URL", function() {

	urlcases.forEach(function(myCase) {
		[undefined, radix64.methods.DEFAULT, radix64.methods.BASE64URL].forEach(function(param) {
			it("it return the figure", function() {
				assert.equal(radix64.radix64(myCase.num, param), myCase.out);
			})
		});

		it("it return the figure", function() {
			assert.equal(radix64.base64URL(myCase.num), myCase.out);
		})
	})

})

describe("calling radix with BASE64", function() {
	base64cases.forEach(function(myCase) {

		it("it return the figure", function() {
			assert.equal(radix64.radix64(myCase.num, radix64.methods.BASE64), myCase.out);
			assert.equal(radix64.base64(myCase.num), myCase.out);
		})
	});
});

describe("calling radix with BASE64Natural", function() {
	naturalCases.forEach(function(myCase) {

		it("it return the figure", function() {
			assert.equal(radix64.radix64(myCase.num, radix64.methods.BASE64NATURAL), myCase.out);
			assert.equal(radix64.base64Natural(myCase.num), myCase.out);
		})
	});
});

describe("calling radix with BASE64ASCII", function() {
	ASCIICases.forEach(function(myCase) {

		it("it return the figure", function() {
			assert.equal(radix64.radix64(myCase.num, radix64.methods.BASE64ASCII), myCase.out);
			assert.equal(radix64.base64ASCII(myCase.num), myCase.out);
		})
	});
})