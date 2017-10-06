$(function() {
  
  var words = ["ADVENTURE", "SUPERFULOUS", "AVAILABLE"];
  var word = words[Math.floor(Math.random() * words.length)];
  var loseCounter = 0;
  var input;
  var wordArray = [];
  
  console.log(word);
  
  for(var i = 0; i<word.length; i++) {
    wordArray[i] = "__" + " ";
  }
  
  $('#chars').html(wordArray);
  
  $('#misses').html('Misses: ' + loseCounter + "/" + "7")

  $('button').click(function() {
    input = $(this).text();
    $(this).css("visibility", "hidden");
    
    if(word.includes(input)) {
      for(var i = 0; i<word.length; i++) {
        if(input === word[i]) {
          wordArray[i] = input;
        }
        console.log("WordArray at " + i + " is: " + wordArray[i]);
      }
    }
    else{
      loseCounter++;
      $('#misses').html('Misses: ' + loseCounter + "/" + word.length);
    }
    
    if(loseCounter == 1){
      $('#rope1').html("|");
    }
    if(loseCounter == 2){
      $('#rope2').html("|");
    }
    if(loseCounter == 3){
      $('#head').html("O");
    }
    if(loseCounter == 4){
      $('#neck').html("|");
    }
    if(loseCounter == 5){
      $('#torso1').html("/ | \\");
      $('#torso2').html("|");
    }
    if(loseCounter == 6){
      $('#left-leg').html("/");
    }
    if(loseCounter == 7){
      $('#right-leg').html("\\");
      $('#winorlose').html('You Lose! Click on the Start New Game button to try again');
      console.log("You Lose!");
      $('button').unbind('click');
    }
    
    $('#chars').html(wordArray);
    
  });
 
});
