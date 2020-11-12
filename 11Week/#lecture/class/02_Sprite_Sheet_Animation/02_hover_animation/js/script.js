console.log("Script Load");
(function($){
    $(document).ready(function() {
        console.log('jQuery Ready');

        function Sprite(el, opts) {
            var _this = this;
            var _timer = 0;
            var _isReverse = void 0;
            var _cuFrame = 0;

            var _max = opts.max;
            var _col = opts.col;
            var _row = opts.row;
            var _imgW = opts.width;
            var _imgH = opts.height;

            var _itemW = null;
            var _itemH = null;

            function init() {
                layout();
                setting();
                addEvent();
                reset();
            }
    
            function layout() {
                _this.$el = $(el);
            }
    
            function setting() {
                _isReverse = false;
                _itemW = _imgW / _col;
                _itemH = _imgH / _row;
            }
    
            function addEvent() {
                _this.$el.on('mouseenter', onMouseEnterEl);
                _this.$el.on('mouseleave', onMouseLeaveEl);
            }
    
            function reset() {
                updateFrame();
            }

            function onMouseEnterEl(e) {
                e.preventDefault();
                stopFrame();
                _isReverse = false;
                playFrame();
            }

            function onMouseLeaveEl(e) {
                e.preventDefault();
                stopFrame();
                _isReverse = true;
                playFrame();
            }
    
            function playFrame() {
                clearInterval(_timer);
                _timer = setInterval(progressFrame, 60);
            }
    
            function reverseFrame() {
                clearInterval(_timer);
                _isReverse = true;
                _timer = setInterval(progressFrame, 60);
            }
    
            function stopFrame() {
                clearInterval(_timer);
            }
    
            function resetFrame() {
                stopFrame();
                _cuFrame = 0;
                _isReverse = false;
                updateFrame();
            }
    
            function progressFrame() {
                (!_isReverse) ? _cuFrame++ : _cuFrame--;
                if(_cuFrame <= 0) {
                    _cuFrame = 0;
                    if(_isReverse) stopFrame();
                }
                if(_cuFrame >= _max - 1) {
                    _cuFrame = _max - 1;
                    if(!_isReverse) stopFrame();
                }
                updateFrame();
            }
    
            function updateFrame() {
                var posX = 0;
                var posY = 0;
                posX = _cuFrame % _row * _itemW * -1;
                posY = Math.floor(_cuFrame / _col) * _itemH * -1;
                console.log(_cuFrame, posX + ', ' + posY);
                _this.$el.css({ 'background-position' : posX + 'px ' + posY + 'px'});
            }
    
            init();
        }
        
        var minion = new Sprite('.minion', { max : 48, col : 7, row : 7, width : 1008, height : 1008 });
        var zootopia = new Sprite('.zootopia', { max : 12, col : 4, row : 3, width : 576, height : 432 });
    });
})(jQuery);