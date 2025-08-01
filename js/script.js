// VK Software - Fully Dynamic Static Website
// No external dependencies - Pure JavaScript implementation

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    console.log('🌊 VK Software - Ocean Theme Loaded');

    // Initialize all components
    initializeNavigation();
    initializeAnimations();
    initializeCounters();
    initializeEmailRedirect();
    initializeCallFunctionality();
    initializeSmoothScrolling();
    initializeScrollEffects();
    initializeDynamicContent();

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

    // Navbar scroll effect - DISABLED to maintain constant color
    // window.addEventListener('scroll', () => {
    //     if (window.scrollY > 100) {
    //         navbar.classList.add('scrolled');
    //     } else {
    //         navbar.classList.remove('scrolled');
    //     }
    // });

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

// Initialize custom animations (replacing AOS)
function initializeAnimations() {
    // Custom animation observer
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animationType = element.getAttribute('data-aos') || 'fade-up';
                const delay = element.getAttribute('data-aos-delay') || 0;

                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                    element.classList.add('aos-animate');
                }, delay);

                animationObserver.unobserve(element);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Initialize all elements with data-aos attributes
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach(element => {
        // Set initial state
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.8s ease-in-out';

        // Observe for animation
        animationObserver.observe(element);
    });

    console.log(`✅ Custom animations initialized for ${animatedElements.length} elements`);
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

// Dynamic service highlighting
function initializeServiceHighlighting() {
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach((card, index) => {
        // Add staggered animation delay
        card.style.animationDelay = `${index * 0.1}s`;

        // Add interactive hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(6, 182, 212, 0.4)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 8px 25px rgba(6, 182, 212, 0.2)';
        });
    });

    console.log(`✅ Service highlighting initialized for ${serviceCards.length} cards`);
}

// Email redirect functionality - Opens Gmail with pre-filled content
function initializeEmailRedirect() {
    const emailButton = document.getElementById('email-us-btn');

    if (!emailButton) {
        console.log('Email button not found - contact form may have been removed');
        return;
    }

    emailButton.addEventListener('click', function(e) {
        e.preventDefault();

        // Pre-filled email content
        const emailData = {
            to: 'enquiry@vk-soft.com',
            subject: 'Inquiry about VK Software Training & Services',
            body: `Hello VK Software Team,

I am interested in learning more about your services. Please provide information about:

□ Software Training Programs
□ Consulting Services
□ Custom Development
□ Other: _______________

My Details:
Name:
Phone:
Preferred Contact Time:

Message:


Best regards,`
        };

        // Create Gmail compose URL
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailData.to)}&su=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`;

        // Open Gmail in new tab
        window.open(gmailUrl, '_blank');

        // Show notification
        showNotification('📧 Opening Gmail with pre-filled email content...', 'success');

        console.log('📧 Gmail redirect initiated:', emailData);
    });

    console.log('✅ Email redirect initialized successfully');
}

// Call functionality with device detection
function initializeCallFunctionality() {
    const callBtn = document.getElementById('call-now-btn');
    const phoneLinks = document.querySelectorAll('.phone-link');
    const phoneNumber = '+917090774411';
    const displayNumber = '(+91) 7090774411';

    // Function to detect if device is mobile
    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
               (navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform));
    }

    // Function to handle call button click
    function handleCallClick(e) {
        if (isMobileDevice()) {
            // On mobile: Allow default tel: link behavior (opens dialer)
            showNotification('📱 Opening dialer...', 'success');
            return true; // Allow default action
        } else {
            // On desktop: Prevent default and show phone number
            e.preventDefault();
            showPhoneNumberModal(displayNumber);
            return false;
        }
    }

    // Add event listener to main call button
    if (callBtn) {
        callBtn.addEventListener('click', handleCallClick);
    }

    // Add event listeners to phone links in contact section
    phoneLinks.forEach(link => {
        link.addEventListener('click', handleCallClick);
    });

    console.log('✅ Call functionality initialized successfully');
}

// Show phone number modal for desktop users
function showPhoneNumberModal(phoneNumber) {
    // Remove existing modal if any
    const existingModal = document.getElementById('phone-modal');
    if (existingModal) {
        existingModal.remove();
    }

    // Create modal
    const modal = document.createElement('div');
    modal.id = 'phone-modal';
    modal.className = 'phone-modal';
    modal.innerHTML = `
        <div class="phone-modal-content">
            <div class="phone-modal-header">
                <h3><i class="fas fa-phone"></i> Call VK Software</h3>
                <button class="phone-modal-close" onclick="closePhoneModal()">&times;</button>
            </div>
            <div class="phone-modal-body">
                <p>Please call us at:</p>
                <div class="phone-number-display">
                    <span class="phone-number">${phoneNumber}</span>
                    <button class="copy-phone-btn" onclick="copyPhoneNumber('${phoneNumber}')">
                        <i class="fas fa-copy"></i> Copy
                    </button>
                </div>
                <p class="phone-modal-note">
                    <i class="fas fa-info-circle"></i> For all enquiries and support
                </p>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Show modal with animation
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closePhoneModal();
        }
    });
}

// Close phone number modal
function closePhoneModal() {
    const modal = document.getElementById('phone-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// Copy phone number to clipboard
function copyPhoneNumber(phoneNumber) {
    // Remove formatting for copying
    const cleanNumber = phoneNumber.replace(/[^\d+]/g, '');

    if (navigator.clipboard) {
        navigator.clipboard.writeText(cleanNumber).then(() => {
            showNotification('📋 Phone number copied to clipboard!', 'success');
        }).catch(() => {
            fallbackCopyTextToClipboard(cleanNumber);
        });
    } else {
        fallbackCopyTextToClipboard(cleanNumber);
    }
}

// Fallback copy function for older browsers
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        document.execCommand('copy');
        showNotification('📋 Phone number copied to clipboard!', 'success');
    } catch (err) {
        showNotification('❌ Unable to copy phone number', 'error');
    }

    document.body.removeChild(textArea);
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

// Dynamic content initialization
function initializeDynamicContent() {
    // Add dynamic year to footer
    const currentYear = new Date().getFullYear();
    const footerYear = document.querySelector('.footer-bottom p');
    if (footerYear) {
        footerYear.textContent = `© ${currentYear} VK Software. All rights reserved.`;
    }

    // Add dynamic loading states
    addDynamicStyles();

    // Initialize dynamic interactions
    initializeDynamicInteractions();

    console.log('✅ Dynamic content initialized');
}

// Add dynamic CSS styles
function addDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* Dynamic Animation Keyframes */
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Dynamic interaction styles */
        .dynamic-hover {
            transition: all 0.3s ease;
        }

        .dynamic-hover:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(6, 182, 212, 0.3);
        }

        .loading-pulse {
            animation: pulse 2s infinite;
        }

        .fade-in-up {
            animation: fadeInUp 0.6s ease-out;
        }
    `;
    document.head.appendChild(style);
}

// Initialize dynamic interactions
function initializeDynamicInteractions() {
    // Add hover effects to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.classList.add('dynamic-hover');
    });

    // Add click effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.add('loading-pulse');
            setTimeout(() => {
                this.classList.remove('loading-pulse');
            }, 1000);
        });
    });

    // Add scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll('.service-card, .contact-item, .info-item');
    animateElements.forEach(el => scrollObserver.observe(el));
}
