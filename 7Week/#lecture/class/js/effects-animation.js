console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');

        var $button = $('button');
        var $box = $('.box');

        var $win = $(window);
        $win.on('click', function(e) {
            //console.log('window click');
        });

        $button.on('click', function(e) {
            var $el = $(e.currentTarget);
            // 클릭된 버튼들을 선별하자!
            // 방법 1. 입력된 텍스트로 선별.
            var text = $el.text().toLowerCase();
            if(text === 'play') {

            }else if(text === 'stop'){

            }else if(text === 'force play'){

            }else if(text === 'reset'){

            }
            
            // 방법 2. 클래스 이름으로 선별.
            var className = $el.attr('class').replace('btn-', '');
            if(className === 'play'){
                // animate()
                $box.animate({
                    'width' : '+=20',
                    'left' : '+=100',
                    'backgroundColor' : '#ff0000'
                }, 1000);
            }else if(className === 'stop'){
                $box.stop();
            }else if(className === 'force-play'){
                $box.stop(true).animate({
                    'left' : '+=200'
                }, 1000);
            }else if(className === 'reset') {
                // $box.stop(true).css({
                //     'width' : '100',
                //     'left' : 0,
                //     'backgroundColor' : '#000000'
                // });
                $box.stop(true).removeAttr('style');
            }

            /*
            // 기본 이벤트를 해제.
            e.preventDefault();
            console.log('button click');

            // case.
            // 1. window (상위 요소) 에 click 이벤트가 연결.
            // 2. button (자기자신) 에 click 이벤트가 연결.
            // - 이벤트 버블링이 발생된다.
            e.stopPropagation();
            // - 이벤트 버블링을 방지해준다. - button 만 클릭된 것으로 확인.

            // console.log(e);
            // console.log(e['pageX'], e.pageY);
            // console.log(e.target);
            // console.log(e.currentTarget);
            */
        });



    });
})(jQuery);