// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this:“Welcome to city of lights”

function q1() {
    let city = prompt("Enter your city");
let citys = "Karachi"
if (city === citys) {
alert(" “Welcome to city of lights” ");
}
else {
alert(" “Welcome to city of ” "+ city );
} ;
}


// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
function q2() {
let gender = prompt("Enter your gender");
let male = "male"
let female =  "female" 
if (gender === male) {
alert(" “Good Morning Sir” ");
 }  
 else  if (gender === female){
alert(" “Good Morning Madam” " );
}
}

// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table: 
    //    Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move now

function q3() {
let signalColor = prompt("Enter the color of the traffic signal (Red, Yellow, Green)");
        let message;
        if (signalColor.toLowerCase() === "red") {
            message = "Must Stop";
        } else if (signalColor.toLowerCase() === "yellow") {
            message = "Ready to move";
        } else if (signalColor.toLowerCase() === "green") {
            message = "Move now";
        } else {
            message = "Invalid color";
        }

        document.write(`
            <table>
                <tr>
                    <th>Signal color</th>
                    <th>Message</th>
                </tr>
                <tr>
                    <td>Red</td>
                    <td>Must Stop</td>
                </tr>
                <tr>
                    <td>Yellow</td>
                    <td>Ready to move</td>
                </tr>
                <tr>
                    <td>Green</td>
                    <td>Move now</td>
                </tr>
                <tr>
                    <td>${signalColor}</td>
                    <td>${message}</td>
                </tr>
            </table>
        `);
    }

// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

function q4() {
let remainingFuel = prompt("Enter the remaining fuel in your car (in litres)");
if (parseFloat(remainingFuel) < 0.25) {
    alert("Please refill the fuel in your car");
}

// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
// a.
 let a = 5;
    if (++a === 5)
        {alert("given condition for variable a is true");}

// b.
 let b = 82; 
    if ( b++ === 83)
        {alert("given condition for variable b is true");}

// c.
 let c = 12;
    if (c++ === 13){ alert("condition 1 is true"); }
    if (c === 13){alert("condition 2 is true");}
    if (++c < 14){alert("condition 3 is true");}
    if(c === 14){alert("condition 4 is true");}

// d.
 let materialCost = 20000;
   var laborCost = 2000;
   var totalCost = materialCost + laborCost;if (totalCost === laborCost + materialCost){alert("The cost equals");}

// e.
 if (true){alert("True");}if (false){alert("False");}

// f.
 if("car" < "cat")
    {alert("car is smaller than cat");}
}
// 6. Write a program to take input the marks obtained in threesubjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:

// Show the total marks, marks obtained, percentage, grade
function q6() {
    const subject1 = prompt('Enter your subject 1 Marks');
    const subject2 = prompt('Enter your subject 2 Marks');
    const subject3 = prompt('Enter your subject 3 Marks');
    const totalMarks = prompt('totalMarks');

    const obtainedMarks = subject1 + subject2 + subject3;
    const percentage = (obtainedMarks / totalMarks) * 100;
    
    let grade, remarks;
    if (percentage >= 90) {
        grade = 'A-one';
        remarks = 'Excellent';
    } else if (percentage >= 80) {
        grade = 'A';
        remarks = 'Good';
     } 
    else if (percentage >= 70) {
        grade = 'B';
        remarks = 'Your need to improve';
    }
    else {
        grade = 'Fail';
        remarks = 'sorry';
    }

    document.write( `
        <h2>Marks Sheet:</h2>
        <br>
        <p>Total Marks: ${totalMarks}</p>
        <p>Marks Obtained: ${obtainedMarks}</p>
        <p>Percentage: ${percentage.toFixed(2)}%</p>
        <p>Grade: ${grade}</p>
        <p>Remarks: ${remarks}</p>
    `);
}

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correctanswer”.
// b. If the guessed number +1 is the secret number, show“Close enough to the correct answer”.

function q7() {
let num1 = prompt("Enter your first Number") 
        let num2 = prompt("Enter your Second Number");
    if (num2 === num1) {
        alert(" “Bingo! Correctanswer” ");
        } else if (num2 + 1 === num1 || num2 - 1 === num1) {
            alert(" “Close enough to the correct answer” " );
        } else {
            alert(" “Try again!” " ) ;
        }
    }

// 8. Write a program to check whether the given number isdivisible by 3. Show the message to the user if the number is divisible by 3.

function q8() {
    let number = prompt("Number");

    if (number % 3 === 0) {
        alert( "The number is divisible by 3.");
    } else {
        alert( "The number is not divisible by 3.");
    }
}

// 9. Write a program that checks whether the given input is aneven number or an odd number.

function q9() {
let numbers = prompt("Number");

    if (number % 2 === 0) {
        alert( "The number is even.");
    } else {
        alert( "The number is odd.");
    }
}

// 10. Write a program that takes temperature as input andshows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

function q10() {
let temperature = prompt("temperature") ;

    if (temperature > 40) {
        alert ( "It is too hot outside.");
    } else if (temperature > 30) {
        alert ( "The Weather today is Normal.");
    } else if (temperature > 20) {
        alert ( "Today’s Weather is cool.");
    } else if (temperature > 10) {
        alert ("OMG! Today’s weather is so Cool.");
    } else {
        alert( "It's very cold!");
    }
}

// 11. Write a program to create a calculator for +,-,*, / & %using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)Compute & show the calculated result to user.

function q11() {
var firstNumber = parseFloat(prompt("Enter the first number:"));
    var secondNumber = parseFloat(prompt("Enter the second number:"));
    var operation = prompt("Enter the operation (+, -, *, /, %):");

    var result;
    if (operation === '+') {
        result = firstNumber + secondNumber;
    } else if (operation === '-') {
        result = firstNumber - secondNumber;
    } else if (operation === '*') {
        result = firstNumber * secondNumber;
    } else if (operation === '/') {
        result = firstNumber / secondNumber;
    } else if (operation === '%') {
        result = firstNumber % secondNumber;
    } else {
        result = "Invalid operation!";
    }
}