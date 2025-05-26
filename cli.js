#!/usr/bin/env node

const yargs = require('yargs');

const weeknumber = require('./src/weeknumber');

const argv = yargs(process.argv.slice(2))
  .usage('Usage: npx @hopefullyworks/week-number [options]')
  .example('npx @hopefullyworks/week-number', 'show the current week number')
  .example('npx @hopefullyworks/week-number -f EU', 'show the current week number and date in EU format (DD/MM/YYYY)')
  .option('f', {
    alias: 'format',
    describe: 'Date format (ISO, US, or EU)',
    type: 'string',
    default: 'ISO',
  })
  .help('h')
  .alias('h', 'help')
  .alias('v', 'version')
  .argv;

const currentDate = new Date();
const weekNum = weeknumber.getWeekNumber(currentDate);
const formattedDate = weeknumber.formatDate(currentDate, argv.format);

console.log(`The current week number is ${weekNum}. (${formattedDate})`);
