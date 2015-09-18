'use strict';
var Game = require('../src/model/game');
var Calculator = require('../src/model/calculator');
var Frame = require('../src/model/frame');

describe('Game', function(){
  var game;
  beforeEach(function () {
    var calculator = new Calculator();
    game  = new Game(calculator);
  });

  it('should have frames calculator and totalScore', function(){
    expect(game.frames).toEqual([]);
    expect(game.calculator).toEqual(new Calculator);
    expect(game.totalScore).toEqual(0);
  });

  describe('#setFrames()', function () {
    it('should set right', function () {
      var input = 'X|7/|9-|X|-8|8/|-6|X|X|X||81';

      game.setFrames(input);

      expect(game.frames[0]).toEqual(new Frame(10, -1, 'X'));
    });
  });

  describe('#setEachScore()', function () {
    it('should set right', function () {
      var input = '5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5';

      game.setFrames(input);
      game.setEachScore();

      expect(game.frames[0].score).toBe(15);
    });
  });

  describe('#setTotalScore()', function () {
    it('should set right', function () {
      var input = '5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5';

      game.setFrames(input);
      game.setEachScore();
      game.setTotalScore();

      expect(game.totalScore).toBe(150);
    });

    it('should set right', function () {
      var input = 'X|7/|9-|X|-8|8/|-6|X|X|X||81';

      game.setFrames(input);
      game.setEachScore();
      game.setTotalScore();

      expect(game.totalScore).toBe(167);
    });

    it('should set right', function () {
      var input = 'X|X|X|X|X|X|X|X|X|X||XX';

      game.setFrames(input);
      game.setEachScore();
      game.setTotalScore();

      expect(game.totalScore).toBe(300);
    });
  });
});
