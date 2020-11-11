console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');

        // attr();
        // input 요소에서의 attr() - DOM 상의 속성을 받아온다.
        // attr('param1');
        // get. - 값을 받아온다.
        // 매개변수 첫번째 값만 기입할 때는 해당 요소의 속성값을 받아온다.
        console.log($('#checkbox-1').attr('type'));

        // attr('param1', 'param2');
        // set. - 값을 변경한다.
        // 매개변수 2개의 값을 기입할 때는 해당 요소의 속성을 찾아서 속성값을 변경해준다.
        // $('#checkbox-1').attr('type', 'text');
        
        // 활용 예시.
        // 패스워드 입력할 때.
        // type="password" --> type="text"
        // type="text" --> type="password"

        var $em = $('em');
        // console.log($em);
        var title = $em.attr('title');
        // console.log(title); // Kim Yongwon
        $em.text(title); // em 요소의 텍스트 내용이 변경.

        var $img = $('img');
        var fileName = $img.attr('title');
        console.log(fileName);
        var path = './img/' + fileName; // 이미지의 경로 설정.
        $img.attr('src', path); // 속성 추가.

        // prop();
        // input 요소에서의 prop() - UI 조작이 되었을 때의 속성을 받아온다.
        console.log($('input[type=checkbox]').prop('checked'));
        //$('input[type=checkbox]').prop('checked', false); 
        //$('input[type=checkbox]').prop('checked', true);

        // is();
        // 특정요소에 해당하는 필터링 내용이 맞는지 아닌지 체크.
        console.log($('input[type=checkbox]').is(':checked'));
        // $(this).is('contains()');
        // $(this).is('.class');

        // removeAttr();
        var $btn1 = $('#btn-1');
        var $input = $btn1.next();

        $btn1.click(function() {
            console.log('click', $input);
            $input.removeAttr('title');
            // 속성을 제거할 때.
        });
        
        // val();
        var $input1 = $('#input-1');
        var $p = $input1.next();
        $input1.keyup(function() {
            var value = $(this).val();
            console.log(value);
            $p.text(value);
        });
    });
})(jQuery);