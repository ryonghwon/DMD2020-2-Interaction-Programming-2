var logStyle = "padding:2px;background:#fff;border-radius:4px;color:#222;";
(function($){
    $(document).ready(function(){
        //Quest 1.
        /*
        모든 li 요소들을 선택하고 addClass 메서드를 이용하여 active 클래스를 추가합니다.
        */
        //Answer 1.
        var $li = $("li");
        //console.log($li);
        $li.addClass("active");
        //console.log($li);
        
        //Quest 2.
        /*
        문서내의 a 요소들 중 type-2 클래스를 가진 노드를 선택하고, 해당 요소에 current 클래스를 추가합니다.
        */
        //Answer 2.
        var $aType = $("a.type-2");
        //console.log($aType);
        $aType.addClass("current");
       

        //Quest 3.
        /*
        문서내의 li 요소들 중 0 index 에 위치한 노드를 선택하고, 해당 요소에 zero 클래스를 추가합니다.
        */
        //Answer 3.
        var $liIndex = $("li").eq(0);
        //console.log($li_index[0]);
        //console.log($liIndex);

        //$liIndex.addClass("zero"); // 제이쿼리를 통해 css 적용하기
        $liIndex[0].classList.add("zero"); // 기본 바닐라 자바스크립트로 css 적용하기

        //Quest 4.
        /*
        문서내의 a 요소들 중 span 요소를 포함하고 있는 노드를 선택하고, 해당 요소에 inner 클래스를 추가합니다.
        */
        //Answer 4.
        
        //var $aSpan = $("a:has(span)");
        var $aSpan = $('a').has('span');
        $aSpan.addClass("inner");
        

        //Quest 5.
        /*
        문서내의 li 요소들 중 data-role 속성이 link 인 노드를 선택하고, 해당 요소에 role 클래스를 추가합니다.
        */
        //Answer 5.
        var $liData = $('li[data-role="link"]');
        //console.log($liData);
        $liData.addClass("role");

        //Quest 6.
        /*
        radio-list 아이디를 가지고 있는 요소의 자식 노드들의 길이를 구하고 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 6.
        var $RadioList = $("#radio-list");
        //console.log($RadioList);
        //console.log($RadioList.children().length);
        var $RadioListChild = $RadioList.children().length;

        console.log("%c Answer 6.", logStyle);
        console.log($RadioListChild);


        //Quest 7.
        /*
        type-2 클래스를 가지고 있는 요소의 부모 노드를 찾고, index 값을 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 7.
        var $type2Parent = $(".type-2").parent();
        
        console.log("%c Answer 7.", logStyle);
        console.log($type2Parent.index());

        //Quest 8.
        /*
        아이디가 radio-1 인 input radio 요소의 value 를 출력하는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 8.
        console.log("%c Answer 8.", logStyle);
        
        var $radio1 = $("#radio-1")
        
        //1번째
        console.log($radio1.val());
        //2번째
        console.log(
            $("#radio-list")
                .find('.radio-item #radio-1').val()
        );
        //3번째
        console.log(
            $("input[id='radio-1']").val()
        );


        //Quest 9.
        /*
        ‘Menu 7’ 텍스트를 포함하고 있는 a 요소를 선택할 수 있는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 9.
        console.log("%c Answer 9.", logStyle);
        //모르겠습니다..


        //Quest 10.
        /*
        아이디가 radio-2 가 아닌 input radio 요소의 부모 노드를 찾고, 자식 노드 label 요소에 emphasis 클래스를 추가합니다.
        */
        //Answer 10.
        //console.log($("input").not("#radio-2").parent());
        var $not2Parent = $("input").not("#radio-2").parent();
        $not2Parent.children("label").addClass("emphasis");
        
        //Quest 11.
        /*
        sub-last 클래스를 가진 li 요소를 찾고 부모 노드들 중 last 클래스를 가진 노드를 찾은 후,
        1) 자식노드 a 요소에 emphasis 클래스를 추가합니다.
        2) 모든 자식 노드 a 요소들에 bold 클래스를 추가합니다.
        */
        //Answer 11.

        //sub-last 클래스를 가진 li 요소
        var $subLast = $("li.sub-last")
        //부모 노드들 중 last 클래스를 가진 노드
        var $subLastParent = $subLast.parents(".last");
        
        //console.log($subLast);
        //console.log($subLast.parents(".last"));

        console.log($subLastParent.children("a").addClass("emphasis"));
        console.log($subLast.children("a").addClass("bold"));

    });
})(jQuery);