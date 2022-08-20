const hamburguer = document.querySelector('.header .nav-grade .nav-lista .hamburguer');
const menu_mobile = document.querySelector('.header .nav-grade .nav-lista ul');
const menu_item = document.querySelectorAll('.header .nav-grade .nav-lista ul li a');
const header = document.querySelector('.header.conteiner');

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active');
    menu_mobile.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if(scroll_position > 250) {
        header.style.backgroundColor = "#0D7BBF";
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburguer.classList.toggle('active');
        menu_mobile.classList.toggle('active');
    });
});