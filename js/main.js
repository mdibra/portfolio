$(function(){
    $('#navbar div ul li').on('click', function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});
    $('.responsive').click(function(){
        $('.submenu').slideToggle();
    });
});
