console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');
        // clone();
        // 특정 요소를 복제해서 사용할 수 있다.
        var $p = $('p').clone();
        // $p.text('World');
        // //$('body').append($p);
        // $('p').last().after($p);
        var count = 1;
        $('p').eq(0).click(function() {
            var $el = $(this);
            var $clone = $el.clone();
            $clone.text('World ' + count);
            $('p').last().after($clone);
            /*
            $p.text('World ' + count);
            //$('body').append($p);
            $('p').last().after($p);
            */
            count++;
        });
    });
})(jQuery);