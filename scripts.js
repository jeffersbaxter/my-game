$(document).ready(function(){
	var start = null;
	var end = null;



	var play = function() {
		$('body').keydown(function(e){
			
			if (e.keyCode==32) {
				if (!start) {
					start = new Date();
					console.log(start);
					moveBall();
				}
			};
		});
	};

	var moveBall = function(){
		$('body').keyup(function(e){
			if (e.keyCode==32) {
				end = new Date();
				console.log(end);
				var yards = (end - start);
				console.log(yards);
				homePlay(yards);
				start = null;
				end = null;
				return yards;
			};
		});
	};
	var homePlay = function(yds){
		if (yds > 0 && yds < 75) {
			$('#ball').css("left", "500px");
		} else if (yds >= 75 && yds < 150) {
			$('#ball').css("left", "550px");
		} else if (yds >= 150 && yds < 350) {
			$('#ball').css("left", "600px");
		} else {
			$('#ball').css("left", "650px");
		}

	}
	play();

});