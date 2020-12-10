
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

    function listAnim($list) {
        var $items = $list.find('li');
        var randomNumbers = shuffle($items.length);
        // console.log($items);
        // console.log(randomNumbers);
        $.each($items, function(index, item) {
            var $item = $(item),
                delay = 0.05 * randomNumbers[index];
            gsap.set($item, {y: 50, autoAlpha: 0});
            gsap.to($item, {y: 0, autoAlpha: 1, duration: 0.25, delay: delay, ease: 'power2.inOut'}); 
        });
    }





    $.ajax({
        url: './data/movie.json',
        dataType: 'json',
        success: movieSuccess,
        error: naverError
    });
    function movieSuccess(result) {
        var items = result['myMovie'];

        items = shuffleItems(items);

        var $naverMovie = $('#naver-movie');
        $naverMovie.empty();
        $.each(items, function(index, item) {
            var name = item['movieTitle'],
                poster = naverAssetURL + item['posterImageUrl'],
                url = naverURL + '/movie/bi/mi/basic.nhn?code=' + item['movieCode'],
                genre = item['genre'],
                OpeningDate = item['OpeningDate'],
                grade = item['grade'],

                template = '';
                template += '<li class="movie-item">';
                template +=     '<div class="poster"><a href="' + url + '" target="_blank" title="' + name + '"><img src="' + poster + '" alt="' + name + '"></a></div>';
                template +=     '<div class="name"><a href="' + url + '" target="_blank" title="' + name + '">' + name + '</a></div>';
                template +=     '<div class="OpeningDate"><a href="' + url + '" target="_blank" title="' + name + '">' + "개봉 : " + OpeningDate + '</a></div>';
                template +=     '<div class="genre"><a href="' + url + '" target="_blank" title="' + name + '">' + "장르 : " + genre + '</a></div>';
                template +=     '<div class="grade"><a href="' + url + '" target="_blank" title="' + name + '">' + "평점 : " + grade + '</a></div>';
                template += '</li>';
                
            $naverMovie.append(template);

            // <li class="movie-item">
            //     <div class="poster"><a href="#" target="_blank" title="name"><img src="" alt="name"></a></div>
            //     <div class="name"><a href="#" target="_blank" title="name">name</a></div>
            //     <div class="audience"><a href="#" target="_blank" title="name">audience</a></div>
            //     <div class="OpeningDate"><a href="#" target="_blank" title="name">OpeningDate</a></div>
            //     <div class="grade"><a href="#" target="_blank" title="name">grade</a></div>
            // </li>


            if(index === items.length - 1) {
                $naverMovie.parent().removeClass('inactive');
                listAnim($naverMovie);
            }
        });
    }
    function naverError(error) {
        console.log(error);
    }
});
})(jQuery);