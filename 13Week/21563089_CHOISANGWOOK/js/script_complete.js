(function($){
    $(document).ready(function() {
        var _this = this;
        var _winW = null;
        var _winH = null;
        var _hHeight = null;
        var _hMax = null;
        var _scrollTop = 0;
        
        function init() {
            layout();
            setting();
            addEvent();
            reset();
        }

        function layout() {
            _this.$win = $(window);
            _this.$sticky = $('.section-sticky');
            _this.$horizontal = $('.section-horizontal');
            _this.$horizontalWrap = _this.$horizontal.find('.section-wrap');
            _this.$horizontalItem = _this.$horizontalWrap.find('.section-item');
        }

        function setting() {
            _hMax = _this.$horizontalItem.length;
        }

        function addEvent() {
            _this.$win.on('resize', onResize).on('scroll', onScroll);   
        }

        function reset() {
            _this.$win.trigger('resize').trigger('scroll');
        }
        
        function onResize(e) {
            _winW = _this.$win.width();
            _winH = _this.$win.height();
            _hHeight = _winW * _hMax;
            _this.$horizontal.outerHeight(_hHeight);
        };
        function onScroll(e) {
            _scrollTop = _this.$win.scrollTop();
            stickyScroll();
            horizontalScroll();
        };
        
        function stickyScroll() {
            var imgY = 0,
                titleY = 0,
                descY = 0,
                $img = _this.$sticky.find('img'),
                $title = _this.$sticky.find('.title'),
                $desc = _this.$sticky.find('.desc'),
                start = _this.$sticky.offset().top,
                end = start + _this.$sticky.outerHeight();
            if(_scrollTop >= start && _scrollTop < end) {
                _this.$sticky.addClass('fixed');
            }else{
                _this.$sticky.removeClass('fixed');
            }
            if(_scrollTop >= start && _scrollTop < end + _winH) {
                imgY = (_scrollTop - start) * 0.8 * -1;
            }
            if(_scrollTop >= start - _winH && _scrollTop < end + _winH) {
                titleY = Math.min(0, (_scrollTop - start) * 0.4) * -1;
                descY = Math.min(0, (_scrollTop - start) * 0.4) * -1;
            }
            gsap.set($img, {y : imgY});
            gsap.set($title, {y: titleY});
            gsap.set($desc, {y: descY});
        }

        function horizontalScroll() {
            var x = 0, 
                start = _this.$horizontal.offset().top,
                end = start + _this.$horizontal.outerHeight();
            if(_scrollTop >= start && _scrollTop < end) {
                if(_scrollTop < end - _winH){
                    x = (_hHeight - _winW) * (_scrollTop - start) / (_hHeight - _winH) * -1;
                    _this.$horizontal.removeClass('fixed-end');
                    _this.$horizontal.addClass('fixed');
                    gsap.set(_this.$horizontalWrap, {x : x});
                }else{
                    x = (_hHeight - _winW) * -1;
                    _this.$horizontal.removeClass('fixed');
                    _this.$horizontal.addClass('fixed-end');
                    gsap.set(_this.$horizontalWrap, {x : x});
                }
            }else{
                _this.$horizontal.removeClass('fixed');
                if(_scrollTop < start){
                    _this.$horizontal.removeClass('fixed-end');
                    gsap.set(_this.$horizontalWrap, {x : x});
                }
            }
        }

        init();
    });
})(jQuery);