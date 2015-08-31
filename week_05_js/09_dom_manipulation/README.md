#JavaScript Continued

##JavaScript Review
- We will take some time to review basic JS from last class.

##Objects

####Object Notation

```
var myObject = {
	firstName: "Arun",
	lastName: "Sood",
	role: "Instructor"
};
```

####Accessing Objects

```
myObject.firstName

myObject.lastName

myObject.role
```

####Objects can have multiple data types

```
var myObject = {
	firstName: "Arun",
	lastName: "Sood",
	sayName: function() {
		alert(this.firstName + " " + this.lastName);
	},
	age: 27
};
```

####`this` keyword
- `this` refers to the current object scope.
- In the case of `myObject` above, the current scope is `myObject`.
- I could have simply referred to it by `myObject`, but `this` is very DRY.
- You will see this syntax very often in "MVC"-type JavaScript frameworks such as Backbone.js.

##Object Exercises

1. How would you represent the following using an object literal. Then update john's address to 1234 Park ln.

```
John, Doe, 36, 1234 Park st.
```

2. Using a combination of Objects and Array, how would you represent the following:

```
Moe, Doe, 31, 1234 Park st.
Larry, Doe, 36, 1234 Spark st.
Curly, Doe, 36, 1239 Park st.
Jane, Doe, 32, 1239 Spark st.
Emma, Doe, 34, 1235 Spark st.
Elizabeth, Doe, 36, 1234 Park st.
Elinor, Doe, 35, 1230 Park st.
Mary, Doe, 31, 1231 Park st.
Darcy, Doe, 32, 1224 Park st.
Grey, Doe, 34, 1214 Park st.
Lydia, Doe, 30, 1294 Park st.
Harriet, Doe, 32, 1324 Park st.
```

##Introduction to DOM Manipulation
- One of the most powerful features of JS is its ability to alter the DOM.
- You can respond to events on elements, set HTML dynamically, and perform animations.

##Selecting Elements
- Like CSS, if you want to perform some action on an element you first have to select it.
- We did this in CSS through selectors such as IDs, classes, and pseudo-selectors.
- JavaScript gives us an easy way to select elements based on the same paradigm.

####getElementById()

```
document.getElementById("my-div");
```

####getElementsByClassName()

```
document.getElementsByClassName("my-div");
```

####getElementsByTagName()

```
document.getElementsByTagName("my-div");
```

####querySelector()

```
document.querySelector("#my-div");
```

####querySelectorAll()

```
document.querySelectorAll("#my-div.my-class");
```

##Handling Events
- There are many events you may want to respond to with JS including clicks, mouseovers, focuses, etc.
- Events can be listened for and responded to using `addEventListener`.

```
document.getElementById("my-div").addEventListener("click", function() {
	alert("Click worked!");
});
```

- If you need to handle an event that occurs on many elements you will need to attach event listeners to each element individually.
- This can be done by binding the event to a class. Let's take this example:

####index.html

```
<div class="my-div"></div>
<div class="my-div"></div>
<div class="my-div"></div>
```

####app.js

```
var myElements = document.getElementsByClassName("my-div");

for (var i = 0; i < myElements.length; i++) {
	myElements[i].addEventListener("click", function() {
		alert("Click worked!");
	});
}
```

##innerHTML
- When you need to replace the HTML inside of an element you can use the `innerHTML` property.

```
document.getElementById("my-div").innerHTML = "<span>New HTML here</span>";
```

##Score Keeper Lab / Homework
- We will be creating a simple score keeper application using JavaScript.
- The HTML and CSS has already been done for you [here](score_keeper_html/).
- Here are the steps you should take:
	- Step 1: Add a link to your own custom JS file before the closing body tag.
	- Step 2: Bind click events to the +5 and -5 point buttons and change the innerHTML of the score display appropriately.
	- Step 3: Bind a click event to the set score button and set the innerHTML of the score display to the score entered in the text box. You will need to use the `parseInt` function in JS to make this work.
	- **Bonus:** Create a check in your code to make sure the score will not go negative.
	- **Super Bonus:** Create a function to make the changes to the score display rather than having to write your logic over and over.