// ---- TABS ---- //

$(function () {
    var $tabs = $('.tab a');
    $tabs.on('click', function(e) {
        e.preventDefault();
        $('.tabs-menu .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.tab-content').not(tab).css({'display':'none'});
        $(tab).fadeIn(400);
    });
});

// ---- TOOLTIPS ---- //

$(function() {
    var $field = $('.field input');
    $field.hover(
    function() {
        $(this).removeAttr('title');
        $(this).siblings('.info').fadeIn(400);
    },
    function() {
        if ($(this).attr('id') == 'firstname') {
            $(this).attr('title', 'Please provide your firstname.');
        } else if ($(this).attr('id') == 'lastname') {
            $(this).attr('title', 'Please provide also your lastname.');
        } else if ($(this).attr('id') == 'address') {
            $(this).attr('title', 'Your home or work address.');
        }
        $(this).siblings('.info').fadeOut(400);
    });
});

// ---- HELP BUTTON ---- //

$(function() {
    var $help = $('.button');
    var counter = 0;
    $help.on('click', function() {
        counter++;
        $('.info').fadeToggle(400);
        if ((counter % 2) !== 0){
            $help.attr('value', 'Hide Help');
        } else {
            $help.attr('value', 'Show Help');
        }
    });
});
