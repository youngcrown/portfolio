// Smooth scrolling for navigation links
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

// Animated skill bars on scroll
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.progress');
    const skillsSection = document.querySelector('#skills');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width;
                });
            }
        });
    }, { threshold: 0.3 });
    
    if (skillsSection) {
        observer.observe(skillsSection);
    }
};

// Fade in animation on scroll
const fadeInOnScroll = () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
};

// Add fade-in class to elements
const addFadeInClasses = () => {
    const elementsToAnimate = [
        '.about-content',
        '.skill-category',
        '.project-card',
        '.service-card',
        '.contact-form'
    ];
    
    elementsToAnimate.forEach(selector => {
        document.querySelectorAll(selector).forEach((element, index) => {
            element.classList.add('fade-in');
            element.style.transitionDelay = `${index * 0.1}s`;
        });
    });
};

// Active navigation highlighting
const highlightNavigation = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
};

// Contact form handling
const handleContactForm = () => {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Simulate form submission
            alert(`Thank you ${name}! Your message has been sent successfully. I'll get back to you soon.`);
            form.reset();
        });
    }
};

// Navbar background on scroll
const handleNavbarScroll = () => {
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(15, 23, 42, 0.98)';
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            nav.style.background = 'rgba(15, 23, 42, 0.95)';
            nav.style.boxShadow = 'none';
        }
    });
};

// Typing effect for hero section (optional enhancement)
const typingEffect = () => {
    const heroTitle = document.querySelector('.hero h2');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let index = 0;
        
        const type = () => {
            if (index < text.length) {
                heroTitle.textContent += text.charAt(index);
                index++;
                setTimeout(type, 50);
            }
        };
        
        setTimeout(type, 1000);
    }
};

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateSkillBars();
    fadeInOnScroll();
    addFadeInClasses();
    highlightNavigation();
    handleContactForm();
    handleNavbarScroll();
    // typingEffect(); // Uncomment to enable typing effect
});

// Add smooth reveal animation for project cards
const revealProjects = () => {
    const projects = document.querySelectorAll('.project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
    }, { threshold: 0.1 });
    
    projects.forEach(project => {
        project.style.opacity = '0';
        project.style.transform = 'translateY(30px)';
        project.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(project);
    });
};

// Initialize project reveal
document.addEventListener('DOMContentLoaded', revealProjects);

// Add parallax effect to hero section
const parallaxEffect = () => {
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if (hero && scrolled < window.innerHeight) {
            hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
        }
    });
};

document.addEventListener('DOMContentLoaded', parallaxEffect);

// Add hover effect enhancement for buttons
const enhanceButtonHover = () => {
    const buttons = document.querySelectorAll('.cta-button, .submit-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0) scale(1)';
        });
    });
};



document.addEventListener('DOMContentLoaded', enhanceButtonHover);

// Console welcome message
console.log('%c Welcome to Komolafe Jeremiah Ayomide Portfolio! ', 'background: #10b981; color: white; font-size: 16px; padding: 10px; border-radius: 5px;');
console.log('%c Built with HTML, CSS, and JavaScript ', 'background: #1e293b; color: #10b981; font-size: 12px; padding: 5px; border-radius: 3px;');