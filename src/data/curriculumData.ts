import type { Course } from '../types/curriculum';

const curriculumData: Course[] = [
  {
    id: 'javascript',
    language: 'JavaScript',
    description: 'Master modern JavaScript from fundamentals to advanced concepts. Build real-world applications with the most popular programming language for web development.',
    icon: '⚡',
    modules: [
      {
        id: 'js-fundamentals',
        title: 'JavaScript Fundamentals',
        summary: 'Build a strong foundation in JavaScript with essential concepts and modern syntax.',
        lessons: [
          {
            id: 'js-intro',
            title: 'Introduction to JavaScript',
            duration: 30,
            content: `
              <h2>Welcome to JavaScript</h2>
              <p>JavaScript is a versatile programming language that powers the modern web. Originally created for client-side web development, it has evolved into a powerful language used everywhere: browsers, servers, mobile apps, and more.</p>
              
              <h3>Why Learn JavaScript?</h3>
              <ul>
                <li>Most popular programming language worldwide</li>
                <li>Essential for web development</li>
                <li>Large ecosystem of libraries and frameworks</li>
                <li>Versatile: front-end, back-end, mobile, and desktop development</li>
                <li>Active community and extensive resources</li>
              </ul>

              <h3>JavaScript Environment Setup</h3>
              <p>To start coding in JavaScript, you need:</p>
              <ul>
                <li>A modern web browser (Chrome, Firefox, or Edge)</li>
                <li>A code editor (VS Code recommended)</li>
                <li>Basic understanding of HTML and CSS</li>
              </ul>

              <h3>Running JavaScript Code</h3>
              <p>There are several ways to run JavaScript code:</p>
              <ul>
                <li>Browser Console (Press F12 to open Developer Tools)</li>
                <li>HTML file with script tags</li>
                <li>Online code editors (CodePen, JSFiddle)</li>
                <li>Node.js runtime environment</li>
              </ul>
            `,
            codeExamples: [
              {
                code: `// Your first JavaScript code
console.log("Hello, World!");

// Basic arithmetic
let sum = 5 + 3;
console.log("5 + 3 =", sum);

// String concatenation
let name = "JavaScript";
console.log("Welcome to " + name + "!");

// Modern template literals
console.log(\`Learning \${name} is fun!\`);`,
                explanation: 'Basic examples of JavaScript syntax including console output, arithmetic operations, and string manipulation.'
              },
              {
                code: `// Including JavaScript in HTML
<!DOCTYPE html>
<html>
<head>
    <title>My First JavaScript</title>
</head>
<body>
    <h1>Hello JavaScript!</h1>
    
    <!-- Internal JavaScript -->
    <script>
        console.log("Running JavaScript!");
    </script>
    
    <!-- External JavaScript -->
    <script src="app.js"></script>
</body>
</html>`,
                explanation: 'How to include JavaScript in an HTML file using both internal and external scripts.'
              },
              {
                code: `// Modern JavaScript features
// Using let and const
const PI = 3.14159;
let radius = 5;

// Template literals
let area = \`Circle area: \${PI * radius * radius}\`;

// Arrow function
const greet = (name) => {
    return \`Hello, \${name}!\`;
};

console.log(greet("Developer"));`,
                explanation: 'Examples of modern JavaScript syntax including const/let declarations, template literals, and arrow functions.'
              }
            ],
            exercise: 'Create a simple JavaScript program that calculates and displays your age in days based on your birth year. Use template literals for the output message and console.log() to display the result.',
            solution: `// Age Calculator Solution
const currentYear = new Date().getFullYear();
const birthYear = 1995; // Change this to your birth year

const ageInYears = currentYear - birthYear;
const ageInDays = ageInYears * 365;

console.log(\`You are approximately \${ageInDays} days old!\`);

// Bonus: More accurate calculation including leap years
const calculateDays = (birthYear) => {
    const today = new Date();
    const birthDate = new Date(birthYear, 0, 1);
    const diffTime = Math.abs(today - birthDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
};

console.log(\`More precisely, you are \${calculateDays(birthYear)} days old!\`);`,
            quizzes: [
              {
                id: 'js-intro-q1',
                question: 'Which of the following is NOT a valid way to run JavaScript code?',
                options: [
                  'In the browser console',
                  'In a <javascript> tag in HTML',
                  'In a <script> tag in HTML',
                  'Using Node.js'
                ],
                correctAnswer: 'In a <javascript> tag in HTML',
                explanation: 'JavaScript code in HTML must be included in <script> tags, not <javascript> tags. The <javascript> tag does not exist in HTML.'
              },
              {
                id: 'js-intro-q2',
                question: 'What will be the output of: console.log(`2 + 2 = ${2 + 2}`);',
                options: [
                  '2 + 2 = 4',
                  '2 + 2 = ${2 + 2}',
                  '2 + 2 = "4"',
                  'Error'
                ],
                correctAnswer: '2 + 2 = 4',
                explanation: 'Template literals (backticks) allow embedded expressions using ${...}. The expression inside ${} is evaluated and its result is converted to a string.'
              }
            ]
          },
          {
            id: 'js-variables',
            title: 'Variables & Data Types',
            duration: 45,
            content: `
              <h2>Variables and Data Types in JavaScript</h2>
              <p>Variables are containers for storing data values. JavaScript provides several ways to declare variables and supports various data types to handle different kinds of values.</p>

              <h3>Variable Declaration</h3>
              <ul>
                <li><code>let</code>: For values that can change (block-scoped)</li>
                <li><code>const</code>: For values that remain constant (block-scoped)</li>
                <li><code>var</code>: Traditional way (function-scoped, not recommended in modern JavaScript)</li>
              </ul>

              <h3>Primitive Data Types</h3>
              <ul>
                <li><strong>Number</strong>: Both integers and floating-point numbers</li>
                <li><strong>String</strong>: Text values (with single or double quotes, or backticks)</li>
                <li><strong>Boolean</strong>: true/false values</li>
                <li><strong>undefined</strong>: Variable declared but not assigned a value</li>
                <li><strong>null</strong>: Intentional absence of any object value</li>
                <li><strong>Symbol</strong>: Unique identifier</li>
                <li><strong>BigInt</strong>: Numbers larger than 2^53 - 1</li>
              </ul>

              <h3>Reference Types</h3>
              <ul>
                <li><strong>Object</strong>: Collections of key-value pairs</li>
                <li><strong>Array</strong>: Ordered lists of values</li>
                <li><strong>Function</strong>: Reusable blocks of code</li>
              </ul>

              <h3>Type Coercion and Conversion</h3>
              <p>JavaScript is dynamically typed and performs automatic type conversion in certain situations. Understanding type coercion is crucial for avoiding unexpected behavior.</p>
            `,
            codeExamples: [
              {
                code: `// Variable declarations
let age = 25;
const PI = 3.14159;
var oldWay = "not recommended"; // avoid using var

// Primitive types
let name = "Alice";           // String
let score = 95.5;            // Number
let isStudent = true;        // Boolean
let certificate = undefined; // undefined
let experience = null;      // null
let id = Symbol("id");     // Symbol
let bigNumber = 9007199254740991n; // BigInt

// Type checking
console.log(typeof name);      // "string"
console.log(typeof score);     // "number"
console.log(typeof isStudent); // "boolean"

// String concatenation vs. number addition
console.log("5" + "5");     // "55" (string concatenation)
console.log(5 + 5);         // 10 (number addition)
console.log("5" + 5);       // "55" (type coercion to string)`,
                explanation: 'Examples of variable declarations and different data types in JavaScript, including type checking and type coercion.'
              },
              {
                code: `// Reference types
// Objects
const person = {
    name: "Bob",
    age: 30,
    isStudent: false,
    greet: function() {
        return \`Hello, my name is \${this.name}\`;
    }
};

// Arrays
const colors = ["red", "green", "blue"];
const mixed = [1, "text", true, null, { x: 10 }];

// Accessing and modifying
console.log(person.name);        // "Bob"
console.log(colors[0]);         // "red"
person.age = 31;               // Modifying object property
colors.push("yellow");        // Adding to array

// Object and array methods
console.log(Object.keys(person));    // ["name", "age", "isStudent", "greet"]
console.log(colors.length);          // 4
console.log(Array.isArray(colors));  // true`,
                explanation: 'Working with reference types (objects and arrays) in JavaScript, including property access and built-in methods.'
              },
              {
                code: `// Type conversion
// String to Number
let numStr = "123";
let num1 = Number(numStr);    // Using Number()
let num2 = +numStr;          // Using unary plus
let num3 = parseInt(numStr); // Using parseInt()

// Number to String
let num = 123;
let str1 = String(num);     // Using String()
let str2 = num.toString(); // Using toString()
let str3 = \`\${num}\`;    // Using template literal

// Boolean conversion
console.log(Boolean(""));     // false
console.log(Boolean("0"));    // true
console.log(Boolean(0));      // false
console.log(Boolean([]));     // true
console.log(Boolean(null));   // false

// Type coercion
console.log(5 + "10");      // "510"
console.log(5 - "3");       // 2
console.log("5" == 5);      // true
console.log("5" === 5);     // false`,
                explanation: 'Examples of explicit type conversion and implicit type coercion in JavaScript, showing different methods and their results.'
              }
            ],
            exercise: 'Create a program that takes various inputs (numbers, strings, arrays) and demonstrates type conversion and manipulation. Include examples of both explicit and implicit type conversion.',
            solution: `// Type Conversion Exercise Solution
// Function to demonstrate type conversions
function typeDemo(input) {
    // Store original type
    const originalType = typeof input;
    
    // Convert to different types
    const asString = String(input);
    const asNumber = Number(input);
    const asBoolean = Boolean(input);
    
    // Create result object
    const result = {
        original: {
            value: input,
            type: originalType
        },
        conversions: {
            string: {
                value: asString,
                type: typeof asString
            },
            number: {
                value: asNumber,
                type: typeof asNumber
            },
            boolean: {
                value: asBoolean,
                type: typeof asBoolean
            }
        }
    };
    
    // Display results
    console.log("Type Conversion Results:");
    console.log(\`Original: \${result.original.value} (\${result.original.type})\`);
    console.log("Conversions:");
    console.log(\`→ String:  \${result.conversions.string.value}\`);
    console.log(\`→ Number:  \${result.conversions.number.value}\`);
    console.log(\`→ Boolean: \${result.conversions.boolean.value}\`);
    console.log("-------------------");
}

// Test with different types
typeDemo(42);          // number
typeDemo("123");       // string
typeDemo(true);        // boolean
typeDemo([1, 2, 3]);   // object (array)
typeDemo("");          // empty string
typeDemo(0);           // zero
typeDemo(null);        // null
typeDemo(undefined);   // undefined`,
            quizzes: [
              {
                id: 'js-var-q1',
                question: 'What is the output of: typeof null;',
                options: [
                  '"null"',
                  '"undefined"',
                  '"object"',
                  '"boolean"'
                ],
                correctAnswer: '"object"',
                explanation: 'In JavaScript, typeof null returns "object". This is a known quirk of the language that has persisted for historical reasons.'
              },
              {
                id: 'js-var-q2',
                question: 'Which of the following is true about const declarations?',
                options: [
                  'The value can be changed later',
                  'The variable must be initialized when declared',
                  'Arrays declared with const can\'t be modified',
                  'It is function-scoped'
                ],
                correctAnswer: 'The variable must be initialized when declared',
                explanation: 'const variables must be initialized when declared. While the variable cannot be reassigned, the content of objects and arrays declared with const can still be modified (mutable).'
              }
            ]
          },
          {
            id: 'js-control-flow',
            title: 'Control Flow & Loops',
            duration: 45,
            content: `
              <h2>Control Flow in JavaScript</h2>
              <p>Control flow determines how your program executes statements in a particular sequence. JavaScript provides several structures to control program flow.</p>

              <h3>Conditional Statements</h3>
              <ul>
                <li><strong>if...else</strong>: Make decisions based on conditions</li>
                <li><strong>switch</strong>: Handle multiple conditions with different cases</li>
                <li><strong>ternary operator</strong>: Shorthand for simple if...else conditions</li>
              </ul>

              <h3>Loops</h3>
              <ul>
                <li><strong>for</strong>: Execute code a specific number of times</li>
                <li><strong>while</strong>: Execute code while a condition is true</li>
                <li><strong>do...while</strong>: Execute code at least once, then continue while condition is true</li>
                <li><strong>for...of</strong>: Iterate over iterable objects (arrays, strings)</li>
                <li><strong>for...in</strong>: Iterate over object properties</li>
              </ul>

              <h3>Break and Continue</h3>
              <ul>
                <li><strong>break</strong>: Exit a loop or switch statement</li>
                <li><strong>continue</strong>: Skip to the next iteration of a loop</li>
              </ul>

              <h3>Error Handling</h3>
              <ul>
                <li><strong>try...catch</strong>: Handle potential errors in code</li>
                <li><strong>throw</strong>: Create custom errors</li>
                <li><strong>finally</strong>: Execute code after try/catch regardless of outcome</li>
              </ul>
            `,
            codeExamples: [
              {
                code: `// Conditional Statements
// if...else
let temperature = 25;

if (temperature > 30) {
    console.log("It's hot!");
} else if (temperature > 20) {
    console.log("It's warm.");
} else {
    console.log("It's cool.");
}

// switch statement
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("Weekend is near!");
        break;
    default:
        console.log("Regular day");
}

// Ternary operator
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log(\`Can vote? \${canVote}\`);`,
                explanation: 'Examples of different conditional statements in JavaScript, including if...else, switch, and the ternary operator.'
              },
              {
                code: `// Loops
// for loop
for (let i = 0; i < 5; i++) {
    console.log(\`Count: \${i}\`);
}

// while loop
let count = 0;
while (count < 3) {
    console.log(\`While count: \${count}\`);
    count++;
}

// do...while loop
let num = 0;
do {
    console.log(\`Do-while num: \${num}\`);
    num++;
} while (num < 2);

// for...of loop (iterables)
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(color);
}

// for...in loop (object properties)
const person = { name: "John", age: 30 };
for (const prop in person) {
    console.log(\`\${prop}: \${person[prop]}\`);
}`,
                explanation: 'Different types of loops in JavaScript for iteration and working with arrays and objects.'
              },
              {
                code: `// Error Handling
// try...catch
try {
    // Attempt to access undefined property
    console.log(nonExistentVariable);
} catch (error) {
    console.log("An error occurred:", error.message);
}

// Custom error handling
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero!");
    }
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Execution completed");
}`,
                explanation: 'Error handling in JavaScript using try...catch blocks and custom error throwing.'
              }
            ],
            exercise: 'Create the classic FizzBuzz program: Print numbers from 1 to 100. For multiples of 3, print "Fizz". For multiples of 5, print "Buzz". For multiples of both 3 and 5, print "FizzBuzz".',
            solution: `// FizzBuzz Solution
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        let output = "";
        
        // Check multiples
        if (i % 3 === 0) output += "Fizz";
        if (i % 5 === 0) output += "Buzz";
        
        // Print the number if not a multiple of 3 or 5
        console.log(output || i);
    }
}

// Run the program
fizzBuzz();

// Alternative solution using switch
function fizzBuzzSwitch() {
    for (let i = 1; i <= 100; i++) {
        switch (true) {
            case i % 15 === 0:
                console.log("FizzBuzz");
                break;
            case i % 3 === 0:
                console.log("Fizz");
                break;
            case i % 5 === 0:
                console.log("Buzz");
                break;
            default:
                console.log(i);
        }
    }
}`,
            quizzes: [
              {
                id: 'js-control-q1',
                question: 'What will be the output of: for(let i=0; i<3; i++) { if(i===1) continue; console.log(i); }',
                options: [
                  '0, 1, 2',
                  '0, 2',
                  '1, 2',
                  '0, 1'
                ],
                correctAnswer: '0, 2',
                explanation: 'The continue statement skips the rest of the loop body for that iteration. When i is 1, the console.log is skipped.'
              },
              {
                id: 'js-control-q2',
                question: 'Which loop type always executes its code block at least once?',
                options: [
                  'for loop',
                  'while loop',
                  'do...while loop',
                  'for...in loop'
                ],
                correctAnswer: 'do...while loop',
                explanation: 'A do...while loop always executes its code block once before checking the condition, unlike other loops that check the condition first.'
              }
            ]
          },
          {
            id: 'js-functions',
            title: 'Functions & Scope',
            duration: 50,
            content: `
              <h2>Functions in JavaScript</h2>
              <p>Functions are reusable blocks of code that perform specific tasks. They are fundamental building blocks in JavaScript.</p>

              <h3>Function Declarations</h3>
              <ul>
                <li><strong>Function Declaration</strong>: Traditional way to define functions</li>
                <li><strong>Function Expression</strong>: Assigning a function to a variable</li>
                <li><strong>Arrow Functions</strong>: Concise syntax introduced in ES6</li>
                <li><strong>IIFE (Immediately Invoked Function Expression)</strong>: Self-executing functions</li>
              </ul>

              <h3>Function Parameters</h3>
              <ul>
                <li>Required parameters</li>
                <li>Optional parameters with default values</li>
                <li>Rest parameters (...args)</li>
                <li>Destructuring parameters</li>
              </ul>

              <h3>Scope and Closure</h3>
              <ul>
                <li><strong>Global Scope</strong>: Variables accessible everywhere</li>
                <li><strong>Function Scope</strong>: Variables accessible only within functions</li>
                <li><strong>Block Scope</strong>: Variables accessible only within blocks</li>
                <li><strong>Closures</strong>: Functions retaining access to their outer scope</li>
              </ul>

              <h3>Advanced Concepts</h3>
              <ul>
                <li><strong>this</strong> keyword and context</li>
                <li>Call, Apply, and Bind methods</li>
                <li>Higher-order functions</li>
                <li>Pure functions and side effects</li>
              </ul>
            `,
            codeExamples: [
              {
                code: `// Function Declarations
// Traditional function declaration
function greet(name) {
    return \`Hello, \${name}!\`;
}

// Function expression
const sayHello = function(name) {
    return \`Hello, \${name}!\`;
};

// Arrow function
const greetArrow = (name) => \`Hello, \${name}!\`;

// IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("I run immediately!");
})();

// Function with default parameters
function multiply(a, b = 1) {
    return a * b;
}

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Destructuring parameters
function printUserInfo({ name, age }) {
    console.log(\`\${name} is \${age} years old\`);
}`,
                explanation: 'Different ways to declare and use functions in JavaScript, including modern syntax and parameter handling.'
              },
              {
                code: `// Scope and Closure
// Global scope
const globalVar = "I'm global";

function demonstrateScope() {
    // Function scope
    const functionVar = "I'm function-scoped";
    
    if (true) {
        // Block scope
        let blockVar = "I'm block-scoped";
        var notBlockVar = "I'm function-scoped too";
        console.log(blockVar); // Accessible
    }
    
    // console.log(blockVar); // Error: blockVar is not defined
    console.log(notBlockVar); // Accessible
}

// Closure example
function createCounter() {
    let count = 0;
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1`,
                explanation: 'Examples of scope and closures in JavaScript, showing how variables are accessible in different contexts.'
              },
              {
                code: `// Advanced Function Concepts
// this keyword and arrow functions
const person = {
    name: "John",
    regularMethod: function() {
        console.log(this.name);
    },
    arrowMethod: () => {
        console.log(this.name);
    }
};

// Higher-order functions
function multiply(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiply(2);
console.log(double(5)); // 10

// Pure function
function addPure(a, b) {
    return a + b;
}

// Function with side effect
let total = 0;
function addWithSideEffect(a) {
    total += a; // Side effect: modifying external state
    return total;
}`,
                explanation: 'Advanced function concepts including this context, higher-order functions, and pure functions vs. side effects.'
              }
            ],
            exercise: 'Create a memoization function that caches the results of expensive calculations. Use it to optimize a recursive fibonacci sequence calculator.',
            solution: `// Memoization Exercise Solution
function memoize(fn) {
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            console.log('Fetching from cache:', key);
            return cache.get(key);
        }
        
        const result = fn.apply(this, args);
        cache.set(key, result);
        console.log('Calculating result:', key);
        
        return result;
    };
}

// Recursive fibonacci without memoization
function fibonacciSlow(n) {
    if (n <= 1) return n;
    return fibonacciSlow(n - 1) + fibonacciSlow(n - 2);
}

// Memoized fibonacci
const fibonacci = memoize(function(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
});

// Test both implementations
console.time('Slow');
console.log(fibonacciSlow(35));
console.timeEnd('Slow');

console.time('Memoized');
console.log(fibonacci(35));
console.timeEnd('Memoized');`,
            quizzes: [
              {
                id: 'js-func-q1',
                question: 'What is the main difference between function declarations and function expressions?',
                options: [
                  'Function declarations are faster',
                  'Function expressions can be anonymous',
                  'Function declarations are hoisted',
                  'Function expressions use less memory'
                ],
                correctAnswer: 'Function declarations are hoisted',
                explanation: 'Function declarations are hoisted to the top of their scope and can be called before their declaration in the code. Function expressions are not hoisted.'
              },
              {
                id: 'js-func-q2',
                question: 'What will be the output of: const add = (a, b) => a + b; console.log(add(2));',
                options: [
                  '2',
                  'NaN',
                  'undefined',
                  'Error'
                ],
                correctAnswer: 'NaN',
                explanation: 'When the second parameter b is not provided, it becomes undefined. Adding a number to undefined results in NaN (Not a Number).'
              }
            ]
          },
          {
            id: 'js-objects',
            title: 'Objects & Object-Oriented Programming',
            duration: 55,
            content: `
              <h2>Objects and OOP in JavaScript</h2>
              <p>Objects are fundamental to JavaScript and form the basis of Object-Oriented Programming (OOP) in the language. Understanding objects and OOP principles is crucial for writing organized, maintainable code.</p>

              <h3>Object Basics</h3>
              <ul>
                <li><strong>Object Literals</strong>: Creating objects using curly braces</li>
                <li><strong>Properties and Methods</strong>: Storing data and behavior</li>
                <li><strong>Property Access</strong>: Dot notation and bracket notation</li>
                <li><strong>Object Methods</strong>: Object.keys(), Object.values(), Object.entries()</li>
              </ul>

              <h3>Object-Oriented Concepts</h3>
              <ul>
                <li><strong>Constructor Functions</strong>: Creating object templates</li>
                <li><strong>Classes</strong>: ES6+ syntax for creating objects</li>
                <li><strong>Inheritance</strong>: Extending classes and prototypes</li>
                <li><strong>Encapsulation</strong>: Private and public members</li>
              </ul>

              <h3>Prototypes and Inheritance</h3>
              <ul>
                <li><strong>Prototype Chain</strong>: How JavaScript objects inherit properties</li>
                <li><strong>Prototype Methods</strong>: Sharing methods between instances</li>
                <li><strong>Object.create()</strong>: Creating objects with specific prototypes</li>
              </ul>

              <h3>Modern JavaScript Features</h3>
              <ul>
                <li><strong>Class Fields</strong>: Public and private fields</li>
                <li><strong>Static Methods</strong>: Class-level functionality</li>
                <li><strong>Getters and Setters</strong>: Controlling property access</li>
                <li><strong>Object Destructuring</strong>: Extracting properties</li>
              </ul>
            `,
            codeExamples: [
              {
                code: `// Object Literals and Basic Operations
// Creating objects
const person = {
    name: "John",
    age: 30,
    greet() {
        return \`Hello, my name is \${this.name}\`;
    }
};

// Property access
console.log(person.name);          // Dot notation
console.log(person["age"]);        // Bracket notation

// Adding and modifying properties
person.location = "New York";
person.age = 31;

// Object methods
console.log(Object.keys(person));   // ["name", "age", "location"]
console.log(Object.values(person)); // ["John", 31, "New York"]

// Object destructuring
const { name, age } = person;
console.log(name, age);

// Computed property names
const propertyName = "email";
const user = {
    [propertyName]: "john@example.com"
};`,
                explanation: 'Basic object operations including creation, property access, and built-in object methods.'
              },
              {
                code: `// Classes and OOP
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        return \`\${this.name} makes a sound\`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    
    speak() {
        return \`\${this.name} barks!\`;
    }
    
    static createPuppy(name) {
        return new Dog(name, "mixed");
    }
}

// Using classes
const dog = new Dog("Rex", "German Shepherd");
console.log(dog.speak());        // "Rex barks!"
console.log(dog instanceof Dog); // true

// Private fields and methods (modern JavaScript)
class BankAccount {
    #balance = 0;  // Private field
    
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    
    get balance() {
        return this.#balance;
    }
    
    deposit(amount) {
        this.#balance += amount;
    }
}`,
                explanation: 'Object-oriented programming in JavaScript using classes, inheritance, and modern features.'
              },
              {
                code: `// Prototypes and Inheritance
// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding methods to prototype
Person.prototype.greet = function() {
    return \`Hello, I'm \${this.name}\`;
};

// Creating instances
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

// Both instances share the same greet method
console.log(person1.greet === person2.greet); // true

// Object.create()
const personProto = {
    introduce() {
        return \`I'm \${this.name}\`;
    }
};

const employee = Object.create(personProto);
employee.name = "Charlie";
employee.role = "Developer";

// Getters and Setters
const product = {
    _price: 0,
    
    get price() {
        return \`$\${this._price}\`;
    },
    
    set price(value) {
        if (value < 0) {
            throw new Error("Price cannot be negative");
        }
        this._price = value;
    }
};

product.price = 99.99;
console.log(product.price); // "$99.99"`,
                explanation: 'Prototypal inheritance, constructor functions, and property accessors in JavaScript.'
              }
            ],
            exercise: 'Create a library management system using OOP principles. Implement classes for Book and Library that handle adding books, checking out books, and managing inventory.',
            solution: `// Library Management System
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isCheckedOut = false;
        this.checkedOutTo = null;
        this.dueDate = null;
    }

    checkout(memberName) {
        if (this.isCheckedOut) {
            return \`Book "\${this.title}" is already checked out.\`;
        }
        
        this.isCheckedOut = true;
        this.checkedOutTo = memberName;
        
        // Set due date to 14 days from now
        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 14);
        this.dueDate = dueDate;
        
        return \`Book "\${this.title}" has been checked out to \${memberName}. Due: \${dueDate.toLocaleDateString()}\`;
    }

    return() {
        if (!this.isCheckedOut) {
            return \`Book "\${this.title}" is not checked out.\`;
        }
        
        this.isCheckedOut = false;
        this.checkedOutTo = null;
        this.dueDate = null;
        
        return \`Book "\${this.title}" has been returned.\`;
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = new Map(); // Using Map to store books with ISBN as key
    }

    addBook(title, author, isbn) {
        if (this.books.has(isbn)) {
            return \`Book with ISBN \${isbn} already exists.\`;
        }
        
        const book = new Book(title, author, isbn);
        this.books.set(isbn, book);
        return \`Added: \${title} by \${author}\`;
    }

    removeBook(isbn) {
        if (!this.books.has(isbn)) {
            return \`Book with ISBN \${isbn} not found.\`;
        }
        
        const book = this.books.get(isbn);
        if (book.isCheckedOut) {
            return \`Cannot remove: book is currently checked out.\`;
        }
        
        this.books.delete(isbn);
        return \`Removed: \${book.title}\`;
    }

    findBook(isbn) {
        return this.books.get(isbn) || null;
    }

    listBooks() {
        const bookList = [];
        for (const book of this.books.values()) {
            bookList.push({
                title: book.title,
                author: book.author,
                status: book.isCheckedOut ? \`Checked out to \${book.checkedOutTo}\` : "Available"
            });
        }
        return bookList;
    }
}

// Testing the library system
const library = new Library("City Library");

// Add some books
console.log(library.addBook("The Great Gatsby", "F. Scott Fitzgerald", "978-0743273565"));
console.log(library.addBook("1984", "George Orwell", "978-0451524935"));

// Checkout a book
const book = library.findBook("978-0743273565");
console.log(book.checkout("John Smith"));

// Try to remove checked out book
console.log(library.removeBook("978-0743273565"));

// List all books
console.log("Library Inventory:");
console.log(library.listBooks());

// Return book
console.log(book.return());

// Remove book
console.log(library.removeBook("978-0743273565"));`,
            quizzes: [
              {
                id: 'js-obj-q1',
                question: 'What is the main difference between a class and a constructor function in JavaScript?',
                options: [
                  'Classes are faster than constructor functions',
                  'Constructor functions cannot create objects',
                  'Classes provide a cleaner syntax and built-in inheritance',
                  'Classes can have private fields, constructor functions cannot'
                ],
                correctAnswer: 'Classes provide a cleaner syntax and built-in inheritance',
                explanation: 'While classes and constructor functions achieve similar results, classes provide a more modern, cleaner syntax and built-in features for inheritance through the extends keyword.'
              },
              {
                id: 'js-obj-q2',
                question: 'What will be the output of: const obj = { get x() { return 1; } }; obj.x = 2; console.log(obj.x);',
                options: [
                  '2',
                  '1',
                  'undefined',
                  'Error'
                ],
                correctAnswer: '1',
                explanation: 'When a property is defined with a getter but no setter, assignments to that property are ignored. The getter will always return its defined value (1 in this case).'
              }
            ]
          },
          {
            id: 'js-arrays',
            title: 'Arrays & Array Methods',
            duration: 45,
            content: `
              <h2>Arrays in JavaScript</h2>
              <p>Arrays are ordered collections of values and one of the most commonly used data structures in JavaScript. Understanding array methods is crucial for effective data manipulation.</p>

              <h3>Array Basics</h3>
              <ul>
                <li><strong>Creating Arrays</strong>: Array literals and constructor</li>
                <li><strong>Accessing Elements</strong>: Index-based access</li>
                <li><strong>Array Properties</strong>: length, indices</li>
                <li><strong>Multi-dimensional Arrays</strong>: Arrays of arrays</li>
              </ul>

              <h3>Array Methods</h3>
              <ul>
                <li><strong>Adding/Removing Elements</strong>: push(), pop(), shift(), unshift()</li>
                <li><strong>Modifying Arrays</strong>: splice(), slice(), concat()</li>
                <li><strong>Finding Elements</strong>: indexOf(), find(), includes()</li>
                <li><strong>Transforming Arrays</strong>: map(), filter(), reduce()</li>
              </ul>

              <h3>Modern Array Features</h3>
              <ul>
                <li><strong>Spread Operator</strong>: [...array]</li>
                <li><strong>Destructuring</strong>: [a, b] = array</li>
                <li><strong>Array.from()</strong>: Creating arrays from array-like objects</li>
                <li><strong>Array.isArray()</strong>: Type checking</li>
              </ul>

              <h3>Array Iteration</h3>
              <ul>
                <li><strong>forEach()</strong>: Simple iteration</li>
                <li><strong>for...of</strong>: Modern iteration syntax</li>
                <li><strong>entries()</strong>: Iterating with index</li>
                <li><strong>some() and every()</strong>: Testing conditions</li>
              </ul>
            `,
            codeExamples: [
              {
                code: `// Array Creation and Basic Operations
// Creating arrays
const numbers = [1, 2, 3, 4, 5];
const fruits = new Array("apple", "banana", "orange");
const mixed = [1, "text", { x: 10 }, [1, 2]];

// Accessing elements
console.log(numbers[0]);     // First element
console.log(numbers[numbers.length - 1]); // Last element

// Modifying arrays
numbers.push(6);           // Add to end
numbers.unshift(0);       // Add to beginning
const lastNum = numbers.pop();    // Remove from end
const firstNum = numbers.shift(); // Remove from beginning

// Slicing and splicing
const subset = numbers.slice(1, 3);    // Extract portion
numbers.splice(1, 2, 10, 11);    // Remove and insert

// Spread operator
const numbersCopy = [...numbers];
const combined = [...numbers, ...fruits];

// Array destructuring
const [first, second, ...rest] = numbers;
console.log(first, second, rest);`,
                explanation: 'Basic array operations including creation, modification, and modern JavaScript features.'
              },
              {
                code: `// Array Methods for Data Transformation
const data = [1, 2, 3, 4, 5];

// map: Transform each element
const doubled = data.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter: Select elements meeting criteria
const evenNumbers = data.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// reduce: Accumulate values
const sum = data.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

// find and findIndex
const found = data.find(num => num > 3);
const foundIndex = data.findIndex(num => num > 3);

// some and every
const hasEven = data.some(num => num % 2 === 0);
const allPositive = data.every(num => num > 0);

// Chaining methods
const result = data
    .filter(num => num % 2 === 0)
    .map(num => num * 2)
    .reduce((acc, curr) => acc + curr, 0);`,
                explanation: 'Array transformation methods and method chaining for data processing.'
              },
              {
                code: `// Advanced Array Operations
// Creating arrays from other objects
const arrayFromString = Array.from("hello"); // ['h','e','l','l','o']
const arrayFromSet = Array.from(new Set([1, 2, 2, 3])); // [1,2,3]

// Creating arrays with specific conditions
const range = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(range); // [1, 2, 3, 4, 5]

// Multi-dimensional arrays
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Flattening arrays
const nested = [1, [2, 3], [4, [5, 6]]];
const flattened = nested.flat();     // One level
const deepFlattened = nested.flat(Infinity); // All levels

// Sorting arrays
const numbers = [23, 5, 100, 56, 9, 1, 2, 6, 3];
numbers.sort((a, b) => a - b); // Numeric sort

const words = ['banana', 'apple', 'orange'];
words.sort(); // Alphabetical sort

// Finding unique values
const unique = [...new Set([1, 2, 2, 3, 3, 4])];

// Array to object conversion
const pairs = [['name', 'John'], ['age', 30]];
const object = Object.fromEntries(pairs);`,
                explanation: 'Advanced array operations including multi-dimensional arrays, flattening, sorting, and conversions.'
              }
            ],
            exercise: 'Create a data processing utility that takes an array of student records and provides methods for filtering, sorting, and analyzing the data. Include functions for calculating averages, finding top performers, and grouping students by grade levels.',
            solution: `// Student Data Processing Utility
class StudentAnalytics {
    constructor(students) {
        this.students = students;
    }

    // Get average grade for all students
    getAverageGrade() {
        if (this.students.length === 0) return 0;
        
        const totalGrade = this.students.reduce((sum, student) => 
            sum + student.grade, 0);
        return totalGrade / this.students.length;
    }

    // Get top N performers
    getTopPerformers(n = 5) {
        return [...this.students]
            .sort((a, b) => b.grade - a.grade)
            .slice(0, n);
    }

    // Group students by grade level
    groupByGradeLevel() {
        return this.students.reduce((groups, student) => {
            const level = this.getGradeLevel(student.grade);
            if (!groups[level]) {
                groups[level] = [];
            }
            groups[level].push(student);
            return groups;
        }, {});
    }

    // Get grade level based on score
    getGradeLevel(grade) {
        if (grade >= 90) return 'A';
        if (grade >= 80) return 'B';
        if (grade >= 70) return 'C';
        if (grade >= 60) return 'D';
        return 'F';
    }

    // Filter students by minimum grade
    filterByMinGrade(minGrade) {
        return this.students.filter(student => 
            student.grade >= minGrade);
    }

    // Sort students by various criteria
    sortBy(criterion) {
        return [...this.students].sort((a, b) => {
            switch(criterion) {
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'grade':
                    return b.grade - a.grade;
                case 'id':
                    return a.id - b.id;
                default:
                    return 0;
            }
        });
    }

    // Generate performance summary
    generateSummary() {
        const average = this.getAverageGrade();
        const topThree = this.getTopPerformers(3);
        const groups = this.groupByGradeLevel();
        
        return {
            totalStudents: this.students.length,
            averageGrade: average.toFixed(2),
            topPerformers: topThree.map(s => ({
                name: s.name,
                grade: s.grade
            })),
            gradeDistribution: Object.entries(groups)
                .map(([level, students]) => ({
                    level,
                    count: students.length,
                    percentage: ((students.length / this.students.length) * 100).toFixed(1)
                }))
        };
    }
}

// Test the utility
const studentData = [
    { id: 1, name: "Alice", grade: 95 },
    { id: 2, name: "Bob", grade: 82 },
    { id: 3, name: "Charlie", grade: 88 },
    { id: 4, name: "David", grade: 75 },
    { id: 5, name: "Eve", grade: 91 },
    { id: 6, name: "Frank", grade: 68 },
    { id: 7, name: "Grace", grade: 85 }
];

const analytics = new StudentAnalytics(studentData);

// Test various operations
console.log("Average Grade:", analytics.getAverageGrade());
console.log("Top Performers:", analytics.getTopPerformers(3));
console.log("Grouped by Grade Level:", analytics.groupByGradeLevel());
console.log("Students Above 85:", analytics.filterByMinGrade(85));
console.log("Sorted by Name:", analytics.sortBy('name'));
console.log("Performance Summary:", analytics.generateSummary());`,
            quizzes: [
              {
                id: 'js-arr-q1',
                question: 'What is the difference between map() and forEach() methods?',
                options: [
                  'map() is faster than forEach()',
                  'forEach() can modify the original array while map() cannot',
                  'map() returns a new array while forEach() returns undefined',
                  'forEach() can handle async operations while map() cannot'
                ],
                correctAnswer: 'map() returns a new array while forEach() returns undefined',
                explanation: 'map() creates a new array with the results of calling a function for every array element, while forEach() just executes a function for each array element without creating a new array.'
              },
              {
                id: 'js-arr-q2',
                question: 'What will be the output of: [1,2,3].reduce((acc,curr) => acc + curr, 10)?',
                options: [
                  '6',
                  '16',
                  '10',
                  'Error'
                ],
                correctAnswer: '16',
                explanation: 'The reduce method starts with an initial value of 10 (second argument) and adds each array element to it: 10 + 1 + 2 + 3 = 16.'
              }
            ]
          },
          {
            id: 'js-async',
            title: 'Asynchronous Programming',
            duration: 60,
            content: `
              <h2>Asynchronous Programming in JavaScript</h2>
              <p>JavaScript is single-threaded but can handle asynchronous operations efficiently through various mechanisms. Understanding asynchronous programming is essential for handling I/O operations, API calls, and building responsive applications.</p>

              <h3>Callbacks and Event Loop</h3>
              <ul>
                <li><strong>Callbacks</strong>: Functions passed as arguments</li>
                <li><strong>Event Loop</strong>: How JavaScript handles async operations</li>
                <li><strong>Call Stack</strong>: Execution context management</li>
                <li><strong>Callback Hell</strong>: Nested callback problems</li>
              </ul>

              <h3>Promises</h3>
              <ul>
                <li><strong>Promise States</strong>: Pending, Fulfilled, Rejected</li>
                <li><strong>Promise Methods</strong>: then(), catch(), finally()</li>
                <li><strong>Promise Chaining</strong>: Sequential async operations</li>
                <li><strong>Promise.all(), Promise.race()</strong>: Handling multiple promises</li>
              </ul>

              <h3>Async/Await</h3>
              <ul>
                <li><strong>async Functions</strong>: Always return promises</li>
                <li><strong>await Operator</strong>: Pause execution until promise resolves</li>
                <li><strong>Error Handling</strong>: try/catch with async/await</li>
                <li><strong>Parallel Execution</strong>: Running async operations concurrently</li>
              </ul>

              <h3>Modern Async Patterns</h3>
              <ul>
                <li><strong>Top-level await</strong>: Using await outside async functions</li>
                <li><strong>Async Iterators</strong>: for-await-of loops</li>
                <li><strong>AbortController</strong>: Cancelling async operations</li>
                <li><strong>Web Workers</strong>: True parallel execution</li>
              </ul>
            `,
            codeExamples: [
              {
                code: `// Callbacks and Event Loop
// Basic callback example
function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: "John" };
        callback(null, data);
    }, 1000);
}

fetchData((error, data) => {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Data:", data);
    }
});

// Callback hell example
fetchUserData(userId, (error, user) => {
    if (error) {
        handleError(error);
        return;
    }
    
    fetchUserPosts(user.id, (error, posts) => {
        if (error) {
            handleError(error);
            return;
        }
        
        fetchPostComments(posts[0].id, (error, comments) => {
            if (error) {
                handleError(error);
                return;
            }
            
            console.log("User:", user);
            console.log("First Post:", posts[0]);
            console.log("Comments:", comments);
        });
    });
});`,
                explanation: 'Traditional callback patterns and the callback hell problem.'
              },
              {
                code: `// Promises
// Creating and using promises
const fetchUser = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = { id: userId, name: "John" };
            if (user) {
                resolve(user);
            } else {
                reject(new Error("User not found"));
            }
        }, 1000);
    });
};

// Promise chaining
fetchUser(1)
    .then(user => {
        console.log("User:", user);
        return fetchUserPosts(user.id);
    })
    .then(posts => {
        console.log("Posts:", posts);
        return fetchPostComments(posts[0].id);
    })
    .then(comments => {
        console.log("Comments:", comments);
    })
    .catch(error => {
        console.error("Error:", error);
    })
    .finally(() => {
        console.log("Operation completed");
    });

// Handling multiple promises
const userPromise = fetchUser(1);
const postsPromise = fetchPosts();
const settingsPromise = fetchSettings();

// Wait for all promises to resolve
Promise.all([userPromise, postsPromise, settingsPromise])
    .then(([user, posts, settings]) => {
        console.log("All data loaded:", { user, posts, settings });
    })
    .catch(error => {
        console.error("One or more requests failed:", error);
    });

// Race between promises
Promise.race([
    fetchFastAPI(),
    fetchSlowAPI()
]).then(result => {
    console.log("First API to respond:", result);
});`,
                explanation: 'Working with Promises, including creation, chaining, and handling multiple promises.'
              },
              {
                code: `// Async/Await
// Basic async/await usage
async function getUserData(userId) {
    try {
        const user = await fetchUser(userId);
        const posts = await fetchUserPosts(user.id);
        const comments = await fetchPostComments(posts[0].id);
        
        return {
            user,
            posts,
            comments
        };
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
}

// Parallel execution with async/await
async function getMultipleUsers(userIds) {
    try {
        const userPromises = userIds.map(id => fetchUser(id));
        const users = await Promise.all(userPromises);
        return users;
    } catch (error) {
        console.error("Error fetching multiple users:", error);
        throw error;
    }
}

// Modern async patterns
// Using AbortController
const controller = new AbortController();
const { signal } = controller;

fetch('https://api.example.com/data', { signal })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
        if (error.name === 'AbortError') {
            console.log('Fetch aborted');
        } else {
            console.error('Error:', error);
        }
    });

// Cancel the fetch after 5 seconds
setTimeout(() => controller.abort(), 5000);

// Async iteration
async function* generateNumbers() {
    for (let i = 0; i < 5; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        yield i;
    }
}

async function processNumbers() {
    for await (const num of generateNumbers()) {
        console.log(num);
    }
}`,
                explanation: 'Modern asynchronous programming using async/await and advanced patterns.'
              }
            ],
            exercise: 'Create a simple task scheduler that manages asynchronous tasks with priorities. Implement features for adding tasks, executing them in order, handling errors, and supporting task cancellation.',
            solution: `// Task Scheduler with Priority Queue
class Task {
    constructor(name, priority, action) {
        this.name = name;
        this.priority = priority;
        this.action = action;
        this.status = 'pending';
        this.controller = new AbortController();
    }

    async execute() {
        try {
            this.status = 'running';
            const result = await this.action(this.controller.signal);
            this.status = 'completed';
            return result;
        } catch (error) {
            this.status = 'failed';
            if (error.name === 'AbortError') {
                throw new Error(\`Task "\${this.name}" was cancelled\`);
            }
            throw error;
        }
    }

    cancel() {
        this.controller.abort();
        this.status = 'cancelled';
    }
}

class TaskScheduler {
    constructor() {
        this.tasks = [];
        this.running = false;
    }

    addTask(name, priority, action) {
        const task = new Task(name, priority, action);
        this.tasks.push(task);
        // Sort tasks by priority (higher number = higher priority)
        this.tasks.sort((a, b) => b.priority - a.priority);
        return task;
    }

    async start() {
        if (this.running) {
            throw new Error('Scheduler is already running');
        }

        this.running = true;
        
        while (this.tasks.length > 0 && this.running) {
            const task = this.tasks[0]; // Get highest priority task
            
            try {
                console.log(\`Executing task: \${task.name}\`);
                await task.execute();
                console.log(\`Completed task: \${task.name}\`);
            } catch (error) {
                console.error(\`Task "\${task.name}" failed:, error.message\`);
            } finally {
                // Remove the task regardless of outcome
                this.tasks.shift();
            }
        }

        this.running = false;
    }

    stop() {
        this.running = false;
        // Cancel all pending tasks
        this.tasks.forEach(task => task.cancel());
    }

    getStatus() {
        return {
            running: this.running,
            pendingTasks: this.tasks.length,
            tasks: this.tasks.map(task => ({
                name: task.name,
                priority: task.priority,
                status: task.status
            }))
        };
    }
}

// Example usage
const scheduler = new TaskScheduler();

// Add some example tasks
scheduler.addTask('Send email', 2, async (signal) => {
    await new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            resolve('Email sent');
        }, 2000);

        signal.addEventListener('abort', () => {
            clearTimeout(timeout);
            reject(new Error('Task cancelled'));
        });
    });
});

scheduler.addTask('Process data', 3, async (signal) => {
    await new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            resolve('Data processed');
        }, 3000);

        signal.addEventListener('abort', () => {
            clearTimeout(timeout);
            reject(new Error('Task cancelled'));
        });
    });
});

scheduler.addTask('Backup database', 1, async (signal) => {
    await new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            resolve('Backup completed');
        }, 4000);

        signal.addEventListener('abort', () => {
            clearTimeout(timeout);
            reject(new Error('Task cancelled'));
        });
    });
});

// Start the scheduler
console.log('Starting scheduler...');
scheduler.start().then(() => {
    console.log('All tasks completed');
    console.log('Final status:', scheduler.getStatus());
});

// Example: Cancel after 5 seconds
setTimeout(() => {
    console.log('Stopping scheduler...');
    scheduler.stop();
}, 5000);`,
            quizzes: [
              {
                id: 'js-async-q1',
                question: 'What is the main difference between Promises and async/await?',
                options: [
                  'Promises are faster than async/await',
                  'async/await can only handle one promise at a time',
                  'async/await provides cleaner syntax for handling promises',
                  'Promises cannot handle errors'
                ],
                correctAnswer: 'async/await provides cleaner syntax for handling promises',
                explanation: 'async/await is syntactic sugar over Promises, providing a more readable and synchronous-looking way to write asynchronous code. Under the hood, it still uses Promises.'
              },
              {
                id: 'js-async-q2',
                question: 'What will be the output of: Promise.all([Promise.resolve(1), Promise.reject("error"), Promise.resolve(3)])?',
                options: [
                  '[1, "error", 3]',
                  'Error: "error"',
                  '1',
                  'undefined'
                ],
                correctAnswer: 'Error: "error"',
                explanation: 'Promise.all() rejects immediately if any of the input promises reject, with the first rejection reason. It only resolves if all input promises resolve.'
              }
            ]
          },
          {
            id: 'js-dom',
            title: 'DOM Manipulation',
            duration: 50,
            content: `
              <h2>DOM Manipulation in JavaScript</h2>
              <p>The Document Object Model (DOM) is a programming interface for HTML documents. Understanding DOM manipulation is crucial for creating interactive web applications and dynamic user interfaces.</p>

              <h3>DOM Basics</h3>
              <ul>
                <li><strong>DOM Tree</strong>: Document structure representation</li>
                <li><strong>Node Types</strong>: Elements, text, comments</li>
                <li><strong>Element Properties</strong>: innerHTML, textContent, value</li>
                <li><strong>Element Attributes</strong>: getAttribute, setAttribute</li>
              </ul>

              <h3>Selecting Elements</h3>
              <ul>
                <li><strong>By ID</strong>: getElementById()</li>
                <li><strong>By Class</strong>: getElementsByClassName()</li>
                <li><strong>By Tag</strong>: getElementsByTagName()</li>
                <li><strong>Query Selectors</strong>: querySelector(), querySelectorAll()</li>
              </ul>

              <h3>Modifying the DOM</h3>
              <ul>
                <li><strong>Creating Elements</strong>: createElement()</li>
                <li><strong>Adding/Removing Elements</strong>: appendChild(), removeChild()</li>
                <li><strong>Modifying Content</strong>: textContent, innerHTML</li>
                <li><strong>Styling Elements</strong>: style property, classList</li>
              </ul>

              <h3>Event Handling</h3>
              <ul>
                <li><strong>Event Listeners</strong>: addEventListener(), removeEventListener()</li>
                <li><strong>Event Types</strong>: click, submit, keydown, etc.</li>
                <li><strong>Event Delegation</strong>: Handling events on parent elements</li>
                <li><strong>Event Object</strong>: Properties and methods</li>
              </ul>
            `,
            codeExamples: [
              {
                code: `// Selecting Elements
// By ID
const mainTitle = document.getElementById('main-title');
console.log(mainTitle.textContent);

// By class name
const items = document.getElementsByClassName('item');
Array.from(items).forEach(item => {
    console.log(item.textContent);
});

// Query selector
const firstButton = document.querySelector('button');
const allButtons = document.querySelectorAll('.btn');

// Traversing the DOM
const parent = firstButton.parentElement;
const nextSibling = firstButton.nextElementSibling;
const children = parent.children;

// Checking element properties
console.log(firstButton.tagName);        // "BUTTON"
console.log(firstButton.className);      // "btn"
console.log(firstButton.id);             // "submit-btn"
console.log(firstButton.getAttribute('data-id')); // Custom attribute`,
                explanation: 'Different methods for selecting and traversing DOM elements.'
              },
              {
                code: `// Modifying Elements
// Creating and adding elements
const newDiv = document.createElement('div');
newDiv.className = 'container';
newDiv.textContent = 'New Container';
document.body.appendChild(newDiv);

// Creating complex elements
const card = document.createElement('div');
card.innerHTML = \`
    <div class="card">
        <h2>Title</h2>
        <p>Content goes here</p>
        <button>Click me</button>
    </div>
\`;

// Modifying styles
const element = document.querySelector('.target');
element.style.backgroundColor = '#f0f0f0';
element.style.padding = '20px';
element.style.border = '1px solid #ccc';

// Working with classes
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('selected');
element.classList.replace('old-class', 'new-class');

// Removing elements
const oldElement = document.querySelector('.old');
if (oldElement) {
    oldElement.remove(); // Modern way
    // Or traditional way:
    // oldElement.parentElement.removeChild(oldElement);
}`,
                explanation: 'Creating, modifying, and removing DOM elements.'
              },
              {
                code: `// Event Handling
// Basic event listener
const button = document.querySelector('#submit');
button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Button clicked!');
});

// Event object properties
document.addEventListener('keydown', (event) => {
    console.log(\`Key pressed: \${event.key}\`);
    console.log(\`Ctrl key: \${event.ctrlKey}\`);
    console.log(\`Shift key: \${event.shiftKey}\`);
});

// Event delegation
document.querySelector('#list').addEventListener('click', (event) => {
    if (event.target.matches('li')) {
        console.log('List item clicked:', event.target.textContent);
    }
});

// Custom events
const customEvent = new CustomEvent('userAction', {
    detail: {
        username: 'John',
        timestamp: new Date()
    }
});

document.addEventListener('userAction', (event) => {
    console.log('User action:', event.detail);
});

document.dispatchEvent(customEvent);

// Form handling
const form = document.querySelector('#myForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    console.log('Form data:', data);
});`,
                explanation: 'Event handling and delegation in the DOM.'
              }
            ],
            exercise: 'Create a dynamic todo list application that allows users to add, edit, complete, and delete tasks. Include features like task filtering, local storage persistence, and drag-and-drop reordering.',
            solution: `// Todo List Application
class TodoApp {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
        this.filter = 'all'; // all, active, completed
        
        this.init();
    }
    
    init() {
        // Create app structure
        this.container.innerHTML = \`
            <div class="todo-app">
                <form id="todo-form">
                    <input type="text" id="todo-input" placeholder="Add new task...">
                    <button type="submit">Add</button>
                </form>
                
                <div class="filters">
                    <button data-filter="all" class="active">All</button>
                    <button data-filter="active">Active</button>
                    <button data-filter="completed">Completed</button>
                </div>
                
                <ul id="todo-list"></ul>
                
                <div class="todo-stats">
                    <span id="items-left">0 items left</span>
                    <button id="clear-completed">Clear completed</button>
                </div>
            </div>
        \`;
        
        // Add event listeners
        this.bindEvents();
        
        // Initial render
        this.render();
    }
    
    bindEvents() {
        // Form submission
        const form = this.container.querySelector('#todo-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = form.querySelector('#todo-input');
            const text = input.value.trim();
            
            if (text) {
                this.addTodo(text);
                input.value = '';
            }
        });
        
        // Filter clicks
        const filters = this.container.querySelector('.filters');
        filters.addEventListener('click', (e) => {
            if (e.target.matches('button')) {
                this.filter = e.target.dataset.filter;
                
                // Update active filter button
                filters.querySelectorAll('button').forEach(btn => {
                    btn.classList.toggle('active', btn.dataset.filter === this.filter);
                });
                
                this.render();
            }
        });
        
        // Clear completed
        this.container.querySelector('#clear-completed').addEventListener('click', () => {
            this.todos = this.todos.filter(todo => !todo.completed);
            this.save();
            this.render();
        });
        
        // Todo list events (delegation)
        const todoList = this.container.querySelector('#todo-list');
        todoList.addEventListener('click', (e) => {
            const li = e.target.closest('li');
            if (!li) return;
            
            const todoId = parseInt(li.dataset.id);
            
            if (e.target.matches('.toggle')) {
                this.toggleTodo(todoId);
            } else if (e.target.matches('.delete')) {
                this.deleteTodo(todoId);
            }
        });
        
        // Double click to edit
        todoList.addEventListener('dblclick', (e) => {
            const li = e.target.closest('li');
            if (!li || !e.target.matches('.todo-text')) return;
            
            const todoId = parseInt(li.dataset.id);
            this.editTodo(todoId, li);
        });
        
        // Drag and drop
        todoList.addEventListener('dragstart', (e) => {
            if (e.target.matches('li')) {
                e.target.classList.add('dragging');
                e.dataTransfer.setData('text/plain', e.target.dataset.id);
            }
        });
        
        todoList.addEventListener('dragend', (e) => {
            if (e.target.matches('li')) {
                e.target.classList.remove('dragging');
            }
        });
        
        todoList.addEventListener('dragover', (e) => {
            e.preventDefault();
            const draggable = this.container.querySelector('.dragging');
            if (!draggable) return;
            
            const afterElement = this.getDragAfterElement(todoList, e.clientY);
            if (afterElement) {
                todoList.insertBefore(draggable, afterElement);
            } else {
                todoList.appendChild(draggable);
            }
        });
        
        todoList.addEventListener('drop', (e) => {
            e.preventDefault();
            this.updateTodoOrder();
        });
    }
    
    getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('li:not(.dragging)')];
        
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            
            if (offset < 0 && offset > closest.offset) {
                return { offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }
    
    addTodo(text) {
        const todo = {
            id: Date.now(),
            text,
            completed: false
        };
        
        this.todos.push(todo);
        this.save();
        this.render();
    }
    
    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.save();
            this.render();
        }
    }
    
    deleteTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id);
        this.save();
        this.render();
    }
    
    editTodo(id, li) {
        const todo = this.todos.find(t => t.id === id);
        if (!todo) return;
        
        const textSpan = li.querySelector('.todo-text');
        const input = document.createElement('input');
        input.type = 'text';
        input.value = todo.text;
        input.className = 'edit-input';
        
        const finishEdit = () => {
            const newText = input.value.trim();
            if (newText) {
                todo.text = newText;
                this.save();
                this.render();
            }
        };
        
        input.addEventListener('blur', finishEdit);
        input.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                finishEdit();
            } else if (e.key === 'Escape') {
                this.render();
            }
        });
        
        li.replaceChild(input, textSpan);
        input.focus();
    }
    
    updateTodoOrder() {
        const newOrder = Array.from(this.container.querySelectorAll('#todo-list li'))
            .map(li => parseInt(li.dataset.id));
            
        this.todos = newOrder.map(id => this.todos.find(t => t.id === id));
        this.save();
    }
    
    save() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }
    
    render() {
        const todoList = this.container.querySelector('#todo-list');
        const itemsLeft = this.container.querySelector('#items-left');
        
        // Filter todos
        const filteredTodos = this.todos.filter(todo => {
            if (this.filter === 'active') return !todo.completed;
            if (this.filter === 'completed') return todo.completed;
            return true;
        });
        
        // Render todos
        todoList.innerHTML = filteredTodos.map(todo => \`
            <li data-id="\${todo.id}" draggable="true" class="\${todo.completed ? 'completed' : ''}">
                <input type="checkbox" class="toggle" \${todo.completed ? 'checked' : ''}>
                <span class="todo-text">\${todo.text}</span>
                <button class="delete">×</button>
            </li>
        \`).join('');
        
        // Update items left
        const activeCount = this.todos.filter(t => !t.completed).length;
        itemsLeft.textContent = \`\${activeCount} item\${activeCount !== 1 ? 's' : ''} left\`;
    }
}

// Initialize the app
const todoApp = new TodoApp('todo-container');

// Add some CSS styles
const styles = \`
    .todo-app {
        max-width: 600px;
        margin: 20px auto;
        padding: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    #todo-form {
        display: flex;
        margin-bottom: 20px;
    }
    
    #todo-input {
        flex: 1;
        padding: 8px;
        font-size: 16px;
        border: 1px solid #ddd;
        border-radius: 4px;
        margin-right: 10px;
    }
    
    button {
        padding: 8px 16px;
        background: #4CAF50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    
    button:hover {
        background: #45a049;
    }
    
    .filters {
        margin-bottom: 20px;
    }
    
    .filters button {
        background: #f0f0f0;
        color: #333;
        margin-right: 10px;
    }
    
    .filters button.active {
        background: #4CAF50;
        color: white;
    }
    
    #todo-list {
        list-style: none;
        padding: 0;
    }
    
    #todo-list li {
        display: flex;
        align-items: center;
        padding: 10px;
        background: #fff;
        border: 1px solid #ddd;
        margin-bottom: 5px;
        border-radius: 4px;
    }
    
    #todo-list li.completed .todo-text {
        text-decoration: line-through;
        color: #888;
    }
    
    .toggle {
        margin-right: 10px;
    }
    
    .todo-text {
        flex: 1;
        margin: 0 10px;
    }
    
    .delete {
        background: #ff4444;
        color: white;
        border: none;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        padding: 0;
    }
    
    .delete:hover {
        background: #cc0000;
    }
    
    .todo-stats {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid #ddd;
    }
    
    .dragging {
        opacity: 0.5;
    }
    
    .edit-input {
        flex: 1;
        margin: 0 10px;
        padding: 5px;
        font-size: 16px;
        border: 1px solid #4CAF50;
        border-radius: 4px;
    }
\`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);`,
            quizzes: [
              {
                id: 'js-dom-q1',
                question: 'What is the difference between textContent and innerHTML?',
                options: [
                  'textContent is faster than innerHTML',
                  'innerHTML can parse HTML strings while textContent treats everything as text',
                  'textContent only works with modern browsers',
                  'innerHTML is more secure than textContent'
                ],
                correctAnswer: 'innerHTML can parse HTML strings while textContent treats everything as text',
                explanation: 'textContent gets/sets the text content of an element, treating everything as plain text, while innerHTML can parse and render HTML strings, which can be both powerful and potentially dangerous if not properly sanitized.'
              },
              {
                id: 'js-dom-q2',
                question: 'Which method is more efficient for adding multiple elements to the DOM?',
                options: [
                  'Using multiple appendChild() calls',
                  'Using innerHTML',
                  'Using insertBefore()',
                  'Using DocumentFragment'
                ],
                correctAnswer: 'Using DocumentFragment',
                explanation: 'DocumentFragment is a lightweight container that can hold multiple elements and be inserted into the DOM with a single operation, minimizing reflows and repaints.'
              }
            ]
          },
          {
            id: 'js-errors',
            title: 'Error Handling & Debugging',
            duration: 45,
            content: `
              <h2>Error Handling and Debugging in JavaScript</h2>
              <p>Understanding how to handle errors and debug code effectively is essential for developing reliable JavaScript applications. This lesson covers error handling mechanisms, debugging techniques, and best practices for writing maintainable code.</p>

              <h3>Types of Errors</h3>
              <ul>
                <li><strong>Syntax Errors</strong>: Invalid JavaScript code</li>
                <li><strong>Runtime Errors</strong>: Errors that occur during execution</li>
                <li><strong>Logical Errors</strong>: Code runs but produces incorrect results</li>
                <li><strong>Type Errors</strong>: Operations on incompatible types</li>
              </ul>

              <h3>Error Handling</h3>
              <ul>
                <li><strong>try...catch</strong>: Basic error handling</li>
                <li><strong>throw</strong>: Custom error creation</li>
                <li><strong>Error Objects</strong>: Built-in error types</li>
                <li><strong>finally</strong>: Cleanup operations</li>
              </ul>

              <h3>Debugging Techniques</h3>
              <ul>
                <li><strong>Console Methods</strong>: log, error, warn, info</li>
                <li><strong>Debugger Statement</strong>: Browser debugging</li>
                <li><strong>Source Maps</strong>: Debugging compiled code</li>
                <li><strong>Performance Tools</strong>: Profiling and optimization</li>
              </ul>

              <h3>Error Prevention</h3>
              <ul>
                <li><strong>Input Validation</strong>: Checking data before processing</li>
                <li><strong>Type Checking</strong>: Ensuring correct data types</li>
                <li><strong>Defensive Programming</strong>: Anticipating errors</li>
                <li><strong>Error Boundaries</strong>: Containing component errors</li>
              </ul>
            `,
            codeExamples: [
              {
                code: `// Basic Error Handling
// try...catch block
try {
    const result = someUndefinedFunction();
    console.log(result);
} catch (error) {
    console.error('An error occurred:', error.message);
    // Log to error tracking service
    logError(error);
} finally {
    // Cleanup code
    console.log('Execution completed');
}

// Custom Error Types
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
        this.code = 'INVALID_INPUT';
    }
}

// Using custom errors
function validateUser(user) {
    if (!user.name) {
        throw new ValidationError('Name is required');
    }
    if (!user.email) {
        throw new ValidationError('Email is required');
    }
    if (!user.email.includes('@')) {
        throw new ValidationError('Invalid email format');
    }
}

// Error handling with async/await
async function fetchUserData(userId) {
    try {
        const response = await fetch(\`/api/users/\${userId}\`);
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        if (error instanceof TypeError) {
            console.error('Network error:', error);
        } else {
            console.error('Other error:', error);
        }
        throw error; // Re-throw to handle at higher level
    }
}`,
                explanation: 'Basic error handling patterns including try...catch blocks and custom error types.'
              },
              {
                code: `// Debugging Techniques
// Console methods
console.log('Regular message');
console.info('Information message');
console.warn('Warning message');
console.error('Error message');

// Complex object logging
const user = { name: 'John', age: 30, roles: ['admin', 'user'] };
console.log('User object:', user);
console.table(user); // Tabular format
console.dir(user, { depth: null }); // Full object inspection

// Performance measurement
console.time('operation');
for (let i = 0; i < 1000000; i++) {
    // Some operation
}
console.timeEnd('operation');

// Stack trace logging
function functionC() {
    console.trace('Trace from functionC');
}

function functionB() {
    functionC();
}

function functionA() {
    functionB();
}

functionA();

// Conditional debugging
let debugMode = true;
function debug(...args) {
    if (debugMode) {
        console.log(...args);
    }
}

// Using debugger statement
function complexCalculation(data) {
    debugger; // Browser will pause here when dev tools are open
    let result = 0;
    for (let item of data) {
        result += processItem(item);
    }
    return result;
}`,
                explanation: 'Various debugging techniques including console methods and debugger statements.'
              },
              {
                code: `// Error Prevention and Defensive Programming
// Type checking
function processValue(value) {
    // Type checking
    if (typeof value !== 'number') {
        throw new TypeError('Value must be a number');
    }
    
    // Range validation
    if (value < 0 || value > 100) {
        throw new RangeError('Value must be between 0 and 100');
    }
    
    return value * 2;
}

// Null checking with optional chaining
function getUserCity(user) {
    return user?.address?.city ?? 'Unknown';
}

// Default values with destructuring
function processConfig(config) {
    const {
        timeout = 1000,
        retries = 3,
        baseUrl = 'http://localhost'
    } = config || {};
    
    return { timeout, retries, baseUrl };
}

// Input validation utility
const validator = {
    isString(value) {
        return typeof value === 'string';
    },
    
    isNumber(value) {
        return typeof value === 'number' && !isNaN(value);
    },
    
    isEmail(value) {
        return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value);
    },
    
    isPhone(value) {
        return /^\\+?[1-9]\\d{1,14}$/.test(value);
    }
};

// Using the validator
function createUser(userData) {
    const errors = [];
    
    if (!validator.isString(userData.name)) {
        errors.push('Name must be a string');
    }
    
    if (!validator.isEmail(userData.email)) {
        errors.push('Invalid email format');
    }
    
    if (userData.phone && !validator.isPhone(userData.phone)) {
        errors.push('Invalid phone number format');
    }
    
    if (errors.length > 0) {
        throw new ValidationError(errors.join(', '));
    }
    
    return {
        id: generateId(),
        ...userData,
        createdAt: new Date()
    };
}`,
                explanation: 'Error prevention techniques including type checking, input validation, and defensive programming.'
              }
            ],
            exercise: 'Create a robust form validation library that handles different types of inputs (text, email, phone, etc.), provides detailed error messages, and includes both synchronous and asynchronous validation capabilities.',
            solution: `// Form Validation Library
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = 'ValidationError';
        this.field = field;
    }
}

class FormValidator {
    constructor() {
        this.rules = new Map();
        this.asyncRules = new Map();
        this.errors = new Map();
    }
    
    // Add validation rule
    addRule(field, rules) {
        this.rules.set(field, rules);
    }
    
    // Add async validation rule
    addAsyncRule(field, rule) {
        this.asyncRules.set(field, rule);
    }
    
    // Validate single value
    validateValue(value, rules) {
        for (const rule of rules) {
            switch (rule.type) {
                case 'required':
                    if (!value || value.trim() === '') {
                        throw new ValidationError('This field is required', rule.field);
                    }
                    break;
                    
                case 'email':
                    if (value && !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value)) {
                        throw new ValidationError('Invalid email format', rule.field);
                    }
                    break;
                    
                case 'phone':
                    if (value && !/^\\+?[1-9]\\d{1,14}$/.test(value)) {
                        throw new ValidationError('Invalid phone number', rule.field);
                    }
                    break;
                    
                case 'minLength':
                    if (value && value.length < rule.value) {
                        throw new ValidationError(
                            \`Minimum length is \${rule.value} characters\`,
                            rule.field
                        );
                    }
                    break;
                    
                case 'maxLength':
                    if (value && value.length > rule.value) {
                        throw new ValidationError(
                            \`Maximum length is \${rule.value} characters\`,
                            rule.field
                        );
                    }
                    break;
                    
                case 'pattern':
                    if (value && !rule.value.test(value)) {
                        throw new ValidationError(
                            rule.message || 'Invalid format',
                            rule.field
                        );
                    }
                    break;
                    
                case 'custom':
                    try {
                        rule.validate(value);
                    } catch (error) {
                        throw new ValidationError(error.message, rule.field);
                    }
                    break;
            }
        }
    }
    
    // Validate form data
    async validate(formData) {
        this.errors.clear();
        const validationPromises = [];
        
        // Synchronous validation
        for (const [field, rules] of this.rules) {
            try {
                this.validateValue(formData[field], rules);
            } catch (error) {
                if (error instanceof ValidationError) {
                    this.errors.set(error.field, error.message);
                } else {
                    throw error; // Re-throw unexpected errors
                }
            }
        }
        
        // Asynchronous validation
        for (const [field, rule] of this.asyncRules) {
            const promise = rule(formData[field])
                .catch(error => {
                    this.errors.set(field, error.message);
                });
            validationPromises.push(promise);
        }
        
        // Wait for all async validations
        await Promise.all(validationPromises);
        
        return {
            isValid: this.errors.size === 0,
            errors: Object.fromEntries(this.errors)
        };
    }
}

// Example usage
const validator = new FormValidator();

// Add validation rules
validator.addRule('username', [
    { type: 'required', field: 'username' },
    { type: 'minLength', value: 3, field: 'username' },
    { type: 'maxLength', value: 20, field: 'username' },
    {
        type: 'pattern',
        value: /^[a-zA-Z0-9_]+$/,
        message: 'Username can only contain letters, numbers and underscore',
        field: 'username'
    }
]);

validator.addRule('email', [
    { type: 'required', field: 'email' },
    { type: 'email', field: 'email' }
]);

validator.addRule('phone', [
    { type: 'phone', field: 'phone' }
]);

validator.addRule('password', [
    { type: 'required', field: 'password' },
    { type: 'minLength', value: 8, field: 'password' },
    {
        type: 'custom',
        field: 'password',
        validate: (value) => {
            if (!/[A-Z]/.test(value)) {
                throw new Error('Password must contain at least one uppercase letter');
            }
            if (!/[a-z]/.test(value)) {
                throw new Error('Password must contain at least one lowercase letter');
            }
            if (!/[0-9]/.test(value)) {
                throw new Error('Password must contain at least one number');
            }
        }
    }
]);

// Add async validation (e.g., checking if username is available)
validator.addAsyncRule('username', async (username) => {
    const response = await fetch(\`/api/check-username?username=\${username}\`);
    const data = await response.json();
    
    if (!data.available) {
        throw new Error('Username is already taken');
    }
});

// Example form data
const formData = {
    username: 'john_doe',
    email: 'john@example.com',
    phone: '+1234567890',
    password: 'Password123'
};

// Validate form
validator.validate(formData)
    .then(result => {
        if (result.isValid) {
            console.log('Form is valid');
        } else {
            console.log('Validation errors:', result.errors);
        }
    })
    .catch(error => {
        console.error('Validation failed:', error);
    });`,
            quizzes: [
              {
                id: 'js-errors-q1',
                question: 'What is the difference between throw and try...catch?',
                options: [
                  'throw is used to handle errors while try...catch creates errors',
                  'throw creates an error while try...catch handles errors',
                  'throw only works with built-in errors while try...catch works with custom errors',
                  'There is no difference'
                ],
                correctAnswer: 'throw creates an error while try...catch handles errors',
                explanation: 'throw is used to create and raise an error, while try...catch is a mechanism to handle errors that occur within the try block.'
              },
              {
                id: 'js-errors-q2',
                question: 'Which console method is best for debugging performance issues?',
                options: [
                  'console.log()',
                  'console.error()',
                  'console.time()/timeEnd()',
                  'console.trace()'
                ],
                correctAnswer: 'console.time()/timeEnd()',
                explanation: 'console.time() and console.timeEnd() are specifically designed to measure the duration between two points in code execution, making them ideal for performance debugging.'
              }
            ]
          },
          {
            id: 'js-modern',
            title: 'Modern JavaScript Features (ES6+)',
            duration: 55,
            content: `
              <h2>Modern JavaScript Features</h2>
              <p>JavaScript has evolved significantly since ES6 (ES2015). Understanding modern JavaScript features is essential for writing clean, efficient, and maintainable code. This lesson covers key features introduced in recent versions of JavaScript.</p>

              <h3>ES6 Fundamentals</h3>
              <ul>
                <li><strong>let and const</strong>: Block-scoped declarations</li>
                <li><strong>Arrow Functions</strong>: Concise function syntax</li>
                <li><strong>Template Literals</strong>: String interpolation</li>
                <li><strong>Destructuring</strong>: Array and object unpacking</li>
              </ul>

              <h3>Enhanced Object Features</h3>
              <ul>
                <li><strong>Object Shorthand</strong>: Simplified object literals</li>
                <li><strong>Computed Properties</strong>: Dynamic property names</li>
                <li><strong>Spread/Rest Operator</strong>: Object and array manipulation</li>
                <li><strong>Optional Chaining</strong>: Safe property access</li>
              </ul>

              <h3>New Data Structures</h3>
              <ul>
                <li><strong>Map and Set</strong>: Built-in collections</li>
                <li><strong>WeakMap and WeakSet</strong>: Memory-efficient collections</li>
                <li><strong>Symbol</strong>: Unique identifiers</li>
                <li><strong>BigInt</strong>: Large number handling</li>
              </ul>

              <h3>Advanced Features</h3>
              <ul>
                <li><strong>Iterators and Generators</strong>: Custom iteration</li>
                <li><strong>Modules</strong>: Code organization</li>
                <li><strong>Proxy and Reflect</strong>: Meta-programming</li>
                <li><strong>Nullish Coalescing</strong>: Default value handling</li>
              </ul>
            `,
            codeExamples: [
              {
                code: `// ES6 Fundamentals
// let and const
let counter = 0;
const PI = 3.14159;

// Arrow functions
const add = (a, b) => a + b;
const multiply = (a, b) => {
    console.log('Multiplying numbers...');
    return a * b;
};

// Template literals
const name = 'Alice';
const greeting = \`Hello, \${name}!
Welcome to Modern JavaScript.
Your lucky number is: \${Math.random()}\`;

// Destructuring
const person = { name: 'Bob', age: 30, city: 'New York' };
const { name: userName, age } = person;

const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

// Parameter destructuring
function printUserInfo({ name, age, city = 'Unknown' }) {
    console.log(\`\${name} is \${age} years old from \${city}\`);
}

// Array destructuring with defaults
const [x = 1, y = 2] = [];  // x = 1, y = 2`,
                explanation: 'Core ES6 features including variable declarations, arrow functions, template literals, and destructuring.'
              },
              {
                code: `// Enhanced Object Features
// Object shorthand
const x = 10, y = 20;
const point = { x, y };

// Computed properties
const propertyName = 'age';
const user = {
    name: 'John',
    [propertyName]: 25,
    [\`user_\${Date.now()}\`]: 'unique'
};

// Spread operator
const defaults = { theme: 'light', language: 'en' };
const userPreferences = {
    ...defaults,
    theme: 'dark'
};

// Object methods
const calculator = {
    add(a, b) {
        return a + b;
    },
    multiply(a, b) {
        return a * b;
    }
};

// Optional chaining
const response = {
    data: {
        user: {
            address: null
        }
    }
};

const city = response?.data?.user?.address?.city ?? 'Unknown';`,
                explanation: 'Modern object features including shorthand syntax, computed properties, and safe property access.'
              },
              {
                code: `// New Data Structures
// Map
const userMap = new Map();
userMap.set('user1', { name: 'Alice', role: 'admin' });
userMap.set('user2', { name: 'Bob', role: 'user' });

// Map iteration
for (const [key, value] of userMap) {
    console.log(\`\${key}: \${value.name}\`);
}

// Set
const uniqueNumbers = new Set([1, 2, 2, 3, 3, 4]);
console.log([...uniqueNumbers]); // [1, 2, 3, 4]

// WeakMap and WeakSet
const weakMap = new WeakMap();
let obj = { id: 1 };
weakMap.set(obj, 'metadata');
obj = null; // Object can be garbage collected

// Symbol
const uniqueKey = Symbol('description');
const obj = {
    [uniqueKey]: 'This is hidden'
};

// BigInt
const bigNumber = 9007199254740991n;
const result = bigNumber + 1n;

// Symbol.iterator
const range = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
        return {
            current: this.from,
            last: this.to,
            next() {
                if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

for (const num of range) {
    console.log(num); // 1, 2, 3, 4, 5
}`,
                explanation: 'Modern JavaScript data structures and their usage patterns.'
              }
            ],
            exercise: 'Create a modern task management system that demonstrates the use of various ES6+ features. Include functionality for task creation, organization, filtering, and state management using modern JavaScript patterns.',
            solution: `// Task Management System
class TaskManager {
    #tasks = new Map();
    #listeners = new Set();
    
    constructor() {
        // Initialize with default categories
        this.categories = new Set(['work', 'personal', 'shopping', 'health']);
    }
    
    // Add a new task
    addTask({ title, description = '', category = 'personal', dueDate = null }) {
        const taskId = Symbol(\`task_\${Date.now()}\`);
        const task = {
            id: taskId,
            title,
            description,
            category,
            dueDate,
            completed: false,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        
        this.#tasks.set(taskId, task);
        this.#notifyListeners('add', task);
        return task;
    }
    
    // Update a task
    updateTask(taskId, updates) {
        const task = this.#tasks.get(taskId);
        if (!task) {
            throw new Error(\`Task \${taskId.description} not found\`);
        }
        
        const updatedTask = {
            ...task,
            ...updates,
            updatedAt: new Date()
        };
        
        this.#tasks.set(taskId, updatedTask);
        this.#notifyListeners('update', updatedTask);
        return updatedTask;
    }
    
    // Delete a task
    deleteTask(taskId) {
        const task = this.#tasks.get(taskId);
        if (!task) {
            throw new Error(\`Task \${taskId.description} not found\`);
        }
        
        this.#tasks.delete(taskId);
        this.#notifyListeners('delete', task);
    }
    
    // Toggle task completion
    toggleTask(taskId) {
        const task = this.#tasks.get(taskId);
        if (!task) {
            throw new Error(\`Task \${taskId.description} not found\`);
        }
        
        return this.updateTask(taskId, {
            completed: !task.completed
        });
    }
    
    // Get tasks with filtering
    getTasks({ category = null, completed = null, searchText = '' } = {}) {
        return [...this.#tasks.values()].filter(task => {
            const matchesCategory = category ? task.category === category : true;
            const matchesStatus = completed !== null ? task.completed === completed : true;
            const matchesSearch = searchText
                ? task.title.toLowerCase().includes(searchText.toLowerCase()) ||
                  task.description.toLowerCase().includes(searchText.toLowerCase())
                : true;
            
            return matchesCategory && matchesStatus && matchesSearch;
        });
    }
    
    // Get task statistics
    getStats() {
        const tasks = [...this.#tasks.values()];
        return {
            total: tasks.length,
            completed: tasks.filter(t => t.completed).length,
            categoryCounts: tasks.reduce((counts, task) => {
                counts[task.category] = (counts[task.category] || 0) + 1;
                return counts;
            }, {}),
            upcomingTasks: tasks.filter(task => {
                if (!task.dueDate || task.completed) return false;
                const dueDate = new Date(task.dueDate);
                const today = new Date();
                return dueDate >= today;
            }).sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
        };
    }
    
    // Subscribe to changes
    subscribe(listener) {
        this.#listeners.add(listener);
        return () => this.#listeners.delete(listener);
    }
    
    // Notify all listeners
    #notifyListeners(action, task) {
        for (const listener of this.#listeners) {
            listener({ action, task });
        }
    }
    
    // Iterator for tasks
    *[Symbol.iterator]() {
        for (const task of this.#tasks.values()) {
            yield task;
        }
    }
}

// Example usage
const taskManager = new TaskManager();

// Add some tasks
const task1 = taskManager.addTask({
    title: 'Complete JavaScript tutorial',
    category: 'work',
    description: 'Learn modern JavaScript features',
    dueDate: '2024-03-20'
});

const task2 = taskManager.addTask({
    title: 'Grocery shopping',
    category: 'shopping',
    description: 'Buy fruits and vegetables'
});

// Subscribe to changes
const unsubscribe = taskManager.subscribe(({ action, task }) => {
    console.log(\`Task \${action}d:, \${task.title}\`);
});

// Update a task
taskManager.updateTask(task1.id, {
    description: 'Learn modern JavaScript features and practice examples'
});

// Toggle completion
taskManager.toggleTask(task2.id);

// Filter tasks
const workTasks = taskManager.getTasks({ category: 'work' });
const completedTasks = taskManager.getTasks({ completed: true });
const searchResults = taskManager.getTasks({ searchText: 'javascript' });

// Get statistics
const stats = taskManager.getStats();
console.log('Task Statistics:', stats);

// Iterate over tasks
for (const task of taskManager) {
    console.log(\`Task: \${task.title} (\${task.completed ? 'Completed' : 'Pending'})\`);
}

// Cleanup
unsubscribe();`,
            quizzes: [
              {
                id: 'js-modern-q1',
                question: 'What is the main difference between let and var declarations?',
                options: [
                  'let is faster than var',
                  'var is block-scoped while let is function-scoped',
                  'let is block-scoped while var is function-scoped',
                  'There is no difference'
                ],
                correctAnswer: 'let is block-scoped while var is function-scoped',
                explanation: 'let declarations are block-scoped, meaning they are only accessible within the block they are declared in, while var declarations are function-scoped and can be accessed throughout the function.'
              },
              {
                id: 'js-modern-q2',
                question: 'What is the output of: const obj = { a: 1 }; const { a, b = 2 } = obj;',
                options: [
                  'a = 1, b = undefined',
                  'a = 1, b = 2',
                  'Error: b is not defined',
                  'a = 1, b = null'
                ],
                correctAnswer: 'a = 1, b = 2',
                explanation: 'When destructuring objects, you can provide default values that will be used when the property doesn\'t exist in the source object. Here, b gets the default value of 2 since it\'s not present in obj.'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'python',
    language: 'Python',
    description: 'Learn Python programming from basics to advanced concepts. Perfect for beginners, data science enthusiasts, and web developers alike.',
    icon: '🐍',
    modules: [
      {
        id: 'py-fundamentals',
        title: 'Beginner Fundamentals',
        summary: 'Master the core concepts of Python programming including variables, data types, control flow, and functions.',
        lessons: [
          {
            id: 'py-variables',
            title: 'Variables & Data Types',
            duration: 30,
            content: `
              <h2>Python Variables and Data Types</h2>
              <p>Python is a dynamically typed language where variables are created through assignment. Understanding Python's data types is crucial for effective programming.</p>
              
              <h3>Basic Data Types</h3>
              <ul>
                <li>Numbers (int, float)</li>
                <li>Strings (str)</li>
                <li>Boolean (bool)</li>
                <li>None (NoneType)</li>
              </ul>

              <h3>Collection Types</h3>
              <ul>
                <li>Lists: Ordered, mutable sequences</li>
                <li>Tuples: Ordered, immutable sequences</li>
                <li>Sets: Unordered collections of unique elements</li>
                <li>Dictionaries: Key-value pairs</li>
              </ul>
            `,
            codeExamples: [
              {
                code: `# Basic variable assignments
name = "Alice"
age = 25
height = 1.75
is_student = True
favorite_colors = ["blue", "green", "purple"]
user_info = {
    "name": "Bob",
    "email": "bob@example.com",
    "active": True
}

# Type checking
print(type(name))        # <class 'str'>
print(type(age))         # <class 'int'>
print(type(height))      # <class 'float'>
print(type(is_student))  # <class 'bool'>`,
                explanation: 'Examples of variable assignment and type checking in Python.'
              },
              {
                code: `# Working with strings
first_name = "John"
last_name = "Doe"

# String concatenation
full_name = first_name + " " + last_name

# String formatting (f-strings)
greeting = f"Hello, {full_name}! You are {age} years old."
print(greeting)

# String methods
print(full_name.upper())
print(full_name.lower())
print(full_name.split())`,
                explanation: 'String operations and formatting in Python using various methods.'
              },
              {
                code: `# Collections
# Lists
fruits = ["apple", "banana", "orange"]
fruits.append("grape")
fruits[0] = "pear"

# Tuples (immutable)
coordinates = (10, 20)
# coordinates[0] = 30  # This would raise an error

# Sets
unique_numbers = {1, 2, 3, 3, 4, 4, 5}
print(unique_numbers)  # {1, 2, 3, 4, 5}

# Dictionaries
person = {
    "name": "Alice",
    "age": 30,
    "skills": ["Python", "JavaScript"]
}
print(person["name"])
person["location"] = "New York"`,
                explanation: 'Working with Python collections: lists, tuples, sets, and dictionaries.'
              }
            ],
            exercise: 'Create a student record system using appropriate data types. Store information about a student including name, age, grades (as a list), and contact information (as a dictionary).',
            solution: `# Student Record System
student_name = "Emma Watson"
student_age = 20
student_grades = [85, 92, 78, 95, 88]
student_contact = {
    "email": "emma@example.com",
    "phone": "123-456-7890",
    "address": "123 University Ave"
}

# Calculate average grade
average_grade = sum(student_grades) / len(student_grades)

# Create complete student record
student_record = {
    "name": student_name,
    "age": student_age,
    "grades": student_grades,
    "average": average_grade,
    "contact": student_contact
}

# Print student information
print(f"Student: {student_record['name']}")
print(f"Age: {student_record['age']}")
print(f"Average Grade: {student_record['average']:.2f}")
print("Contact Info:")
for key, value in student_record['contact'].items():
    print(f"  {key.capitalize()}: {value}")`,
            quizzes: [
              {
                id: 'py-var-q1',
                question: 'Which of the following is mutable?',
                options: ['string', 'tuple', 'list', 'int'],
                correctAnswer: 'list',
                explanation: 'Lists are mutable, meaning their contents can be changed after creation.'
              },
              {
                id: 'py-var-q2',
                question: 'What is the output of: type([1, 2, 3])?',
                options: ['list', 'array', '<class \'list\'>', 'List'],
                correctAnswer: '<class \'list\'>',
                explanation: 'The type() function returns the class name in this format.'
              }
            ]
          },
          {
            id: 'py-control-flow',
            title: 'Control Flow & Loops',
            duration: 45,
            content: `
              <h2>Control Flow in Python</h2>
              <p>Python provides several structures for controlling program flow:</p>
              
              <h3>Conditional Statements</h3>
              <ul>
                <li>if, elif, else statements</li>
                <li>match-case statements (Python 3.10+)</li>
                <li>Conditional expressions (ternary operator)</li>
              </ul>

              <h3>Loops</h3>
              <ul>
                <li>for loops with range()</li>
                <li>for loops with iterables</li>
                <li>while loops</li>
                <li>Loop control: break, continue, else</li>
              </ul>
            `,
            codeExamples: [
              {
                code: `# Conditional statements
age = 18
status = "adult" if age >= 18 else "minor"

if age < 13:
    print("Child")
elif age < 18:
    print("Teenager")
elif age < 65:
    print("Adult")
else:
    print("Senior")

# Match case (Python 3.10+)
command = "help"
match command:
    case "start":
        print("Starting...")
    case "stop":
        print("Stopping...")
    case "help":
        print("Showing help...")
    case _:
        print("Unknown command")`,
                explanation: 'Different ways to implement conditional logic in Python.'
              },
              {
                code: `# For loops
# Using range
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# Iterating over a list
colors = ["red", "green", "blue"]
for color in colors:
    print(color)

# Enumerate for index and value
for index, color in enumerate(colors):
    print(f"{index}: {color}")

# Dictionary iteration
person = {"name": "John", "age": 30}
for key, value in person.items():
    print(f"{key}: {value}")`,
                explanation: 'Different types of for loops in Python.'
              },
              {
                code: `# While loops and control statements
count = 0
while count < 5:
    if count == 2:
        count += 1
        continue  # Skip the rest of this iteration
    print(count)
    count += 1

# Loop with else
for num in range(1, 4):
    if num == 5:
        break
else:
    print("Loop completed without break")

# Nested loops
for i in range(3):
    for j in range(3):
        if i == j:
            print("*", end=" ")
        else:
            print(".", end=" ")
    print()`,
                explanation: 'While loops, loop control statements, and nested loops in Python.'
              }
            ],
            exercise: 'Create a number guessing game where the computer picks a random number between 1 and 100, and the player has to guess it. Use loops and conditional statements to provide "higher" or "lower" hints.',
            solution: `import random

# Number Guessing Game
target = random.randint(1, 100)
attempts = 0
max_attempts = 7

print("Welcome to the Number Guessing Game!")
print(f"I'm thinking of a number between 1 and 100. You have {max_attempts} attempts.")

while attempts < max_attempts:
    try:
        guess = int(input("Enter your guess: "))
        attempts += 1
        
        if guess < 1 or guess > 100:
            print("Please guess a number between 1 and 100.")
            continue
            
        if guess == target:
            print(f"Congratulations! You found the number in {attempts} attempts!")
            break
        elif guess < target:
            print("Higher!")
        else:
            print("Lower!")
            
        remaining = max_attempts - attempts
        print(f"You have {remaining} attempts left.")
            
    except ValueError:
        print("Please enter a valid number.")
else:
    print(f"Game Over! The number was {target}.")`,
            quizzes: [
              {
                id: 'py-flow-q1',
                question: 'What is the output of: for i in range(3): print(i)?',
                options: ['1, 2, 3', '0, 1, 2', '0, 1, 2, 3', '1, 2'],
                correctAnswer: '0, 1, 2',
                explanation: 'range(3) generates numbers from 0 to 2 (3 exclusive).'
              },
              {
                id: 'py-flow-q2',
                question: 'Which statement is used to skip the rest of the current loop iteration?',
                options: ['break', 'pass', 'continue', 'return'],
                correctAnswer: 'continue',
                explanation: 'The continue statement skips the rest of the current iteration and continues with the next one.'
              }
            ]
          }
        ]
      }
      // Additional Python modules would be added here...
    ]
  },
  {
    id: 'java',
    language: 'Java',
    description: 'Master Java programming from fundamentals to advanced concepts. Build robust, scalable applications with one of the world\'s most popular programming languages.',
    icon: '☕',
    modules: [
      {
        id: 'java-fundamentals',
        title: 'Beginner Fundamentals',
        summary: 'Learn the core concepts of Java programming including variables, data types, control flow, and object-oriented basics.',
        lessons: [
          {
            id: 'java-variables',
            title: 'Variables & Data Types',
            duration: 35,
            content: `
              <h2>Java Variables and Data Types</h2>
              <p>Java is a statically-typed language, meaning variable types must be declared explicitly. Understanding Java's type system is fundamental to writing robust code.</p>
              
              <h3>Primitive Data Types</h3>
              <ul>
                <li>byte: 8-bit integer</li>
                <li>short: 16-bit integer</li>
                <li>int: 32-bit integer</li>
                <li>long: 64-bit integer</li>
                <li>float: 32-bit floating-point</li>
                <li>double: 64-bit floating-point</li>
                <li>boolean: true/false</li>
                <li>char: 16-bit Unicode character</li>
              </ul>

              <h3>Reference Types</h3>
              <ul>
                <li>String: Immutable sequence of characters</li>
                <li>Arrays: Fixed-size collections</li>
                <li>Classes: User-defined types</li>
                <li>Interfaces: Abstract types</li>
              </ul>
            `,
            codeExamples: [
              {
                code: `// Primitive data types
int age = 25;
double height = 1.75;
boolean isStudent = true;
char grade = 'A';

// Reference types
String name = "Alice";
int[] numbers = {1, 2, 3, 4, 5};
String[] colors = new String[3];
colors[0] = "Red";
colors[1] = "Green";
colors[2] = "Blue";

// Type checking and casting
System.out.println(age + " is of type: " + ((Object)age).getClass().getName());
System.out.println(name + " is of type: " + name.getClass().getName());`,
                explanation: 'Examples of declaring variables with different data types in Java.'
              },
              {
                code: `// Working with Strings
String firstName = "John";
String lastName = "Doe";

// String concatenation
String fullName = firstName + " " + lastName;

// String methods
System.out.println(fullName.length());        // Length of string
System.out.println(fullName.toUpperCase());   // Convert to upper case
System.out.println(fullName.substring(0, 4)); // Get substring

// String comparison
String str1 = "Hello";
String str2 = "Hello";
String str3 = new String("Hello");

System.out.println(str1 == str2);      // true (same reference)
System.out.println(str1 == str3);      // false (different reference)
System.out.println(str1.equals(str3)); // true (same content)`,
                explanation: 'String operations and comparison in Java.'
              },
              {
                code: `// Arrays and type conversion
// Array declaration and initialization
int[] scores = new int[5];
scores[0] = 95;
scores[1] = 87;
scores[2] = 92;
scores[3] = 88;
scores[4] = 90;

// Calculate average using type conversion
double sum = 0;
for (int score : scores) {
    sum += score;
}
double average = sum / scores.length;

// Type conversion (casting)
int intValue = 42;
double doubleValue = intValue;      // Implicit casting
float floatValue = (float)doubleValue; // Explicit casting

// Working with wrapper classes
Integer wrappedInt = Integer.valueOf(intValue);
String numberStr = "123";
int parsedInt = Integer.parseInt(numberStr);`,
                explanation: 'Working with arrays and type conversion in Java.'
              }
            ],
            exercise: 'Create a student grade calculator that stores student information and calculates their final grade. Use appropriate data types for storing names, scores, and calculating averages.',
            solution: `public class StudentGradeCalculator {
    public static void main(String[] args) {
        // Student information
        String studentName = "Emma Watson";
        int studentId = 12345;
        
        // Store grades for different assignments
        double[] assignments = {85.5, 92.0, 78.5, 95.0, 88.5};
        double[] exams = {90.0, 87.5};
        
        // Calculate final grade
        double assignmentWeight = 0.6;
        double examWeight = 0.4;
        
        // Calculate average assignment score
        double assignmentSum = 0;
        for (double score : assignments) {
            assignmentSum += score;
        }
        double assignmentAverage = assignmentSum / assignments.length;
        
        // Calculate average exam score
        double examSum = 0;
        for (double score : exams) {
            examSum += score;
        }
        double examAverage = examSum / exams.length;
        
        // Calculate final weighted grade
        double finalGrade = (assignmentAverage * assignmentWeight) +
                          (examAverage * examWeight);
        
        // Print results
        System.out.println("Student Grade Report");
        System.out.println("-------------------");
        System.out.println("Name: " + studentName);
        System.out.println("ID: " + studentId);
        System.out.printf("Assignment Average: %.2f\\n", assignmentAverage);
        System.out.printf("Exam Average: %.2f\\n", examAverage);
        System.out.printf("Final Grade: %.2f\\n", finalGrade);
    }
}`,
            quizzes: [
              {
                id: 'java-var-q1',
                question: 'Which of the following is NOT a primitive data type in Java?',
                options: ['int', 'String', 'boolean', 'char'],
                correctAnswer: 'String',
                explanation: 'String is a class in Java, making it a reference type, not a primitive type.'
              },
              {
                id: 'java-var-q2',
                question: 'What is the output of: System.out.println(10 / 3);',
                options: ['3.3333...', '3', '3.0', 'error'],
                correctAnswer: '3',
                explanation: 'Integer division in Java truncates the decimal part, resulting in 3.'
              }
            ]
          },
          {
            id: 'java-control-flow',
            title: 'Control Flow & Loops',
            duration: 40,
            content: `
              <h2>Control Flow in Java</h2>
              <p>Java provides comprehensive structures for controlling program flow:</p>
              
              <h3>Conditional Statements</h3>
              <ul>
                <li>if-else statements</li>
                <li>switch statements</li>
                <li>ternary operator</li>
              </ul>

              <h3>Loops</h3>
              <ul>
                <li>for loops</li>
                <li>enhanced for loops (for-each)</li>
                <li>while loops</li>
                <li>do-while loops</li>
              </ul>

              <h3>Control Flow Statements</h3>
              <ul>
                <li>break: Exit a loop or switch</li>
                <li>continue: Skip to next iteration</li>
                <li>return: Exit method execution</li>
              </ul>
            `,
            codeExamples: [
              {
                code: `// Conditional statements
age = 18
status = "adult" if age >= 18 else "minor"

if age < 13:
    print("Child")
elif age < 18:
    print("Teenager")
elif age < 65:
    print("Adult")
else:
    print("Senior")

// Match case (Python 3.10+)
command = "help"
match command:
    case "start":
        print("Starting...")
    case "stop":
        print("Stopping...")
    case "help":
        print("Showing help...")
    case _:
        print("Unknown command")`,
                explanation: 'Different ways to implement conditional logic in Python.'
              },
              {
                code: `// For loops
// Using range
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

// Iterating over a list
colors = ["red", "green", "blue"]
for color in colors:
    print(color)

// Enumerate for index and value
for index, color in enumerate(colors):
    print(f"{index}: {color}")

// Dictionary iteration
person = {"name": "John", "age": 30}
for key, value in person.items():
    print(f"{key}: {value}")`,
                explanation: 'Different types of for loops in Python.'
              },
              {
                code: `// While loops and control statements
count = 0
while count < 5:
    if count == 2:
        count += 1
        continue  # Skip the rest of this iteration
    print(count)
    count += 1

# Loop with else
for num in range(1, 4):
    if num == 5:
        break
else:
    print("Loop completed without break")

# Nested loops
for i in range(3):
    for j in range(3):
        if i == j:
            print("*", end=" ")
        else:
            print(".", end=" ")
    print()`,
                explanation: 'While loops, loop control statements, and nested loops in Python.'
              }
            ],
            exercise: 'Create a prime number checker that takes a number and determines if it is prime. Use appropriate control flow statements and handle edge cases.',
            solution: `public class PrimeNumberChecker {
    public static void main(String[] args) {
        // Test cases
        int[] numbers = {2, 3, 4, 17, 20, 23};
        
        for (int number : numbers) {
            if (isPrime(number)) {
                System.out.println(number + " is prime");
            } else {
                System.out.println(number + " is not prime");
            }
        }
    }
    
    public static boolean isPrime(int number) {
        // Handle edge cases
        if (number <= 1) {
            return false;
        }
        if (number <= 3) {
            return true;
        }
        if (number % 2 == 0 || number % 3 == 0) {
            return false;
        }
        
        // Check for prime
        for (int i = 5; i * i <= number; i += 6) {
            if (number % i == 0 || number % (i + 2) == 0) {
                return false;
            }
        }
        
        return true;
    }
}`,
            quizzes: [
              {
                id: 'java-flow-q1',
                question: 'Which loop is guaranteed to execute at least once?',
                options: ['for loop', 'while loop', 'do-while loop', 'for-each loop'],
                correctAnswer: 'do-while loop',
                explanation: 'A do-while loop always executes its code block at least once before checking the condition.'
              },
              {
                id: 'java-flow-q2',
                question: 'What will be the output of: for(int i=0; i<5; i++) { if(i==2) continue; System.out.print(i);}',
                options: [
                  '01234',
                  '0134',
                  '1234',
                  '0123'
                ],
                correctAnswer: '0134',
                explanation: 'The continue statement skips iteration when i=2, so 2 is not printed.'
              }
            ]
          }
        ]
      }
      // Additional Java modules would be added here...
    ]
  }
];

export default curriculumData; 