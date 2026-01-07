function navigateToLearnMore() {
    window.location.href = "src/html/learnMore.html";
}

function NavigateToShop() {
    window.location.href = "src/html/shop.html";
}

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const sideNav = document.querySelector('.side-nav');
    const sideOverlay = document.querySelector('.side-overlay');
    const sideClose = document.querySelector('.side-nav .close-btn');

    function openNav() {
        if (sideNav && sideOverlay) {
            sideNav.classList.add('open');
            sideOverlay.classList.add('open');
            sideNav.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeNav() {
        if (sideNav && sideOverlay) {
            sideNav.classList.remove('open');
            sideOverlay.classList.remove('open');
            sideNav.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    }

    if (hamburger) hamburger.addEventListener('click', openNav);
    if (sideClose) sideClose.addEventListener('click', closeNav);
    if (sideOverlay) sideOverlay.addEventListener('click', closeNav);

    // close on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeNav();
    });
  
    // Contact form demo submit
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (ev) => {
            ev.preventDefault();
            const success = document.querySelector('.contact-success');
            if (success) {
                success.style.display = 'block';
                contactForm.reset();
                setTimeout(() => success.style.display = 'none', 4000);
            }
        });
    }
});