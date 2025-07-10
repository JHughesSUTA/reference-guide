// 1. Loop
// Loop through an array and log each element
// Sum all numbers in an array using for...of

// 2. Map
// Double every number in an array

// 3. Reduce
// Sum all numbers in an array
// Turn array of strings into a sentence

// 4. Filter
// Get only even numbers from an array

// 5. Find
// Find the first number greater than 10.

// 6. Some
// Check if any number is negative

// 7. Every
// Check if all items are strings

// 8. Includes
// Check if the array contains the number 42

// 9. Sort
// Sort numbers in ascending order

// 10. Splice
// Remove 2 elements starting at index 1
// Insert "banana" at index 2.

// 11. Slice
// Get the first 3 elements of an array

// 12. Switch (Not an array method, but a control flow statement)
// Respond based on fruit type ie: // getFruitColor("banana") → "yellow"

// 13. Push
// Add a number to the end of an array

// 14. Continue
// Log only odd numbers

// 15. Join
// Join array of names into a CSV string

// 16. .at (Relatively new method in JavaScript)
// Get the last element in an array
// Get the second element

// ======================================= SOLUTIONS =======================================

// 1. Loop
function logElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function doubleNumbers(arr) {
  return arr.map((n) => n * 2);
}

// 2. Map
function doubleNumbers(arr) {
  return arr.map((n) => n * 2);
}

// 3. Reduce
function total(arr) {
  return arr.reduce((sum, n) => sum + n, 0);
}

function toSentence(words) {
  return words.reduce((acc, word) => acc + " " + word);
}

// 4. Filter
function onlyEvens(arr) {
  return arr.filter((n) => n % 2 === 0);
}

// 5. Find
function firstGreaterThanTen(arr) {
  return arr.find((n) => n > 10);
}

// 6. Some
function hasNegative(arr) {
  return arr.some((n) => n < 0);
}

// 7. Every
function allStrings(arr) {
  return arr.every((item) => typeof item === "string");
}

// 8. Includes
function hasAnswer(arr) {
  return arr.includes(42);
}

// 9. Sort
function sortAscending(arr) {
  return arr.sort((a, b) => a - b);
}

// 10. Splice
function removeTwo(arr) {
  arr.splice(1, 2);
  return arr;
}

function insertBanana(arr) {
  arr.splice(2, 0, "banana");
  return arr;
}

// 11. Slice
function firstThree(arr) {
  return arr.slice(0, 3);
}

// 12. Switch
function fruitColor(fruit) {
  switch (fruit) {
    case "apple":
      return "red";
    case "banana":
      return "yellow";
    default:
      return "unknown";
  }
}

// 13. Push
function addToEnd(arr, value) {
  arr.push(value);
  return arr;
}

// 14. Continue
function logOdds(arr) {
  for (let num of arr) {
    if (num % 2 === 0) continue;
    console.log(num);
  }
}

// 15. Join
function namesToCSV(names) {
  return names.join(", ");
}

// 16. .at (Relatively new method in JavaScript)
function getLast(arr) {
  return arr.at(-1);
}

function getSecond(arr) {
  return arr.at(1);
}
