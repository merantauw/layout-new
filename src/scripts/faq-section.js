const accordionButtons = document.querySelectorAll('[data-accordion-button]');
accordionButtons.forEach(accordionButton => {
    accordionButton?.addEventListener('click', (event) => {
        const accordionItem = event.target.closest('[data-accordion-item]');
        const accordionContent = accordionItem.querySelector('[data-accordion-content]');
        const accordionHeader = accordionItem.querySelector('[data-accordion-button]');

        if (accordionContent.style.maxHeight) {
            accordionContent.removeAttribute('style');
            accordionHeader.classList.remove('active');
            accordionItem.classList.remove('faq__item--active');
        } else {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            accordionHeader.classList.add('active');
            accordionItem.classList.add('faq__item--active');
        }
    });
});