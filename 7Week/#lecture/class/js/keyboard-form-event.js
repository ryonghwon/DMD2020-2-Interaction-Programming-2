console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');

        var $input1 = $('#input-1');
        //keypress
        $input1.on('keypress', function(event) {
            // console.log('keypress', event);
        });
        //keydown
        $input1.on('keydown', function(evt) {
            // Space Key Code : 32
            console.log('keydown', evt.originalEvent.keyCode);
            if(evt.originalEvent.keyCode === 32) {
                $('body').append('<span>Hello!!</span>');
            }
        });

        $(window).on('keydown', function(e) {
            // console.log('window!!', e);
            // console.log(e.which, e.keyCode);
            // Enter Key Code : 13
            if(e.keyCode === 13) {
                $('body').append('<div>Hello, World!</div>');
            }
        });

        //keyup
        $input1.on('keyup', function(e) {
            // console.log('keyup', e);
        });

        //change
        var $select1 = $('#select-1');
        $select1.on('change', function(e) {
            //console.log('change', e);
            // $(this) === $select1 === $(e.currentTarget)
            console.log($(this).val());
            console.log($(e.currentTarget).val());
            console.log($select1.val());
        });

        //focusin
        //focusout
        var $input2 = $('#input-2');
        var $textarea1 = $('#textarea-1');
        $input2.on('focusin', function(e) {
            console.log('focus in');
            $(this).css({
                'borderColor' : '#ff0000',
                'outline' : 'none',
                'padding' : '10px',
                'fontSize' : '20px',
                'lineHeight' : '40px'
            });
        }).on('focusout', function(e) {
            console.log('focus out');
            $(this).removeAttr('style');
        });
        $textarea1.on('focusin', function(e) {
            console.log('focus in');
            $(this).addClass('red');
            $(this).css({
                'padding' : '20px',
                'backgroundColor' : '#000000',
                'borderColor' : '#000000',
                'outline' : 'none',
                'color' : '#fff',
                'fontSize' : '16px',
                'lineHeight' : '30px',
                'resize' : 'none'
            });
        }).on('focusout', function(e) {
            console.log('focus out');
            $(this).removeClass('red');
            $(this).removeAttr('style');
        });
    });
})(jQuery);