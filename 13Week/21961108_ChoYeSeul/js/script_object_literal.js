(function($){
    $(document).ready(function() {
        var Scroll = {
            _winW: null,
            _winH: null,

            _hMax: null,

            _scrollTop: 0,

            init: function() {
                this.layout();
                this.setting();
                this.addEvent();
                this.reset();
            },
            layout: function() {
                this.$win = $(window);
                this.$sticky = $('.section-sticky');
                this.$horizontal = $('.section-horizontal');
                this.$horizontalWrap = this.$horizontal.find('.section-wrap');
                this.$horizontalItem = this.$horizontalWrap.find('.section-item');
            },
            setting: function() {
                this._hMax = this.$horizontalItem.length;
            },
            addEvent: function() {
                this.$win.on('resize', this.onResize.bind(this)).on('scroll', this.onScroll.bind(this));   
            },
            reset: function() {
                this.$win.trigger('resize').trigger('scroll');
            },
            onResize: function(e) {
                this._winW = this.$win.width();
                this._winH = this.$win.height();
                this._hHeight = this._winW * this._hMax;
                this.$horizontal.outerHeight(this._hHeight);
            },
            onScroll: function(e) {
                this._scrollTop = this.$win.scrollTop();
                this.stickyScroll();
                this.horizontalScroll();
            },
            stickyScroll: function() {
                var imgY = 0,
                    titleY = 0,
                    descY = 0,
                    $img = this.$sticky.find('img'),
                    $title = this.$sticky.find('.title'),
                    $desc = this.$sticky.find('.desc'),
                    start = this.$sticky.offset().top,
                    end = start + this.$sticky.outerHeight();
                if(this._scrollTop >= start && this._scrollTop < end) {
                    this.$sticky.addClass('fixed');
                }else{
                    this.$sticky.removeClass('fixed');
                }
                if(this._scrollTop >= start && this._scrollTop < end + this._winH) {
                    imgY = (this._scrollTop - start) * 0.8 * -1;
                }
                if(this._scrollTop >= start - this._winH && this._scrollTop < end + this._winH) {
                    titleY = Math.min(0, (this._scrollTop - start) * 0.4) * -1;
                    descY = Math.min(0, (this._scrollTop - start) * 0.4) * -1;
                }
                gsap.set($img, {y : imgY});
                gsap.set($title, {y: titleY});
                gsap.set($desc, {y: descY});
            },
            horizontalScroll: function() {
                var x = 0, 
                    start = this.$horizontal.offset().top,
                    end = start + this.$horizontal.outerHeight();
                if(this._scrollTop >= start && this._scrollTop < end) {
                    if(this._scrollTop < end - this._winH){
                        x = (this._hHeight - this._winW) * (this._scrollTop - start) / (this._hHeight - this._winH) * -1;
                        this.$horizontal.removeClass('fixed-end');
                        this.$horizontal.addClass('fixed');
                        gsap.set(this.$horizontalWrap, {x : x});
                    }else{
                        x = (this._hHeight - this._winW) * -1;
                        this.$horizontal.removeClass('fixed');
                        this.$horizontal.addClass('fixed-end');
                        gsap.set(this.$horizontalWrap, {x : x});
                    }
                }else{
                    this.$horizontal.removeClass('fixed');
                    if(this._scrollTop < start){
                        this.$horizontal.removeClass('fixed-end');
                        gsap.set(this.$horizontalWrap, {x : x});
                    }
                }
            }
        };
        Scroll.init();
    });
})(jQuery);