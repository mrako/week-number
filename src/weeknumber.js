function getWeekNumber(date = new Date()) {
    // Create a copy of the date object
    let tempDate = new Date(date.valueOf());

    // Set to nearest Thursday: current date + 4 - current day number
    // Sunday is treated as week day 7
    tempDate.setDate(tempDate.getDate() + 4 - (tempDate.getDay() || 7));

    // Get first day of year
    let yearStart = new Date(tempDate.getFullYear(), 0, 1);

    // Calculate full weeks to nearest Thursday
    let weekNo = Math.ceil((((tempDate - yearStart) / 86400000) + 1) / 7);

    return weekNo;
}

module.exports = { getWeekNumber };
