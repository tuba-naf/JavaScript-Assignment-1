//  Name: Tuba Nafees;
//"Javascrip Assignment"

//Chapter 1:
// 1. Alert these following (individually):
// I. First Name
// II. Last Name
// III. Email
// IV. Phone Number
// V. Password
// 2. Correct this statement: alert"You're learning JavaScript!";
// 3. Code an alert statement displaying any message you like.
// 1
alert("First Name");
alert("Last Name");
alert("Email");
alert("Phone Number");
alert("Password");
// 2
alert("You're learning JavaScript!");
// 3
alert("How are you doing today");
//Chapter 2:
// 1. Declare any variable in the camelCase format.
// 2. Declare a variable of your choice without defining it. Then, in a
// second statement, assign it a string of your choice.
// 3. Declare the variable teamName and Alert your Team name.
// 4. This statement has already been coded. var bestMan = "Charlie";
// Assign the variable a new string.
// 1
let doPaint = "Colors";
// 2
let doArts;
doArts = "Make a Poster";
// 3
let teamName = "Team Green";
alert(teamName);
// 4
var bestMan = "Charlie";
bestMan = "John";

// Chapter 3 (Variables for numbers)
// 1. Declare a variable “caseQty”
// 2. Assign to the variable caseQty, which has already been declared,
// the value 144.
// 3. Rewrite this statement so the variable can be used in a math
// operation. var num = "9";
// 4. In one statement declare a variable. In a second statement assign
// it the sum of 2 numbers.

// 5. What is the value of orderTotal?
// var merchTotal = 100;
// var shippingCharge = 10;
// var orderTotal = merchTotal + shippingCharge;
// Try it yourself.
// 6. In the first statement declare a variable and assign it a number. In
// the second statement, change the value of the variable by adding
// it together with a number.
// 1
var caseQty;
// 2
caseQty = 144;
// 3
var num = 9;
// 4
let sum;
sum = 8 + 7;
// 5
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
document.write(orderTotal);
// 6
var state1 = 6;
state1 += 5;
document.write(state1);
// Chapter 4 (Variable names Legal and
//     Illegal)
//     1. Correct this statement.
//     var product cost = 3.45;
//     2. Rewrite this using camelCase.
//     var Nameofband;
//     3. In a single statement declare a legally-named variable and assign a
//     number to it.
//     4. Declare a variable that is a combination of your first and last
//     names. Use camelCase.
//     5. List the legal and Illegal Variables.
//1
var productcost = 3.45;
// 2
var nameofBand;
// 3
var keyNo = 4;
// 4
var firstNamelastName = "Tuba" + " " + "Nafees";
document.write(firstNamelastName);
//5: Legal Variable Names:
userAlert
myVar
totalAmount
user_age
_hiddenValue
amount$
user123
isValid
responseTime
// Illegal Variable Names:
// user alert (contains a space)
// 123abc (starts with a number)
// total-amount (contains a hyphen)
// if (a JavaScript keyword)
// // user@name (contains a special character)
// 2variable (starts with a number)
// function (a JavaScript keyword, although it’s fine to include keywords within variable names as long as they are not standalone keywords)

// CamelCase Convention:
// userAlert (legal and follows camelCase)
// totalAmount (legal and follows camelCase)
// hiddenValue (legal and follows camelCase)

// Chapter 5 (Math Expression I)
// 1. What is the name and symbol of the arithmetic operator that
// gives you the remainder when one number is divided by another?
// 2. What is the value of num?
// var num = 20 % 6;

// 3. In a single statement, declare the variable largeNum and assign it
// the result of 1,000 multiplied by 2,000.
// 4. Assign to a variable the value represented by one variable
// subtracted from the value represented by another variable
// 5. Assign to a variable the remainder when one number is divided by
// another. The variable hasn't been declared beforehand. Make up
// the variable name.
// 6. Code an alert that displays the result of a multiplication on 2
// numbers.
//1: Name: Modulus Operator
// Symbol: %
// 2
var num = 20 % 6;
//value=2
document.write(num);
// 3
var largeNum = 1000 * 2000;
// 4
var count1 = 30;
var count2 = 40;
count2 - count1;
// 5
var letsMake = 40 % 20;
// 6
var product = 3 * 2;
alert(product);

