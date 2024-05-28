// test/timeCalculations.test.js
const { addTime, subtractTime, differenceInTime } = require('../src/timeCalculations');

test('addTime should correctly add time to a date', () => {
    const date = new Date('2024-05-28T12:00:00Z');
    const result = addTime(date, 5, 'days');
    expect(result).toEqual(new Date('2024-06-02T12:00:00Z'));
});

test('subtractTime should correctly subtract time from a date', () => {
    const date = new Date('2024-05-28T12:00:00Z');
    const result = subtractTime(date, 3, 'months');
    expect(result).toEqual(new Date('2024-02-28T12:00:00Z'));
});

test('differenceInTime should correctly calculate the difference between two dates', () => {
    const date1 = new Date('2024-05-28T12:00:00Z');
    const date2 = new Date('2024-01-01T00:00:00Z');
    const result = differenceInTime(date1, date2, 'days');
    expect(result).toBe(148);
});
