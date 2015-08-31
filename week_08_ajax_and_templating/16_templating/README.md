##Front-End Templating with Handlebars
- Handlebars is a front-end templating framework.
- Basically, you will need a templating framework any time you have a collection of data and you want to display it in some specified way.
- Handlebars is really good at taking JSON data and displaying it. As a result, it works well with displaying data that comes back from an API.

####Setup
- Download the [Handlebars library](http://handlebarsjs.com/).

####AJAX Refresher
- For today's lesson we will be using jQuery to handle the AJAX calls.
- AJAX is a way to send and receive data from the server asynchronously from the page load.
- The syntax for jQuery AJAX is as follows:

```
$.ajax({
	url: "YOUR ENDPOINT HERE",
	type: "GET",
	success: function(data) { },
	error: function(jqXHR, textStatus, errorThrown) { }
});
```

####How to Use Handlebars
- Handlebars templates are handled through `<script>` tags, which allow them to be ignored while rendering the page:

```
<script id="my-template" type="text/x-handlebars-template">
```

- You can write any normal HTML here, but you can also write Handlebars-specific code:

```
<script id="my-template" type="text/x-handlebars-template">
	<div class="entry">
		<h1>{{title}}</h1>
		<div class="body">
			{{body}}
		</div>
	</div>
</script>
```

- The curly code is essentially keys to a JSON object.
- If you need to, you can also loop through an array of JSON objects to produce very dynamic templates. You will do this today. Here is an example from the docs on how this can be done through helpers:

```
<h1>Comments</h1>

<div id="comments">
	{{#each comments}}
		<h2><a href="/posts/{{id}}">{{title}}</a></h2>
		<div>{{body}}</div>
	{{/each}}
</div>
```

- This example assumes that `comments` is an array of JSON objects.

- Before a template is used however, it must be first "compiled":

```
var source   = $("#my-template").html();
var template = Handlebars.compile(source);
```

- The function `Handlebars.compile` returns a function that can be passed JSON data as an argument.
- This resulting function returns HTML after the JSON data is processed into it.
- You can then apply your template anywhere you need to:

```
var jsonData = {
	title: "My New Post",
	body: "This is my first post!"
};

var template_html = template(jsonData);
$("#some-div").html(template_html);
```

##Code-Along: Wine Template
- For this code-along we will be using jQuery AJAX with Handlebars to pull dynamic wine data and place it into a template.
- The HTML and CSS has already been done for you, and you can find it [here](wine_manager_html/).
- To make Handlebars a bit simpler, we will be using a home-made library called [Handle.js](handle.js).

##Documentation for Handle.js
- Handle.js is very simple to use, as it only contains one function - renderTemplate.
- In order to render a template using handle.js you have to pass it the following information as an object:
	- `templateSource` - ID of the template HTML
	- `data` - Data in any format (JSON, Array, etc.)
	- `where` - ID of the element you want to place the template inside
	- `clearOriginal` - True or false if you want to clear what was originally in the container before the template is added
- An example use:

```javascript
HANDLE.renderTemplate({
	templateSource: "#user-template", 
	data: users, 
	where: "#container", 
	clearOriginal: true
});
```

##Querying Real-Life APIs
- API stands for Application Programmable Interface. It essentially gives you access to a limited set of the application's features in a structured and controlled way.
- APIs vary in their implementations. There is usually no one-way to query all of them.
- There are a few popular APIs that many developers implement:
	- Facebook: Get user information and post statuses.
	- Twitter: Get user information and post tweets.
	- Google Maps: Render maps based on location data with custom markers.
	- Meetup: Get location-based event information.

##API Exercise / Homework: Getting Movie Information
- OMDb is an open API that gives us access to movie information.
- Let's check out the documentation [here](http://www.omdbapi.com/).
- Check out how you can make queries to the API using query string parameters (?t=My+Title).
- Here are the steps you will need to take:
	- Step 1: Create a simple form that allows the user to enter a movie title of their choice.
	- Step 2: Query the API using the entered title and display the JSON results in the console.
	- Step 3: Take the JSON and create a Handlebars template to show the information.