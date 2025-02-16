document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animate');

    function checkVisibility() {
        const triggerBottom = window.innerHeight / 5 * 4; 

        elements.forEach(element => {
            const box = element.getBoundingClientRect();
            if (box.top < triggerBottom) {
                element.classList.add('visible'); 
            } else {
                element.classList.remove('visible'); 
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); 
});