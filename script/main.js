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

