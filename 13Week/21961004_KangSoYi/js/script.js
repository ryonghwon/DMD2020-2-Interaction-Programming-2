// 객체 리터럴 패턴.
// 모듈 단위로 기능을 구성할 때 많이 사용된다.
var Scroll = {};
Scroll = {
    _scrollTop : null,

    init: function() {
        console.log('init');
        // this
        // console.log(this);
        this.layout();
        this.setting();
        this.addEvent();
        this.reset();
    },
    layout: function() {
        console.log('layout');
    },
    setting: function() {
        console.log('setting');
    },
    addEvent: function() {
        console.log('add event');
    },
    reset: function() {
        console.log('reset');
    }
};
// Scroll.init();

(function($){
    $(document).ready(function() {
        // 스크롤 이벤트에 따른 변화.
        
        // 전역변수.
        var _this = this;
        var _scrollTop = null; // 현재 스크롤 값을 확인하는 전역변수.

        var _winW = null; // 브라우저의 가로 폭 영역 값을 확인하는 전역변수.
        var _winH = null; // 브라우저의 세로 높이 영역 값을 확인하는 전역변수.

        var _horizontalH = null; // 브라우저가 리사이즈 되면서 적용해야 하는 .section-horizontal 의 높이 전역변수.
        var _horizontalMax = null; // .section-horizontal .section-item 의 개수.

        // 처음 기능을 초기화하는 함수.
        function init() {
            layout();
            setting();
            addEvent();
            reset();
        }

        // 셀렉터 요소를 찾아놓는 함수.
        function layout() {
            _this.$win = $(window);
            _this.$wrap = $('#wrap');
            _this.$sticky = $('.section-sticky');
            _this.$horizontal = $('.section-horizontal');
            _this.$horizontalWrap = _this.$horizontal.find('.section-wrap');
            _this.$horizontalItem = _this.$horizontalWrap.find('.section-item');
        }

        // 초기 세팅값 함수.
        function setting() {
            _horizontalMax = _this.$horizontalItem.length; // 2
        }

        // 이벤트 바인딩 함수.
        function addEvent() {
            // _this.$win.on('resize', onResize);
            // _this.$win.on('scroll', onScroll);
            _this.$win.on('resize', onResize).on('scroll', onScroll);
        }

        // 세팅, 이벤트 적용 이후 호출되는 함수.
        function reset() {
            // _this.$win.trigger('resize');
            // _this.$win.trigger('scroll');
            _this.$win.trigger('resize').trigger('scroll');

            var $text = _this.$sticky.find('.text-area');
            gsap.set($text, { y: 100, autoAlpha: 0});

            _this.$wrap.removeClass('inactive');
        }

        function onResize(e) {
            _winW = _this.$win.width();
            _winH = _this.$win.height();
            
            _horizontalH = _winW * _horizontalMax;
            _this.$horizontal.outerHeight(_horizontalH, true);

            onScroll();

        }

        function onScroll(e) {
            _scrollTop = _this.$win.scrollTop();
            stickyScroll();
            horizontalScroll();
        }

        function stickyScroll() {
            var imgY = 0,
                titleY = 0,
                descY = 0,
                $img = _this.$sticky.find('img'),
                $text = _this.$sticky.find('.text-area'),
                $title = _this.$sticky.find('.title'),
                $desc = _this.$sticky.find('.desc');
                start = _this.$sticky.offset().top, 
                end = start + _this.$sticky.outerHeight();

            if (_scrollTop >= start && _scrollTop < end) {
                _this.$sticky.addClass('fixed');
            } else {
                _this.$sticky.removeClass('fixed');
            }

            if (_scrollTop >= start && _scrollTop < end + _winH) {
               
                imgY = (_scrollTop - start) * 0.2 * -1;
            }

            if (_scrollTop >= start - _winH && _scrollTop < end + _winH) {
                titleY = (_scrollTop - start) * 0.4 * -1;
                // titleY = Math.min(0, (_scrollTop - start) * 0.4) * -1;
                // titleY = Math.max(0, (_scrollTop - start) * 0.4) * -1;
                descY = (_scrollTop - start) * 0.4 * -1;
               
                // 지정할 좌표 : 마지막 좌표 = 현재 스크롤 좌표 : 끝나는 지점의 좌표
                // 지정할 좌표 = 마지막 좌표 * 현재 스크롤 좌표 / 끝나는 지점의 좌표
                
                // Math.min() // 두 값 중 최소값을 리턴.
                // Math.max() // 두 값 중 최대값을 리턴.
            }

            gsap.set($img, { y: imgY });
            gsap.set($title, { y: titleY});
            gsap.set($desc, { y: descY });

            // if(_scrollTop >= start - _winH / 5) {
            if(_scrollTop >= start) {
                // console.log('text area start');
                if(!$text.hasClass('active')) {
                    $text.addClass('active');
                    gsap.to($text, { y: 0, autoAlpha: 1, duration: 0.4 });
                    // 애니메이션이 한번만 발생.
                }
            }else{
                if(_scrollTop < start - _winH / 2) {
                    if($text.hasClass('active')){
                        $text.removeClass('active');
                        gsap.set($text, { y: 100, autoAlpha: 0 });
                    }
                }
            }
        }

        function horizontalScroll() {
            var x = 0,
                start = _this.$horizontal.offset().top, 
                // 시작지점 : .section-horizontal 의 스크롤 Y 좌표값.
                end = start + _this.$horizontal.outerHeight(); 
                // 종료지점 : start + .section-horizontal 의 높이
            if (_scrollTop >= start && _scrollTop < end) { // and - &&
                // .section-horizontal 스크롤 Y 좌표값과 window 스크롤 Y 좌표값의 비교.

                _this.$horizontal.removeClass('fixed fixed-end');
                if (_scrollTop < end - _winH) {
                    _this.$horizontal.addClass('fixed');

                    x = (_horizontalH - _winW) * (_scrollTop - start) / (_horizontalH - _winH) * -1;
                
                    gsap.set(_this.$horizontalWrap, { x: x });
                    // gsap.to(element, { x: x, duration: 1 });
                
                } else {
             
                    _this.$horizontal.addClass('fixed-end');
                    x = (_horizontalH - _winW) * -1;
                    gsap.set(_this.$horizontalWrap, { x: x });
                }
            } else {
                _this.$horizontal.removeClass('fixed');
                if(_scrollTop < start) {
                  
                    _this.$horizontal.removeClass('fixed-end');
                    // _this.$horizontalWrap.css({ 'transform' : 'translateX(' + x + 'px)'});
                    gsap.set(_this.$horizontalWrap, { x: x });
                }
                if (_scrollTop >= end) {
                    
                    _this.$horizontal.addClass('fixed-end');
                    x = (_horizontalH - _winW) * -1;
                   
                    gsap.set(_this.$horizontalWrap, { x: x });
                }
            }
        }

        init();
    });
})(jQuery);