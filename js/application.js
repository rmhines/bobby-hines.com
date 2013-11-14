(function () {
	var paths = {
		home: '_home.html',
		about: '_about.html',
		resume: '_resume.html',
		contact: '_contact.html'
	}

	current_path = '';

	function goToPath(path) {
		log("Inside goToPath for path '" + path + "'");

		if (paths[path] && current_path != path) {
			var content = $('div#main div#content');

			// content.css({
			// 	'width': content.width(),
			// 	'height': content.height()
			// })
			content.find('div#content_inner').fadeOut(200, function () {
				$.get(paths[path], function (data) {
					content.find('div#content_inner').html(data).fadeIn(200, function () {
						$(document).trigger('resize');
					});
				});
			});

			current_path = path;
		}
	}

	$(document).ready(function() {
		$('div#main div#content').animate({
			width: $(document).width() - 120 + 'px',
			height: $(document).height() - 350 + 'px'
		}, 1000, function () {
			goToPath('home');
		});

		$(document).on('click', '.button', function () {
			var path = $(this).data('path');
			goToPath(path);
		});

		$(window).on('resize', function () {
			var header = $('div#header');
			var footer = $('div#footer');
			var main = $('div#main');
			var content = main.find('div#content');

			main.css({
				'top': header.height(),
				'height': $(window).height() - header.height() - footer.height()
			});

			content.css({
				'width': $(window).width() - 120 + 'px',
				'min-height': main.height() - 120 + 'px',
				'height': 'auto'
			});

			if (content.height() > main.height() - 120) {
				main.css('height', content.height() + 170);
				console.log("Ok good.");
			} else {
				console.log("FUUUCK!");
				console.log("CONTENT: " + content.height());
				console.log("MAIN: " + main.height());
			}
		}).trigger('resize');
	});
})();

var log = function (a) {
	console.log(a);
}