// Hotel data
const hotels = [
  {
    id: 1,
    name: 'The Grand Palace Hotel',
    location: 'Mumbai, Maharashtra',
    price: 8500,
    rating: 4.8,
    reviews: 245,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    amenities: ['Wifi', 'Restaurant', 'Pool', 'Spa'],
    category: 'luxury'
  },
  {
    id: 2,
    name: 'Seaside Resort & Spa',
    location: 'Goa',
    price: 12000,
    rating: 4.9,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800',
    amenities: ['Wifi', 'Beach', 'Restaurant', 'Pool'],
    category: 'beach'
  },
  {
    id: 3,
    name: 'Mountain View Inn',
    location: 'Manali, Himachal Pradesh',
    price: 5500,
    rating: 4.6,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
    amenities: ['Wifi', 'Restaurant', 'Parking'],
    category: 'mountain'
  },
  {
    id: 4,
    name: 'Budget Stay Inn',
    location: 'Delhi',
    price: 2500,
    rating: 4.2,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=800',
    amenities: ['Wifi', 'Parking'],
    category: 'budget'
  },
  {
    id: 5,
    name: 'Royal Heritage Hotel',
    location: 'Jaipur, Rajasthan',
    price: 15000,
    rating: 4.9,
    reviews: 428,
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800',
    amenities: ['Wifi', 'Restaurant', 'Pool', 'Heritage'],
    category: 'luxury'
  },
  {
    id: 6,
    name: 'Lake View Resort',
    location: 'Udaipur, Rajasthan',
    price: 9500,
    rating: 4.7,
    reviews: 267,
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
    amenities: ['Wifi', 'Restaurant', 'Lake View', 'Spa'],
    category: 'luxury'
  }
];

// State
let searchQuery = '';
let priceRange = [0, 50000];
let sortBy = 'popular';
let selectedCategory = 'all';

// Get amenity icon
function getAmenityIcon(amenity) {
  const icons = {
    'wifi': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13a10 10 0 0 1 14 0"></path><path d="M8.5 16.5a5 5 0 0 1 7 0"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>',
    'restaurant': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"></path><path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"></path><path d="m2.1 21.8 6.4-6.3"></path><path d="m19 5-7 7"></path></svg>',
    'pool': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z"></path><path d="M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z"></path><path d="M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z"></path></svg>',
    'beach': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z"></path><path d="M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z"></path><path d="M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z"></path></svg>',
    'default': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path><path d="M4 2C2.8 3.7 2 5.7 2 8"></path><path d="M22 8c0-2.3-.8-4.3-2-6"></path></svg>'
  };
  return icons[amenity.toLowerCase()] || icons.default;
}

// Filter and sort hotels
function getFilteredHotels() {
  let filtered = [...hotels];

  // Search filter
  if (searchQuery) {
    filtered = filtered.filter(hotel =>
      hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hotel.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Category filter
  if (selectedCategory !== 'all') {
    filtered = filtered.filter(hotel => hotel.category === selectedCategory);
  }

  // Price filter
  filtered = filtered.filter(hotel => hotel.price >= priceRange[0] && hotel.price <= priceRange[1]);

  // Sort
  switch (sortBy) {
    case 'price-low':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    default:
      filtered.sort((a, b) => b.reviews - a.reviews);
  }

  return filtered;
}

// Render hotels
function renderHotels() {
  const filtered = getFilteredHotels();
  const grid = document.getElementById('hotelsGrid');
  const count = document.getElementById('hotelsCount');

  count.textContent = `Showing ${filtered.length} ${filtered.length === 1 ? 'hotel' : 'hotels'}`;

  grid.innerHTML = filtered.map(hotel => `
    <div class="hotel-card">
      <div class="hotel-image-container">
        <img src="${hotel.image}" alt="${hotel.name}" class="hotel-image">
        <div class="hotel-price-badge">₹${hotel.price.toLocaleString()}/night</div>
      </div>
      <div class="hotel-content">
        <h3 class="hotel-name">${hotel.name}</h3>
        <div class="hotel-location">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>${hotel.location}</span>
        </div>
        <div class="hotel-rating">
          <div class="rating-stars">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span class="rating-value">${hotel.rating}</span>
          </div>
          <span class="rating-reviews">(${hotel.reviews} reviews)</span>
        </div>
        <div class="hotel-amenities">
          ${hotel.amenities.map(amenity => `
            <div class="amenity-tag">
              ${getAmenityIcon(amenity)}
              <span>${amenity}</span>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="hotel-footer">
        <a href="hotel-detail.html?id=${hotel.id}" class="btn btn-primary btn-full">Book Now</a>
      </div>
    </div>
  `).join('');
}

// Render popular hotels
function renderPopularHotels() {
  const popular = hotels.filter(h => h.rating >= 4.7).slice(0, 3);
  const container = document.getElementById('popularHotels');

  container.innerHTML = popular.map(hotel => `
    <div class="popular-hotel-item">
      <img src="${hotel.image}" alt="${hotel.name}" class="popular-hotel-image">
      <div class="popular-hotel-info">
        <h4 class="popular-hotel-name">${hotel.name}</h4>
        <p class="popular-hotel-location">${hotel.location}</p>
        <div class="popular-hotel-rating">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <span>${hotel.rating}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// Event listeners
document.getElementById('searchInput').addEventListener('input', (e) => {
  searchQuery = e.target.value;
  renderHotels();
});

document.getElementById('sortBy').addEventListener('change', (e) => {
  sortBy = e.target.value;
  renderHotels();
});

// Price range
const priceMin = document.getElementById('priceMin');
const priceMax = document.getElementById('priceMax');
const priceMinValue = document.getElementById('priceMinValue');
const priceMaxValue = document.getElementById('priceMaxValue');

function updatePriceRange() {
  let min = parseInt(priceMin.value);
  let max = parseInt(priceMax.value);

  if (min > max) {
    [min, max] = [max, min];
    priceMin.value = min;
    priceMax.value = max;
  }

  priceRange = [min, max];
  priceMinValue.textContent = `₹${min.toLocaleString()}`;
  priceMaxValue.textContent = `₹${max.toLocaleString()}`;
  renderHotels();
}

priceMin.addEventListener('input', updatePriceRange);
priceMax.addEventListener('input', updatePriceRange);

// Category buttons
document.getElementById('categoryButtons').addEventListener('click', (e) => {
  if (e.target.classList.contains('category-btn')) {
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    selectedCategory = e.target.dataset.category;
    renderHotels();
  }
});

// Mobile menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// Initialize
renderHotels();
renderPopularHotels();
