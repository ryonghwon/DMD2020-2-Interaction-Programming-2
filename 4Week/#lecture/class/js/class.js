console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');

        // addClass();
        // 요소에 클래스를 추가.
        // $('p').addClass('selected');
        // $('p').addClass('selected highlight red');
        $('p').last().addClass('highlight');
        $('p:first').addClass('selected');

        // removeClass();
        // 요소에 클래스를 제거.
        // 홀수, 짝수 요소 찾기.
        // $('p:even').removeClass('blue selected');
        $('p:odd').removeClass('under');

        // hasClass();
        // 요소에 클래스 여부를 판단.
        // console.log($('p').hasClass('selected')); // 0 번째 요소만 찾아온다.
        $('p').each(function() { // 요소의 반복 메서드.
            // * this - 개별 요소. element,
            // * $(this) - jQuery 에서 사용하기 위해 선택자로 반환. [element]
            var $el = $(this);
            // console.log($el);
            console.log($el.hasClass('selected'));
            if(!$el.hasClass('selected')) { // 요소에서 클래스 여부를 판단하고 추가를 할 지, 제거를 할 지.
                // 클래스가 없을 때. - 추가
                $el.addClass('selected');
            }else{
                // 클래스가 있을 때. - 제거
                $el.removeClass('selected');
            }
        });

        // toggleClass();
        // 요소에 클래스가 있는 경우 - 제거 / 없는 경우 - 추가
        $('p').click(function() {
            //console.log('click');
            $(this).toggleClass('selected');

            // $(this).toggleClass('selected', true); // === addClass('selected');
            // $(this).toggleClass('selected', false); // === removeClass('selected');
        });

        // chaining. - 체이닝. 하나의 선택자 검색 이후, 메서드를 중복해서 사용할 수 있다.
        // removeClass() - 매개변수가 없을 때는 모든 클래스가 제거된다.
        $('p').removeClass().addClass('under');
    });
})(jQuery);