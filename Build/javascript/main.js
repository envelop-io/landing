function fireRocket()
{
	var t = {
		main: 	6500,
		opaque: 300,
		resize: 300,
		first: 	3000
	};
	var ITEMS = [
		['updates',		 	'new product features'],
		['daily digests', 	'your curated design links'],
		['notifications', 	'your latest blog posts'],
		['daily digests', 	'top tech news'],
		['highlights', 		'your favourite recipes'],
		['daily reports', 	'your users\' activity']
	];
	var len = ITEMS.length;

	var index = 0;
	var flip1 = $('#flip-first');
	var flip2 = $('#flip-second');
	var fuelcells = $('.fuel-cell');
	var fuel = function (i) {
		return $('.rocket').find(fuelcells[i]);
	};

	for (var i = 1; i < len+1; i++) {
		fuel(i).css({transform: 'translateY(-20px)'});
		fuel(i).css({opacity: 0});
	};

	// Make first one comubstable so it can transition
	fuel(0).addClass('combustable');

	function flipText()
	{
		// First run
		if (flip1.text() == ITEMS[index][0])
		{
			index ++;
			setTimeout(flipText, t.first);
			return;
		}

		flip1.css({opacity: 0});
        flip2.css({opacity: 0});

		setTimeout(function ()
		{
			var cf = index==0 ? fuel(len) : fuel(index);
			cf.addClass('combustable');
			cf.css({transform: 'translateY(0)'});
			cf.css({opacity: 1});

			if (index==0)
			{
				setTimeout(function () {
					fuel(0).addClass('combustable');
					fuel(0).css({transform: 'translateY(0)'});
					fuel(0).css({opacity: 1});
					cf.removeClass('combustable');
				}, 2000);
			}

			var prev = (index - 1 + len) % len;
			setTimeout(function () {
				if (prev == 0) prev = len;
				fuel(prev).removeClass('combustable');
				fuel(prev).css({transform: 'translateY(' + (-20) +'px)'});
				fuel(prev).css({opacity: 0});
			}, 1800);

			// Change message
			flip1.text(ITEMS[index][0]);
			flip2.text(ITEMS[index][1]);
			$(flip1).parent().width(flip1.width());
			$(flip2).parent().width(flip2.width());


			setTimeout(function () {
	            flip1.css({opacity: 1});
	            flip2.css({opacity: 1});
			}, t.opaque);

			index = (index + 1) % len;
			setTimeout(flipText, t.main);
		}, t.resize);
	};

	
	flipText();

	setTimeout(function () {
		$('#rocket').css({display: 'block'});
		$('#temp-placeholder').remove();
	}, 200);
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