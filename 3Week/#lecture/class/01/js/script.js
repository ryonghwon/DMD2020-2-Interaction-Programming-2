console.log("Script Load");
console.log(jQuery); // jQuery 의 기능을 불러올 수 있다.
console.log($); // $ - jQuery 의 축약.
(function($) {
    console.log($);
    // 문서가 완전히 준비가 완료되었을 때.
    $(document).ready(function() {
        console.log('ready');

        // $('string')
        // $ - jQuery 메서드.
        // 'string' -  선택자에 대한 구분 명칭.
        // $('input').val();
        // jQuery 의 기능을 찾아온 선택자에서 실행.
        
        // Selector. - 선택자.
        // tag 요소 선택.
        var $div = $('div'); // 배열로 반환.
        console.log($div);
        var divEl = document.getElementsByTagName('div'); // 배열로 반환.
        console.log(divEl);

        // id 요소 선택.
        var $hello = $('#hello');
        console.log($hello); // 배열로 반환.
        var helloEl = document.getElementById('hello');
        console.log(helloEl); // 단일 항목으로 반환.
        helloEl = document.querySelector('#hello');
        console.log(helloEl); // 단일 항목으로 반환.
        helloEl = document.querySelectorAll('#hello');
        console.log(helloEl); // 배열로 반환.

        // class name 요소 선택.
        var $content = $('.content');
        console.log($content); // 배열로 반환.
        var contentEls = document.getElementsByClassName('content');
        console.log(contentEls); // 배열로 반환.

        // query 구문으로 요소 선택.
        // tag + id, tag + class name, id + class name (query)
        var $header = $('div#header'); // 배열로 반환.
        console.log($header);
        var headerEl = document.querySelector('div#header'); // 단일 항목으로 반환.
        console.log(headerEl);
        var $spanContent = $('span.content'); // 배열로 반환.
        console.log($spanContent);
        var spanContentEls = document.querySelectorAll('span.content'); // 배열로 반환.
        console.log(spanContentEls);
        var $content1 = $('#content1.content');
        console.log($content1);

        // length
        console.log($content.length);
        // index
        console.log($content[0]); // 단일 항목으로 반환.
        console.log($content.get(0)); // 단일 항목으로 반환.
        // eq
        console.log($content.eq(0)); // $content 의 자식 요소들 중 0 번째 요소를 선택.
        // 배열로 반환.

        // addClass();
        $content.eq(3).addClass('blueBG'); // DOM 조작.
        $content[2].classList.add('blackBG'); // DOM 조작.
        contentEls[4].classList.add('redBG'); // DOM 조작.
        // removeClass(); = classList.remove();
        
        // Pseudo Selector - 유사 선택자.
        // 기본 선택자 방식이 아닌 필터링을 통한 선택자 찾는 방법.
        var $aHash = $('a[href="#"]');
        $aHash.addClass('redColor');

        // :has() has()
        var $aHasSpan = $('a:has(span)');
        console.log($aHasSpan);
        $aHasSpan = $('a').has('span');
        console.log($aHasSpan);
    
        // :not() not()
        var $contentNotId = $('.content:not(#content1)');
        console.log($contentNotId);
        $contentNotId = $('.content').not('#content1');
        console.log($contentNotId);

        // :first first()
        // :last last()
        // :nth-of-type() eq()
        var $li = $('li');
        console.log($li);

        console.log($li.first());
        console.log($('li:first'));

        console.log($li.last());
        console.log($('li:last'));

        console.log($li.eq(0)); // 0
        console.log($li.eq($li.length - 1));
        console.log($li.eq(1));
        // nth-of-type 1번째 항목의 번호 - 1.
        console.log($('li:nth-of-type(1)'));
        console.log($('li:nth-of-type(4)'));

        // :visible, :hidden
        // style - display:none, visibility:hidden or 화면에 보이고 있는 중인가?
        var $contentHidden = $('.content:hidden');
        console.log($contentHidden);
        var $contentVisible = $('.content:visible');
        console.log($contentVisible);
    });
})(jQuery);