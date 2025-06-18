let swiper = null;

function prev(){
    swiper.slidePrev();
}

function next(){
    swiper.slideNext();
}

window.addEventListener('load', function () {
    
    swiper = new Swiper('.swiper', {
        
         keyboard: {
            enabled: true,
            onlyInViewport: false,
          },
          
    });

});    

