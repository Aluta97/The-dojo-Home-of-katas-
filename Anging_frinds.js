var friends = "Xola is 23, Peter is 18, Oya is 29, Ellie is 20, Sive is 27, Aluta is 12";


var myFriends = friends.split(",");
  // console.log(myFriends);


 pArray = [];

//looping through and removing the is in my array
  myFriends.forEach(function(ab){
     pArray.push(ab.split("is"));
   });

      //  console.log(pArray);

  var xArray = [];


pArray.forEach(function(ac){
   if( ac[1] < 20){ //fnding the youngest
  xArray.push({Name:ac[0], Age:Number(ac[1])})
}
 });
console.log(xArray);

// var nArray = [];
//
// xArray.forEach(function(ad){
//   nArray.push(ad[1]);
// });
//  console.log(nArray);
