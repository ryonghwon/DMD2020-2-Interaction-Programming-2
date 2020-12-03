let megaURL = 'https://www.megabox.co.kr/movie-detail?rpstMovieNo=';
let megaAssetURL = 'https://img.megabox.co.kr';

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

    function itemsAnim($list) {
        let $items = $list.find('li');
        let randomNumbers = shuffle($items.length);
        $.each($items, function(index, item){
            let $item = $(item),
                delay = 0.1 * index;
            gsap.set($item, {y: -50, autoAlpha: 0}); // gsap.set -> css
            gsap.to($item, {y: 0, autoAlpha: 1, duration: 0.25, delay: delay, ease: 'power4.InOut'}); // gsap.to -> animation
        });
        console.log($items);
    }

    /* 
     * MegaBox
     */
    $.ajax({
        url: './data/megabox.json',
        dataType: 'json',
        success: megaboxSuccess,
        error: megaboxError
    })
    function megaboxSuccess(result){
        // console.log(result);
        let items = result.movieList;
        let template = '';
        console.log(items);

        $.each(items, function (index, item){
            let name = item.movieNm, // 영화제목
                pageURL = megaURL + item.movieNo,
                itemimgPathNmSplit = item.imgPathNm.substr(0,item.imgPathNm.length - 4),
                imgURL = megaAssetURL + itemimgPathNmSplit + '_420.jpg', // 사진 url
                date = item.rfilmDe; // 개봉 날짜
            // console.log(name, pageURL, imgURL, date);
            // console.log(imgURL);
            // https://img.megabox.co.kr/SharedImg/2020/11/26/sR1PJkAeI0k9AIv0N50aNGzdBMHKswUj_420.jpg

            template += '<li class="movie-item">';
            template +=     '<div class="poster"><a href="' + pageURL + '" target="_blank" title="' + name + '"><img src="' + imgURL + '" alt="' + name + '"></a></div>';
            template +=     '<div class="name"><a href="' + pageURL + '" target="_blank" title="' + name + '">' + name + '</a></div>';
            template +=     '<div class="date"><span> 개봉예정일 : ' + date + '</span></div>';
            template += '</li>';

            let $megaMovie = $('ol#megabox-movie');
            $megaMovie.empty();
            if(index === items.length - 1){
                $megaMovie.empty().html(template);
                $megaMovie.parent().removeClass('inactive');
                itemsAnim($megaMovie);
            }
        });

    }
    function megaboxError(error){
        console.log(error);
    }

});
})(jQuery);

