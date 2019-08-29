$(document).ready(function() {
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(600, 'easeOutQuart', function () {

            });
        },
        function(){
            $(this).children('.sub-menu').slideUp(600, 'easeOutQuart', function () {

            });
        }
    );
});
