let number = 10
// creates variable with value of 10

number += 15
// adds 15 to variable value. = is needed so that the action is actually applied to the variable. if the + wasn't here then the variable value would change to the value given instead of combining the two

console.log(number)
// displays the variable value in the log when run. variables don't need quotation marks

// Activity 1 - logging someone's name, age and favourite colour into the console with Template Literals

let myName = "Josh"
let myAge = "21"
let favColour = "blue"

console.log(`Hi, my name is ${myName}. I am ${myAge} years old and ${favColour} is my favourite colour`)
// uses the variables to create a sentence

myName = "not Josh"
myAge = "not 21"
favColour = "not blue"

console.log(`Hi, my name is ${myName.toUpperCase()} I am ${myAge} years old. My favourite colour is ${favColour}`)
// let variables can be changed mid code. this will show both sentences. you can also make the text inside uppercase as you would with a string

// Activity 2 - log what you eat today and tomorrow for all three meals of the day

let breakfast = "bacon and egg on Toast"
let lunch = "chicken tikka masala sandwich"
let dinner = "cottage pie"

console.log(`Today for breakfast, I ate ${breakfast}, for lunch I ate ${lunch}, and tonight I will eat ${dinner}.`)

breakfast = "cereal"
lunch = "ham sandwich"
dinner = "Domino's"

console.log(`For breakfast tomorrow, I plan to eat ${breakfast}, for lunch I may have a ${lunch}, and for dinner I might opt for a ${dinner}.`)

// Activity 3 - program that calculates the number of days from today to my birth date

let todaysDate = new Date().getTime();

let birthDate = new Date("11 August 2001").getTime();

let dateDifference = (todaysDate - birthDate)/(1000*60*60*24);

console.log(todaysDate)
console.log(birthDate)

console.log(`I have been alive for ${Math.floor(dateDifference)} days`);

// Activity 4 - log a table and add values in using variables (incomplete)

space1 = "x";
space2 = "o";
space3 = " ";

console.log (`    |   |   |  \n ${space1}  |   | ${space2}   |    \n    |   |   |   `)
console.log ("-----------")
console.log (" |   |   |  \n |   |   |   \n |   |   |   ")
console.log ("-----------")
console.log (" |   |   |  \n |   |   |   \n |   |   |   ")