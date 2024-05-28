// src/utilities.js
const moment = require('moment');

function isValidDate(dateString, format) {
    return moment(dateString, format, true).isValid();
}

module.exports = {
    isValidDate
};
