var flag = true;
console.log("The value of flag is: " + flag);
var myNumber = 5.444;
console.log("The value of myNumber is: " + myNumber);
var myString = "Hello World!";
console.log("The value of myString is: " + myString);
var myArray = [1, 2, 3];
for (var i = 0; i < myArray.length; i++) {
    console.log("The value at position " + (i + 1) + " of myArray is " + myArray[i]);
}
var myArray2 = [1, 2, 3];
myArray2.forEach(function (item) {
    console.log("The Value is " + item);
});
var unKnown = "Anything";
console.log("The value of UnKnown is: " + unKnown);
