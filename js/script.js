// ------------------------------
// LOAD COMMON FILES
// ------------------------------

const partials = {

    head: "/partials/head.html",

    navbar: "/partials/navbar.html",

    scripts: "/partials/script.html",

    footer: "/partials/footer.html"

};


// LOAD HEAD
fetch(partials.head)

    .then(res => res.text())

    .then(data => {

        document.head.insertAdjacentHTML("beforeend", data);

    });


// LOAD NAVBAR
fetch(partials.navbar)

    .then(res => res.text())

    .then(data => {

        document.getElementById("navbar-placeholder")
            .innerHTML = data;

       // WAIT FOR BOOTSTRAP
    setTimeout(() => {

    const dropdownElementList =
        document.querySelectorAll('.dropdown-toggle');

         dropdownElementList.forEach(dropdownToggle => {

        new bootstrap.Dropdown(dropdownToggle);

    });

    }, 200);

    });

// LOAD SCRIPTS
fetch(partials.scripts)

    .then(res => res.text())

    .then(data => {

        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = data;

        tempDiv.querySelectorAll("script").forEach(oldScript => {

            const newScript = document.createElement("script");

            // copy attributes
            Array.from(oldScript.attributes).forEach(attr => {
                newScript.setAttribute(attr.name, attr.value);
            });

            newScript.text = oldScript.text;

            document.body.appendChild(newScript);

        });

    });

// LOAD FOOTER
fetch(partials.footer)

    .then(res => res.text())

    .then(data => {

        document.body.insertAdjacentHTML(
            "beforeend",
            data
        );

    });

// ------------------------------
// SMOOTH SCROLL
// ------------------------------

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener('click', function (e) {

            e.preventDefault();

            const target =
                document.querySelector(this.getAttribute('href'));

            if (target) {

                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

            }

        });

    });

});




// ------------------------------
// CONTACT FORM SUCCESS MESSAGE
// ------------------------------

document.addEventListener("DOMContentLoaded", () => {

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", async function (e) {

            e.preventDefault();

            const formData = new FormData(contactForm);

            try {

                const response = await fetch(contactForm.action, {

                    method: "POST",
                    body: formData

                });

                if (response.ok) {

                    alert('✅ Thank you! We will contact you within 24 hours.');

                    contactForm.reset();

                } else {

                    alert("❌ Something went wrong.");

                }

            } catch (error) {

                alert("❌ Error sending message.");

            }

        });

    }

});