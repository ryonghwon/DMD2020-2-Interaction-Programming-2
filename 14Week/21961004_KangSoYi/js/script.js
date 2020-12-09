//
//

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
        //console.log($items);
        var randomNumbers = shuffle($items.length);
        $.each($items, function(index, item) {
            var $item = $(item),
                delay = 0.05 * randomNumbers[index];
            gsap.set($item, {y: 50, autoAlpha: 0});
            gsap.to($item, {y: 0, autoAlpha: 1, duration: 0.5, delay: delay, ease: 'Elastic.easeOut'}); 
        });
    }

    /* Music Top 10 */
    $.ajax({
        url: './data/naver_Music.json',
        dataType: 'json',
        success: MusicTop10Success,
        error: MusicTop10Error
    });
    function MusicTop10Success(result) {
        let items = result['response']['result']['chart']['items']['tracks'];
        items = items.slice(0, 10);

        $.each(items, function(index, item) {
            let url = item['shareUrl'],
            
                title = item['trackTitle'],
                cover_url = item['album']['imageUrl'],
                singer = item['album']['artists']['artistName'],
                template = '';
                
            template += '<li class="music-item">';
            template += '<div class="album_cover"><a href="' + url + '" target="_blank" title="' + title + '"><img src="' + cover_url + '" alt="' + title + '"></a></div>';
            template += '<div class="title"><a href="' + song_url + '" target="_blank" title="' + title + '">' + title + '</a></div>';template += '<div class="singer">' + singer + '</div>';
            template += '</li>';

            var $top10 = $('#top10');
            $top10.empty();

            if(index === items.length - 1) {
                $top10.empty().html(template);
                $top10.parent().removeClass('inactive');
                listAnim($top10);
            }
        });
    }

    function MusicTop10Error(error) {
        console.log(error);
    }

});
})(jQuery);