const menu = document.getElementById('menu');

// Logo
window.addEventListener('scroll', function () {
    const container = document.getElementById('container');
    if (window.scrollY > 80) {
        container.classList.add('scrolled');
        menu.classList.remove('clicked');

    } else {
        container.classList.remove('scrolled');
    }
});

// Menu
window.addEventListener('click', function () {
    if (menu.classList.contains("clicked")) {
        menu.classList.remove('clicked');
    }
});
menu.addEventListener('click', function (event) {
    event.stopPropagation();
    menu.classList.toggle('clicked');
});
