# ✏️ Classwork: Spread Operator & Callback Functions

## 1. Spread Operator – Copy & Update
```js
// You have a list of fruits
const fruits = ["apple", "banana", "mango"];

// 👉 Task:
// 1. Make a copy of the array using the spread operator
// 2. Add a new fruit "orange" to the copied array
// 3. Print both arrays to show the original is not changed
```

---

## 2. Spread Operator – Merge Objects
```js
// You have two objects
const user = { name: "Alice", age: 20 };
const address = { city: "London", country: "UK" };

// 👉 Task:
// Use the spread operator to combine them into a new object
// Add an extra property: role = "student"
```

---

## 3. Callback Function – Process Numbers
```js
// Write a function processNumbers that takes an array of numbers
// and a callback function. It should apply the callback to each number
// and print the result.

function processNumbers(numbers, callback) {
  // TODO: loop through numbers and call callback
}

// Example usage:
processNumbers([1, 2, 3, 4], function(num) {
  console.log(num * 2); // should print 2, 4, 6, 8
});
```
