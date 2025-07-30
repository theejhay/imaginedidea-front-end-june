console.log("Hello World")

// comment
/*
    Hello Comment 

*/

//. Variables 
// let, var, const
// ES6 - ECMAScript 6
// LET and CONST (Block-Scoped Variable)
// var (Function Scoped)
// Before ES6 we use --var--

// let - changeable 
// const - unchangeable

// nReserved Keywords - if, let, else, switch

let my_name = "Taiwo";

console.log(my_name);

const city = "Lagos";
console.log(city);

console.log("My name is "  +  my_name + " and " + my_name + " is from Lagos State");

//  Template Literals
console.log(`My name is ${my_name} and ${my_name} is from Lagos State`);


// Data Types 
// Primitive Types (Value Types): They store single values and are copied by value
//e.g String, Number, Boolean, undefined, null

// Reference Types (Objects, Arrays, Function)
let name = "Taiwo"; // String
let age = 35; // Number
let isStudent = true; // Boolean
let address; // undefined
let job = null; // null

console.log(age);

// Reference Types
// Objects {}
// Arrays []

let person = {
    name: "Taiwo",
    age: 35,
    isStudent: true,
    address: "248 Liverpool Street, Yaba, Lagos",
    city: "Lagos",
    children: {
        name: "Johnny Junior",
        age: 10
    }
}

console.log(person.age);

// DOT Notations
console.log(person.isStudent);
// Bracket Notations
console.log(person["address"]);

// Modifying Objects 

// Add another Property to the Object 
person.gender = "Male";
person.country = "United States of America"

console.log(person.country);

// Change a value 
person.age = 40;

console.log(person.age)

// Delete a property 
delete person.age;

console.log(person.children.age);

// Object Methods 
let keys = Object.keys(person);
let values = Object.values(person);
let entries = Object.entries(person);
console.log(entries);

let validateName = Object.hasOwnProperty("name");

console.log(validateName);

// Javascript is dynamically typed,
// you can use typeof to check the data type of a variable

let x = 10;
console.log(typeof x);// Number

x = "hello";
console.log(typeof x); // String

let value;
console.log(typeof value); // undefined

value = null;
console.log(typeof value); // null

// What is wrong with this code ?
let data = 5;
data = true;
data = { name: "Alice" };

// Dynamic Typing 