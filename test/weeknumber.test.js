let weeknumber = require('../src/weeknumber');

describe('getNumberOfWeek', () => {
  it('should return one for the first week of the year', async () => {
    const date = new Date("1/1/2021")
    
    expect(weeknumber.getNumberOfWeek(date)).toEqual(1)
  });
});
