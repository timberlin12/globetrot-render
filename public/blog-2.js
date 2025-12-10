// Blog Data - Exact match to React version
const travelTipsArticles = [
  {
    id: 1,
    title: "10 Essential Packing Tips for Indian Travel",
    excerpt: "Master the art of packing light while staying prepared for India's diverse climates and cultural expectations.",
    image: "/images/hero-manali.jpg",
    date: "2024-12-05",
    readTime: "6 min read",
    category: "Travel Tips"
  },
  {
    id: 2,
    title: "Budget Travel Secrets: Explore India Under ₹1000/Day",
    excerpt: "Discover insider tips to experience incredible India without breaking the bank.",
    image: "/images/hero-rajasthan.jpg",
    date: "2024-12-03",
    readTime: "8 min read",
    category: "Travel Tips"
  },
  {
    id: 3,
    title: "Solo Travel Safety Guide for Women in India",
    excerpt: "Comprehensive safety tips and must-know advice for women traveling alone in India.",
    image: "/images/hero-kerala.jpg",
    date: "2024-12-01",
    readTime: "10 min read",
    category: "Travel Tips"
  }
];

const destinationGuides = [
  {
    id: 4,
    title: "Complete Kashmir Travel Guide 2024",
    excerpt: "Everything you need to know about visiting paradise on Earth - from Srinagar to Gulmarg.",
    image: "/images/hero-kashmir.jpg",
    date: "2024-11-28",
    readTime: "15 min read",
    category: "Destination Guides",
    featured: true
  },
  {
    id: 5,
    title: "Kerala Backwaters: A Complete Guide",
    excerpt: "Navigate the serene backwaters with our comprehensive guide to houseboats, villages, and hidden gems.",
    image: "/images/hero-kerala.jpg",
    date: "2024-11-25",
    readTime: "12 min read",
    category: "Destination Guides"
  },
  {
    id: 6,
    title: "Rajasthan Heritage Tour: Palace to Palace",
    excerpt: "Explore the royal heritage of Rajasthan from Jaipur to Udaipur with detailed itineraries.",
    image: "/images/hero-rajasthan.jpg",
    date: "2024-11-22",
    readTime: "14 min read",
    category: "Destination Guides"
  },
  {
    id: 7,
    title: "Goa Beyond Beaches: Hidden Experiences",
    excerpt: "Discover the Portuguese heritage, spice plantations, and waterfalls that make Goa special.",
    image: "/images/hero-goa.jpg",
    date: "2024-11-20",
    readTime: "10 min read",
    category: "Destination Guides"
  }
];

const seasonalArticles = [
  {
    id: 8,
    title: "Winter Wonderland: Best December Destinations",
    excerpt: "From snow-capped mountains to warm beaches, find your perfect winter escape in India.",
    image: "/images/hero-manali.jpg",
    date: "2024-12-01",
    readTime: "8 min read",
    category: "Seasonal Travel",
    season: "Winter",
    icon: "snowflake"
  },
  {
    id: 9,
    title: "Monsoon Magic: Rainy Season Travel Guide",
    excerpt: "Experience India's dramatic monsoon season with waterfall treks and lush landscapes.",
    image: "/images/hero-kerala.jpg",
    date: "2024-06-15",
    readTime: "9 min read",
    category: "Seasonal Travel",
    season: "Monsoon",
    icon: "mountain"
  },
  {
    id: 10,
    title: "Summer Escapes: Beat the Heat Destinations",
    excerpt: "Cool hill stations and coastal retreats to escape India's scorching summer months.",
    image: "/images/hero-kashmir.jpg",
    date: "2024-04-10",
    readTime: "7 min read",
    category: "Seasonal Travel",
    season: "Summer",
    icon: "thermometer"
  },
  {
    id: 11,
    title: "Spring Blooms: Flower Festival Destinations",
    excerpt: "Witness nature's colorful display from Valley of Flowers to cherry blossoms in Shillong.",
    image: "/images/about-hero.jpg",
    date: "2024-03-01",
    readTime: "6 min read",
    category: "Seasonal Travel",
    season: "Spring",
    icon: "flower"
  }
];

const bestTimeArticles = [
  {
    id: 12,
    title: "Best Time to Visit Goa: Month-by-Month Guide",
    excerpt: "Plan your Goa trip perfectly with insights on weather, crowds, prices, and events throughout the year.",
    image: "/images/hero-goa.jpg",
    date: "2024-11-15",
    readTime: "10 min read",
    category: "Best Time to Visit"
  },
  {
    id: 13,
    title: "When to Visit Kashmir: Seasonal Comparison",
    excerpt: "Compare spring tulips, summer meadows, autumn colors, and winter snow for your ideal Kashmir trip.",
    image: "/images/hero-kashmir.jpg",
    date: "2024-11-10",
    readTime: "12 min read",
    category: "Best Time to Visit"
  },
  {
    id: 14,
    title: "Ladakh Travel Calendar: Best Months Revealed",
    excerpt: "Navigate Ladakh's extreme climate with our detailed month-by-month travel planning guide.",
    image: "/images/hero-manali.jpg",
    date: "2024-11-05",
    readTime: "11 min read",
    category: "Best Time to Visit"
  }
];

