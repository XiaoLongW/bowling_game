'use strict';

function Frame(firstDown, secondDown, type){
  this.score = 0;
  this.firstDown = firstDown;
  this.secondDown = secondDown;
  this.type = type;
}

Frame.addStrikeFrame = function(frames) {
  var frame = new Frame(10, -1, 'X');
  frames.push(frame);
};

Frame.addSpareFrame = function(oneFrameInput, frames) {
  var firstDown = oneFrameInput[0] == '-' ? 0 : parseInt(oneFrameInput[0]);
  var secondDown =  10 -firstDown;
  var frame = new Frame(firstDown, secondDown, '/');
  frames.push(frame);
};

Frame.addGeneralFrame = function(oneFrameInput, frames) {
  var firstDown = oneFrameInput[0] == '-' ? 0 : parseInt(oneFrameInput[0]);
  var secondDown = oneFrameInput[1] == '-' ? 0 : parseInt(oneFrameInput[1]);
  var frame = new Frame(firstDown, secondDown, '');
  frames.push(frame);
};

Frame.addBonusFrame = function(lastFrame, bonus, frames){
  var firstDown = 0;
  var secondDown = 0;

  if(lastFrame == 'X'){
    firstDown = bonus[0] == '-' ? 0 : (bonus[0] == 'X' ? 10 : parseInt(bonus[0]));
    secondDown = bonus[1] == '-' ? 0 : (bonus[1] == 'X' ? 10 : parseInt(bonus[1]));
  }
  else if(lastFrame[1] == '/'){
    firstDown = bonus == '-' ? 0 : (bonus == 'X' ? 10 : parseInt(bonus));
    secondDown = -1;
  }
  else{
    firstDown = -1;
    secondDown = -1;
  }

  frames.push(new Frame(firstDown, secondDown, ''));
};

Frame.prototype.setStrikeScore = function(index, frames) {
  var nextBallsScore = 0;
  var ballCount = 0;
  for(var y = index+1; y<11; y++){
    if(frames[y].firstDown != -1){
      nextBallsScore += frames[y].firstDown;
      ballCount++;
      if(ballCount >= 2){
        break;
      }
    }
    if(frames[y].secondDown != -1){
      nextBallsScore += frames[y].secondDown;
      ballCount++;
      if(ballCount >= 2){
        break;
      }
    }
  }
  frames[index].score = 10 + nextBallsScore;
};

Frame.prototype.setSpareScore = function(index, frames) {
  var nextBallsScore = 0;
  for(var y = index + 1; y<11; y++){
   if(frames[y].firstDown != -1){
      nextBallsScore += frames[y].firstDown;
      break;
    }
    if(frames[y].secondDown != -1){
      nextBallsScore += frames[y].secondDown;
      break;
    }
  }
  frames[index].score = 10 + nextBallsScore;
};

Frame.prototype.setGeneralScore = function(index, frames) {
  frames[index].score = frames[index].firstDown + frames[index].secondDown;
};

module.exports = Frame;
