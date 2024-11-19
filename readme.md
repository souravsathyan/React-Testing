# automated testing
 - when code not gives the desired output

#Anatomy of a test
 - test(name, function, timeout)
 - name used to identify the test
 - function => contains expectations to test
 - how long to wait before aborting the test

## example
 - test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

  - 'renders learn react link' = name
  - () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}
  -expectation function where react script plays
    - react script creates a virtual DOM 
        - by importing render from '@testing-library/react';
        - then we renders App component in render
        - we screen object which contains methods to query virtual DOM
  - test and expect are methods of jest, which globally created by the create react app 

  create react app use jest and react script combination 

# Test Driven Development
 - write test first then write the code
 - aka red-green testing as all tests goes from red failed state to green stat
 
 # what happens when npm test is run
  - jest starts in watch mode
  - what us watch mode 
    - every time a file changes, jest will run the tests
    - only execute those files which are changed

# FILTERING
we can run test by filename : by pressing the p in watch mode
by test name : by pressing t
test only in the change files : by pressing o
can skip the test by using the test.skip in global 
can test only those specific test by giving the test.only

# Grouping the tests
using the describe method
it accepts name and function to execute the test
we can also use the only and skip method
we can write nested test in side the describe

1 Test Suites is one file

# filename conventions
.test.js or .test.tsx
.spec.js or .spec.tsx
.js or .ts in folder __tests__

# Code Coverage
helps to unederstand how much of the code have been tested
- statement conerage: how much statement have been executed
- branches coverage:
-function coverage: how much functions covered
-line coverage: line of source code have been covered

