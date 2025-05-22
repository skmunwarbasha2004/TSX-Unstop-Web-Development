// Initialize AOS
AOS.init({
    duration: 1200,
    easing: 'ease-in-out-back',
    once: true
});

// Initialize Particles.js
particlesJS('particles-js', {
    particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: ['#00b7ff', '#ff007a'] },
        shape: { type: 'circle' },
        opacity: { value: 0.6, random: true },
        size: { value: 4, random: true },
        line_linked: { enable: true, distance: 120, color: '#ff007a', opacity: 0.3, width: 1.5 },
        move: { enable: true, speed: 3, direction: 'none', random: true, straight: false, out_mode: 'out' }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
        modes: { grab: { distance: 150 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const navbar = document.querySelector('.navbar');
const icon = themeToggle.querySelector('i');

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    navbar.classList.add('navbar-dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    navbar.classList.toggle('navbar-dark-mode');
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Active Nav Link Highlighting
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Custom Cursor
const cursor = document.getElementById('customCursor');
let trailTimeout;

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursor.classList.add('trail');

    clearTimeout(trailTimeout);
    trailTimeout = setTimeout(() => {
        cursor.classList.remove('trail');
    }, 100);
});

document.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, button')) {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
    } else {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    }
});