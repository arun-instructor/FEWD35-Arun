#Templating Continued

##Homework Review: OMDb API
- What was challenging?
- How can this be accomplished with as little code as possible?
- How did you approach the assignment?
- We will also review `JSON.parse()`

##Multiple AJAX Requests
- Now that you've seen how a single JSON object can be displayed with OMDb's API, let's see how we can grab multiple pieces of data and display them.
- For this example we will be using OMDb's search API. A sample request is as follows:

```
http://www.omdbapi.com?s=Your+Search
```
- Let's see an example with a query from an input box:

HTML

```
<input type="text" id="query" />
```

JS

```
$.ajax({
	type: "GET",
	url: "http://www.omdbapi.com?s=" + encodeURIComponent($("#query).val()),
	success: function(data) { },
	error: function() { }
});
```
- From the response you can see that we don't have specific information about the movie beyond the title and ID.
- How do you think we can get specific information about each movie?

##Movie App Code-Along / Homework
- For this project we will be using the starter code located [here](movie_starter_app/).
- We will start off by making a call to the search API to find movie titles related to our search.
- We will then make another call to the API using the returned IMDB IDs to pull information about each specific movie.