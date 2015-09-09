#CSS TrickShots

##Homework Review
- Last class we redesigned a web page.
- Turn to a partner and share your work:
	- What worked well?
	- What was challenging?
	- What plugins and tools did you use?

##Introduction
- CSS gives us a ton of tools regarding layout, responsive design, and ui components.
- In addition to this however CSS allow us to do some pretty neat things like animations and transforms.

##Why CSS Animation over JavaScript?
- CSS animations are handled by the native browser code.
- This means that instead of JavaScript dynamically changing `style` attributes over a period of time, the animation is performed graphically via the C++ or Java code that runs the browser.
- This produces an animation that is smoother and more robust than anything we can do with JS.

##The `transition` Property
- CSS animations are handled usually by slowly going from one state to another.
- Think of a div for example that upon hover increases its width. A CSS transition essentially makes the process go in slow motion.
- As a result, we can use transitions to animate between many different states.
- Let's take a look at the syntax:

```
transition: property duration easing;
```

- The property here is the specific CSS property you want to animate. This can be a width, height, color, etc.
- If you want to animate across many properties at the same time you can simply specify `all` instead of an actual property name.
- The duration is the length of the animation. It is specified in seconds.
- The easing is the character of the animation. It allows the animation to look more natural by changing its speed of execution dynamically throughout the duration. Here are the allowed values:
	- ease (default)
	- linear
	- ease-in
	- ease-out
	- ease-in-out
	- cubic-bezier(n,n,n,n)

##Transition Fallbacks
- It is also important to note that transitions are relatively new. As a result, certain older browsers may have limited support.
- To reduce the chance of a transition failure, developers normally add "fallbacks" for older browsers.
- These are usually vendor prefixes:

```
transition: width 1s linear;
-webkit-transition: width 1s linear;
-moz-transition: width 1s linear;
-o-transition: width 1s linear;
```

- It is good practice to always put these in when you use transitions.

##The `transform` Property
- Transforms allow you to temporarily change or warp elements to create neat effects.
- Let's take a look at the syntax:

```
transform: transform-function;
```

- This property makes use of transform "functions" that accomplish the effects.
- Here is a list of commonly-used transform functions:
	- translate
	- rotate
	- scale
- A more exhaustive list can be found [here](https://developer.mozilla.org/en-US/docs/Web/CSS/transform).
- Let's say that we wanted to rotate an element upon hover:

```
#my-div {
	width: 200px;
	height: 200px;
	border:#000 1px solid;
	background-color:#900;
}

#my-div:hover {
	transform: rotate(180deg);
}
```

- As you can see, the div rotates instantly. How do you think we can animate the rotation instead?

##CSS Keyframes
- Keyframes allow you to perform complex animations using CSS alone.
- The idea is that instead of transitioning an element from one state to another slowly, you are specifying style attributes that must be accomplished during stops along the animation.
- Here is the syntax:

```
div {
	width:100px;
	height:200px;
	background-color:red;
	-webkit-animation:identifier 5s ease-in-out infinite;
	animation:identifier 5s ease-in-out infinite;
}

@-webkit-keyframes identifier {
	0% {
		top:200px;
	}

	25% {
		top:50px;
	}

	75% {
		left:100px;
	}

	100% {
		top:0;
	}
}

@keyframes identifier {
	0% {
		top:200px;
	}

	25% {
		top:50px;
	}

	75% {
		left:100px;
	}

	100% {
		top:0;
	}
}
```

##Keyframes Exercise
- Try out some of the keyframes along with a transform function.
- One idea may be to rotate a div during a keyframe animation.
- Observe what happens as the div is transformed. Is this what you expected? Why or why not?
- **Bonus:** Now take things a step further and integrate keyframes with JavaScript.
	- Bind a click event to a button that adds a class to the div.
	- Your class should play a keyframe animation of its own.
	- Use at least one transform function in your keyframe.

##Media Query Refresher
- Let's review what a media query is and how we use it.
- Work with your partner to create a single div on CodePen that is shown only when the screen is between 700 and 900 pixels wide.

##Media Queries with Bootstrap
- Media queries are a core concept in Bootstrap, and are used extensively throughout the framework.
- If you are comfortable using the Bootstrap pre-defined media query breakpoints then you're in luck. Bootstrap gives us a [few helper classes](http://getbootstrap.com/css/#responsive-utilities-classes) to toggle visibility.
- Let's set up a new Bootstrap project to test out these visibility classes with a single div.

##In-Class Lab / Homework: Redesign the Header
- Media queries play a huge part in making websites ready for mobile.
- As a front end developer you will likely run into many situations where you have to take existing content and transform it into a mobile-ready layout.
- In this exercise we will take a navigation menu already created for you [here](header_redesign/) and redesign it for mobile devices.
- Start by adding your own CSS file so that you can clearly see what code you wrote.
- For this exercise you will want to use either custom media queries or Bootstrap's visibility classes.
- Use your creativity to come up with something enticing.
- **Bonus:** Use jQuery to create the sliding functionality of the standard Bootstrap navbar for your redesigned version.
- **Super Bonus:** If you're really pushing ahead, try implementing Animate.css for some cool effects.

##Bonus Reading: Animate.css
- Animate.css is a library that packages a number of useful animations that can be accessed via classes.
- You can check it out [here](http://daneden.github.io/animate.css/).
- To use this in conjunction with jQuery, there is a great plugin we can use [here](https://github.com/craigmdennis/animateCSS).

##Further Reading / Next Time:
- We will be going over building forms in next class.
- Have a look over the weekend at these tags specifically:
	- `<input>`
	- `<select>`
	- `<textarea>`
- Check out the `.val()` jQuery function to grab form data.