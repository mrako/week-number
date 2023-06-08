const getWeekNumber = (date = new Date()) => {
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  const startOfYear = new Date(date.getFullYear(), 0, 4);
  const weekNumber = 1 + Math.round(((date - startOfYear) / 86400000 - 3 + (startOfYear.getDay() + 6) % 7) / 7);
  return weekNumber;
};

module.exports = { getWeekNumber };
