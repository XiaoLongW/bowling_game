'use strict';

function Calculator() {
  this.allFrames = [];
	this.bonus = '';
}

Calculator.prototype.scan = function(inputs) {
	this.allFrames = inputs.split('||')[0].split('|');
	this.bonus = inputs.split('||')[1];
};

Calculator.prototype.getTotalScore = function (frames) {
	var totalScore = 0;
	frames.forEach(function(oneFrame){
		totalScore += oneFrame.score;
	});
  return totalScore;
};

module.exports = Calculator;