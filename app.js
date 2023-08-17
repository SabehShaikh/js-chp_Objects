/* QUESTION 01
1. Suppose You have an array of object
var itemsArray = [
{name:”juice”,price:”50”, quantity:”3”},
{name:”cookie”,price:”30”, quantity:”9”},
{name:”shirt”,price:”880”, quantity:”1”},
{name:”pen”,price:”100”, quantity:”2”}];
Calculate total price of each item and all items;
*/

document.write("<h4>Question 01 </h4>")

var itemsArray = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "100", quantity: "2" }
];
// Calculate total price of each item and all items;

var overallTotal = 0;

for (var i = 0; i < itemsArray.length; i++) {
    var item = itemsArray[i];
    var totalPriceForItem = item.price * item.quantity
    item.totalPrice = totalPriceForItem
    overallTotal = overallTotal + totalPriceForItem
}

console.log("Updated itemsArray:", itemsArray);
document.write("Overall total price:", overallTotal);


/* QUESTION 02
2. Create an object with properties name, email, password, age,
gender, city, country.
Check if age and country properties exist in object or not.
Also check firstName and lastName properties in object. */


document.write("<h4>Question 02 </h4>")

let obj = {
    name: 'Josh',
    email: 'Josh123@gmail.com',
    password: '123456Josh',
    age: 23,
    gender: 'male',
    city: 'Karachi',
    country: 'Pakistan',
}

// Convert the object to a formatted JSON string
let jsonString = JSON.stringify(obj, null, 2);

// Display the JSON string in the DOM
document.write("<pre>" + jsonString + "</pre>");

// Check if age and country properties exist in the object
if ('age' in obj) {
    document.write("Age property exists<br>");
} else {
    document.write("Age property does not exist<br>");
}

if ('country' in obj) {
    document.write("Country property exists<br>");
} else {
    document.write("Country property does not exist<br>");
}

// Check if firstName and lastName properties exist in the object
if ('firstName' in obj) {
    document.write("firstName property exists<br>");
} else {
    document.write("firstName property does not exist<br>");
}

if ('lastName' in obj) {
    document.write("lastName property exists<br>");
} else {
    document.write("lastName property does not exist<br>");
}