var naverURL = 'https://vibe.vibe.com/';
var naverAssetURL = 'https://vibe.vibe.com/track/';

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
    
    function itemAnim($list) {
        var $items = $list.find('li');
        var randomNumbers = shuffle($items.length);
        console.log(randomNumbers);
        $.each($items, function(index, item){
            var $item = $(item),
                delay = 0.1 * index;
                // 0,1,2.......9
                // randomNumbers [0], randomNumbers[1]
            gsap.set($item, {y: 50, autoAlpha: 0});
            gsap.to($item, {y: 0, autoAlpha: 1, duration: 0.45, delay: delay, ease: 'power4.inOut'});
        });
        
    }
    /*
     * vibe 
     */

    $.ajax({
        url: './data/vibe.json',
        dataType: 'json',
        success: naverSuccess,
        error: naverError
    });
    function naverSuccess(result){
        var items = result['tracks'];
        // console.log(items);

        items = shuffleItems(items);


        var $naverMovie = $('#naver-music');
        $naverMovie.empty();
        $.each(items, function(index, item){
            console.log(index.item);
            var name = item['trackTitle'],
                poster = item['trackImg'],
                url = naverAssetURL + item['trackCode'],
                albumTitle = item['albumTitle'],
                artist = item['artists'],
                template = '';
            // console.log(name,poster,url);
            template += '<li class="movie-item">';
            template +=     '<div class="poster"><a href="' + url + '" target="_blank" title="' + name + '"><img src="'+ poster +'" alt="' + name + '"></a></div>';
            template +=     '<div class="name"><a href="' + url + '" target="_blank" title="' + name + '">' + name + '</a></div>';
            template +=     '<div class="artist">' + albumTitle + '</a></div>';
            template +=     '<div class="artist">' + artist + '</a></div>';
            template += '</li>'
            console.log(template);
            $naverMovie.append(template);
            if(index === items.length - 1){
                $naverMovie.parent().removeClass('inactive');
                itemAnim($naverMovie);
            }
        })
    }
    function naverError(error){
        console.log(error);
    }

});
})(jQuery);