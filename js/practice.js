numColumns = 16;
numRows = 16;
count = 0;

$(document).ready(function() {
	size = parseInt($("#container").css("width")) - 40;
	size /= numColumns;
	newGrid(numRows, numColumns);
});

function newGrid(rows, columns) {
	for (var i = 0; i < rows; i++) {
		for (var j = 0; j < columns; j++) {
			$("#container").append("<div class='grid' id='box" + count + "'></div>");
			$(".grid").css({"height" : size, "width" : size});
			count++;
		}
		$("#container").append("<div class='clear'></div>");
	}

	$(".grid").hover(function() {
		$(this).css("background-color", "blue");
	});
}

function getInput() {
	var rows = prompt("Enter a number of rows", 16);
	var columns = prompt("Enter a number of columns", 16);
	if (rows > 0 && columns > 0) {
		$("#container").empty();
		newGrid(rows, columns);
	}
}

$(".grid").hover(function() {
	$(this).css("background-color", "blue");
});