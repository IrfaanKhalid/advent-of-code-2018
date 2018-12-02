const fs = require("fs");

let day01a = () => {
  let filename = "./input/day01.txt";

  fs.readFile(filename, "utf8", function(err, data) {
    if (err) {
      throw err;
    } else {
      let frequency = 0;

      data
        .toString()
        .split("\n")
        .forEach((element) => {
          frequency += parseInt(element);
        });

      console.log(frequency);
    }
  });
};

let day01b = () => {
  let filename = "./input/day01.txt";

  fs.readFile(filename, "utf8", function(err, data) {
    if (err) {
      throw err;
    } else {
      let frequency = 0;
      let i = 0;
      let increments = data.toString().split("\n");
      let set = new Set();

      // Loop until the condition is met
      while (true) {
        // Get new frequency
        frequency += parseInt(increments[i]);

        // Check set for containment of this frequency
        if (!set.has(frequency)) {
          set.add(frequency);
        } else {
          console.log(frequency);
          break;
        }

        // Update index
        i = ++i % increments.length;
      }
    }
  });
};

day01a();
day01b();
