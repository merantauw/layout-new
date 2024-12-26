document.addEventListener('DOMContentLoaded', function () {
    function initAccordion() {
        const accordionButtons = document.querySelectorAll('[data-accordion-button]');
        accordionButtons.forEach(accordionButton => {
            accordionButton.removeEventListener('click', toggleAccordion);
            accordionButton.addEventListener('click', toggleAccordion);
        });
    }

    function toggleAccordion(event) {
        const accordionItem = event.target.closest('[data-accordion-item]');
        const accordionContent = accordionItem.querySelector('[data-accordion-content]');
        const accordionHeader = accordionItem.querySelector('[data-accordion-button]');

        if (accordionContent && accordionHeader) {
            if (accordionContent.style.maxHeight) {
                accordionContent.style.maxHeight = null;
                accordionHeader.classList.remove('active');
            } else {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                accordionHeader.classList.add('active');
            }
        }
    }

    function toggleFilters() {
        const filtersList = document.querySelector('.filters');
        const filtersToggle = document.querySelector('.filters__toggle');

        if (filtersList && filtersToggle) {
            if (filtersList.classList.contains('active')) {
                filtersList.style.maxHeight = null;
                filtersList.classList.remove('active');
                filtersToggle.classList.remove('active');
                filtersToggle.setAttribute('aria-expanded', 'false');
            } else {
                filtersList.style.maxHeight = filtersList.scrollHeight + 'px';
                filtersList.classList.add('active');
                filtersToggle.classList.add('active');
                filtersToggle.setAttribute('aria-expanded', 'true');
            }
        }
    }

    const filtersToggle = document.querySelector('.filters__toggle');
    if (filtersToggle) {
        filtersToggle.addEventListener('click', toggleFilters);
    }

    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                initAccordion();
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Инициализация аккордеона при первой загрузке страницы
    initAccordion();

    // Сворачиваем все элементы по умолчанию на ширине экрана меньше 1024px
    function collapseAllAccordions() {
        const filtersList = document.querySelector('.filters');
        const filtersToggle = document.querySelector('.filters__toggle');

        if (filtersList && filtersToggle) {
            filtersList.style.maxHeight = null;
            filtersList.classList.remove('active');
            filtersToggle.classList.remove('active');
            filtersToggle.setAttribute('aria-expanded', 'false');
        }
    }

    if (window.innerWidth < 1024) {
        collapseAllAccordions();
    }

    window.addEventListener('resize', function() {
        if (window.innerWidth < 1024) {
            collapseAllAccordions();
        }
    });
});