// Testimonials data
const testimonials = [
    {
        id: 1,
        name: "Marie Kouadio",
        age: 32,
        city: "Abidjan",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b3db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        rating: 5,
        review: "L'attiéké poisson était absolument délicieux ! Une explosion de saveurs qui m'a rappelé les plats de ma grand-mère. Service impeccable et ambiance chaleureuse."
    },
    {
        id: 2,
        name: "Amadou Diallo",
        age: 28,
        city: "Dakar",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        rating: 5,
        review: "Le thiéboudienne était parfait ! Les saveurs authentiques du Sénégal dans un cadre moderne. Je recommande vivement Africanfood."
    },
    {
        id: 3,
        name: "Fatou Traoré",
        age: 35,
        city: "Bamako",
        image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        rating: 5,
        review: "Un vrai voyage culinaire ! Le tô à la sauce arachide était exceptionnel. L'équipe est très accueillante et les prix sont raisonnables."
    },
    {
        id: 4,
        name: "Jean-Baptiste Kone",
        age: 41,
        city: "Ouagadougou",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        rating: 5,
        review: "Excellente découverte ! Les plats sont authentiques et délicieux. L'ambiance africaine est parfaitement réussie. Je reviendrai sans hésiter."
    },
    {
        id: 5,
        name: "Aïcha Sidibé",
        age: 26,
        city: "Conakry",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        rating: 5,
        review: "Un restaurant qui honore nos traditions ! Les saveurs sont fidèles aux recettes ancestrales. Bravo pour cette initiative culinaire."
    },
    {
        id: 6,
        name: "Ibrahim Sawadogo",
        age: 39,
        city: "Bobo-Dioulasso",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        rating: 5,
        review: "Service rapide et plats savoureux ! Le riz épicé était un délice. L'endroit parfait pour découvrir la richesse de la cuisine africaine."
    },
    {
        id: 7,
        name: "Ndeye Fall",
        age: 33,
        city: "Thiès",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
        rating: 5,
        review: "Une expérience culinaire inoubliable ! Chaque bouchée raconte une histoire. Les desserts traditionnels sont également excellents."
    },
    {
        id: 8,
        name: "Sekou Camara",
        age: 45,
        city: "Kankan",
        image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
        rating: 4,
        review: "Très bon restaurant ! Les portions sont généreuses et les prix abordables. L'accueil est chaleureux et l'ambiance conviviale."
    },
    {
        id: 9,
        name: "Khadija Ouattara",
        age: 29,
        city: "Bouaké",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
        rating: 5,
        review: "Africanfood m'a transportée dans mon enfance ! Les saveurs sont authentiques et le service est impeccable. Une adresse à retenir absolument."
    },
    {
        id: 10,
        name: "Moussa Diabaté",
        age: 36,
        city: "Ségou",
        image: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        rating: 5,
        review: "Cuisine délicieuse et service au top ! L'ambiance musicale africaine ajoute une touche parfaite à l'expérience gastronomique."
    },
    {
        id: 11,
        name: "Salamata Barry",
        age: 31,
        city: "Labé",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
        rating: 5,
        review: "Un restaurant qui fait honneur à la gastronomie africaine ! Les ingrédients sont frais et les préparations respectent les traditions."
    },
    {
        id: 12,
        name: "Bakary Sanogo",
        age: 42,
        city: "Sikasso",
        image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by-wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        rating: 4,
        review: "Excellente adresse pour découvrir la cuisine africaine ! La carte est variée et tous les plats que j'ai goûtés étaient savoureux."
    }
];

// Global variables
let currentTestimonialIndex = 0;
let testimonialInterval;
let isTestimonialPaused = false;

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Initialize website functionality
function initializeWebsite() {
    setupNavigation();
    setupMobileMenu();
    setupButtons();
    setupFAQ();
    setupTestimonials();
    setupScrollAnimations();
    setupSmoothScrolling();
}

