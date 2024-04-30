// Decision Making (if-else and switch)

// Leap Year Checker: Create a function that takes a year as input and determines whether it is a leap year or not. Leap years are divisible by 4, but not by 100 unless they are also divisible by 400.


const isLeapYear = (year) => {
    if (year % 4 !== 0) {
      return false;
    } else if (year % 100 !== 0) {
      return true;
    } else if (year % 400 === 0) {
      return true;
    } else {
      return false;
    }
}


// Ticket Pricing: Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:
// Children (age <= 12): $10
// Teenagers (age 13-17): $15
// Adults (age >= 18): $20


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Please enter your age: ', (age) => {
  let price;
  if (age <= 12) {
    price = 10;
  } else if (age >= 13 && age <= 17) {
    price = 15;
  } else {
    price = 20;
  }
  console.log(`The price of the movie ticket is $${price}.`);
  rl.close();
});

rl.on("close", function() {
  console.log("\nExiting the program...");
  process.exit(0);
});



// Recursion

// Fibonacci Sequence: Implement a recursive function to generate the nth Fibonacci number. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding numbers (0, 1, 1, 2, 3, 5, 8, ...).


function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
}


// Power Function: Write a recursive function to calculate the result of raising a number to a given power.


function power(base, exponent) {
    if (exponent === 0) {
      return 1;
    } else {
      return base * power(base, exponent - 1);
    }
}