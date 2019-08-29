// ---- CAROUSEL ---- //


$(function() {
    $('.jcarousel').jcarousel({
        animation:{
            duration: 600,
            easing:   'easeInOutBack',
            complete: function() {
            }
        },
        wrap: 'circular'
    }).jcarouselAutoscroll({
            interval: 3000,
            target: '+=1',
            autostart: true
        });
});
$(function() {
    $('.jcarousel-text').jcarousel({
        animation:{
            duration: 600,
            easing:   'easeInOutBack',
            complete: function() {
            }
        },
        wrap: 'circular',
        vertical: true
    }).jcarouselAutoscroll({
            interval: 3000,
            target: '+=1',
            autostart: true
        });
});
$('.jcarousel-prev').click(function() {
    $('.jcarousel').jcarousel('scroll', '-=1');
    $('.jcarousel-text').jcarousel('scroll', '-=1');
});

$('.jcarousel-next').click(function() {
    $('.jcarousel').jcarousel('scroll', '+=1');
    $('.jcarousel-text').jcarousel('scroll', '+=1');
});


// ---- NICE SELECT ---- //


$(document).ready(function() {
  $('select').niceSelect();
});


// ----  ---- //
