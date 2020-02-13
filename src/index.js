#!/usr/bin/env node

const commander = require("commander"),
  moment = require("moment");

/*
 * Converts any date format to decimal-date like in BEAST or R's lubridater package
 */

const defaultDateFormat = "YYYY-MM-DD";

var dateInput = undefined;

commander
  .arguments("<date>", "Input date")
  .action(cmd => {
    dateInput = cmd;       
  })
  .option(
    "-f --date-format <format>",
    "Date format (default is YYYY-MM-DD)",
    defaultDateFormat
  ).option(
    "-r --reverse",
    "Convert from decimal date to normal date"
  )


commander
  .on("--help", function() {
    console.log("");
    console.log("Examples:");
    console.log(
      'date-decimal 1984-09-20 -f YYYY-MM-DD'
    );
  })
  .parse(process.argv);


function decimalDateFormat(decimalDate, dateFormat) {

  // split integer and decimal
  let dateYear = moment(Math.floor(decimalDate), "YYYY");
  let dateDecimal = decimalDate - Math.floor(decimalDate)

  return moment(dateYear.year(), "YYYY").add(moment.duration(dateDecimal, 'years')).format(dateFormat);
  
}

function formatToDecimalDate(dateInput, dateFormat) {
  let date = moment(dateInput, commander.dateFormat);
  return parseInt(date.year()) + date.diff(moment(date.year(), "YYYY"), 'years', true);
}

if(commander.reverse) {
  console.log(decimalDateFormat(dateInput, commander.dateFormat));
  return
}

// Pretty print table
let decimalDateValue = formatToDecimalDate(dateInput, commander.dateFormat);
console.log(decimalDateValue);


