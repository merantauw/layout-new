document.addEventListener('click', function(event) {
    if (event.target.closest('[data-modal]')) {
        var modal = document.getElementById('modal');
        var modalContent = document.querySelector('.modal-content');
        var header = document.querySelector('header');

        modal.classList.add('show');
        document.body.classList.add('no-scroll');
        header.classList.add('hidden');

        setTimeout(function() {
            modalContent.classList.add('show');
        }, 10);
    }
});

document.querySelector('.modal-close').addEventListener('click', function() {
    var modalContent = document.querySelector('.modal-content');
    var header = document.querySelector('header');

    modalContent.classList.remove('show');

    setTimeout(function() {
        document.getElementById('modal').classList.remove('show');
        document.body.classList.remove('no-scroll');
        header.classList.remove('hidden');
    }, 500);
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('modal')) {
        var modalContent = document.querySelector('.modal-content');
        var header = document.querySelector('header');

        modalContent.classList.remove('show');

        setTimeout(function() {
            document.getElementById('modal').classList.remove('show');
            document.body.classList.remove('no-scroll');
            header.classList.remove('hidden');
        }, 500);
    }
});