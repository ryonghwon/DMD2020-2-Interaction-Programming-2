console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');

        // detach();
        // 요소를 제거.
        var $p = $('p').eq(0);
        // var $p = $('p');
        $('.btn-1').click(function() {
            $p.detach();
        });

        // empty();
        // 요소의 내부의 노드가 포함된 모든 내용 삭제.
        var $p2 = $('p').eq(2);
        $('.btn-2').click(function() {
            //$p2.empty();
            $p2.html('');
        });

        // remove();
        // 요소를 제거.
        var $p3 = $('p').eq(3);
        $('.btn-3').click(function() {
            $p3.remove();
        });

        // unwrap();
        // 바깥 부분의 노드를 제거. 
        // <div><span>안녕하세요</span></div>
        // -> <span>안녕하세요</span>
    });
})(jQuery);