// Tour Detail Page JavaScript

// Image Gallery
const tourImages = [
    'images/tour-detail-hero.jpg',
    'images/hero-kashmir.jpg',
    'images/hero-manali.jpg',
    'images/hero-kerala.jpg',
    'images/hero-goa.jpg'
];

let currentImageIndex = 0;

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    initializeImageGallery();
    initializeBookingForm();
    initializeEnquiryForm();
    initializeMobileNav();
});

// Image Gallery Functions
function initializeImageGallery() {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    // Add click handlers to thumbnails
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function() {
            currentImageIndex = index + 1;
            changeMainImage(tourImages[currentImageIndex]);
        });
    });

    // Add click handler to main image
    if (mainImage) {
        mainImage.addEventListener('click', function() {
            cycleImages();
        });
    }
}

function changeMainImage(imageSrc) {
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.src = imageSrc;
    }
}

function cycleImages() {
    currentImageIndex = (currentImageIndex + 1) % tourImages.length;
    changeMainImage(tourImages[currentImageIndex]);
}

// Accordion Functions
function toggleAccordion(button) {
    const accordionItem = button.closest('.accordion-item');
    const content = accordionItem.querySelector('.accordion-content');
    const icon = button.querySelector('.accordion-icon');
    const isOpen = accordionItem.classList.contains('active');
    
    // Close all accordion items
    document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.accordion-content').style.maxHeight = null;
        item.querySelector('.accordion-icon').style.transform = 'rotate(0deg)';
    });
    
    // Open clicked item if it was closed
    if (!isOpen) {
        accordionItem.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.style.transform = 'rotate(180deg)';
    }
}

// Booking Form Functions
function initializeBookingForm() {
    const bookingForm = document.getElementById('bookingForm');
    const numPersonsInput = document.getElementById('num-persons');
    const displayPersons = document.getElementById('display-persons');
    const totalAmount = document.getElementById('total-amount');
    const pricePerPerson = 15999;

    // Update price when number of persons changes
    if (numPersonsInput) {
        numPersonsInput.addEventListener('input', function() {
            let persons = parseInt(this.value) || 1;
            
            // Ensure valid range
            if (persons < 1) persons = 1;
            if (persons > 15) persons = 15;
            this.value = persons;
            
            // Update display
            if (displayPersons) {
                displayPersons.textContent = persons;
            }
            
            // Update total amount
            if (totalAmount) {
                const total = pricePerPerson * persons;
                totalAmount.textContent = '₹' + total.toLocaleString('en-IN');
            }
        });
    }

    // Handle form submission
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const bookingDate = document.getElementById('booking-date').value;
            const numPersons = parseInt(document.getElementById('num-persons').value) || 1;
            
            if (!bookingDate) {
                alert('Please select a booking date');
                return;
            }
            
            // Calculate total
            const total = pricePerPerson * numPersons;
            
            // Create booking data
            const bookingData = {
                type: 'tour',
                name: 'Amazing Kashmir Valley Tour',
                price: total,
                quantity: numPersons,
                date: bookingDate,
                location: 'Kashmir, India',
                duration: '5 Days / 4 Nights'
            };
            
            // Store booking data in sessionStorage
            sessionStorage.setItem('checkoutData', JSON.stringify(bookingData));
            
            // Redirect to checkout page
            window.location.href = 'checkout.html';
        });
    }
}

// Enquiry Form Functions
function initializeEnquiryForm() {
    const enquiryForm = document.getElementById('enquiryForm');
    
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('enquiry-name').value;
            const email = document.getElementById('enquiry-email').value;
            const phone = document.getElementById('enquiry-phone').value;
            const message = document.getElementById('enquiry-message').value;
            
            // In a real application, you would send this data to a server
            console.log('Enquiry submitted:', { name, email, phone, message });
            
            // Show success message
            alert('Thank you for your enquiry! We will get back to you soon.');
            
            // Reset form
            enquiryForm.reset();
        });
    }
}

// Mobile Navigation
function initializeMobileNav() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.navbar')) {
                navLinks.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        });
    }
}

// Set minimum date for booking to today
const bookingDateInput = document.getElementById('booking-date');
if (bookingDateInput) {
    const today = new Date().toISOString().split('T')[0];
    bookingDateInput.setAttribute('min', today);
}
