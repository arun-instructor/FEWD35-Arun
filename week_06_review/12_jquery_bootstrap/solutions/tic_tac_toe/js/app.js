var currentTurn = "X";

$(document).on("click", "td", function() {
	if ($(this).html() === "") {
		$(this).html(currentTurn);

		if (currentTurn === "X") {
			currentTurn = "O";
		} else {
			currentTurn = "X";
		}
	} else {
		alert("Sorry spot is taken!");
	}
});