class Screen {
    constructor(){
        this.percentage = 0.0;
        this.valueOfVisionLost = $(window).height() * this.percentage;
    }

    topScreen(){
        return $(window).scrollTop();
    }

    bottomScreen(){
        return $(window).scrollTop() + $(window).height() - this.valueOfVisionLost; 
    };
}

export const screen = new Screen();