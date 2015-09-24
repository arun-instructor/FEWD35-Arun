#JavaScript Continued

##JavaScript Review
- We will take some time to review basic JS from last class.
- We will be breaking up into groups of 2 to do lightning talks on a few key points.
- Each talk will last 5 minutes.

##Topics for Review
- Strings, integers, and arrays
- Variables and functions
- FOR loop
- WHILE loop
- Conditional statements

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

##setAttribute()
- JavaScript gives you the ability to dynamically alter HTML element attributes on the fly.
- This may be used to change stylistic properties such as the background color:

```javascript
document.getElementById("my-id").setAttribute("style", "background-color: red;");
```

##classList
- If you want to alter many style properties at one time, consider wrapping your properties up as a CSS class.
- JavaScript gives us access to an element's classes so we can manipulate them:

Add:

```javascript
document.getElementById("my-div").classList.add("animation");
```

Remove:

```javascript
document.getElementById("my-div").classList.remove("animation");
```

Toggle:

```javascript
document.getElementById("my-div").classList.toggle("animation");
```

##innerHTML
- When you need to replace the HTML inside of an element you can use the `innerHTML` property.

```
document.getElementById("my-div").innerHTML = "<span>New HTML here</span>";
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

##Score Keeper Lab / Homework
- We will be creating a simple score keeper application using JavaScript.
- The HTML and CSS has already been done for you [here](score_keeper_html/).
- Here are the steps you should take:
	- Step 1: Add a link to your own custom JS file before the closing body tag.
	- Step 2: Bind click events to the +5 and -5 point buttons and change the innerHTML of the score display appropriately.
	- Step 3: Bind a click event to the set score button and set the innerHTML of the score display to the score entered in the text box. You will need to use the `parseInt` function in JS to make this work.
	- **Bonus:** Create a check in your code to make sure the score will not go negative.
	- **Super Bonus:** Create a function to make the changes to the score display rather than having to write your logic over and over.