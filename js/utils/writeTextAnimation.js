export function writeTextAnimation(selector){

    console.log('hola mundo')
    let $typingText = $(selector);
    let height = $(selector).height();
    $(selector).height(height);
    let text = $typingText.text();
    $typingText.text("");
    $typingText.show();
    
    for (var i = 0; i < text.length; i++) {
        (function(i) {
        setTimeout(function() {
            $typingText.text($typingText.text() + text.charAt(i));
        }, 25 * i);
        })(i);
    }
}