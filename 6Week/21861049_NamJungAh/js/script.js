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
        var $bannnerW = $('.banner').width();
        //console.log($banWidth);
        var $bannnerH = $('.banner').height();
        //console.log($banHeight);
        
        var $bannerWrap = $('.banner-wrap');
        //console.log($bannerWrap);

        $bannerWrap.css('width', $bannnerW);
        $bannerWrap.css('height', $bannnerH);
        //console.log($bannerWrap.width(), $bannerWrap.height());

        /*
        Quest 3.
        .banner-container 노드의 width 를 .banner-wrap 의 width x .banner-item 의 개수 의 너비만큼 계산하여 적용하고, height 는 100% 로 지정합니다.
        */
        //Answer 3.
        var $bannercontainer = $(".banner-container"); 
        //console.log($bannercontainer.width());; //1000
        
        var $bannerItemCount = $('.banner-item').length;
        //console.log($bannerItem.length); // 5개
       
        var $Q3 = $bannerWrap.width() * $bannerItemCount;
        //console.log($Q3); //5000

        $bannercontainer.width($Q3);
        $bannercontainer.height('100%');

        /*
        Quest 4.
        .banner-item 노드의 float 속성을 left 로 변경하고, width 를 .banner-wrap 의 width 와 동일하게, height 를 100% 로 지정합니다.
        */
        //Answer 4.
        var $bannerItem = $('.banner-item');
        //console.log($bannerItem);

        //$bannerItem.css('float', 'left');
        //$bannerItem.css('width', $bannerWrap.width());
        //$bannerItem.css('height', '100%');
        $bannerItem.css({
            'float' : 'left', 
            'width' : $bannerWrap.width(), 
            'height' : '100%' 
        });

        /*
        Quest 5.
        .banner-item 의 자식노드 img 요소의 width 를 100% 로 지정합니다.
        */
        //Answer 5.
        var $bannerItemImg = $('.banner-item img');
        //console.log($bannerItemImg);
        $bannerItemImg.css('width', '100%');

        /*
        Quest 6.
        .paddle-nav 의 자식노드 .arrow.prev 노드의 left 속성을 18px 로 지정합니다.
        */
        //Answer 6.
        //console.log($('.paddle-nav .arrow.prev'));
        var leftButton = $('.paddle-nav .arrow.prev');
        //console.log(leftButton.css('left'));

        leftButton.css('left', '18px');
        //console.log(leftButton.css('left'));

        /*
        Quest 7.
        .paddle-nav 의 자식노드 .arrow.next 노드의 right 속성을 18px 로 지정합니다.
        */
        //Answer 7.

        //console.log($('.paddle-nav .arrow.prev'));
        var rightButton = $('.paddle-nav .arrow.next');
        
        rightButton.css('right', '18px');
        
        /*
        Quest 8.
        .dot-nav 노드의 bottom 속성을 20px 으로 지정합니다.
        */
        //Answer 8.
        //console.log($('.dot-nav'));
        var $dotNav = $('.dot-nav');
        $dotNav.css('bottom', '20px');

        /*
        Quest 9.
        0 값을 가지는 _id 변수를 선언하고 slideLeft 함수를 생성합니다.
        slideLeft 함수 실행시 .banner-container 를 자식노드 .banner-item 의 width 만큼 왼쪽으로 이동하도록 애니메이션을 작성합시다.
        (힌트. 함수 실행 시 _id 변수의 값을 -- 하여 감소시키고 위치값 계산)
        */
        //Answer 9.
        var _id = 0;
        var $bannerItemWidth = $('.banner-item').width();
        //console.log($bannerItemWidth); //1000

        //rightButton.css("display", "none");
        //console.log($bannerItemImg.length);

        // for(var i=$bannerItemImg.length; i>0; i--){
        //     function slideLeft(){
        //         $bannercontainer.css('left', $bannerItemWidth * _id)
        //         _id--;
        //         console.log("click");
        //     }
        // }

        // function slideLeft(){
        //     // for(var i=$bannerItemImg.length; i>0; i--){
        //     //     $bannercontainer.css('left', $bannerItemWidth * _id)
        //     //     _id--;
        //     //     console.log("click");
        //     // }
        //     $bannercontainer.css('left', $bannerItemWidth * _id)
        //     _id--;
        //     console.log("click");
        // }

        function slideLeft(){
            _id--;
            $bannercontainer.css('left', $bannerItemWidth * _id)
            //console.log("click");
        }
        
        // $('.arrow.prev').click(function(){
        //     slideLeft();
        // });


        /*
        Quest 10.
        slideRight 함수를 생성하고 실행시 .banner-container 를 자식노드 .banner-item 의 width 만큼 오른쪽으로 이동하도록 애니메이션을 작성합시다.
        (힌트. 함수 실행 시 _id 변수의 값을 ++ 하여 증감시키고 위치값 계산)
        */
        //Answer 10.

        function slideRight(){
            _id++;
            $bannercontainer.css('right', $bannerItemWidth * _id)
            //console.log("click");
        };

        /*
        Quest 11.
        .arrow.prev 노드 클릭시 slideLeft, .arrow.next 노드 클릭시 slideRight 이벤트가 실행되도록 적용합니다.
        */
        //Answer 11.

        $('.arrow.prev').click(function(){
            slideLeft();
        });

        $('.arrow.next').click(function(){
            slideRight();
        });


        /*
        //Quest 12.
        dotSelect 함수를 생성하고 현재 보여지는 이미지의 순서에 따라 span( .dot-nav 노드의 자식요소 ) 에 ‘selected’ 클래스를 추가합니다.
        클래스 추가에 앞서 이전에 지정 된 span.selected 클래스가 있을 경우 삭제시킵니다.
        slideLeft, slideRight 함수에서 동작하는 애니메이션이 끝나는 함수(callback)에서 dotSelect 함수가 실행될 수 있도록 적용합니다.
        */
        //Answer 12.
        var $dotNavSpan = $(".dot-nav span");
        //console.log($dotNavSpan);
        
        function dotSelect(){
            if($dotNavSpan.hasClass('selected')){
                $dotNavSpan.removeClass('selected');
            }
            $dotNavSpan.eq(_id).addClass('selected');
        }
        
        $('.arrow.prev').click(function(){
            dotSelect();
            paddleCheck();
        });

        $('.arrow.next').click(function(){
            dotSelect();
            paddleCheck();
        });

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
                $('.arrow.prev').addClass("disabled");
            }else if(_id == $bannerItemCount -1){
                $('arrow.next').addClass("disabled");
            }else{
                $(".arrow").removeClass('disabled');
            };
        };

    });
})(jQuery);