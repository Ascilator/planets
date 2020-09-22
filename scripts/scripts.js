﻿jQuery(function () {

	
	$('#slider_1').slick({
		infinite: false,
		arrows: false,
		rows: 0,
		speed: 300,
		easing: 'ease',
		waitForAnimate: false,
		touchMove: true,
		touchTreshhold: 50,
		dots: true,
		
    	slidesToShow: 1,
        slidesToScroll: 1,
    	appendDots: $('.slider_1_dots'),
    	
    });
    $('#slider_2').slick({
		infinite: false,
		arrows: false,
		rows: 0,
		speed: 300,
		easing: 'ease',
		waitForAnimate: false,
		touchMove: true,
		touchTreshhold: 50,
		dots: true,
		
    	slidesToShow: 2,
        slidesToScroll: 2,
    	appendDots: $('.slider_2_dots'),
    	responsive:[
			{
				breakpoint: 740,
				settings:{
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		],
    });
    $('#our_team').slick({
	    dots: false,
	    arrows: false,
	    infinite: false,
	    vertical: true,
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    verticalSwiping: true,
	    responsive:[
			{
				breakpoint: 1140,
				settings:{
					slidesToShow: 3,
					slidesToScroll: 1,
					vertical: false,
					verticalSwiping: false,
					
				}
			},
			{
				breakpoint: 870,
				settings:{
					slidesToShow: 2,
					slidesToScroll: 1,
					vertical: false,
					verticalSwiping: false,
					
					
				}
			},
			{
				breakpoint: 750,
				settings:{
					slidesToShow: 1,
					slidesToScroll: 1,
					vertical: false,
					verticalSwiping: false,
					
					
				}
			},
		],
	 });
	$(".tab_content").not(":first").hide();
	$('.team_member').click(function(){
		$('.team_member').removeClass('_active');
		$(this).addClass('_active');
		$(".tab_content").hide().eq($(this).index()).fadeIn()
	});


	$('.accordion_item').click(function(){
		if(  $(this).children('._acc_title').hasClass('_active')){
			$(this).children('._acc_title').removeClass('_active');	
		} else {
			console.log('asdf');
			$('.accordion_item>._acc_title').removeClass('_active');	
			$(this).children('._acc_title').addClass('_active');
		}
	})




	$(window).resize(function(){
		if($('html').width()<1140) {
			$('.burger_content').append($('#nav'));
			$('.burger_content').prepend($('.header_contuct.tel_cont>.text>.upper'));
			$('.burger_content').append($('#socials'));

		}

		if($('html').width()>1140) {
			$('.menu>.wrapper').prepend($('#nav'));
			$('.header_contuct.tel_cont>.text').prepend($('.burger_content>.upper'));
			$('.menu>.wrapper').append($('#socials'));
		}

		if($('html').width()<600) {
			$('.burger_content').append($('#free_consult'));
			

		}
		if($('html').width()>600) {
			$('#free_consult').insertAfter($('.header_contuct.tel_cont'));
			

		}
	})

	if($('html').width()<1140) {
		$('.burger_content').append($('#nav'));
		$('.burger_content').prepend($('.header_contuct.tel_cont>.text>.upper'));
		$('.burger_content').append($('#socials'));

	}

	if($('html').width()<600) {
			$('.burger_content').append($('#free_consult'));
			

		}

	$('.top_nav_link._lvl_2').click(function(){
		if( $(this).children('.add_body').hasClass('_active') ){
			$(this).children('.add_body').removeClass('_active');	
		} else {
			$('.top_nav_link._lvl_2').children('.add_body').removeClass('_active');
			$(this).children('.add_body').addClass('_active');
		}
	});


	$('.burger').click(function(){
		$(this).toggleClass('_active');
		$('.burger_content').toggleClass('_active');
	});






	$('.input_item>input').on('focus', function(){
		if ($(this).val() == 'Имя' || $(this).val() == 'Телефон' || $(this).val() =='Поиск' || $(this).val() =='Ваш телефон*' ) {
			$(this).val('');
		}
	});
	$('.input_item>input').on('blur', function(){
		
		if ($(this).val() == '') {
			if($(this).attr('val') == '1'){
				$(this).val('Имя');
			}
			if($(this).attr('val') == '2'){
				$(this).val('Телефон');
			}
			if($(this).attr('val') == '4'){
				$(this).val('Поиск');
			}
			if($(this).attr('val') == '5') {
				$(this).val() =='Ваш телефон*'
			}
		}
	});
	$('textarea').on('focus', function(){
		if ($(this).text() == 'Комментарий') {
			$(this).text('');
		}
	});
	$('textarea').on('blur', function(){
		
		if ($(this).text() == '') {
			$(this).text('Комментарий');
		}
	});
});


   