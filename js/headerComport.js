document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");

  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.add("open");
  });

  closeMenu.addEventListener("click", function () {
    mobileMenu.classList.remove("open");
  });

  document.addEventListener("click", function (event) {
    if (
      !mobileMenu.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      mobileMenu.classList.remove("open");
    }
  });
});
window.addEventListener("DOMContentLoaded", (event) => {
    let activeLink = null;
  
    const links = document.querySelectorAll("nav a");
  
    links.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault(); 
  

        if (activeLink) {
          activeLink.classList.remove("active");
        }
  
        if (!link.querySelector("img")) {
          link.classList.add("active");
        }

        activeLink = link;
  
 
        window.location.href = link.href;
      });
    });
  });
  
