#jQuery Continued

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