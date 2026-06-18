// CoTeSy IT Services Group Website

// Smooth scrolling for menu links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Reveal sections when scrolling
const sections = document.querySelectorAll('section');

const revealSection = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight * 0.85;

        if (sectionTop < screenPosition) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
};

// Initial styles
sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.8s ease";
});

window.addEventListener('scroll', revealSection);
window.addEventListener('load', revealSection);

// Contact button message
const contactLinks = document.querySelectorAll('.contact a');

contactLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log('Contact link clicked');
    });
});

// Dynamic year in footer
const footer = document.querySelector('footer');

if (footer) {
    footer.innerHTML =
        `© ${new Date().getFullYear()} CoTeSy IT Services Group. All Rights Reserved.`;
}
