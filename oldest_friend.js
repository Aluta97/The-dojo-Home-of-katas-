module.exports = function(list){

var friends = "Xola is 23, Peter is 18, Oya is 29, Ellie is 20, Sive is 27";


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
  });

 });
 console.log(nArray);


 var max = 0;

 var maxObj;

nArray.forEach(function(ac) {
 // console.log(ac.Age);
 if(ac.Age > max){
   max = ac.Age;

   maxObj = {
     Name:ac.Name,
     Age:max
   };
 }

 });
 console.log(maxObj);
 return maxObj;

};
