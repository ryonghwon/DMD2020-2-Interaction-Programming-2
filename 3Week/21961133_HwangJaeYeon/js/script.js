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


        //Quest 2.
        /*
        문서내의 a 요소들 중 type-2 클래스를 가진 노드를 선택하고, 해당 요소에 current 클래스를 추가합니다.
        */
        //Answer 2.
        var $aType = $('a.type-2');
        $aType.addClass('current');

        //Quest 3.
        /*
        문서내의 li 요소들 중 0 index 에 위치한 노드를 선택하고, 해당 요소에 zero 클래스를 추가합니다.
        */
        //Answer 3.
        $li.eq(0).addClass('zero');

        //Quest 4.
        /*
        문서내의 a 요소들 중 span 요소를 포함하고 있는 노드를 선택하고, 해당 요소에 inner 클래스를 추가합니다.
        */
        //Answer 4.
        var $aHasSpan = $('a:has(span)');
        $aHasSpan.addClass('inner');

        //Quest 5.
        /*
        문서내의 li 요소들 중 data-role 속성이 link 인 노드를 선택하고, 해당 요소에 role 클래스를 추가합니다.
        */
        //Answer 5.
        var $liLink = $('li[data-role="link"]');
        $liLink.addClass('role');

        //Quest 6.
        /*
        radio-list 아이디를 가지고 있는 요소의 자식 노드들의 길이를 구하고 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 6.
        console.log("%c Answer 6.", logStyle);
        var $RadioList = $('#radio-list').children().length;
        console.log($RadioList);

        //Quest 7.
        /*
        type-2 클래스를 가지고 있는 요소의 부모 노드를 찾고, index 값을 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 7.
        console.log("%c Answer 7.", logStyle);
        var $Type2 = $('.type-2').parent();
        console.log($Type2.index());


        //Quest 8.
        /*
        아이디가 radio-1 인 input radio 요소의 value 를 출력하는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 8.
        console.log("%c Answer 8.", logStyle);
        /* 오류난 코드 입니다.
        var $Radio1 = $('#radio-1').inputradio().value;
        console.log($Radio1);
        */

        /* 두번째 오류 코드 입니다
        var $Radio1 = $('input[type="radio"]').value();
        console.log($Radio1);
        */

        var $Radio1 = $('#radio-1').val();
        console.log($Radio1);

        //Quest 9.
        /*
        ‘Menu 7’ 텍스트를 포함하고 있는 a 요소를 선택할 수 있는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 9.
        console.log("%c Answer 9.", logStyle);
        var $menu7 = $('a:contains("Menu 7")');
        console.log($menu7);


        //Quest 10.
        /*
        아이디가 radio-2 가 아닌 input radio 요소의 부모 노드를 찾고, 자식 노드 label 요소에 emphasis 클래스를 추가합니다.
        */
        //Answer 10.
        var $Nradio2 = $('radio:not("radio-2")');
        //console.log($Nradio2);
        var $NradioP = $Nradio2.parent();
        $NradioP.children('label').addClass('emphasis');

        //위 코드를 웹상에서 확인했을때 emphasis속성이 radio-1과 radio-3에 적용되어야 하는데 적용이 안됩니다...ㅠㅠ
        //어디에서 문제가 있는지 알려주셨으면 좋겠습니다... 해결못해 죄송합니다..

        //Quest 11.
        /*
        sub-last 클래스를 가진 li 요소를 찾고 부모 노드들 중 last 클래스를 가진 노드를 찾은 후,
        1) 자식노드 a 요소에 emphasis 클래스를 추가합니다.
        2) 모든 자식 노드 a 요소들에 bold 클래스를 추가합니다.
        */
        //Answer 11.
        var $subL = $('li.sub-last').parent('.last');
        console.log($subL);
        $($subL).children('a').addClass('emphasis');
        $($subL).find('a').addClass('bold');
    });
})(jQuery);