function getWeekNumber(date = new Date()) {
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const diff = date - startOfYear;
  const oneWeek = 1000 * 60 * 60 * 24 * 7;
  return Math.floor(diff / oneWeek) + 1;
}

function formatDate(date = new Date(), format = 'ISO') {
  switch (format.toUpperCase()) {
    case 'US':
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    case 'EU':
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    case 'ISO':
    default:
      return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  }
}

module.exports = {getWeekNumber, formatDate};
