$(document).on("click", "li.international", function(event) {
	event.preventDefault();

	$("#international-drop").show();
	$("#politics-drop").hide();
	$("#business-drop").hide();
	$("#technology-drop").hide();
	$("#culture-drop").hide();
	$("#blogs-drop").hide();

	if ($(this).hasClass("active")) {
		$("#slide-down").slideUp();
		$(this).removeClass("active");
	} else {
		$("#slide-down").slideDown();
		$("#primary-nav li").removeClass("active");
		$(this).addClass("active");
	}
});

$(document).on("click", "li.politics", function(event) {
	event.preventDefault();

	$("#politics-drop").show();
	$("#business-drop").hide();
	$("#technology-drop").hide();
	$("#culture-drop").hide();
	$("#blogs-drop").hide();
	$("#international-drop").hide();

	if ($(this).hasClass("active")) {
		$("#slide-down").slideUp();
		$(this).removeClass("active");
	} else {
		$("#slide-down").slideDown();
		$("#primary-nav li").removeClass("active");
		$(this).addClass("active");
	}
});

$(document).on("click", "li.business", function(event) {
	event.preventDefault();

	$("#politics-drop").hide();
	$("#business-drop").show();
	$("#technology-drop").hide();
	$("#culture-drop").hide();
	$("#blogs-drop").hide();
	$("#international-drop").hide();

	if ($(this).hasClass("active")) {
		$("#slide-down").slideUp();
		$(this).removeClass("active");
	} else {
		$("#slide-down").slideDown();
		$("#primary-nav li").removeClass("active");
		$(this).addClass("active");
	}
});

$(document).on("click", "li.technology", function(event) {
	event.preventDefault();

	$("#politics-drop").hide();
	$("#business-drop").hide();
	$("#technology-drop").show();
	$("#culture-drop").hide();
	$("#blogs-drop").hide();
	$("#international-drop").hide();

	if ($(this).hasClass("active")) {
		$("#slide-down").slideUp();
		$(this).removeClass("active");
	} else {
		$("#slide-down").slideDown();
		$("#primary-nav li").removeClass("active");
		$(this).addClass("active");
	}
});

$(document).on("click", "li.culture", function(event) {
	event.preventDefault();

	$("#politics-drop").hide();
	$("#business-drop").hide();
	$("#technology-drop").hide();
	$("#culture-drop").show();
	$("#blogs-drop").hide();
	$("#international-drop").hide();

	if ($(this).hasClass("active")) {
		$("#slide-down").slideUp();
		$(this).removeClass("active");
	} else {
		$("#slide-down").slideDown();
		$("#primary-nav li").removeClass("active");
		$(this).addClass("active");
	}
});

$(document).on("click", "li.blogs", function(event) {
	event.preventDefault();

	$("#politics-drop").hide();
	$("#business-drop").hide();
	$("#technology-drop").hide();
	$("#culture-drop").hide();
	$("#blogs-drop").show();
	$("#international-drop").hide();

	if ($(this).hasClass("active")) {
		$("#slide-down").slideUp();
		$(this).removeClass("active");
	} else {
		$("#slide-down").slideDown();
		$("#primary-nav li").removeClass("active");
		$(this).addClass("active");
	}
});