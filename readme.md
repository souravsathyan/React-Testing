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
