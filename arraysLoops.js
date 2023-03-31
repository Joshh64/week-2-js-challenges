let coffeeOrder = [
    "Coffee",
    "Cortado",
    "Whatever's new"
];
// items in an array must be held within square brackets

coffeeOrder[1] = "Tea";
// changes the "Cortado" variable in the array to "Tea"

console.log(coffeeOrder.length);
// shows how many items are in the array

coffeeOrder.push("Espresso")
// adds an item to the array

console.log(coffeeOrder)

coffeeOrder.pop()
// removes the last item added to the array

console.log(coffeeOrder)

let favDrinks = [
    "Coke",
    "Fanta",
    "Tonic",
    "Red Bull",
    "Juice",
    "Water",
];

for(let i=0; i < favDrinks.length; i++){
    console.log(favDrinks[i]);
}

let evenNums = []

for (let counter = 0; counter < 30; counter++) {
    if (counter % 2 === 0) {
        evenNums.push(counter)
    }
}

console.log(evenNums)

//creates an array of even numbers less than the number given

let counter = 0;

while (counter < 10) {
    console.log(counter)
    counter++
}

// creates an infinite loop of 0s that increase by one each time until they hit the number that the counter variable is set to be less than. ctrl + c in terminal gets you out of being stuck

let cards = ["Clubs", "Diamond", "Hearts", "Spade"]
let currentCard = "Clubs"

while (currentCard != "Spade") {

    console.log(currentCard)

    currentCard = cards[Math.floor(Math.random()*4)];
}

console.log(currentCard)

// runs a loop where the console chooses a card at random (using the numbers 0-4) and stops when it finally chooses the specified item

// Activity 1 - Create an array of favourite movies, add one using a method, then use a loop to cycle through it

let movies = ["Wall-E", "Star Wars: A New Hope", "Spiderverse", "Ratatoullie"];
let currentFav = "Wall-E";

movies.push("Incredibles")

while (currentFav != "Wall-E") {

    console.log(currentFav);
    currentFav = movies[Math.floor](Math.random()*0);
}

console.log(currentFav)

// Activity 2 - Generate 6 random numbers between 1-50 and log them into console using a loop

let numberArray = [];

while(numberArray.length < 6) {
  let random = Math.round(Math.random() * 50);
  if(numberArray.indexOf(random) === -1) {
    numberArray.push(random);
  }
 
}

console.log(numberArray);

// Activity 3 - create a loop that counts down from 9 to 0

var countDown = 10;

while (countDown > 0){
    countDown--;
    console.log(countDown);
}

// Activity 4 - create an array of 4 films. use a for loop to display each film is said array, and then an if statement to check if the third film is Ghostbusters

let films = ["Wall-E", "Ghostbusters", "Die Hard", "Star Wars"]

for (let i = 0; i < films.length; i++) {
    console.log(films[i]);
  } 
  
  if (films[2] == "Ghostbusters") {
    console.log("Yay its Ghostbusters")
  } else {
    console.log("Boo! We want Ghostbusters!")
  }

// Activity 5 - generate 6 random numbers inbetween 1-30. for each one, check if it's divisible by 7 or not, and log a message to the console stating which it is (incomplete)

let randomNumbers = [];

while(randomNumbers.length < 6) {
  let random = Math.round(Math.random() * 30);
  if(randomNumbers.indexOf(random) === -1) {
    randomNumbers.push(random);
  }
}

console.log(randomNumbers)

// Activity 6 - create a mutual followers program (incomplete)

let bobsFollowers = ["Dave", "Jin", "Randy", "Vanessa"]
let hannahsFollowers = ["Jin", "Randy", "Jill", "Claire"]

// Activity 7 - research do...while loops and find the difference between them and for loops. Give an example, and list the pros and cons

console.log("A for loop is for when you want an action to repeat multiple times, and best used when you know the amount of iterations you want ahead of time. For example, you can use it to manage someone's order at a restaurant/cafe and how many of an item they order. In short, they are very straight forward as it allows you to target any given string or item in an array, however they are very restricting as you can't determine where you want it to start and for how long you want it to go on for and it can't traverse elements in reverse order.")

console.log("A while loop is for when you want user input and when you don't know how many times you want it to happen. For example, if you ask the user for a number between a specific range, you can use a while loop to repeat until they finally hit a number in said range. While loops are very easy to understand and use, and there's no real disadvantages to using one")

console.log("A do...while loop statement allows for the block of code to be executed at least once, or so long as a condition is true, however this can be seen as a disadvantage, as it means it will run indefinitely, even if you don't want it to. A way of using one is prompting a user for input and then validating that input. The loop ensures that the user is prompted for input at least once, and then continues to prompt until valid input is received.")

// Example:
// do {
//     code block to be executed
//   }
//   while (condition);

// Cinema Ticket

let age = 80;

if (age < 18) {
    console.log("A child ticket is £8")
} else if (age > 18 && age < 60) {
    console.log("An adult ticket is £10.95")
} else if (age > 60) {
    console.log("A senior ticket is £7.50")
}