// модальное окно

const modalBtn = $('.btn');
const modalClose = $('.form-block__close');
const modalOverlay = $('.form-block');
const modalWrapper = $('.form-block__container');
const modalForm = $('.form__fieldset');
const body = $('body');
const originalModalForm = modalForm.html();

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