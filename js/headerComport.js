document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const closeMenu = document.getElementById("closeMenu");
console.log("oi")
    menuToggle.addEventListener("click", function () {
        mobileMenu.classList.add("open");
    });

    closeMenu.addEventListener("click", function () {
        mobileMenu.classList.remove("open");
    });

    // Fecha o menu se clicar fora dele
    document.addEventListener("click", function (event) {
        if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            mobileMenu.classList.remove("open");
        }
    });
});
