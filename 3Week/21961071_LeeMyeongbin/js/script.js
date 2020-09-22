var logStyle = "padding:2px;background:#fff;border-radius:4px;color:#222;";
(function($){
    $(document).ready(function(){
        //Quest 1.
        /*
        모든 li 요소들을 선택하고 addClass 메서드를 이용하여 active 클래스를 추가합니다.
        */
        //Answer 1.

        var $li = $('li');
        $li.addClass('active');
        // console.log($li);

        //Quest 2.
        /*
        문서내의 a 요소들 중 type-2 클래스를 가진 노드를 선택하고, 해당 요소에 current 클래스를 추가합니다.
        */
        //Answer 2.

        var $aHasType_2 = $('a.type-2');
        $aHasType_2.addClass('current');
        // console.log($aHasType_2);

        //Quest 3.
        /*
        문서내의 li 요소들 중 0 index 에 위치한 노드를 선택하고, 해당 요소에 zero 클래스를 추가합니다.
        */
        //Answer 3.

        console.log($li.eq(0));
        $li.eq(0).addClass('zero');
        // console.log($li[0]);

        //Quest 4.
        /*
        문서내의 a 요소들 중 span 요소를 포함하고 있는 노드를 선택하고, 해당 요소에 inner 클래스를 추가합니다.
        */
        //Answer 4.

        var $aHasSpan = $('a:has(span)');
        $aHasSpan.addClass('inner');
        // console.log($aHasSpan); 

        //Quest 5.
        /*
        문서내의 li 요소들 중 data-role 속성이 link 인 노드를 선택하고, 해당 요소에 role 클래스를 추가합니다.
        */
        //Answer 5.

        // data-role : jQuery Mobile 의 기본 구성으로 한 사용자 정의 속성 / 자바 스크립트 실행 시 사용
        // page - 페이지 영역 설정
        // header - 헤더 영역 정의
        // content - 컨텐트 영역 정의
        // footer - 푸터 영역 정의
        // navbar - 네비게이션 영역 정의
        // button - 버튼 컨트롤
        // list view - 리스트 컨트롤
        // filed contain - 폼 간 필드 영역 구분
        // control group - 버튼 그룹 영역 정의
        // slider - 플립 토글 컨트롤
        // list-divider - 리스트 디바이더 영역
        // collapsible-collapsible - 블록 정의
        // collapsible-set-collapsible - 블록 그룹 정의

        var $liHaslink = $('li[data-role=link]');
        $liHaslink.addClass('role');
        // console.log($liHaslink);

        //Quest 6.
        /*
        radio-list 아이디를 가지고 있는 요소의 자식 노드들의 길이를 구하고 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 6.

        console.log("%c Answer 6.", logStyle);

        var $radio_listEl = $('div#radio-list').children().length;
        console.log($radio_listEl); // 3

        //Quest 7.
        /*
        type-2 클래스를 가지고 있는 요소의 부모 노드를 찾고, index 값을 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 7.

        console.log("%c Answer 7.", logStyle);

        var $type_2 = $('.type-2').parent();
        console.log($type_2);
        console.log(
            $type_2.index()
        ); // 1

        //Quest 8.
        /*
        아이디가 radio-1 인 input radio 요소의 value 를 출력하는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 8.
        console.log("%c Answer 8.", logStyle);
        
        // var $radio_1 = $()

        //Quest 9.
        /*
        ‘Menu 7’ 텍스트를 포함하고 있는 a 요소를 선택할 수 있는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 9.
        console.log("%c Answer 9.", logStyle);



        //Quest 10.
        /*
        아이디가 radio-2 가 아닌 input radio 요소의 부모 노드를 찾고, 자식 노드 label 요소에 emphasis 클래스를 추가합니다.
        */
        //Answer 10.

        var $notRadio_2 = $('input:not(#radio-2)').parent();
        // $notRadio_2.children(label).addClass('emphasis');
        $notRadio_2.children('label').addClass('emphasis');
        // console.log($notRadio_2.children('label'));

        //Quest 11.
        /*
        sub-last 클래스를 가진 li 요소를 찾고 부모 노드들 중 last 클래스를 가진 노드를 찾은 후,
        1) 자식노드 a 요소에 emphasis 클래스를 추가합니다.
        2) 모든 자식 노드 a 요소들에 bold 클래스를 추가합니다.
        */
        //Answer 11.
        
        // var $liSubLastEl = $('li.sub-last').parent('.last');
        var $liSubLastEl = $('li.sub-last').parents('.last');
        $liSubLastEl.children('a').addClass('emphasis');
        $liSubLastEl.children().addClass('bold');
        // console.log($liSubLastEl.children('a'));

    });
})(jQuery);