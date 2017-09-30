$(function() {
  
  var words = ["ADVENTURE", "HELLO", "GOOD", "SUCK"];
  var word = words[Math.floor(Math.random() * words.length)];
  var counter = 0;
  var letter = '';
  var charWords = '';
  
  console.log(word);
  
  charWords = word.split('');
  $('#chars').text(charWords).css("visibility", "hidden");
  
  
  $('#misses').html('Misses: ' + counter + "/" + word.length);

  $('button').click(function() {
    var input = $(this).text();
    $(this).css("visibility", "hidden");
    
      if(word.includes(input)) {
        $('#chars').text(input).css("visibility", "visible");
      }
      else{
        counter++;
        $('#misses').html('Misses: ' + counter + "/" + word.length);
      }

    if(counter == word.length) {
      console.log("You Lose!");
      $('button').unbind('click');
    }
    
  });
 
});
