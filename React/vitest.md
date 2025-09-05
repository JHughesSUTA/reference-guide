# Getting Started:

## install

```
npm install --save-dev vitest @testing-library/react @testing-library/user-event @testing-library/jest-dom jsdom
```

## create file vitest.config.js

```js
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    environment: "jsdom",
  },
});
```

## update package.json

in scripts:

```
"test": "vitest"
```

## on each test file, import:

```js
import { render, screen } from "@testing-library/react";
// import the component you're testing
import Greeting from "./Greeting";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
```
