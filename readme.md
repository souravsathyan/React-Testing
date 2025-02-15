---
- Tests individual **building blocks** (functions or components)
- Runs **in isolation** from other components
- Quick execution and **easy to pinpoint failures**
- Tests **multiple components** or modules together
- Ensures they work correctly as a unit
- Tests the **entire workflow** of an application
- Runs tests **automatically** to verify expected output
---

# Jest & React Testing Library (RTL)

## 📌 Jest

Jest is a **JavaScript testing framework** and a **test runner** that:

- Finds and runs tests
- Determines whether the tests pass or fail
- Reports back the results

## 📌 React Testing Library (RTL)

RTL is a **testing utility for React** that:

- Creates a **Virtual DOM** for testing React components
- Encourages testing components **from the user's perspective**

## ⚙️ Anatomy of a Test

```javascript
test(name, function, timeout)
```

- `name`: Identifies the test
- `function`: Contains **expectations** to test
- `timeout`: Specifies how long to wait before aborting the test
- `screen`: Used to **query the Virtual DOM**

### 🌟 Jest provides global functions:

- `test()` – Defines a test case
- `expect()` – Defines assertions

---

## 🏆 Test-Driven Development (TDD)

- Write **tests first**, then write the code
- Known as **Red-Green Testing**

  - Tests **fail (red)** initially
  - Code is written until tests **pass (green)**

---

## 🚀 Running Tests

```sh
npm test
```

- Runs Jest in **watch mode** 📡

  - Automatically re-runs tests **when files change**
  - Executes **only the changed files**

### 🎯 Filtering Tests

| Command       | Description                         |
| ------------- | ----------------------------------- |
| Press `p`     | Run tests by **filename**           |
| Press `t`     | Run tests by **test name**          |
| Press `o`     | Run tests only in **changed files** |
| `test.skip()` | Skip a test                         |
| `test.only()` | Run only a specific test            |

---

## 🏷️ Grouping Tests

- Use `describe()` to group tests together
- Supports **nested tests** inside `describe()`

```javascript
describe("Group Name", () => {
  test("Test 1", () => {
    /* ... */
  });
  test("Test 2", () => {
    /* ... */
  });
});
```

### **Test Suites**

A **test suite** is one file that contains multiple tests.

---

## 📄 Filename Conventions

| Filename                  | Example              |
| ------------------------- | -------------------- |
| `.test.js` or `.test.tsx` | `Component.test.js`  |
| `.spec.js` or `.spec.tsx` | `Component.spec.tsx` |
| Inside `tests/` folder    | `tests/Component.js` |

---

## 📊 Code Coverage

Helps determine **how much code** has been tested.

- **Statement Coverage**: How many statements executed?
- **Branch Coverage**: How many branches covered?
- **Function Coverage**: How many functions tested?
- **Line Coverage**: How many lines executed?

```sh
npm test -- --coverage
```

---

## ✅ Assertions

- Determines if code **passes or fails**
- Uses the `expect()` method
- Example:

```javascript
expect(sum(2, 2)).toBe(4);
```

