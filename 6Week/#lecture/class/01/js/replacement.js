console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');

        // replaceAll();
        $('<b>안녕하세요</b>').replaceAll('p');

        // replaceWith();
        $('div').replaceWith('<em>안녕하세요.</em>');
    });
})(jQuery);