$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-timea');
        $('header').toggleClass('toggle');
        if($(window).scrollTop() > 0){
            $('.top').show();
        }else{
            $('.top').hide();   
        }
    });
    $(window).on('scroll load',function(){
        $(#menu).removeClass('fa-times');
        $('header').removeClass('toggle');
    });
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
         scrollTop : $($(this).attr('href')).offset().top,  
        },
        500,
        'linear'
        );
    });
});