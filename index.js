const hamburger = document.querySelector('.hamburger');
const desktopNav = document.querySelector('.desktop-nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  desktopNav.classList.toggle('active');
});

document.querySelectorAll('.navbar-tools').forEach((n) => n
  .addEventListener('click', () => {
    hamburger.classList.remove('active');
    desktopNav.classList.remove('active');
  }));
