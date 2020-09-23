var logStyle = "padding:2px;background:#fff;border-radius:4px;color:#222;";
(function($){
    $(document).ready(function(){
        //Quest 1.
        /*
        모든 li 요소들을 선택하고 addClass 메서드를 이용하여 active 클래스를 추가합니다.
        */
        //Answer 1.

        // 모든 li 요소들을 선택함
        var $li = $('li');

        // addClass 메서드를 이용하여 active 클래스를 추가한다.
        $li.addClass('active');

        //console.log($li);

        //Quest 2.
        /*
        문서내의 a 요소들 중 type-2 클래스를 가진 노드를 선택하고, 해당 요소에 current 클래스를 추가합니다.
        */
        //Answer 2.

        // a 요소들 중 type-2 클래스를 가진 노드를 선택
        var $type2 = $('a.type-2');

        // addClass 메서드를 이용하여 current 클래스를 추가한다.
        $type2.addClass('current');

        // console.log($type2);

        //Quest 3.
        /*
        문서내의 li 요소들 중 0 index 에 위치한 노드를 선택하고, 해당 요소에 zero 클래스를 추가합니다.
        */
        //Answer 3.

        // li 요소 선택
        var $li0 = $('li')

        // 0 index에 위치한 노드 선택
        $li0.eq(0);
        // addClass 메서드를 이용하여 zero 클래스를 추가한다.
        $li0.addClass('zero');

        // console.log($li0);


        //Quest 4.
        /*
        문서내의 a 요소들 중 span 요소를 포함하고 있는 노드를 선택하고, 해당 요소에 inner 클래스를 추가합니다.
        */
        //Answer 4.

        // a 요소 중 span 요소를 포함하고 있는 노드를 선택
        var $aspan = $('a:has(span)');
        // addClass 메서드를 이용하여 inner 클래스를 추가한다.
        $aspan.addClass('inner');

        // console.log($aspan);

        //Quest 5.
        /*
        문서내의 li 요소들 중 data-role 속성이 link 인 노드를 선택하고, 해당 요소에 role 클래스를 추가합니다.
        */
        //Answer 5.

        // 문서내의 li 요소들 중 data-role 속성이 link 인 노드를 선택
        var $link = $("li[data-role=link]");
        // addClass 메서드를 이용하여 role 클래스를 추가한다.
        $($link).addClass('role');
        // console.log($link);

        //Quest 6.
        /*
        radio-list 아이디를 가지고 있는 요소의 자식 노드들의 길이를 구하고 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 6.
        console.log("%c Answer 6.", logStyle);
        var $radio = $('#radio-list').children().length;
        console.log($radio); //3


        //Quest 7.
        /*
        type-2 클래스를 가지고 있는 요소의 부모 노드를 찾고, index 값을 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 7.
        console.log("%c Answer 7.", logStyle);

        var $Type2 = $('.type-2').parent();
        // console.log($Type2);

        var $Type2Index = $($Type2).index();
        console.log($Type2Index); //1


        //Quest 8.
        /*
        아이디가 radio-1 인 input radio 요소의 value 를 출력하는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 8.
        console.log("%c Answer 8.", logStyle);
        var $radio1 = $('input#radio-1[type=radio]').val();
        console.log($radio1); //1


        //Quest 9.
        /*
        ‘Menu 7’ 텍스트를 포함하고 있는 a 요소를 선택할 수 있는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 9.
        console.log("%c Answer 9.", logStyle);
        console.log($('a:contains("Menu 7")'));



        //Quest 10.
        /*
        아이디가 radio-2 가 아닌 input radio 요소의 부모 노드를 찾고, 자식 노드 label 요소에 emphasis 클래스를 추가합니다.
        */
        //Answer 10.

        var $input = $('input[type="radio"]:not("#radio-2")');
        $input.parent().children('label').addClass('emphasis');

        // console.log($input);


        //Quest 11.
        /*
        sub-last 클래스를 가진 li 요소를 찾고 부모 노드들 중 last 클래스를 가진 노드를 찾은 후,
        1) 자식노드 a 요소에 emphasis 클래스를 추가합니다.
        2) 모든 자식 노드 a 요소들에 bold 클래스를 추가합니다.
        */
        //Answer 11.
        
        var $sub = $('li.sub-last'),
            $subParent = $sub.parents('.last');

        $subParent.children('a').addClass('emphasis');
        $subParent.find('a').addClass('bold');

        // console.log($sub);
        // console.log($subParent);

    });
})(jQuery);