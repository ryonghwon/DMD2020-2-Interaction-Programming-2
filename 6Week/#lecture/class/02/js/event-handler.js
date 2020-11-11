console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');

        // 이벤트의 연결.
        // click.
        $('#menu-1').click(function(event) { //evt, e
            event.preventDefault();
            console.log('click');
        });

        // bind();
        // unbind();
        // 이벤트를 연결.
        $('#menu-2').bind('click', function(e) {
            e.preventDefault();
            console.log('bind - click');
        }).bind('mousemove', function(e) {
            console.log(e.pageX);
        });

        // 이벤트를 해제.
        // $('#menu-2').unbind(); // 전체 이벤트 타입을 해제.
        $('#menu-2').unbind('click'); // click 티입만 해제.

        // delegate();
        // undelegate();

        // on();
        // off();
        var $ul = $('ul');
        $('a').on('click', function(e) {
            // this === e.currentTarget === 'a';
            console.log('click', $('a').index(e.currentTarget));
        });
        // 문제점.
        // $(element).on('eventType', Handler);
        // -> DOM 이 실행되고 요소가 정해진 상태에서만 이벤트를 연결한다.
        // 문서 실행 이후 같은 요소가 추가될 때 이벤트를 다시 추가해줘야 한다.

        // 해결방법.
        $ul.on('click.ul', 'a', function(e) {
            console.log('click - a');
        });
        // ul 요소를 기준으로 a 요소를 찾고 이벤트를 연결한다. 이후에 DOM 조작으로 a 요소가 추가되더라도 click 이벤트가 적용된다.
        $ul.append('<li><a href="#" class="a">Menu</a></li>');
        // 이벤트 추가 이후 요소를 DOM에 삽입하면 해당 요소에는 이벤트가 실행되지 않는다....
    
        // one();
        // 이벤트가 한번만 동작하는 연결 방법.
        $('input[type=text]').one('focus', function() {
            console.log('focus - one');
        });

        // trigger();
        // 이벤트를 강제 호출.
        $('a').trigger('click.ul');
    });
})(jQuery);