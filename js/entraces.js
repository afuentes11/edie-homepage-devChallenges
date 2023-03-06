import {setAnimateEntrance} from "./utils/setAnimateEntrance.js";
import { writeTextAnimation } from "./utils/writeTextAnimation.js";


$("document").ready(function() {

    //home
    /* Setting the animation for the elements in the home section. */
    setAnimateEntrance(".home > .title", "slide-in-blurred-left");
    setAnimateEntrance(".home > img", "puff-in-center");
    setAnimateEntrance(".home > .description, .home > .contact-email", "slide-in-blurred-left");

    
    //services
    /* Setting the animation for the elements in the services section. */
    setAnimateEntrance(".services > .main ", "slide-in-blurred-left");
    for(let i = 0; i < 3; i++){
        setAnimateEntrance(`.services > .cards > .card:eq(${i})`, "puff-in-center");
    }

    //our-works
    /* Setting the animation for the elements in the our-works section. */
    setAnimateEntrance(".our-works > .main ", "slide-in-blurred-left");
    for(let i = 0; i < 4; i++){
        if(i%2===0){
            setAnimateEntrance(`.our-works > .cards > .card:eq(${i})`, "slide-in-blurred-left");
        }else{
            setAnimateEntrance(`.our-works > .cards > .card:eq(${i})`, "slide-in-blurred-right");
        }
    }
    setAnimateEntrance(".our-works > .container-more-info ", "slide-in-blurred-right");


    // clients
    /* Setting the animation for the elements in the clients section. */
    setAnimateEntrance(".clients > .text-container ", "slide-in-blurred-left");
    setAnimateEntrance(".clients > .img-container ", "animate-img");



    //comments
    /* Setting the animation for the elements in the comments section. */
    setAnimateEntrance(".comments > .main-text ", "none", writeTextAnimation);
    setAnimateEntrance(".comments > .client-container ", "slide-in-blurred-left");
    
});