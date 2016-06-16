$(function() {
    var count = 10;
    var audioElement = document.createElement('audio');
    buzzRandomCell();

    audioElement.setAttribute('src', 'assets/grunt.mov');

	$('body').on('click', '.ready', function () {

        var newNm = Math.floor(Math.random() * (36 - 0 + 1)) + 0;
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

    function buzzRandomCell() {
        var $rnd = Math.floor((Math.random() * 35)); // between 0 and 35
        $(".notCell.ready[data-id="+$rnd+"]").addClass("hvr-buzz-out hover").delay(1500).queue(function(){
            $(this).removeClass("hvr-buzz-out hover");
            });
        var $rnd_time = Math.floor((Math.random() * 3500) + 50); // between .05s and 8s
        var $nextRandomCell = setTimeout( buzzRandomCell, $rnd_time );
    }

});