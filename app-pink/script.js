/* автоматизация для бургер меню */

/* обращаемся к бургер-элементу */
const iconMenu = document.querySelector('.header__menu__icon');

if (iconMenu) {
    
    /* находим элемент с классом */
    const menuNav = document.querySelector('.header__menu');           /* ??? */

    /* далее делаем обработчик событий: клика по иконке */
    iconMenu.addEventListener("click", function(e) {
        /* при событии клика добавляем класс "_active" к элементу */
        iconMenu.classList.toggle('_active');
        menuNav.classList.toggle('_active');

        /* включаем класс для Запрета скроллинга страницы при активном меню */
        document.body.classList.toggle('_lock');
    });
}