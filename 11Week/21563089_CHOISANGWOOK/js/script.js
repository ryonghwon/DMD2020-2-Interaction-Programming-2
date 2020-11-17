console.log("Script Load");
(function($){
    $(document).ready(function() {
        console.log('jQuery Ready');
        var _this = this;
        var _timer = 0;
        var _isReverse = void 0;
        var _cuFrame = 0;

        // cute Setting.
        var _max = 29;
        var _col = 4;
        var _row = 3;
        var _imgW = 576;
        var _imgH = 432;

        var _itemW = null;
        var _itemH = null;

        function init() {
            layout();
            setting();
            addEvent();
            reset();
        }

        function layout() {
            _this.$el = $('.animation');
            _this.$btnPlay = $('.btn-play');
            _this.$btnReverse = $('.btn-reverse');
            _this.$btnStop = $('.btn-stop');
            _this.$btnReset = $('.btn-reset');
        }

        function setting() {
            // 시퀀스의 반전 상태 여부
            _isReverse = false;
            _itemW = _imgW / _col; // 이미지에서 아이템 1개의 가로 폭
            _itemH = _imgH / _row; // 이미지에서 아이템 1개의 세로 높이
        }

        function addEvent() {
            _this.$btnPlay.on('click', onClickBtnPlay);
            _this.$btnReverse.on('click', onClickBtnReverse);
            _this.$btnStop.on('click', onClickBtnStop);
            _this.$btnReset.on('click', onClickBtnReset);
        }

        function reset() {
            updateFrame();
        }

        function onClickBtnPlay(e) {
            e.preventDefault();
            console.log('Play'); // 플레이
            playFrame();
        }

        function onClickBtnReverse(e) {
            e.preventDefault();
            console.log('Reverse');  // 역재생
            reverseFrame();
        }

        function onClickBtnStop(e) {
            e.preventDefault();
            console.log('Stop'); // 정지
            stopFrame();
        }

        function onClickBtnReset(e) {
            e.preventDefault();
            console.log('Reset'); // 리셋
            resetFrame();
        }

        // 애니메이션 기능
        function playFrame() {
            clearInterval(_timer);
            _timer = setInterval(progressFrame, 60);
        }

        // 애니메이션을 반전시키는 기능
        function reverseFrame() {
            clearInterval(_timer);
            _isReverse = true;
            _timer = setInterval(progressFrame, 60);
        }

        // 애니메이션을 정지하는 기능
        function stopFrame() {
            clearInterval(_timer);
        }

        // 애니메이션을 리셋하는 기능
        function resetFrame() {
            stopFrame();
            _cuFrame = 0;
            _isReverse = false;
            updateFrame();
        }

        // 인터벌마다 변경되는 현재 프레임 설정
        function progressFrame() {
            if(!_isReverse) { // 정방향 - 프레임 증가
                _cuFrame++;
            }else{ // 역방향 - 프레임 감소
                _cuFrame--;
            }

            // 첫 프레임은 0. _cuFrame 값이 0 보다 작아질 수 없음
            if(_cuFrame <= 0) {
                _cuFrame = 0;
                if(_isReverse) stopFrame(); // 역방향 설정 후 0 이하가 될 경우 정지
            }

            // 마지막 프레임은 _max - 1. _cuFrame 값이 _max - 1 보다 커질 수 없음
            if(_cuFrame >= _max - 1) {
                _cuFrame = _max - 1;
                if(!_isReverse) stopFrame(); // 정방향 설정 후 _max - 1 이상이 될 경우 정지
            }
            updateFrame();
        }

        // 현재 프레임에 따른 배경 이미지 위치 변경
        function updateFrame() {
            var posX = 0; // 스프라이트 이미지에서의 현재 프레임 X 좌표
            var posY = 0; // 스프라이트 이미지에서의 현재 프레임 Y 좌표
            posX = _cuFrame % _row * _itemW * -1; // 이미지에서의 실제 X 좌표
            posY = Math.floor(_cuFrame / _col) * _itemH * -1; // 이미지에서의 실제 Y 좌표
            console.log(_cuFrame, posX + ', ' + posY);
            _this.$el.css({ 'background-position' : posX + 'px ' + posY + 'px'});
        }
        init();
    });
})(jQuery);