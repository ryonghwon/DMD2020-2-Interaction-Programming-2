(function($){
    $(document).ready(function(){
        /*
        Quest 1.
        .banner 노드의 CSS 속성 중 overflow 를 hidden 으로 변경합니다.
        */
        //Answer 1.
        var $banner = $('.banner');
        $banner.css('overflow', 'hidden');

        /*
        Quest 2.
        .banner-wrap 노드의 width 와 height 를 .banner 의 크기와 동일하게 적용합니다.
        */
        //Answer 2.
        var $bannerWrap = $('.banner-wrap');
        console.log($banner.height()); //380
        console.log($banner.width()); //1000

        // $bannerWrap.height(380);
        // $bannerWrap.width(1000);

        $bannerWrap.height($banner.height());
        $bannerWrap.width($banner.width());



        /*
        Quest 3.
        .banner-container 노드의 width 를 .banner-wrap 의 width x .banner-item 의 개수 의 너비만큼 계산하여 적용하고, height 는 100% 로 지정합니다.
        */
        //Answer 3.

        $bannerCon = $('.banner-container');

        var bannerWrapWidth = $bannerWrap.width();
        $bannerCon.width(bannerWrapWidth * $('.banner-item').length);
        $bannerCon.height('100%');


        /*
        Quest 4.
        .banner-item 노드의 float 속성을 left 로 변경하고, width 를 .banner-wrap 의 width 와 동일하게, height 를 100% 로 지정합니다.
        */
        //Answer 4.
        var $bannerItem = $('.banner-item');
        $bannerItem.css('float', 'left');
        $bannerItem.width($bannerWrap.width());
        $bannerItem.height('100%');

        /*
        Quest 5.
        .banner-item 의 자식노드 img 요소의 width 를 100% 로 지정합니다.
        */
        //Answer 5.
        $bannerItemImg = $('.banner-item img').width('100%');
        // console.log($('.banner-item img')); // 확인.


        /*
        Quest 6.
        .paddle-nav 의 자식노드 .arrow.prev 노드의 left 속성을 18px 로 지정합니다.
        */
        //Answer 6.
        $('.paddle-nav .arrow.prev').css('left','18px');



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
        $('.dot-nav').css('bottom', '20px');
        

        /*
        Quest 9.
        0 값을 가지는 _id 변수를 선언하고 slideLeft 함수를 생성합니다.
        slideLeft 함수 실행시 .banner-container 를 자식노드 .banner-item 의 width 만큼 왼쪽으로 이동하도록 애니메이션을 작성합시다.
        (힌트. 함수 실행 시 _id 변수의 값을 -- 하여 감소시키고 위치값 계산)
        */
        //Answer 9.

        var _id = 0;
        $bannerItemWidth = $('.banner-item').width();

        function slideLeft(){
            _id--;
            // $('.banner-container').css('width', '.banner-item' * _id);
            $('.banner-container').css('left', $bannerItemWidth * _id * -1);
            // _id--;
        }


        /*
        Quest 10.
        slideRight 함수를 생성하고 실행시 .banner-container 를 자식노드 .banner-item 의 width 만큼 오른쪽으로 이동하도록 애니메이션을 작성합시다.
        (힌트. 함수 실행 시 _id 변수의 값을 ++ 하여 증감시키고 위치값 계산)
        */
        //Answer 10.

        function slideRight(){
            _id++;
            $('.banner-container').css('left', $bannerItemWidth * _id * -1);
        }


        /*
        Quest 11.
        .arrow.prev 노드 클릭시 slideLeft, .arrow.next 노드 클릭시 slideRight 이벤트가 실행되도록 적용합니다.
        */
        //Answer 11.
        $('.prev').click(function(){
            slideLeft();
            dotSelect();
            paddleCheck();
        });
        $('.next').click(function(){
            slideRight();
            dotSelect();
            paddleCheck();
        })


        /*
        //Quest 12.
        dotSelect 함수를 생성하고 현재 보여지는 이미지의 순서에 따라 span( .dot-nav 노드의 자식요소 ) 에 ‘selected’ 클래스를 추가합니다.
        클래스 추가에 앞서 이전에 지정 된 span.selected 클래스가 있을 경우 삭제시킵니다.
        slideLeft, slideRight 함수에서 동작하는 애니메이션이 끝나는 함수(callback)에서 dotSelect 함수가 실행될 수 있도록 적용합니다.
        */
        //Answer 12.

        var dotNavSpan = $('.dot-nav span');
        function dotSelect(){
            if(dotNavSpan.hasClass('selected')){
                dotNavSpan.removeClass('selected');
            }
            dotNavSpan.eq(_id).addClass('selected');
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
        paddleCheck();
        function paddleCheck(){
            if(_id == 0){
                $('.prev').addClass('disabled');
            }else if(_id == 4){
                $('.next').addClass('disabled');
            }else{
                $('.arrow').removeClass('disabled');
            }
        }


    });
})(jQuery);