// Chapter 6 (Math Expression II)
// 1. Code a short form of x = x + 1; Use either of the two legal
// expressions.
// 2. If x has a value of 100, what is the fastest way to reduce it to 99
// with a math expression?
// 3. var x = 50;
// var y = x++;
// What is the value of y?
// 4. var y = 50;
// var z = --y;
// What is the value of z?
// 5. In a single statement, decrement num and assign its original value
// to newNum.
// 6. In a single statement add 1 to a variable and assign its original
// value to another variable.
// 7. Assign a number value to a variable.
// Increment the variable.
// Display the new value in an alert
// 1
var x = x + 1;
x += 1;
// 2
x--;
// 3
//y=50;
// 4
//z=49;
// 5
var newNum = 10;
var newNum1 = newNum--;
//6
var task = 10;
var task1 = task++;
// 7
var y = 20;
++y;
alert(y);

// Chapter 7 (Math Expression III)
// 1. var calculatedNum = 2 + (2 * 6);
// What is the value of calculatedNum?
// 2. var calculatedNum = (2 + 2) * 6;
// What is the value of calculatedNum?
// 3. var calculatedNum = (2 + 2) * (4 + 2);
// What is the value of calculatedNum?
// 4. var calculatedNum = ((2 + 2) * 4) + 2;
// What is the value of calculatedNum?
// Note: Try all the above equations yourself.
// 5. Write a statement that assigns to cost the result of 2 + 2 * 4 + 10,
// clarified with parentheses, producing 56.
// 6. Write a statement that assigns to units the result of 2 + 2 * 4 + 10,
// clarified with parentheses, producing 20.
// 7. Write a statement that assigns to pressure the result of 4 / 2 * 4,
// clarified with parentheses, producing 5.

//Answer 1: 14;
//Answer 2: 24;
//Answer 3 : 32;
//Answer 4 : 18;
// 5
var cost = (2 + 2) * (4 + 10);
// 6
var units = 2 + 2 * 4 + 10;
// 7
var pressure = (4 / 2) * 4 - 3;

// Chapter 8 (Concatenating Text

//     Strings)
//     1. var num = "2" + "2";
//     What is the value of num? Include quotation marks.
//     2. message = ("Hello," + "Dolly");
//     What is the value of message? (Include the quotation marks.)
//     Alert the statement
//     3. alert("33" + 3);
//     What message displays in the alert box?

//     4. Write an alert that displays the concatenation of the two parts of
//     "Pakistan Zindabad".
//     5. Write a statement that assigns to a variable the concatenation of
//     a string with a number
//     6. Assign strings to two variables. Then concatenate them and assign
//     the result to a third variable.

// Answer 1: 22
// 2
var num = "2" + "2";
document.write(num);
// 3
// "Hello,Dolly"
alert("33" + 3); //333;
// 4
alert("Pakistan" + " Zindabad");
// 5
var outcome = "The number is " + 5;
// 6
var a = "Plan a trip to";
var b = "U.S.A";
var c = a + "" + b;

// Chapter 9 (Prompts)

// 1. Code a prompt with the message "Enter first name". The user's
// response is assigned to firstName.
// 2. Code a prompt with the message "Country?" and the default
// answer "China". The user's response is assigned to country.
// 3. Correct this statement
// var yourName = prompt(Enter Your Name");
// 4. Code a prompt that specifies a string as the message Include a
// default input.
// 5. Assign strings to two variables. Code a prompt specifying the first
// variable as the message and the second variable as the default
// response. Assign the user's response to a third variable.
// 6. Display a prompt, including both a message and a default
// response.
// Display the user's response in an alert.
// 1
var firstName = prompt("Enter first name");
//2
var country = prompt("Country?", "China");
// 3
var yourName = prompt("Enter Your Name");
// 4
var response = prompt("What is your favorite author?", "Nemrah Ahmed");
//5
var message = "What is your favorite fruit?";
var defaultResponse = "Apple";
// 6
var userResponse = prompt(message, defaultResponse);
alert(userResponse);

// Chapter 10 (if statments)

// 1. var city = "Karachi"
// if (city = "Karachi") {
// console.log("The City OF Lights")
// Correct the above statement:
// Also try this statement by yourself

