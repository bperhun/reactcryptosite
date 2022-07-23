const burger__button = document.querySelector('.header__button');

function onClickMenu() {
    document.querySelector(".header__line").classList.toggle("active");
    document.querySelector(".header__menu").classList.toggle("active");
}

burger__button.onclick = onClickMenu;