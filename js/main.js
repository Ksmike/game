$(function() {
    var count = 10;
    var audioElement = document.createElement('audio');

    audioElement.setAttribute('src', 'assets/grunt.mov');

	$('body').on('click', '.ready', function () {

        var newNm = Math.floor(Math.random() * (36 - 0 + 1)) + 0;
        console.log('newNm: ', newNm);
        if (!gameHasBeenWon()) {
            if (count !== 0) {
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
                count--;
                $("#counter").html("Turns left " + count + "!");
            } else {
                alert('LOSER!');
                count = 0;
                $("#counter").html("Try Again!");
            }

        } else {
        	alert('You found the treasure');
        }
	});

	$('#reset').click(function () {

		$('.notCell.won').removeClass('won').addClass('ready');
		$('.notCell.spent').removeClass('spent').addClass('ready');
        count = 10;
        $("#counter").html("New Game!");

	});

	function gameHasBeenWon() {
    	if ($('.notCell.won').length === 1) {
    		return true;
    	}
    	return false;
	}
});