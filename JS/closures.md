# 📚 JavaScript Closures

## 🧠 What is a Closure?

A **closure** is a function that "remembers" the variables from the scope in which it was created — even after that outer scope has finished executing.

In simpler terms:

- A closure **"closes over"** its surrounding scope.
- It allows a function to **access variables from an outer function**, even **after** that outer function has returned.

---

## 🔧 Basic Example

```js
function outer() {
  const message = "Hello from outer!";

  function inner() {
    console.log(message); // inner can "see" message
  }

  return inner;
}

const greet = outer();  // outer runs, returns inner
greet();                // prints: Hello from outer!
```

### 💥 Why is this a closure? 
- When outer() is called, it returns the inner() function.
- Even though outer() has finished running, the greet() function still has access to the message variable.
- That’s the closure — inner() "remembers" the scope it was created in.


### ✅ Common Uses of Closures
- Data privacy (e.g. private variables)
- Event handlers inside loops
- Memoization and performance optimization
- Custom hooks in React