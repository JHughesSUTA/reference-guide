// 🔰 Beginner Level

// 1. Object Destructuring
const user = { name: "Alice", age: 30, city: "Paris" };
const { name, age } = user;

// 2. Array Destructuring
const numbers = [10, 20, 30];
const [first, , third] = numbers;

// 3. Skipping Elements
const rgb = [255, 100, 50];
const [red, , blue] = rgb;


// 🧭 Intermediate Level

// 4. Default Values
const settings = { theme: "dark" };
const { theme, language = "en" } = settings;

// 5. Aliasing (Renaming)
const car = { make: "Toyota", model: "Corolla" };
const { make: brand } = car;

// 6. Nested Destructuring
const user2 = {
  name: "Bob",
  address: { city: "Berlin", zip: "12345" }
};
const {
  address: { city, zip }
} = user2;


// 🧪 Advanced Level

// 7. Destructuring Function Parameters
function displayUser({ name, email }) {
  console.log(`Name: ${name}, Email: ${email}`);
}
displayUser({ name: "Sarah", email: "sarah@example.com" });

// 8. Destructuring Arrays of Objects
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 28 }
];
const [, { name: secondPersonName }] = people;

// 9. Rest Pattern
const nums = [1, 2, 3, 4];
const [firstNum, ...restNums] = nums;


// 🧠 Challenge Level

// 10. Swapping Variables
let a = 5;
let b = 10;
[a, b] = [b, a];

// 11. Destructure from Function Return
function getCoordinates() {
  return [12, 34];
}
const [x, y] = getCoordinates();

// 12. Mixed Defaults & Nested Objects
const config = {
  options: {
    responsive: true
  }
};
const {
  options: {
    responsive = false,
    theme = "light"
  }
} = config;
