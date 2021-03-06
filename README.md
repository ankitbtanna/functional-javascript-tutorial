# functional-javascript-tutorial
In this friendly introduction to functional programming with JavaScript, you'll learn what Functional Programming (FP) is and how it differs from other programming styles (such as OO and imperative). You'll practice the key idea of doing everything with pure functions, learning to use higher-order functions and recursion to replace the iterative loops we're used to writing with for and while. You'll more to advanced techniques like closures, currying, and function composition and learn why immutable data is essential for functional programming.

# Introduction
* This will help you understand basic concepts of Functional Programming
* Core Ideas to get started as Functional Programmers

Different programming paradigmns are really interesting to me. We will be noob functional programmers.

## What we will learn?
* What is a functional programming?
* What does it mean to do functional programming?
* What does functional code look like?
* What tools do we need to write functional programs?

JavaScript is not considered a great functional language but its great to learn functional programming.

## Concepts
* Pure functions
* Side effects
* Programs as pipelines where data flows
* Higher order functions
* First class functions
* Currying
* Closure
* Immutability, changing data so it works with functional programming

We are focused on JavaScript. Focus on concepts.

## What is functional programming?
* buzz words and concepts
* Keywords: stateless, compose, pure, functor, monad, curry, side effect, lazy, monoid, immutable, higher-order, referential transparecy
* It is a style of programming
* JS - does not get described as a functional language
* Learning FP(functional programming) made me a better JS developer once I learnt basic FP
* A programming paradigm (world view/mindset) - what things are in it and how they interact?

### Other paradigms
* Imperative - Follow my commands and do that
* Declarative - I want to do it that way but its up to you
* Object Oriented - managing state, inheritance
* Functional: SINGLE Thing - pure functions - only input in and only output out
Turn iterations of lists into maps and reduces
Think of the race. Break code into functions. Make those functions functional. Turn a loop that repeats a process into a recursion.
Think of the bands. Turn a sequence of operations into a pipeline.

