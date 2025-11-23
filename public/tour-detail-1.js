// Initialize Lucide icons
lucide.createIcons();

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

if (mobileMenuBtn && navMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Image gallery functionality
const tourImages = [
  'images/tour-detail-hero.jpg',
  'images/hero-kashmir.jpg',
  'images/hero-manali.jpg',
  'images/hero-kerala.jpg',
  'images/hero-goa.jpg'
];

let currentImageIndex = 0;
const mainImage = document.getElementById('mainImage');
const galleryImages = document.querySelectorAll('.gallery-image-small');
const viewMoreBtn = document.getElementById('viewMoreBtn');

// Handle thumbnail clicks
galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentImageIndex = index + 1;
    if (mainImage) {
      mainImage.src = tourImages[currentImageIndex];
    }
  });
});

// Handle main image click
if (mainImage) {
  mainImage.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % tourImages.length;
    mainImage.src = tourImages[currentImageIndex];
  });
}

// Handle view more button
if (viewMoreBtn) {
  viewMoreBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % tourImages.length;
    if (mainImage) {
      mainImage.src = tourImages[currentImageIndex];
    }
  });
}

// Number of persons calculator
const numPersonsInput = document.getElementById('num-persons');
const displayPersons = document.getElementById('displayPersons');
const totalAmount = document.getElementById('totalAmount');
const pricePerPerson = 15999;

function updateTotal() {
  const numPersons = parseInt(numPersonsInput.value) || 1;
  const total = pricePerPerson * numPersons;
  
  if (displayPersons) {
    displayPersons.textContent = numPersons;
  }
  
  if (totalAmount) {
    totalAmount.textContent = '₹' + total.toLocaleString('en-IN');
  }
}

if (numPersonsInput) {
  numPersonsInput.addEventListener('input', updateTotal);
}

// Book Now button
const bookNowBtn = document.getElementById('bookNowBtn');
const bookingDateInput = document.getElementById('booking-date');

if (bookNowBtn) {
  bookNowBtn.addEventListener('click', () => {
    const bookingDate = bookingDateInput?.value;
    const numPersons = parseInt(numPersonsInput?.value) || 1;
    
    if (!bookingDate) {
      alert('Please select a booking date');
      return;
    }
    
    // Store booking data in session storage
    const bookingData = {
      type: 'tour',
      name: 'Amazing Kashmir Valley Tour',
      price: pricePerPerson * numPersons,
      quantity: numPersons,
      date: bookingDate,
      location: 'Kashmir, India',
      duration: '5 Days / 4 Nights'
    };
    
    sessionStorage.setItem('bookingData', JSON.stringify(bookingData));
    window.location.href = 'checkout.html';
  });
}

// Itinerary accordion
const itineraryTriggers = document.querySelectorAll('.itinerary-trigger');

itineraryTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const item = trigger.parentElement;
    const isActive = item.classList.contains('active');
    
    // Close all items
    document.querySelectorAll('.itinerary-item').forEach(i => {
      i.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
      item.classList.add('active');
    }
    
    // Re-initialize icons
    lucide.createIcons();
  });
});

// Set minimum date for booking to today
if (bookingDateInput) {
  const today = new Date().toISOString().split('T')[0];
  bookingDateInput.setAttribute('min', today);
}