const newsArticles = [
  {
    id: 15,
    title: "New Direct Flights to Leh Announced for 2025",
    excerpt: "Major airlines expand connectivity to Ladakh with new routes from major Indian cities.",
    image: "/images/hero-kashmir.jpg",
    date: "2024-12-06",
    readTime: "3 min read",
    category: "News & Updates",
    isNew: true
  },
  {
    id: 16,
    title: "Goa Tourism Launches Eco-Friendly Initiative",
    excerpt: "New sustainability program aims to make Goa a model destination for responsible tourism.",
    image: "/images/hero-goa.jpg",
    date: "2024-12-04",
    readTime: "4 min read",
    category: "News & Updates",
    isNew: true
  },
  {
    id: 17,
    title: "Kerala Wins Best Wellness Destination Award",
    excerpt: "God's Own Country recognized globally for its Ayurvedic tourism and wellness offerings.",
    image: "/images/hero-kerala.jpg",
    date: "2024-12-02",
    readTime: "3 min read",
    category: "News & Updates"
  },
  {
    id: 18,
    title: "Rajasthan Palace Hotels Introduce Heritage Walks",
    excerpt: "Experience royal history with new guided heritage experiences at converted palace hotels.",
    image: "/images/hero-rajasthan.jpg",
    date: "2024-11-30",
    readTime: "5 min read",
    category: "News & Updates"
  }
];

const allArticles = [
  ...travelTipsArticles,
  ...destinationGuides,
  ...seasonalArticles,
  ...bestTimeArticles,
  ...newsArticles
];

const popularPosts = [
  { id: 1, title: "Top 10 Budget Travel Destinations in India", views: "12.5K" },
  { id: 2, title: "Essential Packing Tips for Mountain Treks", views: "10.2K" },
  { id: 3, title: "How to Travel Solo in India Safely", views: "9.8K" },
  { id: 4, title: "Best Photography Spots in the Himalayas", views: "8.5K" }
];

const categories = [
  { name: "Travel Tips", icon: "lightbulb" },
  { name: "Destination Guides", icon: "compass" },
  { name: "Seasonal Travel", icon: "sun" },
  { name: "Best Time to Visit", icon: "calendar" },
  { name: "News & Updates", icon: "newspaper" }
];

// Season icons SVG
const seasonIcons = {
  snowflake: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="2" x2="22" y1="12" y2="12"/><line x1="12" x2="12" y1="2" y2="22"/><path d="m20 16-4-4 4-4"/><path d="m4 8 4 4-4 4"/><path d="m16 4-4 4-4-4"/><path d="m8 20 4-4 4 4"/></svg>',
  mountain: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/><path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"/></svg>',
  thermometer: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/><path d="M12 2v2"/><path d="M12 18v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/></svg>',
  flower: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15"/><circle cx="12" cy="12" r="3"/><path d="m8 16 1.5-1.5"/><path d="M14.5 9.5 16 8"/><path d="m8 8 1.5 1.5"/><path d="M14.5 14.5 16 16"/></svg>'
};

const categoryIcons = {
  lightbulb: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>',
  compass: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
  sun: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',
  calendar: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',
  newspaper: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>'
};

// State
let selectedCategory = "All";
let searchQuery = "";

