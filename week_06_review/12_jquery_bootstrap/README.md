#jQuery Review and Bootstrap Integration

##Review TicTacToe
- What did you find most challenging?
- How did you approach the game?

##Using jQuery Plugins with Bootstrap
- One of the most powerful aspects of jQuery is that its functionality can be extended by plugins.
- You can write your own plugins which is pretty straightforward or you can use a wide variety of plugins created by other people.
- Bootstrap provides a number of plugins that help you with your development.
- You can see a good list of what they provide [here](http://getbootstrap.com/javascript/).
- Some of the plugins can be manipulated through data- attributes instead of having to write any JavaScript, like the dropdown plugin:

```
<div class="dropdown">
	<button id="dLabel" type="button" data-toggle="dropdown">
		Dropdown trigger
		<span class="caret"></span>
	</button>
	<ul class="dropdown-menu">
		<li><a href="#">Link 1</a></li>
	</ul>
</div>
```

- Most of these plugins can also be triggered via JavaScript as well. For example the dropdown menus again:

```
$('.dropdown-toggle').dropdown();
```

##In-Class Exercise: Modal Window
- Let's take a look at a neat plugin called the modal window.
- Try with a partner to implement a modal window that is triggered via a button on the page.
- **Bonus:** Try to open the window using the two possible methods - data attributes and via JavaScript directly.

##In-Class Lab / Homework: Organize Me!
- Take a look at a website of your choice that is incredibly messy and disorganized.
- Think of a layout that could fit the site to organize the content more effectively.
- Implement the layout via bootstrap using at least these JavaScript plugins:
	- Navbar with dropdowns
	- Modal window
	- Tooltip
	- Carousel
	- Tabs
	- **Bonus:** Collapse
	- **Bonus:** Progress bar with animation
- Note: You definitely do not have to redo the entire site. If it makes sense to just do one page that's totally ok. Just challenge yourself :)