// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
const mobileLinks = document.querySelectorAll('.mobile-link');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    });
});

// Hero Slider
let currentSlide = 0;
let isAutoPlaying = true;
const slides = document.querySelectorAll('.slide');
const sliderDots = document.getElementById('sliderDots');

// Create dots
slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = 'dot';
    if (index === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
    dot.addEventListener('click', () => goToSlide(index));
    sliderDots.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    resetAutoPlay();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
    resetAutoPlay();
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
    resetAutoPlay();
}

function resetAutoPlay() {
    isAutoPlaying = false;
    setTimeout(() => {
        isAutoPlaying = true;
    }, 10000);
}

// Auto play slider
setInterval(() => {
    if (isAutoPlaying) {
        nextSlide();
    }
}, 5000);

// Slider navigation
document.getElementById('nextSlide').addEventListener('click', nextSlide);
document.getElementById('prevSlide').addEventListener('click', prevSlide);

// Search Tabs
const tabTriggers = document.querySelectorAll('.tab-trigger');
const tabContents = document.querySelectorAll('.tab-content');

tabTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const targetTab = trigger.getAttribute('data-tab');
        
        // Remove active class from all triggers and contents
        tabTriggers.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked trigger and corresponding content
        trigger.classList.add('active');
        document.getElementById(`${targetTab}-tab`).classList.add('active');
    });
});

// About Section Subsections
const subsectionButtons = document.querySelectorAll('.subsection-btn');
const subsections = document.querySelectorAll('.subsection');

subsectionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetSection = button.getAttribute('data-section');
        
        // Remove active class from all buttons and subsections
        subsectionButtons.forEach(btn => btn.classList.remove('active'));
        subsections.forEach(section => section.classList.remove('active'));
        
        // Add active class to clicked button and corresponding subsection
        button.classList.add('active');
        document.getElementById(`${targetSection}-content`).classList.add('active');
    });
});

// Testimonials Data
const testimonials = [
    {
        name: 'Priya Sharma',
        location: 'Mumbai, India',
        rating: 5,
        text: 'Amazing experience! The Kerala backwaters tour was perfectly organized. Every detail was taken care of, and we had the most peaceful vacation of our lives.',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
        date: 'March 2024'
    },
    {
        name: 'Rajesh Kumar',
        location: 'Delhi, India',
        rating: 5,
        text: 'Excellent service from start to finish. The Rajasthan heritage tour exceeded all expectations. The guides were knowledgeable and the hotels were luxurious.',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh',
        date: 'February 2024'
    },
    {
        name: 'Anita Desai',
        location: 'Bangalore, India',
        rating: 4,
        text: 'Great value for money! The Manali adventure package was thrilling and well-planned. My family loved every moment of it.',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anita',
        date: 'January 2024'
    },
    {
        name: 'Vikram Singh',
        location: 'Jaipur, India',
        rating: 5,
        text: 'Professional and reliable. The transport service was punctual and comfortable. Highly recommend for business travelers!',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram',
        date: 'March 2024'
    },
    {
        name: 'Meera Patel',
        location: 'Ahmedabad, India',
        rating: 5,
        text: 'The hotel bookings were fantastic! Stayed at The Oberoi in Mumbai - what a luxurious experience. Thank you TravelWorld!',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
        date: 'February 2024'
    },
    {
        name: 'Arjun Reddy',
        location: 'Hyderabad, India',
        rating: 4,
        text: 'Wonderful Goa trip! The beaches, the culture, everything was perfect. Will definitely book again for our next vacation.',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun',
        date: 'December 2023'
    }
];

// Testimonials Display
let currentTestimonialIndex = 0;
const testimonialsGrid = document.getElementById('testimonialsGrid');
const testimonialDotsContainer = document.getElementById('testimonialDots');

function createTestimonialCard(testimonial) {
    const stars = Array(testimonial.rating).fill('').map(() => 
        `<svg class="star" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>`
    ).join('');

    return `
        <div class="testimonial-card">
            <div class="testimonial-header">
                <img src="${testimonial.avatar}" alt="${testimonial.name}" class="testimonial-avatar">
                <div class="testimonial-info">
                    <h4>${testimonial.name}</h4>
                    <p class="testimonial-location">${testimonial.location}</p>
                </div>
            </div>
            <div class="rating">${stars}</div>
            <p class="testimonial-text">${testimonial.text}</p>
            <div class="testimonial-footer">
                <span class="testimonial-date">${testimonial.date}</span>
            </div>
        </div>
    `;
}

function displayTestimonials(startIndex) {
    const itemsToShow = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    testimonialsGrid.innerHTML = '';
    
    for (let i = 0; i < itemsToShow; i++) {
        const index = (startIndex + i) % testimonials.length;
        testimonialsGrid.innerHTML += createTestimonialCard(testimonials[index]);
    }
}

// Create testimonial dots
testimonials.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = 'testimonial-dot';
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        currentTestimonialIndex = index;
        displayTestimonials(currentTestimonialIndex);
        updateTestimonialDots();
    });
    testimonialDotsContainer.appendChild(dot);
});

const testimonialDots = document.querySelectorAll('.testimonial-dot');

function updateTestimonialDots() {
    testimonialDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentTestimonialIndex);
    });
}

// Auto-rotate testimonials
setInterval(() => {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    displayTestimonials(currentTestimonialIndex);
    updateTestimonialDots();
}, 5000);

// Initial display
displayTestimonials(currentTestimonialIndex);

// Re-display testimonials on window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        displayTestimonials(currentTestimonialIndex);
    }, 250);
});

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing with ${email}! You'll receive our latest travel updates.`);
        newsletterForm.reset();
    });
}