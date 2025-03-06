function getWeekNumber(date = new Date()) {
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const diff = date - startOfYear;
  const oneWeek = 1000 * 60 * 60 * 24 * 7;
  return Math.floor(diff / oneWeek) + 1;
}

module.exports = {getWeekNumber};
