// console.log("Hello World!")

// [2.1] Recognise and use appropriate data types, [2.2] Assign variables and constants

// #1

// const myName = "Jan";
// let myAge = 38;
// let gotAHeadache = true;
// let bornIn = "Pisek";
// var myAddress = "Walton";

// console.log(bornIn);

// bornIn = "My village";
// myAddress = "Maghul"

// console.log(myAddress);


// #2

// let favouriteDrink = "coffee"
// let myName = "Jan"
// let myAge = 38

// console.log(`My favourite drink is ${favouriteDrink}, my name is ${myName} and my age is ${myAge}.`)


// #3

// let breakfast = "porridge"
// let lunch = "stuffed pepper"
// let dinner = "ham n' cheese toastie"

// breakfast = "biscuits"
// lunch = "mousakka"
// dinner = "scouse"
// // breakfast = "biscuits"
// // lunch = "mousakka"
// // dinner = "scouse"
// console.log(`My breakfast is ${breakfast}, my lunch is ${lunch} and I am having ${dinner} for dinner.`)



// [2.3] Use appropriate data structures (arrays, objects) in their code

//#1

// let coffeOrder = [
//     "Alex - cortado",
//     "Ben - Cortado",
//     "Charlie- Whatever's new"
// ];

// coffeOrder.push("Tony - Macciato", "Len - black");
// for (let i = 0; i < coffeOrder.length; i++) {
//     console.log(coffeOrder[i]);
    
// }
// console.log(coffeOrder);


//#2

// let coffeOrder = ["Manuela - Mokka", "Ann - Vanilla Latte"]

// console.log(coffeOrder.length);

// console.log(coffeOrder[0]);
// console.log(coffeOrder[1]);
// console.log(coffeOrder[2]);

// coffeOrder.push("Donna - espresso");

// console.log(coffeOrder[2]);
// console.log(coffeOrder.length);

// coffeOrder.pop();

// console.log(coffeOrder.length);
// console.log(coffeOrder)


//#3

// let faveDrinks = ["tonic", "coke", "kofola"];
// for (let i = 0; i < faveDrinks.length; i++) {
    
//     console.log(faveDrinks[i])
// }


//#4

// let multiplesTwo = [];
// for (let i = 0; i < 20; i++) {
//     multiplesTwo.push[i];
// }
// console.log(`Even numbers between 0 and 20 are: ${multiplesTwo}.`);


// #5

//  const person = {
//         name : "Paul",
//         age : 18,
//         hobbies : "jenga",
//         favSongs : [
//             "I'm the mountain",
//             "Even flow",
//             "War pigs",
//             "Green Machine"
//         ],
//         sayHi() {
//             console.log(`Hello. My name is ${this.name}.`)
//     }
//     }
//     person.sayHi()
//     console.log(`My favourite songs are: ${person.favSongs}.`);


// #6 [2.10] Apply the return keyword appropriately & [2.12] Write clean, readable code

// const coffeShop = {
//     branch : "Liverpool",
//     drinks : [
//         "coke", 1.50,
//         "cofee", 2.50,
//         "fanta", 3.50,
//         "tea", 0.50,
//     ],
//     meals : [
//         "sandwitch", 2.50,
//         "toastie", 4,
//         "soup", 3,
//         "noodles", 2
//     ],

//     drinksOrdered(drink){
//         for (let i = 0; i < this.drinks.length; i++ ){
//             if (drink == this.drinks[i]){
//                 console.log(`We have the drink ${drink} and it will cost ${this.drinks[i+1]}`)
//                 return this.drinks[i+1]
//             }
//         }
//     },
//     foodOrdered(food){
//         for (let i = 0; i < this.meals.length; i++ ){
//             if (food == this.meals[i]){
//                 console.log(`We have the meal ${food} and it will cost ${this.meals[i+1]}`)
//                 return this.meals[i+1]
//             }
//         }
//     },
//     totalOrder(food, drink){
//         console.log(`Your total order is ${this.drinksOrdered(drink) + this.foodOrdered(food)}`)
//         // (`Your order is with ${totalOrder} with costs and costs ${}.`)
//     }
// }

// // coffeShop.drinksOrdered("tea")
// // coffeShop.foodOrdered("soup")
// coffeShop.totalOrder("noodles", "fanta")


// [2.4] Apply a range of built-in methods correctly (string methods, array methods)

// let num = 1001
// num = num.toString()
// let num2 = num.split("").reverse().join("")
// console.log(num2)
// if (num == num2){console.log("this is a palindrome.")}
// else {console.log("This is not a palindrome.")}

// let shoppingList = new Array ();
// shoppingList[0] = new Array ("potatoes", "tomatoes", "chives",);
// shoppingList[1] = new Array ("milk", "yoghurt","cheese");
// shoppingList[2] = new Array ("beer", "tonic","wine");

// console.log(The third item of the second list is: ${shoppingList[1][2]});


// [2.5] Use mathematical, comparison and logical operators

//#1

// let age = 15;
// while (age < 18) {
//     console.log(`you're a child ${age}`);
//     age++;
    
// }console.log("You're an adult " + age);


// #2

// let balance = 100
// let withdrawalAmount = 20
// balance = balance - withdrawalAmount
// console.log(balance)

// balance -= withdrawalAmount


// #3

// let password = "Liverpool";
// if (password.length < 8){
// console.log("password is too short")}
// else {console.log(password)}


// #4

// num = 25
// if (num % 3 == 0 || num % 5 == 0) {console.log("This number is divisible by 3 or 5.")}
// else {console.log("log something else.")}



// #5
// num = 15
// if (num % 3 == 0 && num % 5 == 0) {console.log("fizz buzz")}
// else if(num % 3 == 0) {console.log("fizz")}
// else if(num % 5 == 0) {console.log("buzz")}
// else {console.log("wrong answer")}



// [2.6] Use control flow (if/else, switch)

// #1

// num = 15
// if (num % 3 == 0 && num % 5 == 0) {console.log("fizz buzz")}
// else if(num % 3 == 0) {console.log("fizz")}
// else if(num % 5 == 0) {console.log("buzz")}
// else {console.log("wrong answer")}

// #2

// let topping = ("salami");
//  let topping = ("cheese");
// let topping = ("kiwi");

// switch(topping){
//         case "cheese":
//             console.log("These are important ingredients for my pizza.");
//         break;
//         case "salami":
//             console.log(`I do not mind having ${topping} on my pizza.`);
//         break;
//         case "kiwi":
//             console.log(`“${topping} should not be on a pizza`);
//             break;
//         default:
//             console.log("Have some pasta instead")
//         }



// [2.8] Work with both function declarations and arrow syntax
// [2.9] Use parameters and arguments in functions

// #1

// const dataChecker = (string, rank) => {
//     if (string == "codenation" && rank == 1)
//     console.log("template string")
//     else if (string == "codenation" && rank !== 1)
//     console.log("relevant template string")
// }
// dataChecker("codenation", 2)

// #2

let accountNum = 50449921;
let balance = 100;
let pin = 1234;

function ATM (amount, accNum) {
    if (pin === 1234 && balance >= amount)
    console.log(`Withdraw ${amount} from ${accNum}`);
    else console.log("incorrect pin")
}

ATM(20, accountNum);