// Helper Functions
function formatDate(dateString, format = 'short') {
  const date = new Date(dateString);
  if (format === 'long') {
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  }
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

// Create Article Card
function createArticleCard(article, compact = false) {
  return `
    <a href="blog-detail.html?id=${article.id}" class="article-card-link">
      <div class="article-card">
        <div class="article-image-container ${compact ? 'compact' : ''}">
          <img src="${article.image}" alt="${article.title}" class="article-image">
          ${article.isNew ? '<span class="article-new-badge">New</span>' : ''}
        </div>
        <div class="article-content ${compact ? 'compact' : ''}">
          <span class="article-category">${article.category}</span>
          <h3 class="article-title ${compact ? 'compact' : ''}">${article.title}</h3>
          ${!compact ? `<p class="article-excerpt">${article.excerpt}</p>` : ''}
          <div class="article-meta">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
              ${formatDate(article.date)}
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              ${article.readTime}
            </span>
          </div>
        </div>
      </div>
    </a>
  `;
}

// Create Seasonal Card
function createSeasonalCard(article) {
  const iconSvg = seasonIcons[article.icon] || seasonIcons.sun;
  return `
    <a href="blog-detail.html?id=${article.id}" class="article-card-link">
      <div class="seasonal-card">
        <div class="seasonal-image-container">
          <img src="${article.image}" alt="${article.title}" class="seasonal-image">
          <div class="seasonal-image-overlay"></div>
          <div class="seasonal-badge">
            <div class="seasonal-icon">${iconSvg}</div>
            <span class="seasonal-name">${article.season}</span>
          </div>
        </div>
        <div class="seasonal-content">
          <h3 class="seasonal-title">${article.title}</h3>
          <div class="seasonal-meta">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${article.readTime}
          </div>
        </div>
      </div>
    </a>
  `;
}

// Create News Card
function createNewsCard(article) {
  return `
    <a href="blog-detail.html?id=${article.id}" class="article-card-link">
      <div class="news-card">
        <div class="news-image-container">
          <img src="${article.image}" alt="${article.title}" class="news-image">
          ${article.isNew ? '<span class="news-new-badge">New</span>' : ''}
        </div>
        <div class="news-content">
          <div class="news-date">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>
            ${formatDate(article.date, 'long')}
          </div>
          <h3 class="news-title">${article.title}</h3>
          <p class="news-excerpt">${article.excerpt}</p>
        </div>
      </div>
    </a>
  `;
}

// Render All Categories View
function renderAllCategoriesView() {
  // Travel Tips
  document.getElementById('travelTipsGrid').innerHTML = travelTipsArticles.map(a => createArticleCard(a)).join('');
  
  // Destination Guides (exclude featured)
  document.getElementById('destinationGuidesGrid').innerHTML = destinationGuides.filter(a => !a.featured).map(a => createArticleCard(a, true)).join('');
  
  // Seasonal Travel
  document.getElementById('seasonalTravelGrid').innerHTML = seasonalArticles.map(a => createSeasonalCard(a)).join('');
  
  // Best Time to Visit
  document.getElementById('bestTimeGrid').innerHTML = bestTimeArticles.map(a => createArticleCard(a)).join('');
  
  // News
  document.getElementById('newsGrid').innerHTML = newsArticles.map(a => createNewsCard(a)).join('');
}

// Render Filtered View
function renderFilteredView() {
  const filteredArticles = allArticles.filter(article => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const title = searchQuery ? `Search Results for "${searchQuery}"` : selectedCategory;
  document.getElementById('filteredTitle').textContent = title;
  document.getElementById('filteredCount').textContent = `${filteredArticles.length} Articles`;

  if (filteredArticles.length > 0) {
    document.getElementById('filteredGrid').innerHTML = filteredArticles.map(a => createArticleCard(a)).join('');
    document.getElementById('filteredGrid').classList.remove('hidden');
    document.getElementById('noResults').classList.add('hidden');
  } else {
    document.getElementById('filteredGrid').classList.add('hidden');
    document.getElementById('noResults').classList.remove('hidden');
  }
}

// Render Popular Posts
function renderPopularPosts() {
  document.getElementById('popularPosts').innerHTML = popularPosts.map(post => `
    <div class="popular-post">
      <h4 class="popular-post-title">${post.title}</h4>
      <p class="popular-post-views">${post.views} views</p>
    </div>
  `).join('');
}

// Render Categories Widget
function renderCategoriesWidget() {
  document.getElementById('categoriesList').innerHTML = categories.map(category => {
    const count = allArticles.filter(a => a.category === category.name).length;
    return `
      <button class="category-widget-btn" data-category="${category.name}">
        <span class="category-widget-left">
          ${categoryIcons[category.icon]}
          <span>${category.name}</span>
        </span>
        <span class="category-widget-count">${count}</span>
      </button>
    `;
  }).join('');
}

// Update View
function updateView() {
  const allCategoriesView = document.getElementById('allCategoriesView');
  const filteredView = document.getElementById('filteredView');

  if (selectedCategory === "All" && !searchQuery) {
    allCategoriesView.classList.remove('hidden');
    filteredView.classList.add('hidden');
  } else {
    allCategoriesView.classList.add('hidden');
    filteredView.classList.remove('hidden');
    renderFilteredView();
  }

  // Update category buttons
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === selectedCategory);
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  // Update article count
  document.getElementById('articleCount').textContent = `${allArticles.length}+ Articles`;

  // Render initial content
  renderAllCategoriesView();
  renderPopularPosts();
  renderCategoriesWidget();

  // Category button click handlers
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      selectedCategory = this.dataset.category;
      searchQuery = '';
      document.getElementById('searchInput').value = '';
      updateView();
    });
  });

  // View All button click handlers
  document.querySelectorAll('.view-all-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      selectedCategory = this.dataset.category;
      searchQuery = '';
      document.getElementById('searchInput').value = '';
      updateView();
    });
  });

  // Categories widget click handlers
  document.getElementById('categoriesList').addEventListener('click', function(e) {
    const btn = e.target.closest('.category-widget-btn');
    if (btn) {
      selectedCategory = btn.dataset.category;
      searchQuery = '';
      document.getElementById('searchInput').value = '';
      updateView();
    }
  });

  // Search input handler
  document.getElementById('searchInput').addEventListener('input', function(e) {
    searchQuery = e.target.value;
    if (searchQuery && selectedCategory === "All") {
      // Stay in filtered view for search
    }
    updateView();
  });

  // Clear filters button
  document.getElementById('clearFiltersBtn').addEventListener('click', function() {
    selectedCategory = "All";
    searchQuery = '';
    document.getElementById('searchInput').value = '';
    updateView();
  });

  // Newsletter forms
  document.getElementById('sidebarNewsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    this.reset();
  });

  document.getElementById('ctaNewsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    this.reset();
  });

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
    });
  }
});
