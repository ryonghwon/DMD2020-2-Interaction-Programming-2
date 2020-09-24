console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');

        // wrap();
        // 요소의 주위를 감싸는 기능.
        // $('p').wrap('<div></div>');

        // unwrap();
        // 요소를 바깥 DOM 노드 한 부분을 제거.
        // $('p').unwrap();

        $('p').click(function() {
            var $el = $(this);
            // is() - 해당요소에 노드가 있는지 없는지 반환.
            if(!$el.parent().is('div')) {
                $el.wrap('<div></div>');
            }else{
                $el.unwrap();
            }
        });

        // wrapAll();
        // 전체 구성될 요소들의 집합을 적용.
        // $('p').wrapAll('<div></div>');
        // $('span').wrapAll('<div><div><p><em><b></b></em></p></div></div>');
        // $('p').wrapAll($('.double'));

        // wrapInner();
        // $('.double.hidden').wrapInner($('p')).removeClass('hidden');
        // $('.double div').wrapInner('<span>Hello World</span>');
    });
})(jQuery);