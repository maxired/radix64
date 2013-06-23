var radix64 = require('../').radix64;
var assert = require('chai').assert;


describe("Given A figure", function() {
	describe("when I call radix", function() {
		it("it return the figure", function() {
			var num = 0;
			assert.equal(radix64(num), 'A');
		})
	});
})


describe("Given A figure", function() {
	describe("when I call radix", function() {
		it("it return the figure", function() {
			var num = 3;
			assert.equal(radix64(num), 'D');
		})
	});
})


describe("Given A figure", function() {
	describe("when I call radix", function() {
		it("it return the figure", function() {
			var num = 25;
			assert.equal(radix64(num), 'Z');
		})
	});
})


describe("Given A figure", function() {
	describe("when I call radix", function() {
		it("it return the figure", function() {
			var num = 26;
			assert.equal(radix64(num), 'a');
		})
	});
})



describe("Given A figure", function() {
	describe("when I call radix", function() {
		it("it return the figure", function() {
			var num = 51;
			assert.equal(radix64(num), 'z');
		})
	});
})



describe("Given A figure", function() {
	describe("when I call radix", function() {
		it("it return the figure", function() {
			var num = 52;
			assert.equal(radix64(num), '0');
		})
	});
})



describe("Given A figure", function() {
	describe("when I call radix", function() {
		it("it return the figure", function() {
			var num = 57;
			assert.equal(radix64(num), '5');
		})
	});
})


describe("Given A figure", function() {
	describe("when I call radix", function() {
		it("it return the figure", function() {
			var num = 61;
			assert.equal(radix64(num), '9');
		})
	});
})

describe("Given A figure", function() {
	describe("when I call radix", function() {
		it("it return the figure", function() {
			var num = 62;
			assert.equal(radix64(num), '+');
		})
	});
})


describe("Given A figure", function() {
	describe("when I call radix", function() {
		it("it return the figure", function() {
			var num = 63;
			assert.equal(radix64(num), '/');
		})
	});
})