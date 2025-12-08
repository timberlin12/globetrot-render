// Testimonials Page JavaScript

const reviews = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    rating: 5,
    title: 'Magical Kerala Experience!',
    text: 'WanderLux made our Kerala trip absolutely magical! Every detail was perfectly planned, and the backwater experience was unforgettable. The houseboat stay was luxurious and the food was incredible. Our guide knew all the hidden gems. Highly recommend for anyone looking for an authentic Kerala experience!',
    avatar: 'PS',
    date: 'November 2024',
    trip: 'Kerala Backwaters Tour',
    duration: '7 Days',
    verified: true,
    helpful: 45,
    hasPhoto: true,
    photo: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400'
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    location: 'Delhi, India',
    rating: 5,
    title: 'Heritage Tour Beyond Expectations',
    text: 'Best travel company ever! The Rajasthan heritage tour exceeded all expectations. Professional service and authentic experiences throughout. From the majestic forts to the colorful markets, everything was perfectly organized. The local guides were incredibly knowledgeable about history and culture.',
    avatar: 'RK',
    date: 'October 2024',
    trip: 'Rajasthan Heritage Tour',
    duration: '10 Days',
    verified: true,
    helpful: 38,
    hasPhoto: true,
    photo: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400'
  },
  {
    id: 3,
    name: 'Aisha Patel',
    location: 'Bangalore, India',
    rating: 5,
    title: 'Perfect Family Vacation in Manali',
    text: 'Our family had an amazing time in Manali. The itinerary was perfect for both adults and kids, hotels were luxurious with stunning mountain views, and the team was incredibly helpful at every step. The adventure activities were well-organized and safe. Will definitely book again!',
    avatar: 'AP',
    date: 'September 2024',
    trip: 'Manali Adventure Package',
    duration: '5 Days',
    verified: true,
    helpful: 52,
    hasPhoto: true,
    photo: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400'
  },
  {
    id: 4,
    name: 'Vikram Singh',
    location: 'Jaipur, India',
    rating: 4,
    title: 'Great Goa Beach Getaway',
    text: 'Fantastic Goa beach getaway! Great value for money and excellent customer support. The beach resort was beautiful and the water sports were thrilling. Only minor hiccup was delayed pick-up on arrival but the team quickly resolved it. Overall wonderful experience!',
    avatar: 'VS',
    date: 'August 2024',
    trip: 'Goa Beach Paradise',
    duration: '4 Days',
    verified: true,
    helpful: 29,
    hasPhoto: false
  },
  {
    id: 5,
    name: 'Neha Reddy',
    location: 'Hyderabad, India',
    rating: 5,
    title: 'Honeymoon in Paradise - Kashmir',
    text: 'Kashmir was like heaven on earth! WanderLux team handled everything flawlessly for our honeymoon. The shikara ride on Dal Lake at sunset was the most romantic experience ever. The houseboats, gardens, and mountain views were breathtaking. Perfect planning for a perfect trip!',
    avatar: 'NR',
    date: 'July 2024',
    trip: 'Kashmir Honeymoon Special',
    duration: '6 Days',
    verified: true,
    helpful: 67,
    hasPhoto: true,
    photo: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?w=400'
  },
  {
    id: 6,
    name: 'Amit Verma',
    location: 'Pune, India',
    rating: 5,
    title: 'Loyal Customer for 5 Years!',
    text: 'Booked multiple trips with WanderLux over the past 5 years and never disappointed. Their attention to detail and local expertise makes them stand out from other agencies. From budget trips to luxury experiences, they handle everything professionally. My go-to travel partner!',
    avatar: 'AV',
    date: 'June 2024',
    trip: 'Multiple Destinations',
    duration: 'Various',
    verified: true,
    helpful: 83,
    hasPhoto: false
  },
  {
    id: 7,
    name: 'Sunita Menon',
    location: 'Chennai, India',
    rating: 5,
    title: 'Solo Travel Made Easy',
    text: 'As a solo female traveler, safety was my priority. WanderLux ensured I felt safe and comfortable throughout my Ladakh trip. The accommodations were carefully selected, and they provided 24/7 support. The landscapes were incredible and the photography opportunities endless!',
    avatar: 'SM',
    date: 'May 2024',
    trip: 'Ladakh Solo Adventure',
    duration: '8 Days',
    verified: true,
    helpful: 91,
    hasPhoto: true,
    photo: 'https://images.unsplash.com/photo-1545652985-5edd365b12eb?w=400'
  },
  {
    id: 8,
    name: 'Karthik Iyer',
    location: 'Kochi, India',
    rating: 5,
    title: 'Corporate Retreat Success',
    text: 'Organized a corporate retreat for 50 employees through WanderLux. The team handling was exceptional - from team building activities to comfortable stays, everything was seamless. Our employees are still talking about it! Highly recommend for corporate events.',
    avatar: 'KI',
    date: 'April 2024',
    trip: 'Corporate Retreat Package',
    duration: '3 Days',
    verified: true,
    helpful: 34,
    hasPhoto: true,
    photo: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400'
  }
];

