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
     * Class List AJAX.
     */

    // $.ajax()
    // jQuery.ajax()
    /*
    $.ajax({
        url: './page/about.html', // 사용할 데이터 파일의 경로.
        type: 'get', // AJAX 의 방식 - get : 데이터를 받아오는 것, post : 데이터를 전송하는 것.(양식을 비동기 방식으로 전송할 때)
        // data: {}, // get : id 에 해당하는 데이터를 받아올 때, post : 양식의 데이터 전체를 객체화해서 전달할 때.
        dataType: 'html', // 파일의 형식 - json, jsonp, xml, script, html ...
        success: function(result) {
            // console.log(result);
            // // about.html
            // <!DOCTYPE html>
            // <html>
            //     <body>
            //         ...
            //         <div id="id_1"></div>
            //         ...
            //     </body>
            // </html>
            // $(result).find('#id_1');
        },
        error: function(error) {
            console.log(error);
        }
    });
    */

    // AJAX - 비동기 통신 방법.
    $.ajax({
        // url: 'https://movie.naver.com/movieChartJson.nhn?type=RESERVE',
        url: './data/class.json',
        type: 'get',
        dataType: 'json',
        success: classSuccess,
        error: classError
    });
    function classSuccess(result) {
        // 비동기 통신 성공!
        // console.log(result); 
        // result 객체.
        // console.log(result['class']);
        // console.log(result.class);
        var items = result.class; // 배열. - 반복문.
        /*
        // for 반복문.
        for(var i = 0; i < items.length; i++) {
            console.log(items[i]);
        }
        // for in 반복문.
        for(var item in items) {
            console.log(items[i]);
        }
        // for of 반복문.
        for(var item of items) {
            console.log(item);
        }
        // jQuery each 메서드 반복문.
        $.each(items, function(index, item) {
            console.log(index, item);
        });
        // ES6+ forEach 메서드 반복문.
        items.forEach((item, index) => {
            console.log(index, item);
        });
        */
        
        var template = '';
        var $classList = $('ul#class-list');
        //jQuery.each()
        $.each(items, function(index, item) {
            // console.log(item);
            var number = item['number'],
                name = item['name'],
                role = item['role'],
                id = item['id']; // git username - https://github.com + / + username(id) -> https://github.com/id
            if(index === 0) {
                template += '<li class="head"><div class="sort">구분</div><div class="name">이름</div><div class="id">아이디</div></li>';
            }
            // console.log(number, name, role, id);
            // number, name, role, id
            template += '<li>';
            template +=     '<div class="sort">';
            //template += (role === '학생') ? '학번' : '교번'; // 조건문 축약형 (조건) ? true : false;
            if(role === '학생'){
                template += '학번';
            }else{
                template += '교번';
            }
            template +=     ' : <i>' + number + '</i></div>';
            template +=     '<div class="name">' + name + '</div>';
            template +=     '<div class="id">';
            template += (id !== '') ? '<a href="' + gitURL + '/' + id + '" target="_blank" title="' + name + ' git">' + id + '</a>' : '';
            // if(id !== '') {
            //     template +=         '<a href="' + gitURL + '/' + id + '" target="_blank" title="' + name + ' git">' + id + '</a>';
            // }
            template +=     '</div>';
            template += '</li>';
            // index 가 가장 마지막 부분일 때.
            // DOM 조작.(렌더링)
            if(index === items.length - 1) {
                // console.log(template);
                $classList.empty().html(template);
                // $classList.parent().removeClass('inactive');
            }
        });
    }
    function classError(error) {
        // 비동기 통신 실패...
        console.log(error);
    }

    var $btnItunes = $('#btn-itunes');
    $btnItunes.on('click', function(e) {
        e.preventDefault();
        itunesLoad();
    });

    function itunesLoad() {
        /*
         * iTunes
         */
        $.ajax({
            url: './data/itunes.json',
            dataType: 'json',
            success: itunesSuccess,
            error: itunesError
        });
        function itunesSuccess(result) {
            // console.log(result); // 101 개의 아이템.
            result = shuffleItems(result);
            var items = result.slice(0, 10);
            // items = shuffleItems(items);
            var template = '';
            var $itunesMovie = $('ol#itunes-movie');
            $.each(items, function(index, item) {
                // title, poster, location
                var name = item['title'],
                    poster = item['poster'],
                    url = (item['location'] !== undefined && item['location'] !== '') ? trailersURL + item['location'] : '';
                template += '<li class="movie-item">';
                template +=     '<div class="poster">';
                // template += (url !== '') ? '<a href="' + url + '" target="_blank" title="' + name + '"><img src="' + poster + '" alt="' + name + '"></a>' : '<img src="' + poster + '" alt="' + name + '">';
                if(url !== '') {
                    template += '<a href="' + url + '" target="_blank" title="' + name + '"><img src="' + poster + '" alt="' + name + '"></a>';
                }else{
                    template += '<img src="' + poster + '" alt="' + name + '">';
                }
                template +=     '</div>';
                template +=     '<div class="name"><a href="' + url + '" target="_blank" title="' + name + '">' + name + '</a></div>';
                template += '</li>';
                if(index === items.length - 1) {
                    $itunesMovie.empty().html(template);
                    $itunesMovie.parent().removeClass('inactive');
                    listAnim($itunesMovie);
                }
            });
        }
        function itunesError(error) {
            console.log(error);
        }
    }

    /*
     * Naver
     */
    // fetch('./data/naver.json').then(result => {
    // });
    $.ajax({
        url: './data/naver.json',
        dataType: 'json',
        success: naverSuccess,
        error: naverError
    });
    function naverSuccess(result) {
        // console.log(result);
        var items = result['movieChartList']['RESERVE'];
        // console.log(items);

        items = shuffleItems(items);

        var $naverMovie = $('#naver-movie');
        $naverMovie.empty();
        $.each(items, function(index, item) {
            // console.log(index, item);
            var name = item['movieTitle'],
                poster = naverAssetURL + item['posterImageUrl'],
                url = naverURL + '/movie/bi/mi/basic.nhn?code=' + item['movieCode'],
                template = '';
            // console.log(name, poster, url);
            template += '<li class="movie-item">';
            template +=     '<div class="poster"><a href="' + url + '" target="_blank" title="' + name + '"><img src="' + poster + '" alt="' + name + '"></a></div>';
            template +=     '<div class="name"><a href="' + url + '" target="_blank" title="' + name + '">' + name + '</a></div>';
            template += '</li>';
            // console.log(template);
            $naverMovie.append(template);
            if(index === items.length - 1) {
                $naverMovie.parent().removeClass('inactive');
                listAnim($naverMovie);
            }
            
            // movieTitle, movieCode, posterImageUrl

            // https://movie-phinf.pstatic.net/20201127_106/1606442454078QB8P9_JPEG/movie_image.jpg
            // /20201112_281/1605160677106alosf_JPEG/movie_image.jpg

            // https://movie.naver.com/movie/bi/mi/basic.nhn?code=187357
            // /movie/bi/mi/basic.nhn?code=
            // 164143

            // <li class="movie-item">
            //     <div class="poster"><a href="#" target="_blank" title="name"><img src="" alt="name"></a></div>
            //     <div class="name"><a href="#" target="_blank" title="name">name</a></div>
            // </li>

        });
    }
    function naverError(error) {
        console.log(error);
    }
});
})(jQuery);