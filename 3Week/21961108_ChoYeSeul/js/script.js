var logStyle = "padding:2px;background:#fff;border-radius:4px;color:#222;";
(function($){
    $(document).ready(function(){
        //Quest 1.
        /*
        모든 li 요소들을 선택하고 addClass 메서드를 이용하여 active 클래스를 추가합니다.
        */
        //Answer 1.

        // 모든 li 요소들 선택
        // var $li = $('li');

        // addClass 메서드를 이용해 active 클래스 추가
        // $li.addClass('active');

        // 아래와 같이 요약 가능.
        $('li').addClass('active');

        //Quest 2.
        /*
        문서내의 a 요소들 중 type-2 클래스를 가진 노드를 선택하고, 해당 요소에 current 클래스를 추가합니다.
        */
        //Answer 2.

        // 문서내의 a 요소들 중 type-2 클래스를 가진 노드 선택.
        // var $aType2 = $('a.type-2');

        // 선택이 잘 되었는지 혹시몰라 확인
        // console.log($aType2);

        // 해당 요소에 current 클래스 추가
        // addClass를 사용하였음
        // $aType2.addClass('current');

        // 아래와 같이 요약 가능.
        $('a.type-2').addClass('current');

        //Quest 3.
        /*
        문서내의 li 요소들 중 0 index 에 위치한 노드를 선택하고, 해당 요소에 zero 클래스를 추가합니다.
        */
        //Answer 3.
        
        // 실패한 식
        // var $li = $('li');
        // var $liIndex = $li[0];
        // console.log($liIndex);
        // $liIndex.addClass('zero');

        // li요소를 불러온다.
        // var $li = $('li');

        // li 요소중 0index에 위치한 노드를 선택한다.
        // $li.eq(0);

        // 해당 요소에 zero클래스를 추가한다.
        // $li.eq(0).addClass('zero');

        // 아래와 같이 요약 가능
        $('li').eq(0).addClass('zero');


        //Quest 4.
        /*
        문서내의 a 요소들 중 span 요소를 포함하고 있는 노드를 선택하고, 해당 요소에 inner 클래스를 추가합니다.
        */
        //Answer 4.

        // 문서 내의 a 요소들 중 span 요소를 포함하고 있는 노드를 선택한다.
        // var $aSpan = $('a:has(span)');
        
        // 맞게 불러와졌는지 한번 확인한다.
        // console.log($aSpan);

        // 해당 요소에 inner 클래스를 추가한다.
        // $aSpan.addClass('inner');

        // 아래와 같이 요약 가능
        $('a:has(span)').addClass('inner');

        //Quest 5.
        /*
        문서내의 li 요소들 중 data-role 속성이 link 인 노드를 선택하고, 해당 요소에 role 클래스를 추가합니다.
        */
        //Answer 5.

        // 문서내의 li요소들 중 data-role 속성이 link인 노드를 선택한다.
        // 기본 선택자 방식이 아닌 필터링을 통한 선택자 찾는 방법 사용.
        // var $liLink = $('li[data-role=link]');

        // 해당 요소에 role 클래스를 추가한다
        // $liLink.addClass('role');

        // 아래와 같이 요약 가능
        $('li[data-role=link]').addClass('role');

        //Quest 6.
        /*
        radio-list 아이디를 가지고 있는 요소의 자식 노드들의 길이를 구하고 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 6.
        console.log("%c Answer 6.", logStyle);

        // radio-list 아이디를 가지고 있는 요소의 자식 노드들의 길이를 구한다.
        var $RadioList = $('#radio-list').children().length;

        // console.log 메서드를 이용해 출력한다.
        console.log($RadioList);

        // 아래와 같이 입력 가능
        console.log(
            $('#radio-list').children().length
        );


        //Quest 7.
        /*
        type-2 클래스를 가지고 있는 요소의 부모 노드를 찾고, index 값을 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 7.
        console.log("%c Answer 7.", logStyle);

        // type-2 클래스를 가지고 있는 요소의 부모 노드를 찾는다.
        var $type2Parent = $('type-2').parent();

        // 그 인덱스 값을 찾는다
        var $type2ParentIndex = $('type2Parent').index();

        // console.log 메서드를 이용해 출력한다.
        console.log($type2ParentIndex);




        //Quest 8.
        /*
        아이디가 radio-1 인 input radio 요소의 value 를 출력하는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 8.
        // console.log("%c Answer 8.", logStyle);

        // 실패한 식
        // 아이디 radio-1을 불러온다
        // var $Radio1 = $('radio-1');
        // console.log(
        // $Radio1.input('radio').value()
        // );

        // value...를...움오...


        // 실패한 식
        // var $Radio1 = $('radio-1');
        // var $Radio1Input = $('$Radio1[input=radio]');
        // console.log($Radio1Input);

        // 교수님...어려워여...ㅠㅠㅠ더 노력하겠습니다.


        //Quest 9.
        /*
        ‘Menu 7’ 텍스트를 포함하고 있는 a 요소를 선택할 수 있는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 9.
        // console.log("%c Answer 9.", logStyle);
        
        // var $aMenu7 = $('a')
        // console.log(
        //     $aMenu7.find('a[Menu 7]')
        // );




        //Quest 10.
        /*
        아이디가 radio-2 가 아닌 input radio 요소의 부모 노드를 찾고, 자식 노드 label 요소에 emphasis 클래스를 추가합니다.
        */
        //Answer 10.

        // 아이디가 radio-2가 아닌 input radio 요소를 찾는다.
        // var $notRadio2 = $('radio:not(#radio-2)');

        // 잘 찾아졌는지 확인한다.
        // console.log($notRadio2);

        // 그 요소의 부모 노드를 찾는다.
        // var $notRadio2Parent = $notRadio2.parent();

        // 그 부모 노드에 자식 노드 label 요소에 emphasis 클래스를 추가한다.
        // $notRadio2Parent.children('label').addClass('emphasis');

        // 아래와 같이 요약 가능..할까요?
        console.log(
        $('radio:not(#radio-2)').parent().children('label').addClass('emphasis')
        );
        // console.log를 사용하여 출력확인 해봤더니 가능하네여!

        //Quest 11.
        /*
        sub-last 클래스를 가진 li 요소를 찾고 부모 노드들 중 last 클래스를 가진 노드를 찾은 후,
        1) 자식노드 a 요소에 emphasis 클래스를 추가합니다.
        2) 모든 자식 노드 a 요소들에 bold 클래스를 추가합니다.
        */
        //Answer 11.
        
        // sub-last 클래스를 가진 li 요소를 찾고 부모 노드들 중 last 클래스를 가진 노드를 찾는다.
        var $subLast = $('li.sub-last').parent('.last');

        // 1) 자식 노드 a 요소에 emphasis 클래스를 추가한다.
        $($subLast).children('a').addClass('emphasis');
        // 2) 모든 자식 노드 a 요소들에 bold 클래스를 추가한다.
        $($subLast).find('a').addClass('bold');


    });
})(jQuery);