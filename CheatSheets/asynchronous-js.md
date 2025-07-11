# ⚡ JavaScript Asynchronous Programming Cheat Sheet

## 🧠 What is Asynchronous JavaScript?

JavaScript runs in a **single thread**, so it can't do two things at once.  
Asynchronous code lets you **schedule** things to happen later (e.g., after a network request or timeout) without blocking the main thread.

---

## 📦 Promises

A **Promise** represents a value that may be available now, later, or never.

### ✅ Creating a Promise

```js
const myPromise = new Promise((resolve, reject) => {
  // async task...
  if (success) {
    resolve("It worked!");
  } else {
    reject("Something went wrong.");
  }
});
```

### 🔄 Consuming a Promise

```js
myPromise
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Cleanup always runs.");
  });
```

### ⏳ Promise States

pending - initial state
fulfilled - resolve() was called
rejected - reject() was called

## ✨ async/await (built on Promises)

### ✅ Declaring an async function

```js
async function fetchData() {
  const res = await fetch("/api/data");
  const json = await res.json();
  return json;
}
```

### 🔄 Calling async functions

```js
fetchData()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

await pauses the function until the Promise resolves or rejects.

### 🔁 await Always Returns a Promise

```js
await 42; // → wraps 42 in Promise.resolve(42)
await Promise.resolve(7); // → 7
```

Even if the value is already available, await yields execution and resumes later as a microtask.

### 🧩 Microtasks vs Macrotasks

| Queue     | Examples                              | Run after...         |
| --------- | ------------------------------------- | -------------------- |
| Microtask | Promise.then, await, queueMicrotask() | current stack clears |
| Macrotask | setTimeout, setInterval               | all microtasks       |

### 🧪 Example Execution Order

```js
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");
```

### ✅ Output:

```
1
4
3
2
```

### 🚫 Common Mistakes
- ❌ Forgetting to await an async call
- ❌ Mixing then() and await inconsistently
- ❌ Assuming setTimeout(..., 0) runs instantly

### ✅ Tips
- Use async/await for readability
- Handle errors with try/catch inside async functions
- await is only valid inside async functions
- Use Promise.all() to run async tasks in parallel
```js
const [user, posts] = await Promise.all([getUser(), getPosts()]);
```

### 📘 Related Methods
- Promise.all() – waits for all promises to resolve
- Promise.race() – resolves as soon as one resolves/rejects
- Promise.allSettled() – waits for all, regardless of outcome