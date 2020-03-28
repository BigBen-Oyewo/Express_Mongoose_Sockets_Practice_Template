// There are multiple ways we can export code using module.exports. Here are a couple of ways below we can export multiple functions using an object:

module.exports.greet = function() {
  console.log("Hello! We are exporting a function called Greet.");
};

module.exports.add = function(num1, num2) {
  console.log("The sum is: ", num1 + num2);
};

module.exports = {
  greet: function() {
    console.log("Hello! We are exporting a function called Greet.");
  },
  add: function(num1, num2) {
    console.log("The sum is: ", num1 + num2);
  }
};