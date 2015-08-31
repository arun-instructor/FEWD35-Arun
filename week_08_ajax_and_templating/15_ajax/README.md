#Introduction to AJAX

##What is AJAX?
- AJAX stands for Asynchronous JavaScript and XML.
- It is a way to send and receive data from a server (the back end) after the page has already been loaded, and without reloading it.
- AJAX accepts and operates through the REST convention.
- It bridges the gap between front end and back end in a user-friendly way.

##AJAX with jQuery
- jQuery has a powerful AJAX feature that makes using AJAX painless and straightforward.
- There are a few shortcut methods, but here is the best-practice way that is advised:

```
$.ajax({
	type: "POST, PUT, GET, or DELETE",
	url: "your endpoint here",
	data: { //Key value pairs of data here },
	success: function(data, textStatus, jqXHR) { },
	error: function(jqXHR, textStatus, errorThrown) { }
});
```

- Data that is either transmitted or received via AJAX is in JSON format.

##JSON Refresher
- JSON is used widely throughout applications that use JavaScript because its format is simply a JavaScript object.
- As a result, JSON objects have keys and values, and these can also be nested inside of each other.
- Multiple data types can also be present in these objects such as arrays, integers, strings, etc.
- Let's see a nested example:

```
var userInfo = {
	firstname: "Arun",
	lastname: "Sood",
	role: "Instructor",
	pets: [
		{
			name: "Fido",
			type: "Dog",
			favorite_toy: "Tennis ball",
			age: 7
		},
		{
			name: "Kitty",
			type: "Cat",
			favorite_toy: "Feather on a stick",
			age: 3
		}
	],
	favorite_number: 10
};
```

##Code-Along: Using AJAX to Build a User Manager
- For this code along we will be looking at a live API that has information about a set of users.
- We will be using AJAX to grab information about the users in the list as well as alter the list contents.
- Here is the endpoint we will be using: `http://daretodiscover.herokuapp.com/users`.
- Here are the RESTful routes we will be accessing:
	- `GET /users` -> Returns collection of users
	- `GET /users/:id` -> Returns user member
	- `POST /users` -> Creates a new user in the collection
	- `PUT /users/:id` -> Updates a user member
	- `DELETE /users/:id` -> Deletes a user member
- First we will start off with creating a `console.log` for each piece of data we get back.
- While performing a `GET` request to `/users` what type of data do we get back? How can we take every user and output their details to the console?
- After this let's create a simple form to input new user information.
- We will save the `DELETE` request for next class.

##In-Class Lab / Homework
- For this exercise we will be using the API located here: `http://daretodiscover.herokuapp.com/wines`.
- This API follows the same exact RESTful convention that the users API follows. Therfore you should automatically know each route to use.
- Here are the steps you will need to follow:
	- Step 1: Create a form that has inputs for each piece of data. Hint: You will need to look at the JSON you get back. What are the keys?
	- Step 2: Create two buttons - one that will perform a `console.log` of each wine from the server, and another that will perform the AJAX `POST` request to add the new wine.

##Reading for Next Class:
- Next class we will be covering JavaScript templating.
- Take a look at the [documentation for Handlebars.js](http://handlebarsjs.com/) and see if you can figure out how to use it.
- Also it would be a good idea to play around in the console with more JSON objects, as this will be a common theme.