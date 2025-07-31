// Modern JavaScript with ES6+ features for VK Software website

// Initialize EmailJS
(function() {
    emailjs.init("YOUR_EMAILJS_USER_ID"); // Replace with your EmailJS user ID
})();

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeNavigation();
    initializeAnimations();
    initializeCounters();
    initializePortfolioFilter();
    initializeContactForm();
    initializeSmoothScrolling();
    initializeScrollEffects();
});

// Navigation functionality
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    });
}

// Initialize AOS animations
function initializeAnimations() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
}

// Animated counters for statistics
function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                animateCounter(counter, target);
                counterObserver.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Counter animation function
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 40);
}

// Portfolio filter functionality
function initializePortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (filterValue === 'all' || itemCategory === filterValue) {
                    item.style.display = 'block';
                    item.classList.add('fade-in');
                } else {
                    item.style.display = 'none';
                    item.classList.remove('fade-in');
                }
            });
        });
    });
}

// Contact form functionality (Local Development Version)
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');

    if (!contactForm) {
        console.error('Contact form not found');
        return;
    }

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Validate all fields first
        const formInputs = contactForm.querySelectorAll('input[required], select[required], textarea[required]');
        let isValid = true;

        formInputs.forEach(input => {
            if (!validateField({ target: input })) {
                isValid = false;
            }
        });

        if (!isValid) {
            showNotification('Please fill in all required fields correctly.', 'error');
            return;
        }

        const submitButton = contactForm.querySelector('button[type="submit"]');
        const buttonText = submitButton.querySelector('.btn-text');
        const buttonLoading = submitButton.querySelector('.btn-loading');

        // Show loading state
        submitButton.classList.add('loading');
        if (buttonText) buttonText.style.opacity = '0';
        if (buttonLoading) buttonLoading.style.opacity = '1';

        // Get form data
        const formData = new FormData(contactForm);
        const contactData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            service: formData.get('service'),
            message: formData.get('message')
        };

        // Log form data for local testing
        console.log('📧 Contact Form Submission:', contactData);

        try {
            // Simulate form submission delay
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Check if EmailJS is available and configured
            if (typeof emailjs !== 'undefined' &&
                !emailjs.init.toString().includes('YOUR_EMAILJS_USER_ID')) {

                // Try to send with EmailJS if properly configured
                const response = await emailjs.send(
                    'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
                    'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
                    {
                        from_name: contactData.name,
                        from_email: contactData.email,
                        phone: contactData.phone,
                        service: contactData.service,
                        message: contactData.message,
                        to_email: 'hello@vk-soft.com'
                    }
                );

                if (response.status === 200) {
                    showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
                    contactForm.reset();
                } else {
                    throw new Error('EmailJS failed');
                }
            } else {
                // Local development mode - simulate success
                showNotification('✅ Form submitted successfully! (Local Development Mode)\n📧 Check browser console for form data.', 'success');
                contactForm.reset();

                // Clear any existing errors
                const errorMessages = contactForm.querySelectorAll('.error-message');
                errorMessages.forEach(error => error.remove());

                const errorInputs = contactForm.querySelectorAll('.error');
                errorInputs.forEach(input => input.classList.remove('error'));
            }

        } catch (error) {
            console.error('Form Submission Error:', error);
            showNotification('⚠️ This is a demo form. In production, configure EmailJS for real email sending.\n📧 Check browser console for submitted data.', 'error');
        } finally {
            // Reset button state
            submitButton.classList.remove('loading');
            if (buttonText) buttonText.style.opacity = '1';
            if (buttonLoading) buttonLoading.style.opacity = '0';
        }
    });

    // Form validation
    const formInputs = contactForm.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });

    console.log('✅ Contact form initialized successfully');
}

// Field validation function
function validateField(e) {
    const field = e.target;
    const value = field.value.trim();

    // Remove existing error styling
    field.classList.remove('error');

    // Clear existing error message
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    // Validation rules
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'This field is required');
        return false;
    }

    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, 'Please enter a valid email address');
            return false;
        }
    }

    if (field.type === 'tel' && value) {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{7,15}$/;
        if (!phoneRegex.test(value)) {
            showFieldError(field, 'Please enter a valid phone number');
            return false;
        }
    }

    if (field.tagName === 'SELECT' && field.hasAttribute('required') && !value) {
        showFieldError(field, 'Please select an option');
        return false;
    }

    if (field.tagName === 'TEXTAREA' && field.hasAttribute('required') && value.length < 10) {
        showFieldError(field, 'Please enter at least 10 characters');
        return false;
    }

    return true;
}

// Show field error
function showFieldError(field, message) {
    field.classList.add('error');
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Add new error message
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.style.color = '#ef4444';
    errorElement.style.fontSize = '0.875rem';
    errorElement.style.marginTop = '0.25rem';
    
    field.parentNode.appendChild(errorElement);
}

// Clear field error
function clearFieldError(e) {
    const field = e.target;
    field.classList.remove('error');
    
    const errorMessage = field.parentNode.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;

    // Handle multi-line messages
    const messageLines = message.split('\n');
    const messageHTML = messageLines.map(line => `<div>${line}</div>`).join('');

    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-message">${messageHTML}</div>
            <button class="notification-close">&times;</button>
        </div>
    `;

    // Ocean-themed styles
    const bgColor = type === 'success' ?
        'linear-gradient(135deg, #06b6d4, #0891b2)' :
        'linear-gradient(135deg, #f97316, #ea580c)';

    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 1.5rem;
        border-radius: 1rem;
        box-shadow: 0 20px 40px rgba(6, 182, 212, 0.3);
        z-index: 10000;
        max-width: 450px;
        min-width: 300px;
        animation: slideInRight 0.5s ease;
        border: 2px solid rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        font-family: inherit;
        line-height: 1.5;
    `;

    // Style the close button
    const closeButtonStyle = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        margin-left: 1rem;
        opacity: 0.8;
        transition: opacity 0.2s ease;
    `;

    // Add to DOM
    document.body.appendChild(notification);

    // Style close button after adding to DOM
    const closeButton = notification.querySelector('.notification-close');
    closeButton.style.cssText = closeButtonStyle;

    // Close button functionality
    closeButton.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });

    closeButton.addEventListener('mouseenter', () => {
        closeButton.style.opacity = '1';
    });

    closeButton.addEventListener('mouseleave', () => {
        closeButton.style.opacity = '0.8';
    });

    // Auto remove after 7 seconds for longer messages
    const autoRemoveTime = message.length > 100 ? 8000 : 6000;
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, autoRemoveTime);

    console.log(`📢 Notification (${type}):`, message);
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 70; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll effects and parallax
function initializeScrollEffects() {
    let ticking = false;
    
    function updateScrollEffects() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        // Parallax effect for hero section
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
        
        // Floating animation for hero cards
        const floatingCards = document.querySelectorAll('.floating-card');
        floatingCards.forEach((card, index) => {
            const speed = 0.5 + (index * 0.1);
            card.style.transform = `translateY(${scrolled * speed}px)`;
        });
        
        ticking = false;
    }
    
    function requestScrollUpdate() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestScrollUpdate);
}

// Utility function for debouncing
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Performance optimization: Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Add CSS animations keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .error {
        border-color: #ef4444 !important;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
    }
`;
document.head.appendChild(style);
