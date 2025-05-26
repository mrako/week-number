const weeknumber = require('../src/weeknumber');

describe('getWeekNumber', () => {
  it('should return current week if no date is given', () => {
    const currentDate = new Date();
    const currentWeek = weeknumber.getWeekNumber();
    expect(weeknumber.getWeekNumber(currentDate)).toEqual(currentWeek);
  });

  it('should return correct week for Thursday in 2023', async () => {
    const date = new Date("2023-06-22T12:00:00.000");
    expect(weeknumber.getWeekNumber(date)).toEqual(25);
  });

  it('should return correct week for a leap year', () => {
    const date = new Date("2020-02-29T00:00:00.000");
    expect(weeknumber.getWeekNumber(date)).toEqual(9);
  });

  it('should return week 1 for the first week of 2023 with at least 4 days', () => {
    const date = new Date("2023-01-02T00:00:00.000");
    expect(weeknumber.getWeekNumber(date)).toEqual(1);
  });
});

describe('formatDate', () => {
  it('should format date in ISO format by default', () => {
    const date = new Date("2023-06-22T12:00:00.000");
    expect(weeknumber.formatDate(date)).toEqual('2023-06-22');
  });

  it('should format date in US format', () => {
    const date = new Date("2023-06-22T12:00:00.000");
    expect(weeknumber.formatDate(date, 'US')).toEqual('6/22/2023');
  });

  it('should format date in EU format', () => {
    const date = new Date("2023-06-22T12:00:00.000");
    expect(weeknumber.formatDate(date, 'EU')).toEqual('22/6/2023');
  });

  it('should use ISO format for unknown format types', () => {
    const date = new Date("2023-06-22T12:00:00.000");
    expect(weeknumber.formatDate(date, 'UNKNOWN')).toEqual('2023-06-22');
  });
});
