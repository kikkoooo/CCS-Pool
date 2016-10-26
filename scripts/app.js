$(document).ready(function(){

	// Get JSON file
	$.ajax({
		type: 'GET',
		url: './scripts/data.json',
		dataType: 'json',
		success: function(data) {

			$.each(data, function(i, player){
				if (player.faveColor == "red") {
					$("#message").append('<div class="player red">'+player.name + "</div>");
				} else if (player.faveColor == "blue") {
					$("#message").append('<div class="player orange">'+player.name + "</div>");					
				} else if (player.faveColor == "orange") {
					$("#message").append('<div class="player blue">'+player.name + "</div>");					
				}
		    });

		}
	});

});