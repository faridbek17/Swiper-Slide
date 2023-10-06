
const swiper = new Swiper('.sample-slider', {
    // loop: true,                
    autoplay: {                        
        delay: 2000,  
    },       
    navigation: {                       
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {                      
        el: '.swiper-pagination',
    },
})