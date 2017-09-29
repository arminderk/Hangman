$(function() {
  
  var words = ["ADVENTURE", "HELLO", "GOOD", "SUCK"];
  var word = words[Math.floor(Math.random() * words.length)];
  var counter = 0;
  console.log(word);
  
  $('button').click(function() {
    var input = $(this).text();
    for(var i = 0; i<word.length; i++) {
      if(input === word.charAt(i)) {
        console.log(input);
      }
      else{
        counter++;
        $('#misses').html('Misses: ' + counter + "/" + word.length);
      }
    }
  });
});
