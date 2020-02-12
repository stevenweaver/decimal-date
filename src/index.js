#!/usr/bin/env node

const commander = require("commander"),
  moment = require("moment");

/*
 * Converts any date format to decimal-date like in BEAST or R's lubridater package
 */

const default_date_format = "YYYY-MM-DD";

var date_input = undefined;

commander
  .arguments("<date>", "Input date")
  .action(cmd => {
    date_input = cmd;       
  })
  .option(
    "-f --date-format <format>",
    "Date format (default is YYYY-MM-DD)",
    default_date_format
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

let date = moment(date_input, commander.dateFormat);
let decimal_date_value =  parseInt(date.year()) + date.diff(moment(date.year(), "YYYY"), 'years', true);

// Pretty print table
console.log(decimal_date_value);
