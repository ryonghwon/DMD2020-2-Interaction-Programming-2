console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');
        // append();
        // 요소의 자식항렬에서 마지막 부분에 노드 추가.
        // $('p').append('<em>안녕하세요</em>');
        // $('p').eq(0).append('<em>Hello~</em>');
        // $('p').append($('strong'));
        // appendTo();
        // 기입될 내용, 노드를 특정요소에 타겟하여 자식항렬의 마지막 부분에 추가.
        // $('<em>Hello!</em>').appendTo('p');
        // $('span').appendTo('.say-1');
        // $('p').appendTo('.say-1');

        // prepend();
        // 요소의 자식항렬에서 첫 부분에 노드 추가.
        // $('p').prepend('<em>인사 - </em>');
        // $('p').eq($('p').length - 2).prepend($('strong').last());

        // prependTo();
        // 기입될 내요, 노드를 특정요소에 타겟하여 자식항렬의 첫 부분에 추가.
        // $('<b>World~</b>').prependTo('p');
        // $('span').prependTo('.say-2');
        // $('p').prependTo('.say-2');

        // html();
        // 특정 노드 집합의 내용 반환 / 변경.
        // console.log($('div').html()); // 값을 받아온다. (매개변수 기입이 안될 때.)
        $('div').each(function() { // 요소의 반복 메서드.
            var $el = $(this);
            // console.log($el.html()); // 노드가 포함된 내용을 받아올 수 있다.
        });
        // $('div').html('안녕하세요.'); // 값이 적용된다.
        var html = '';
        html += '<div class="blue">';
        html +=     '<span>안녕하세요</span>';
        html +=     '<span>Hello</span>';
        html += '</div>';
        $('#wrap').html(html);
        $('#wrap').html(''); // DOM 내용 삭제. === empty()
        
        // text();
        // 노드안의 문자열을 반환. / 변경
        var $string = $('p').eq($('p').length - 2);
        // console.log($string.html()); // <b>Hello</b> World
        var string = $string.text(); // 값이 반환된다. - 문자열에 해당되는 내용만.
        // console.log($string.text()); // Hello World
        $('p').last().text(string); // 값이 적용된다.
    });
})(jQuery);