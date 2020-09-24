var logStyle = "padding:2px;background:#fff;border-radius:4px;color:#222;";
(function($){
    // 문서가 완전히 준비가 완료되었을 때.
    $(document).ready(function(){
        //Quest 1.
        /*
        모든 li 요소들을 선택하고 addClass 메서드를 이용하여 active 클래스를 추가합니다.
        */
        //Answer 1.
        // 1) 모든 li 요소들을 선택할 것.
        var $li = $('li');
        // 2) addClass 메서드를 이용하여 active 클래스를 추가할 것.
        $li.addClass('active');
        // console.log($li); - 배열로 반환.
        

        //Quest 2.
        /*
        문서내의 a 요소들 중 type-2 클래스를 가진 노드를 선택하고, 해당 요소에 current 클래스를 추가합니다.
        */
        //Answer 2.
        // 1) 문서내의 a 요소들 중 type-2 클래스를 가진 노드를 선택할 것.
        var $a_type2 = $('a.type-2');
        // 2) 해당 요소에 current 클래스를 추가할 것.
        $a_type2.addClass('current');
        // console.log($a_type2); - current 클래스가 추가된 것을 확인.

        //Quest 3.
        /*
        문서내의 li 요소들 중 0 index 에 위치한 노드를 선택하고, 해당 요소에 zero 클래스를 추가합니다.
        */
        //Answer 3.
        // 1) 문서내의 li 요소들 중 0 index 에 위치한 노드를 선택하고, 해당 요소에 zero 클래스를 추가할 것.
        // $li.eq(0) - $li 의 자식 요소들 중 0 번째 요소를 선택.
        // 위에서 만든 변수 $li 활용.
        $li.eq(0).addClass('zero');
        // console.log($li.eq(0)); - zero 클래스가 추가된 것을 확인.

        //Quest 4.
        /*
        문서내의 a 요소들 중 span 요소를 포함하고 있는 노드를 선택하고, 해당 요소에 inner 클래스를 추가합니다.
        */
        //Answer 4.
        // 1) 문서내의 a 요소들 중 span 요소를 가진 노드를 선택할 것.
        // :has()
        var $a_span = $('a:has(span)');
        // 2) 해당 요소에 inner 클래스를 추가할 것.
        $a_span.addClass('inner');
        // console.log($a_span); - inner 클래스가 추가된 것을 확인.

        //Quest 5.
        /*
        문서내의 li 요소들 중 data-role 속성이 link 인 노드를 선택하고, 해당 요소에 role 클래스를 추가합니다.
        */
        //Answer 5.
        // 1) 문서내의 li 요소들 중 data-role 속성이 link 인 노드를 선택할 것.
        // 요소[name="value"] - 속성을 지니고, 그 속성의 값이 일치하는 요소
        // li[data-role="link"]
        var $li_data_role = $('li[data-role="link"]');
        // 2) 해당 요소에 role 클래스를 추가할 것.
        $li_data_role.addClass('role');
        // console.log($li_data_role); - role 클래스가 추가된 것을 확인.

        //Quest 6.
        /*
        radio-list 아이디를 가지고 있는 요소의 자식 노드들의 길이를 구하고 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 6.
        console.log("%c Answer 6.", logStyle);
        // 1) radio-list 아이디를 가지고 있는 요소를 찾을 것.
        var $radio_list = $('#radio-list');
        // 2) 해당 요소의 자식 노드들의 길이를 구할 것.
        var $children_length = $radio_list.children().length;
        // 3) console.log 메서드를 이용하여 출력할 것.
        console.log($children_length); // 3


        //Quest 7.
        /*
        type-2 클래스를 가지고 있는 요소의 부모 노드를 찾고, index 값을 console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 7.
        console.log("%c Answer 7.", logStyle);
        // 1) type-2 클래스를 가지고 있는 요소의 부모 노드를 찾을 것.
        var $type_2_p = $('.type-2').parent();
        // 2) 해당 요소의 부모 노드들의 index 값을 구할 것.
        var $parent_i = $type_2_p.index();
        // 3) console.log 메서드를 이용하여 출력할 것.
        console.log($parent_i); // 1


        //Quest 8.
        /*
        아이디가 radio-1 인 input radio 요소의 value 를 출력하는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 8.
        console.log("%c Answer 8.", logStyle);
        
        // 방법 시도 1
        // 1) 아이디가 radio-1 인 input radio 요소를 찾을 것.
        // input 요소 중 타입이 radio이면서, 아이디는 radio-1 인것.
        // [name="value"] 형태를 이용해서 아이디도 속성처럼 찾도록 해본다.
        // input[type=''][id='']
        var $radio = $("input[type='radio'][id='radio-1']");
        // 2) 해당 요소의 value를 구할 것.
        var $radio_v = $radio.val();
        // 3) console.log 메서드를 이용하여 출력할 것.
        console.log($radio_v); // 1

        // 방법 시도 2 
        // 1) 아이디가 radio-1 인 input radio 요소를 찾을 것.
        // input 요소 중 아이디가 radio-1이면서, 타입이 radio인 것.
        // input과 #radio-1 간격을 띄울 경우 undifined가 출력되어 나옴. input #radio-1[type='radio']
        var $radio1 = $("input#radio-1[type='radio']");
        // 2) 해당 요소의 value를 구할 것.
        var $radio_v_1 = $radio1.val();
        // 3) console.log 메서드를 이용하여 출력할 것.
        console.log($radio_v_1); // 1


        //Quest 9.
        /*
        ‘Menu 7’ 텍스트를 포함하고 있는 a 요소를 선택할 수 있는 여러 가지 방법을 찾아, console.log 메서드를 이용하여 출력합니다.
        */
        //Answer 9.
        console.log("%c Answer 9.", logStyle);
        // 1) ‘Menu 7’ 텍스트를 포함하고 있는 a 요소를 선택할 것.
        // 요소:contains("찾을 텍스트 또는 문자열");
        // a:contains("Menu 7");
        var $a_text_menu7 = $('a:contains("Menu 7")');
        // 2) console.log 메서드를 이용하여 출력할 것.
        console.log($a_text_menu7); // ‘Menu 7’ 텍스트를 포함하고 있는 a 요소가 출력되는 것을 확인


        //Quest 10.
        /*
        아이디가 radio-2 가 아닌 input radio 요소의 부모 노드를 찾고, 자식 노드 label 요소에 emphasis 클래스를 추가합니다.
        */
        //Answer 10.
        // 1) input radio 요소의 부모 노드를 찾을 것.
        var $i_radio_p = $("input[type='radio']").parent();
        // 2) 아이디가 radio-2 가 아닌 input radio 요소의 부모 노드를 찾을 것.
        var $radio_2_not = $i_radio_p.not('#radio-2');
        // 3) 아이디가 radio-2 가 아닌 input radio 요소의 부모 노드의 자식 노드 중 label 요소를 찾을 것.
        var $children_label = $radio_2_not.children('label');
        // 4) 찾은 자식 노드 label 요소에 emphasis 클래스를 추가할 것.
        $children_label.addClass('emphasis');


        //Quest 11.
        /*
        sub-last 클래스를 가진 li 요소를 찾고 부모 노드들 중 last 클래스를 가진 노드를 찾은 후,
        1) 자식노드 a 요소에 emphasis 클래스를 추가합니다.
        2) 모든 자식 노드 a 요소들에 bold 클래스를 추가합니다.
        */
        //Answer 11.
        // 1) sub-last 클래스를 가진 li 요소를 찾을 것.
        var $li_sub_last = $('li.sub-last');
        // 2) sub-last 클래스를 가진 li 요소의 부모 노드들 중 last 클래스를 가진 노드를 찾을 것.
        var $li_sub_last_p = $li_sub_last.parents('.last');
        // 3) sub-last 클래스를 가진 li 요소의 부모 노드들 중 last 클래스를 가진 노드의 자식 노드 자식노드 a 요소에 emphasis 클래스를 추가할 것.
        $li_sub_last_p.children('a').addClass('emphasis');
        // 4) 모든 자식 노드 a 요소들에 bold 클래스를 추가할 것.
        $li_sub_last_p.find('a').addClass('bold');
    });
})(jQuery);