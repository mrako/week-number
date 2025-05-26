# Week number

This tool displays the current week number.

## Usage

### CLI
```
npx @hopefullyworks/week-number [options]
```

Options:
- `-f, --format` - Date format (ISO, US, or EU). Default: ISO

Examples:
```
npx @hopefullyworks/week-number
npx @hopefullyworks/week-number -f EU
```

### Web
The web interface displays the current week number and allows selecting between different date formats:
- ISO (YYYY-MM-DD)
- US (MM/DD/YYYY)
- EU (DD/MM/YYYY)

URL parameters:
- `date` - Specify a custom date
- `format` - Specify a date format (ISO, US, EU)

Example:
```
https://week-number.herokuapp.com/?date=2023-06-22&format=EU
```
