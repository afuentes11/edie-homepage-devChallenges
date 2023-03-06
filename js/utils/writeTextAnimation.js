/**
 * It takes a selector and writes the text in it letter by letter with a delay of 25ms between each
 * letter.
 * @param selector - The selector of the element you want to animate.
 */
export function writeTextAnimation(selector){

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