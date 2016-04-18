module.exports = function(list){

var sentence = "I saw 3 bears, and 7 toads in 50 meters from the tallest tree in the park";

var sentence = sentence.split(" ");
//console.log(sentence);


//mapping all the words to an object
var words = sentence.map(function(word) {

  return {
    word: word,
    length: word.length
  };

});

//finding word less than 3
var x = [];
  //finding word less than 3
  words.forEach(function(ls){

    //console.log(ls.word)

    var less = ls.word;
   // console.log(less);

    if(less.length < 3){
     // console.log(less);
      x.push(less);
    }

  });
   console.log(x);
   return x;
}