📌 **More matchers:** [Jest Matchers](https://jestjs.io/docs/using-matchers)

---

## 🛠️ What to Test?

✔️ **Check if a component renders** ✔️ **Test component behavior with props** ✔️ **Test component state changes** ✔️ **Ensure user interactions work correctly**

❌ **What Not to Test?**

- Third-party components (e.g., Material-UI)
- Non-user-facing code

---

## 🔍 RTL Queries

**Methods to find elements in the DOM:**

### **Find a Single Element**

| Query        | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| `getBy...`   | Finds an element, **throws error** if none or multiple found |
| `queryBy...` | Finds an element, **returns null** if none found             |
| `findBy...`  | Returns a **Promise**, waits for element to appear           |

### **Find Multiple Elements**

| Query           | Description                                                        |
| --------------- | ------------------------------------------------------------------ |
| `getAllBy...`   | Finds all matching elements, **throws error** if none found        |
| `queryAllBy...` | Finds all matching elements, **returns empty array** if none found |
| `findAllBy...`  | Returns a **Promise**, waits for multiple elements                 |

### **Query Types**

- `getByRole`, `getByLabelText`, `getByPlaceholderText`
- `getByText`, `getByDisplayValue`, `getByAltText`
- `getByTitle`, `getByTestId`

---

## 🏗️ Debugging Tests

```javascript
screen.debug();
logRoles(view.container);
```

---

## 🔥 `fireEvent` vs `user-event`

| Feature                                      | fireEvent                                                 | user-event                       |
| -------------------------------------------- | --------------------------------------------------------- | -------------------------------- |
| **Triggers events manually**                 | ✅                                                        | ❌                               |
| **Simulates real user interactions**         | ❌                                                        | ✅                               |
| **Includes extra checks (e.g., visibility)** | ❌                                                        | ✅                               |
| **Example**                                  | `fireEvent.change(input, { target: { value: 'hello' } })` | `userEvent.type(input, 'hello')` |

📌 **Prefer `user-event` for realistic testing.**

# User Event in CRA

`user-event` is automatically installed by Create React App (CRA) and provides utilities for simulating user interactions in tests.

## 📌 Keyboard Interactions

### **Utility API**

#### `type(element, text)`

Types the given `text` into an `input` or `textarea` element.

```js
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("types into input", async () => {
  render(<input placeholder="Type here" />);
  const input = screen.getByPlaceholderText("Type here");
  await userEvent.type(input, "Hello, World!");
  expect(input).toHaveValue("Hello, World!");
});
```

#### `clear(element)`

Clears the value of an input field.

```js
test("clears input value", async () => {
  render(<input defaultValue="Hello" />);
  const input = screen.getByDisplayValue("Hello");
  await userEvent.clear(input);
  expect(input).toHaveValue("");
});
```

#### `selectOptions(select, values)`

Selects one or more options in a `<select>` element.

```js
test("selects an option", async () => {
  render(
    <select>
      <option value="1">One</option>
      <option value="2">Two</option>
    </select>
  );
  const select = screen.getByRole("combobox");
  await userEvent.selectOptions(select, "2");
  expect(select).toHaveValue("2");
});
```

#### `deselectOptions(select, values)`

Deselects options in a `<select multiple>` element.

```js
test("deselects an option", async () => {
  render(
    <select multiple>
      <option value="1">One</option>
      <option value="2" selected>
        Two
      </option>
    </select>
  );
  const select = screen.getByRole("listbox");
  await userEvent.deselectOptions(select, "2");
  expect(select).not.toHaveValue("2");
});
```

#### `upload(element, file)`

Simulates file upload.

```js
test("uploads a file", async () => {
  render(<input type="file" />);
  const fileInput = screen.getByLabelText("File Upload");
  const file = new File(["hello"], "hello.txt", { type: "text/plain" });
  await userEvent.upload(fileInput, file);
  expect(fileInput.files[0]).toBe(file);
});
```

---

## 📌 Clipboard API

#### `copy(element)`

Simulates copying selected text.

```js
test("copies text", async () => {
  render(<input defaultValue="Copy this" />);
  const input = screen.getByDisplayValue("Copy this");
  await userEvent.copy(input);
  // Check clipboard state in supported environments
});
```

#### `cut(element)`

Cuts the selected text.

```js
test("cuts text", async () => {
  render(<input defaultValue="Cut this" />);
  const input = screen.getByDisplayValue("Cut this");
  await userEvent.cut(input);
  expect(input).toHaveValue("");
});
```

#### `paste(element, text)`

Simulates pasting text into an input field.

```js
test("pastes text", async () => {
  render(<input />);
  const input = screen.getByRole("textbox");
  await userEvent.paste(input, "Pasted text");
  expect(input).toHaveValue("Pasted text");
});
```

---

## 📌 Convenience API

#### `tab()`

Simulates tabbing through elements.

```js
test("tabs through fields", async () => {
  render(
    <>
      <input placeholder="First" />
      <input placeholder="Second" />
    </>
  );
  const [first, second] = screen.getAllByRole("textbox");
  first.focus();
  await userEvent.tab();
  expect(second).toHaveFocus();
});
```

#### `hover(element)`

Simulates hovering over an element.

```js
test("hovers over button", async () => {
  render(<button title="Hovered!">Hover me</button>);
  const button = screen.getByRole("button");
  await userEvent.hover(button);
  expect(button).toHaveAttribute("title", "Hovered!");
});
```

#### `dblClick(element)`

Simulates double-clicking an element.

```js
test("double-clicks button", async () => {
  const handleClick = jest.fn();
  render(<button onDoubleClick={handleClick}>Double Click</button>);
  const button = screen.getByText("Double Click");
  await userEvent.dblClick(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

#### `click(element)`

Simulates a mouse click.

```js
test("clicks button", async () => {
  const handleClick = jest.fn();
  render(<button onClick={handleClick}>Click Me</button>);
  const button = screen.getByText("Click Me");
  await userEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

## 📌 RenderHook

- for testing the custom hooks
- wraps the hooks for testing
- returns a property called result
- it have a current property which contain all the returned values

```
describe('useCounter',()=>{
   test('should render the inital count',()=>{
       const {result} = renderHook(useCounter);
       expect(result.current.count).toBe(0);
   })
})
```

- initialProp for accepting props in hooks

```
test("should accept and render the inital count", () => {
   const { result } = renderHook(useCounter, {
     initialProps: { initialCount: 10 },
   });
   expect(result.current.count).toBe(10);
 });
```

 - **act()**
  - tasks like rendering, user events, or data fetching can be considered as “units” of interaction with a user interface
  - react-dom/test-utils provides a helper called act() that makes sure all updates related to these “units” have been processed and applied to the DOM before you make any assertions  
  - its a helper function which updates the process before the assertions are made
  

---

## 📌 Summary

- Use **Jest** for running tests
- Use **React Testing Library** to test React components
- **Write meaningful tests** (don't test implementation details)
- Use `getBy...`, `queryBy...`, and `findBy...` queries effectively
- Prefer `user-event` over `fireEvent` for user interactions

🚀 Happy Testing! 🎯
