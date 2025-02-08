# Jest

- js testing framework
- test runner that finds, runs, determines whether the tests passed or failed and reports back.

# RTL

- react testing library
- creates a Virtual Dom fro tersting react componetns

# unit testing

- testing individual building blocks of app such as function or components
- tested in isolation independent of other componetns
- short time and easy to pinpoint failures

# Integration test

# end to end testing

- test entire workflow

# automated testing

- when code not gives the desired output

# Anatomy of a test

- test(name, function, timeout)
- name used to identify the test
- function => contains expectations to test
- how long to wait before aborting the test
- screen is used to query the virtual DOM

## test and expect is global function provided by the jset

# Test Driven Development

- write test first then write the code
- aka red-green testing as all tests goes from red failed state to green stat

  # what happens when npm test is run

  - jest starts in watch mode
  - what us watch mode

    - every time a file changes, jest will run the tests
    - only execute those files which are changed

# FILTERING

we can run test by filename : by pressing the p in watch mode by test name : by pressing t test only in the change files : by pressing o can skip the test by using the test.skip in global can test only those specific test by giving the test.only

# Grouping the tests

using the describe method it accepts name and function to execute the test we can also use the only and skip method we can write nested test in side the describe

1 Test Suites is one file

# filename conventions

.test.js or .test.tsx .spec.js or .spec.tsx .js or .ts in folder **tests**

# Code Coverage

helps to unederstand how much of the code have been tested

- statement conerage: how much statement have been executed
- branches coverage: -function coverage: how much functions covered -line coverage: line of source code have been covered
- function coverage
- line coverage

# Assertion

- decides he code pass or fails
- carried out by expect method
- it accepts a value (dom node) that teh code produces
- visit jest.co.io/docs/using-matches for more match cases
- jest outof the box only provides testing for js not the UI and Dom

# what to test

- check if the component renders
- test component renders with props
- test component rendering in different states
- test component reacts to events

# what not to test

thrid party codes like MUI components not important Pov of user

# RTL Queries

queries are methods that testing library provides to find element on the page to find single element : getBy, queryBy, findBy to find multiple elements : getAllBy, queryAllBy, findAllBy are used

# getBy... queries

a class of queries return the matching node for a query, and throw a descriptive error if no elements match or if more than one match id found by default , many semantic elements in html have a role button - button role, anchor - link role etc. if elements have no role then role attribute can be used

- test the behaviour
- 3rd party code eg. MUI components instead test he components that uses the MUI components
- code that is not important from users pov -

## every test we write include

- render the component
- find and element rendered by the component
- assertion against a value we pass by

# RTL queries

- are methods that provided by the testing lib. to find element on page
- to find a single element

  - getBy..
  - queryBy..
  - findBy..

- to find multiple elements

  - getAllBy..
  - queryAllBy..
  - findAllBy..

- SUffix can be Role, labelText, PlaceholderText, Text, DisplayValue, AltText, Title, TestId

# getBy.. Queries

- class of queries returns matching node for query
- throws error if no match found or multiple match found

# getByRole query

- quries elements for given role.
- Roles refers to ARIA roles : define purpose or behavior of html element for screen reader.
- by default html elements have roles.
- we can give role to elements that do not have roles
- eg: to use an anchor element as button we can add role="button" -

# getByRole Options

- name

  - accessible name is equal to aria-label, label name, text content -

# getByAltText

- returns element that has alt text
- only supports which have alt attribute like img, input, area etc. -

# Priority of queries

- getByRole
- getByLabelText
- getByPlaceholderText
- getByText
- getByDisplayValue
- getByAltText
- getByTitle
- getByTestId
