$(function(){
	//min-height
	$('#wrapper').css('min-height',$(window).height()-$('.header').height());
	$(window).on('resize',function(){
        $('#wrapper').css('min-height',$(window).height()-$('.header').height());
    });
	//user menu
	$('.header .user-menu>a').on('click',function(){
		$(this).parent('.user-menu').toggleClass('open');
	});
	//nav
	$('#main-nav .navigation>.nav>li>a').on('click',function(){
        $(this).parent('li').siblings('li').removeClass('active');
        $(this).parent('li').addClass('active');
        if($('#main-nav-bg').width()<190){
			$('body').removeClass('main-nav-closed');
			$('body').addClass('main-nav-opened');
    	}
    });
    $('.header .navbar .navbar-inner .toggle-nav').on('click',function(){
    	if($('#main-nav-bg').width()<190){
			$('body').removeClass('main-nav-closed');
			$('body').addClass('main-nav-opened');
    	}else{
    		$('body').removeClass('main-nav-opened');
			$('body').addClass('main-nav-closed');
    	}
    });

    $('#wrapper').on('click',function(){
    	if($('#main-nav-bg').width()>=190&&$('body').hasClass('main-nav-opened')){
			$('body').removeClass('main-nav-opened');
    	}
    });
});