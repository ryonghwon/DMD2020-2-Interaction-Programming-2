var lotteURL = 'http://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202011/';
var lotteAssetURL = 'https://www.lottecinema.co.kr/NLCHS/Movie/MovieDetailView?movie=';


function shuffleItems(o) {
    var i, r, s;
    for(i = o.length - 1; i > 0; i--){
        r = Math.floor(Math.random() * (i + 1));
        s = o[i];
        o[i] = o[r];
        o[r] = s;
    }
    return o;
}
function shuffle(max) {
    var o = [], i, r, s;
    for(i = 0; i < max; i++){
        o.push(i);
    }
    for(i = o.length - 1; i > 0; i--){
        r = Math.floor(Math.random() * (i + 1));
        s = o[i];
        o[i] = o[r];
        o[r] = s;
    }
    return o;
}
(function($){
$(document).ready(function() {

    function listAnim($list) {
        var $items = $list.find('li');
        var randomNumbers = shuffle($items.length);
        // console.log($items);
        // console.log(randomNumbers);
        $.each($items, function(index, item) {
            var $item = $(item),
                // delay = 0.1 * index;
                delay = 0.05 * randomNumbers[index];
                // 0 1 2 3 .... 9.
                // randomNumbers[0], randomNumbers[1]...
            gsap.set($item, {y: 50, autoAlpha: 0});
            gsap.to($item, {y: 0, autoAlpha: 1, duration: 0.25, delay: delay, ease: 'power2.inOut'}); 
        });
    }

    /*
     * lotte
     */
    $.ajax({
        url: './data/cgv.json',
        dataType: 'json',
        success: lotteSuccess,
        error: lotteError
    });
    function lotteSuccess(result) {
        var items = result['Movies']['Items'];
        // console.log(items);

        items = shuffleItems(items);

        var $lotteMovie = $('#lotte-movie');
        $lotteMovie.empty();

        $.each(items, function(index, item) {
            // console.log(index, item);
            var name = item['MovieNameKR'],
                poster = lotteURL + item['RepresentationMovieCode'] + '_103_1.jpg',
                url = lotteAssetURL + item['RepresentationMovieCode'],
                template = '';

            console.log(name, poster, url);

            template += '<li class="movie-item">';
            template +=     '<div class="poster"><a href="' + url + '" target="_blank" title="' + name + '"><img src="' + poster + '" alt="' + name + '"></a></div>';
            template +=     '<div class="name"><a href="' + url + '" target="_blank" title="' + name + '">' + name + '</a></div>';
            template += '</li>';
            
            
            /* console.log(template); */

            $lotteMovie = $('ol#lotte-movie');
            if(index === items.length - 1){
                $lotteMovie.empty().html(template);
                $lotteMovie.parent().removeClass('inactive');
                listAnim($lotteMovie);
            }

            /* $lotteMovie.append(template);
            if(index === items.length - 1) {
                $naverMovie.parent().removeClass('inactive');
                listAnim($lotteMovie);
            } */

        });
    }
    function lotteError(error) {
        console.log(error);
    }
});
})(jQuery);