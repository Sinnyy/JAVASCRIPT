// reverse string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Example
console.log(reverseString("hello ma")); // "olleh"


function countCharacters(str) {
  return str.length;
}

// Example
console.log(countCharacters("hello")); // 5

// capitalize words
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Example
console.log(capitalizeWords("hello world from javascript"));
// "Hello World From Javascript"

// find max
function findMax(arr) {
  return Math.max(...arr);
}

function findMin(arr) {
  return Math.min(...arr);
}

// Example
let numbers = [3, 7, 1, 9, 4];
console.log(findMax(numbers)); // 9
console.log(findMin(numbers)); // 1


// sum array
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Example
console.log(sumArray([1, 2, 3, 4, 5])); // 15

// filter array
function filterArray(arr, condition) {
  return arr.filter(condition);
}

// Example
let values = [2, 6, 3, 8, 4, 10];
let result = filterArray(values, num => num > 5);

console.log(result); // [6, 8, 10]


// factorial
function factorial(n) {
  if (n < 0) return undefined; // no factorial for negatives
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Example
console.log(factorial(5)); // 120


// check prime
function isPrime(n) {
  if (n <= 1) return false; 
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

// Example
console.log(isPrime(11)); // true
console.log(isPrime(15)); // false


function fibonacci(n) {
  let seq = [];

  if (n >= 1) seq.push(0);
  if (n >= 2) seq.push(1);

  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }

  return seq;
}

// Example
console.log(fibonacci(10));
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
