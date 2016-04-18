module.exports = function(list){

 var sentence = "I saw 3 bears, and 7 toads in 50 meters from the tallest tree in the park";
//
var sentence = sentence.split(" ");
//console.log(sentence);


//mapping all the words to an object
var words = sentence.map(function(word) {

  return {
    word: word,
    length: word.length
  };

});
//
//finding all the numbers in the string..
var numbers = sentence.filter(function(number) {
  return number <= 50;

});
//console.log(numbers);
return numbers


};