READ THIS:
[Introduction to FP by Mary Rose Cook](https://codewords.recurse.com/issues/one/an-introduction-to-functional-programming "Introduction to FP by Mary Rose Cook")

## Pure Functions
### only input in ---> only output out
* A pure function is a function
* It only takes the input in and returns output
* Apart from the input id does not touch any data

Example of Pure function
![](images/img-1.PNG)

The above diagram shows:
* Pure function is like a black box
* Green circle goes in as input and gets converted to triangle

While working, we have some pressure to complete the work done or just complete the coding exercises and what it makes the function do is it takes the input, it does give us the desireable output but it also communicates with the outside world.

Example of Impure function
![](images/img-2.PNG)

So it also might be reading things from outside world to make its computation a lot more easier. Like what time is it or what profile picture does this user have. Things that **aren't direct input to the function** but **it uses them for their computational purposes**. 

It may also be considered as impure if the function might **change a value other than input and outside it's scope.** OR **call other function**.

That communication with outside world is called **side-effects**. That is what is not allowed in a pure-function.
![](images/img-3.PNG)

So in a pure function is a function that does not have any side-effects. All it needs is an input and all it does is return its output value.

## Tradeoffs
Each paradigm has tradeoffs. Mostly complex program to be broken to smaller entities.
As developer, learn as many paradigms as possible and to think them as tools in our mental toolbox and we can effortlessly switch to.

## Pure functions vs Impure functions

**Impure Function:**
```javascript
let author = "Alonzo";

function greet() {
    console.log(`Hello, ${author}!`);
}

greet();
author = "Alan";
greet();
```

**Pure Function:**
```javascript
function greet(author) {
  console.log(`Hello, ${author}!`);
}

greet("Alonzo");
greet("Alan");
```

Functional programming must help us write more re-usable code.
### Differences
* In the impure function, Unexpected output if the variable changes at a point of time when the function is called. Output changes depending on external circumstances. VS in Pure function I get the same output for the same input always.
A pure function, every time we call it with same argument we get the same result -- guaranteed. Because, output of the function does not depend upon the outside world. It depends upon the arguments that are passed in. It is deterministic based on input.
* Anything that is going inside the program, all the computed things are much predictable inside pure function.

If a function does not take any input, its a yellow flag. Not returning a flag is a huge red flag.

## Why functional programming?
* Why would be bother about all this?
* When functions are deterministic, when we know exactly what output we are going to get on what input, we are going to become much more predictable. The code will be much more safer.
* Less opportunity for bugs to arise.
* Easier to test and debug AND maintain the code.
    - no need to setup the component, mocks
* Isolated, pure, deterministic units
* Should not use FP because it makes us look smart with fancy terminology...
* Why use JavaScript?
    - OOJS is hard
    - prototype, this
    - Very hard to remember
    - This got removed when we started programming functionally
* Established community and tools
    - Courses, libs, frameworks, resources
    - dont require you to learn new syntax
    - huge community
* How do be go about functional programming?
    - Write pure functions <-- Mantra
    - Do everything with functions
    - Ask: What should my function take in and what should it give it as output? instead of how should my program run

## Imperative vs Functional

**Imperative code**
```javascript
let name = "Alonzo";
let greeting = "Hi";

console.log(`${greeting}, ${name}!`);

greeting = "Howdy";

console.log(`${greeting}, ${name}!`);
```

**Functional code**
```javascript
function greet(greeting, name) {
  console.log(`${greeting}, ${name}!`);
}

greet("Hello", "Alonzo");
greet("Howdy", "Alan");
```
### Imperative
* Series of commands
* what are the inputs? what are the outputs?

### Functional
* A tiny program with greeting and name input
* what are its output - greeting and name
* Great for data transformations

## What are Side-Effects?
* Avoid Side-effects - DO NOTHING but RETURN OUTPUT based on ONLY INPUT

### Side-effects
```javascript
let thesis = { name: "Church", date: 1936 };

function renameThesis(newName) {
    thesis.name = newName;
    console.log("Renamed");
}

renameThesis('Church-Turing');
thesis;
```

### Above code has side-effects
* Assigning a new value to thesis.name property. This function is affecting it.
* By reading data from the outside world - thesis object
* Logging to console

### No Side-effects
```javascript
const thesis = { name: "Church", date: 1936 };

function renameThesis(oldThesis, newName) {
    return { name: newName, date: oldThesis.date };
}

const thesis2 = renameThesis(thesis, 'Church-Turing');
thesis;
thesis2;
```

### Above code has no side-effects
* What this function does is takes in old thesis object and returns a new object. Creating a new object.
* We will use it a lot when we come to **immutable data**. We dont want to update the things in-place, we want to take things and make a new copy(different)
* Pure function may need a lot of arguments. 

**Arity:** Number of arguments a function can take. Single argument function is called unary, 2 argument binary function.

* there is a slight trick here to check purity and impurity of this function... pass by reference. **hint - spread syntax

## Exercise - Pure functions
* look at which functions are pure and which are not and why
* Remember: A pure function has 2 characteristics
**No Side-effects:** A pure function has no effect on the program or the world
**Deterministic:** Given the same input values, a pure function will always return the same output. This is because its return value depends only on its input parameters and not on any other information. (e.g. Global program state)

```javascript
/* Example 1 */
function getDate() {
  return new Date().toDateString();
}
// Impure
// A function is not pure if its output depends on anything except its inputs (including the state of the world), or if calling the function at different times with the same inputs can give different outputs (e.g. if called on different days).

/* Example 2 */
function getWorkshopDate() {
  return new Date(2020, 11, 4).toDateString();
}
// Pure
// A function is pure if its output depends on nothing but its inputs, and it always returns the same output if called with the same inputs (in this case, no inputs).

/* Example 3 */
function toHex(n) {
  let hex = n.toString(16);
  return hex.padStart(2, "0");
}
// Pure
// A function is pure if its output depends on nothing but its inputs, it does nothing except return its output, and it always returns the same output if called with the same input.

/* Example 4 */
function rgbToHex(R, G, B) {
  return '#' + [toHex(R), toHex(G), toHex(B)].join('');
}
// Pure
// A function is pure if its output depends on nothing but its inputs, it does nothing except return its output, and it always returns the same output if called with the same input.

/* Example 5 */
function setColor(R, G, B) {
  const hex = rgbToHex(R, G, B);
  const colorMe = document.getElementById("color-me");
  colorMe.setAttribute("style", "color: " + hex);
}
// Impure
// A function is not pure if it does anything besides return its output. Any other effect it has on the program or world is a side effect (in this case, changing the properties of an HTML element on the page).

/* Example 6 */
async function readJsonFile(filename) {
  const file = await fetch(
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson"
  );
  return await file.json();
}
// Impure
// A function is not pure if its output depends on the state of the world (in this case, the contents of web-hosted file), or if calling the function at different times with the same inputs can give different outputs.

/* Example 7 */
function writeJsonString(object) {
  return JSON.stringify(object, null, 2);
}
// Pure
// A function is pure if its output depends on nothing but its inputs, and it always returns the same output if called with the same input. In this case, calling it on the same object will always return the same string.

/* Example 8 */
function exclusiveOr(A, B) {
  return (A || B) && !(A && B);
}
// Pure
// A function is pure if its output depends on nothing but its inputs, it does nothing except return its output, and it always returns the same output if called with the same input.

/* Example 9 */
function computeTruthTable(operator) {
  const truthValues = [true, false];
  const table = [];
  for (const A of truthValues) {
    for (const B of truthValues) {
      const value = operator(A, B);
      table.push({ A, B, value });
    }
  }
  return table;
}
// Pure
// A function is pure if its output depends on nothing but its inputs, it does nothing except return its output, and it always returns the same output if called with the same input.

/* Example 10 */
function showTruthTable(operator) {
  console.table(computeTruthTable(operator));
}
// Impure
// A function is not pure if it does anything besides return its output. Any other effect it has on the program or world is a side effect (in this case, logging information to the console).
```

## Learnings from Exercise:
* 1 - Impure, Returns different output every time. Date is part of the outside world. When we call it at a different day we get different date. It is not deterministic.
* 2 - Pure, Same output every time. It is deterministic.
* 3 - Pure, function which essentialy depend only on input. We are using string methods which return the same output always
* 4 - Pure
* 5 - Impure - Not returning anything. Accessing the DOM
* 6 - Impure - Not using input. Fetching data from outside url. Not deterministic.
* 7 - Pure - Same input, same output * if the object is changing externally
* 8 - Pure
* 9 - Pure - * operator could be a function, mutating table inside the function
* 10 - Impure - console.table, no return statement

**Randomness** is a side-effect.

## Recursion
Another technique in FP toolbox.
How it helps us **avoid more imperative style of looping** (for, forEach) through iteration.
* Iteration and Recursion - we could think of as two mini paradigmns that go hand in hand for imperative programming for iteration and functional programming for recursion
* Recursion - to do same operation lots of different times, Iteration - repetition is loops (for, while)
* Iteration is stateful, maintains state of which loop we are in
* Recursion is stateless and function and self referential. A function calling itself inside. 
* Difference between Iteration and Recursion
![](images/img-6.PNG)

* Iteration isnt functional. Use recursion instead.
* When writing FP, we will move away from iteration and move towards more of a recursive mindset

### Example of iteration
```javascript
function sum(numbers) {
    let total = 0;
    for (i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
sum([0, 1, 2, 3, 4]);
```
* Above is example of iterative code
* I have got a **sum** function which takes in **numbers** array as an argument
* Uses a var total with a for loop which changes the value of total each time the value changes
* Returns total
* Is this pure? - YES*. * - changing of total variable through the time inside this code is not super functional.

### Example of recursion
```javascript
function sum(numbers) {
    if (numbers.length === 0) {
        // non-recursive case
        return 0;
    } else if (numbers.length === 1) {
        // non-recursive case
        return numbers[0];
    } else {
        // recursive case
        return numbers[0] + sum(numbers.slice(1));
    }
}

sum([0, 1, 2, 3, 4]);
```
* Recursive functions have 2 main parts
    - A recursive case
    - A non-recursive case
* If we dont have a non-recursive case, our program will go into an infinite loop
* You can have more than one non-recursive cases
* Dont forget the base case else we will have infinite loop
* Are recursive functions more expensive?

In functional programming, we avoid mutable state, and therefore avoid iterative loops using for or while. As an alternative to iteration, we use recursion to break down the problem into smaller ones.

A recursive function has two parts:

Base case: condition(s) under which the function returns an output without making a recursive call
Recursive case: condition(s) under which the function calls itself to return the output

## Recursion Exercise
* Keep in mind what we know about recursion.
* Compare iteration and recursion

### Readability
* In the below two examples, we have iterative factorial function and recursive factorial function.
* Compare the readability of both the functions. Which one is simpler to understand?

**Iterative Factorial**
```javascript
function iterativeFactorial(n) {
  let product = 1;
  while (n > 0) {
    product *= n;
    n--;
  }
  return product;
}
```

**Recursive Factorial**
```javascript
function recursiveFactorial(n) {
    if (n === 0) return 1;
    return n * recursiveFactorial(n - 1);
}

recursiveFactorial(10);
```

**Fibonacci**
Now it's time to try writing our own iterative & recursive functions!

In the cells below, fill in the code to implement iterative and recursive versions of a function to compute the Nth Fibonacci number given a positive integer n.

Each Fibonacci number is defined as the sum of the previous two Fibonacci numbers, so fibonacci(n) = fibonacci(n-1) + fibonacci(n-2). By convention, the first two numbers are fixed: fibonacci(0) = 0 and fibonacci(1) = 1.

**Iterative Fibonacci**
```javascript
function iterativeFibonacci(n) {
    let fibArr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
    }
    return fibArr[n];
}

iterativeFibonacci(20);
```

```javascript
function recursiveFibonacci(n) {
    if (n < 2) return n;
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

recursiveFibonacci(19);
```

### Readability
* Based on programmer
* Iterative one is very clear. Step by step
* Recursive functions are more elegant
    - It doesnt need to keep the state
    - Way more easier to reason about
* Might be a little harder - Subjective
* Working with imperative program is always easier
* Practice, wrap your head around functional approach. Concept of solving a problem will help understand recursive code
* Less code to worry about

### Performance
* What are the performance consideration?
* Chrome crashes
* Iterative Faster than Recursive
* Why?
    - Recursive makes multiple calls with same argument
    - Call stack becomes huge
    - Too much recursion - Internal error
* Solution: memoization
    - Caching the results of these function
    - Dont have to repeat the computation
* Tail Call Optimization: JS engine feature
    - Perform an optimization on my recursion
    - Write it in a different way

## Higher-Order Functions
* Techniques in toolbox
* Higher-order functions, first class functions
* First-class Functions: A language has first-class functions when language supports passing functions around as a parameter. e.g. callback
* Higher-Order Functions: Takes in another function/s as input or returns function
* Key technique in functional programming
* Functions can give and take functions
* Dont Loop: use higher-order functions like map, reduce, filter
    - Apply function on iterable element like array/object
    - Processing those arrays with functions rather than loops
* Filter: a predicate function
* Map: an operation function
* Reduce: a combining function

![](images/img-7.PNG)

### Filter
The filter function takes a "predicate" function (a function that takes in a value and returns a boolean) and an array, applies the predicate function to each value in the array, and returns a new array with only those values for which the predicate function returns true.

```javascript
var wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filter(predicateFn, array) {
    if (length(array) === 0) return [];
    const firstItem = head(array);
    const filteredFirst = predicateFn(firstItem) ? [firstItem] : [];
    return concat(filteredFirst, filter(isEven, tail(array)));
}

filter(isEven, wholes);

function map(operationalFn, array) {
  if (length(array) === 0) return [];
  const firstItem = head(array);
  const doubledFirst = [operationalFn(firstItem)];
  return concat(doubledFirst, map(doubled, tail(array)));
}

map(doubled, wholes);

function reduce(reducerFn, initialValue, array) {
  if (length(array) === 0) return initialValue;
  const newInitialValue = reduceFn(initialValue, head(array));
  return reduce(reducerFn, newInitialValue, tail(array))
}

reduce(sum, 0, wholes);

// a predicate function for filter
function isEven(n) {
    return n % 2 === 0;
}

// a operational function for map
function doubled(n) {
  return n*2;
}

// a reducer function
function sum(a, b) {
  return a+b;
}

// Return the first item in an array
function head(array) {
  return array[0];
}

// Return the rest of an array after the first item
function tail(array) {
  return array.slice(1);
}

// Concatenate two arrays into a new single array
function concat(array1, array2) {
  return array1.concat(array2);
}

// Return the number of items in an array
function length(array) {
  return array.length;
}
```

## Closures
* Take away of the idea is important
* Function can define functions i.e. return inner functions and remember scope
* Inner function has access to outer function scope
* If a function is defined which returns inner function, the inner function can remember the scope of outer function even if its not passed
* In functional programming we say we dont work with state, in closure there is a small loop hole

```javascript
function makeAdjectifier(adjective) {
    return function (noun) {
        return adjective + " " + noun;
    }
}

const coolify = makeAdjectifier("cool");
coolify("workshop");
coolify("drink");
```

### Partial Application
* Lets us take us function and lock in some arguments
* Make some more reusable functions

### Currying
* Takes a multi-argument function and breaks up into a series of single argument functions which successively remembers outer scopes

```javascript
function greet(greeting, name) {
    return `${greeting}, ${name}`;
}

function curryGreet(greeting) {
    return function (name) {
        return `${greeting}, ${name}`;
    }
}

const greetItalian = curryGreet('Ciao');
greetItalian('Alonzo');

const greetSpanish = curryGreet("Hola");
greetSpanish("Alonzo");
```

* Allow us to make more modular functions

### Examples of Closure and Currying
```javascript
function writeMessage(message, salutation, name) {
  return md`<p style="padding:3em;font-family:monospace">${message}<br><br>${salutation},<br>${name}</p>`;
}

function signMessageFrom(name) {
  return (message, salutation) => writeMessage(message, salutation, name);
}

const writeFriendlyNote = signMessageFrom("Your best bud");
const writeBusinessMemo = signMessageWith("Best");

const curriedQuote = (name) => (year) => (text) => quote(name, year, text);

function quote(name, year, text) {
  return md`<p style="font-size:smaller;padding:1em;font-family:monospace;">"${text}"<br>- ${name} (${year})</p>`;
}
```

## Function Composition
* Know how functional programmers use functional composition to create complete program
* One functions output --> input to other function
* Program = functions composed of smaller functions
* Everything needs to be a pure function (input giving output)
* Think about how the data is going to flow through different functions
* Typically many dont use such stuff

![](images/img-8.PNG)

* Flow the data through the series of functions to get the output what I want

![](images/img-9.PNG)

```javascript
var ender = (ending) => (input) => input + ending;

var adore = ender(' rocks');
var announce = ender(", y'all");
var exclaim = ender("!");

var hypeUp = (x) => exclaim(announce(adore(x)));
hypeUp('JS'); // JS rocks, y'all!
```

* hypeUp is now a program
* Breaking down in multi argument functions into smaller argument functions helps us

## Immutability
* Avoid mutability for happier programming
* dont change in-place, replace/make a new copy
* how to use the map function to copy an array to prevent mutation. Although the new copy has prevented mutating the original Array, creating copies can increase the amount of memory required to run a program. Immutable or persistent data structures allow unchanged parts of the data to be reused throughout a program.
* Can use map to create a new copy of array

```javascript
const oldCities = ["Delhi", "Bombay", "Bangalore"];

const newCities = oldCities.map((city) => {
    if (city === "Bombay") return "Mumbai";
    if (city === "Bangalore") return "Bengaluru";
    return city;
})

oldCities; // ["Delhi", "Bombay", "Bangalore"]
newCities; // ["Delhi", "Mumbai", "Bengaluru"]
```

* not very efficient
* takes memory and time
* immutability = time+memory
* Data Structures designed to be immutable and efficient
* Immutable Data Structures --> Structural Sharing
    - Reuse unchanged part of the tree


## Next Steps
Read below:
https://observablehq.com/@anjana/next-steps

