// test/utilities.test.js
const { isValidDate } = require('../src/utilities');

test('isValidDate should return true for a valid date string', () => {
    expect(isValidDate('2024-05-28', 'YYYY-MM-DD')).toBe(true);
});

test('isValidDate should return false for an invalid date string', () => {
    expect(isValidDate('invalid-date', 'YYYY-MM-DD')).toBe(false);
});
