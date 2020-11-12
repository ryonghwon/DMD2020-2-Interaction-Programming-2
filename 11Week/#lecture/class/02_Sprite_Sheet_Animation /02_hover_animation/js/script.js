console.log("Script Load");
(function($){
    $(document).ready(function() {
        console.log('jQuery Ready');

        function Sprite(el, opts) {
            var _this = this;

            var _max = opts.max;
            var _col = opts.col;
            var _row = opts.row;
            var _imgW = opts.width;
            var _imgH = opts.height;
        }
        
        var minion = new Sprite('.minion', { max : 48, col : 7, row : 7, width : 1008, height : 1008 });
        var zootopia = new Sprite('.zootopia', { max : 12, col : 4, row : 3, width : 576, height : 432 });
        
    });
})(jQuery);