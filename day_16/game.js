gamePattern = []
buttonColours = ["red", "blue", "green", "yellow"]
userClickedPattern = []
var started = false;
var level = 0
function nextSequence() {

    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4)
    var randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    
    $("#" + randomChosenColour).fadeIn(300).fadeOut(300).fadeIn(300);
    playSound(randomChosenColour);

    

}

$("button").on("click", function() {
    var userChosenColour = this.id
    userClickedPattern.push(userChosenColour)
    playSound(userChosenColour)
    animatePress(userChosenColour)
    checkAnswer(userClickedPattern.length-1);
})

function playSound(name) {
    audio = new Audio("sounds/" + name + ".mp3")
    audio.play()
}

function animatePress(currentColour) {
    $("#"+currentColour).addClass("pressed")
    setTimeout(function() {
        $("#"+currentColour).removeClass("pressed")
    }, 100)

}

$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");
  
        if (userClickedPattern.length === gamePattern.length){
  
          
          setTimeout(function () {
            nextSequence();
          }, 1000);
  
        }
  
      } else {
        
        $("body").addClass("game-over")
        setTimeout(function() {
            $("body").removeClass("game-over")
        }, 200)
        $("h1").text("Game Over, Press Any Key to Restart")
        startOver()
  
      }
}

function startOver() {
    level = 0
    gamePattern = []
    started = false
}

