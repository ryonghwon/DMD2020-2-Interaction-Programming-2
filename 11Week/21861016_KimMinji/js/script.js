console.log("Script Load");
(function($){
    $(document).ready(function() {
        console.log('jQuery Ready');

        // 해당하는 항렬의 변수로 사용할수있도록.
        var _this = this;
        var _timer = 0;
        var _isReverse = void 0;
        var _cuFrame = 0;
 
        // Zootopia Setting.
        // var _max = 12;
        // var _col = 4;
        // var _row = 3;
        // var _imgW = 576;
        // var _imgH = 432;

        // Minion Setting.
        // var _max = 48;
        // var _col = 7;
        // var _row = 7;
        // var _imgW = 1008;
        // var _imgH = 1008;

        // butterfly Setting.
        var _max = 84;
        var _col = 14;
        var _row = 6;
        var _imgW = 980;
        var _imgH = 390;

        var _itemW = null;
        var _itemH = null;
        
        function init(){
            layout();
            setting();
            addEvent();
            reset();
        }

        function layout(){
            // .animation 클래스를 찾아 저장
            _this.$el = $('.animation');
            // 버튼을 각각 찾아온다.
            _this.$btnPlay = $('.btn-play');
            _this.$btnReverse = $('.btn-reverse');
            _this.$btnStop = $('.btn-stop');
            _this.$btnReset = $('.btn-reset');
        }
        function setting(){
            // 시퀀스의 반전 상태 여부.
            _isReverse = false;
            // 이미지에서 아이템 1개의 가로 영역을 찾는 것.
            _itemW = _imgW / _col;
            // 이미지에서 아이템 1개의 세로 영역 높이를 찾는 것.
            _itemH = _imgH / _row;
        }
        function addEvent(){
            // 버튼 클릭이벤트 연결
            _this.$btnPlay.on('click', onClickBtnPlay);
            _this.$btnReverse.on('click', onClickBtnReverse);
            _this.$btnStop.on('click', onClickBtnStop);
            _this.$btnReset.on('click', onClickBtnReset);
        }

        function reset(){
            updateFrame();
        }
        
        // 버튼 클릭 이벤트 핸들러 작성.
        function onClickBtnPlay(e){
            // a 하이퍼링크 연결이 안되도록
            e.preventDefault();
            console.log('Play');
            playFrame();
        }
        
        function onClickBtnReverse(e){
            e.preventDefault();
            console.log('Reverse');
            reverseFrame();
        }
        
        function onClickBtnStop(e){
            e.preventDefault();
            console.log('Stop');
            stopFrame();
        }
        
        function onClickBtnReset(e){
            e.preventDefault();
            console.log('Reset');
            resetFrame();
        }

        // 애니메이션 기능.
        function playFrame(){
            clearInterval(_timer);
            //변수에 함수를 호출할 수 있도록 지정
            _timer = setInterval(progressFrame, 60);
        }
        
        // 애니메이션을 반전시키는 기능.
        function reverseFrame() {
            clearInterval(_timer);
            _isReverse = true;
            _timer = setInterval(progressFrame, 60);
        }

        // 애니메이션을 정지하는 기능.
        function stopFrame() {
            clearInterval(_timer);
        }

        // 애니메이션을 리셋하는 기능.
        function resetFrame() {
            // 정지.
            stopFrame();
            // 프레임 0으로 설정.
            _cuFrame = 0;
            // 정방향으로 되돌림.
            _isReverse = false;
            // 0 프레임에 해당하는 좌표값을 호출.
            updateFrame();
        }

        // 인터벌마다 변경되는 현재 프레임 설정.
        function progressFrame() {
            if(!_isReverse) { // 정방향 - 프레임 증가.
                _cuFrame++;
            }else{ // 역방향 - 프레임 감소.
                _cuFrame--;
            }

            // 첫 프레임은 0. _cuFrame 값이 0 보다 작아질 수 없다.
            if(_cuFrame <= 0) {
                _cuFrame = 0;
                if(_isReverse) stopFrame(); // 역방향 설정 후 0 이하가 될 경우 정지.
            }

            // 마지막 프레임은 _max - 1. _cuFrame 값이 _max - 1 보다 커질 수 없다.
            if(_cuFrame >= _max - 1) {
                _cuFrame = _max - 1;
                if(!_isReverse) stopFrame(); // 정방향 설정 후 _max - 1 이상이 될 경우 정지.
            }

            updateFrame();
        }

        // 현재 프레임에 따른 배경이미지 위치 변경.
        function updateFrame() {
            var posX = 0; // 스프라이트 이미지에서의 현재 프레임 X 좌표.
            var posY = 0; // 스프라이트 이미지에서의 현재 프레임 Y 좌표.

            // posX = _cuFrame % _col;
            // 나머지를 구하는 공식으로 x의 셀 위치를 찾아온다.
            // _col - Column 몇 단에 해당되는지 (7단으로 이미지가 구성)
            
            // posY = Math.floor(_cuFrame / _row);
            // 나누기 공식으로 y의 셀 위치를 찾아온다.
            // 소수점 내림을 처리를 해준다.
            // _row - Row 몇 줄에 해당되는지 (7줄로 이미지가 구성)

            // console.log(_cuFrame, posX + ', ' + posY); 
            // (0,0), (1,0), (2,0), (3,0) ...
            // (0,1), (1,1), (2,1), (3,1) ...
            // ...
            // ...
            // (0, 7), (1, 7), (2, 7), (3, 7) ...

            posX = _cuFrame % _row * _itemW * -1;; // 이미지에서의 실제 X 좌표.
            posY = Math.floor(_cuFrame / _col) * _itemH * -1; // 이미지에서의 실제 Y 좌표.
            console.log(_cuFrame, posX + ', ' + posY);
            _this.$el.css({ 'background-position' : posX + 'px ' + posY + 'px'});
        }

        init();
    });
})(jQuery);