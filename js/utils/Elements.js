export class Element{

    constructor(element){
        this.element = element;
    };

    elementMidpoint(){
        const elementOuterHeight = $(this.element).outerHeight(true);
        const elementOffset = $(this.element).offset().top;
        return elementOffset + (elementOuterHeight/2)
    };
};