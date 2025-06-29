export interface Quiz {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  starterCode: string;
  successCriteria: string[];
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  codeExamples: {
    code: string;
    explanation: string;
  }[];
  quizzes: Quiz[];
  challenge?: Challenge;
}

export interface Module {
  id: string;
  title: string;
  summary: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  language: string;
  description: string;
  modules: Module[];
}

const curriculumData: Course[] = [
  {
    id: 'javascript',
    language: 'JavaScript',
    description: 'Learn JavaScript from basics to advanced concepts including ES6+ features, async programming, and modern frameworks.',
    modules: [
      {
        id: 'javascript-beginner',
        title: 'Beginner Fundamentals',
        summary: 'Master the core concepts of JavaScript including variables, data types, operators, control flow, functions, and basic I/O operations.',
        lessons: [
          {
            id: 'javascript-variables',
            title: 'Variables & Data Types',
            content: `
              <h2>Variables & Data Types in JavaScript</h2>
              
              <p>Variables are containers for storing data values. In JavaScript, we have three ways to declare variables:</p>
              
              <ul>
                <li><code>var</code>: Function-scoped or globally-scoped variable (older style)</li>
                <li><code>let</code>: Block-scoped variable that can be reassigned</li>
                <li><code>const</code>: Block-scoped variable that cannot be reassigned</li>
              </ul>
              
              <p>JavaScript has several data types:</p>
              
              <ul>
                <li><strong>Primitive types</strong>: String, Number, Boolean, undefined, null, Symbol, BigInt</li>
                <li><strong>Reference types</strong>: Object, Array, Function, Date, RegExp</li>
              </ul>
              
              <p>JavaScript is dynamically typed, which means variables can change types during runtime.</p>
            `,
            codeExamples: [
              {
                code: `// Variable declarations
let name = "John";
const age = 30;
var isStudent = true;

// Data types
let string = "Hello";
let number = 42;
let boolean = true;
let undefinedVar;
let nullVar = null;
let array = [1, 2, 3];
let object = { key: "value" };

// Type checking
console.log(typeof string);  // "string"
console.log(typeof number);  // "number"
console.log(typeof boolean); // "boolean"
console.log(typeof array);   // "object" (arrays are objects in JavaScript)`,
                explanation: 'This example demonstrates different ways to declare variables in JavaScript and the various data types available.'
              },
              {
                code: `// Variable reassignment
let count = 1;
console.log(count); // 1
count = 2;
console.log(count); // 2

// Constants cannot be reassigned
const PI = 3.14159;
// PI = 3.14; // This would cause an error

// But objects and arrays declared with const can be modified
const user = { name: "Alice" };
user.name = "Bob"; // This is allowed
console.log(user.name); // "Bob"

const numbers = [1, 2, 3];
numbers.push(4); // This is allowed
console.log(numbers); // [1, 2, 3, 4]`,
                explanation: 'This example shows the difference between let and const, and how const objects and arrays can still be modified.'
              },
              {
                code: `// Type coercion
console.log(5 + "5");      // "55" (number is converted to string)
console.log("5" - 2);      // 3 (string is converted to number)
console.log(true + 1);     // 2 (true is converted to 1)
console.log(false + 1);    // 1 (false is converted to 0)

// Explicit type conversion
console.log(Number("5"));  // 5
console.log(String(5));    // "5"
console.log(Boolean(0));   // false
console.log(Boolean(1));   // true
console.log(Boolean(""));  // false
console.log(Boolean("hi")); // true`,
                explanation: 'This example demonstrates type coercion (automatic type conversion) and explicit type conversion in JavaScript.'
              }
            ],
            quizzes: [
              {
                id: 'js-var-quiz-1',
                question: 'What is the output of: console.log(typeof [1, 2, 3])?',
                options: [
                  'array',
                  'object',
                  'Array',
                  'list'
                ],
                correctAnswer: 'object',
                explanation: 'In JavaScript, arrays are a type of object, so typeof returns "object" for arrays.'
              },
              {
                id: 'js-var-quiz-2',
                question: 'Which variable declaration cannot be reassigned?',
                options: [
                  'var',
                  'let',
                  'const',
                  'all can be reassigned'
                ],
                correctAnswer: 'const',
                explanation: 'const variables cannot be reassigned after initialization, though if they contain objects, the object properties can still be modified.'
              }
            ],
            challenge: {
              id: 'js-var-challenge',
              title: 'Temperature Converter',
              description: 'Create a temperature converter that converts between Celsius and Fahrenheit. Use variables to store the temperatures and perform the conversions.',
              starterCode: `// Complete the functions below

function celsiusToFahrenheit(celsius) {
  // Convert Celsius to Fahrenheit
  // Formula: F = C * 9/5 + 32
  
}

function fahrenheitToCelsius(fahrenheit) {
  // Convert Fahrenheit to Celsius
  // Formula: C = (F - 32) * 5/9
  
}

// Test your functions
console.log(celsiusToFahrenheit(0));  // Should output 32
console.log(celsiusToFahrenheit(100)); // Should output 212
console.log(fahrenheitToCelsius(32));  // Should output 0
console.log(fahrenheitToCelsius(212)); // Should output 100`,
              successCriteria: [
                'celsiusToFahrenheit function correctly converts Celsius to Fahrenheit',
                'fahrenheitToCelsius function correctly converts Fahrenheit to Celsius',
                'All test cases pass with the expected output'
              ]
            }
          },
          {
            id: 'javascript-control-flow',
            title: 'Control Flow',
            content: `
              <h2>Control Flow in JavaScript</h2>
              
              <p>Control flow refers to the order in which statements are executed in a program. JavaScript provides several structures to control the flow of execution:</p>
              
              <h3>Conditional Statements</h3>
              <ul>
                <li><code>if...else</code>: Execute code based on a condition</li>
                <li><code>switch</code>: Select one of many code blocks to execute</li>
                <li>Ternary operator: A shorthand for simple if-else statements</li>
              </ul>
              
              <h3>Loops</h3>
              <ul>
                <li><code>for</code>: Loop a block of code a specified number of times</li>
                <li><code>while</code>: Loop as long as a condition is true</li>
                <li><code>do...while</code>: Similar to while, but executes at least once</li>
                <li><code>for...of</code>: Loop through values of an iterable object</li>
                <li><code>for...in</code>: Loop through properties of an object</li>
              </ul>
              
              <p>Control flow structures help you make decisions in your code and repeat actions efficiently.</p>
            `,
            codeExamples: [
              {
                code: `// If-else statements
let age = 18;

if (age < 18) {
  console.log("You are a minor");
} else if (age === 18) {
  console.log("You just became an adult");
} else {
  console.log("You are an adult");
}

// Ternary operator
let status = age >= 18 ? "adult" : "minor";
console.log(status);

// Switch statement
let day = new Date().getDay();
let dayName;

switch (day) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  // ... other days
  default:
    dayName = "Unknown";
}

console.log(\`Today is \${dayName}\`);`,
                explanation: 'This example shows different ways to implement conditional logic in JavaScript using if-else statements, the ternary operator, and switch statements.'
              },
              {
                code: `// For loop
for (let i = 0; i < 5; i++) {
  console.log(\`Iteration \${i}\`);
}

// While loop
let count = 0;
while (count < 5) {
  console.log(\`Count: \${count}\`);
  count++;
}

// Do-while loop (always runs at least once)
let num = 10;
do {
  console.log(\`Number: \${num}\`);
  num--;
} while (num > 5);

// For...of loop (iterates over array values)
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color);
}

// For...in loop (iterates over object properties)
const person = { name: "John", age: 30, job: "developer" };
for (const key in person) {
  console.log(\`\${key}: \${person[key]}\`);
}`,
                explanation: 'This example demonstrates the different types of loops available in JavaScript for repeating code execution.'
              },
              {
                code: `// Break and continue
for (let i = 0; i < 10; i++) {
  // Skip iteration if i is even
  if (i % 2 === 0) {
    continue;
  }
  
  console.log(\`Odd number: \${i}\`);
  
  // Exit loop if i is 7
  if (i === 7) {
    console.log("Found 7, breaking loop");
    break;
  }
}

// Nested loops
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(\`\${i} x \${j} = \${i * j}\`);
  }
}`,
                explanation: 'This example shows how to use break and continue statements to control loop execution, as well as how to work with nested loops.'
              }
            ],
            quizzes: [
              {
                id: 'js-control-quiz-1',
                question: 'What will the following code output? let x = 5; if (x > 10) { console.log("A"); } else if (x > 5) { console.log("B"); } else { console.log("C"); }',
                options: [
                  'A',
                  'B',
                  'C',
                  'No output'
                ],
                correctAnswer: 'C',
                explanation: 'Since x is 5, it is not greater than 10 or greater than 5, so the else block executes and outputs "C".'
              },
              {
                id: 'js-control-quiz-2',
                question: 'Which loop will always execute at least once?',
                options: [
                  'for loop',
                  'while loop',
                  'do...while loop',
                  'for...of loop'
                ],
                correctAnswer: 'do...while loop',
                explanation: 'A do...while loop always executes its block of code once before checking the condition.'
              }
            ],
            challenge: {
              id: 'js-control-challenge',
              title: 'FizzBuzz',
              description: 'Implement the classic FizzBuzz problem: Print numbers from 1 to n. For multiples of 3, print "Fizz" instead. For multiples of 5, print "Buzz". For multiples of both 3 and 5, print "FizzBuzz".',
              starterCode: `function fizzBuzz(n) {
  // Write your code here
  
}

// Test the function with n = 15
fizzBuzz(15);

/* Expected output:
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
*/`,
              successCriteria: [
                'Function correctly prints numbers from 1 to n',
                'Multiples of 3 are replaced with "Fizz"',
                'Multiples of 5 are replaced with "Buzz"',
                'Multiples of both 3 and 5 are replaced with "FizzBuzz"'
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: 'python',
    language: 'Python',
    description: 'Learn Python from scratch and master its powerful features for data science, web development, automation, and more.',
    modules: [
      {
        id: 'python-beginner',
        title: 'Beginner Fundamentals',
        summary: 'Learn the basics of Python including syntax, variables, data types, operators, control flow, functions, and I/O operations.',
        lessons: []
      },
      {
        id: 'python-intermediate',
        title: 'Intermediate Constructs',
        summary: 'Explore Python\'s data structures, error handling, file I/O, modules, and debugging techniques.',
        lessons: []
      },
      {
        id: 'python-advanced',
        title: 'Advanced Topics',
        summary: 'Dive into object-oriented programming, concurrency, networking, and advanced Python modules and packages.',
        lessons: []
      }
    ]
  },
  {
    id: 'java',
    language: 'Java',
    description: 'Master Java programming from core concepts to enterprise applications, including OOP, concurrency, and modern Java features.',
    modules: [
      {
        id: 'java-beginner',
        title: 'Beginner Fundamentals',
        summary: 'Learn Java basics including syntax, variables, data types, operators, control flow, methods, and basic I/O.',
        lessons: []
      },
      {
        id: 'java-intermediate',
        title: 'Intermediate Constructs',
        summary: 'Explore Java\'s data structures, exception handling, file I/O, packages, and debugging techniques.',
        lessons: []
      },
      {
        id: 'java-advanced',
        title: 'Advanced Topics',
        summary: 'Master object-oriented programming, multithreading, networking, and advanced Java features.',
        lessons: []
      }
    ]
  }
];

export default curriculumData; 