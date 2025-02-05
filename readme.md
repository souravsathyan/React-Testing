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

- test the behaviour
- 3rd party code eg. MUI components instead test he components that uses the MUI components
- code that is not important from users pov -
