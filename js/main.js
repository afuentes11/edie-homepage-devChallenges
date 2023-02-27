$("document").ready(function() {

    $('.header-logo span').addClass('jump');
    setTimeout(function() {
        $('.header-logo span').removeClass('jump');
    },1500);

    $('.item, .menu-icon').addClass('jump-item');
    setTimeout(function() {
        $('.item').removeClass('jump-item');
        $('.menu-icon').removeClass('jump-item');
    },2000);

    $('.header-logo > span').each(function() {
        var $element = $(this);
        $element.hover(function() {
            $element.addClass('jello');
            setTimeout(function() {
                $element.removeClass('jello');
            },900);
        })
    })

    $('.menu-icon').click(function() {
        $('.header-nav').addClass('open-nav');
    });

    $('.close-icon').click(function() {
        $('.header-nav').removeClass('open-nav');
    });

    $('.item').click(function() {
        $('.header-nav').removeClass('open-nav');
    });
});