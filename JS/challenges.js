// ============== CHALLENGE 1 ==============

// Write a function called makeCounter that:
// - Returns another function (the counter)
// - Each time you call that returned function, it increments a number by 1 and returns it
// - It remembers the count using a closure — so the value persists across calls

// Solution:
const makeCounter = () => {
  let count = 0;

  const increment = () => {
    count++;
    return count;
  };

  return increment;
};

const counter = makeCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// explanation
// When you do const counter = makeCounter(), you're storing a reference to one specific counter function. That function has its own private count variable trapped in its closure.

const counter = makeCounter(); // Creates ONE counter with its own 'count'

console.log(counter()); // 1 - increments THIS counter's count
console.log(counter()); // 2 - increments the SAME counter's count
console.log(counter()); // 3 - increments the SAME counter's count


// ============== CHALLENGE 2 ==============
// What will this code log, and why? 
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

// solution:
// Start
// End
// Promise
// Timeout

// Explanation:
// Synchronous → logs immediately
console.log("Start"); 

// Goes into the task queue (aka macro task queue)
// Will run after the current stack is clear and all microtasks are done
setTimeout(() => {
  console.log("Timeout");
}, 0);


// then() is added to the microtask queue
// Microtasks always run before macrotasks, right after the current synchronous code finishes
Promise.resolve().then(() => {
  console.log("Promise");
});

// Also synchronous → runs right away 
console.log("End");

// EVENT LOOP IN ACTION: 
// The event loop manages the order like this:
// - Run all synchronous code (Start, End)
// - Then run all microtasks (Promise)
// - Then run the next macrotask (Timeout)
// - So that’s why the output is: start - end - promise - timeout

// Microtasks:
// - .then() from promises
// queueMicrotask()
// MutationObserver callbacks (used in the DOM)

// Macrotasks
// Then the browser checks the macrotask queue (also called the task queue). This includes:
// setTimeout
// setInterval
// setImmediate (Node.js only)
// I/O events
// UI rendering

// Real-Life Analogy:
// Imagine the microtask queue as "urgent follow-up tasks" that must be handled immediately after the current task.
// Macrotasks are like "reminders on your phone" — they'll wait their turn until everything else is done.



// ============== CHALLENGE 3 ==============
// What will this code log, and why?

async function asyncFunc() {
  console.log("1");

  setTimeout(() => {
    console.log("2");
  }, 0);

  await Promise.resolve();
  console.log("3");
}

console.log("4");
asyncFunc();
console.log("5");


// Answer:
// 4;
// 1;
// 5;
// 3;
// 2;

// Explanation: 
// 1. console.log("4");
// Runs first — it’s at the top-level of the script (synchronous).

// 2. asyncFunc();
// Calling the async function triggers execution of asyncFunc.

// 3. Inside asyncFunc:
// console.log("1"); runs immediately ✅

// setTimeout(..., 0) is scheduled as a macrotask ✅

// await Promise.resolve(); is reached:

// The rest of the function (line console.log("3")) is deferred to the microtask queue. ✅

// So far the log is:
// 4
// 1

// 4. console.log("5");
// This is still top-level synchronous code, so it runs next. ✅

// Now we’ve got:
// 4
// 1
// 5

// 5. await Promise.resolve(); resumes and runs console.log("3");
// This happens next, as it's a microtask after the current call stack is empty.

// Add:
// 3

// 6. The setTimeout(..., 0) callback runs (macrotask), logging 2.
// Final result:
// 4
// 1
// 5
// 3
// 2


