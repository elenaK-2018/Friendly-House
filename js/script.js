// модальное окно

const modalBtn = $('.btn');
const modalClose = $('.form-block__close');
const modalOverlay = $('.form-block');
const modalWrapper = $('.form-block__container');
const modalForm = $('.form');
const body = $('body');
const originalModalForm = modalForm.html();
const modalTitle = $('.form-block__title');

modalBtn.on('click', function() {
    modalOverlay.show(400);
    body.addClass('no-scroll');
});

modalClose.on('click', function() {
    modalOverlay.hide(400);
    body.removeClass('no-scroll');
    modalForm.html(originalModalForm);
});

modalOverlay.on('click', function(event) {
	if ($(event.target).closest(modalWrapper).length === 0) {
		$(this).fadeOut();
        body.removeClass('no-scroll');
        modalForm.html(originalModalForm);
	}
});

modalForm.submit(function (event) {
    event.preventDefault();
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'POST',
        data: $(this).serialize(),
        success(data) {
            modalTitle.text('Ваша заявка принята, номер заявки ' + data.id);  
            modalForm.slideUp(300);
        },
        error() {
            modalTitle.text('Что-то пошло не так, попробуйте позже!');
        }
    })
});

 // маска

const inputTel = document.querySelector('.form__input_tel');    
const telMask = new Inputmask('+7(999)999-99-99'); 

telMask.mask(inputTel); 


 // бургер-меню

const burgerMenu = $('.header__menu-btn');
const menuList = $('.menu__wrapper');
const link = $('.menu__link');

function openMenu() {
    burgerMenu.addClass('active');
    menuList.addClass('active');
    body.addClass('lock');
}

function closeMenu() {
    burgerMenu.removeClass('active');
    menuList.removeClass('active');
    body.removeClass('lock');
}

$(document).on('mousedown', function(event) {
    if (!$(event.target).closest('.menu__wrapper').length && !$(event.target).is(burgerMenu)) {
        closeMenu();
    }
});

burgerMenu.on('click', function() {
    const open = burgerMenu.hasClass('active');

    if (open) {
        closeMenu()
    } else {
        openMenu()
    }
});

link.on('click', function() {
    closeMenu()
});

// slider  работает только с перезагрузкой!!!

// let init = false;
// let swiper;
// function swiperCard() {
//     if (window.innerWidth <= 730) {
//         if (!init) {
//             init = true;
//             swiper = new Swiper('.swiper-container', {
//                 slidesPerView: 1.5,
//                 loop: true,
//                 autoplay: {
//                 delay: 3000,
//                 },
//     });
// }
// } else if (init) {
//     swiper.destroy();
//     init = false;
// }
// }
// swiperCard();
// window.addEventListener("resize", swiperCard);



// slider  работает только с перезагрузкой!!!

// let swiper = null;

// function enableSwiper() {
//     swiper = new Swiper('.swiper-container', {
//         slidesPerView: 1.5,
//         loop: true,
//         autoplay: {
//             delay: 3000,
//         },
//     });
// }

// function disableSwiper() {
//     if (swiper !== null) {
//         swiper.destroy(true, true);
//         swiper = null;
//     }
// }

// function handleResize() {
//     if (window.innerWidth <= 730) {
//         if (swiper === null) {
//             enableSwiper();
//         }
//     } else {
//         if (swiper !== null) {
//             disableSwiper();
//         }
//     }
// }

// window.addEventListener('resize', handleResize);
// window.addEventListener('load', handleResize);

// handleResize();


// slider

const swiper = new Swiper('.swiper-container', {
    loop: true,
    spaceBetween: 10, 
    speed: 800, 
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        320: {
            slidesPerView: 1.5,
        },
        480: {
            slidesPerView: 2,
        }    
    },
});


