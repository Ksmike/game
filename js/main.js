$(function() {
	$('.notCell.ready').click(function () {

        var newNm = Math.floor(Math.random() * (36 - 0 + 1)) + 0;

        if (!gameHasBeenWon()) {
        	if (newNm !== 36) {
        		if ($('.notCell.ready').length === 1) {
        			$(this).removeClass('ready');
        			$(this).addClass('won');
        		} else {
        			$(this).removeClass('ready');
        			$(this).addClass('spent');
        		}
        	} else {
        		$(this).removeClass('ready');
        		$(this).addClass('won');
        		alert('You Won!');
        	}
        } else {
        	alert('You found the treasure');
        }
		$('#counter').html(function(i, val) { return +val+1 });

	});



	$('#reset').click(function () {

		$('.notCell.won').removeClass('won').addClass('ready');
		$('.notCell.spent').removeClass('spent').addClass('ready');

	});

	function gameHasBeenWon() {
    	if ($('.notCell.won').length === 1) {
    		return true;
    	}

    	return false;

	}
});