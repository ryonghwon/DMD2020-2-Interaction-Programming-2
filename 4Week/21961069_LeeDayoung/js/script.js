(function($){
    $(document).ready(function(){
        //Quest 1.
        /*
        my-name 아이디를 가진 span 요소를 생성하고 ‘제 이름은 본인이름입니다.’ 의 내용을 추가하여 hello 아이디를 가진 div 노드의 첫 번째 자식노드로 추가합니다.
        */
        //Answer 1.
        var $myname = "<span>제 이름은 이다영입니다.</span>";
        var $helloDiv = $("div#hello");
        $helloDiv.prepend($myname);

        //Quest 2.
        /*
        1. images 배열의 원소 수 만큼 banner-item 클래스를 가지는 div 요소를 생성합니다.
        2. 배열의 원소를 src 속성으로 가지는 img 노드를 생성하고, 1 에서 생성한 div 노드에 추가합니다.
        3. 1 과 2 에서 생성된 div 요소를 banner-container 클래스를 가지는 div 노드에 추가합니다.
        */
        //Answer 2.
        var images = ['./img/banner/01.jpg', './img/banner/02.jpg', './img/banner/03.jpg'];
        for (i = 0; i < images.length; i++){ //images 원소 수 만큼 반복
            $('div.banner-container').prepend('<div class="banner-item"></div>'); //banner-container 클래스를 가지는 div 노드에 banner-item 클래스를 가지는 div 요소 생성
        }
        for (i = 0; i < images.length; i++){ //images 원소 수 만큼 반복
            $('div.banner-item').eq(i).prepend('<img src="' + images[i] + '"/>'); //banner-item 클래스를 가지는 div 노드에 images 원소를 src 속성으로 가지는 img 노드 생성
        }



        //Quest 3.
        /*
        1. p.move-top 노드를 body 의 가장 위로 이동시킵니다.
        2. p.move-top 노드에 move 라는 클래스를 추가하고, 노드 안의 내용을 ‘위로 이동했습니다.’ 로 변경합니다.
        */
        //Answer 3.
        $('body').prepend($('p.move-top')); 
        $('p.move-top').addClass('move').text('위로 이동했습니다.');


        //Quest 4.
        /*
        1. p.move-bottom 노드를 body 의 가장 아래로 이동시킵니다.
        2. p.move-bottom 노드에 move 라는 클래스를 추가하고, 노드 안의 내용을 ‘아래로 이동했습니다.’ 로 변경합니다.
        */
        //Answer 4.
        $('body').append($('p.move-bottom'));
        $('p.move-bottom').addClass('move').text("아래로 이동했습니다.");

        //Quest 5.
        /*
        p.error 노드를 삭제합니다.
        */
        //Answer 5.
        $('p.error').detach();


        //Quest 6.
        /*
        p.modify 노드의 내용을 ‘수정되었습니다.’ 로 수정합니다.
        */
        //Answer 6.
        $('p.modify').html('수정되었습니다.');


        //Quest 7.
        /*
        p.modify 노드의 내용을 비우고 문서에서 삭제합니다.
        */
        //Answer 7.
        $('p.modify').empty();
        $('p.modify').detach();


        //Quest 8.
        /*
        ul.list-1 의 첫번 째 li 자식노드의 뒤에 반복문을 이용하여 ‘리스트 2’, ‘리스트 3’, ‘리스트 4’ 의  내용을 가지는 li 요소를 생성한 후 추가합니다.
        */
        //Answer 8.
        var ulList = $('ul.list-1 li').eq(0); //ul.list-1 의 첫번 째 li 자식노드를 ulList에 할당
        var list = ''; //노드안의 문자열을 반환하기 위한 list
        for (var i = 2; i < 5; i++){ //2, 3, 4를 생성하기 위해 for문 설정
            list += '<li>리스트 ' + i + '</li>';
        }
        ulList.after(list); //ulList 뒤에, 생성된 list 추가

        //Quest 9.
        /*
        ul.list-2 의 첫번 째 li 자식노드의 앞에 반복문을 이용하여 ‘리스트 1’, ‘리스트 2’, ‘리스트 3’, ‘리스트 4’ 의  내용을 가지는 li 요소를 생성한 후 추가합니다.
        */
        //Answer 9.
        var ulList2 = $('ul.list-2 li').eq(0); //ul.list-2 의 첫번 째 li 자식노드를 ulList2에 할당
        var list2 = ''; //노드안의 문자열을 반환하기 위한 list2
        for (var i = 1; i < 5; i++){ //1, 2, 3, 4를 생성하기 위해 for문 설정
            list2 += '<li>리스트 ' + i + '</li>';
        }
        ulList2.before(list2); //ulList2 앞에, 생성된 list2 추가

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
        var $divBox1 = $('div.box-1');
        var width = 100;
        var fiveclick = false;

        $('button.btn-1').click(function(){ //btn-1 클래스를 가진 버튼을 클릭하면 함수를 실행한다.
            if(fiveclick == false){ //만약 fiveclick이 거짓이면 (width가 500 이하면)
                width += 100; //width 값을 100 추가
                $divBox1.css('width', width + "px"); //div.box-1의 width를 변수 width 값으로 반환.
                
                if(width >= 500){ //만약 width가 500 이상이 되면
                    fiveclick = true; //fiveclick은 참 (-> 다시 감소하는 것으로 반복)
                };

            }else if(fiveclick == true){ //만약 fiveclick이 참이면 (width가 500 이상이면)
                width -= 100; //width 값을 100 감소
                $divBox1.css('width', width + "px");  //div.box-1의 width를 변수 width 값으로 반환.
                
                if(width === 0){ //만약 width가 0이 되면
                    fiveclick = false; //fiveclick은 거짓 (-> 다시 증가하는 것으로 반복)
                }
            };
        });

        
    });
})(jQuery);