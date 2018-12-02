const fs = require("fs");
const filename = "day02.txt";

let day02a = () => {
  // Read the file
  fs.readFile(filename, "utf8", function(err, data) {
    if (err) {
      throw err;
    } else {
      // Count appearances
      let appearTwice = 0;
      let appearThrice = 0;

      // Split data line-by-line
      data
        .toString()
        .split("\n")
        .forEach((boxId) => {
          // Instantiate a map for this boxId
          let map = new Map();

          // Process each boxId char-by-char
          boxId.split("").forEach((character) => {
            if (map.get(character) === undefined) {
              map.set(character, 1);
            } else {
              map.set(character, map.get(character) + 1);
            }
          });

          // Store counts from map
          let values = map.values();
          let iter = values.next();
          let counts = [];

          while (!iter.done) {
            counts.push(iter.value);
            iter = values.next();
          }

          // Increment checksum values
          if (counts.includes(3)) {
            ++appearThrice;
          }

          if (counts.includes(2)) {
            ++appearTwice;
          }
        });

      console.log(appearTwice * appearThrice);
    }
  });
};

let day02b = () => {
  // Read the file
  fs.readFile(filename, "utf8", function(err, data) {
    if (err) {
      throw err;
    } else {
      // Store boxIds
      let boxIds = [];

      // Split data line-by-line
      data
        .toString()
        .split("\n")
        .forEach((boxId) => {
          boxIds.push(boxId);
        });

      // Compare each boxId until we hit our correct boxIds
      for (let i = 0; i < boxIds.length; ++i) {
        for (let j = 0 && j !== i; j < boxIds.length; ++j) {
          if (differByOne(boxIds[i], boxIds[j])) {
            console.log(getCommonLetters(boxIds[i], boxIds[j]));
            return;
          }
        }
      }
    }
  });
};

let differByOne = (str1, str2) => {
  let differences = 0;

  for (let i = 0; i < str1.length; ++i) {
    if (str1.charAt(i) !== str2.charAt(i)) {
      ++differences;
    }
  }

  return differences === 1;
};

let getCommonLetters = (str1, str2) => {
  let commonLetters = [];

  for (let i = 0; i < str1.length; ++i) {
    if (str1.charAt(i) === str2.charAt(i)) {
      commonLetters.push(str1.charAt(i));
    }
  }

  return commonLetters.join("").trim();
};

day02a();
day02b();
