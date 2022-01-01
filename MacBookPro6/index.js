const burger = document.getElementById('burger');
const navLinks = document.querySelector('.main_header-navi');
burger.addEventListener('click', () => {
   navLinks.classList.toggle('active');
});

