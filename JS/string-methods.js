// Return the last character of a string.

// Return the middle character (or left of center for even lengths).

// Concatenate a first name and last name with a space.

// Join three words into a sentence.

// Check if a file ends with .jpg.

// Check if first 10 characters of a string end with "ing".

// Check if a sentence contains "hello".

// Check if "world" appears after the 5th character.

// Get first index of "a".

// Find the first "a" after index 3.

// Find last "e" in a word.

// Find last "e" before index 10.

// Repeat "ha" 5 times.

// Build a visual divider (like a loading bar).

// Replace "dog" with "cat".

// Replace first number with #.

// Replace all . with !.

// Replace all foo with bar.

// Find index of first digit.

// Find position of first capital letter.

// Get first 3 characters.

// Get last 3 characters.

// Split sentence into words.

// Get first two comma-separated values.

// Check if string starts with "http".

// Check if substring starting from position 5 starts with "abc".

// Extract characters from index 2 to 5.

// Try substring with start > end.

// Trim whitespace from both sides.

// Check if a user’s input is blank after trimming.

// ====================================================== SOLUTIONS ======================================================

// Return the last character of a string.
// function getLastChar(str) {
//   return str.charAt(str.length - 1);
// }

// Return the middle character (or left of center for even lengths).
// function getMiddleChar(str) {
//   return str.charAt(Math.floor(str.length / 2));
// }

// Concatenate a first name and last name with a space.
// function fullName(first, last) {
//   return first.concat(" ", last);
// }

// Join three words into a sentence.
// function makeSentence(a, b, c) {
//   return a.concat(" ", b, " ", c, ".");
// }

// Check if a file ends with .jpg.
// function isImage(fileName) {
//   return fileName.endsWith(".jpg");
// }

// Check if first 10 characters of a string end with "ing".
// function endsWithIngEarly(str) {
//   return str.endsWith("ing", 10);
// }

// Check if a sentence contains "hello".
// function hasHello(str) {
//   return str.includes("hello");
// }

// Check if "world" appears after the 5th character.
// function hasWorldAfterFive(str) {
//   return str.includes("world", 5);
// }

// Get first index of "a".
// function firstA(str) {
//   return str.indexOf("a");
// }

// Find the first "a" after index 3.
// function aAfterThree(str) {
//   return str.indexOf("a", 3);
// }

// Find last "e" in a word.
// function lastE(str) {
//   return str.lastIndexOf("e");
// }

// Find last "e" before index 10.
// function lastEBeforeTen(str) {
//   return str.lastIndexOf("e", 10);
// }

// Repeat "ha" 5 times.
// function laughing() {
//   return "ha".repeat(5);
// }

// Build a visual divider (like a loading bar).
// function getBar(length) {
//   return "-".repeat(length);
// }

// Replace "dog" with "cat".
// function replaceDog(str) {
//   return str.replace("dog", "cat");
// }

// Replace first number with #.
// function maskFirstDigit(str) {
//   return str.replace(/\d/, "#");
// }

// Replace all . with !.
// function replaceDots(str) {
//   return str.replaceAll(".", "!");
// }

// Replace all foo with bar.
// function swapFooBar(str) {
//   return str.replaceAll("foo", "bar");
// }

// Find index of first digit.
// function firstDigitIndex(str) {
//   return str.search(/\d/);
// }

// Find position of first capital letter.
// function firstCapitalIndex(str) {
//   return str.search(/[A-Z]/);
// }

// Get first 3 characters.
// function firstThree(str) {
//   return str.slice(0, 3);
// }

// Get last 3 characters.
// function lastThree(str) {
//   return str.slice(-3);
// }

// Split sentence into words.
// function words(str) {
//   return str.split(" ");
// }

// Get first two comma-separated values.
// function firstTwoCSV(str) {
//   return str.split(",", 2);
// }

// Check if string starts with "http".
// function isUrl(str) {
//   return str.startsWith("http");
// }

// Check if substring starting from position 5 starts with "abc".
// function startsAtFive(str) {
//   return str.startsWith("abc", 5);
// }

// Extract characters from index 2 to 5.
// function subFromTwoToFive(str) {
//   return str.substring(2, 5);
// }

// Try substring with start > end.
// function reversedRange(str) {
//   return str.substring(5, 2); // same as (2, 5)
// }

// Trim whitespace from both sides.
// function clean(str) {
//   return str.trim();
// }

// Check if a user’s input is blank after trimming.
// function isEmptyInput(str) {
//   return str.trim() === "";
// }
