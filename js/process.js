function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Mobile dropdown toggle
document.querySelectorAll('.dropdown > a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (window.innerWidth <= 992) {
            e.preventDefault();
            const parent = this.parentElement;
            parent.classList.toggle('active');
        }
    });
});

// Close menu if clicked outside
document.addEventListener('click', function(e) {
    const nav = document.querySelector('.nav-container');
    const navMenu = document.getElementById('navMenu');
    if (!nav.contains(e.target)) {
        navMenu.classList.remove('active');
        document.querySelectorAll('.dropdown').forEach(dd => dd.classList.remove('active'));
    }
});