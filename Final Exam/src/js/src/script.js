
// ------------------ SLIDER --------------------------

$(function() {
    $('.sliders__box').jcarousel({
        wrap: 'circular',
        animation: {
            duration: 800,
            easing:   'easeOutBounce',
            complete: function() {
            }
        }
    }).jcarouselAutoscroll({
        interval: 10000,
        target: '+=1',
        autostart: true
    });

    $('.prev-slide--first').click(function() {
        $('.sliders__box--first').jcarousel('scroll', '-=1');
    });
    $('.prev-slide--second').click(function() {
        $('.sliders__box--second').jcarousel('scroll', '-=1');
    });
    $('.prev-slide--third').click(function() {
        $('.sliders__box--third').jcarousel('scroll', '-=1');
    });

    $('.next-slide--first').click(function() {
        $('.sliders__box--first').jcarousel('scroll', '+=1');
    });
    $('.next-slide--second').click(function() {
        $('.sliders__box--second').jcarousel('scroll', '+=1');
    });
    $('.next-slide--third').click(function() {
        $('.sliders__box--third').jcarousel('scroll', '+=1');
    });
});

// ------------------ ISOTOPE --------------------------

$(function () {
    $('.ideas__gallery').isotope({
        itemSelector: '.ideas__item',
        percentPosition: true,
        layoutMode: 'fitRows'
    });
});

// ------------------ PIXABAY --------------------------

$(function () {
    function searching() {
        $('.ideas__gallery').remove();
        $('.noResults').remove();
        $('<div class="ideas__gallery"></div>').insertBefore('.ideas__titile--bottom');
        var $search = $('.ideas__input').val();
        var API_KEY = '2599919-c2c053f25de11c54a9488762a';
        var URL = "http://pixabay.com/api/?key=" + API_KEY + "&image_type=photo" + "&editors_choice=true" + "&order=latest" + "&per_page=7" + "&q="+encodeURIComponent($search);
        $.getJSON(URL, function(data){
        if (parseInt(data.totalHits) > 0)
            $.each(data.hits, function(i, hit){
                $('.ideas__gallery').append('<a class="ideas__item" href="'+hit.webformatURL+'" target="blank" style="background: url(' + hit.webformatURL + '); background-position: center; background-repeat: no-repeat"><p class="item__title">'+hit.tags.split(',')[0]+'</p></a>');
            });
        else {
            $('.ideas__gallery').remove();
            $('<p class = "noResults""></p>').insertBefore('.ideas__titile--bottom');
            $('.noResults').text('Oops, no results!');
        }
        });
    }
    searching();

    $('.ideas__search-button').on('click', searching);

    $('.ideas__input').on('keydown', function (e) {
        if (e.which == 13) {
            searching();
        }
    });
});
