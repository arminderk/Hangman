function refresh() {
  window.location.reload();
}

$(function() {
  
  /* Create Dynamic Buttons */
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for(var i = 0; i<alphabet.length; i++) {
    $('.buttons').append("<button type='button' id='" + alphabet[i] + "' class='btn btn-primary' style='margin: 2px'>" + alphabet[i] + "</button>");
  }
  
  var words = ["ADVENTURE", "SUPERFULOUS", "AVAILABLE", "ABSOLUTE", "ACADEMIC", "ACCIDENT", "CRIMINAL", "BLACKJACK", "DANGEROUS", "MASCULINE", "SOMETHING", "IRREGULAR"];
  var word = words[Math.floor(Math.random() * words.length)];
  var loseCounter = 0;
  var winCounter = 0;
  var input;
  var wordArray = [];
  
  for(var i = 0; i<word.length; i++) {
    wordArray[i] = "__" + " ";
  }
  
  $('#chars').html(wordArray);
  
  $('#misses').html('Misses: ' + loseCounter + "/" + "7")

  /**** Key Press Event ****/
  $(document).on('keypress', function(e) {
    var keyCode = 0;
    if(window.event) {
      keyCode = e.keyCode;
    }
    else if(e.which) {
      keyCode = e.which;
    }
    var charCode = String.fromCharCode(keyCode).toUpperCase();
    if(charCode >= 'A' && charCode <= 'Z') {
      $('#' + charCode).click();
    }
  });
  
  /**** Button Click Event ****/
  $('button').click(function() {
    let game = runGame.bind(this);
    game();
  });

  function runGame() {
    input = $(this).text();
    $(this).css("visibility", "hidden");
    
    if(word.includes(input)) {
      allocateWordArray(input);
    }
    else{
      loseCounter++;
      $('#misses').html('Misses: ' + loseCounter + "/" + "7");
    }
    
    $('#chars').html(wordArray);
    
    displayBody(loseCounter);
    
    if(winCounter == word.length) {
      $('#winorlose').html("You Win! Click on the Start New Game button to play again");
      $('button').unbind('click');
    }
  }

  /* Function to allocate wordArray based on where input is found in the original word */
  function allocateWordArray(input) {
    for(var i = 0; i<word.length; i++) {
      if(input === word[i]) {
        wordArray[i] = input;
        winCounter++;
      }
    }
  }
  
  function displayBody(loseCounter) {
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
      $('#winorlose').html("You Lose! The correct word was: " + word + "!" + " Click on the Start New Game button to try again");
      $('button').unbind('click');
    }
  }

});