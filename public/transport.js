// Transport data
const transports = [
  {
    id: 1,
    name: 'Luxury Sedan',
    type: 'car',
    capacity: 4,
    price: 3500,
    rating: 4.8,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
    features: ['AC', 'Music System', 'GPS', 'Insurance']
  },
  {
    id: 2,
    name: 'Tempo Traveller',
    type: 'tempo',
    capacity: 12,
    price: 8000,
    rating: 4.7,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800',
    features: ['AC', 'Spacious', 'GPS', 'First Aid']
  },
  {
    id: 3,
    name: 'Mini Bus',
    type: 'bus',
    capacity: 20,
    price: 12000,
    rating: 4.6,
    reviews: 167,
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800',
    features: ['AC', 'Entertainment', 'GPS', 'Luggage Space']
  },
  {
    id: 4,
    name: 'Hatchback',
    type: 'car',
    capacity: 4,
    price: 2000,
    rating: 4.5,
    reviews: 145,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
    features: ['AC', 'GPS', 'Insurance']
  },
  {
    id: 5,
    name: 'Luxury Coach',
    type: 'luxury',
    capacity: 35,
    price: 18000,
    rating: 4.9,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800',
    features: ['AC', 'Reclining Seats', 'Entertainment', 'Wifi', 'Washroom']
  },
  {
    id: 6,
    name: 'SUV',
    type: 'car',
    capacity: 7,
    price: 5500,
    rating: 4.7,
    reviews: 198,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800',
    features: ['AC', '4WD', 'GPS', 'Insurance', 'Premium Sound']
  }
];

// State
let searchQuery = '';
let priceRange = [0, 20000];
let sortBy = 'popular';
let selectedType = 'all';

// Filter and sort transports
function getFilteredTransports() {
  let filtered = [...transports];

  // Search filter
  if (searchQuery) {
    filtered = filtered.filter(transport =>
      transport.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transport.type.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Type filter
  if (selectedType !== 'all') {
    filtered = filtered.filter(transport => transport.type === selectedType);
  }

  // Price filter
  filtered = filtered.filter(transport => transport.price >= priceRange[0] && transport.price <= priceRange[1]);

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

// Render transports
function renderTransports() {
  const filtered = getFilteredTransports();
  const grid = document.getElementById('transportsGrid');
  const count = document.getElementById('transportCount');

  count.textContent = `Showing ${filtered.length} ${filtered.length === 1 ? 'option' : 'options'}`;

  grid.innerHTML = filtered.map(transport => `
    <div class="transport-card">
      <div class="transport-image-container">
        <img src="${transport.image}" alt="${transport.name}" class="transport-image">
        <div class="transport-price-badge">₹${transport.price.toLocaleString()}/day</div>
      </div>
      <div class="transport-content">
        <h3 class="transport-name">${transport.name}</h3>
        <div class="transport-info">
          <div class="transport-info-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="m16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span>${transport.capacity} seats</span>
          </div>
          <div class="transport-info-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"></path>
              <path d="M4 8h16"></path>
              <path d="M4 8v8"></path>
              <path d="M20 8v8"></path>
              <path d="M9 4h6"></path>
            </svg>
            <span class="transport-type">${transport.type}</span>
          </div>
        </div>
        <div class="transport-rating">
          <div class="rating-stars">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span class="rating-value">${transport.rating}</span>
          </div>
          <span class="rating-reviews">(${transport.reviews} reviews)</span>
        </div>
        <div class="transport-features">
          ${transport.features.map(feature => `
            <div class="feature-tag">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span>${feature}</span>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="transport-footer">
        <a href="transport-detail.html?id=${transport.id}" class="btn btn-primary btn-full">Book Now</a>
      </div>
    </div>
  `).join('');
}

// Render popular transports
function renderPopularTransports() {
  const popular = transports.filter(t => t.rating >= 4.7).slice(0, 3);
  const container = document.getElementById('popularTransports');

  container.innerHTML = popular.map(transport => `
    <div class="popular-transport-item">
      <img src="${transport.image}" alt="${transport.name}" class="popular-transport-image">
      <div class="popular-transport-info">
        <h4 class="popular-transport-name">${transport.name}</h4>
        <p class="popular-transport-capacity">${transport.capacity} seats</p>
        <div class="popular-transport-rating">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <span>${transport.rating}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// Event listeners
document.getElementById('searchInput').addEventListener('input', (e) => {
  searchQuery = e.target.value;
  renderTransports();
});

document.getElementById('sortBy').addEventListener('change', (e) => {
  sortBy = e.target.value;
  renderTransports();
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
  renderTransports();
}

priceMin.addEventListener('input', updatePriceRange);
priceMax.addEventListener('input', updatePriceRange);

// Type buttons
document.getElementById('typeButtons').addEventListener('click', (e) => {
  if (e.target.classList.contains('category-btn')) {
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    selectedType = e.target.dataset.type;
    renderTransports();
  }
});

// Mobile menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// Initialize
renderTransports();
renderPopularTransports();