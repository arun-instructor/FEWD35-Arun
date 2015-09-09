#Introduction to JavaScript

##What is JavaScript?
- JavaScript is a programming language that runs on the front-end (the client), and also the back-end (the server).
- It is based on ECMAScript, and follows its patterns. Check out [this link](http://en.wikipedia.org/wiki/ECMAScript) for more information.
- HTML and CSS are sort of like style and layout guides that tell the browser what to render to the user. JavaScript is a list of detailed operations that can respond to events and change things on the page.

##What Can JavaScript Do?
- JavaScript powers web interactivity. It is responsible for adding functionality to your web interfaces.
- Here is a short list of common JavaScript functionality:
	- Attach events to DOM elements, such as click or mouseover events.
	- Light animations such as fades or slides.
	- AJAX to pull data from the server after the initial page load.
	- Advanced vector drawings and animations with HTML5 canvas.
	- Hybrid mobile apps.
	- And much more.

##JavaScript Data Types

####Strings

Strings are simply pieces of text denoted by quotation marks. An example may be:

```
"Hello World!"
```

####Integers

Integers are simply whole numbers without any decimals. An example may be `45` or `2`.

####Variables

Variables allow us to represent information by a specific set of characters. Therefore we do not have to keep typing the same code over and over:

```
var saying = "Hello World!";

alert(saying);
```

####Arrays

Arrays allow us to be able to store a set of data in one place. Let's say we want to look up information about a particular user. An array of a user's information may look like this:

```
var arun = ["Arun", "Instructor", 27, "San Francisco"];
```

We can access pieces of this information through the index value:

- First Name: `arun[0]`
- Age: `arun[2]`

####Functions

Functions allow us to write code once and call it a number of times throughout our program. This helps us keep code maintainable and also helps to make it dynamic.

```
function sayHello() {
	alert("Hello World!");
}
```

We can also pass in data to perform a dynamic operation:

```
function addTwo(num1, num2) {
	alert(num1 + num2);
}
```

When using JavaScript to perform operations, you may need to `return` the data outside of the function. You can do this like so:

```
function addTwo(num1, num2) {
	return num1 + num2;
}
```

To call a function after it is written, you refer to it by its name:

```
sayHello();

addTwo(1, 2);
```

##JS Loops
- Loops allow you to perform certain operations a set number of times.
- This is common to loop through an array for example and do something with each piece of data.

####FOR Loop

```
for (var i = 0; i < 20; i++) {
	console.log(i);
}
```

##Game Lab: Memory
- We will be developing the classic game of memory.
- Download the project files [here](https://github.com/arsood/Memory).
- You will be working on js/beginner.js. Your task is to look at the comments (in gray) and follow the instructions to complete the game.
- When all steps are completed your game should run in the browser!

##Control Flow in JavaScript
- Often times you want to make sure certain blocks of code get activated under specific circumstances.
- Control flow structures help you specify when you want blocks of code to run based on a number of true/false conditions.

##Conditionals

- Standard `if, else` blocks
- Slightly more advanced `if, else if, else` blocks

##Comparison Operators

- AND `&&`, OR `||`
- `>`, `<`, `>=`, `<=`

##Control Flow Exercise: The Marathon Runner
- Create a prompt that asks the user what their best marathon time was.
- If their time was between 4 to 5 hours, alert the user that their time was average.
- if the time was between 2 to 4 hours, alert the user that their time was excellent.
- If the time was greater than 5 hours, alert the user that they need to speed up!

##In-Class Lab / Homework: Part 1 
- Write a for loop that will iterate from 0 to 20. 
- For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
- Do this using a `FOR` loop and then try to replicate the same functionality with a `WHILE` loop.
- You will have to look up the syntax for the while loop, and also the modulus (%) operator.

##In-Class Lab / Homework: Part 2
- Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
- Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them. Check out the [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) module built in to JavaScript to help you.

##In-Class Lab / Homework: Part 3
- We will be practicing the concepts learned today by developing the game of Tic Tac Toe.
- You can find the files [here](https://github.com/arsood/TicTacToe).
- Open up js/beginner.js and follow the instructions to complete the game.
- **Bonus:** Complete the intermediate portion located at js/intermediate.js.