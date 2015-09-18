'use strict';
var Frame = require('./frame');

function Game(calculator){
	this.frames = [];
	this.calculator = calculator;
	this.totalScore = 0;
}

Game.prototype.setFrames = function(input) {
  this.calculator.scan(input);

	var o_this = this;

	this.calculator.allFrames.forEach(function(oneFrameInput) {
		if(oneFrameInput.length == 1){
			Frame.addStrikeFrame(o_this.frames);
		}
    else if((oneFrameInput.length == 2)&&(oneFrameInput[1] == '/')) {
			Frame.addSpareFrame(oneFrameInput, o_this.frames);
		}
		else {
			Frame.addGeneralFrame(oneFrameInput, o_this.frames);
		}
	});
	Frame.addBonusFrame(this.calculator.allFrames[9], this.calculator.bonus, this.frames);
};

Game.prototype.setEachScore = function(){
	for(var x = 0; x < 10; x++){
		if(this.frames[x].type == 'X'){
			this.frames[x].setStrikeScore(x, this.frames);
		}
		else if(this.frames[x].type == '/'){
			this.frames[x].setSpareScore(x, this.frames);
		}
		else{
			this.frames[x].setGeneralScore(x, this.frames);
		}
	}
};

Game.prototype.setTotalScore = function () {
	this.totalScore = this.calculator.getTotalScore(this.frames);
};

module.exports = Game;