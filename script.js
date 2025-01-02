// JavaScript for Animations and Interactions

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Form Submission Alert
document.querySelector('.contact-form').addEventListener('submit', event => {
    event.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    event.target.reset();
});

// Skills Animation
document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skill.classList.add('animate');
    });

    skill.addEventListener('mouseout', () => {
        skill.classList.remove('animate');
    });
});

// Scroll-to-top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Sticky Header Effect
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// Scroll Reveal Animation
const sections = document.querySelectorAll("section");
const revealSection = function () {
    const triggerBottom = window.innerHeight / 1.2;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add("visible");
        } else {
            section.classList.remove("visible");
        }
    });
};

window.addEventListener("scroll", revealSection);