// 2. This is the first line of an if statement:
// if (x === y) {
// Complete the statement. If the condition is true, display a box
// that asks the user value of z? and assign it to another variable.
// 3. Code an if statement that tests if ZipCode is "10010" so, Alert
// that "Karachi". if not then alert ("Please write correct city")
// 4. Code an if statement. Test whether a variable has a particular
// numerical value. If so, assign a new value to that variable, as in
// x = 1;
// 1
var city = "Karachi";
if (city === "Karachi") {
  console.log("The City of Lights");
}
// 2
if (x === y) {
  var z = prompt("Enter the value of z?");
}
// 3
var Zipcode = 10010;
if ((Zipcode = 10010)) {
  alert("Karachi");
} else {
  ("Please write correct city");
}
// 4
var x = 1;
if (x === 1) {
  document.write((x = 2));
} else {
  document.write("No Value");
}

// Chapter 11 (Comparison
//     Operators)
//     1. Code the first line of an if statement that tests whether one
//     variable is unequal to another. (Use !)
//     2. Code the first line of an if statement that tests whether the
//     value represented by a variable is greater than or equal to the
//     value represented by another variable.
//     3. Code an if statement. Test whether a variable is unequal to a
//     particular number. If so, assign a number to that variable.
//     4. Code an if statement that tests whether a number is unequal to
//     a different number. If the condition is true (it will be), display a
//     congratulations alert.
//     5. Code a prompt asking for your first name.
//     Code an if statement that tests whether the name you entered
//     is unequal to another name.
//     If the condition is true (it will be), display an alert that says "No
//     match"
// 1
variable1 = 1;
variable2 = 5;
if (variable1 != variable2) {
  document.write("true");
} else {
  document.write("false");
}
// 2
if (variable1 >= variable2) {
  document.write("true");
} else {
  document.write("false");
}
// 3
var x = 6;
if (x != 6) {
  x = 5;
}
// 4
var y = 6;
if (y != 6) {
  document.write("Congratulations");
}
// 5
var responsetest = prompt("What is your first name?");
var expectedname = "Simon";
if (responsetest !== expectedname) {
  alert("No match");
}

// Chapter 12 (if...else and else if
//     statements)
//     1. Code an if statement that tests whether the value represented by
//     a variable is greater than or equal to the value represented by
//     another variable. If so, display an alert. If not, display a different
//     alert.
//     2. Write a program using if else and else if statement which take
//     marks from user. And the program will calculate your percentage
//     and give you grade A/C to Your percentage. (MARKSHEET)
//     3. This is the if statement that begins the code.
//     if (a === 10) {
//     alert("a is 10");
//     }
//     If a isn't 10, display an alert that says The correct value of a is
//     ____
//     Note: Try this by yourself
//     4. Prompt the user to enter a city.
//     If the city is Karachi, display an alert acknowledging it is Karachi.
//     If not, check to see if it's Lahore.
//     If it is, display an alert acknowledging it's Lahore.
//     Otherwise, display a different alert.
// 1
var a = 4;
var b = 6;
if (b >= a) {
  alert("Alert");
} else {
  alert("Error");
}
// 2
var marks = +prompt("Enter your marks");
var percentage = (marks / 100) * 100; // Assuming total marks are 100

if (percentage >= 90) {
  alert("Grade A");
} else if (percentage >= 80) {
  alert("Grade B");
} else if (percentage >= 70) {
  alert("Grade C");
} else if (percentage >= 60) {
  alert("Grade D");
} else {
  alert("Grade F");
}
// 3
if (a === 10) {
  alert("a is 10");
} else if (a != 10) {
  alert("The correct value of a is 10");
}
// 4
var message = prompt("Enter your city name");
if (city === "Karachi") {
  alert("Acknowledging,it is Karachi");
} else if (city === "Lahore") {
  alert("acknowledging it is Lahore");
} else {
  alert("Sorry, City not found");
}

// Chapter 13 (Testing sets of
//     conditions)
//     1. Code the first line of an if statement that tests whether both are
//     true: a has the same value as b and c has the same value as d.
//     2. Code the first line of an if statement that tests whether either or
//     both are true: a has the same value as b or c doesn't have the
//     same value as d.
//     3. Code the first line of an if statement that tests whether
//     I. name is either "Hamza" or "Arsalan".
//     II. age is Less than 60.
//     4. Declare two variables and assign them number values.
//     If the first variable is less than the second variable or greater than
//     the second variable, display an alert.
//     5. Declare 2 variables. Assign one of them your first name and the
//     other one your last name.
//     Code 2 prompts, asking for your first and your last name.
//     If your answers match the two variables, display an alert.
// 1
a = 1;
b = 1;
c = 3;
d = 2;

