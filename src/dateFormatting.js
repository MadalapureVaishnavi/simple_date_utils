// src/dateFormatting.js
const moment = require('moment');

function formatDate(date, format, locale) {
    let formattedDate = moment(date);

    if (locale) {
        formattedDate = formattedDate.locale(locale);
    }

    return formattedDate.format(format);
}

module.exports = {
    formatDate
};
