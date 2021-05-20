var canvas, backgroundImage;
var Quiz
var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(windowWidth-20,windowHeight-30)
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
  
}


function draw(){
  background("pink");
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
  if(gameState ===2){
    quiz.end
  }
}
for(var plr in allContestants){
  var correctAns="2"
  if(correctAns === allContestants[plr].answer)
  fill("Green")
  else
   fill("red")
   
}
