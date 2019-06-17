var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
var i=1;

$("body").keydown(function(){
    if( $("h1").text()==="Press A Key to Start"){
        startscreen();
    }
    });
function startscreen(){
    
        $("h1").text("kishooo <3 game started");
        $("h1").append( "<p>level "+i+"</p>" );
        nextSequence();
}

handler();

function handler(){
    /*for(var i=0;i<4;i++){
        
        $("button")[i].click(function(
            var userChosenColour;
        ));
    } */
    //var userChosenColour=
    $(".btn").click(function() {
        var userChosenColour=(this.id); // or alert($(this).attr('id'));
        userClickedPattern.push(userChosenColour);
       playSound(userChosenColour); 
       //$("#"+this.id).fadeOut(250).fadeIn(250);
       animatePress(this.id);
       userlength=userClickedPattern.length-1;
       checkAnswer(userlength);
    });
    
}
function nextSequence(){
    
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    //var selected =$("#"+randomChosenColour).fadeOut(250).fadeIn(250);
    animatePress(randomChosenColour);
    playSound(randomChosenColour);
    $("p").text( "level "+i );
    i++;
   
    
}
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
function animatePress(currentColour){
   
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}
function checkAnswer(currentLevel){
    //var x=0;
    var f=true;
    //for(var x=0;currentLevel>=x;x++){
            if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
            console.log("succses");
            if(userClickedPattern.length<gamePattern.length){
                console.log(gamePattern.length);
                //alert(gamePattern.length);
              //handler();
            }else{
                setTimeout(function(){
                nextSequence()},1000);
                userClickedPattern=[];
                console.log("hello");
            }
            }else if(userClickedPattern[currentLevel]!==gamePattern[currentLevel]){
                $("h1").append( "<p>lost</p>" );
                $("body").addClass("game-over");
                playSound("wrong");
                setTimeout(function(){
                    $("body").removeClass("game-over")},
                    1000);
                $("h1").text("Game Over, Press Any Key to Restart");
                $("body").keydown(function(){
                    startOver();
                });
             //   break;
                f=false;
            }
            
        //}
        //if(f){
        //nextSequence();
       //userClickedPattern=[];
        }
    function startOver(){
        gamePattern=[];
        i=1;
        userClickedPattern=[];
        startscreen();
    }

//alert("sounds/"+randomChosenColour+".mp3");
//alert(randomChosenColour);