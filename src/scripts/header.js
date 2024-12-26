document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const headerBottom = document.querySelector('.header-bottom');
    const headerMenu = document.querySelector('.header-menu');
    const body = document.body;

    if (header) {
        let lastScrollTop = 0;

        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                header.classList.add('hidden');
            } else {
                header.classList.remove('hidden');
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Для IE и Opera
        }, false);
    }

    if (mobileMenuButton && headerBottom && headerMenu) {
        mobileMenuButton.addEventListener('click', function() {
            headerBottom.classList.toggle('expanded');
            headerMenu.classList.toggle('expanded');
            header.classList.toggle('expanded');
            body.classList.toggle('body-no-scroll');
            mobileMenuButton.classList.toggle('expanded'); // Добавляем класс expanded к кнопке бургер-меню
        });
    }
});