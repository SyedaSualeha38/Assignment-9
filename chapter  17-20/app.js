// 1. Declare and initialize an empty multidimensional array. (Array of arrays)

function q1() {
let multiArray = [];
console.log(multiArray); // Output: []
}

// 2. Declare and initialize a multidimensional array representing the following matrix:
function q2() {
for (let i = 1; i <= 10; i++) {
    if (i % 1 === 0) {
        console.log(i);
    }
}}

// 3. Write a program to print numeric counting from 1 to 10.
function q3() {
for ( let i=1; i<=10; i++)  {
    console.log(i);
}  }

// 4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

function q4() {
let tableNumber = prompt("Enter the table number:");
let length = prompt("Enter the length of the table:");

tableNumber = parseInt(tableNumber);
length = parseInt(length);

for (let i = 1; i <= length; i++) {
    console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}}

// 5. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”,“strawberry”]

function q5() {
let fruits = ["apple", "banana", "mango", "orange","strawberry"]
for (let i=0; i<fruits.length; i++) {
console.l
}og(fruits[i])
}

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
function q6() {
let counting = [];
for (let i = 1; i <= 15; i++) {
    counting.push(i);
}
console.log("Counting: " + counting.join(", "));

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
let reverseCounting = [];
for (let i = 10; i >= 1; i--) {
    reverseCounting.push(i);
}
console.log("Reverse counting: " + reverseCounting.join(", "));

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
let even = [];
for (let i = 0; i <= 20; i+= 2) {
    even.push(i);
}
console.log("Even: " + even.join(", "));

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
let Odd = [];
for (let i = 1; i <= 20; i+= 2) {
    Odd.push(i);
}
console.log("Odd: " + Odd.join(", "));

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
let Series = [];
for (let i = 2; i <= 20; i+= 2) {
    Series.push(i+ "k");
}
console.log("Series: " + Series.join(", "));}

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:
function q7() {
let input = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
let A = ['biscuits', 'juice', 'cake', 'apple pie', 'cookie', 'chips', 'patties']

if (A.includes(input.toLowerCase())) {
    alert(input + " is available at in our bakery .");
} else {
    alert("We are sorry . " + input + " is not available in our bakery");
}
}

// 8. Write a program to identify the largest number in thegiven array. 
// A = [24, 53, 78, 91, 12].
function q8() {  
let num = [24, 53 , 78 , 91 , 12];
let largestnumber =  Math.max(...num); 
alert("The largest number is " + largestnumber);
}

// 9. Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]
function q9() {
let nums = [24, 53 , 78 , 91 , 12];
let smallestnumber =  Math.min(...nums); 
alert("The smallest number is " + smallestnumber);
}

// 10. Write a program to print multiples of 5 ranging
function q10() {
let ranging = [];
for (let i = 5; i <= 100; i+= 5) {
    ranging.push(i);
}
console.log( ranging.join(", "));
}