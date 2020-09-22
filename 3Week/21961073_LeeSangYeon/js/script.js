var logStyle = "padding:2px;background:#fff;border-radius:4px;color:#222;";
(function($){
    $(document).ready(function(){
        //Quest 1.
        /*
        모든 li 요소들을 선택하고 addClass 메서드를 이용하여 active 클래스를 추가합니다.
        */
        //Answer 1.

        // 모든 li 요소들을 선택
        var $li = $('li'); 

        // addClass 메서드를 이용하여 active 클래스를 추가
        $li.addClass('active'); 

        // console.log($li);
        

        //Quest 2.
        /*
        문서내의 a 요소들 중 type-2 클래스를 가진 노드를 선택하고, 해당 요소에 current 클래스를 추가합니다.
        */
        //Answer 2.

        // 문서 내의 a 요소들 중 type-2 클래스를 가진 노드를 선택
        var $aType2 =$('a.type-2'); 

        // addClass - 선택한 요소에 class를 추가할 수 있다.
        // addClass를 사용하여 해당 요소에 current 클래스를 추가
        $aType2.addClass('current'); 

        //Quest 3.
        /*
        문서내의 li 요소들 중 0 index 에 위치한 노드를 선택하고, 해당 요소에 zero 클래스를 추가합니다.
        */

        //Answer 3.
        var $liIndex = $('li'); // 문서내의 li 요소들 중 0 index 에 위치한 노드를 선택
        // eq - 변수의 자식 요소들 중 n 번째 요소를 선택.
        $liIndex.eq(0);
        $liIndex.eq(0).addClass('zero'); // 해당 요소에 zero 클래스를 추가
        //console.log($liIndex);

        //Quest 4.
        /*
        문서내의 a 요소들 중 span 요소를 포함하고 있는 노드를 선택하고, 
        해당 요소에 inner 클래스를 추가합니다.
        */
        //Answer 4.
        

        // 문서내의 a 요소들 중 span 요소를 포함하고 있는 노드를 선택
        var $a_Span = $('a:has(span)');
        // 해당 요소에 inner 클래스를 추가
        $a_Span.addClass('inner');

        //var $a_Span2 = $('a').has('span');
        //$a_Span2.addClass('inner');

        console.log($a_Span);


        //Quest 5.
        /*
        문서내의 li 요소들 중 data-role 속성이 link 인 노드를 선택하고, 해당 요소에 role 클래스를 추가합니다.
        */
        //Answer 5.

        // Pseudo Selector - 유사 선택자. - 사용 -  var $aHash = $('a[href="#"]');
        // 기본 선택자 방식이 아닌 필터링을 통한 선택자 찾는 방법.
        //문서내의 li 요소들 중 data-role 속성이 link 인 노드를 선택
        var $liLink = $('li[data-role=link]');

        //해당 요소에 role 클래스를 추가
        $liLink.addClass('role');
        console.log($liLink);
        

        //Quest 6.
        /*
        radio-list 아이디를 가지고 있는 요소의 자식 노드들의 길이를 구하고 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 6.

        console.log("%c Answer 6.", logStyle);
        var $radioLis = $('#radio-list').children().length;
        console.log($radioLis);

        //Quest 7.
        /*
        type-2 클래스를 가지고 있는 요소의 부모 노드를 찾고, index 값을 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 7.
        console.log("%c Answer 7.", logStyle);
        var $type2 = $('.type-2').parent();
        console.log($type2); 
        var $type2Index = $($type2).index();
        console.log($type2Index); // 1

        //Quest 8.
        /*
        아이디가 radio-1 인 input radio 요소의 value 를 출력하는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 8.
        console.log("%c Answer 8.", logStyle);
        var $radio1 = $('input#radio-1[type=radio]').val();
        console.log($radio1); // 1


        //Quest 9.
        /*
        ‘Menu 7’ 텍스트를 포함하고 있는 a 요소를 선택할 수 있는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 9.
        console.log("%c Answer 9.", logStyle);
        // 어둠의 경로... 구글의 힘을 빌려 풀어보겠습니다.
        // :contains()는 특정 문자열을 포함한 요소를 선택하는 선택자
        var $aManu7  = $('a:contains("Menu 7")');
        console.log($aManu7);




        //Quest 10.
        /*
        아이디가 radio-2 가 아닌 input radio 요소의 부모 노드를 찾고, 자식 노드 label 요소에 emphasis 클래스를 추가합니다.
        */
        //Answer 10.
        var $notRadio2 = $('input:not(#radio-2)').parent();
        $notRadio2.children('label').addClass('emphasis');
        console.log($notRadio2);


        //Quest 11.
        /*
        sub-last 클래스를 가진 li 요소를 찾고 부모 노드들 중 last 클래스를 가진 노드를 찾은 후,
        1) 자식노드 a 요소에 emphasis 클래스를 추가합니다.
        2) 모든 자식 노드 a 요소들에 bold 클래스를 추가합니다.
        */
        //Answer 11.
        var $SubLastLi = $('li.sub-last').parents('.last');
        $SubLastLi.children('a').addClass('emphasis');
        //모든 자식 노드 a 요소들에 bold 클래스를 추가 
        $SubLastLi.find('a').addClass('bold');
        console.log($SubLastLi);
        

    });
})(jQuery);