
const openMenuBtns = document.querySelectorAll('.menu-btn');
const fullscreenMenu = document.getElementById('fullscreenMenu');
const closeMenuBtn = document.getElementById('closeMenuBtn'); 


openMenuBtns.forEach(button => {
    button.addEventListener('click', () => {
        fullscreenMenu.classList.add('active');
    });
});


closeMenuBtn.addEventListener('click', () => {
    fullscreenMenu.classList.remove('active');
});