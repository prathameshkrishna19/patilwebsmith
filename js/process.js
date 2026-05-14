// ------------------------------
// PROCESS SECTION
// ------------------------------

document.addEventListener("DOMContentLoaded", () => {

    const steps =
        document.querySelectorAll(".step");

    const details =
        document.querySelectorAll(".process-detail");

    const slides =
        document.querySelectorAll(".carousel-slide");

    let currentIndex = 0;

    // SHOW STEP
    function showStep(index) {

        // remove active
        steps.forEach(step =>
            step.classList.remove("active")
        );

        details.forEach(detail =>
            detail.classList.remove("active")
        );

        slides.forEach(slide =>
            slide.classList.remove("active")
        );

        // add active
        steps[index].classList.add("active");

        details[index].classList.add("active");

        slides[index].classList.add("active");

        currentIndex = index;
    }

    // CLICK EVENTS
    steps.forEach((step, index) => {

        step.addEventListener("click", () => {

            showStep(index);

        });

    });

    // AUTO SLIDE
    setInterval(() => {

        currentIndex++;

        if (currentIndex >= steps.length) {

            currentIndex = 0;

        }

        showStep(currentIndex);

    }, 3000);

});