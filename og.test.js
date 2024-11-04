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

const caesarCipher = require('./caesarCipher.js');

describe('caesarCipher', () => {
    test('encrypts "HELLO" with a shift of 3 to "KHOOR"', () => {
        expect(caesarCipher("HELLO", 3)).toBe("KHOOR");
    });

    test('encrypts "hello" with a shift of 3 to "khoor"', () => {
        expect(caesarCipher("hello", 3)).toBe("khoor");
    });

    test('handles wrap-around from Z to A', () => {
        expect(caesarCipher("XYZ", 3)).toBe("ABC");
    });

    test('handles wrap-around from z to a', () => {
        expect(caesarCipher("xyz", 3)).toBe("abc");
    });

    test('keeps non-alphabet characters unchanged', () => {
        expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
    });

    test('handles negative shifts correctly', () => {
        expect(caesarCipher("KHOOR", -3)).toBe("HELLO");
    });

    test('normalizes shift larger than 26', () => {
        expect(caesarCipher("HELLO", 29)).toBe("KHOOR"); 
    });

});
