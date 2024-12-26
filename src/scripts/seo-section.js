document.addEventListener('DOMContentLoaded', function () {
    const seoView = document.getElementById('seoView');
    const hideSeoBtn = document.getElementById('hideSeoBtn');
    const seoDescription = document.querySelector('.seo-description');
    const maxWords = 35;

    function truncateText(text, maxWords) {
        const words = text.split(' ');
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...';
        }
        return text;
    }

    const originalText = seoDescription.textContent;
    const truncatedText = truncateText(originalText, maxWords);
    seoDescription.textContent = truncatedText;

    const showSeoBtn = document.createElement('button');
    showSeoBtn.id = 'showSeoBtn';
    showSeoBtn.className = 'seo-button show';
    showSeoBtn.textContent = 'Показать полностью';
    seoDescription.appendChild(showSeoBtn);

    showSeoBtn.addEventListener('click', () => {
        seoView.classList.add('full');
        seoDescription.textContent = originalText;
    });

    hideSeoBtn.addEventListener('click', () => {
        seoView.classList.remove('full');
        seoDescription.textContent = truncatedText;
        seoDescription.appendChild(showSeoBtn);
    });
});