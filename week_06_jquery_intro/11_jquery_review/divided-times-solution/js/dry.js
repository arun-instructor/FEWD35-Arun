function hideShowNav(whereAmI) {
	if ($(whereAmI).hasClass("active")) {
		$("#slide-down").slideUp();
		$(whereAmI).removeClass("active");
	} else {
		$("#slide-down").slideDown();
		$("#primary-nav li").removeClass("active");
		$(whereAmI).addClass("active");
	}
}

$(document).on("click", "li.international", function(event) {
	event.preventDefault();

	$("#international-drop").show().siblings().hide();

	hideShowNav(this);
});

$(document).on("click", "li.politics", function(event) {
	event.preventDefault();

	$("#politics-drop").show().siblings().hide();

	hideShowNav(this);
});

$(document).on("click", "li.business", function(event) {
	event.preventDefault();

	$("#business-drop").show().siblings().hide();

	hideShowNav(this);
});

$(document).on("click", "li.technology", function(event) {
	event.preventDefault();

	$("#technology-drop").show().siblings().hide();

	hideShowNav(this);
});

$(document).on("click", "li.culture", function(event) {
	event.preventDefault();

	$("#culture-drop").show().siblings().hide();

	hideShowNav(this);
});

$(document).on("click", "li.blogs", function(event) {
	event.preventDefault();

	$("#blogs-drop").show().siblings().hide();

	hideShowNav(this);
});