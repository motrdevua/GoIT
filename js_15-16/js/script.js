$(function(){

    $('.search_button').on('click', searching);
    $('.search_input').on('keydown', function (e) {
        if(e.witch == 13){
            searching();
        }
    });

    function searching() {
        var $search = $('.search_input').val();
        var API_KEY = '2599919-c2c053f25de11c54a9488762a';
        var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+ encodeURIComponent($search);
        $.getJSON(URL, function(data){
            console.log(data);
            if (parseInt(data.totalHits) > 0){
                var ul = document.createElement('ul');
                $.each(data.hits, function(i, hit){
                    var li = document.createElement('li');
                    li.classList.add('list_item');
                    li.innerHTML = '<a href="'+hit.pageURL+'"><img src="'+hit.webformatURL+'" alt="" /></a>';
                    ul.appendChild(li);
                });
                $('.search_results').html(ul);
            } else{
                $('.search_results').append('<p>Oops! No results!</p>');
            }
        });
        return false;
    }
});
