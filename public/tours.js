// Tours Data
const allTours = [
  {
    id: 1,
    location: 'Kerala Backwaters',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800',
    startDate: 'Mar 15, 2025',
    price: 24999,
    duration: '5 Days',
    destination: 'Kerala',
    rating: 4.8,
    reviews: 156,
    popular: true
  },
  {
    id: 2,
    location: 'Rajasthan Heritage',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800',
    startDate: 'Apr 10, 2025',
    price: 32999,
    duration: '7 Days',
    destination: 'Rajasthan',
    rating: 4.9,
    reviews: 203,
    popular: true
  },
  {
    id: 3,
    location: 'Manali Adventure',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800',
    startDate: 'May 20, 2025',
    price: 28999,
    duration: '6 Days',
    destination: 'Himachal Pradesh',
    rating: 4.7,
    reviews: 142,
    popular: true
  },
  {
    id: 4,
    location: 'Goa Beach Paradise',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800',
    startDate: 'Mar 25, 2025',
    price: 19999,
    duration: '4 Days',
    destination: 'Goa',
    rating: 4.6,
    reviews: 189,
    popular: false
  },
  {
    id: 5,
    location: 'Kashmir Valley',
    image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800',
    startDate: 'Jun 5, 2025',
    price: 35999,
    duration: '8 Days',
    destination: 'Kashmir',
    rating: 4.9,
    reviews: 178,
    popular: false
  },
  {
    id: 6,
    location: 'Leh Ladakh Expedition',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    startDate: 'Jul 15, 2025',
    price: 42999,
    duration: '10 Days',
    destination: 'Ladakh',
    rating: 5.0,
    reviews: 95,
    popular: false
  }
];

// State
let filters = {
  searchQuery: '',
  priceRange: 50000,
  selectedDestination: 'All',
  sortBy: 'popular'
};

// DOM Elements
const searchInput = document.getElementById('searchInput');
const priceSlider = document.getElementById('priceSlider');
const priceValue = document.getElementById('priceValue');
const destinationButtons = document.querySelectorAll('.destination-btn');
const sortSelect = document.getElementById('sortSelect');
const toursGrid = document.getElementById('toursGrid');
const toursCount = document.getElementById('toursCount');
const noResults = document.getElementById('noResults');
const resetFilters = document.getElementById('resetFilters');
const popularTours = document.getElementById('popularTours');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderPopularTours();
  updateTours();
  setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
  searchInput.addEventListener('input', (e) => {
    filters.searchQuery = e.target.value;
    updateTours();
  });

  priceSlider.addEventListener('input', (e) => {
    filters.priceRange = parseInt(e.target.value);
    priceValue.textContent = filters.priceRange.toLocaleString();
    updateTours();
  });

  destinationButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      destinationButtons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      filters.selectedDestination = e.target.dataset.destination;
      updateTours();
    });
  });

  sortSelect.addEventListener('change', (e) => {
    filters.sortBy = e.target.value;
    updateTours();
  });

  resetFilters.addEventListener('click', () => {
    filters = {
      searchQuery: '',
      priceRange: 50000,
      selectedDestination: 'All',
      sortBy: 'popular'
    };
    searchInput.value = '';
    priceSlider.value = 50000;
    priceValue.textContent = '50,000';
    sortSelect.value = 'popular';
    destinationButtons.forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.destination === 'All') {
        btn.classList.add('active');
      }
    });
    updateTours();
  });
}

// Filter Tours
function filterTours() {
  return allTours.filter(tour => {
    const matchesSearch = tour.location.toLowerCase().includes(filters.searchQuery.toLowerCase());
    const matchesPrice = tour.price <= filters.priceRange;
    const matchesDestination = filters.selectedDestination === 'All' || tour.destination === filters.selectedDestination;
    return matchesSearch && matchesPrice && matchesDestination;
  });
}

// Sort Tours
function sortTours(tours) {
  const sorted = [...tours];
  switch (filters.sortBy) {
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price);
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'popular':
    default:
      return sorted.sort((a, b) => b.reviews - a.reviews);
  }
}

// Update Tours Display
function updateTours() {
  let filtered = filterTours();
  filtered = sortTours(filtered);
  
  toursCount.textContent = filtered.length;
  
  if (filtered.length === 0) {
    toursGrid.style.display = 'none';
    noResults.style.display = 'block';
  } else {
    toursGrid.style.display = 'grid';
    noResults.style.display = 'none';
    renderTours(filtered);
  }
}

// Render Tours
function renderTours(tours) {
  toursGrid.innerHTML = tours.map(tour => `
    <div class="tour-card">
      <div class="tour-image-wrapper">
        <img src="${tour.image}" alt="${tour.location}" class="tour-image">
        <div class="tour-duration-badge">${tour.duration}</div>
        ${tour.popular ? `
          <div class="tour-popular-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            Popular
          </div>
        ` : ''}
      </div>
      <div class="tour-content">
        <div class="tour-header">
          <h4 class="tour-title">${tour.location}</h4>
          <div class="tour-rating">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span class="rating-value">${tour.rating}</span>
            <span class="rating-reviews">(${tour.reviews})</span>
          </div>
        </div>
        <div class="tour-info">
          <div class="tour-info-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>${tour.destination}</span>
          </div>
          <div class="tour-info-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>Starting ${tour.startDate}</span>
          </div>
        </div>
        <div class="tour-footer">
          <span class="tour-price">₹${tour.price.toLocaleString()}</span>
          <a href="tour-detail.html?id=${tour.id}" class="tour-book-btn">Book Now</a>
        </div>
      </div>
    </div>
  `).join('');
}

// Render Popular Tours
function renderPopularTours() {
  const popular = allTours.filter(tour => tour.popular).slice(0, 3);
  popularTours.innerHTML = popular.map(tour => `
    <div class="popular-tour-item">
      <img src="${tour.image}" alt="${tour.location}" class="popular-tour-image">
      <div class="popular-tour-info">
        <p class="popular-tour-name">${tour.location}</p>
        <p class="popular-tour-price">₹${tour.price.toLocaleString()}</p>
      </div>
    </div>
  `).join('');
}