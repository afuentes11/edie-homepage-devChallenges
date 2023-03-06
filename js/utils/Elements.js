/* The Element class is a class that takes a jQuery element as an argument and returns the midpoint of
that element. */
export class Element{

    constructor($element){
        this.$element = $element;
    };

    elementMidpoint(){
        const elementOuterHeight = $(this.$element).outerHeight(true);
        const elementOffset = $(this.$element).offset().top;
        return elementOffset + (elementOuterHeight/2)
    };
};