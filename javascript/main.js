function rotateText() {
	var items = [
		['updates',		 	'new product features'],
		['daily digests', 	'your curated design links'],
		['notifications', 	'your latest blog posts'],
		['daily digests', 	'top tech news'],
		['highlights', 		'your favourite recipes'],
		['daily reports', 	'your users\' activity']
	];

	var options = {
		interval: 	4500,
		normal: 	5500
	};

	var flip1 = $('#flip-first'),
		flip2 = $('#flip-second'),
		currentIndex = -1,
		isFirst = true;


	function flipText() {

		if (currentIndex == -1)
			currentIndex++;
		else {
			flip1.css({ opacity: 0 });
			flip2.css({ opacity: 0 });
			options.interval = options.normal; // First time is half the time
		}

		setTimeout(function () {

			setTimeout(function () {
				flip1.css({ opacity: 1 });
				flip2.css({ opacity: 1 });
			}, 300);

			flip1.text(items[currentIndex][0]);
			flip2.text(items[currentIndex][1]);
			$(flip1).parent().width(flip1.width());
			$(flip2).parent().width(flip2.width());

			currentIndex = (currentIndex + 1) % items.length;
			setTimeout(flipText, options.interval);
		}, 300);
	}
	
	flipText();
}

$('.feature-one').waypoint(function (direction) {
	if (direction === 'down') {
		$(this).find('.wee').addClass('visible');
	}
	else {
		$(this).find('.wee').removeClass('visible');
	}
}, { offset: '60%'});

$('.feature-two').waypoint(function (direction) {
	if (direction === 'down') {
		$(this).find('.wee').addClass('visible');
	}
	else {
		$(this).find('.wee').removeClass('visible');
	}
}, { offset: '60%'});