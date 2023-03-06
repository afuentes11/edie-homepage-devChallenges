$("document").ready(function() {

    let click_btn_return = false;
    let top = false;
    let countdownInterval;
    let hidenBtnTimeout;
    let previousPosition = $(window).scrollTop();
    let hidden = false;

    $(window).scroll(function() {
        const header_outerHeight = $('.header').outerHeight(true); 
        const footer_outerHeight = $('.footer').outerHeight(true);
        const alturaPantalla = $(document).height();

        let topScreen = $(window).scrollTop();
        let bottomScreen = $(window).scrollTop() + $(window).height(); 

        let currentPosition = $(window).scrollTop(); 
        
        /* Checking if the top of the screen is outside the header area or if the bottom of the screen
        is outside the footer area. */
        if(topScreen < header_outerHeight || (alturaPantalla - footer_outerHeight) < bottomScreen){
            // evalua si la parte superior de la pantalla esta fuera de la zona del header, o si la zona inferior de la pantalla está fuera de la zona del footer
            if( $('.return-to-up').hasClass('slide-in-blurred-br') && (! hidden)){
                hiden_btn_return();
            }
            hidden = true;
        }else{
            hidden = false;
        }

      /* Checking if the user is scrolling up or down. */
        if (currentPosition < previousPosition) {

            if((! $('.return-to-up').hasClass('slide-out-blurred-br')) && ( ! click_btn_return) && (! top ) && (! hidden ) ){
                $('.return-to-up').addClass('slide-in-blurred-br');
                startCountdown()
            }
        }else{
            
            if($('.return-to-up').hasClass('slide-in-blurred-br')){
                hiden_btn_return()
            }
        }

        previousPosition = currentPosition;
    });

    $('.item').click(function(){
        top = true;
        setTimeout(function(){
            top = false;
        }, 1000)
    })

/**
 * If the user clicks the button, then hide the button for 300ms, and then show it again.
 */
    function hiden_btn_return() {
        click_btn_return = true
        $('.return-to-up').addClass('slide-out-blurred-br');
        $('.return-to-up').removeClass('slide-in-blurred-br');
        clearInterval(hidenBtnTimeout);
        clearInterval(countdownInterval);
        hidenBtnTimeout = setTimeout(function(){
            $('.return-to-up').removeClass('slide-out-blurred-br');
            click_btn_return=false
        },300)
    }  

    /**
     * Every second, decrease the countdown variable by 1, and if it's less than or equal to 0, hide
     * the button and stop the countdown.
     */
    function startCountdown() {
        var countdown = 3; 
        clearInterval(countdownInterval); 
        countdownInterval = setInterval(function() {
        countdown--;
        if (countdown <= 0) {
            hiden_btn_return();
            clearInterval(countdownInterval); 
        }
        }, 1000); 
    }

});