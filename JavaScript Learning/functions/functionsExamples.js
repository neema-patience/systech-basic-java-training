// Math Operations

/**
 * Create a function that takes two arguments and returns the sum of those arguments.
 * @param {number} x The first number.
 * @param {number} y The second number.
 * @returns {number} The sum of x and y.
 */
function add(x, y) {
    return x + y;
}

/**
 * Create a function that takes two arguments and checks if the first argument is greater than the second argument.
 * @param {number} x The first number.
 * @param {number} y The second number.
 * @returns {boolean} True if x is greater than y, false otherwise.
 */
function isGreater(x, y) {
    return x > y;
}

/**
 * Create a function that takes a number and returns the square of that number.
 * @param {number} num The number to square.
 * @returns {number} The square of num.
 */
function square(num) {
    return num * num;
}

/**
 * Create a function that takes a number and returns the cube of that number.
 * @param {number} num The number to cube.
 * @returns {number} The cube of num.
 */
function cube(num) {
    return num * num * num;
}

// Advanced Math Operations

/**
 * Create a function that takes a number and returns the factorial of that number.
 * @param {number} num The number to calculate the factorial of.
 * @returns {number} The factorial of num.
 */
function factorial(num) {
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

/**
 * Create a function that takes a number and returns the Fibonacci series up to that number.
 * @param {number} num The maximum number in the series.
 * @returns {number[]} The Fibonacci series up to num.
 */
function fibonacciSeries(num) {
    let series = [0, 1];
    while (true) {
        let next = series[series.length - 1] + series[series.length - 2];
        if (next > num) break;
        series.push(next);
    }
    return series;
}

// String Operations

/**
 * Create a function that takes a number and returns the reverse of that number.
 * @param {number} num The number to reverse.
 * @returns {number} The reversed number.
 */
function reverseNumber(num) {
    const reversed = num.toString().split('').reverse().join('');
    return parseFloat(reversed) * Math.sign(num);
}

// Test Cases

console.log("Math Operations:");
console.log("Addition:");
console.log(add(3, 5)); // 8
console.log(add(10, 15)); // 25
console.log(add(-2, 7)); // 5

console.log("\nIs Greater:");
console.log(isGreater(10, 5)); // true
console.log(isGreater(5, 10)); // false
console.log(isGreater(3, 3)); // false

console.log("\nSquare:");
console.log(square(4)); // 16
console.log(square(-5)); // 25
console.log(square(1.5)); // 2.25

console.log("\nCube:");
console.log(cube(3)); // 27
console.log(cube(-2)); // -8
console.log(cube(1.5)); // 3.375

console.log("\nAdvanced Math Operations:");
console.log("Factorial:");
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(3)); // 6

console.log("\nFibonacci Series:");
console.log(fibonacciSeries(20)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacciSeries(10)); // [0, 1, 1, 2, 3, 5, 8]
console.log(fibonacciSeries(50)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

console.log("\nString Operations:");
console.log("Reverse Number:");
console.log(reverseNumber(12345)); // 54321
console.log(reverseNumber(-12345)); // -54321