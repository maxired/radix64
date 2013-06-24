var radix64 = require('../');
var assert = require('chai').assert;


describe("natural is respected", function() {

	var iterate = function(i) {
		it('respect ascci order for number < 64', function() {
			assert.ok((radix64.radix64(i, radix64.methods.BASE64ASCII) < radix64.radix64(i + 1, radix64.methods.BASE64ASCII)),

			"i : " + i + ' ' + radix64.radix64(i, radix64.methods.BASE64ASCII) + '>' + radix64.radix64(i + 1, radix64.methods.BASE64ASCII));

		})
		if (i < 62) {
			iterate(i + 1);
		}

	}

	iterate(0);
});



describe("when calling ascii64", function() {

	describe("with a padding option equal than the output", function() {
		it("return a non padded value", function() {
			assert.equal(radix64.ascii64(2348, 2), 'Zg');
		})

	})

	describe("with a padding option smaller than the output", function() {
		it("return a non padded value", function() {
			assert.equal(radix64.ascii64(2348, 1), 'Zg');
		})

	})


	describe("with a padding option bigger than the output", function() {
		it("return a padded value", function() {
			assert.equal(radix64.ascii64(2348, 3), '-Zg');
		})
	});

	describe("with a padding option very biggest than the output", function() {
		it("return a padded value", function() {
			assert.equal(radix64.ascii64(2348, 12), '----------Zg');
		})
	})


	describe("with no padding option", function() {
		it("return a non padded value of ten", function() {
			var returned =radix64.ascii64(2348) ; 
			assert.equal( returned.length, 10); 
			assert.equal(returned, '--------Zg');
		})
	})


})


describe("when calling ascii64", function() {
	describe("with large enough padding", function() {
		it("respect natural sort", function() {
			assert.ok(radix64.ascii64(0) < radix64.ascii64(1));
			assert.ok(radix64.ascii64(65) > radix64.ascii64(2));
			assert.ok(radix64.ascii64(2048) > radix64.ascii64(738));
			assert.ok(radix64.ascii64(65, 2) > radix64.ascii64(2, 2));
		})
	})


	describe("with to small enough padding", function() {
		it("fail", function() {
			assert.ok(radix64.ascii64(65, 2) < radix64.ascii64(2, 1));
		})
	})

	describe("with very big number", function() {
		it("work", function() {
			assert.equal(radix64.ascii64( 4* Math.pow(64,6)),'---3------');
			assert.equal(radix64.ascii64( +new Date(2012,12)),'---IjnBLa-');
		})
	})
});