const swiperNew = new Swiper('.sample-slider', {
    loop: true,
    slidesPerView: 1, 
    spaceBetween: 20,        
    navigation: {
        nextEl: '.pets__arrow-right',
        prevEl: '.pets__arrow-left',
    },
    on: {
        resize: function enableOnlyMobile(swiperNew){
            if(775 < window.innerWidth) {
                swiperNew.disable()
                swiperNew.el.classList.add('-non-slider')
            } else {
                swiperNew.enable()
                swiperNew.el.classList.remove('-non-slider')
            }
        },
    }
})


// карта

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [55.847958, 37.374869],
            zoom: 15
    }, 
    ),
    // Создаем геообъект с типом геометрии "Точка".
    myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [55.847958, 37.374869]
        },      
    })

    myMap.geoObjects
        .add(myGeoObject)
        .add(new ymaps.Placemark([55.847958, 37.374869], {
            iconCaption: 'Приют для животных'
        }, 
    ))
}



// const navigation = $('.menu__wrapper');
// const navigationClose = $('.header__menu-btn');
// const presentBtn = $('.btn');
// const modalOrder = $('.form-block')
// const modalOrderClose = $('.form-block__close');

// //!--inert   для доступности сайта

// let prevActiveElement;


// function addInnert(elem) {
//     prevActiveElement = document.activeElement;
//     for (let i = 0; i < document.body.children.length; i++) {
//         if (document.body.children[i] !== elem) {
//             document.body.children[i].inert = true;
//         }
//     };
//     elem.inert = false;
//     if (elem.closest('[inert]')) elem.closest('[inert]').inert = false;

//     for (let i = 0; i < window.elemsInert.length; i++) {
//         if (elem === window.elemsInert[i].elem && window.elemsInert[i].esc) {
//             function esc(e) {
//                 if (e.key == 'Escape') {
//                     window.elemsInert[i].esc()
//                 }
//                 document.removeEventListener('keydown', esc);
//             }
//             document.addEventListener('keydown', esc);
//         }
//     }
// }

// function activationInnert(elemsInert) {
//     window.elemsInert = elemsInert;

//     function removeInnert(elem) {
//         if (elem) {
//             for (let i = 0; i < document.body.children.length; i++) {
//                 if (document.body.children[i] !== elem) {
//                     document.body.children[i].inert = false;
//                 }
//             };
//             elem.innert = true;
//             prevActiveElement.focus();
//         }

//         for (let i = 0; i < elemsInert.length; i++) {
//             if (window.screen.width <= elemsInert[i].breakpoints || !elemsInert[i].breakpoints) {
//                 elemsInert[i].elem.inert = true
//                 console.log(elemsInert[i]);
//             }
//         }
//     }
//     removeInnert();

//     return removeInnert
// }

// //!--end-innert

// const removeInnert = activationInnert([
//     {
//         elem: modalOrder.get(0),
//         esc: closeModal
//     },
//     {
//         elem: navigation.get(0),
//         esc: closeBurger,
//     }
// ]);


// function openBurger() {
//     navigation.addClass('navigation_open').animate({
//         left: 0,
//     }, 500, function () {
//         addInnert(navigation.get(0));//!--активируем inert на navigation
//         navigationClose.animate({
//             opacity: 1,
//         }, 300);
//     });
// }

// function closeBurger() {
//     navigationClose.animate({
//         opacity: 0,
//     }, 300, function () {
//         removeInnert(navigation.get(0))//!--Деактивируем inert 
//         navigation.animate({
//             left: '-400px',
//         }, 500).removeClass('navigation_open');
//     });
// }

// headerBurger.on('click', openBurger)

// navigationClose.on('click', closeBurger);

// function openModal() {
//     modalOrder.show(300);
//     addInnert(modalOrder.get(0));//!--активируем inert на modalOrder
// }

// function closeModal() {
//     modalOrder.hide(300);
//     removeInnert(modalOrder.get(0))//!--Деактивируем inert 
// }

// presentBtn.on('click', openModal)

// modalOrderClose.on('click', closeModal)

