// Transport data
const transportData = {
  name: "Luxury Sedan",
  type: "Car",
  capacity: 4,
  pricePerDay: 3500,
  rating: 4.8,
  reviews: 189,
  description:
    "Experience comfort and style with our premium luxury sedan. Perfect for business trips, family outings, or special occasions. Our well-maintained vehicle comes with a professional driver and ensures a smooth, comfortable journey. Equipped with modern amenities and safety features, this sedan offers the perfect blend of elegance and practicality.",
  features: [
    "Air Conditioning",
    "Premium Sound System",
    "GPS Navigation",
    "Bluetooth Connectivity",
    "USB Charging Ports",
    "Leather Seats",
    "Sunroof",
    "Automatic Transmission",
    "ABS & Airbags",
    "Rear Camera",
    "Child Safety Locks",
    "Power Windows",
  ],
  specifications: [
    { label: "Fuel Type", value: "Petrol/Diesel" },
    { label: "Transmission", value: "Automatic" },
    { label: "Seating Capacity", value: "4 Passengers" },
    { label: "Luggage Space", value: "2 Large Bags + 2 Small Bags" },
    { label: "Mileage", value: "150 km/day included" },
    { label: "Additional KM", value: "₹12 per km" },
  ],
  inclusions: [
    "Professional chauffeur",
    "Fuel for included kilometers",
    "Toll and parking fees",
    "Full insurance coverage",
    "24/7 roadside assistance",
    "Vehicle cleaning and maintenance",
  ],
  exclusions: [
    "Extra kilometers beyond daily limit",
    "Multiple city drops",
    "Night charges (11 PM - 6 AM)",
    "Driver accommodation (for outstation trips)",
    "Inter-state permit fees",
    "Additional waiting charges",
  ],
  policies: [
    "Minimum booking: 8 hours or 80 km",
    "Cancellation: Free up to 24 hours before pickup",
    "Valid driving license required",
    "Security deposit: ₹5,000 (refundable)",
    "Age requirement: 21 years and above",
    "Smoking not allowed inside vehicle",
  ],
  popularRoutes: [
    { from: "Mumbai", to: "Pune", duration: "3-4 hours" },
    { from: "Mumbai", to: "Lonavala", duration: "2-3 hours" },
    { from: "Mumbai", to: "Mahabaleshwar", duration: "5-6 hours" },
    { from: "Mumbai", to: "Alibaug", duration: "2-3 hours" },
  ],
};

const transportImages = [
  "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800",
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
  "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800",
  "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800",
];

// State
let selectedImageIndex = 0;
let pickupDate = null;
let returnDate = null;

// Initialize page
function initializePage() {
  // Set hero content
  document.getElementById('heroTitle').textContent = transportData.name;
  document.getElementById('heroCapacity').innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="m16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
    ${transportData.capacity} Seater • ${transportData.type}
  `;
  document.getElementById('heroRating').innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
    <strong>${transportData.rating}</strong>
    <span>(${transportData.reviews} reviews)</span>
  `;

  // Set hero background
  document.getElementById('transportHero').style.backgroundImage = `url(${transportImages[0]})`;

  // Initialize gallery
  renderGallery();

  // Set description
  document.getElementById('vehicleDescription').textContent = transportData.description;

  // Render specifications
  renderSpecifications();

  // Render features
  renderFeatures();

  // Render inclusions
  renderInclusions();

  // Render exclusions
  renderExclusions();

  // Render policies
  renderPolicies();

  // Render routes
  renderRoutes();

  // Set min dates for date inputs
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('pickupDate').min = today;
  document.getElementById('returnDate').min = today;

  // Update initial price
  updateBookingSummary();
}

// Render gallery
function renderGallery() {
  const mainImage = document.getElementById('mainImage');
  const thumbnails = document.getElementById('galleryThumbnails');

  mainImage.src = transportImages[selectedImageIndex];
  mainImage.alt = transportData.name;

  thumbnails.innerHTML = transportImages.slice(1, 4).map((img, idx) => `
    <img src="${img}" alt="Transport ${idx + 1}" class="gallery-thumbnail" onclick="selectImage(${idx + 1})">
  `).join('');
}

