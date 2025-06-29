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
        title: 'Beginner Fundamentals',
        summary: 'Learn the core concepts of JavaScript programming including variables, data types, control flow, and functions.',
        lessons: [
          {
            id: 'js-variables',
            title: 'Variables & Data Types',
            duration: 30,
            content: `
              <h2>Understanding Variables and Data Types in JavaScript</h2>
              <p>Variables are containers for storing data values. JavaScript provides several ways to declare variables:</p>
              <ul>
                <li><code>let</code>: For values that can change</li>
                <li><code>const</code>: For values that remain constant</li>
                <li><code>var</code>: The traditional way (not recommended in modern JavaScript)</li>
              </ul>
              <p>JavaScript has several data types:</p>
              <ul>
                <li>String: Text values</li>
                <li>Number: Both integers and floating-point numbers</li>
                <li>Boolean: true/false values</li>
                <li>Object: Collections of related data</li>
                <li>Array: Ordered lists</li>
                <li>null: Intentional absence of value</li>
                <li>undefined: Unassigned values</li>
              </ul>
            `,
            codeExamples: [
              {
                code: `// Declaring variables
let name = "John";
const age = 25;
let isStudent = true;

// Working with different data types
let score = 95.5;
let colors = ["red", "green", "blue"];
let person = {
  name: "Alice",
  age: 30,
  isStudent: false
};

console.log(typeof name);      // "string"
console.log(typeof age);       // "number"
console.log(typeof isStudent); // "boolean"`,
                explanation: 'Examples of declaring variables with different data types and checking their types using typeof operator.'
              },
              {
                code: `// String operations
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;

// Template literals (modern way)
let greeting = \`Hello, \${fullName}! You are \${age} years old.\`;

console.log(greeting);`,
                explanation: 'Working with strings and template literals for string interpolation.'
              },
              {
                code: `// Type conversion
let numStr = "123";
let num = Number(numStr);    // Convert string to number
let str = String(num);      // Convert number to string
let bool = Boolean(num);    // Convert to boolean

console.log(num + 7);       // 130
console.log(str + "7");     // "1237"
console.log(bool);          // true`,
                explanation: 'Converting between different data types in JavaScript.'
              }
            ],
            exercise: 'Create variables for a user profile including name, age, email, and a list of hobbies. Use appropriate data types for each piece of information.',
            solution: `// User Profile Exercise Solution
const userName = "Sarah Smith";
const userAge = 28;
const userEmail = "sarah@example.com";
const userHobbies = ["reading", "painting", "yoga"];

const userProfile = {
  name: userName,
  age: userAge,
  email: userEmail,
  hobbies: userHobbies
};

console.log(userProfile);`,
            quizzes: [
              {
                id: 'q1-variables',
                question: 'Which keyword should you use to declare a variable that won\'t be reassigned?',
                options: ['var', 'let', 'const', 'static'],
                correctAnswer: 'const',
                explanation: 'const is used for variables whose values will not change (constants).'
              },
              {
                id: 'q2-datatypes',
                question: 'What is the output of: typeof [1, 2, 3]?',
                options: ['array', 'object', 'list', 'number'],
                correctAnswer: 'object',
                explanation: 'In JavaScript, arrays are actually objects, so typeof returns "object" for arrays.'
              }
            ]
          },
          {
            id: 'js-control-flow',
            title: 'Control Flow & Loops',
            duration: 45,
            content: `
              <h2>Control Flow Structures in JavaScript</h2>
              <p>Control flow is the order in which statements are executed in a program. JavaScript provides several structures:</p>
              <h3>Conditional Statements</h3>
              <ul>
                <li>if...else statements for decision making</li>
                <li>switch statements for multiple conditions</li>
                <li>ternary operators for simple conditions</li>
              </ul>
              <h3>Loops</h3>
              <ul>
                <li>for loops for counting iterations</li>
                <li>while loops for condition-based iteration</li>
                <li>do...while loops for at least one iteration</li>
                <li>for...of loops for iterating arrays</li>
                <li>for...in loops for object properties</li>
              </ul>
            `,
            codeExamples: [
              {
                code: `// if...else statements
let temperature = 25;

if (temperature > 30) {
  console.log("It's hot!");
} else if (temperature > 20) {
  console.log("It's warm.");
} else {
  console.log("It's cool.");
}

// Ternary operator
let time = 20;
let greeting = time < 12 ? "Good morning!" : "Good day!";`,
                explanation: 'Different ways to implement conditional logic in JavaScript.'
              },
              {
                code: `// for loop
for (let i = 0; i < 5; i++) {
  console.log(\`Iteration \${i + 1}\`);
}

// while loop
let count = 0;
while (count < 3) {
  console.log(\`Count: \${count}\`);
  count++;
}

// for...of loop
const fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
  console.log(fruit);
}`,
                explanation: 'Different types of loops for iteration in JavaScript.'
              },
              {
                code: `// switch statement
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of work week");
    break;
  case "Friday":
    console.log("Weekend is near");
    break;
  default:
    console.log("Regular day");
}`,
                explanation: 'Using switch statements for multiple conditions.'
              }
            ],
            exercise: 'Write a program that prints numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number, for multiples of 5, print "Buzz", and for numbers that are multiples of both 3 and 5, print "FizzBuzz".',
            solution: `// FizzBuzz Solution
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}`,
            quizzes: [
              {
                id: 'q1-control-flow',
                question: 'Which loop is guaranteed to execute at least once?',
                options: ['while loop', 'for loop', 'do...while loop', 'for...in loop'],
                correctAnswer: 'do...while loop',
                explanation: 'A do...while loop always executes its block at least once before checking the condition.'
              },
              {
                id: 'q2-control-flow',
                question: 'What is the output of: 5 > 3 ? "yes" : "no"?',
                options: ['5', '3', 'yes', 'no'],
                correctAnswer: 'yes',
                explanation: 'The ternary operator returns the first value when the condition is true.'
              }
            ]
          }
        ]
      }
      // Additional modules would be added here...
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