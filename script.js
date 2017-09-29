$(function() {
  
  var words = ["ADVENTURE", "HELLO", "GOOD", "SUCK"];
  var word = words[Math.floor(Math.random() * words.length)];
  var counter = 0;
  var letter = '';
  var charWords = '';
  
  console.log(word);
  
//  charWords = word.split('');
//
//  $('#chars').text(charWords).css("visibility", "hidden");

  $('button').click(function() {
    var input = $(this).text();
    
      if(word.includes(input)) {
        console.log(input);
      }
      else{
        counter += 1;
        $('#misses').html('Misses: ' + counter + "/" + word.length);
      }

    if(counter == word.length) {
      console.log("You Lose!");
      $('button').unbind('click');
    }
    
  });
 
});
