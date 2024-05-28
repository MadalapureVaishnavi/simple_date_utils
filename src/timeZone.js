const moment = require('moment-timezone');

function convertTimeZone(date, fromTimeZone, toTimeZone) {
    return moment.tz(date, fromTimeZone).tz(toTimeZone).format();
}

function getCurrentTimeInZone(timeZone) {
    return moment.tz(timeZone).format();
}

module.exports = {
    convertTimeZone,
    getCurrentTimeInZone
};
