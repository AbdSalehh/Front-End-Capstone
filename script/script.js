const barsMenu = document.querySelector('.bars-menu');
const nav = document.querySelector('.nav');
const main = document.querySelector('main');
const password = document.querySelector('#pw');
const confirmPw = document.querySelector('#confirmPw');
const showPw = document.querySelector('.password>button');
const showConfirmPw = document.querySelector('.password>#confirm');

barsMenu.addEventListener('click', (event) => {
    event.stopPropagation();
    event.preventDefault();

    nav.classList.toggle('open');
    barsMenu.classList.toggle('active');
});

main.addEventListener('click', (event) => {
    event.stopPropagation();
    event.preventDefault();

    nav.classList.remove('open');
    barsMenu.classList.remove('active');
});

// password

showPw.addEventListener('click', (event) => {
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
