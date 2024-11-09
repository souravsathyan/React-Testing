const getFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
};

const fullName = getFullName('John', 'Doe');
const expectedOut = 'JohnDoe';

if(expectedOut !== fullName) {
    throw new Error(`expected ${expectedOut} but got ${fullName}`);
}

