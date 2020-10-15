console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');
        // Image Slider.
        
        var _this = this;
        
        var _cuId = 0,
            _exId = 0,
            _max = void 0;

        function init() {
            // 초기화 함수.
            layout();
            setting();
            addEvent();
            reset();
        }

        function layout() {
            // 셀렉터를 찾아오는 함수.

            _this.$banner = $('.banner');
            
            // paddle navigation
            _this.$paddleNav = _this.$banner.find('.paddle-nav');
            _this.$btnPaddle = _this.$paddleNav.find('button.arrow');
            _this.$btnPaddlePrev = _this.$paddleNav.find('button.arrow.prev');
            _this.$btnPaddleNext = _this.$paddleNav.find('button.arrow.next');

            // dot navigation
            _this.$dotNav = _this.$banner.find('.dot-nav');
            _this.$dotEl = _this.$dotNav.find('span');

            // banner
            _this.$wrap = _this.$banner.children('.banner-wrap');
            _this.$container = _this.$wrap.children('.banner-container');
            _this.$item = _this.$container.children('.banner-item');
        }

        function setting() {
            // 초기 세팅 함수.
            _cuId = 0;
            _exId = _cuId;
            // 전체 이미지 아이템의 개수.
            _max = _this.$item.length;
        }

        function addEvent() {
            // 이벤트 연결 함수.
            _this.$btnPaddle.on('click', onClikcBtnPaddle)
        }

        function reset() {
            // 세팅과 연결 후 초기화 함수.
        }

        function onClikcBtnPaddle(e) {
            var $el = $(e.currentTarget);
            // prev 혹은 next 버튼을 구분하기.
            if($el.hasClass('prev')) {
                console.log('이전');
                _cuId--; // 클릭 이벤트가 발생될 때마다 1씩 감소
            }else if($el.hasClass('next')) {
                console.log('다음');
                _cuId++; // 클릭 이벤트가 발생될 때마다 1씩 증가
            }
            // 각 버튼의 기능 점검이 끝나면 실제 배너가 바뀔 수 있도록.
            changeBanner();
        }

        function changeBanner() {
            //console.log(_cuId);
            var left = 1069 * _cuId * -1;

            // left 속성 값을 변경.
            // _this.$container.css({
            //     'left' : left
            // });

            // left 속성 값을 변경하여 0.8초 동안 애니메이션 생성.
            _this.$container.stop(true).animate({
                'left' : left
            }, 800);
        }
        
        // 전체 호출.
        init();
    });
})(jQuery);