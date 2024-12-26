function updateBackgroundImage() {
    const promoBlock = document.getElementById('promoBlock');
    if (promoBlock) {
        if (window.innerWidth < 520) {
            promoBlock.style.backgroundImage = "url('assets/images/webp/main-bg-mobs.webp')";
        } else {
            promoBlock.style.backgroundImage = "url('assets/images/webp/main-bg.webp')";
        }
    } else {
        console.error('Element with id "promoBlock" not found');
    }
}
document.addEventListener('DOMContentLoaded', updateBackgroundImage);
window.addEventListener('resize', updateBackgroundImage);