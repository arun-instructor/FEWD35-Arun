#Introduction to jQuery

##What is jQuery?

jQuery is a cross-browser JavaScript library designed to simplify the client-side scripting of HTML.

It helps us out with:
- DOM traversal
- CSS manipulation through `style` attributes
- Event handling
- Animation
- And much more

##How to Use jQuery
- jQuery is available via CDN at `code.jquery.com`
- You can also download the library and serve it locally
- jQuery by itself is a library of functions. The team has also built additional tools that help us with a variety of things:
	- jQuery UI: A UI tool that adds features such as additional easings, a datepicker, modals, effects, and more.
	- jQuery Mobile: A mobile-optimized framework that allows you to create HTML5 mobile applications that look and act pretty real.

##jQuery Selectors
- The Sizzle selector engine wrapped into jQuery is a powerful tool to help us with manipulating DOM elements.
- The syntax is very similar to CSS:

```
$("#myDiv > ul > li:first-child")
```

- Here the $ sign represents the jQuery library.
- Let's take a look at some of the selectors available to us [here](http://www.w3schools.com/jquery/jquery_ref_selectors.asp).

##jQuery Actions
- Actions almost always follow selectors.
- Actions are jQuery functions that perform an operation on the element(s) selected.
- The format is as follows:

```
$("my-selector").action(options);
```

##DOM Manipulation
- The DOM manipulation functions in jQuery help you accomplish some pretty neat things.
- Here are a few common manipulations you will likely see:

On the fly CSS manipulations:

```
$("my-selector").css("property", "value");
```

On the fly HTML manipulations:

```
$("my-selector").html("New HTML inside here");
```

Altering CSS class attributes:

```
$("my-selector").addClass("new class");

$("my-selector").removeClass("class");

$("my-selector").toggleClass("class");
```

##DOM Manipulation Exercise: Shakespeare's Plays
- Download the starter code files [here](shakespeares_plays/).
- Add a class of `special` to all of the `<li>` elements at the second level of the nested list.
- Add a class of `year` to all of the table cells in the third column of a table.
	- Hint: Take a look at how many columns are in each table.
- Add the class of `special` to the first table row that has the word **Tragedy** in it.
- **Challenge:** Select all of the list items (`<li>`) containing a link (`<a>`). Add the class `afterlink` to the sibling list items that follow the ones selected.
- **Challenge:** Add the class `tragedy` to the closest **ancestor** (`<ul>`) of any .pdf link.

##Event Handling
- Event handling is done very smoothly with jQuery.
- There are a few different ways it can be performed, each having their use cases.
- Let's say we have a button and want to attach an event:

HTML

```
<button id="my-button">Click Me!</button>
```

jQuery

- This is what I like to call the shortcut method.
- It has the limitation of not working when the DOM element doesn't already exist (think AJAX loading in dynamic content).

```
$("#my-button").click(function() { //Your code here });
```

- You can also bind events using `.on`
- This is also limited to elements that already exist, but it is a better approach.

```
$("#my-button").on("click", function() { //Your code here });
```

- Lastly, you can account for dynamic elements through binding the event to the document itself.
- This also happens to be the most performant if you look at benchmark tests.

```
$(document).on("click", "#my-button", function() { //Your code here });
```

- Here is a list of the most common events you are likely to see:
	- Click
	- Keyup
	- Keydown
	- Mouseenter
	- Mouseleave
	- Dblclick
	- Change

##jQuery Animations
- jQuery wraps in some neat animations that help us achieve some interested effects.
- jQuery animations work by altering the `style` attribute dynamically over a set period of time.
- These animations are great but less performant than CSS3 animations, which are hardware-accelerated.
- Here are a few common animations you will see:

Slide down (show the element):

```
$("my-selector").slideDown();
```

Slide up (hide the element):

```
$("my-selector").slideUp();
```

Slide toggle (back and forth):

```
$("my-selector").slideToggle();
```

Fade in:

```
$("my-selector").fadeIn();
```

Fade out:

```
$("my-selector").fadeOut();
```

Fade toggle (back and forth):

```
$("my-selector").fadeToggle();
```

- Each of these animation functions take three parameters: duration, easing, and callback function to be completed when the animation is complete.

##Custom Animations
- If none of the built-in animations suit you, jQuery also gives you a way to create your own animations.
- This function will dynamically alter the `style` attribute in the HTML document for each property you specify:

```
$("my-selector").animate({
	"margin-top":"200px",
	"margin-left":"+=200px"
}, 600, "swing", function() {
	console.log("I just finished!");
});
```

##Animation Exercise: Gettysburg Address
- Download the exercise files [here](gettysburg_address/).
- Alter the stylesheet to hide the contents of the page initially. When the page is loaded, fade in the contents slowly.
- Give each paragraph a yellow background only when the mouse is over it.
- Make a click of the title (`<h2>`) and simultaneously fade it to 25 percent opacity and grow its left-hand margin to 20px. Then, when this animation is complete, fade the speech text to 50 percent opacity.
- Bonus: Make the style switcher work.
- Challenge: React to presses of the arrow keys by smoothly moving the switcher box 20 pixels in the corresponding direction. The key codes for the arrow keys are: 37 (left), 38 (up), 39 (right), and 40 (down).

##In-Class Lab / Homework
- You will be hacking on a newspaper article website and making it cool using jQuery.
- Download the exercise files [here](divided_times/).
- The code in js/main.js is obfuscated, which means it is practically unreadable.
- Your job is to look through the way the site works and try to replicate the same functionality using jQuery.
- A couple of functions you may want to use for this, but are not necessarily required:
	- .toggleClass()
	- .hasClass()
	- .hide()
	- .show()
	- .slideUp()
	- .siblings()
	- .removeClass()
	- .addClass()