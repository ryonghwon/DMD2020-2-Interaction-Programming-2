// 객체 리터럴 패턴.
// 모듈 단위로 기능을 구성할 때 많이 사용된다.
var Scroll = {};
Scroll = {
    _scrollTop : null,

    init : function(){
        console.log('init');
        // this
        // console.log(this);
        this.layout();
        this.setting();
        this.addEvent();
        this.reset();
    },
    layout : function(){
        console.log('layout');
    },
    setting : function(){
        console.log('setting');
    },
    addEvent : function(){
        console.log('add event');
    },
    reset : function(){
        console.log('reset');
    }
};
// Scroll.init();

(function($){
    $(document).ready(function() {
        // 스크롤 이벤트에 따른 변화.

        // 전역변수
        var _this = this;  
        var _scrollTop = null; // 현재 스크롤 값을 확인하는 전역변수

        var _winW = null; // 브라우저의 가로 폭 영역 값을 확인하는 전역변수.
        var _winH = null; // 브라우저의 세로 높이 영역 값을 확인하는 전역변수.

        var _horizontalH = null; // 브라우저가 리사이즈 되면서 적용해야 하는 .section-horizontal 의 높이
        var _horizontalMax = null; // .section-horizontal .section-item 의 개수.
        
        var scrollbody = $('.section1');
        var scrollbody2 = $('#section-2');

        var maskRight = $('.right_mask'); 
        var maskLeft = $('.left_mask'); 
        var titText = scrollbody.find('.intro_txt'); 
        var endingContent = scrollbody.find('.ending_text'); 
        

        // 처음 기능을 초기화 하는 함수
        function init(){
            layout();
            setting();
            addEvent();
            reset();
        }

        //  셀렉터 요소를 찾아놓는 함수
        function layout(){
            _this.$win = $(window);

            _this.$sticky = $('.section-sticky');
            _this.$img = _this.$sticky.find('.image-area');
            _this.$wrap = $('.section-wrap');
            _this.$horizontal = $('.section-horizontal');
            _this.$horizontalWrap = _this.$horizontal.find('.section-wrap');
            _this.$horizontalItem = _this.$horizontalWrap.find('.section-item');
        }

        //  초기 세팅값 함수
        function setting(){
            _horizontalMax = _this.$horizontalItem.length; // 2
        }

        // 이벤트 바인딩 함수
        function addEvent(){
            _this.$win.on('resize', onResize).on('scroll', onScroll);
            
        }

        // 세팅, 이벤트 적용 이후 호출되는 함수
        function reset(){
            _this.$win.trigger('resize').trigger('scroll');
            _this.$wrap.removeClass('inactive');
        }

        function onResize(e){
            _winW = _this.$win.width();
            _winH = _this.$win.height();

            _horizontalH = _winW * _horizontalMax;
            _this.$horizontal.outerHeight(_horizontalH, true);

            onScroll();
        }

        function onScroll(e){
            _scrollTop = _this.$win.scrollTop();
            stickyScroll();
            horizontalScroll();
            motionRender();
            motionRender2();
        }

        function stickyScroll(){

            var start = _this.$sticky.offset().top,
                end = start + _this.$sticky.outerHeight();

            if(_scrollTop >= start && _scrollTop < end) {

                console.log('ji');
                _this.$img.css({'position':'fixed','top' : 0, 'bottom':0,'left':40+'%','right':0});
                _this.$sticky.find('.text-area').css({'position':'fixed','top' : 100+'%','left':60+'%','right':0});
                
            }else{
                console.log('hi');

                _this.$img.css({'position':'absolute'});
                _this.$sticky.find('.text-area').css({'position':'absolute'});
            }
           
        }

        function horizontalScroll(){
            var x = 0,
                start = _this.$horizontal.offset().top, // 시작지점 :  .section-horizontal 의 스크롤 Y 좌표값.
                end = start + _this.$horizontal.outerHeight(); // 종료지점 : start + .section-horizontal 의 높이

            if(_scrollTop >= start && _scrollTop < end) { // and - &&
                // .section-horizontal 스크롤 Y 좌표값과 window 스크롤 Y 좌표값의 비교 
                // + .section-horizontal 의 영역이 끝나는 Y 좌표값과 window 스크롤 Y 좌표값을 비교.
                // 두가지 조건이 모두 성립되어야만 해당 코드가 실행. 
                _this.$horizontal.removeClass('fixed fixed-end');
                if(_scrollTop < end - _winH){
                    // 영역이 끝나는 지점 - 브라우저의 높이 
                    // --> 영역 안에서는 .section-horizontal 이 상단에 고정되어 보일 수 있게 적용.
                    _this.$horizontal.addClass('fixed');

                    x = (_horizontalH - _winW) * (_scrollTop - start) / (_horizontalH - _winH) * -1;

                    gsap.set(_this.$horizontalWrap, {x: x});

                }else{
                    // --> .section-horizontal 이 정상적인 스크롤이 되어 보이는 것처럼 적용.
                    _this.$horizontal.addClass('fixed-end');
                    x = (_horizontalH - _winW) * -1; // 최대 가로 스크롤 허용치
                    // _this.$horizontalWrap.css({'transform' : 'translateX('+ x + 'px)'});
                    gsap.set(_this.$horizontalWrap, {x: x});
                }
            }else{
                _this.$horizontal.removeClass('fixed');        
                if(_scrollTop < start){
                    // .section-horizontal 스크롤 Y 좌표가 시작하는 지점보다 window 스크롤 Y 좌표가 낮을 때는 fixed, fixed-end 제거
                    _this.$horizontal.removeClass('fixed-end');
                    x = 0; // 최대 가로 스크롤 허용치
                    // _this.$horizontalWrap.css({'transform' : 'translateX('+ x + 'px)'});
                    gsap.set(_this.$horizontalWrap, {x: x});
                }
                if(_scrollTop >= end){
                    // .section-horizontal 스크롤 Y 좌표가 끝나는 지점보다 window 스크롤 Y 좌표가 높을 때는 fixed-end 유지
                    _this.$horizontal.addClass('fixed-end');
                    x = (_horizontalH - _winW) * -1; // 최대 가로 스크롤 허용치
                    // _this.$horizontalWrap.css({'transform' : 'translateX('+ x + 'px)'});
                    gsap.set(_this.$horizontalWrap, {x: x});
                }
            }
            // console.log(_scrollTop, start);
        }

        function motionRender(){ 

            scrollHeight = scrollbody.height(); 
            sectionOffsetTop = scrollbody.offset().top;

            scrollRealHeight = (scrollHeight - $(window).height());
            winScrollTop = $(window).scrollTop(); 
            sectionScrolTop = winScrollTop - sectionOffsetTop 

            scrollPerecnt =  sectionScrolTop / scrollRealHeight; 
            percent = scrollPerecnt * 100 ; 

            

            var maskStartValue = 50; 
            var maskEndValue = 0; 
            var maskVal = Math.max(maskEndValue, maskStartValue - (scrollPerecnt * maskStartValue)); 
    
            
            maskLeft
            .css({
                width: maskVal + '%'
            });
            maskRight
            .css({
                width: maskVal + '%'
            });
            if(percent > 0.3){
                titText.addClass('active');
            }else{
                titText.removeClass('active');
            }
            
            if(percent >= 40){
                endingContent.addClass('active');
            }else {
                endingContent.removeClass('active');
            }

        };

        function motionRender2(){ 

            scrollHeight = scrollbody2.height(); 
            sectionOffsetTop = scrollbody2.offset().top; 
            scrollRealHeight = (scrollHeight - $(window).height()); 
            winScrollTop = $(window).scrollTop(); 
            sectionScrolTop = winScrollTop - sectionOffsetTop 
            scrollPerecnt =  sectionScrolTop / scrollRealHeight; 
            percent = scrollPerecnt * 100 ; 

            
            var zoomValue = 2.2; 
            var zoomOutValue = 1; 
            var scaleVal = Math.max(zoomOutValue, zoomValue - (scrollPerecnt * zoomValue)); 

            var leftValue = 200;
            var leftOutValue = 0;
            var leftVal = Math.max(leftOutValue, leftValue - (scrollPerecnt * leftValue)); 
            
            _this.$img
            .css({
                'transform': 'scale('+ scaleVal +')'
            });             
            if(percent >= 40){
                $('#section-2 .text-area').addClass('active');
            }else {
                $('#section-2 .text-area').removeClass('active');
            }

        };

        init();
    });
})(jQuery);