$(function() {
  
  var words = ["ADVENTURE", "HELLO", "GOOD", "SUCK"];
  var word = words[Math.floor(Math.random() * words.length)];
 
  var letter = '';
  var charWords = '';
  
  console.log(word);
      
      charWords = word.split('');
      
      $('#chars').text(charWords).css("visibility", "hidden");
                             
      $('button').click(function() {
         var counter = 0;
        for(var i = 0; i<word.length; i++) {
          letter = word.charAt(i);
          var input = $(this).text();
          if(input === letter) {
            console.log(input);
          }
          else{
            counter++;
            $('#misses').html('Misses: ' + counter + "/" + word.length);
          }
        }
        
        if(counter == word.length) {
          console.log("You Lose!");
          $('button').unbind('click');
        }
        
      });
 
});
