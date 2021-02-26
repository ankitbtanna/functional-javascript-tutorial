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
