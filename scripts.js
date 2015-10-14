$(document).ready(function(){
	var start = null;
	var end = null;
	var counter = 0;
	var playCount = 1;
	var homeScore = 0;
	var awayScore = 0;
	var min = parseInt($("#minutes").html());
	var sec = parseInt($("#seconds").html());



	var resetGame = function(){
		$('#newGame').click(function(){
			parseInt($('#homePoints').html(0));
			parseInt($('#awayPoints').html(0));
		});
	}


	var setBall = function(pos1, pos2){
		if (pos1 > 870) {
			$('#ball').animate({left: '845px'}, 1000);
			return;
		} else if (pos2 < 395) {
			$('#ball').animate({left: '405px'}, 1000);
			return;
		}
	}

	var checkDown = function(){
		if (playCount == 4) {
			playCount = 0;
			alert("Change of Possession!");
			counter++;
		};
	};

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
			$('#ball').css("left", "+=25px");
			checkPosition();
		} else if (yds >= 75 && yds < 100) {
			$('#ball').css("left", "+=100px");
			checkPosition();
		} else if (yds >= 100 && yds < 250) {
			alert("Incomplete Pass");
			checkPosition();
		} else if (yds >= 250 && yds < 350) {
			$('#ball').css("left", "+=150px");
			checkPosition();
		} else if (yds >= 350 && yds < 500){
			$('#ball').css("left", "+=180px");
			checkPosition();
		} else if (yds >= 500){
			alert("Intercepted by Player Two");
			counter++;
			playCount = 1;
		}
		console.log(playCount);
	};

	var awayPlay = function(yds){
		if (yds > 0 && yds < 75) {
			$('#ball').css("left", "-=25px");
			checkPosition();
		} else if (yds >= 75 && yds < 100) {
			$('#ball').css("left", "-=100px");
			checkPosition();
		} else if (yds >= 100 && yds < 250) {
			alert("Incomplete Pass");
			checkPosition();
		} else if (yds >= 250 && yds < 350) {
			$('#ball').css("left", "-=150px");
			checkPosition();
		} else if (yds >= 350 && yds < 500){
			$('#ball').css("left", "-=180px");
			checkPosition();
		} else if (yds >= 500){
			alert("Intercepted by Player One");
			counter++;
			playCount = 1;
		}

			console.log(playCount);
	}

	var checkPosition = function(){
		var leftPos = parseInt($('#ball').css("left"));
		var ballWidth = $('#ball').width();
		var rightPos = leftPos + ballWidth;

		if ((leftPos > 870) && (rightPos < 1055)) {
			homeScore+=7;
			counter++;
			setBall(leftPos, rightPos);
			parseInt($('#homePoints').html(homeScore));
			playCount = 1;
			parseInt($('#down').html("Down "+playCount));
		} else if ((leftPos > 215) && (rightPos < 395)){
			awayScore+=7;
			counter++;
			setBall(leftPos, rightPos);
			parseInt($('#awayPoints').html(awayScore));
			playCount = 1;
			parseInt($('#down').html("Down "+playCount));
		} else if (rightPos >= 1055) {
			alert("Turnover!")
			setBall(leftPos, rightPos);
			playCount = 1;
			counter++;
			parseInt($('#down').html("Down "+playCount));
		} else if (leftPos <= 215){
			alert("Turnover!")
			setBall(leftPos, rightPos);
			playCount = 1;
			counter++;
			parseInt($('#down').html("Down "+playCount));
		} else {
			checkDown();
			playCount++;
			parseInt($('#down').html("Down "+playCount));
		}
	};
	parseInt($('#down').html("Down "+playCount));		
});