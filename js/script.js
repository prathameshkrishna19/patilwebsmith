// ------------------------------
// LOAD PARTIAL HTML FILES (Navbar)
// ------------------------------

const partials = {
    "navbar-placeholder": "/navbar.html"
};

Object.keys(partials).forEach(id => {

    fetch(partials[id])
        .then(res => {

            if (!res.ok) {
                throw new Error("HTTP error " + res.status);
            }

            return res.text();
        })

        .then(data => {

            const element = document.getElementById(id);

            if (element) {
                element.innerHTML = data;

                if (id === "navbar-placeholder") {
                    initNavbarFeatures();
                }
            }

        })

        .catch(err => console.error("Error loading:", partials[id], err));

});



// ------------------------------
// NAVBAR FEATURES
// ------------------------------

function initNavbarFeatures() {

    const navMenu = document.getElementById("navMenu");
    const menuToggle = document.getElementById("menuToggle");

    if (!navMenu || !menuToggle) return;

    // Mobile Menu Toggle
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });


    // Mobile Dropdown
    const dropdownBtns = document.querySelectorAll(".dropdown > a");

    dropdownBtns.forEach(btn => {

        btn.addEventListener("click", function (e) {

            if (window.innerWidth <= 992) {

                e.preventDefault();

                const parent = this.parentElement;

                parent.classList.toggle("active");

            }

        });

    });


    // Close menu when clicking outside
    document.addEventListener("click", function (e) {

        const nav = document.querySelector(".navbar");

        if (!nav.contains(e.target)) {

            navMenu.classList.remove("active");

            document.querySelectorAll(".dropdown").forEach(dd => {
                dd.classList.remove("active");
            });

        }

    });

}



// ------------------------------
// SMOOTH SCROLL
// ------------------------------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

    });

});



// ------------------------------
// CONTACT FORM SUCCESS MESSAGE
// ------------------------------

const contactForm = document.querySelector('form[action*="formspree"]');

if (contactForm) {

    contactForm.addEventListener('submit', function () {

        setTimeout(() => {

            alert('✅ Thank you! We will contact you within 24 hours.');

        }, 100);

    });

}