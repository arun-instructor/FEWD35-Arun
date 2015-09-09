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

$(document).on("click", "#primary-nav li", function(event) {
	event.preventDefault();
	var listItem = $(this).children("a")[0].hash;
	$(listItem).show().siblings().hide();
	hideShowNav(this);
});