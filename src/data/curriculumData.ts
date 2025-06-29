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
int age = 18;
String status;

// if-else statement
if (age < 13) {
    status = "Child";
} else if (age < 18) {
    status = "Teenager";
} else {
    status = "Adult";
}

// Ternary operator
boolean canVote = age >= 18 ? true : false;

// Switch statement
int dayOfWeek = 3;
String day;
switch (dayOfWeek) {
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    default:
        day = "Other day";
}`,
                explanation: 'Different ways to implement conditional logic in Java.'
              },
              {
                code: `// Loop examples
// Basic for loop
for (int i = 0; i < 5; i++) {
    System.out.println("Count: " + i);
}

// Enhanced for loop (for-each)
int[] numbers = {1, 2, 3, 4, 5};
for (int number : numbers) {
    System.out.println("Number: " + number);
}

// While loop
int count = 0;
while (count < 3) {
    System.out.println("While count: " + count);
    count++;
}

// Do-while loop
int x = 0;
do {
    System.out.println("Do-while x: " + x);
    x++;
} while (x < 3);`,
                explanation: 'Different types of loops in Java.'
              },
              {
                code: `// Control flow statements
// Break and continue
for (int i = 0; i < 10; i++) {
    if (i == 3) {
        continue; // Skip iteration
    }
    if (i == 7) {
        break;    // Exit loop
    }
    System.out.println("Value: " + i);
}

// Nested loops
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (i == j) {
            System.out.print("* ");
        } else {
            System.out.print(". ");
        }
    }
    System.out.println();
}

// Loop with labels
outer:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (i * j > 2) {
            break outer;
        }
        System.out.println(i + "," + j);
    }
}`,
                explanation: 'Control flow statements and nested loops in Java.'
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
                explanation: 'A do-while loop always executes its block at least once before checking the condition.'
              },
              {
                id: 'java-flow-q2',
                question: 'What will be printed? for(int i=0; i<5; i++) { if(i==2) continue; System.out.print(i);}',
                options: ['01234', '0134', '1234', '0123'],
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