console.log("Script Load");
(function($){
    $(document).ready(function() {
        console.log('jQuery Ready');

        var _this = this;
        var _scrollTop = 0;
        
        // todo.
        // 1. 메뉴클릭 - 스크롤 이동
        // 2. 스크롤 이벤트 시 - 메뉴 활성화

        function init() {
            layout();
            setting();
            addEvent();
            reset();
        }

        function layout() {
            // 브라우저 창 셀렉터.
            _this.$win = $(window);

            // 스크롤 애니메이션을 위한 셀렉터.
            _this.$scroll = $('html, body');

            // 메뉴 셀렉터.
            _this.$gn = $('#global-nav');
            _this.$gnEl = _this.$gn.find('a');
            // console.log(_this.$gnEl);

            // 섹션 셀렉터.
            _this.$content = $('.content');
            _this.$section = _this.$content.find('.section');
            // console.log(_this.$section);
        }

        function setting() {
        }

        function addEvent() {
            _this.$win.on('scroll', onScrollWin).trigger('scroll');
            _this.$gnEl.on('click', onClickGNEl);
        }

        function reset() {
        }

        function onScrollWin(e) {
            // console.log('window scroll');
            _scrollTop = _this.$win.scrollTop(); // 스크롤 Y 좌표.
            // console.log(_scrollTop);

            // $.each();
            // _this.$section.each();
            $.each(_this.$section, function(index, el) {
                // console.log(index, el);
                var $el = $(el), // 각 요소 셀렉터.
                    start = $el.offset().top, // 요소가 시작하는 스크롤 시점.
                    end = start + $el.innerHeight(); // 요소가 끝나는 스크롤 시점.
                // console.log(index, start, end); 
                // 스크롤 값과 해당 섹션의 위치를 비교해서 활성화 여부를 판단(조건문).
                if(_scrollTop >= start && _scrollTop < end){
                    if(!_this.$gnEl.eq(index).hasClass('active')){
                        _this.$gnEl.removeClass('active');
                        _this.$gnEl.eq(index).addClass('active');
                    }
                }
            });
            // _this.$section.each(function(index, element) {
            //     console.log(index, element);
            // });
        }

        function onClickGNEl(e) {
            e.preventDefault();
            // console.log('click');
            var $el = $(e.currentTarget), // 현재 클릭된 a 요소 셀렉터.
                index = _this.$gnEl.index(e.currentTarget), // 현재 클릭된 a 요소의 순서 (전체 a 요소들 중에서)
                id = $el.attr('href'),
                $section,
                sectionTop = 0; // 현재 클릭되 a 요소의 href 속성값.
            // index 값을 활용하는 경우.
            $section = _this.$section.eq(index);
            // id 값을 활용하는 경우.
            $section = $(id);
            // console.log($section);
            sectionTop = $section.offset().top; // 해당 섹션이 위치한 스크롤 y 좌표
            // console.log(sectionTop); 
            
            // _this.$win.scrollTop(sectionTop); // 고정 좌표로 이동.

            // 애니메이션 좌표 이동.
            // 스크롤 애니메이션 - 크로스 브라우징 이슈
            // - 크롬인 경우 html, body
            // - 사파리인 경우 body
            _this.$scroll
                .stop(true)
                .animate(
                    { scrollTop: sectionTop },
                    { duration : 600, easing: 'easeInOutCubic' }
                );
        }

        init();

    });
})(jQuery);