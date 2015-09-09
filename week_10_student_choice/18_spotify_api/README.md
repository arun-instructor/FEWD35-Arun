#Spotify API

##Introduction
- Spotify API is a good example of an API you can use to create great functionality in your projects.
- Spotify has functionality for standard calls, as well as OAuth calls, which allow you to extend functionality even further.
- Let's take a look at the [Spotify API Documentation](https://developer.spotify.com/web-api/) before getting started.

##Search for Item
- Spotify has a rich search capability that allows you to query the API based on a number of parameters.
- Let's have a look at the search documentation [here](https://developer.spotify.com/web-api/search-item/).
- API requests will usually have optional parameters and required parameters that should be passed with the call. Which are which for the search API?
- Try a sample query of your own in the browser and see what information you get back.

##Item Search Lab
- For this lab we will be using the search API to requests tracks and build a simple player.
- The steps for this exercise are as follows:
	- Step 1: Create a simple form that will allow the user to enter a search query.
	- Step 2: Query the search API with the user-entered string and grab all related **tracks**. Limit the query to 5 tracks.
	- Step 3: Create a simple Handlebars template to show all track results with only the relevant information (the information that is returned is probably more than we need).
	- Step 4: For each audio preview that is listed (preview_url) use the HTML5 audio tag to allow the user to play the track right from the browser.

##Introduction to OAuth
- OAuth is a way for a user with an account to authorize a third-party application to access their information or alter their account in some way.
- Imagine if you wanted to build an application that took a person's friend list from Facebook and selected matches for you based on certain criteria (ala Tinder). You would need to authorize Tinder (the third party app) to access your information from Facebook.

##OAuth with Spotify
- OAuth generally needs two things - a developer account, and a back end service that provides the authentication.
- Generally when you create a developer account you are given a client id and a client secret code to identify the app.
- We will test out OAuth with this sample app: [https://spotifysandbox.herokuapp.com/](https://spotifysandbox.herokuapp.com/).
- What you get back will be an access token that you can use with requests listed as OAuth-only.
- If you don't have an account you can use one I've set up:
	- Username: arun-instructor
	- Password: FEWDRocks

##OAuth Lab with Spotify Saved Tracks
- For this lab we will be pulling all saved tracks from a user account.
- The way this works is to pass the authorization token that we received in the header of the AJAX request.
- The endpoint of the tracks API: https://api.spotify.com/v1/me/tracks
- Here is a sample request:

```javascript
$.ajax({
	url: "https://api.spotify.com/v1/me/tracks",
	type: "GET",
	headers: {
		"Authorization": "Bearer {token here}"
	},
	success: function(data) {
		console.log(data);
	},
	error: function() {
		alert("There was an error.");
	}
});
```