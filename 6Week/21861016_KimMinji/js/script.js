(function($){
    $(document).ready(function(){
        /*
        Quest 1.
        .banner 노드의 CSS 속성 중 overflow 를 hidden 으로 변경합니다.
        */
        //Answer 1.

        // css 메서드를 이용해 해당하는 속성과 속성값을 기입.(단일 항목)
        // overflow 속성에 접근해 hidden으로 변경.
        $('.banner').css('overflow', 'hidden');


        /*
        Quest 2.
        .banner-wrap 노드의 width 와 height 를 .banner 의 크기와 동일하게 적용합니다.
        */
        //Answer 2.

        // .banner 의 width 와 height.
        var $banner_w = $('.banner').width();
        var $banner_h = $('.banner').height();
        // .banner-wrap 노드의 width 와 height 를 .banner 의 크기와 동일하게 적용할 것.
        $('.banner-wrap').width($banner_w);
        $('.banner-wrap').height($banner_h);


        /*
        Quest 3.
        .banner-container 노드의 width 를 .banner-wrap 의 width x .banner-item 의 개수 의 너비만큼 계산하여 적용하고, height 는 100% 로 지정합니다.
        */
        //Answer 3.

        // .banner-wrap 의 width
        var $banner_ww = $('.banner-wrap').width();
        // .banner-item 의 개수
        var $banner_il = $('.banner-item').length;
        // .banner-container 노드의 width에 계산하여 적용할 것.
        $('.banner-container').width($banner_ww * $banner_il);
        // .banner-container 노드의 height 는 100% 로 지정할 것.
        $('.banner-container').height('100%');


        /*
        Quest 4.
        .banner-item 노드의 float 속성을 left 로 변경하고, width 를 .banner-wrap 의 width 와 동일하게, height 를 100% 로 지정합니다.
        */
        //Answer 4.

        var $banner_i = $('.banner-item');

        // .banner-item 노드의 float 속성에 접근해 left로 변경.
        $('.banner-item').css('float', 'left');
        // .banner-wrap 의 width와 동일하게 지정할 것.
        $('.banner-item').width($banner_ww);
        // height 를 100% 로 지정할 것.
        $banner_i.height('100%');


        /*
        Quest 5.
        .banner-item 의 자식노드 img 요소의 width 를 100% 로 지정합니다.
        */
        //Answer 5.

        // .banner-item 의 자식노드 img 요소의 width 를 100% 로 지정할 것.
        $('.banner-item img').width('100%');

        /*
        Quest 6.
        .paddle-nav 의 자식노드 .arrow.prev 노드의 left 속성을 18px 로 지정합니다.
        */
        //Answer 6.

        // .paddle-nav 의 자식노드 .arrow.prev 노드의 left 속성을 18px 로 지정할 것. 
        $('.paddle-nav .arrow.prev').css('left', '18px');


        /*
        Quest 7.
        .paddle-nav 의 자식노드 .arrow.next 노드의 right 속성을 18px 로 지정합니다.
        */
        //Answer 7.
        $('.paddle-nav .arrow.next').css('right', '18px');

        /*
        Quest 8.
        .dot-nav 노드의 bottom 속성을 20px 으로 지정합니다.
        */
        //Answer 8.

        // .dot-nav 노드의 bottom 속성을 20px 으로 지정할 것.
        $('.dot-nav').css('bottom', '20px');

        /*
        Quest 9.
        0 값을 가지는 _id 변수를 선언하고 slideLeft 함수를 생성합니다.
        slideLeft 함수 실행시 .banner-container 를 자식노드 .banner-item 의 width 만큼 왼쪽으로 이동하도록 애니메이션을 작성합시다.
        (힌트. 함수 실행 시 _id 변수의 값을 -- 하여 감소시키고 위치값 계산)
        */
        //Answer 9.

        // 0 값을 가지는 _id 변수를 선언할 것.
        var _id = 0;
        // 애니메이션 작성
        // 실행해보면 트랜지션이 새로고침 후 첫번째 이미지에서 오른쪽으로 넘어갈 때 뚝 끊기듯이 진행된다.
        $('.banner-container').css('transition', 'all 300ms linear');
        // .banner-container의 css 스타일 속성중 right 속성이 존재하지 않아 버튼을 눌러야 추가가 되는 것을 확인함.
        // 버튼 클릭시 동일한 속성의 값에 새로운 값을 덮어 쓰기 때문에 right 속성의 기본값을 0으로 설정해둔다.
        $('.banner-container').css('right', 0);
        // slideLeft 함수를 생성할 것.
        // 함수 실행시 .banner-container 를 자식노드 .banner-item 의 width 만큼 왼쪽으로 이동하도록 할 것.
        function slideLeft(){
            // _id 변수의 값을 -- 하여 감소
            _id--;
            // 함수 실행시 감소한 _id의 값이 곱해지면 왼쪽으로 이동하게 된다.
            $('.banner-container').css('right', $banner_i.width() * _id);

            // 애니메이션 작성
            // 함수 내부에 작성하면 실행되지 않는다.
            // $('.banner-container').css('transition', 'all 500ms linear');
        }
        

        /*
        Quest 10.
        slideRight 함수를 생성하고 실행시 .banner-container 를 자식노드 .banner-item 의 width 만큼 오른쪽으로 이동하도록 애니메이션을 작성합시다.
        (힌트. 함수 실행 시 _id 변수의 값을 ++ 하여 증감시키고 위치값 계산)
        */
        //Answer 10.

        function slideRight(){
            // _id 변수의 값을 ++ 하여 증가
            _id++;
            // 함수 실행시 증가한 _id의 값이 곱해지면 오른쪽으로 이동하게 된다.
            $('.banner-container').css('right', $banner_i.width() * _id);
        }


        /*
        Quest 11.
        .arrow.prev 노드 클릭시 slideLeft, .arrow.next 노드 클릭시 slideRight 이벤트가 실행되도록 적용합니다.
        */
        //Answer 11.
        // .arrow.prev 노드 클릭시 slideLeft 이벤트 실행
        $('.arrow.prev').click(function(){
            slideLeft();
            // dotSelect 함수를 추가 하여 실행될 수 있도록 적용할 것.
            dotSelect();
            // paddleCheck 함수를 추가 하여 실행될 수 있도록 적용할 것.
            paddleCheck();
        });
        // .arrow.next 노드 클릭시 slideRight 이벤트 실행
        $('.arrow.next').click(function(){
            slideRight();
            // dotSelect 함수를 추가 하여 실행될 수 있도록 적용할 것.
            dotSelect();
            // paddleCheck 함수를 추가 하여 실행될 수 있도록 적용할 것.
            paddleCheck();
        });


        /*
        //Quest 12.
        dotSelect 함수를 생성하고 현재 보여지는 이미지의 순서에 따라 span( .dot-nav 노드의 자식요소 ) 에 ‘selected’ 클래스를 추가합니다.
        클래스 추가에 앞서 이전에 지정 된 span.selected 클래스가 있을 경우 삭제시킵니다.
        slideLeft, slideRight 함수에서 동작하는 애니메이션이 끝나는 함수(callback)에서 dotSelect 함수가 실행될 수 있도록 적용합니다.
        */
        //Answer 12.

        // dotSelect 함수를 생성할 것.
        function dotSelect(){
            // 앞서 이전에 지정 된 span.selected 클래스가 있을 경우 삭제할 것.
            $('nav.dot-nav span').removeClass('selected');
            // 보여지는 이미지의 순서에 따라 span( .dot-nav 노드의 자식요소 ) 에 ‘selected’ 클래스를 추가할 것.
            $('nav.dot-nav span').eq(_id).addClass('selected');
        }

        /*
        Quest 13.
        paddleCheck 함수를 생성하고 해당 조건문을 적용합니다.
        (1) _id 값이 0 일 경우, .arrow.prev 노드에 'disabled' 클래스를 추가합니다.
        (2) _id 값이 보여지는 이미지의 마지막에 해당되는 경우, arrow.next 노드에 'disabled' 클래스를 추가합니다.
        (3) _id 값이 0 이나 마지막이 아닐 경우, .arrow 노드의 'disabled' 클래스를 모두 삭제합니다.
        DOM이 준비되면 초기에 paddleCheck 함수를 실행하고, slideLeft, slideRight 함수에서 동작하는 애니메이션이 끝나는 시점(callback)에 paddleCheck 함수가 실행될 수 있도록 적용합니다.
        */
        //Answer 13.

        // paddleCheck 함수를 생성할 것.
        function paddleCheck(){
            // _id 값이 0 일 경우
            if(_id == 0){
                // .arrow.prev 노드에 'disabled' 클래스를 추가할 것.
                $('.arrow.prev').addClass('disabled');
            }
            // _id 값이 보여지는 이미지의 마지막에 해당되는 경우
            // $banner_i의 길이에서 1을 빼야 마지막 장에 해당하는 인덱스 값이 나온다.
            // 1을 빼지 않으면 이미지가 마지막임에도 버튼이 사라지지 않는다.
            else if(_id == $banner_i.length-1){
                // arrow.next 노드에 'disabled' 클래스를 추가할 것.
                $('.arrow.next').addClass('disabled');
            }
            // and 연산자 활용.
            // _id 값이 0 이나 마지막이 아닐 경우(두가지의 경우를 모두 포함해서 아닐때)
            else if(!(_id == 0 && _id == $banner_i.length-1)){
                // .arrow 노드의 'disabled' 클래스를 모두 삭제할 것.
                $('.arrow').removeClass('disabled');
            }
        }
        // DOM이 준비되면 초기에 paddleCheck 함수를 실행할 것.
        paddleCheck();

    });
})(jQuery);