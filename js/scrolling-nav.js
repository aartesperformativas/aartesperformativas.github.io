//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 150) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $('.navbar-brand0').hide();
        $('.navbar-brand').show();


    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $('.navbar-brand0').show();
        $('.navbar-brand').hide();
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$('.dropdown').hover(function(){ 
  $('.dropdown-toggle', this).trigger('click'); 
});
