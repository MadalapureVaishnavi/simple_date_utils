// const { convertTimeZone, getCurrentTimeInZone } = require('simple-date-utils/timeZone');
// const { formatDate } = require('simple-date-utils/dateFormatting');
// const { addTime, subtractTime, differenceInTime } = require('simple-date-utils/timeCalculations');
// const { isValidDate, startOf, endOf, parseDate } = require('simple-date-utils/utilities');

// // Time Zone Conversion
// console.log(convertTimeZone('2024-05-28T12:00:00Z', 'UTC', 'America/New_York'));
// console.log(getCurrentTimeInZone('Asia/Tokyo'));

// // Date Formatting
// console.log(formatDate(new Date(), 'YYYY-MM-DD', 'en'));

// // Time Calculations
// console.log(addTime(new Date(), 5, 'days'));
// console.log(subtractTime(new Date(), 3, 'months'));
// console.log(differenceInTime(new Date(), new Date('2024-01-01'), 'days'));

// // Utilities
// console.log(isValidDate('2024-05-28'));
// console.log(startOf('month', new Date()));
// console.log(endOf('year', new Date()));
// console.log(parseDate('2024-05-28', 'YYYY-MM-DD'));



// Import and re-export modules
const timeZone = require('./timeZone');
const dateFormatting = require('./dateFormatting');
const timeCalculations = require('./timeCalculations');
const utilities = require('./utilities');

module.exports = {
    timeZone,
    dateFormatting,
    timeCalculations,
    utilities
};
