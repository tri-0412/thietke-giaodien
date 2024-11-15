const VerticalMenuButton = document.querySelector('.Icon-btn');
const VerticalMenuButtonIcon = document.querySelector('.Icon-btn i');
const VerticalMenu = document.querySelector('.menuV');

VerticalMenuButton.onclick = function() {
    VerticalMenu.classList.toggle('open');
    const isOpen = VerticalMenu.classList.contains('open');
    VerticalMenuButtonIcon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
};

