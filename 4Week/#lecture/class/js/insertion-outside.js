console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');

        // after();
        // 요소의 다음 항목으로 노드를 추가
        // $('p').after('<p>Hello</p>');
        // $('p').after($('b'));
        // $('p').after('b');

        // insertAfter();
        // 추가될 노드를 요소에 타겟하여 다음 항목으로 추가
        // $('p').eq(2).insertAfter('.say-1'); // 이동.

        // before();
        // 요소의 이전 항목으로 노드를 추가
        // $('p').before('<p>World</p>');
        // $('p').before($('b'));

        // insertBefore();
        // 추가될 노드를 요소에 타겟하여 이전 항목으로 추가
        // $('p').last().insertBefore('.say-2'); // 이동
    });
})(jQuery);