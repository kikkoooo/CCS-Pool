$(document).ready(function(){

	// Get JSON file
	$.ajax({
		type: 'GET',
		url: 'scripts/data.json',
		success: function(data) {
			$.each(data, function(i, player){
				$("#message").append(player.number + ": " + player.name + "<br/>");
		    });
		}
	});

	// Get XML file
	$.ajax({
		type: 'GET',
		url: 'scripts/data.xml',
		success: function(xml) {
			$(xml).find('player').each(function(){
				var number = $(this).find('number').text();
				var name = $(this).find('name').text();
				$("#message").append(number + ": " + name + "<br/>");
			});
		}
	});

});