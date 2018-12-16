var counter = 0;
var wins = 0;
var losses = 0;

var crystal1Val = Math.floor(Math.random() * 12 + 1);
var crystal2Val = Math.floor(Math.random() * 12 + 1);
var crystal3Val = Math.floor(Math.random() * 12 + 1);
var crystal4Val = Math.floor(Math.random() * 12 + 1);

    function startUp() {
          var randomNumber = Math.floor(Math.random() * 120 + 19 );
          console.log(randomNumber);
          $("#randomNum").text(randomNumber);
         };
          
$("#crystal1").click(function(){
    counter += crystal1Val;
    $("#total").text(counter);
    checkNumber(counter);
})
$("#crystal2").click(function(){
    counter += crystal2Val;
    $("#total").text(counter);
    checkNumber(counter);
})
$("#crystal3").click(function(){
    counter += crystal3Val;
    $("#total").text(counter);
    checkNumber(counter);
})
$("#crystal4").click(function(){
    counter += crystal4Val;
    $("#total").text(counter);
    checkNumber(counter);
})

    

   function checkNumber(){
        if(counter === randomNumber) {
            wins++;
            $(".win").text("Wins: " + wins);
            resetGame();
            }
        else if(counter > randomNumber) {
            losses++;
            $(".loss").text("Losses: " + losses);
            resetGame();
            }
            
        }        

function resetGame() {
    counter = 0;
    randomNumber = Math.floor(Math.random() * 120 + 19 );
    
}
//      Psuedocode      //
//1. Need to get total to cause win/losses

