(function () {
	var paths = {
		about: '_about.html',
		portfolio: '_portfolio.html',
		blog: '_blog.html',
		contact: '_contact.html'
	}

	current_path = 'home';

	function goToHome() {
		log("Inside goToHome");
		var content = $('div#main div#content');

		content.find('div#content_inner').fadeOut(200, function () {

		});
	}

	function goToPath(path) {
		log("Inside goToPath for path '" + path + "'");

		if (paths[path] && current_path != path) {
			var content = $('div#main div#content');

			content.css({
				'width': content.width(),
				'height': content.height()
			})
			content.find('div#content_inner').fadeOut(200, function () {
				content.animate({
					width: $(document).width() - 120 + 'px',
					height: $(document).height() - 350 + 'px'
				}, 1000, function () {
					
				});
			});

			current_path = path;
		}
	}

	$(document).ready(function() {
		$(document).on('click', '.button', function () {
			var path = $(this).data('path');
			if (path == 'home') {
				goToHome();
			}
			else {
				goToPath(path);
			}
		});

		$(window).on('resize', function () {
			var content = $('div#main div#content');

			if (current_path == 'home') {

			}
			else {
				content.css({
					width: $(document).width() - 120 + 'px',
					height: $(document).height() - 350 + 'px'
				})
			}
		});
	});
})();

var log = function (a) {
	console.log(a);
}