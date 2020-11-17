console.log("Script Load");
(function($){
    $(document).ready(function(){
        console.log('jQuery Ready');

        var _this = this;
        var _timer = 0;
        var _isReverse = void 0;
        var _cuFrame = 0;

        // Fighting Animation Setting.
        var _max = 11;
        var _col = 3;
        var _row = 4;
        var _imgW = 608;
        var _imgH = 552;

        var _itemW = null;
        var _itemH = null;

        function init(){
            layout();
            setting();
            addEvent();
            reset();
        }

        function layout(){
            _this.$el = $('.animation');
            _this.$btnPlay = $('.btn-play');
            _this.$btnReverse = $('.btn-reverse');
            _this.$btnStop = $('.btn-stop');
            _this.$btnReset = $('.btn-reset');
        }

        function setting(){
            // 시퀀스 반전 상태
            _isReverse = false;
            // 전체 이미지 영역 / 가로 세로 개수
            _itemW = _imgW / _row;
            _itemH = _imgH / _col;
        }

        function addEvent(){
            _this.$btnPlay.on('click', onClickBtnPlay);
            _this.$btnReverse.on('click', onClickBtnReverse);
            _this.$btnStop.on('click', onClickBtnStop);
            _this.$btnReset.on('click', onClickBtnReset);
        }

        function reset(){
            updateFrame();
        }

        // -------------------------------------

        // 버튼 클릭 이벤트 함수
        function onClickBtnPlay(e){
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

        // -------------------------------------

        // 애니메이션 실행
        function playFrame(){
            clearInterval(_timer);
            _timer = setInterval(progressFrame, 80);
        }
        // 애니메이션 반전
        function reverseFrame(){
            clearInterval(_timer);
            _isReverse = true;
            _timer = setInterval(progressFrame, 80);
        }
        // 애니메이션 정지
        function stopFrame(){ 
            clearInterval(_timer);
        }
        // 애니메이션 리셋
        function resetFrame(){
            stopFrame();
            _cuFrame = 0;
            _isReverse = false;
            updateFrame();
        }

        // -------------------------------------

        // 현재 프레임 설정
        function progressFrame(){

            if(!_isReverse){ // 프레임 증가
                _cuFrame++;
            }else{ // 프레임 감소
                _cuFrame--;
            }

            // 첫 프레임 = 0 (0보다 작게하면 안됨)
            if(_cuFrame <= 0){
                _cuFrame = 0;
                
                // 역방향 설정 후 0 이하 = 정지
                if(_isReverse) stopFrame();
            }

            // 마지막 프레임 = _max - 1 (_cuFrame 값이 _max - 1 보다 커지면 안됨)
            if(_cuFrame > _max - 1){
                _cuFrame = _max - 1;

                // 정방향 설정 후 _max - 1 이상 = 정지
                if(!_isReverse) stopFrame();
            }

            updateFrame();
        }

        // -------------------------------------

        // 배경 이미지 위치 설정
        function updateFrame(){
            var posX = 0;
            var posY = 0;

            posX = _cuFrame % _col * _itemW * -1;
            posY = Math.floor(_cuFrame / _row) * _itemH * -1;
            console.log(_cuFrame, posX + ', ' + posY); 

            _this.$el.css({
                'background-position' : posX + 'px ' + posY + 'px'
            });
            
        }

        init();
    })

})(jQuery);