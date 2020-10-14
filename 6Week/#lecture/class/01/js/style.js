console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');

        // css();
        var $li = $('li');
        $li.css('background', '#000'); // 단일 스타일 항목 변경.
        $li.eq(0).css({
            'background-color' : '#f00',
            'height': 100
        }); // 다중 스타일 항목 변경
        $li.click(function() {
            $(this).css({
                'background-color' : '#0f0',
                'height' : 50
            });
        });
        
        // width();
        // height();
        var $box = $('.box');
        var i = 0;
        $box.click(function() {
            // $(this).width(200); // px
            // $(this).width(100 + '%');
            $(this).width('+=100');
            // 현재 width 값에 + 100 의 길이로 변경.
            $(this).height('+=50');
            if(i % 2) { // 1
                $(this).css('background-color', '#00f');
            }else{ // 0
                $(this).css('background-color', '#f0f');
            }
            i++;
        });

        var $box1 = $('.box-1');
        
        // set.
        // 영역의 길이를 변경할 때.
        $box1.width(200);
        $box1.height(200);
        $box1.innerWidth(200);
        $box1.outerWidth(300);
        $box1.outerWidth(400, true);

        // 영역의 길이를 찾을 때 사용.
        // width(); 요소의 가로폭
        // height(); 요소의 세로높이
        // innerWidth(); width + padding 영역
        // innerHeight(); height + padding 영역
        // outerWidth(); innerWidth + border 영역
        // outerHeight(); innerHeight + border 영역
        // outerWidth(true); outerWidth + margin 영역
        // outerHeight(true); outerHeight + margin 영역
        
        // get.
        var template = '';
        template += '<span>width : ' + $box1.width() + '</span><br/>';
        template += '<span>height : ' + $box1.height() + '</span><br/>';
        template += '<span>innerWidth : ' + $box1.innerWidth() + '</span><br/>';
        template += '<span>innerHeight : ' + $box1.innerHeight() + '</span><br/>';
        template += '<span>outerWidth : ' + $box1.outerWidth() + '</span><br/>';
        template += '<span>outerHeight : ' + $box1.outerHeight() + '</span><br/>';
        template += '<span>outerWidth - true : ' + $box1.outerWidth(true) + '</span><br/>';
        template += '<span>outerHeight - true : ' + $box1.outerHeight(true) + '</span>';
        // console.log(template);
        var $result = $box1.next('.result');
        $result.html(template);

        // position(); -> { top: ?, left: ? }
        // position().top;
        // position().left;
        // offset(); -> { top: ? , left: ? }
        // 해당 요소의 위치(문서상에서의 위치)

        // scrollTop(); 스크롤 x 의 좌표값.
        // scrollLeft(); 스크롤 y 의 좌표값.
    });
})(jQuery);