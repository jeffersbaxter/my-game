$(document).ready(function(){
	var start = null;
	var end = null;
	var yards = (end - start)+900;


	$('body').keydown(function(e){
		
		if (e.keyCode==32) {
			if (!start) {
				start = new Date();
				console.log(start);
			}
			// alert(start);
		};

	});

	$('body').keyup(function(e){
		if (e.keyCode==32) {
			end = new Date();
			console.log(end)
			var yards = (end - start);
			console.log(yards);
			start = null;
			end = null;
			homePlay();
		};
	});

	var homePlay = function(){
		$('.ball').css("left", yards);
	}

});