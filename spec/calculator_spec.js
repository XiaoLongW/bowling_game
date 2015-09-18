'use strict';

var Calculator = require('../src/model/calculator');

describe('Calculator', function(){
  var calculator;
  beforeEach(function () {
    calculator = new Calculator();
  });

  it('should have allFrames and bonus', function(){
    expect(calculator.allFrames).toEqual([]);
    expect(calculator.bonus).toEqual('');
  });

  describe('#scan()', function () {
    it('should scan right', function () {
      var input = 'X|7/|9-|X|-8|8/|-6|X|X|X||81';
      calculator.scan(input);

      expect(calculator.allFrames).toEqual([ 'X', '7/', '9-', 'X', '-8', '8/', '-6', 'X', 'X', 'X' ]);
      expect(calculator.bonus).toEqual('81');
    });
  });
});
