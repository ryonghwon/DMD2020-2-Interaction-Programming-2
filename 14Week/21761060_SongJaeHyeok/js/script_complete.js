var gitURL = 'https://github.com';
var trailersURL = 'https://trailers.apple.com';
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
    var itemView = function($e, b){
        var $listEl = $e.find('li'), randomOrders = shuffle($listEl.length), bool = (b)? b : false;
        $.each($listEl, function(i, d){
            var $el = $(d), delay = (bool) ? 0.03 * randomOrders[i] : 0.03 * i;
            delay = delay + 0.2;
            gsap.set($el, {y: 100, autoAlpha: 0});
            gsap.to($el, {y: 0, autoAlpha: 1, duration: 0.25, delay: delay});
        });    
    }
    $.ajax({
        url: "./data/class.json",
        dataType: "json",
        success: function (response) {
            var items = response['class'], $list = $('#class-list'), html = '';
            $.each(items, function(i, d){
                if(i == 0){
                    html += '<li class="head">';
                    html +=     '<div class="sort">구분</div>';
                    html +=     '<div class="name">이름</div>';
                    html +=     '<div class="id">아이디</div>';
                    html += '</li>';
                }
                var number = d["number"], name = d["name"], id = d["id"], role = d["role"];
                html += '<li>';
                html +=     '<div class="sort">';
                html += (role == '학생') ? '학번 : ' : '교번 : ';
                html +=         '<i>' + number + '</i>';
                html +=     '</div>';
                html +=     '<div class="name">' + name + '</div>';
                html +=     '<div class="id"><a href="' + gitURL + '/' + id + '" target="_blank" title="' +  name + ' git">' + id + '</a></div>';
                html += '</li>';
                if(i == items.length - 1){
                    $list.empty().html(html);
                    $list.parent().removeClass('inactive');
                }
            });
        }
    });
    $.ajax({
        url: "./data/itunes.json",
        dataType: "json",
        success: function (response) {
            var items = response, $list = $('#itunes-movie'), html = '';
            items = items.slice(0, 10);
            // items = shuffleItems(items);
            $.each(items, function(i, d){
                var title = d["title"], url = d["location"], imgPath = d["poster_2x"];
                html += '<li class="movie-item">';
                html +=     '<div class="poster">';
                html +=         '<a href="' + trailersURL + url +'" target="_blank">';
                html +=             '<img src="' + imgPath + '" alt="' + title + '">';
                html +=         '</a>';
                html +=     '</div>';
                html +=     '<div class="name">';
                html +=         '<a href="' + trailersURL + url + '" target="_blank">' + title + '</a>';
                html +=     '</div>';
                html += '</li>';
                if(i == items.length - 1){
                    $list.empty().html(html);
                    $list.parent().removeClass('inactive');
                    itemView($list, true);
                }
            });
        }   
    });
    $.ajax({
        url: "./data/naver.json",
        dataType: "json",
        success: function (response) {
            var items = response['movieChartList']['RESERVE'], $list = $('#naver-movie'), html = '';
            // items = shuffleItems(items);
            $.each(items, function(i, d){
                var title = d["movieTitle"], url = '/movie/bi/mi/basic.nhn?code=' + d["movieCode"], imgPath = d["posterImageUrl"];
                html += '<li class="movie-item">';
                html +=     '<div class="poster">';
                html +=         '<a href="' + naverURL + url +'" target="_blank">';
                html +=             '<img src="' + naverAssetURL + imgPath + '" alt="' + title + '">';
                html +=         '</a>';
                html +=     '</div>';
                html +=     '<div class="name">';
                html +=         '<a href="' + naverURL + url + '" target="_blank">' + title + '</a>';
                html +=     '</div>';
                html += '</li>';
                if(i == items.length - 1){
                    $list.empty().html(html);
                    $list.parent().removeClass('inactive');
                    itemView($list);
                }
            });
        }
    });
});
})(jQuery);