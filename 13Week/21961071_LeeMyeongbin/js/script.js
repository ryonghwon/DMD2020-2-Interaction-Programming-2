(function($){
    $(document).ready(function() {
        var _this = this;
        var _scrollTop = null;

        var _winW = null;
        var _winH = null;

        var _horizontalH = null; // .section-horizontal 높이
        var _horizontalMax = null; // section-item 개수

        function init(){
            layout();
            setting();
            addEvent();
            reset();
        }

        function layout(){
            _this.$win = $(window);

            _this.$wrap = $('#wrap');
            
            _this.$sticky = $('.section-sticky');

            _this.$horizontal = $('.section-horizontal');
            _this.$horizontalWrap = _this.$horizontal.find('.section-wrap');
            _this.$horizontalItem = _this.$horizontalWrap.find('.section-item');
        }

        function setting(){
            _horizontalMax = _this.$horizontalItem.length;
        }

        function addEvent(){
            _this.$win.on('resize', onResize).on('scroll', onScroll);
        }

        function reset(){
            _this.$win.trigger('resize').trigger('scroll');

            _this.$wrap.removeClass('inactive');
        }

        function onResize(e){
            // console.log('resize');

            _winW = _this.$win.width();
            _winH = _this.$win.height();
            // console.log(_winW, _winH);

            // 가로 스크롤 높이 = 윈도우너비 * 가로 스크롤 요소 개수
            _horizontalH = _winW * _horizontalMax;

            // 브라우저 사이즈가 변할때마다 가로 폭에 맞추어 길이가 재설정됨.
            _this.$horizontal.outerHeight(_horizontalH, true);
            // console.log(_horizontalH); // 0
            
        }

        function onScroll(e){
            // console.log('scroll');

            _scrollTop = _this.$win.scrollTop();
            // console.log('scroll', _scrollTop);

            horizontalScroll();
            stickyScroll();
        }

        function stickyScroll(){
            var imgY = 0,
                titleY = 0,
                descY = 0,
                $img = _this.$sticky.find('img'),
                $text = _this.$sticky.find('.text-area'),
                $title = _this.$sticky.find('.title'),
                $desc = _this.$sticky.find('.desc'),
                start = _this.$sticky.offset().top,
                end = start + _this.$sticky.outerHeight();

            if(_scrollTop >= start && _scrollTop < end){
                _this.$sticky.addClass('fixed');
            }else{
                _this.$sticky.removeClass('fixed');
            }

            if(_scrollTop >= start && _scrollTop < end + _winH){
                imgY = (_scrollTop - start) * 0.2 * -1;
            }

            if(_scrollTop >= start - _winH && _scrollTop < end + _winH){

                titleY = (_scrollTop - start) * 0.4 * -1;

                descY = (_scrollTop - start) * 0.4 * -1;
            }

            gsap.set($img, {y : imgY});
            gsap.set($title, {y : titleY});
            gsap.set($desc, {y : descY});

            if(_scrollTop >= start){
                // console.log('text area');

                if(!$text.hasClass('active')){
                    $text.addClass('active');
                    // console.log('text');
                    gsap.to($text, {y : 0, autoAlpha : 1, duration: 0.4});
                }
            }else{
                if(_scrollTop <= start - _winH / 2){
                    if($text.hasClass('active')){
                        $text.removeClass('active');
                        gsap.set($text, {y : 100, autoAlpha : 0});
                    }
                }
            }
        }

        function horizontalScroll(){
            var x = 0,
                start = _this.$horizontal.offset().top, // 가로스크롤이 시작되는 섹션의 스크롤 Y 좌표값.
                end = start + _this.$horizontal.outerHeight(); // 시작섹션 스크롤 좌표 + 가로스크롤 섹션의 높이.

            if(_scrollTop >= start && _scrollTop < end){
                // console.log('horizontal');
                _this.$horizontal.removeClass('fixed fixed-end');

                if(_scrollTop < end - _winH){
                    _this.$horizontal.addClass('fixed');

                    x = (_horizontalH - _winW) * (_scrollTop - start) / (_horizontalH - _winH) * -1;

                    // _this.$horizontalWrap.css({'transform' : 'translateX(' + x + 'px)'});
                    gsap.set(_this.$horizontalWrap, {x : x});

                }else{
                    _this.$horizontal.addClass('fixed-end');

                    x = (_horizontalH - _winW) * -1;

                    // _this.$horizontalWrap.css({'transform' : 'translateX(' + x + 'px)'});
                    gsap.set(_this.$horizontalWrap, {x : x});
                }

            }else{
                _this.$horizontal.removeClass('fixed');

                if(_scrollTop < start){
                    _this.$horizontal.removeClass('fixed-end');

                    // _this.$horizontalWrap.css({'transform' : 'translateX(' + x + 'px)'});
                    gsap.set(_this.$horizontalWrap, {x : x});
                }
                if(_scrollTop >= end){
                    _this.$horizontal.addClass('fixed-end');

                    x = (_horizontalH - _winW) * -1;
                    // _this.$horizontalWrap.css({'transform' : 'translateX(' + x + 'px)'});
                    gsap.set(_this.$horizontalWrap, {x : x});
                }
            }
        }

        init();
    });
})(jQuery);