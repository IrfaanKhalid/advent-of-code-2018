const fs = require("fs");
const filename = "day05.txt";

let day05a = () => {
  // Read the file
  fs.readFile(filename, "utf8", function(err, data) {
    if (err) {
      throw err;
    } else {
      let stack = [];

      data
        .toString()
        .split("")
        .forEach((ch) => {
          // Handle empty stack vs not
          if (stack.length === 0) {
            stack.push(ch);
          } else {
            // Grab top of stack
            let top = stack[stack.length - 1];

            // If characters react, pop; else, push ch
            if (ch === getReactiveUnit(top)) {
              stack.pop();
            } else {
              stack.push(ch);
            }
          }
        });

      console.log(stack.length);
    }
  });
};

let day05b = () => {
  // Read the file
  fs.readFile(filename, "utf8", function(err, data) {
    if (err) {
      throw err;
    } else {
      let alphabet = String.fromCharCode(...Array(123).keys())
        .slice(97)
        .split("");
      let smallest = Number.MAX_SAFE_INTEGER;

      alphabet.forEach((letter) => {
        let stack = [];

        data
          .toString()
          .split("")
          .forEach((ch) => {
            // Ignore the letter
            if (letter !== ch && letter !== getReactiveUnit(ch)) {
              // Handle empty stack vs not
              if (stack.length === 0) {
                stack.push(ch);
              } else {
                // Grab top of stack
                let top = stack[stack.length - 1];

                // If characters react, pop; else, push ch
                if (ch === getReactiveUnit(top)) {
                  stack.pop();
                } else {
                  stack.push(ch);
                }
              }
            }
          });

        smallest = Math.min(smallest, stack.length);
      });

      console.log(smallest);
    }
  });
};

let getReactiveUnit = (ch) => {
  if (ch === ch.toUpperCase()) {
    return ch.toLowerCase();
  } else {
    return ch.toUpperCase();
  }
};

day05a();
day05b();
