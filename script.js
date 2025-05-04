document.addEventListener('DOMContentLoaded', function () {
    // Navigation active state
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    // Sticky header
    const header = document.querySelector('header');
    const heroHeight = document.querySelector('.hero').offsetHeight;
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    
    // Scroll event listener
    window.addEventListener('scroll', function () {
        let current = '';
        
        // Sticky header logic
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Active nav link
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // Mobile menu toggle
    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('active');
        
        if (nav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            nav.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!event.target.closest('nav') && !event.target.closest('.menu-toggle') && nav.classList.contains('active')) {
            nav.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Animated text in hero section
    const text = document.querySelector('.hero-text h2');
    if (text) {
        const originalText = text.textContent;
        const titles = [
            'Android Developer',
            'UI/UX Enthusiast',
            'Mobile App Builder',
            'Problem Solver'
        ];
        
        let titleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function typeEffect() {
            const currentTitle = titles[titleIndex];
            
            if (isDeleting) {
                text.textContent = currentTitle.substring(0, charIndex - 1);
                charIndex--;
            } else {
                text.textContent = currentTitle.substring(0, charIndex + 1);
                charIndex++;
            }
            
            if (!isDeleting && charIndex === currentTitle.length) {
                isDeleting = true;
                setTimeout(typeEffect, 1500);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                titleIndex = (titleIndex + 1) % titles.length;
                setTimeout(typeEffect, 500);
            } else {
                setTimeout(typeEffect, isDeleting ? 50 : 100);
            }
        }
        
        setTimeout(typeEffect, 1000);
    }
    
    // Animation on scroll
    const animatedElements = document.querySelectorAll('.project-card, .skill-category, .education-card, .strength-item, .contact-item');
    
    const animateOnScroll = function () {
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.transform = 'translateY(0)';
                element.style.opacity = '1';
            }
        });
    };
    
    // Set initial styles
    animatedElements.forEach(element => {
        element.style.transform = 'translateY(30px)';
        element.style.opacity = '0';
        element.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    
    // Trigger once on page load
    animateOnScroll();
    
    // Project cards flip effect
    const projectCards = document.querySelectorAll('.project-card-inner');
    
    projectCards.forEach(card => {
        const frontButton = card.querySelector('.view-details');
        const backButton = card.querySelector('.back-to-card');
        
        frontButton.addEventListener('click', function(e) {
            e.stopPropagation();
            card.style.transform = 'rotateY(180deg)';
        });
        
        backButton.addEventListener('click', function(e) {
            e.stopPropagation();
            card.style.transform = 'rotateY(0deg)';
        });
    });
    
    // Form submission handling
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would normally send the form data to a server
            // For this example, we'll just show a success message
            
            alert(`Thank you, ${name}! Your message has been received.\nI'll get back to you soon at ${email}.`);
            contactForm.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetPosition = targetElement.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});