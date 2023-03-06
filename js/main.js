/**
 * Add a class to an element, then remove it after a specified timeout.
 * @param selector - The element you want to add the class to.
 * @param cssSelector - The class you want to toggle.
 * @param timeout - The amount of time in milliseconds that the class will be applied to the element.
 */
function toggleClassWithTimeout(selector, cssSelector, timeout) {
    $(selector).addClass(cssSelector);
    setTimeout(function() {
        $(selector).removeClass(cssSelector);
    }, timeout);
}

$("document").ready(function() {

    toggleClassWithTimeout('.header > .header-logo > span', 'jump', 1500);
    toggleClassWithTimeout('.header-nav > .items, .menu-icon', 'jump-item', 2000);

    $('.header-logo > span, .social-media__logo  span').each(function() {
        var $element = $(this);
        $element.hover(function() {
            toggleClassWithTimeout($element, 'jello', 900);
        })
    });

    $('.menu-icon').click(function() {
        $('.header-nav').addClass('open-nav');
        $('body').addClass('scroll-body');
    });

    $('.close-icon, .item').click(function() {
        $('.header-nav').removeClass('open-nav');
        $('body').removeClass('scroll-body');
    });

});
