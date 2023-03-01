$("document").ready(function() {

    $('.header-logo span').addClass('jump');
    setTimeout(function() {
        $('.header-logo span').removeClass('jump');
    },1500);

    $('.header-nav > .items, .menu-icon').addClass('jump-item');
    setTimeout(function() {
        $('.header-nav > .items').removeClass('jump-item');
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
        $('body').addClass('scroll-body');
    });

    $('.close-icon').click(function() {
        $('.header-nav').removeClass('open-nav');
        $('body').removeClass('scroll-body');
    });

    $('.item').click(function() {
        $('.header-nav').removeClass('open-nav');
        $('body').removeClass('scroll-body');
    });
});