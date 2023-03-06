import { Element } from "./Elements.js";
import { screen } from "./Screen.js";

export function setAnimateEntrance(selector, animate, callback = null) {

    var isEnter = false;

    const element = new Element(selector);
    const elementMidpoint = element.elementMidpoint();
    
    let topScreen = screen.topScreen()
    let bottomScreen = screen.bottomScreen()

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
