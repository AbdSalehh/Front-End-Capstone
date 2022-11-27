const barsMenu = document.querySelector('.bars-menu');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');
const password = document.querySelector('#pw');
const confirmPw = document.querySelector('#confirmPw');
const showPw = document.querySelector('.password>button');
const showConfirmPw = document.querySelector('.password>#confirm');
const profile = document.querySelector('.profile');
const menu = document.querySelector('.selectMenu');

barsMenu.addEventListener('click', (event) => {
    event.stopPropagation();

    nav.classList.toggle('open');
    barsMenu.classList.toggle('active');
    menu.classList.remove('active');
    
    if (!menu.classList.contains('active')) {
        document.querySelector('.profile>i:first-child').style.transform = 'rotate(0deg)';
    }
});

body.addEventListener('click', (event) => {
    event.stopPropagation();

    nav.classList.remove('open');
    barsMenu.classList.remove('active');
});

showPw.addEventListener('click', () => {
    if (pw.type === "password") {
        pw.type = "text";
    } else {
        pw.type = "password";
    }
});

showConfirmPw.addEventListener('click', () => {
    if (confirmPw.type === "password") {
        confirmPw.type = "text";
    } else {
        confirmPw.type = "password";
    }
});
