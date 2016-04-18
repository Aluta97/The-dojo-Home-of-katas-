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

var num = sentence.filter(function(numbers) {

  return numbers > 15;
});
//console.log(num);
return Number(num);

}
