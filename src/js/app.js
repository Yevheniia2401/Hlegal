$( document ).ready(function() {
    //nav btn
    $('.nav-btn').click(function(){
        $('.nav').toggleClass('active');
    })

    $('.gallery').slick({
        arrows: false,
        dots: true
    });
});
$(function() {
    $('.tabs__link').click(function(e){
        e.preventDefault();
        const tab_id = $(this).attr('href');

        $('.tabs__link').removeClass('active');
        $('.block').removeClass('active');

        $(this).addClass('active');
        $(tab_id).addClass('active');
    })
});