# TypeScript Learning Guide

## Introduction

TypeScript is a statically typed superset of JavaScript that adds optional types, interfaces, and compile-time checks to JavaScript code. It's especially useful in large codebases or when working on teams.

---

## 1. **Getting Started**

### What to Know:

- TypeScript is a superset of JavaScript.
- Files use the `.ts` or `.tsx` (for React) extensions.

### How to Install:

```bash
npm install -g typescript
```

### Compile a File:

```bash
tsc filename.ts
```

---

## 2. **Basic Types**

### Types to Learn:

- `string`, `number`, `boolean`
- `any`, `unknown`, `void`, `never`
- `null`, `undefined`

### Example:

```ts
let age: number = 30;
let userName: string = "James";
let isLoggedIn: boolean = true;
```

---

## 3. **Type Inference**

TypeScript can infer types based on the value assigned.

```ts
let message = "Hello"; // inferred as string
```

---

## 4. **Functions and Typing**

```ts
function add(a: number, b: number): number {
  return a + b;
}

function logMessage(msg: string): void {
  console.log(msg);
}
```

---

## 5. **Interfaces & Types**

### Interfaces:

```ts
interface User {
  name: string;
  age: number;
}

const user: User = { name: "Alice", age: 25 };
```

### Type Aliases:

```ts
type ID = string | number;
let userId: ID = "abc123";
```

---

## 6. **Advanced Types**

- Union Types: `string | number`
- Intersection Types: `TypeA & TypeB`
- Literal Types: `'GET' | 'POST'`
- Enums:

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}
```

---

## 7. **Generics**

```ts
function identity<T>(arg: T): T {
  return arg;
}

const output = identity<string>("Hello");
```

---

## 8. **Type Assertions**

```ts
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;
```

---

## 9. **Working with React**

- Use `.tsx` files.
- Type props and state:

```tsx
type ButtonProps = {
  label: string;
};

const Button: React.FC<ButtonProps> = ({ label }) => <button>{label}</button>;
```

---

## 10. **Best Practices**

- Always enable `strict` mode in `tsconfig.json`.
- Prefer interfaces for object shapes.
- Use type inference where possible.
- Avoid `any` unless absolutely necessary.

---

## 11. **Resources**

- Official Docs: [https://www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/)
- TypeScript Playground: [https://www.typescriptlang.org/play](https://www.typescriptlang.org/play)
- Tutorials: TypeScript on MDN, freeCodeCamp, or TypeScript Handbook

---

Happy learning!

