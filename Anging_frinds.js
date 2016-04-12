var friends = "Xola is 23, Peter is 18, Oya is 29, Ellie is 20, Sive is 27, Aluta is 12";


var myFriends = friends.split(",");
// console.log(myFriends);


pArray = [];

//looping through and removing the is in my array
myFriends.forEach(function(ab) {
  pArray.push(ab.split("is"));
});

//  console.log(pArray);

var nArray = [];
//finding friends younger than Ellie
pArray.forEach(function(ad) {

  nArray.push({
    Name: ad[0],
    Age: Number(ad[1])
  })

});
console.log(nArray)

xArray =[];

//create a forEach loop to find the friends younger that Ellie.
pArray.forEach(function(ac) {

  if (ac[1] < 20) {
    xArray.push({
      Name: ac[0],
      Age: Number(ac[1])
    })
  }
});
console.log(xArray, "are younger");


var max = 0;
var maxObj;
    
nArray.forEach(function(ac) {
  console.log(ac.Age);
  if(ac.Age > max){
    max = ac.max;
    
    maxObj = {
      Name:ac.Name,
      Age:max
    };
  }
 
});
 console.log(maxObj);
