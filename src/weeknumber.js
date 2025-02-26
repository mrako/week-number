function getWeekNumber(date = new Date()) {
  // Create a copy of the date to avoid modifying the input
  date = new Date(date.getTime());

  // Thursday in current week decides the year
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);

  // January 4 is always in week 1
  var week1 = new Date(date.getFullYear(), 0, 4);

  // Adjust to Thursday in week 1 and count number of weeks from date to week1
  week1.setDate(week1.getDate() + 3 - (week1.getDay() + 6) % 7);

  // Calculate full weeks to nearest Thursday
  var weekNumber = 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);

  return weekNumber;
}

module.exports = {getWeekNumber};
