// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

function q1() {
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let fullName = firstName + " " + lastName;
alert("Hello " + fullName + " !")
}

// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser


function q2() {
let favoritemobile = prompt("Enter your favorite mobile phone model:");
let length = prompt("Enter your length")
document.write("My favorite phone is :" + favoritemobile,'<br>');
document.write("Length of string : " + length,'<br>')
}

// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .


function q3() {
let word = "Pakistani";
let indexN = word.indexOf('n');
document.write("The index of letter 'n' in 'Pakistani' is: " + indexN,'<br>');
}

// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.


function q4() {
let words = "Pakistani";
let indexL = word.indexOf('L');
document.write("The index of letter 'L' in 'Hello World' is: " + indexL,'<br>');
}

// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.


function q5() {
let wordi = "Pakistani";
let charAt3rdIndex = word.charAt(3);
document.write("The character at 3rd index in 'Pakistani' is: " + charAt3rdIndex,'<br>');
}

// 6. Repeat Q1 using string concat() method.


function q6() {
let firstname = prompt("Enter your first name:");
let lastname = prompt("Enter your last name:");
let fullname = firstname.concat(" ", lastname);

alert("Hello, " + fullname + " !");
}

// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

function q7() {
let city = "Hyderabad";
let newcity = city.replace("Hyder", "Islam");
document.write("The new name of the city is: " + newcity,'<br>');
}

// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.var message = “Ali and Sami are best friends. They play cricket and football together.”;


function q8() {
let message = "Ali and Sami are best friends. They play cricket and football together.";
let newMessage = message.replace(/and/g, "&");
document.write("The modified message is: " + newMessage,'<br>');
}

// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.


function q9() {
let stringNumber = "472";
let number = Number(stringNumber);
document.write("String: " + stringNumber + " (type: " + typeof stringNumber + ")");
document.write("Number: " + number + " (type: " + typeof number + ")",'<br>');
}

// 10. Write a program that takes user input. Convert and show the input in capital letters.


function q10() {
let userinput = prompt("Enter some text:");
let capitalizedInput = userinput.toUpperCase();
alert("Input in capital letters: " + capitalizedInput);
}

// 11. Write a program that takes user input. Convert and show the input in title case.


function q11() {
let userInput = prompt("Enter some text:");
let titleCaseInput = userInput.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
alert("Input in title case: " + titleCaseInput);
}

// 12. Write a program that converts the variable num to string.
// var num = 35.36 ; Remove the dot to display “3536” display in your browser.


function q12() {
let num = 35.36;
let stringNum = num.toString().replace('.', '');
document.write("The modified number is: " + stringNum ,'<br>');
}

// 13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64


function q13() {
let invalidChars = ['@', '.', ',', '!'];
let username = prompt("Enter a username:");
if (invalidChars.some(char => username.includes(char))) {
    alert("Invalid username! Please enter a valid username without '@', '.', ',', '!'");
} else {
    alert("Username is valid.");
}}

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:


function q14() {
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let searchItem = prompt("Enter an item to search:").toLowerCase();
if (A.map(item => item.toLowerCase()).includes(searchItem)) {
    alert(searchItem + " is found in the list.");
} else {
    alert(searchItem + " is not found in the list.");
}
}

// 15. Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.


function q15() {
let password = prompt("Enter your password:");
let hasAlphabet = /[a-zA-Z]/.test(password);
let hasNumber = /[0-9]/.test(password);
let startsWithAlphabet = !/^[0-9]/.test(password);
let isValidLength = password.length >= 6;
if (hasAlphabet && hasNumber && startsWithAlphabet && isValidLength) {
    alert("Password is valid.");
} else {
    alert("Invalid password! Please ensure it meets all the criteria.");
}
}

// 16. Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser.


function q16() {
let university = "University of Karachi";
let universityArray = university.split(" ");
document.write("The elements of the array are: " + universityArray.join(", "), '<br>' );
}

// 17. Write a program to display the last character of a user input.


function q17() {
let useInput = prompt("Enter some text:");
let lastChar = useInput.charAt(useInput.length - 1);
alert("The last character of your input is: " + lastChar);
}

// 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

function q18() {
const inputString = "The quick brown fox jumps over the lazy dog";
const inputStringLower = inputString.toLowerCase();
const wordss = inputStringLower.split(" ");
const theCount = wordss.filter(word => word === "the").length;
console.log(`The number of occurrences of the word 'the' is: ${theCount}`);
}