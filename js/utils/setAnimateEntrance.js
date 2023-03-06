import { Element } from "./Elements.js";
import { screen } from "./Screen.js";

export function setAnimateEntrance(selector, animate, callback = null) {

    /**
     * If the element is not in the viewport, then add the class to the element when it enters the
     * viewport.
     */
    var isEnter = false;

    const element = new Element(selector);
    const elementMidpoint = element.elementMidpoint();
    
    let topScreen = screen.topScreen()
    let bottomScreen = screen.bottomScreen()

    /* This checks if the element is in the graphic window at the instant the document loads */
    if(topScreen < elementMidpoint && elementMidpoint < bottomScreen){
        $(selector).addClass(animate);
    }else{

        //este fragmento de codigo busca crear un proceso scroll cada vez que se ejecute la funcion, y asi mismo, eliminar cada scroll cuando el elemento ya haya entrado en pantalla. De esta forma solo se elimina un proceso de scroll en especifico.
        const scrollHandler  = function (){
            if( isEnter){
                $(window).off('scroll', scrollHandler);
            }else{

                topScreen = screen.topScreen()
                bottomScreen = screen.bottomScreen()
                if(topScreen < elementMidpoint && elementMidpoint < bottomScreen){
                    $(selector).addClass(animate);
                    
                    if (callback) {
                        callback(selector);
                    }
                    isEnter = true;
                }   
            }
        }

        $(window).scroll(scrollHandler);
    }
    
}
