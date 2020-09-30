(function($){
    $(document).ready(function(){
        //Quest 1.
        /*
        my-name 아이디를 가진 span 요소를 생성하고 ‘제 이름은 본인이름입니다.’ 의 내용을 추가하여 hello 아이디를 가진 div 노드의 첫 번째 자식노드로 추가합니다.
        */
        //Answer 1.

        // 1) my-name 아이디를 가진 span 요소를 생성하고 ‘제 이름은 본인이름입니다.’ 의 내용을 추가할 것.
        var $spanmn = '<span id="my-name">제 이름은 김민지입니다.</span>';
        // 2) my-name 아이디를 가진 span 요소를 hello 아이디를 가진 div 노드의 첫 번째 자식노드로 추가할 것.
        // 요소의 자식항렬에서 첫 부분에 노드 추가.
        // prepend();
        var $divh = $('div#hello');
        $divh.prepend($spanmn);


        //Quest 2.
        /*
        1. images 배열의 원소 수 만큼 banner-item 클래스를 가지는 div 요소를 생성합니다.
        2. 배열의 원소를 src 속성으로 가지는 img 노드를 생성하고, 1 에서 생성한 div 노드에 추가합니다.
        3. 1 과 2 에서 생성된 div 요소를 banner-container 클래스를 가지는 div 노드에 추가합니다.
        */
        //Answer 2.

        var images = ['./img/banner/01.jpg', './img/banner/02.jpg', './img/banner/03.jpg'];

        // 1) images 배열의 원소 수 만큼 banner-item 클래스를 가지는 div 요소를 생성하고 banner-container 클래스를 가지는 div 노드에 추가할 것.
        // for 반복문을 활용하여 div 요소 생성.
        for(var i = 0; i < images.length; i++){
            var $banner_c = $('div.banner-container');
            $banner_c.prepend('<div class="banner-item"></div>');
        }
        // 2) 배열의 원소를 src 속성으로 가지는 img 노드를 생성하고, 1 에서 생성한 div 노드에 추가할 것.
        // for 반복문을 활용하여 배열의 원소를 src 속성으로 가지는 img 노드 생성 및 생성한 div 노드에 추가.
        for (var j = 0; j < images.length; j++){
            var $banner_i = $('div.banner-item');
            // eq(j)를 eq[j]로 하면 진행이 되지 않으니 작성 시 유의.
            $banner_i.eq(j).prepend("<img src =" + images[j] + ">");
        }


        //Quest 3.
        /*
        1. p.move-top 노드를 body 의 가장 위로 이동시킵니다.
        2. p.move-top 노드에 move 라는 클래스를 추가하고, 노드 안의 내용을 ‘위로 이동했습니다.’ 로 변경합니다.
        */
        //Answer 3.

        // 1) p.move-top 노드를 body 의 가장 위로 이동시킬 것.
        // $부모노드.prepend($이동노드);
        var $pmt = $('p.move-top');
        $('body').prepend($pmt);
        // 2) p.move-top 노드에 move 라는 클래스를 추가할 것.
        $pmt.addClass('move');
        // 3) p.move-top 노드 안의 내용을 ‘위로 이동했습니다.’ 로 변경할 것.
        $pmt.text('위로 이동했습니다.');


        //Quest 4.
        /*
        1. p.move-bottom 노드를 body 의 가장 아래로 이동시킵니다.
        2. p.move-bottom 노드에 move 라는 클래스를 추가하고, 노드 안의 내용을 ‘아래로 이동했습니다.’ 로 변경합니다.
        */
        //Answer 4.

        // 1) p.move-bottom 노드를 body 의 가장 아래로 이동시킬 것.
        // $부모노드.append($이동노드);
        var $pmb = $('p.move-bottom');
        $('body').append($pmb);
        // 2) p.move-bottom 노드에 move 라는 클래스를 추가할 것.
        $pmb.addClass('move');
        // 3) p.move-bottom 노드 안의 내용을 ‘아래로 이동했습니다.’ 로 변경할 것.
        $pmb.text('아래로 이동했습니다.');


        //Quest 5.
        /*
        p.error 노드를 삭제합니다.
        */
        //Answer 5.

        var $pe = $('p.error');
        // 1) p.error 노드를 삭제할 것.
        $pe.detach();


        //Quest 6.
        /*
        p.modify 노드의 내용을 ‘수정되었습니다.’ 로 수정합니다.
        */
        //Answer 6.

        var $pm = $('p.modify');
        // 1) p.modify 노드의 내용을 ‘수정되었습니다.’ 로 수정할 것.
        $pm.text('수정되었습니다.');


        //Quest 7.
        /*
        p.modify 노드의 내용을 비우고 문서에서 삭제합니다.
        */
        //Answer 7.

        // 1) p.modify 노드의 내용을 비울 것.
        $pm.empty();
        // 2) p.modify 노드를 문서에서 삭제할 것.
        $pm.detach();


        //Quest 8.
        /*
        ul.list-1 의 첫번 째 li 자식노드의 뒤에 반복문을 이용하여 ‘리스트 2’, ‘리스트 3’, ‘리스트 4’ 의  내용을 가지는 li 요소를 생성한 후 추가합니다.
        */
        //Answer 8.

        var $ulli_1 = $('ul.list-1');
        // 1) ul.list-1 의 첫번 째 li 자식노드의 뒤에 반복문을 이용하여 ‘리스트 2’, ‘리스트 3’, ‘리스트 4’ 의  내용을 가지는 li 요소를 생성한 후 추가할 것.
        // i가 $ulli_1의 인덱스 길이보다 작을때 까지 진행하면 변화없음
        // 반복문이 진행된 후의 li 요소의 개수를 활용해야 한다. i < 5 또는  i <= 4
        for (var i = 2; i < 5; i++){
            $ulli_1.append('<li>리스트 ' + i + '</li>');
        }

        //Quest 9.
        /*
        ul.list-2 의 첫번 째 li 자식노드의 앞에 반복문을 이용하여 ‘리스트 1’, ‘리스트 2’, ‘리스트 3’, ‘리스트 4’ 의  내용을 가지는 li 요소를 생성한 후 추가합니다.
        */
        //Answer 9.

        var $ulli_2 = $('ul.list-2');
        // 1) ul.list-2 의 첫번 째 li 자식노드의 앞에 반복문을 이용하여 ‘리스트 1’, ‘리스트 2’, ‘리스트 3’, ‘리스트 4’ 의  내용을 가지는 li 요소를 생성한 후 추가할 것.
        // 리스트 li 요소의 번호가 반대로 생성된다.
        // for (var j = 1; j < 5; j++)
        // {
        //     $ulli_2.prepend('<li>리스트 ' + j + '</li>');
        // }
        for (var j = 4; j > 0; j--)
        {
            $ulli_2.prepend('<li>리스트 ' + j + '</li>');
        }


        //Quest 10.
        /*
        button.btn-1 요소를 클릭하여 div.box-1 노드의 스타일 width 를 아래 조건에 따라 100px 씩 증감시키는 함수를 만듭니다.
        
        1. div.box-1 노드의 스타일 width 는 100px 부터 시작됩니다.
        2. div.box-1 노드의 스타일 width 의 값이 500px 이상이 될 때까지 클릭 1회 당 100px 씩 증가시킵니다.
        3. div.box-1 노드의 스타일 width 의 값이 500px 이상이 되면 0px 이 될 때까지 클릭 1회 당 100px  씩 감소시킵니다.
        4. div.box-1 노드의 스타일 width 의 값이 0px 이 되면 2 의 조건과 3 의 조건을 반복시킵니다.
        
        힌트 - Boolean 또는 Class 를 조건문에 함께 이용합니다.
        */
        //Answer 10.

        var $bb1 = $('button.btn-1');
        var $db1 = $('div.box-1');
        var b1w = 100;
        var w500 = true;
        // 1) button.btn-1 요소를 클릭하여 div.box-1 노드의 스타일 width 를 조건에 따라 100px 씩 증감시키는 함수를 만들 것.
        $bb1.click(function() {
            // 클릭을 할 경우 b1w의 값이 100씩 증가하도록 한다.
            console.log(b1w);
            if (b1w > 0){
                // w500의 값이 true일 경우
                if(w500 === true) {
                    // b1w를 100씩 증가시킨다.
                    b1w += 100;
                    // .width()는 선택한 요소의 가로 크기를 변경.
                    $db1.width(b1w);
                    // b1w의 값이 500보다 크거나 같다면
                    if (b1w >= 500){
                        // w500이 false가 되도록 한다.
                        w500 = false;
                    }
                }
                // w500의 값이 false일 경우
                else if(w500 === false){
                    // b1w를 100씩 감소시킨다.
                    b1w -= 100;
                     // .width()는 선택한 요소의 가로 크기를 변경.
                    $db1.width(b1w);
                }
            }
            // b1w가 0보다 작거나 같다면 
            else{
                // b1w를 100씩 증가시킨다.
                b1w += 100;
                // .width()는 선택한 요소의 가로 크기를 변경.
                $db1.width(b1w);
                // w500이 true가 되도록 한다.
                w500 = true;
            }
        });
    });
})(jQuery);