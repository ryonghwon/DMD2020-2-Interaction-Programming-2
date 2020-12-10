var naverURL = 'https://movie.naver.com';
var naverAssetURL = 'https://movie-phinf.pstatic.net';
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

    function listAnim($list){
        var $items = $list.find('li');
        var randomNumbers = shuffle($items.length);
        // console.log($items);
        // console.log(randomNumbers);
        $.each($items, function(index, item){
            var $item = $(item),
                delay = 0.1 * index;
                // delay = 0.1 * randomNumbers[index];
                // 0 1 2 3 ... 9.
                // randomNumbers[0], randomNumbers[1]...
            gsap.set($item, {y: 50, autoAlpha: 0});
            gsap.to($item, {y: 0, autoAlpha: 1, duration: 0.25, delay: delay, ease: 'power2.inOut'});
        });
    }
    
    /*
     * Naver
    */
    // fetch('./data/naver.json').then(result => {
    // });
    $.ajax({
        url: '../data/naver.json',
        dataType: 'json',
        success: naverSuccess,
        error: naverError
    });
    function naverSuccess(result){
        // console.log(result);
        var items = result['movieChartList']['RESERVE'];
        // console.log(items);

        items = shuffleItems(items);

        var $naverMovie = $('#naver-movie');
        $naverMovie.empty();
        $.each(items, function(index, item){
            // console.log(index, item);
            var name = item['movieTitle'],
                poster = naverAssetURL + item['posterImageUrl'],
                url = naverURL + '/movie/bi/mi/basic.nhn?code=' + item['movieCode'];
                templete = '';
            // console.log(name, poster, url);
            templete += '<li class="movie-item">';
            templete +=     '<div class="poster"><a href="' + url + '" target="_blank" title="' + name + '"><img src="' + poster + '" alt="' + name + '"></a></div>';
            templete +=     '<div class="name"><a href="' + url + '" target="_blank" title="' + name + '">' + name + '</a></div>';
            templete += '</li>';
            // console.log(templete);
            $naverMovie.append(templete);
            if(index === items.length - 1){
                $naverMovie.parent().removeClass('inactive');
                listAnim($naverMovie);
            }

            // movieTitle, movie, posterImageUrl

        });
    }
    function naverError(error){
        console.log(error);
    }

    // url = '/movie/bi/mi/basic.nhn?code=';
});
})(jQuery);