const fs = require("fs");
const filename = "day04.txt";

let day04a = () => {
  // Read the file
  fs.readFile(filename, "utf8", function(err, data) {
    if (err) {
      throw err;
    } else {
      // Read data into an array
      let input = [];

      data
        .toString()
        .split("\n")
        .forEach((line) => {
          input.push(line.substring(0, line.length - 1));
        });

      // First, associate all dates to an id
      let ledger = {};

      input.forEach((record) => {
        if (record.includes("begins")) {
          // Grab info
          let curDate = new Date(record.substring(1, 11) + "Z");
          let curTime = record.substring(6, 17).split(" ")[1];
          let guardId = record.substring(
            record.indexOf("#") + 1,
            record.indexOf(" ", record.indexOf("#"))
          );

          // Associate date with id of guard (dates unique, ids not), handling early starts
          if (curTime.includes("23")) {
            ledger[getDateKey(curDate + 1)] = {
              id: guardId,
              wakeTimes: [],
              sleepTimes: [],
              extraTime: 60 - parseInt(curTime.split(":")[1])
            };
          } else {
            ledger[getDateKey(curDate)] = {
              id: guardId,
              wakeTimes: [],
              sleepTimes: []
            };
          }
        }
      });

      // console.log(Object.keys(ledger).sort().length);

      console.log(ledger);

      // Now store times
      input.forEach((record) => {
        // Grab info
        let curDate = new Date(record.substring(1, 11));
        let curTime = record.substring(6, 17).split(" ")[1];

        // console.log();

        // // Differentiate between wake/sleep
        if (record.includes("wakes")) {
        } else if (record.includes("falls")) {
          // ledger[curDate].sleepTimes.push(curTime);
        }
      });

      // console.log(ledger);
    }
  });
};

let getDateKey = (date) => {
  return date.getUTCMonth + "-" + date.getUTCDate;
};

day04a();