// Select image
function selectImage(index) {
  selectedImageIndex = index;
  document.getElementById('mainImage').src = transportImages[index];
}

// View more images (cycle through)
document.getElementById('viewMoreBtn')?.addEventListener('click', () => {
  selectedImageIndex = (selectedImageIndex + 1) % transportImages.length;
  renderGallery();
});

// Render specifications
function renderSpecifications() {
  const grid = document.getElementById('specsGrid');
  grid.innerHTML = transportData.specifications.map(spec => `
    <div class="spec-item">
      <span class="spec-label">${spec.label}</span>
      <span class="spec-value">${spec.value}</span>
    </div>
  `).join('');
}

// Render features
function renderFeatures() {
  const grid = document.getElementById('featuresGrid');
  grid.innerHTML = transportData.features.map(feature => `
    <div class="feature-item">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feature-icon">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>${feature}</span>
    </div>
  `).join('');
}

// Render inclusions
function renderInclusions() {
  const list = document.getElementById('inclusionsList');
  list.innerHTML = transportData.inclusions.map(item => `
    <li class="inclusion-item">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="check-icon-green">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>${item}</span>
    </li>
  `).join('');
}

// Render exclusions
function renderExclusions() {
  const list = document.getElementById('exclusionsList');
  list.innerHTML = transportData.exclusions.map(item => `
    <li class="exclusion-item">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="x-icon-red">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
      <span>${item}</span>
    </li>
  `).join('');
}

// Render policies
function renderPolicies() {
  const list = document.getElementById('policiesList');
  list.innerHTML = transportData.policies.map(policy => `
    <li class="policy-item">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feature-icon">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>${policy}</span>
    </li>
  `).join('');
}

// Render routes
function renderRoutes() {
  const list = document.getElementById('routesList');
  list.innerHTML = transportData.popularRoutes.map(route => `
    <div class="route-item">
      <div class="route-info">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="route-icon">
          <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
        </svg>
        <span class="route-name">${route.from} → ${route.to}</span>
      </div>
      <span class="route-duration">${route.duration}</span>
    </div>
  `).join('');
}

// Calculate days
function calculateDays() {
  if (!pickupDate || !returnDate) return 1;
  const diff = new Date(returnDate) - new Date(pickupDate);
  return Math.max(1, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

// Update booking summary
function updateBookingSummary() {
  const days = calculateDays();
  const total = transportData.pricePerDay * days;

  document.getElementById('numberOfDays').textContent = days;
  document.getElementById('totalAmount').textContent = `₹${total.toLocaleString()}`;
}

// Date change listeners
document.getElementById('pickupDate').addEventListener('change', (e) => {
  pickupDate = e.target.value;
  if (pickupDate) {
    document.getElementById('returnDate').min = pickupDate;
  }
  updateBookingSummary();
});

document.getElementById('returnDate').addEventListener('change', (e) => {
  returnDate = e.target.value;
  updateBookingSummary();
});

// Show toast
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `toast toast-${type} toast-show`;
  
  setTimeout(() => {
    toast.className = 'toast';
  }, 3000);
}

// Booking form submission
document.getElementById('bookingForm').addEventListener('submit', (e) => {
  e.preventDefault();

  if (!pickupDate || !returnDate) {
    showToast('Please select pickup and return dates', 'error');
    return;
  }

  const pickupLocation = document.getElementById('pickupLocation').value;
  const dropLocation = document.getElementById('dropLocation').value;

  if (!pickupLocation || !dropLocation) {
    showToast('Please enter pickup and drop locations', 'error');
    return;
  }

  // Store booking data
  const bookingData = {
    type: 'transport',
    name: transportData.name,
    price: transportData.pricePerDay * calculateDays(),
    quantity: calculateDays(),
    pickupDate: new Date(pickupDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    returnDate: new Date(returnDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    pickupLocation,
    dropLocation,
  };

  localStorage.setItem('bookingData', JSON.stringify(bookingData));
  window.location.href = 'checkout.html';
});

// Note: Enquiry form removed - replaced with simple Enquire Now button

// Mobile menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn?.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// Initialize page on load
document.addEventListener('DOMContentLoaded', initializePage);