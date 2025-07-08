## Change events

- when you using inline handlers, TypeScript can infer the event type automatically, so you do not need to explicitly type the event. This is a very common and idiomatic approach in React with TypeScript, especially for simple forms with many fields.
- Inline handlers: No need to type the event—TypeScript infers it.
  Named handlers: Type the event for clarity and reuse.

## non-null assertion:

The non-null assertion operator in TypeScript is the exclamation point (!) placed after a variable or expression, like this: gameType!.

What does it do?

It tells TypeScript: “I am certain this value is NOT null or undefined at this point, so don’t complain about possible null/undefined.”
It removes null and undefined from the type for that usage only.

example:

```ts
// gameType: "single-player" | "two-player" | null
<GameBoard gameType={gameType!} ... />
```

## Typing ForwardRef:

- forwardRef is a React utility that lets you pass a ref from a parent component down to a child component, so the parent can directly access a DOM node or a child component’s instance.

Typing with forwardRef
The generic syntax for forwardRef is:

```ts
forwardRef<RefType, PropsType>((props, ref) => { ... })
```

- RefType is the type of the ref you want to forward (e.g., HTMLDialogElement for a <dialog>).
- PropsType is the type of the props your component accepts.

ie:

```ts
const ModalReset = forwardRef<HTMLDialogElement, ModalResetProps>(
  (props, ref) => {
    // ...component code...
  }
);
```
