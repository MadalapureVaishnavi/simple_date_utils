// test/dateFormatting.test.js
const { formatDate } = require('../src/dateFormatting');

test('formatDate should correctly format a date', () => {
    const date = new Date('2024-05-28T12:00:00Z');
    const result = formatDate(date, 'YYYY-MM-DD');
    expect(result).toBe('2024-05-28');
});
