$(document).ready(function() {
	$('.js_moveup').on('click', function() {
		$('html').animate({scrollTop: 0}, 800);
	})

	$('.js_checkbox').on('click', function() {
		let  check = $('.js_politic-checkbox').attr('checked');
		$('.js_checkbox').toggleClass('active');
		if (check) {
			$('.js_politic-checkbox').removeAttr('checked');
		} else {
			$('.js_politic-checkbox').attr('checked', 'checked');
		}
	})
	$('.js_politic-checkbox').on('change', function() {
		$(this).toggleClass('active');
	})
	
	$('.js_popup-menu').on('click', function() {
		if ($('.js_popup-menu__list').css('display') === 'none') {
			$('.js_popup-menu').find('use').attr('xlink:href', '../img/symbol_sprite.svg#icon-cancel');
			$('.js_popup-menu__list').slideDown(500);
		} else {
			$('.js_popup-menu__list').slideUp(500);
			$('.js_popup-menu').find('use').attr('xlink:href', '../img/symbol_sprite.svg#icon-list-menu');
		}
	})

	$('.js_popup-menu__mobile').on('click', function() {
		$('.js_user-avatar').toggleClass('hover');
		if ($('.js_popup-menu__mobile__list').css('display') === 'none') {
			$('.js_popup-menu__mobile').find('use').attr('xlink:href', '../img/symbol_sprite.svg#icon-cancel');
			$(this).css('fill', '#ffffff');
			$('.js_popup-menu__mobile__list').slideDown(500);
			$(".js_partner-button").css('border-color', '#ffffff');
			$(".js_partner-button").css('color', '#ffffff');
			// $('.js_user-avatar').addClass('hover');
		} else {
			$('.js_popup-menu__mobile__list').slideUp(500);
			$('.js_popup-menu__mobile').find('use').attr('xlink:href', '../img/symbol_sprite.svg#icon-list-menu');
			$(".js_partner-button").css('border-color', '');
			$(".js_partner-button").css('color', '');
			$('.js_user-avatar').removeClass('hover');
			$(this).css('fill', '');
		}
	})

	$('.js_education_popup').on('mouseenter', function() {
		$('.js_education_popup-block').addClass('active');
	})
	$('.js_education_popup').on('mouseleave', function() {
		$('.js_education_popup-block').removeClass('active');
	})
	$('.js_region').on('mouseenter', function() {
		var region = '.'+$(this).attr('data-region');
		$(region).toggleClass('active');
		$(this).find('.js_region__popup').toggleClass('active');
		$('.js_regions').toggleClass('hover');
	});
	$('.js_region').on('mouseleave', function() {
		var region = '.'+$(this).attr('data-region');
		$(region).removeClass('active');
		$(this).find('.js_region__popup').removeClass('active');
		$('.js_regions').removeClass('hover');
	});
})


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdCQoJy5qc19tb3ZldXAnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJ2h0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IDB9LCA4MDApO1xyXG5cdH0pXHJcblxyXG5cdCQoJy5qc19jaGVja2JveCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0ICBjaGVjayA9ICQoJy5qc19wb2xpdGljLWNoZWNrYm94JykuYXR0cignY2hlY2tlZCcpO1xyXG5cdFx0JCgnLmpzX2NoZWNrYm94JykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0aWYgKGNoZWNrKSB7XHJcblx0XHRcdCQoJy5qc19wb2xpdGljLWNoZWNrYm94JykucmVtb3ZlQXR0cignY2hlY2tlZCcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JCgnLmpzX3BvbGl0aWMtY2hlY2tib3gnKS5hdHRyKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcclxuXHRcdH1cclxuXHR9KVxyXG5cdCQoJy5qc19wb2xpdGljLWNoZWNrYm94Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0JCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblx0fSlcclxuXHRcclxuXHQkKCcuanNfcG9wdXAtbWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKCQoJy5qc19wb3B1cC1tZW51X19saXN0JykuY3NzKCdkaXNwbGF5JykgPT09ICdub25lJykge1xyXG5cdFx0XHQkKCcuanNfcG9wdXAtbWVudScpLmZpbmQoJ3VzZScpLmF0dHIoJ3hsaW5rOmhyZWYnLCAnLi4vaW1nL3N5bWJvbF9zcHJpdGUuc3ZnI2ljb24tY2FuY2VsJyk7XHJcblx0XHRcdCQoJy5qc19wb3B1cC1tZW51X19saXN0Jykuc2xpZGVEb3duKDUwMCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkKCcuanNfcG9wdXAtbWVudV9fbGlzdCcpLnNsaWRlVXAoNTAwKTtcclxuXHRcdFx0JCgnLmpzX3BvcHVwLW1lbnUnKS5maW5kKCd1c2UnKS5hdHRyKCd4bGluazpocmVmJywgJy4uL2ltZy9zeW1ib2xfc3ByaXRlLnN2ZyNpY29uLWxpc3QtbWVudScpO1xyXG5cdFx0fVxyXG5cdH0pXHJcblxyXG5cdCQoJy5qc19wb3B1cC1tZW51X19tb2JpbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJy5qc191c2VyLWF2YXRhcicpLnRvZ2dsZUNsYXNzKCdob3ZlcicpO1xyXG5cdFx0aWYgKCQoJy5qc19wb3B1cC1tZW51X19tb2JpbGVfX2xpc3QnKS5jc3MoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKSB7XHJcblx0XHRcdCQoJy5qc19wb3B1cC1tZW51X19tb2JpbGUnKS5maW5kKCd1c2UnKS5hdHRyKCd4bGluazpocmVmJywgJy4uL2ltZy9zeW1ib2xfc3ByaXRlLnN2ZyNpY29uLWNhbmNlbCcpO1xyXG5cdFx0XHQkKHRoaXMpLmNzcygnZmlsbCcsICcjZmZmZmZmJyk7XHJcblx0XHRcdCQoJy5qc19wb3B1cC1tZW51X19tb2JpbGVfX2xpc3QnKS5zbGlkZURvd24oNTAwKTtcclxuXHRcdFx0JChcIi5qc19wYXJ0bmVyLWJ1dHRvblwiKS5jc3MoJ2JvcmRlci1jb2xvcicsICcjZmZmZmZmJyk7XHJcblx0XHRcdCQoXCIuanNfcGFydG5lci1idXR0b25cIikuY3NzKCdjb2xvcicsICcjZmZmZmZmJyk7XHJcblx0XHRcdC8vICQoJy5qc191c2VyLWF2YXRhcicpLmFkZENsYXNzKCdob3ZlcicpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JCgnLmpzX3BvcHVwLW1lbnVfX21vYmlsZV9fbGlzdCcpLnNsaWRlVXAoNTAwKTtcclxuXHRcdFx0JCgnLmpzX3BvcHVwLW1lbnVfX21vYmlsZScpLmZpbmQoJ3VzZScpLmF0dHIoJ3hsaW5rOmhyZWYnLCAnLi4vaW1nL3N5bWJvbF9zcHJpdGUuc3ZnI2ljb24tbGlzdC1tZW51Jyk7XHJcblx0XHRcdCQoXCIuanNfcGFydG5lci1idXR0b25cIikuY3NzKCdib3JkZXItY29sb3InLCAnJyk7XHJcblx0XHRcdCQoXCIuanNfcGFydG5lci1idXR0b25cIikuY3NzKCdjb2xvcicsICcnKTtcclxuXHRcdFx0JCgnLmpzX3VzZXItYXZhdGFyJykucmVtb3ZlQ2xhc3MoJ2hvdmVyJyk7XHJcblx0XHRcdCQodGhpcykuY3NzKCdmaWxsJywgJycpO1xyXG5cdFx0fVxyXG5cdH0pXHJcblxyXG5cdCQoJy5qc19lZHVjYXRpb25fcG9wdXAnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnLmpzX2VkdWNhdGlvbl9wb3B1cC1ibG9jaycpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHR9KVxyXG5cdCQoJy5qc19lZHVjYXRpb25fcG9wdXAnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnLmpzX2VkdWNhdGlvbl9wb3B1cC1ibG9jaycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHR9KVxyXG5cdCQoJy5qc19yZWdpb24nKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIHJlZ2lvbiA9ICcuJyskKHRoaXMpLmF0dHIoJ2RhdGEtcmVnaW9uJyk7XHJcblx0XHQkKHJlZ2lvbikudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCh0aGlzKS5maW5kKCcuanNfcmVnaW9uX19wb3B1cCcpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQoJy5qc19yZWdpb25zJykudG9nZ2xlQ2xhc3MoJ2hvdmVyJyk7XHJcblx0fSk7XHJcblx0JCgnLmpzX3JlZ2lvbicpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgcmVnaW9uID0gJy4nKyQodGhpcykuYXR0cignZGF0YS1yZWdpb24nKTtcclxuXHRcdCQocmVnaW9uKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQkKHRoaXMpLmZpbmQoJy5qc19yZWdpb25fX3BvcHVwJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCgnLmpzX3JlZ2lvbnMnKS5yZW1vdmVDbGFzcygnaG92ZXInKTtcclxuXHR9KTtcclxufSlcclxuXHJcbiJdLCJmaWxlIjoibWFpbi5qcyJ9
