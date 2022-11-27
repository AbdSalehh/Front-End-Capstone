profile.addEventListener('click', () => {
    menu.classList.toggle('active');

    document.querySelector('.profile>i:first-child').style.transform = 'rotate(180deg)';

    if (!menu.classList.contains('active')) {
        document.querySelector('.profile>i:first-child').style.transform = 'rotate(0deg)';
    }
});