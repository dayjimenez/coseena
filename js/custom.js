//fix overflow issue
$(".modal").on('show.bs.modal', function () {
	$('html').addClass('modal-open');
});

$(".modal").on('hidden.bs.modal', function () {
	$('html').removeClass('modal-open');
});




//for slider tabs active class
$('.carousel').carousel({
	interval: 6000,
	pause: null,
    duration: 1000 // this duration doesn't do anything
});

/*
$('.carousel').bind('slide.bs.carousel', function (e) {
    
	//debugger;
	
	$(".carousel .item.active").find('.justify-right').animate({'margin-right':30,'opacity':0},1000);	
	
	$(".carousel").find('.item.active').next().find('.justify-right').css({'margin-left':30}).animate({'margin-left':0,'opacity':1},500);
	
	
	$(".carousel").find('.item .justify-right').css({'margin-left':0,'margin-right':0,'opacity':1});
	
});

$('.carousel').bind('slid', function (e) {


});
*/
/*
$('.btn, a').on('click', function(e) {
	   e.preventDefault();
});*/

/**/

/*
if( navigator.userAgent.match(/iPhone|iPad|iPod/i) ) {

    $('.modal').on('show.bs.modal', function() {

        // Position modal absolute and bump it down to the scrollPosition
        $(this)
            .css({
                position: 'absolute',
                marginTop: 0;
                bottom: '100px';
            });

        // Position backdrop absolute and make it span the entire page
        //
        // Also dirty, but we need to tap into the backdrop after Boostrap 
        // positions it but before transitions finish.
        //
        setTimeout( function() {
            $('.modal-backdrop').css({
                position: 'absolute', 
                top: 0, 
                left: 0,
                width: '100%',
             
            });
        }, 0);
    });

}

*/

$('.signUp-link').on('click', function(e) {
	e.preventDefault();
	
	$(this).hide();
	$(this).next('.underline').hide();
	$(this).parents('div:first').find('.signup').fadeIn(800);
	$(this).parents('div:first').find('.signup input').focus();
});

$('.signup input').hover(function(){	
	$(this).addClass('focusOut');
});

$('.signup input').on('focusout', function() {
	if( $(this).hasClass('focusOut') && $(this).val().length == 0 ) {
		$('.signUp-link:hidden').fadeIn(800);
		$('.signUp-link').next('.underline:hidden').fadeIn(800);
		$(this).parents('.signup:first').fadeOut(100);
	}
});