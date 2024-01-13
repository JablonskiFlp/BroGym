document.addEventListener('DOMContentLoaded', function () {
    const pressIt = document.getElementById('BroGym-header__icon');
    const nav = document.querySelector('.BroGym-header__nav');

    function toggleNav() {
        if (window.innerWidth < 800) {
            nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
        } else {
            nav.style.display = 'flex';
        }
    }

    pressIt.addEventListener('mouseover', toggleNav);

    nav.addEventListener('mouseleave', toggleNav);

    document.getElementById('arrow-down').addEventListener('click', function() {
        window.scrollTo({
            top: window.innerHeight-90,
            behavior: 'smooth'
        });
    });
});