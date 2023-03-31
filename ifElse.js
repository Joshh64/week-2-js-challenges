if ( 11%2 === 0 ) {
    console.log("number is even")
} else {
    console.log("number is odd")
}
// a calculation is performed. if the result is even, it displays a message. if the result is odd, it displays a different message

// Activity 1 - variables that check if the values are right for specific phrases to appear

let age = "19";

let country = "UK"

let canDrink = (age < 18 && country == "UK") ? 'Too young' : 'Old enough';

console.log(canDrink)

// Activity 2 - pizza topping switch statement that gives responses on opinions of whatever topping is typed in

let topping = "anchovy";

switch (topping) {
    case "pepperoni":
    case "chicken":
    case "beef":
        console.log(`I do enjoy ${topping} on pizzas`);
        break;
    case "Mushroom":
        console.log(`I do not mind ${topping} on pizzas`);
        break;
    case "anchovy":
        console.log(`${topping} should not be on pizza`);
        break;
    default:
        console.log("No opinion")
}

// this allows for the variable of topping to have multiple values, so that said values can illict the correct response

// Activity 3 - if statements that detects how long a password is and if its long enough

let password = "password2111"

if (password.length < 8) {
    console.log("Password is too short")
    } else if(password.length > 8) {
        console.log("Password created successfully!")
    }

// Activity 4 - if statement that detects if the number is divisible by 3 and/or 5

let number = 15;
if(number % 3 == 0) {
    console.log("fizz")
} else if (number % 5 == 0) {
    console.log("buzz")
} else if (number % 5 && 3) {
    console.log("fizzbuzz")
}

// Activity 5 - checking if the number input is a palindrome

const palindrome = "1001"

const isPalindrome = (inStr) => {
    for (let i=0; i<inStr.length; i+=1) {
        if(inStr[i] !== inStr[inStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome(palindrome))

// Activity 6 - if statement of someone's daily schedule

let time = "6"
let placeOfWork = "work"
let townOfHome = "warrington"

if (time < 7) {
    console.log(townOfHome)
} else if (time === 8){  
    console.log("I'm commuting")
} else if (time => 9) {
    console.log(`I'm at ${placeOfWork}`)
}

// Activity 7 - finding the index of the last vowel in a strong

let text = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
let result = ['a', 'e', 'i', 'o', 'u']
const lastVowel = text.lastIndexOf("i")

console.log(lastVowel)

// Actiivty 8 - checking if the first and last letters in a string are the same

let word = "Are these the same?"

// Activity 9 - 

let num1 = 16
let num2 = 24

if ( num1%2 === 0 ) {
    console.log("number is even")
} else if (num1 * num2 ); {
    console.log("number is odd")
}