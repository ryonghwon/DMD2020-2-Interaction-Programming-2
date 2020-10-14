console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');
        
        // click
        $('#menu-1').on('click', function(e) {
            e.preventDefault();
            console.log('click');
        });

        // dblclick
        $('#menu-2').on('dblclick', function(e) {
            e.preventDefault();
            console.log('double click');
        });
        
        // 해당하는 요소만 확인한다.
        // 자식요소로 마우스 커서가 이동되면 mouseout 발생.
        $('#menu-3').on('mouseover', function() {
            // mouseover
            console.log('mouse over');
        }).on('mouseout', function() {
            // mouseout
            console.log('mouse out');
        });

        // mouseenter
        // mouseleave
        // 해당요소+하위의 모든요소까지 mouse 영역으로 인식.
        $('#menu-4').on('mouseenter mouseleave', function(e) {
            console.log(e.type); // mouseenter, mouseleave
            var type = e.type;
            if(type === 'mouseenter') {
                console.log('mouse enter');
            }else if(type === 'mouseleave') {
                console.log('mouse leave');
            }
        });

        var isDrag = false;
        // mousedown
        // mousemove
        // mouseup
        $(window).on('mousedown mousemove mouseup', function(e) {
            // console.log(e);
            var type = e.type;
            switch(type) {
                case 'mousedown':
                    isDrag = true;
                    console.log('mouse down');
                    break;
                case 'mousemove':
                    if(!isDrag) return;
                    console.log('mouse move');
                    break;
                case 'mouseup':
                    isDrag = false;
                    console.log('mouse up');
                    break;
                default:
                    break;
            }
        });

        // hover
        $('#menu-5').hover(function() {
            console.log('over');
        }, function() {
            console.log('out');
        });
        $('#menu-5').on('mouseenter', function() {
            console.log('over - 2');
        }).on('mouseleave', function(){
            console.log('out - 2');
        });
    });
})(jQuery);