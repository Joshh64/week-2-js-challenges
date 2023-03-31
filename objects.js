let person = {
    myName: "Josh",
    age: 21,
    sayHello() {
        return `Hi I'm ${this.myName}`
    }
}

person.coding = true

person.myName = "Mr Josh"

person.favSongs = ["Tomorrow With You", "Fiery Bonds"]
// adds extra into to the "person" object

console.log(person.sayHello())

console.log(person)

console.log(person.myName)
console.log(person["myName"])
// displays the the value given to the variable "name", which is stored in the "person" key

let day = "thursday"
let weekendDay = ["Saturday", "Sunday"]
let alarmMsg = "time to get up!"

console.log(weekendDay.includes("Saturday"))

let alarm = {
    weekendAlarm: "no alarm needed",
    weekdayAlarm: "get up at 7am"
}

if(day === "Saturday" || day === "Sunday") {
    alarmMsg = alarm.weekendAlarm
} else {
    alarmMsg = alarm.weekdayAlarm
}
console.log(alarmMsg)

// Activity 2 - create an object with key values, and then use methods to produce a string in the console

let pet = {
    petName: "Harry",
    typeOfPet: "Cat",
    age: "5",
    colour: "white",
    eating() {
        return `${this.petName} is eating`
    }
}

console.log(pet.eating())

// Activity 3 - create a program acting like a coffee shop using objects and key values that takes someone's order using methods and calculates the sum based on what they ordered  

let shop = { 
    menu: ["coffee", 2.5, "tea", 1.5, "cake", 4],
    calcTotal(order){ 
        // loop that compares order to menu and finds the price of each item
        for(const [coffee, tea] of Object.entries(shop)) {
            console.log(`${coffee} ${tea}`)
        }
    } 
} 
// pass the items you want to order as an argument to the calcTotal Function
console.log(shop.calcTotal(["coffee", "tea"]))