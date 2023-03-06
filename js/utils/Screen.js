/* The Screen class is a class that has a constructor that sets the percentage of the screen that is not visible to the user and the value of the lost view.
not visible to the user and the value of the missing view. It also has two methods that return the upper and lower limit of the screen. */
class Screen {
    constructor(){
        this.percentage = 0.16;
        this.valueOfVisionLost = $(window).height() * this.percentage;
    }

    topScreen(){
        return $(window).scrollTop();
    }

    bottomScreen(){
        return $(window).scrollTop() + $(window).height() - this.valueOfVisionLost; 
    };

    bottomScreenWithoutVisionLost(){
        return $(window).scrollTop() + $(window).height(); 
    };
}

export const screen = new Screen();