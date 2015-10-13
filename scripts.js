$(document).ready(function(){
	var start = null;
	var end = null;
	var counter = 0;
	var playCount = 0;
	var homeScore = 0;
	var awayScore = 0;


	var setBall = function(pos1, pos2){
		if ((pos1 > 870) && (pos2 < 1035)) {
			$('#ball').css('left', '860px');
			return;
		} else if ((pos1 > 215) && (pos2 < 380)) {
			$('#ball').css('left', '390px');
			return;
		}
	}

	var keyPressed = false;
	$('body').keydown(function(e){
		
		if (e.keyCode==32) {
			if (!start) {
				start = new Date();
				keyPressed = true;
			}
		};
	});

	$('body').keyup(function(e){
		if (e.keyCode==32 && keyPressed) {
			end = new Date();
			var yards = (end - start);
			whoseTurn(yards);
			console.log(yards);
			start = null;
			end = null;
			keyPressed = false;
		}
	});
	var whoseTurn = function(yards){
		if (counter % 2 == 0){
			homePlay(yards);
		}
		else {
			awayPlay(yards);
		}
	};

	var homePlay = function(yds){

		if (yds > 0 && yds < 75) {
			$('#ball').css("left", "+=50px");
			playCount++;
			checkPosition();
		} else if (yds >= 75 && yds < 150) {
			$('#ball').css("left", "+=150px");
			playCount++;
			checkPosition();
		} else if (yds >= 150 && yds < 350) {
			$('#ball').css("left", "+=180px");
			playCount++;
			checkPosition();
		} else if (yds >= 350 && yds < 500){
			$('#ball').css("left", "+=200px");
			playCount++;
			checkPosition();
		} else if (yds >= 500){
			alert("Intercepted by Player Two");
			counter++;
			playCount = 0;
		}
		console.log(counter);

	}

	var awayPlay = function(yds){

		if (yds > 0 && yds < 75) {
			$('#ball').css("left", "-=50px");
			checkPosition();
		} else if (yds >= 75 && yds < 150) {
			$('#ball').css("left", "-=150px");
			checkPosition();
		} else if (yds >= 150 && yds < 350) {
			$('#ball').css("left", "-=180px");
			checkPosition();
		} else if (yds >= 350 && yds < 500){
			$('#ball').css("left", "-=200px");
			checkPosition();
		} else if (yds >= 500){
			alert("Intercepted by Player One");
			counter++;
			playCount = 0;
		}

			console.log(counter);
	}

	var checkPosition = function(){
		var leftPos = parseInt($('#ball').css("left"));
		var ballWidth = $('#ball').width();
		var rightPos = leftPos + ballWidth;

			if ((leftPos > 870) && (rightPos < 1035)) {
				// setTimeout(function() {
				// 	alert("Player One Scores!");
				// }, 100);
				homeScore+=7;
				counter++;
				// setBall(leftPos, rightPos);
				// alert("Away: "+awayScore+"||"+"Home: "+homeScore);
				parseInt($('#homePoints').html(homeScore));
			} else if (rightPos >= 1035) {
				setBall(leftPos, rightPos);
				counter++;
			} else if (leftPos <= 215){
				setBall(leftPos, rightPos);
				counter++;
			}
			else if ((leftPos > 215) && (rightPos < 380)){
				// setTimeout(function(){
				// 	alert("Player Two Scores!");
				// }, 100);
				awayScore+=7;
				counter++;
				// setBall(leftPos, rightPos);
				// alert("Away: "+awayScore+" || "+"Home: "+homeScore);
				parseInt($('#awayPoints').html(awayScore));
			} else {
				playCount++;
			}
	};

			
});