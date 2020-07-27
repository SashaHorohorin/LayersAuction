
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
    
testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});

//----------------------------------------------------------------------------------------------------------------------

let user_icon = document.querySelector('.user-header__icon');
user_icon.addEventListener("click", function(e){
    let user_menu = document.querySelector('.user-header__menu');
    user_menu.classList.toggle('_active');
});

let menu_icon = document.querySelector('.header__icon');
let menu_body = document.querySelector('.menu__body');
let body = document.querySelector('body');
menu_icon.addEventListener("click", function(e){
    //let menu_icon = document.querySelector('.header__icon');
    menu_icon.classList.toggle('active');
    menu_body.classList.toggle('active');
    body.classList.toggle('lock');
});

//--------------------------------------------------------------------------------------------------------
// Закрывает выплывающее меню при клике в любую часть экрана----------------------------------------------
document.documentElement.addEventListener("click", function(e){
    if(!e.target.closest('.user-header')){
        let user_menu = document.querySelector('.user-header__menu');
        user_menu.classList.remove('_active');
    }
});
// Закрывает выплывающее меню при клике в любую часть экрана----------------------------------------------
//--------------------------------------------------------------------------------------------------------

// СЛАЙДЕР-------------------------------------------------------------------------------------------------
// 1-------------------------------------------
$(document).ready(function(){
    $('.main-slider__body').slick({
        appendArrows:$('.control-main-slider')
    });
});
// 1-------------------------------------------


// 2-------------------------------------------
$(document).ready(function(){
    $('.slider-lots__body').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        appendArrows:$('.control-slider-lots'),
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
// 2-------------------------------------------

// 3-------------------------------------------
$(document).ready(function(){
    $('.slider-quotes__body').slick({
        appendArrows:$('.control-slider-quotes__circle'),
        fade: true,
        speed: 1400
    });
});
// 3-------------------------------------------
// СЛАЙДЕР-------------------------------------------------------------------------------------------------
// Плавный переход между ссылками лейдинга-----------------------------------
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        
     
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
     
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top-70;
             
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
    });
});
// Плавный переход между ссылками лейдинга-----------------------------------
