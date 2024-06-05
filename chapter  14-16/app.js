// 1. Declare an empty array using JS literal notation to store student names in future. 
function q1() {
let studentNamesLiteral = [];
}

// 2. Declare an empty array using JS object notation to store student names in future. 
function q2() {
let studentNamesObject = new Array();
}

// 3. Declare and initialize a strings array. 
function q3() {
let stringsArray = ["apple", "banana", "cherry"];
}

// 4. Declare and initialize a numbers array. 
function q4() {
let numbersArray = [1, 2, 3, 4, 5];
}

// 5. Declare and initialize a boolean array. 
function q5() {
let booleanArray = [true, false, true, false];
}

// 6. Declare and initialize a mixed array. 
function q6() {
let mixedArray = ["apple", 2, true, "banana", 3, false];
}

// 7. Declare and Initialize an array and store available  education qualifications in Pakistan (e.g. SSC, HSC, BCS,  BS, BCOM, MS, M. Phil., PhD).Show the listed qualifications in your browser like:

function q7() {
let qualifications = ["e.g. SSC", "HSC", "BCS",  "BS", "BCOM", "MS", "M. Phil.", "PhD"]
document.write(`
<h2>qualifications :</h2>
<ol>
<li>e.g. SSC</li>
<li>HSC</li>
<li>BCS</li>
<li>BS</li>
<li>BCOM</li>
<li>MS, M. Phil.</li>
<li>M. Phil.</li>
<li>PhD</li>
</ol>
`);
}

// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students.  Assume that total marks are 500 for each student, display  the scores & percentages of students like: 

function q8() {
let studentNames = ["Sualeha" , "sana" , "soni"]
let scores = [420 , 300 ,450]
for (let i = 0; i < studentNames.length; i++) {
    let percentage = (scores[i] / 500) * 100;
    alert(studentNames[i] + " scored " + scores[i] + "/500, which is " + percentage.toFixed(2) + "%");
}
}

// 9. Initialize an array with color names. Display the array elements in your browser. 
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser. 
// b. Ask the user what color he/she wants to add to the end  & add that color to the end of the array. Display the  updated array in your browser. 
// c. Add two more color to the beginning of the array.  Display the updated array in your browser. 
// d. Delete the first color in the array. Display the updated array in your browser. 
// e. Delete the last color in the array. Display the updated array in your browser. 
// f. Ask the user at which index he/she wants to add a color  & color name. Then add the color to desired  position/index. . Display the updated array in your  browser. 
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser. 

function q9() {
let colors = ["Red", "Green", "Blue"];

alert("Original array: " + colors.join(", "));

let colorToAddAtBeginning = prompt("Enter a color to add to the beginning:");

colors.unshift(colorToAddAtBeginning);

alert("Array after adding color at the beginning: " + colors.join(", "));

let colorToAddAtEnd = prompt("Enter a color to add to the end:");

colors.push(colorToAddAtEnd);

alert("Array after adding color at the end: " + colors.join(", "));

colors.unshift("Yellow", "Purple");

alert("Array after adding two more colors at the beginning: " + colors.join(", "));

colors.shift();

alert("Array after deleting the first color: " + colors.join(", "));

colors.pop();

alert("Array after deleting the last color: " + colors.join(", "));

var indexToAddColor = parseInt(prompt("Enter the index to add color:"));
var colorToAdd = prompt("Enter the color name:");

colors.splice(indexToAddColor, 0, colorToAdd);

alert("Array after adding color at index " + indexToAddColor + ": " + colors.join(", "));

var indexToDelete = parseInt(prompt("Enter the index to delete color(s):"));
var deleteCount = parseInt(prompt("Enter the number of colors to delete:"));

colors.splice(indexToDelete, deleteCount);

alert("Array after deleting " + deleteCount + " color(s) from index " + indexToDelete + ": " + colors.join(", "));
}

// 10. Write a program to store student scores in an array &  sort the array in ascending order using Array’s sort  method. 

function q2() {
let scores = [230, 320, 480, 120];
scores.sort((a, b) => a - b);

document.write("Scores of Student: " + scores.join(', ') + "<br>");
document.write("Ordered Scores of Student: " + scores.join(', '));

}

// 11. Write a program to initialize an array with city names.  Copy 3 array elements from cities array to selectedCities  array. 

function q11() {
let cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];
let selectedCities = [];
selectedCities = cities.slice(0, 3);
alert("Selected cities: " + selectedCities.join(", "));
}

// 12. Write a program to create a single string from the  below mentioned array: 
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];  (Use array’s join method)
function q12() {
let arr = ["This" , "is", "my", "cat"];
let singlestring =  arr.join(" ");
alert(singlestring);
}

// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they  were stored. (FIFO-First In First Out)

function q13() {
let deviceQueue = [];
deviceQueue.push("keyboard");
deviceQueue.push("mouse");
deviceQueue.push("printer");
deviceQueue.push("monitor");

document.write("Out: " + deviceQueue.shift() + "<br>");
document.write("Out: " + deviceQueue.shift() + "<br>");
document.write("Out: " + deviceQueue.shift() + "<br>");
document.write("Out: " + deviceQueue.shift() + "<br>");

}

// 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In First Out)

function q14() {
let deviceStack = [];

deviceStack.push("keyboard");
deviceStack.push("mouse");
deviceStack.push("printer");
deviceStack.push("monitor");

document.write("Out: " + deviceStack.pop() + "<br>");
document.write("Out: " + deviceStack.pop() + "<br>");
document.write("Out: " + deviceStack.pop() + "<br>");
document.write("Out: " + deviceStack.pop() + "<br>");


}

// 15. Write a program to store phone manufacturers  (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.  Display the following dropdown/select menu in your  browser using document.write() method:

function q15() {
let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
let selectHTML = "<select>";
phoneManufacturers.forEach(manufacturer => selectHTML += `<option>${manufacturer}</option>`);
selectHTML += "</select>";
document.write(selectHTML);
}
