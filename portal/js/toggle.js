$(document).ready(function () {	
	$('[data-bind="nextLevel"]').on('click', function(){
		var $parent = $(this).parent();

		$parent.find('> ul').toggle();
		if($parent.find('> ul').length > 0){
			$parent.find('.plus').first().toggleClass('minus');
		}

		if($parent.find('> ul').css('display') === 'none'){
			$parent.find('ul').css('display', 'none');
			$parent.find('.plus').removeClass('minus');
		}
	});
	$('.submenu > a').on('click', function(){
		$('li > a').removeClass('active');
		var active = $(this).first();

		active.addClass('active');
		active.prev('.plus').hide().parent().parent().parent().find('> span').addClass('prev').css('display', 'block');

		$(this).parent().parent().find('> li:not(:has(a.active))').hide();
		$(this).parent().find('> ul').show();
		$(this).parent().find(' li').show();

		if($(this).parent().find('a.active').next('ul').length > 0){
			$(this).parent().find('ul').children().find('.plus').css('display', 'block');
			$(this).parent().find('ul').children().find('ul').css('display', 'none');
		}
	})
		$('.menu_item-toggle > a').on('click', function(){
		$('li > a').removeClass('active');
		$(this).parent().find('a').first().addClass('active')
		$(this).parent().find('li').show();

		if($(this).parent().find('a.active').next().has('ul').length > 0){
			$(this).parent().children().find('ul').css('display', 'none');
			$(this).parent().children().find('.plus').css('display', 'block');
		}
	})
});