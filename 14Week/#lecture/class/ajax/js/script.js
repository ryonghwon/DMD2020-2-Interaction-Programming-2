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
                $classList.parent().removeClass('inactive');
            }
        });
    }
    function classError(error) {
        // 비동기 통신 실패...
        console.log(error);
    }

    // url = '/movie/bi/mi/basic.nhn?code=';
});
})(jQuery);