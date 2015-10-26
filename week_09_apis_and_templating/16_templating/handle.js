var HANDLE = {};

HANDLE.renderTemplate = function(settings) {
	if (settings.clearOriginal) {
		$(settings.where).html("");
	}

	var source = $(settings.templateSource).html();

	var template = Handlebars.compile(source);

	if (typeof settings.data === "string") {
		var jsonData = JSON.parse(settings.data);
	} else {
		var jsonData = settings.data;
	}

	var html;

	if (jsonData instanceof Array) {
		for (var i = 0; i < jsonData.length; i++) {
			html = template(jsonData[i]);
			$(settings.where).append(html);
		}
	} else if (jsonData instanceof Object) {
		html = template(jsonData);
		$(settings.where).append(html);
	}
}