if (a === b && c === d) {
  document.write(true);
}
// 2
if (a == b || c !== d) {
  document.write(true);
}
// 3
if ((a === "Hamza" || a === "Arsalan") && age < 60) {
  document.write(true);
}
// 4
var x = 3;
var y = 2;
if (x < y || x > y) {
  alert("True");
}
// 5
var firstname = prompt("Write your first name");
var lastname = prompt("Write your last name");
var namefisrt = "Tuba";
var namelast = "Nafees";
if (firstname === namefisrt && lastname === namelast) {
  alert("Name Matches");
}

// Chapter 14 (If statements nested)
// 1. Code an if statement enclosing a nested if. If password is not
// empty, then check if password is not greater than 5 , then display
// an alert that says "Password must be greater than 5" if greater
// than 5 then Alert "OK".

// 2. Try this statement by yourself
// if (a === 1) {
// if (c === "Max") {
// alert("OK");
// }
// }
// 3. Code the first line of an if statement that avoids the nesting above
// by testing for multiple conditions.
// if (a === 1) {
// if (c === "Max") {

// alert("OK");
// }
// }
// 4. Declare two variables and assign them the same number value.
// Test two conditions, using nested if statements. Test whether the
// first variable equals the second variable and also whether it is less
// than or equal to the second variable. If the test passes—and it
// will—display an alert message.
// 1
var password = prompt("Enter your password");
if (password != "") {
  if (password.length <= 5) {
    alert("Password must be greater than 5");
  } else {
    alert("Okay");
  }
}
// 2
if (a === 1) {
  if (c === "Max") {
    alert("OK");
  }
}
// 3
if (a === 1 && c === "Max") {
  alert("OK");
}

// 4
var num1 = 10;
var num2 = 10;

if (num1 === num2) {
  if (num1 <= num2) {
    alert("The numbers are equal and num1 is less than or equal to num2");
  }
}
// Chapter 15 (Array I)
// 1. Declare an empty array.
// 2. Code an array with 1 string element
// 3. var alphabet = ["h","i","j","k"]. Now print the letter “j” in alert
// using array index
// 4. var alphabet=["h","i","j","k", “l”,”m”, “n”, “o”]. Find the total
// length of array.
// 5. Declare an array with one element and Add a second element
// with index in array. Create an alert whose message is the new
// element.
// 1
var arrayBox = [];
// 2
var poetry = ["Ahmed Faraz"];
// 3
var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]);
// 4
var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
alert(alphabet.length);
// 5
var block1 = ["Red"];
block1[1] = "Blue";
alert(block1[1]);

// Chapter 16 (Array II)

// 1. Code an array with 1 string element.
// Add an additional element to the array using push.
// Create an alert whose message is the last element.
// 2. var Alphabet=["h","i","j","k"]
// Remove the last element from the array Alphabet.
// 3. var Alphabet=["h","i","j","k"]
// Add a new element, a number, to the end of an array.
// 1
var suitcase = ["Documents"];
// 2
suitcase.push("Pen");
alert(suitcase[1]);
// 3
alphabet = ["h", "i", "j", "k"];
alphabet.pop();
alphabet.push(1);

// Chapter 16 (Array III)
// 1. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Remove the first element of an array.
// 2. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Add three number elements to the beginning of an array.
// 3. Declare an array with one element.
// Add a second element to the beginning of the array.
// Create an alert whose message is the new first element.
// 4. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Insert "L" into the array between "M" and "XL".
// 5. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Copy the first 3 sizes of the array and put them into a new array,
// regSizes.
// 6. var pets = ["dog", "cat", "ox", "duck", "frog"].
// Add 2 elements after "dog" and remove "cat", "ox", and "duck".
// 7. var pets = ["dog", "cat", "ox", "duck", "frog"];
// Remove "cat" and "ox".
// 8. var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// Reduce it to "duck" and "frog" using slice.
// 1
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();
// 2
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(1, 2, 3);
// 3
var art = ["Paint"];
art.unshift("Paint brush");
alert(art[0]);
// 4
sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, 0, "L");
// 5
sizes = ["S", "M", "XL", "XXL", "XXXL"];
var regsizes = sizes.slice(0, 3);
document.write(regsizes);
// 6
pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 3, "Parrot", "Kitten");
document.write(pets);
// 7
pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 2);
// 8
var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var reducedPets = pets.slice(3, 5);
console.log(reducedPets);
