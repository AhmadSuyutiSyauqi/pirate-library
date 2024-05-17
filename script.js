const fiction = document.querySelector('#fiction');
const ficMenu = document.querySelector('#fic-menu');

fiction.addEventListener('mouseover', () => {
    ficMenu.classList.remove('hidden');
    ficMenu.classList.add('block');
});

fiction.addEventListener('mouseout', () => {
    setTimeout(() => {
        if (!ficMenu.matches(':hover')) {
            ficMenu.classList.remove('block');
            ficMenu.classList.add('hidden');
        }
    }, 200); // Timeout to allow moving the mouse to the menu
});

ficMenu.addEventListener('mouseout', () => {
    ficMenu.classList.remove('block');
    ficMenu.classList.add('hidden');
});

ficMenu.addEventListener('mouseover', () => {
    ficMenu.classList.remove('hidden');
    ficMenu.classList.add('block');
});