// Navigation setup
function setupNavigation() {
    const header = document.getElementById('header');
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'white';
            header.style.backdropFilter = 'none';
        }
    });

    // Active navigation link highlighting
    const navLinks = document.querySelectorAll('.nav__link');
    const sections = document.querySelectorAll('section[id]');

    function highlightActiveNavLink() {
        const scrollPos = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightActiveNavLink);
}

// Mobile menu setup
function setupMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking on nav links
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
}

// Button functionality setup
function setupButtons() {
    const phoneNumber = '+22578123456';
    
    // Reservation buttons
    const reserveBtn = document.getElementById('reserve-btn');
    const heroOrderBtn = document.getElementById('hero-order-btn');
    const ctaOrderBtn = document.getElementById('cta-order-btn');
    
    [reserveBtn, heroOrderBtn, ctaOrderBtn].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                window.open(`tel:${phoneNumber}`, '_self');
            });
        }
    });

    // Learn more button - scroll to about section
    const heroLearnBtn = document.getElementById('hero-learn-btn');
    if (heroLearnBtn) {
        heroLearnBtn.addEventListener('click', () => {
            scrollToSection('apropos');
        });
    }

    // See more button - scroll to contact
    const seeMoreBtn = document.getElementById('see-more-btn');
    if (seeMoreBtn) {
        seeMoreBtn.addEventListener('click', () => {
            scrollToSection('contact');
        });
    }
}

// FAQ functionality
function setupFAQ() {
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq__question');
        const answer = item.querySelector('.faq__answer');
        const icon = item.querySelector('.faq__icon');

        if (question && answer && icon) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.faq__answer');
                    const otherIcon = otherItem.querySelector('.faq__icon');
                    if (otherAnswer) otherAnswer.classList.remove('active');
                    if (otherIcon) otherIcon.textContent = '+';
                });

                // Toggle current item
                if (!isActive) {
                    item.classList.add('active');
                    answer.classList.add('active');
                    icon.textContent = '−';
                }
            });
        }
    });
}

// Testimonials slider setup
function setupTestimonials() {
    const testimonialsTrack = document.getElementById('testimonials-track');
    const testimonialsContainer = document.querySelector('.testimonials__container');
    const prevBtn = document.getElementById('testimonial-prev');
    const nextBtn = document.getElementById('testimonial-next');
    const dotsContainer = document.getElementById('testimonials-dots');

    if (!testimonialsTrack || !testimonialsContainer) return;

    // Create testimonial items
    testimonials.forEach((testimonial, index) => {
        const testimonialElement = createTestimonialElement(testimonial, index);
        testimonialsTrack.appendChild(testimonialElement);
    });

    // Create dots
    testimonials.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = 'testimonials__dot';
        dot.setAttribute('data-testid', `testimonial-dot-${index}`);
        if (index === 0) dot.classList.add('active');
        
        dot.addEventListener('click', () => {
            goToTestimonial(index);
        });
        
        dotsContainer.appendChild(dot);
    });

    // Navigation buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            goToPrevTestimonial();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            goToNextTestimonial();
        });
    }

    // Auto-play testimonials
    startTestimonialAutoPlay();

    // Pause auto-play on hover
    testimonialsContainer.addEventListener('mouseenter', pauseTestimonialAutoPlay);
    testimonialsContainer.addEventListener('mouseleave', startTestimonialAutoPlay);

    // Touch/swipe support for mobile
    setupTestimonialTouchEvents(testimonialsContainer);
}

