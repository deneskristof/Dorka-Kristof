$(function() {

	var lastScrollTop = 0,
		header = $('header'),
		body = $('body');
    
    $('.top-section .slider').slick({
    	lazyLoad: 'anticipated',
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		autoplay: true,
		arrows: false,
		autoplaySpeed: 4000
  	});

  	$('.our-work .our-work__slider').slick({
  		lazyLoad: 'anticipated',
		dots: true,
		infinite: true,
		speed: 300,
		arrows: false,
		slidesToShow: 1
  	});

  	wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true
    })
    wow.init();

	// Sticky header
	$(window).scroll(hasScrolled); 

	function hasScrolled() { 
		const st = $(this).scrollTop(), 
			headerHeight = header.outerHeight(); 

		if (Math.abs(lastScrollTop - st) > 10) { 
			body.toggleClass('sticky-header', st > headerHeight); 
			body.toggleClass('sticky-header-visible', st <= lastScrollTop && st > headerHeight); 
			body.toggleClass('sticky-header-animated', st > headerHeight + 200); lastScrollTop = st; 
		} 
	}

	// Works item opener
	$('.work-item').on('click', function() {

		if ($(this).hasClass('selected')) {
			$('.work-item').removeClass('selected');
			removeActiveItem();
		} else {

			$('.work-item').removeClass('selected');
			$(this).addClass('selected');

			var images = $(this).find('.slider-wrapper img');

			$(images).each(function(index) {
				$(this).attr({
					src: $(this).attr('data-src')
				}).removeAttr('data-src');
			});    

			var workContent = $(this).find('.open-item').clone(),
				number = $(this).attr('data-count');
				timeout = 50;

			if ($('.our-works > .open-item').length) {
				timeout = 600;
				removeActiveItem();
			}

			setTimeout(() => {
				if ($(window).width() < 768) {
					workContent.insertAfter($(this));
				} else {
					workContent.insertAfter($('.our-works .work-item:nth-child(' + roundNumber(number) + ')'));
				}
				
				$('.our-works > .open-item .open-item__slider:not(".slick-initialized")').slick({
					dots: true,
					arrows: true,
					infinite: true,
					slidesToShow: 1
			  	});
			  	$('.our-works > .open-item').css('max-height', '2000px');
			}, timeout);

			setTimeout(() => {
				$('html, body').animate({
					scrollTop: $(this).offset().top + $(this).height()
				}, 1000);
			}, timeout);
		}
	});

	$(document).on('click', '.open-item-close', function() {
		removeActiveItem();
		setTimeout(() => {
			$('.work-item').removeClass('selected');
		}, 400);
	});

	function removeActiveItem() {
		$('.our-works > .open-item').css('max-height', '0');
		setTimeout(() => {
			$('.our-works > .open-item').remove();
		}, 400);
	}

	function roundNumber(n) {
		if(n > 0)
	        return Math.ceil(n/3.0) * 3;
	    else if( n < 0)
	        return Math.floor(n/3.0) * 3;
	    else
	        return 3;
	}

	// Mobile navigation
	$('.mobile-nav-trigger').on( 'click', function() {
		$('html').toggleClass('mobile-menu-opened');
	});

	$(document).on('click', '.mobile-menu-opened .page', function() {
		$('html').removeClass('mobile-menu-opened');
	});

	// Lazy loading
	$('.lazy').Lazy();

	// Change width on top slider
	addEventListener("resize", (event) => {
		changeWidth();
	});

	function changeWidth() {
		if ($(window).width() < 768) {
			$('.top-section .slick-slider img').attr('width', 1000);
		} else {
			$('.top-section .slick-slider img').attr('width', 2000);
		}
	}

	changeWidth();
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCkge1xuXG5cdHZhciBsYXN0U2Nyb2xsVG9wID0gMCxcblx0XHRoZWFkZXIgPSAkKCdoZWFkZXInKSxcblx0XHRib2R5ID0gJCgnYm9keScpO1xuICAgIFxuICAgICQoJy50b3Atc2VjdGlvbiAuc2xpZGVyJykuc2xpY2soe1xuICAgIFx0bGF6eUxvYWQ6ICdhbnRpY2lwYXRlZCcsXG5cdFx0ZG90czogdHJ1ZSxcblx0XHRpbmZpbml0ZTogdHJ1ZSxcblx0XHRzcGVlZDogMzAwLFxuXHRcdHNsaWRlc1RvU2hvdzogMSxcblx0XHRhdXRvcGxheTogdHJ1ZSxcblx0XHRhcnJvd3M6IGZhbHNlLFxuXHRcdGF1dG9wbGF5U3BlZWQ6IDQwMDBcbiAgXHR9KTtcblxuICBcdCQoJy5vdXItd29yayAub3VyLXdvcmtfX3NsaWRlcicpLnNsaWNrKHtcbiAgXHRcdGxhenlMb2FkOiAnYW50aWNpcGF0ZWQnLFxuXHRcdGRvdHM6IHRydWUsXG5cdFx0aW5maW5pdGU6IHRydWUsXG5cdFx0c3BlZWQ6IDMwMCxcblx0XHRhcnJvd3M6IGZhbHNlLFxuXHRcdHNsaWRlc1RvU2hvdzogMVxuICBcdH0pO1xuXG4gIFx0d293ID0gbmV3IFdPVyh7XG4gICAgICBib3hDbGFzczogJ3dvdycsXG4gICAgICBhbmltYXRlQ2xhc3M6ICdhbmltYXRlZCcsXG4gICAgICBvZmZzZXQ6IDAsXG4gICAgICBtb2JpbGU6IHRydWUsXG4gICAgICBsaXZlOiB0cnVlXG4gICAgfSlcbiAgICB3b3cuaW5pdCgpO1xuXG5cdC8vIFN0aWNreSBoZWFkZXJcblx0JCh3aW5kb3cpLnNjcm9sbChoYXNTY3JvbGxlZCk7IFxuXG5cdGZ1bmN0aW9uIGhhc1Njcm9sbGVkKCkgeyBcblx0XHRjb25zdCBzdCA9ICQodGhpcykuc2Nyb2xsVG9wKCksIFxuXHRcdFx0aGVhZGVySGVpZ2h0ID0gaGVhZGVyLm91dGVySGVpZ2h0KCk7IFxuXG5cdFx0aWYgKE1hdGguYWJzKGxhc3RTY3JvbGxUb3AgLSBzdCkgPiAxMCkgeyBcblx0XHRcdGJvZHkudG9nZ2xlQ2xhc3MoJ3N0aWNreS1oZWFkZXInLCBzdCA+IGhlYWRlckhlaWdodCk7IFxuXHRcdFx0Ym9keS50b2dnbGVDbGFzcygnc3RpY2t5LWhlYWRlci12aXNpYmxlJywgc3QgPD0gbGFzdFNjcm9sbFRvcCAmJiBzdCA+IGhlYWRlckhlaWdodCk7IFxuXHRcdFx0Ym9keS50b2dnbGVDbGFzcygnc3RpY2t5LWhlYWRlci1hbmltYXRlZCcsIHN0ID4gaGVhZGVySGVpZ2h0ICsgMjAwKTsgbGFzdFNjcm9sbFRvcCA9IHN0OyBcblx0XHR9IFxuXHR9XG5cblx0Ly8gV29ya3MgaXRlbSBvcGVuZXJcblx0JCgnLndvcmstaXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXG5cdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ3NlbGVjdGVkJykpIHtcblx0XHRcdCQoJy53b3JrLWl0ZW0nKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcblx0XHRcdHJlbW92ZUFjdGl2ZUl0ZW0oKTtcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQkKCcud29yay1pdGVtJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG5cdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuXG5cdFx0XHR2YXIgaW1hZ2VzID0gJCh0aGlzKS5maW5kKCcuc2xpZGVyLXdyYXBwZXIgaW1nJyk7XG5cblx0XHRcdCQoaW1hZ2VzKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0XHRcdCQodGhpcykuYXR0cih7XG5cdFx0XHRcdFx0c3JjOiAkKHRoaXMpLmF0dHIoJ2RhdGEtc3JjJylcblx0XHRcdFx0fSkucmVtb3ZlQXR0cignZGF0YS1zcmMnKTtcblx0XHRcdH0pOyAgICBcblxuXHRcdFx0dmFyIHdvcmtDb250ZW50ID0gJCh0aGlzKS5maW5kKCcub3Blbi1pdGVtJykuY2xvbmUoKSxcblx0XHRcdFx0bnVtYmVyID0gJCh0aGlzKS5hdHRyKCdkYXRhLWNvdW50Jyk7XG5cdFx0XHRcdHRpbWVvdXQgPSA1MDtcblxuXHRcdFx0aWYgKCQoJy5vdXItd29ya3MgPiAub3Blbi1pdGVtJykubGVuZ3RoKSB7XG5cdFx0XHRcdHRpbWVvdXQgPSA2MDA7XG5cdFx0XHRcdHJlbW92ZUFjdGl2ZUl0ZW0oKTtcblx0XHRcdH1cblxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDc2OCkge1xuXHRcdFx0XHRcdHdvcmtDb250ZW50Lmluc2VydEFmdGVyKCQodGhpcykpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHdvcmtDb250ZW50Lmluc2VydEFmdGVyKCQoJy5vdXItd29ya3MgLndvcmstaXRlbTpudGgtY2hpbGQoJyArIHJvdW5kTnVtYmVyKG51bWJlcikgKyAnKScpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0JCgnLm91ci13b3JrcyA+IC5vcGVuLWl0ZW0gLm9wZW4taXRlbV9fc2xpZGVyOm5vdChcIi5zbGljay1pbml0aWFsaXplZFwiKScpLnNsaWNrKHtcblx0XHRcdFx0XHRkb3RzOiB0cnVlLFxuXHRcdFx0XHRcdGFycm93czogdHJ1ZSxcblx0XHRcdFx0XHRpbmZpbml0ZTogdHJ1ZSxcblx0XHRcdFx0XHRzbGlkZXNUb1Nob3c6IDFcblx0XHRcdCAgXHR9KTtcblx0XHRcdCAgXHQkKCcub3VyLXdvcmtzID4gLm9wZW4taXRlbScpLmNzcygnbWF4LWhlaWdodCcsICcyMDAwcHgnKTtcblx0XHRcdH0sIHRpbWVvdXQpO1xuXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuXHRcdFx0XHRcdHNjcm9sbFRvcDogJCh0aGlzKS5vZmZzZXQoKS50b3AgKyAkKHRoaXMpLmhlaWdodCgpXG5cdFx0XHRcdH0sIDEwMDApO1xuXHRcdFx0fSwgdGltZW91dCk7XG5cdFx0fVxuXHR9KTtcblxuXHQkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm9wZW4taXRlbS1jbG9zZScsIGZ1bmN0aW9uKCkge1xuXHRcdHJlbW92ZUFjdGl2ZUl0ZW0oKTtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdCQoJy53b3JrLWl0ZW0nKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcblx0XHR9LCA0MDApO1xuXHR9KTtcblxuXHRmdW5jdGlvbiByZW1vdmVBY3RpdmVJdGVtKCkge1xuXHRcdCQoJy5vdXItd29ya3MgPiAub3Blbi1pdGVtJykuY3NzKCdtYXgtaGVpZ2h0JywgJzAnKTtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdCQoJy5vdXItd29ya3MgPiAub3Blbi1pdGVtJykucmVtb3ZlKCk7XG5cdFx0fSwgNDAwKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJvdW5kTnVtYmVyKG4pIHtcblx0XHRpZihuID4gMClcblx0ICAgICAgICByZXR1cm4gTWF0aC5jZWlsKG4vMy4wKSAqIDM7XG5cdCAgICBlbHNlIGlmKCBuIDwgMClcblx0ICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihuLzMuMCkgKiAzO1xuXHQgICAgZWxzZVxuXHQgICAgICAgIHJldHVybiAzO1xuXHR9XG5cblx0Ly8gTW9iaWxlIG5hdmlnYXRpb25cblx0JCgnLm1vYmlsZS1uYXYtdHJpZ2dlcicpLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHQkKCdodG1sJykudG9nZ2xlQ2xhc3MoJ21vYmlsZS1tZW51LW9wZW5lZCcpO1xuXHR9KTtcblxuXHQkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1vYmlsZS1tZW51LW9wZW5lZCAucGFnZScsIGZ1bmN0aW9uKCkge1xuXHRcdCQoJ2h0bWwnKS5yZW1vdmVDbGFzcygnbW9iaWxlLW1lbnUtb3BlbmVkJyk7XG5cdH0pO1xuXG5cdC8vIExhenkgbG9hZGluZ1xuXHQkKCcubGF6eScpLkxhenkoKTtcblxuXHQvLyBDaGFuZ2Ugd2lkdGggb24gdG9wIHNsaWRlclxuXHRhZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIChldmVudCkgPT4ge1xuXHRcdGNoYW5nZVdpZHRoKCk7XG5cdH0pO1xuXG5cdGZ1bmN0aW9uIGNoYW5nZVdpZHRoKCkge1xuXHRcdGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDc2OCkge1xuXHRcdFx0JCgnLnRvcC1zZWN0aW9uIC5zbGljay1zbGlkZXIgaW1nJykuYXR0cignd2lkdGgnLCAxMDAwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCgnLnRvcC1zZWN0aW9uIC5zbGljay1zbGlkZXIgaW1nJykuYXR0cignd2lkdGgnLCAyMDAwKTtcblx0XHR9XG5cdH1cblxuXHRjaGFuZ2VXaWR0aCgpO1xufSk7Il19
