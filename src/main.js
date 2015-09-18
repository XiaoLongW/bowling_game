'use strict';
var Calculator = require('./model/calculator');
var Game = require('./model/game');

function main(input){
	var calculator = new Calculator();
	var game = new Game(calculator);

	game.setFrames(input);
	game.setEachScore();
	game.setTotalScore();

	console.log(game.totalScore);
}

module.exports = main;