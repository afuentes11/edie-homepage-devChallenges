$("document").ready(function() {

    

    $('.header-logo span').addClass('jump');
    setTimeout(function() {
        $('.header-logo span').removeClass('jump');
    },1500);

    $('.scroll-bar > .scroll-bar-nav > .items .item').each(function() {
        var $element = $(this);
        $element.click(function() {
            $('.scroll-bar > .scroll-bar-nav > .items .item').removeClass('item2')
            $element.addClass('item2')
        })
    })

});