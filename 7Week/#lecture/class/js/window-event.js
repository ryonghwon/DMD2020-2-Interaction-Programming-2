console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');

        var $win = $(window);
        //resize
        $win.on('resize', function(){
            console.log('resize');
            var winWidth = $win.width();
            var winHeight = $win.height();

            // 문자열 연산.
            // 'resize width : ' + winWidth + 'px, ' + winHeight + 'px'
            // `resize width : ${winWidth}, ${winHeight}`
            console.log(`resize width : ${winWidth}px, ${winHeight}px`);
        });
        //scroll
        var scrollTop = 0;
        $win.on('scroll', function() {
            scrollTop = $(this).scrollTop();
            console.log('scroll', scrollTop);
        });

        //load
        // var $img = $('img');
        // $img.on('load', function(e) {
        //     console.log('loaded', e);
        // });
        var img = new Image();
        img.onload = function() {
            // console.log('loaded');
            // 이미지의 원본 해상도를 받아올 수 있다.
            console.log(this.naturalWidth, this.naturalHeight);
        }
        img.src = $('img').attr('src');
    });
})(jQuery);