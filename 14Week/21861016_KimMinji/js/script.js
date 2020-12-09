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
        $.each($items, function(index, item) {
            var $item = $(item),
                delay = 0.05 * randomNumbers[index];
            gsap.set($item, {y: 50, autoAlpha: 0});
            gsap.to($item, {y: 0, autoAlpha: 1, duration: 0.5, delay: delay, ease: 'Elastic.easeOut'}); 
        });
    }

    // VIBE [ 오늘 Top 15 ]
    $.ajax({
        url: './data/vibe_daily.json',
        dataType: 'json',
        success: vibe_dailySuccess,
        error: vibe_dailyError
    });
    function vibe_dailySuccess(result) {
        var items = result['response']['result']['chart']['items']['tracks'];
        
        items = items.slice(0, 15);
        var $vibedaily = $('#vibe-music');
        $vibedaily.empty();

        $.each(items, function(index, item) {
            var title = item['trackTitle'],
                albumcover_url = item['album']['imageUrl'],
                rank = item['rank']['currentRank'],
                song_url = item['shareUrl'],
                releaseDate = item['album']['releaseDate'],
                genres = item['album']['albumGenres'],
                template = '';
                
            template += '<li class="music-item">';
            template +=     '<div class="album_cover"><a href="' + song_url + '" target="_blank" title="' + title + '"><img src="' + albumcover_url + '" alt="' + title + '"></a></div>';
            template +=     '<div class="rank">' + rank + '</div>';
            template +=     '<div class="title"><a href="' + song_url + '" target="_blank" title="' + title + '">' + title + '</a></div>';
            template +=     '<div class="releaseDate">' + releaseDate + '</div>';
            template +=     '<div class="genres">' + genres + '</div>';
            template += '</li>';
            $vibedaily.append(template);
            if(index === items.length - 1) {
                $vibedaily.parent().removeClass('inactive');
                listAnim($vibedaily);
            }
            

        });
    }
    function vibe_dailyError(error) {
        console.log(error);
    }

    // Billboard [ Hot 15 ]
    $.ajax({
        url: './data/vibe_billboard.json',
        dataType: 'json',
        success: vibe_billboardSuccess,
        error: vibe_billboardError
    });
    function vibe_billboardSuccess(result) {
        var items = result['response']['result']['chart']['items']['tracks'];
        
        items = items.slice(0, 15);
        var $vibebillboard = $('#billboard-music');
        $vibebillboard.empty();

        $.each(items, function(index, item) {
            var title = item['trackTitle'],
                albumcover_url = item['album']['imageUrl'],
                rank = item['rank']['currentRank'],
                song_url = item['shareUrl'],
                releaseDate = item['album']['releaseDate'],
                genres = item['album']['albumGenres'],
                template = '';

            template += '<li class="music-item">';
            template +=     '<div class="album_cover"><a href="' + song_url + '" target="_blank" title="' + title + '"><img src="' + albumcover_url + '" alt="' + title + '"></a></div>';
            template +=     '<div class="rank">' + rank + '</div>';
            template +=     '<div class="title"><a href="' + song_url + '" target="_blank" title="' + title + '">' + title + '</a></div>';
            template +=     '<div class="releaseDate">' + releaseDate + '</div>';
            template +=     '<div class="genres">' + genres + '</div>';
            template += '</li>';
            $vibebillboard.append(template);
            if(index === items.length - 1) {
                $vibebillboard.parent().removeClass('inactive');
                listAnim(vibebillboard);
            }
            

        });
    }
    function vibe_billboardError(error) {
        console.log(error);
    }
});
})(jQuery);