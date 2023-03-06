$("document").ready(function() {

    var click_btn_return = false;
    var top = false;
    var countdownInterval;
    var hidenBtnTimeout;
    var previousPosition = $(window).scrollTop();

    $(window).scroll(function() {
        var header_outerHeight = $('.header').outerHeight(true); // reemplaza con el ID de tu elemento
        var footer_outerHeight = $('.footer').outerHeight(true);
        var alturaPantalla = $(document).height();

        var topScreen = $(window).scrollTop(); 
        var bottomScreen = $(window).scrollTop() + $(window).height(); 

        var currentPosition = $(window).scrollTop(); 
        
        if(topScreen < header_outerHeight || (alturaPantalla - footer_outerHeight) < bottomScreen){
            // evalua si la parte superior de la pantalla esta fuera de la zona del header, o si la zona inferior de la pantalla está fuera de la zona del footer
            if( $('.return-to-up').hasClass('slide-in-blurred-br') && (! hidden)){
                hiden_btn_return();
            }

            hidden = true;
        }else{
            hidden = false;
        }

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