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
        var $aType2 = $('a.type-2');
        $aType2.addClass('current');


        //Quest 3.
        /*
        문서내의 li 요소들 중 0 index 에 위치한 노드를 선택하고, 해당 요소에 zero 클래스를 추가합니다.
        */
        //Answer 3.
        var $liFirst = $li.first();
        $liFirst = $li.eq(0);
        $liFirst = $('li:first');
        $liFirst.addClass('zero');


        //Quest 4.
        /*
        문서내의 a 요소들 중 span 요소를 포함하고 있는 노드를 선택하고, 해당 요소에 inner 클래스를 추가합니다.
        */
        //Answer 4.
        var $aHasSpan = $('a:has(span)');
        $aHasSpan = $('a').has('span');
        $aHasSpan.addClass('inner');


        //Quest 5.
        /*
        문서내의 li 요소들 중 data-role 속성이 link 인 노드를 선택하고, 해당 요소에 role 클래스를 추가합니다.
        */
        //Answer 5.
        var $liLink = $('li[data-role=link]');
        $liLink.addClass('role');


        //Quest 6.
        /*
        radio-list 아이디를 가지고 있는 요소의 자식 노드들의 길이를 구하고 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 6.
        console.log("%c Answer 6.", logStyle);
        var $radioList = $('#radio-list');
        var $radioItem = $radioList.children(); // 대상 - 바로 아래의 자식요소들만.
        $radioItem = $radioList.find('.radio-item'); // 대상 - 자식요소들 모두.
        var radioItemMax = $radioItem.length;
        console.log(radioItemMax);

        // console.log($radioList.children().length);

        //Quest 7.
        /*
        type-2 클래스를 가지고 있는 요소의 부모 노드를 찾고, index 값을 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 7.
        console.log("%c Answer 7.", logStyle);
        var $type2 = $('.type-2');
        var $type2Parent = $type2.parent();
        var type2ParentIndex = $type2Parent.index();
        console.log(type2ParentIndex);


        //Quest 8.
        /*
        아이디가 radio-1 인 input radio 요소의 value 를 출력하는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 8.
        console.log("%c Answer 8.", logStyle);
        var $inputRadio1 = $('input#radio-1');
        // value 를 찾는 방법.
        // .val();
        var inputRadio1Value = $inputRadio1.val();
        // 속성을 찾는 방법. .attr('value');
        inputRadio1Value = $inputRadio1.attr('value');
        console.log(inputRadio1Value);


        //Quest 9.
        /*
        ‘Menu 7’ 텍스트를 포함하고 있는 a 요소를 선택할 수 있는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 9.
        console.log("%c Answer 9.", logStyle);
        // :contains(내용)
        var $aMenu7 = $('a:contains(Menu 7)');
        $aMenu7 = $('ul').children().eq(6).children('a');
        $aMenu7 = $('ul > li:nth-child(7) > a');
        $aMenu7 = $('ul li:nth-child(7)').children('a');
        $aMenu7 = $('ul').find('li:nth-child(7) > a');
        console.log($aMenu7);


        //Quest 10.
        /*
        아이디가 radio-2 가 아닌 input radio 요소의 부모 노드를 찾고, 자식 노드 label 요소에 emphasis 클래스를 추가합니다.
        */
        //Answer 10.
        // not();
        var $inputRadio = $('input[type=radio]');
        var $inputNotRadio2 = $inputRadio.not('#radio-2');
        $inputNotRadio2 = $('input[type=radio]:not(#radio-2)');
        var $inputParent = $inputNotRadio2.parent();
        var $label = $inputParent.find('label');
        $label.addClass('emphasis');


        //Quest 11.
        /*
        sub-last 클래스를 가진 li 요소를 찾고 부모 노드들 중 last 클래스를 가진 노드를 찾은 후,
        1) 자식노드 a 요소에 emphasis 클래스를 추가합니다.
        2) 모든 자식 노드 a 요소들에 bold 클래스를 추가합니다.
        */
        //Answer 11.
        var $liSubLast = $('li.sub-last');
        var $liSubLastParents = $liSubLast.parents('.last');
        // console.log($liSubLastParents);
        // 1)
        var $a = $liSubLastParents.children('a');
        $a.addClass('emphasis');
        // 2)
        $a = $liSubLastParents.find('a');
        $a.addClass('bold');
    });
})(jQuery);