// Create testimonial element
function createTestimonialElement(testimonial, index) {
    const item = document.createElement('div');
    item.className = 'testimonial__item';
    item.setAttribute('data-testid', `testimonial-${index}`);

    const stars = '★'.repeat(testimonial.rating);

    item.innerHTML = `
        <div class="testimonial__content">
            <div class="testimonial__image">
                <img src="${testimonial.image}" 
                     alt="${testimonial.name}, client satisfait" 
                     data-testid="img-customer-${index}">
            </div>
            <div class="testimonial__text">
                <div class="testimonial__rating" data-testid="stars-rating-${index}">
                    ${stars}
                </div>
                <blockquote class="testimonial__quote" data-testid="testimonial-text-${index}">
                    "${testimonial.review}"
                </blockquote>
                <div class="testimonial__author">
                    <div class="testimonial__name" data-testid="customer-name-${index}">${testimonial.name}</div>
                    <div class="testimonial__info" data-testid="customer-info-${index}">${testimonial.age} ans, ${testimonial.city}</div>
                </div>
            </div>
        </div>
    `;

    return item;
}

// Testimonial navigation functions
function goToTestimonial(index) {
    currentTestimonialIndex = index;
    updateTestimonialDisplay();
    updateTestimonialDots();
}

function goToNextTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    updateTestimonialDisplay();
    updateTestimonialDots();
}

function goToPrevTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonialDisplay();
    updateTestimonialDots();
}

// Update testimonial display
function updateTestimonialDisplay() {
    const testimonialsTrack = document.getElementById('testimonials-track');
    if (testimonialsTrack) {
        const translateX = -currentTestimonialIndex * 100;
        testimonialsTrack.style.transform = `translateX(${translateX}%)`;
    }
}

// Update testimonial dots
function updateTestimonialDots() {
    const dots = document.querySelectorAll('.testimonials__dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentTestimonialIndex);
    });
}

// Testimonial auto-play functions
function startTestimonialAutoPlay() {
    if (testimonialInterval) clearInterval(testimonialInterval);
    
    testimonialInterval = setInterval(() => {
        if (!isTestimonialPaused) {
            goToNextTestimonial();
        }
    }, 5000);
}

function pauseTestimonialAutoPlay() {
    isTestimonialPaused = true;
}

function resumeTestimonialAutoPlay() {
    isTestimonialPaused = false;
}

// Touch/swipe events for testimonials
function setupTestimonialTouchEvents(container) {
    let startX = null;
    let startY = null;

    container.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });

    container.addEventListener('touchend', (e) => {
        if (!startX || !startY) return;

        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;

        const deltaX = startX - endX;
        const deltaY = startY - endY;

        // Only handle horizontal swipes
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                goToNextTestimonial();
            } else {
                goToPrevTestimonial();
            }
        }

        startX = null;
        startY = null;
    });
}

// Scroll animations
function setupScrollAnimations() {
    const animateElements = document.querySelectorAll('.hero__content, .about__content, .about__image, .dish__card, .testimonial__item');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    animateElements.forEach(el => observer.observe(el));
}

// Smooth scrolling utility
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerHeight = document.getElementById('header').offsetHeight;
        const sectionTop = section.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

// Setup smooth scrolling for all anchor links
function setupSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// Loading animation for images
function setupImageLoading() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.classList.remove('loading');
            img.classList.add('fade-in');
        });
        
        // Add loading class initially
        if (!img.complete) {
            img.classList.add('loading');
        }
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function(...args) {
        if (!lastRan) {
            func.apply(this, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(this, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

// Performance optimizations
const debouncedResize = debounce(() => {
    // Handle window resize events
    updateTestimonialDisplay();
}, 250);

const throttledScroll = throttle(() => {
    // Handle scroll events
    // This is already handled in navigation setup
}, 16);

window.addEventListener('resize', debouncedResize);
window.addEventListener('scroll', throttledScroll);

// Initialize image loading
document.addEventListener('DOMContentLoaded', setupImageLoading);

// Error handling
window.addEventListener('error', (e) => {
    console.warn('Error occurred:', e.error);
    // Gracefully handle errors without breaking the user experience
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (testimonialInterval) {
        clearInterval(testimonialInterval);
    }
});

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        scrollToSection,
        goToTestimonial,
        goToNextTestimonial,
        goToPrevTestimonial
    };
}