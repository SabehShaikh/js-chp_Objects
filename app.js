/* QUESTION 04 
4. Suppose you want to check population of your area, their
educations and professions.
Create a constructor function which holds following
properties:
Name, gender, address, education, profession,
Enter all records one by one.
Hint:

 use select box for education and profession,
 use radio box for gender

Bonus : use can use localStorage to save records.
*/

function Records(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}    

function addRecord() {
    var name = document.getElementById("name").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var address = document.getElementById("address").value;
    var education = document.getElementById("education").value;
    var profession = document.getElementById("profession").value;

    var newRecord = new Records(name, gender, address, education, profession);
    saveRecord(newRecord);

    displayRecords();
}    

// Function to save a record in localStorage
function saveRecord(record) {
    var records = JSON.parse(localStorage.getItem("records")) || [];
    records.push(record);
    localStorage.setItem("records", JSON.stringify(records));
}    

// Function to display saved records
function displayRecords() {
    var records = JSON.parse(localStorage.getItem("records")) || [];
    var recordsContainer = document.getElementById("records-container");
    recordsContainer.innerHTML = "";

    for (var i = 0; i < records.length; i++) {
        var record = records[i];
        var recordHTML = `
            <p>Name: ${record.name}</p>
            <p>Gender: ${record.gender}</p>
            <p>Address: ${record.address}</p>
            <p>Education: ${record.education}</p>
            <p>Profession: ${record.profession}</p>
            <hr>
        `;    
        recordsContainer.innerHTML += recordHTML;
    }    
}    
displayRecords();



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

/* QUESTION 03
3. Create a constructor function with some properties. Now
create multiple records using the constructor. 
*/

document.write("<h4>Question 03 </h4>")

function Player(name, age, position, country) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.country = country;
}    

var player1 = new Player("Cristiano Ronaldo", 38, "Forward", "Portugal");
var player2 = new Player("Lionel Messi", 36, "Forward", "Argentina");
var player3 = new Player("Karim Benzema", 35, "Forward", "France");

document.write("<p>" + player1.name + " | Age: " + player1.age + " | Position: " + player1.position + " | Country: " + player1.country + "</p>");
document.write("<p>" + player2.name + " | Age: " + player2.age + " | Position: " + player2.position + " | Country: " + player2.country + "</p>");
document.write("<p>" + player3.name + " | Age: " + player3.age + " | Position: " + player3.position + " | Country: " + player3.country + "</p>");

