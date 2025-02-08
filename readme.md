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

--------------------------------------------------------------------------------

## 🏆 Test-Driven Development (TDD)

- Write **tests first**, then write the code
- Known as **Red-Green Testing**

  - Tests **fail (red)** initially
  - Code is written until tests **pass (green)**

--------------------------------------------------------------------------------

## 🚀 Running Tests

```sh
npm test
```

- Runs Jest in **watch mode** 📡

  - Automatically re-runs tests **when files change**
  - Executes **only the changed files**

### 🎯 Filtering Tests

Command       | Description
------------- | -----------------------------------
Press `p`     | Run tests by **filename**
Press `t`     | Run tests by **test name**
Press `o`     | Run tests only in **changed files**
`test.skip()` | Skip a test
`test.only()` | Run only a specific test

--------------------------------------------------------------------------------

## 🏷️ Grouping Tests

- Use `describe()` to group tests together
- Supports **nested tests** inside `describe()`

```javascript
describe("Group Name", () => {
  test("Test 1", () => { /* ... */ });
  test("Test 2", () => { /* ... */ });
});
```

### **Test Suites**

A **test suite** is one file that contains multiple tests.

--------------------------------------------------------------------------------

## 📄 Filename Conventions

Filename                  | Example
------------------------- | --------------------
`.test.js` or `.test.tsx` | `Component.test.js`
`.spec.js` or `.spec.tsx` | `Component.spec.tsx`
Inside `tests/` folder    | `tests/Component.js`

--------------------------------------------------------------------------------

## 📊 Code Coverage

Helps determine **how much code** has been tested.

- **Statement Coverage**: How many statements executed?
- **Branch Coverage**: How many branches covered?
- **Function Coverage**: How many functions tested?
- **Line Coverage**: How many lines executed?

```sh
npm test -- --coverage
```

--------------------------------------------------------------------------------

## ✅ Assertions

- Determines if code **passes or fails**
- Uses the `expect()` method
- Example:

```javascript
expect(sum(2, 2)).toBe(4);
```

📌 **More matchers:** [Jest Matchers](https://jestjs.io/docs/using-matchers)

--------------------------------------------------------------------------------

## 🛠️ What to Test?

✔️ **Check if a component renders** ✔️ **Test component behavior with props** ✔️ **Test component state changes** ✔️ **Ensure user interactions work correctly**

❌ **What Not to Test?**

- Third-party components (e.g., Material-UI)
- Non-user-facing code

--------------------------------------------------------------------------------

## 🔍 RTL Queries

**Methods to find elements in the DOM:**

### **Find a Single Element**

Query        | Description
------------ | ------------------------------------------------------------
`getBy...`   | Finds an element, **throws error** if none or multiple found
`queryBy...` | Finds an element, **returns null** if none found
`findBy...`  | Returns a **Promise**, waits for element to appear

### **Find Multiple Elements**

Query           | Description
--------------- | ------------------------------------------------------------------
`getAllBy...`   | Finds all matching elements, **throws error** if none found
`queryAllBy...` | Finds all matching elements, **returns empty array** if none found
`findAllBy...`  | Returns a **Promise**, waits for multiple elements

### **Query Types**

- `getByRole`, `getByLabelText`, `getByPlaceholderText`
- `getByText`, `getByDisplayValue`, `getByAltText`
- `getByTitle`, `getByTestId`

--------------------------------------------------------------------------------

## 🏗️ Debugging Tests

```javascript
screen.debug();
logRoles(view.container);
```

--------------------------------------------------------------------------------

## 🔥 `fireEvent` vs `user-event`

Feature                                      | fireEvent                                                 | user-event
-------------------------------------------- | --------------------------------------------------------- | --------------------------------
**Triggers events manually**                 | ✅                                                         | ❌
**Simulates real user interactions**         | ❌                                                         | ✅
**Includes extra checks (e.g., visibility)** | ❌                                                         | ✅
**Example**                                  | `fireEvent.change(input, { target: { value: 'hello' } })` | `userEvent.type(input, 'hello')`

📌 **Prefer `user-event` for realistic testing.**

--------------------------------------------------------------------------------

## 📌 Summary

- Use **Jest** for running tests
- Use **React Testing Library** to test React components
- **Write meaningful tests** (don't test implementation details)
- Use `getBy...`, `queryBy...`, and `findBy...` queries effectively
- Prefer `user-event` over `fireEvent` for user interactions

🚀 Happy Testing! 🎯
