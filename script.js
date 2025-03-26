// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(45, 45, 45, 0.95)';
    } else {
        navbar.style.backgroundColor = 'var(--secondary-color)';
    }
});

// Scroll animation for sections
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to all sections
document.querySelectorAll('.section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Add fade-in class to timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    item.classList.add('fade-in');
    observer.observe(item);
});

// Add fade-in class to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.classList.add('fade-in');
    observer.observe(card);
});

// Add fade-in class to publication items
document.querySelectorAll('.publication-item').forEach(item => {
    item.classList.add('fade-in');
    observer.observe(item);
});

// Add fade-in class to blog cards
document.querySelectorAll('.blog-card').forEach(card => {
    card.classList.add('fade-in');
    observer.observe(card);
});

// Typing animation for the title
const title = document.querySelector('.title');
const text = title.textContent;
title.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        title.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing animation when the page loads
window.addEventListener('load', typeWriter);

// Mobile menu toggle (if needed in the future)
const createMobileMenu = () => {
    const nav = document.querySelector('.nav-content');
    const menuButton = document.createElement('button');
    menuButton.classList.add('mobile-menu-button');
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    
    menuButton.addEventListener('click', () => {
        nav.classList.toggle('mobile-menu-open');
    });
    
    document.querySelector('.navbar').prepend(menuButton);
};

// Initialize mobile menu for smaller screens
if (window.innerWidth <= 768) {
    createMobileMenu();
}

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        if (!document.querySelector('.mobile-menu-button')) {
            createMobileMenu();
        }
    } else {
        const menuButton = document.querySelector('.mobile-menu-button');
        if (menuButton) {
            menuButton.remove();
        }
        document.querySelector('.nav-content').classList.remove('mobile-menu-open');
    }
}); 