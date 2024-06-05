// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).


function q1() {
let inputChar = prompt("Enter a character:");
let ascii = inputChar.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
    alert("The input is a number.");
} else if (ascii >= 65 && ascii <= 90) {
    alert("The input is an uppercase letter.");
} else if (ascii >= 97 && ascii <= 122) {
    alert("The input is a lowercase letter.");
} else {
    alert("The input is not a number or letter.");
}
}

// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.


function q2() {
let int1 = parseInt(prompt("Enter the first integer:"));
let int2 = parseInt(prompt("Enter the second integer:"));

if (int1 > int2) {
    alert("The larger number is: " + int1);
} else if (int2 > int1) {
    alert("The larger number is: " + int2);
} else {
    alert("Both numbers are equal.");
}
}

// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.


function q3() {
let number = parseFloat(prompt("Enter a number:"));

if (number > 0) {
    alert("The number is positive.");
} else if (number < 0) {
    alert("The number is negative.");
} else {
    alert("The number is zero.");
}
}

// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise


function q4() {
let char = prompt("Enter a character:");

if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || 
    char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
    alert("The character is a vowel.");
} else {
    alert("The character is not a vowel.");
}
}

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
//   i. Check if user has entered password. If not, then give message “ Please enter your password”
//   ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.


function q5() {
let correctPassword = "password123"; // Store the correct password in a variable
let userPassword = prompt("Enter your password:");

if (!userPassword) {
    alert("Please enter your password.");
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password.");
} else {
    alert("Incorrect password.");
}
}
// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {greeting = "Good day";else greeting = "Good evening";}


function q16() {
let greeting;
let hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

alert(greeting);
}

// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements


function q7() {
let time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):"));

if (time >= 0 && time < 1200) {
    if (time === 0) {
        alert("The time is 12 AM.");
    } else {
        alert("The time is " + Math.floor(time / 100) + " AM.");
    }
} else if (time >= 1200 && time < 2400) {
    if (time === 1200) {
        alert("The time is 12 PM.");
    } else {
        alert("The time is " + Math.floor((time - 1200) / 100) + " PM.");
    }
} else {
    alert("Invalid time format.");
}
}
