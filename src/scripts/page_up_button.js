const pageUpButton = document.getElementById('pageUpButton');
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        pageUpButton.classList.add('show');
    } else {
        pageUpButton.classList.remove('show');
    }
});
window.addEventListener('scroll', function(){
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        header.classList.add('active');
    } else {
        header.classList.remove('scrolled');
        header.classList.remove('active');
    }
})

pageUpButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});