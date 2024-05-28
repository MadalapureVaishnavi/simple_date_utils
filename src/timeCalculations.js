const moment = require('moment');

function addTime(date, amount, unit) {
    return moment(date).add(amount, unit).toDate();
}

function subtractTime(date, amount, unit) {
    return moment(date).subtract(amount, unit).toDate();
}

function differenceInTime(date1, date2, unit) {
    return moment(date1).diff(moment(date2), unit);
}

module.exports = {
    addTime,
    subtractTime,
    differenceInTime
};
