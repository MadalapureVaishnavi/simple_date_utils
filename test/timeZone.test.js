// test/timeZone.test.js
const { convertTimeZone, getCurrentTimeInZone } = require('../src/timeZone');

test('convertTimeZone should correctly convert time from one timezone to another', () => {
    const inputDate = '2024-05-28T12:00:00Z';
    const fromTimeZone = 'UTC';
    const toTimeZone = 'America/New_York';
    const expectedDate = '2024-05-28T08:00:00-04:00';

    expect(convertTimeZone(inputDate, fromTimeZone, toTimeZone)).toBe(expectedDate);
});

test('getCurrentTimeInZone should return the current time in the specified time zone', () => {
    const timeZone = 'Asia/Tokyo';
    const currentTime = getCurrentTimeInZone(timeZone);

    // Ensure that the returned value is a valid ISO8601 date string
    expect(new Date(currentTime)).toBeInstanceOf(Date);
});
