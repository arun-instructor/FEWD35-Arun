//Function to hide or show the menus

function hideShowMenus(scope) {
	if ($(scope).hasClass("active")) {
		$("#slide-down").slideUp(200);
		$(scope).removeClass("active");	
	} else {
		$("#slide-down").slideDown(200);
		$("#primary-nav li").removeClass("active");
		$(scope).addClass("active");
	}
}

$(document).on("click", "li.international", function(event) {
	event.preventDefault();

	$("#international-drop").show();
	$("#politics-drop").hide();
	$("#business-drop").hide();
	$("#technology-drop").hide();
	$("#culture-drop").hide();
	$("#blogs-drop").hide();

	hideShowMenus(this);
});

$(document).on("click", "li.politics", function(event) {
	event.preventDefault();
	
	$("#international-drop").hide();
	$("#politics-drop").show();
	$("#business-drop").hide();
	$("#technology-drop").hide();
	$("#culture-drop").hide();
	$("#blogs-drop").hide();

	hideShowMenus(this);
});

$(document).on("click", "li.business", function(event) {
	event.preventDefault();
	
	$("#international-drop").hide();
	$("#politics-drop").hide();
	$("#business-drop").show();
	$("#technology-drop").hide();
	$("#culture-drop").hide();
	$("#blogs-drop").hide();

	hideShowMenus(this);
});

$(document).on("click", "li.technology", function(event) {
	event.preventDefault();
	
	$("#international-drop").hide();
	$("#politics-drop").hide();
	$("#business-drop").hide();
	$("#technology-drop").show();
	$("#culture-drop").hide();
	$("#blogs-drop").hide();

	hideShowMenus(this);
});

$(document).on("click", "li.culture", function(event) {
	event.preventDefault();
	
	$("#international-drop").hide();
	$("#politics-drop").hide();
	$("#business-drop").hide();
	$("#technology-drop").hide();
	$("#culture-drop").show();
	$("#blogs-drop").hide();

	hideShowMenus(this);
});

$(document).on("click", "li.blogs", function(event) {
	event.preventDefault();
	
	$("#international-drop").hide();
	$("#politics-drop").hide();
	$("#business-drop").hide();
	$("#technology-drop").hide();
	$("#culture-drop").hide();
	$("#blogs-drop").show();

	hideShowMenus(this);
});