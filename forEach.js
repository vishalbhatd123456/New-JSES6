
//traditional forEach loop

var fruits = ['cherry','banana','orange'];
console.log("Inside the forEach v3"); 
for(var i = 0;i < fruits.length;i++){
    console.log(fruits[i]); //the syntax sucks at times!
}

//new forEach

// array.forEach(element => {
    
// });
try{
console.log("Inside the forEach v1");
fruits.forEach(color => {
    console.log(color);
});

console.log("Inside the forEach v2");
fruits.forEach(function(color)
{
    console.log(color);
});
}
catch(err)
{
    console.log("Exception occurred ..."+err);
}
