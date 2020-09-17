console.log("Script Load");
(function($) {
    $(document).ready(function() {
        // index();
        var $contents = $('.content');
        var $content = $('#content.content');
        console.log(
            $contents.index($content)
        ); // 2

        var $ul = $('ul');
        // children();
        // 해당 요소를 기준으로 자식요소들을 반환.
        console.log(
            $ul.children()
        );

        var $aLink = $('a#li_link');
        console.log($aLink);
        // parent();
        // 해당 요소를 기준으로 바로 위의 항렬의 부모 요소를 반환.
        console.log(
            $aLink.parent()
        ); // [<li><a id="li_link" href="#"><span>link</span></a></li>]
        console.log(
            $aLink.parent('li')
        ); // [<li><a id="li_link" href="#"><span>link</span></a></li>]
        console.log(
            $aLink.parent('ul')
        ); // 해당 요소 기준으로 적용하면 [] 비어있는 배열로 반환.

        // parents();
        // 해당 요소를 기준으로 위의 항렬에 있는 모든 부모 요소들을 반환.
        console.log(
            $aLink.parents()
        ); // 전체를 배열로 반환.
        console.log(
            $aLink.parents('ul')
        ); // 전체 중에 특정 요소를 검색해서 반환.
        console.log(
            $aLink.parents('.content')
        );
        console.log(
            $aLink.parents('#content')
        );

        // prev();
        // prevAll();

        // next();
        // nextAll();

        // find();
        // 가장 많이 사용되는 Selector 메서드
        console.log(
            $content.find('span')
        );

        console.log(
            $content
                .find('ul')
                .find('li')
                .find('a#li_link')
                .find('span')
        );

        console.log(
            $content
                .find('li')
                .find('a#li_link')
                .find('span')
        );

        console.log(
            $content
                .find('a#li_link')
                .find('span')
        );

        console.log(
            $content
                .find('ul li a#li_link span')
        );
    });
})(jQuery);