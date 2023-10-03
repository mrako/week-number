function getWeekNumber(date = new Date()) {
      // Get Thursday of the target week
    const thursday = new Date(date);
    thursday.setDate(thursday.getDate() + 3 - (thursday.getDay() + 6) % 7);

    // Get the first Thursday of the year
    const yearStart = new Date(thursday.getFullYear(), 0, 4);

    // Calculate full weeks to the target Thursday
    const weekNumber = 1 + Math.round(((thursday - yearStart) / (24 * 60 * 60 * 1000) - 3 + (yearStart.getDay() + 6) % 7) / 7);

    return weekNumber;
}

module.exports = { getWeekNumber };
