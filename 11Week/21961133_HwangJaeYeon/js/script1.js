//console.log("sss");
(function($){
    $(document).ready(function(){
        console.log('ss');

        var _this = this;
        var _timer = 0;
        var _isReverse = void 0;
        var _cuFrame = 0;

        var _max = 24;
        var _col = 6;
        var _row = 4;
        var _imgW = 543;
        var _imgH = 350;

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
            _this.$btnGo = $('.btn-go');
            _this.$btnBack = $('.btn-back');
            _this.$btnStop = $('.btn-stop');
            _this.$btnReset = $('.btn-reset');
        }

        function setting(){
            _isReverse = false;
            _itemW = _imgW / _col;
            _itemH = _imgH / _row;           
        }

        function addEvent(){
            _this.$btnGo.on('click', onClickBtnGo);
            _this.$btnBack.on('click', onClickBtnBack);
            _this.$btnStop.on('click', onClickBtnStop);
            _this.$btnReset.on('click', onClickBtnReset);
        }

        function reset(){
            updateFrame();
        }

        function onClickBtnGo(e){
            e.preventDefault();
            console.log("GO");
            goFrame();
        }

        function onClickBtnBack(e){
            e.preventDefault();
            console.log("BACK");
            backFrame();
        }

        function onClickBtnStop(e){
            e.preventDefault();
            console.log("STOP");
            stopFrame();
        }

        function onClickBtnReset(e){
            e.preventDefault();
            console.log("RESET");          
            resetFrame();
        }

        function goFrame(){
            clearInterval(_timer);
            _timer = setInterval(progressFrame, 60);
        }

        function backFrame(){
            clearInterval(_timer);
            _isReverse = true;
            _timer = setInterval(progressFrame, 60);
        }

        function stopFrame(){
            clearInterval(_timer);
        }

        function resetFrame(){
            stopFrame();
            _cuFrame = 0;
            _isReverse = false;
            updateFrame();
        }

        function progressFrame(){
            if(!_isReverse){
                _cuFrame++;
            }else{
                _cuFrame--;
            }

            if(_cuFrame <= 0){
                _cuFrame = 0;
                if(_isReverse) stopFrame();
            }

            if(_cuFrame >= _max){
                _cuFrame = _max;
                if(!_isReverse) stopFrame();
            }

            updateFrame();
        }

        function updateFrame(){
            var posX = 0;
            var posY = 0;

            posX = _cuFrame % _row * _itemW;
            posY = Math.floor(_cuFrame / _col) * _itemH  ;
            console.log(_cuFrame, posX + posY);
            _this.$el.css({
                'background-position' : posX + 'px' + posY + 'px'
            }); 
        }
        init();
    });
})(jQuery);