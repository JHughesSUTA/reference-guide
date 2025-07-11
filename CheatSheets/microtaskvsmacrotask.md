# 🔁 JavaScript Event Loop: Microtasks vs. Macrotasks Cheat Sheet

## 🧠 Execution Order Summary

1. Run all **synchronous** code (top-down)
2. Run all **microtasks** (in order)
3. Run one **macrotask** from the queue (then loop back to step 2)

---

## 🟦 Synchronous Code (runs first)

- `console.log()`
- Variable declarations
- Function calls

---

## 🟩 Microtasks (high priority — run right after sync)

- `Promise.then()`
- `Promise.catch()`
- `Promise.finally()`
- `queueMicrotask()`
- `MutationObserver` (in browser)

🧩 **Processed after the call stack clears**, but **before any macrotask** runs.

---

## 🟥 Macrotasks (lower priority)

- `setTimeout`
- `setInterval`
- `setImmediate` (Node.js)
- `requestAnimationFrame`
- DOM events (e.g. `click`, `scroll`)
- I/O (file/network)

🔁 Only one macrotask runs per tick before checking microtasks again.

---

## 🔍 Example Code

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout"); // Macrotask
}, 0);

Promise.resolve().then(() => {
  console.log("Promise"); // Microtask
});

console.log("End");
```

## Output:

```
Start
End
Promise
Timeout
```
