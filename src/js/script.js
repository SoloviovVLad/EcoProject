@@include('slider.js')

const btnLogin =$('.button-main-page--header');
const popupLogin = $('.popup-fade--login');
const popupLoginClose = $('.popup__close--login');

btnLogin.click(function(){
  popupLogin.removeClass('popup-fade--login--close');
    $('body').addClass('overflow-hidden');
});
  
popupLoginClose.click(function(){
    popupLogin.addClass('popup-fade--login--close');
    if(burgerMenu.hasClass('burger-menu--open')){

    }else{
        $('body').removeClass('overflow-hidden');
    }
});

// popup checkout 

const btnCheckout = $('.button-main-page--footer');
const popupCheckout = $('.popup-fade--checkout');
const popupCheckoutClose = $('.popup__close--checkout');

btnCheckout.click(function(){
  popupCheckout.removeClass('popup-fade--checkout--close');
    $('body').addClass('overflow-hidden');
});
  
popupCheckoutClose.click(function(){
    popupCheckout.addClass('popup-fade--checkout--close');
        $('body').removeClass('overflow-hidden');
   
});

// popup nimfa

const btnWhereIAm = $('.block-map__button-where-i-am');
const popupNimfa = $('.popup-fade--nimfa');
const popupNimfaClose = $('.popup__close--nimfa');

btnWhereIAm.click(function(){
  popupNimfa.removeClass('popup-fade--nimfa--close');
    $('body').addClass('overflow-hidden');
});
  
popupNimfaClose.click(function(){
    popupNimfa.addClass('popup-fade--nimfa--close');
        $('body').removeClass('overflow-hidden');
});

//burger menu open

const burgerOpen = $('.header__burger--click');
const burgerMenu = $('.burger-menu');


burgerOpen.click(function(){
    burgerOpen.toggleClass('header__burger__lines--active');
    burgerMenu.toggleClass('burger-menu--open');
    // $('body').toggleClass('overflow-hidden');    
});
jQuery(function(){jQuery(window).scroll(function(){
    console.log(jQuery(window).scrollTop());
    console.log(jQuery('.container').offset());
        if($(window).scrollTop()>=jQuery('.container').offset().top){
       
        }
    });
});