const videoTestimonials = [
  {
    id: 1,
    name: 'The Sharma Family',
    thumbnail: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400',
    trip: 'Kerala Family Tour',
    duration: '2:34'
  },
  {
    id: 2,
    name: 'Rahul & Priya',
    thumbnail: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?w=400',
    trip: 'Kashmir Honeymoon',
    duration: '3:15'
  },
  {
    id: 3,
    name: 'Adventure Group',
    thumbnail: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400',
    trip: 'Manali Trekking',
    duration: '4:02'
  }
];

let activeFilter = 'all';
let visibleReviews = 6;

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
  renderVideoTestimonials();
  renderPhotoGallery();
  renderReviews();
  setupFilters();
  setupLoadMore();
  setupMobileMenu();
});

// Render video testimonials
function renderVideoTestimonials() {
  const videoGrid = document.getElementById('video-grid');
  if (!videoGrid) return;

  videoGrid.innerHTML = videoTestimonials.map(video => `
    <div class="video-card">
      <div class="video-thumbnail">
        <img src="${video.thumbnail}" alt="${video.name}">
        <div class="video-overlay">
          <div class="play-button">▶</div>
        </div>
        <span class="video-duration">${video.duration}</span>
      </div>
      <div class="video-info">
        <h3>${video.name}</h3>
        <p>${video.trip}</p>
      </div>
    </div>
  `).join('');
}

// Render photo gallery
function renderPhotoGallery() {
  const galleryGrid = document.getElementById('gallery-grid');
  if (!galleryGrid) return;

  const photosWithImages = reviews.filter(r => r.hasPhoto);
  
  galleryGrid.innerHTML = photosWithImages.slice(0, 6).map((review, index) => `
    <div class="gallery-item ${index === 0 || index === 5 ? 'gallery-item-large' : ''}">
      <img src="${review.photo}" alt="Photo by ${review.name}">
      <div class="gallery-overlay">
        <p class="gallery-name">${review.name}</p>
        <p class="gallery-trip">${review.trip}</p>
      </div>
    </div>
  `).join('');
}

// Filter reviews
function filterReviews(filter) {
  return reviews.filter(review => {
    if (filter === '5stars') return review.rating === 5;
    if (filter === '4stars') return review.rating === 4;
    if (filter === 'photos') return review.hasPhoto;
    if (filter === 'helpful') return review.helpful > 40;
    return true;
  });
}

// Render reviews
function renderReviews() {
  const reviewsGrid = document.getElementById('reviews-grid');
  const loadMoreContainer = document.getElementById('load-more-container');
  if (!reviewsGrid) return;

  const filteredReviews = filterReviews(activeFilter);
  const displayedReviews = filteredReviews.slice(0, visibleReviews);

  reviewsGrid.innerHTML = displayedReviews.map(review => `
    <div class="review-card">
      <div class="review-header">
        <div class="review-avatar">${review.avatar}</div>
        <div class="review-author">
          <div class="author-name-row">
            <h4>${review.name}</h4>
            ${review.verified ? '<span class="verified-badge">Verified</span>' : ''}
          </div>
          <div class="author-location">
            <span class="location-icon">📍</span>
            ${review.location}
          </div>
          <div class="review-stars">
            ${[...Array(5)].map((_, i) => `
              <span class="star ${i < review.rating ? 'filled' : ''}">★</span>
            `).join('')}
          </div>
        </div>
      </div>
      <h3 class="review-title">${review.title}</h3>
      <p class="review-text">${review.text}</p>
      ${review.hasPhoto && review.photo ? `
        <div class="review-photo">
          <img src="${review.photo}" alt="Photo from ${review.trip}">
        </div>
      ` : ''}
      <div class="review-footer">
        <div class="review-meta">
          <span><span class="meta-icon">📅</span> ${review.date}</span>
          <span>${review.trip}</span>
        </div>
        <button class="helpful-btn">
          <span class="helpful-icon">👍</span>
          ${review.helpful}
        </button>
      </div>
    </div>
  `).join('');

  // Show/hide load more button
  if (loadMoreContainer) {
    loadMoreContainer.style.display = visibleReviews < filteredReviews.length ? 'flex' : 'none';
  }
}

// Setup filters
function setupFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      visibleReviews = 6;
      renderReviews();
    });
  });
}

// Setup load more
function setupLoadMore() {
  const loadMoreBtn = document.getElementById('load-more-btn');
  if (!loadMoreBtn) return;

  loadMoreBtn.addEventListener('click', () => {
    visibleReviews += 4;
    renderReviews();
  });
}

// Mobile menu toggle
function setupMobileMenu() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }
}
