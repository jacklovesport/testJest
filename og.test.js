const capitalize = require('./capitalize.js')
test('capitalizes the first letter', () => {
    expect(capitalize('jason')).toBe('Jason');
})

const reverseString = require('./reverseString.js')
test('reverses the order of the string', () => {
    expect(reverseString('jason')).toBe('nosaj');
})

const {add, subtract, divide, multiply} = require('./math.js')

test('add 1 + 2 to equal 3', () => {
    expect(add(1,2)).toBe(3);
})

test('subtract 5 - 2 to equal 3', () => {
    expect(subtract(5,2)).toBe(3);
})

test('divide 10 / 5 to equal 2', () => {
    expect(divide(10, 5)).toBe(2);
})

test('multiply 2 * 4 to equal 8', () => {
    expect(multiply(2, 4)).toBe(8);
})