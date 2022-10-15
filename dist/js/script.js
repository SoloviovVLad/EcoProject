$(document).ready(function(){
    let positionProject = 0;
    const slidesToShow = 1;
    const slidesToScroll = 1;
    const container = $('.block-map__slider__wrapper');
    const trackProject = $('.block-map__slider__track');
    const itemProject = $('.block-map__slider__item');
    const btnPrevProject = $('.block-map__slider__block-arrows__arrow__prev');
    const btnNextProject = $('.block-map__slider__block-arrows__arrow__next');
    const itemsCountProjects = itemProject.length; 
    const ItemWidth = container.width()/slidesToShow; 
    const movePosition = slidesToScroll * ItemWidth;
    let currentNumberItem = $('.block-map__slider__count-items--current');
    firstItem = 1;
    const TotalItems = $('.block-map__slider__count-items--total');
    //slider for scroll Projects block
    TotalItems.html(`${itemsCountProjects}`);

    itemProject.each(function(index, itemProject){
        $(itemProject).css({
            minWidth: ItemWidth,
        });
    });

    btnPrevProject.click(function(){
        if(positionProject === 0){
            positionProject = -(movePosition * itemsCountProjects);
            firstItem = itemsCountProjects+1;
            setPositionProject();
        }
        positionProject +=movePosition;
        firstItem--;
        currentNumberItem.html(`${firstItem}`);
        setPositionProject();
        
    });

    btnNextProject.click(function(){
        if(positionProject === -(movePosition * itemsCountProjects) + movePosition){
            positionProject = ItemWidth;
            firstItem = 0;
            setPositionProject();
        }
        positionProject -= movePosition;
        firstItem++;
        currentNumberItem.html(`${firstItem}`);
        setPositionProject();
        

    });

    const setPositionProject = () => {
        trackProject.css({
            transform: `translateX(${positionProject}px)`
        });
    };
    //block-be-aware slider

    let positionBeAware = 0;
    const containerBeAware = $('.block-be-aware__slider__wrapper');
    const trackBeAware = $('.block-be-aware__slider__track');
    const itemBeAware = $('.block-be-aware__slider__item');
    const btnPrevBeAware = $('.block-be-aware__slider__block-arrows__arrow__prev');
    const btnNextBeAware = $('.block-be-aware__slider__block-arrows__arrow__next');
    const itemsCountBeAware = itemBeAware.length; 
    const ItemWidthBeAware = itemBeAware.width();
    const movePositionBeAware = ItemWidthBeAware+70;
    console.log(movePositionBeAware); 
    let currentNumberItemBeAware = $('.block-be-aware__slider__count-items--current');
    firstItemBeAware = 1;
    const TotalItemsBeAware = $('.block-be-aware__slider__count-items--total');
    //slider for scroll be-aware block
    TotalItemsBeAware.html(`${itemsCountBeAware}`);

    itemBeAware.each(function(index, itemBeAware){
        $(itemBeAware).css({
            minWidth: ItemWidthBeAware,
        });
    });

    btnPrevBeAware.click(function(){
        if(positionBeAware === 0){
            positionBeAware = -(movePositionBeAware * itemsCountBeAware);
            firstItemBeAware = itemsCountBeAware+1;
            setPositionProjectBeAware();
        }
        positionBeAware +=movePositionBeAware;
        firstItemBeAware--;
        currentNumberItemBeAware.html(`${firstItemBeAware}`);
        setPositionProjectBeAware();
    });

    btnNextBeAware.click(function(){
        if(positionBeAware === -(movePositionBeAware * itemsCountBeAware) + movePositionBeAware){
            positionBeAware = ItemWidthBeAware+70;
            firstItemBeAware = 0;
            setPositionProjectBeAware();
        }
        positionBeAware -= movePositionBeAware;
        firstItemBeAware++;
        currentNumberItemBeAware.html(`${firstItemBeAware}`);
        setPositionProjectBeAware();
    });

    const setPositionProjectBeAware = () => {
        trackBeAware.css({
            transform: `translateX(${positionBeAware}px)`
        });
    };
});

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