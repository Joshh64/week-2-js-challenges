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

// Cinema Ticket

let age = 80;

if (age < 18) {
    console.log("A child ticket is £8")
} else if (age > 18 && age < 60) {
    console.log("An adult ticket is £10.95")
} else if (age > 60) {
    console.log("A senior ticket is £7.50")
}