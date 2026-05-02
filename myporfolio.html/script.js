const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Scroll reveal animation
window.addEventListener("scroll", () => {
    const images = document.querySelectorAll("img");

    images.forEach(img => {
        const imgTop = img.getBoundingClientRect().top;

        if (imgTop < window.innerHeight - 50) {
            img.style.opacity = "1";
            img.style.transform = "translateY(0)";
        }
    });
});

// Initial image animation state
document.querySelectorAll("img").forEach(img => {
    img.style.opacity = "0";
    img.style.transform = "translateY(50px)";
    img.style.transition = "all 1s ease";
});