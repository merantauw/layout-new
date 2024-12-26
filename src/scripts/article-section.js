document.addEventListener('DOMContentLoaded', function() {
    function moveTagsBlock() {
        const windowWidth = window.innerWidth;

        if (windowWidth < 1024) {
            const tagsBlock = document.querySelector('.article__tags');

            const firstParagraph = document.querySelector('.article__content-text');
            if (tagsBlock && firstParagraph) {
                firstParagraph.insertAdjacentElement('afterend', tagsBlock);
            }
        }
    }

    // Вызываем функцию при загрузке страницы
    moveTagsBlock();

    // Вызываем функцию при изменении размера окна
    window.addEventListener('resize', moveTagsBlock);
});