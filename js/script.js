document.addEventListener("DOMContentLoaded", function () {
    let navbarToggler = document.querySelector(".navbar-toggler");
    let navbarCollapse = document.querySelector(".navbar-collapse");

    window.addEventListener("scroll", function () {
        if (navbarCollapse.classList.contains("show")) {
            navbarToggler.click();
        }
    });

    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });
});