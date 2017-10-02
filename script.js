$(function() {
  
  var words = ["ADVENTURE", "HELLO", "GOOD", "SUCK"];
  var word = words[Math.floor(Math.random() * words.length)];
  var loseCounter = 0;
  var input;
  var wordArray = [];
  
  for(var i = 0; i<word.length; i++) {
    wordArray[i] = "__" + " ";
  }
  
  $('#chars').html(wordArray);
  
  console.log(word);
  
  $('#misses').html('Misses: ' + loseCounter + "/" + word.length);

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
    
    if(loseCounter == word.length) {
      console.log("You Lose!");
      $('button').unbind('click');
    }
    
    $('#chars').html(wordArray);
    
  });
 
});
