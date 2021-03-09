/*
	Elemental by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$main = $('#main');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			alignment: 'center',
			openerActiveClass: 'dropotron-active'
		});

	// Header.
		if ($header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$main.scrollex({
				mode:		'top',
				top:		'40vh',
				enter:		function() { $header.removeClass('alt'); },
				leave:		function() { $header.addClass('alt'); $header.addClass('reveal'); }
			});

		}

	// Nav Panel.

		// Button.
			$(
				'<div id="navButton">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
					'<a href="#navPanel" class="close"></a>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left'
					//target: $body,
					//visibleClass: 'navPanel-visible'
				});

	// Spotlights.
		$('.spotlight')
			.each(function() {

				var	$this = $(this),
					$image = $this.find('.image'),
					$img = $image.find('img'),
					x;

				// No image? Skip.
					if ($image.length == 0)
						return;

				// Assign image.
					$image.css('background-image', 'url(' + $img.attr('src') + ')');

				// Set background position.
					if (x = $img.data('position'))
						$image.css('background-position', x);

				// Hide <img>.
					$img.hide();

			});
	  "use strict"; // Start of use strict

	  // Smooth scrolling using jQuery easing
	  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: (target.offset().top - 72)
	        }, 1000, "easeInOutExpo");
	        return false;
	      }
	    }
	  });

	  // Closes responsive menu when a scroll trigger link is clicked
	  $('.js-scroll-trigger').click(function() {
	    $('.navbar-collapse').collapse('hide');
	  });

	  // Activate scrollspy to add active class to navbar items on scroll
	  $('body').scrollspy({
	    target: '#mainNav',
	    offset: 75
	  });

	  // Collapse Navbar
	  var navbarCollapse = function() {
	    if ($("#mainNav").offset().top > 100) {
	      $("#mainNav").addClass("navbar-scrolled");
	    } else {
	      $("#mainNav").removeClass("navbar-scrolled");
	    }
	  };
	  // Collapse now if page is not at top
	  navbarCollapse();
	  // Collapse the navbar when page is scrolled
	  $(window).scroll(navbarCollapse);


})(jQuery);