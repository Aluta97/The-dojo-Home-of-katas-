  var lights = "There are 9 trafficlights on my way to work. On my way in 3 were red, 2 were green";

var lights = lights
.replace("There are ","")
.replace(" on my way to work","")
.replace(". On my way in ",",")
.replace(", ", ",")
.replace(/ were/g, "")
.split(",");
console.log(lights);


x = [];
lights.forEach(function(az){
  var parts = az.split(" ");
    console.log(parts);
   x.push({
      color:parts[1],
      light:Number(parts[0])
    });
});

console.log(x);

x.forEach(function(df){
  console.log(df.light);
  
});
