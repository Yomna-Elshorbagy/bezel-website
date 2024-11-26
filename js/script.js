document.addEventListener("DOMContentLoaded", () => {
    let typed = new Typed('#typed-text', {
      strings: ["Websites", "softwares", "apps"],
      typeSpeed: 100,
      backSpeed: 150,
      loop: true,
    });
  });
  
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});