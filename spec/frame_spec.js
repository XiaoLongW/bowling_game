'use strict';
var Frame = require('../src/model/frame');

describe('Framer', function(){

	it('should have score firstDown secondDown and type', function() {
		var frame = new Frame(10, -1, 'X');
		expect(frame.score).toEqual(0);
		expect(frame.firstDown).toEqual(10);
		expect(frame.secondDown).toEqual(-1);
		expect(frame.type).toEqual('X');
	});

	describe('.addStrikeFrame()', function () {
		it('should add right', function () {
			var frames = [];

			Frame.addStrikeFrame(frames);
			expect(frames[0]).toEqual(new Frame(10, -1, 'X'));
		});
	});

	describe('.addSpareFrame()', function () {
		it('should add right', function () {
			var frames = [];

			Frame.addSpareFrame('9/', frames);
			expect(frames[0]).toEqual(new Frame(9, 1, '/'));
		});
	});

	describe('.addGeneralFrame()', function () {
		it('should add right', function () {
			var frames = [];

			Frame.addGeneralFrame('33', frames);

			expect(frames[0]).toEqual(new Frame(3, 3, ''));
		});
	});

});
