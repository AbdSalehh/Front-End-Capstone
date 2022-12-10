const responsiveToggle = document.querySelector('.responsive-toggle');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const courseCard = document.querySelector('.courseCard');
const courseText = document.querySelectorAll('.course-text');
const popupTitle = document.querySelector('.popup-header>h3');
const popupBody = document.querySelector('.popup-body');
const toggle = document.querySelector('.toggle');
const sidebar = document.querySelector('.sidebar');
const popup = document.querySelector(".popup-box");
const popupCloseBtn = popup.querySelector(".popup-close-btn");
const popupCloseIcon = popup.querySelector(".popup-close-icon");

toggle.addEventListener('click', (event) => {
    event.stopPropagation();
    responsiveToggle.classList.toggle('active');
    sidebar.classList.remove('open');
    courseCard.classList.remove('open');
});

hamburgerMenu.addEventListener('click', (event) => {
    event.stopPropagation();
    sidebar.classList.toggle('active');
});

responsiveToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    responsiveToggle.classList.remove('active');
    sidebar.classList.toggle('open');
    courseCard.classList.toggle('open');
});

for (let i = 0; i < courseText.length; i++) {
    courseText[i].addEventListener('click', (event) => {
        event.stopPropagation();
        popup.classList.add('open');
        popupTitle.innerHTML = 'Belajar Membaca';
        popupBody.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.`;
        popupCloseIcon.focus();
    });
}

popupCloseBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    popup.classList.remove('open');
});

popupCloseIcon.addEventListener('click', (event) => {
    event.stopPropagation();
    popup.classList.remove('open');
});