$(function() {
    var count = 0;
    var audioElement = document.createElement('audio');

    audioElement.setAttribute('src', 'assets/grunt.mov');

	$('.ready').click(function () {

        var newNm = Math.floor(Math.random() * (35 - 0 + 1)) + 0;
        console.log('newNm: ', newNm);
        if (!gameHasBeenWon()) {
        	if (newNm !== 36) {

        		if ($('.notCell.ready').length === 1) {
        			$(this).removeClass('ready');
        			$(this).addClass('won');

                    audioElement.play();

        		} else {
        			$(this).removeClass('ready');
        			$(this).addClass('spent');
        		}
        	} else {
        		$(this).removeClass('ready');
        		$(this).addClass('won');
                audioElement.play();

        		alert('You Won!');
        	}
        } else {
        	alert('You found the treasure');
        }

        count++;
        $("#counter").html("Turn " + count + "!");

	});

	$('#reset').click(function () {

		$('.notCell.won').removeClass('won').addClass('ready');
		$('.notCell.spent').removeClass('spent').addClass('ready');
        count = 0;
        $("#counter").html("New Game!");

	});

	function gameHasBeenWon() {
    	if ($('.notCell.won').length === 1) {
    		return true;
    	}

    	return false;

	}
});