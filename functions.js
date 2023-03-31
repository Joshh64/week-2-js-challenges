// functions can be written as below or as const (variable) = (varName) => {

let coffeeIsGrinding = false

function pressGrindingBeans() {
    if(coffeeIsGrinding) {
        console.log("Stop the grind");
        coffeeIsGrinding = false
    } else {
        console.log("Grinding for 20 seconds");
        coffeeIsGrinding = true
    }
}

pressGrindingBeans();

function favColour(colour) {
    console.log(`My favourite colour is ${colour}`);
}

favColour("Blue");
favColour("Red");
favColour("Purple");

function addUp(num1, num2) {
    return num1 + num2
}

let funcResult = addUp(7, 3)

console.log(funcResult)

console.log(addUp(2, 5))

// Activity 1 - simplified way of writing a function

const factorial = (n) => {
    if((n) || (n === 1)) {
        return 1
    } else {
        return (n * factorial(n-1));
    }
}

console.log(factorial(33))

// Activity 2 - function with 2 parameters and an order count that increased with each "takeOrder" function supplied

let orderCount = 0

const takeOrder = (topping, size) => {
    console.log(`${size} pizza with ${topping}`);
    orderCount++
}

takeOrder("pineapple, 7inch");
takeOrder("meat feast, 9inch")

console.log(orderCount)

// Activity 3 - function that allows for money to be taken out of an account if the amount selected is less than or equal to the balance in the account

let balance = 400

const cashWithdrawal = (amount, accnum) => {
    if (accnumber = 5049921 && amount === balance || balance > amount){
        console.log(`Dispensing ${amount} from account ${accnum}`)
    } else {
        console.log(`Account ${accnum} does not have enough funds to complete the transaction. Please try again`)
    }
}

cashWithdrawal(300, 5049921);