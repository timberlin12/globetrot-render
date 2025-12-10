// Blog Page JavaScript - Matching React Version

// Article Data
const travelTipsArticles = [
    {
        id: 1,
        title: "10 Essential Packing Tips for Indian Travel",
        excerpt: "Master the art of packing light while staying prepared for India's diverse climates and cultural expectations.",
        image: "images/hero-manali.jpg",
        date: "2024-12-05",
        readTime: "6 min read",
        category: "Travel Tips"
    },
    {
        id: 2,
        title: "Budget Travel Secrets: Explore India Under ₹1000/Day",
        excerpt: "Discover insider tips to experience incredible India without breaking the bank.",
        image: "images/hero-rajasthan.jpg",
        date: "2024-12-03",
        readTime: "8 min read",
        category: "Travel Tips"
    },
    {
        id: 3,
        title: "Solo Travel Safety Guide for Women in India",
        excerpt: "Comprehensive safety tips and must-know advice for women traveling alone in India.",
        image: "images/hero-kerala.jpg",
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
        image: "images/hero-kashmir.jpg",
        date: "2024-11-28",
        readTime: "15 min read",
        category: "Destination Guides",
        featured: true
    },
    {
        id: 5,
        title: "Kerala Backwaters: A Complete Guide",
        excerpt: "Navigate the serene backwaters with our comprehensive guide to houseboats, villages, and hidden gems.",
        image: "images/hero-kerala.jpg",
        date: "2024-11-25",
        readTime: "12 min read",
        category: "Destination Guides"
    },
    {
        id: 6,
        title: "Rajasthan Heritage Tour: Palace to Palace",
        excerpt: "Explore the royal heritage of Rajasthan from Jaipur to Udaipur with detailed itineraries.",
        image: "images/hero-rajasthan.jpg",
        date: "2024-11-22",
        readTime: "14 min read",
        category: "Destination Guides"
    },
    {
        id: 7,
        title: "Goa Beyond Beaches: Hidden Experiences",
        excerpt: "Discover the Portuguese heritage, spice plantations, and waterfalls that make Goa special.",
        image: "images/hero-goa.jpg",
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
        image: "images/hero-manali.jpg",
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
        image: "images/hero-kerala.jpg",
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
        image: "images/hero-kashmir.jpg",
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
        image: "images/about-hero.jpg",
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
        image: "images/hero-goa.jpg",
        date: "2024-11-15",
        readTime: "10 min read",
        category: "Best Time to Visit"
    },
    {
        id: 13,
        title: "When to Visit Kashmir: Seasonal Comparison",
        excerpt: "Compare spring tulips, summer meadows, autumn colors, and winter snow for your ideal Kashmir trip.",
        image: "images/hero-kashmir.jpg",
        date: "2024-11-10",
        readTime: "12 min read",
        category: "Best Time to Visit"
    },
    {
        id: 14,
        title: "Ladakh Travel Calendar: Best Months Revealed",
        excerpt: "Navigate Ladakh's extreme climate with our detailed month-by-month travel planning guide.",
        image: "images/hero-manali.jpg",
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
        image: "images/hero-kashmir.jpg",
        date: "2024-12-06",
        readTime: "3 min read",
        category: "News & Updates",
        isNew: true
    },
    {
        id: 16,
        title: "Goa Tourism Launches Eco-Friendly Initiative",
        excerpt: "New sustainability program aims to make Goa a model destination for responsible tourism.",
        image: "images/hero-goa.jpg",
        date: "2024-12-04",
        readTime: "4 min read",
        category: "News & Updates",
        isNew: true
    },
    {
        id: 17,
        title: "Kerala Wins Best Wellness Destination Award",
        excerpt: "God's Own Country recognized globally for its Ayurvedic tourism and wellness offerings.",
        image: "images/hero-kerala.jpg",
        date: "2024-12-02",
        readTime: "3 min read",
        category: "News & Updates"
    },
    {
        id: 18,
        title: "Rajasthan Palace Hotels Introduce Heritage Walks",
        excerpt: "Experience royal history with new guided heritage experiences at converted palace hotels.",
        image: "images/hero-rajasthan.jpg",
        date: "2024-11-30",
        readTime: "5 min read",
        category: "News & Updates"
    }
];

// Combine all articles
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
    mountain: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/><path d="m4.14 15.08 2.86-2.58"/></svg>',
    thermometer: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/><path d="M12 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/></svg>',
    flower: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15"/><circle cx="12" cy="12" r="3"/><path d="m8 16 1.5-1.5"/><path d="M14.5 9.5 16 8"/><path d="m8 8 1.5 1.5"/><path d="M14.5 14.5 16 16"/></svg>'
};

// Category icons SVG
const categoryIcons = {
    lightbulb: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>',
    compass: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
    sun: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',
    calendar: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',
    newspaper: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>'
};

// State
let currentCategory = "All";
let searchQuery = "";

// DOM Elements
const searchInput = document.getElementById('blogSearchInput');
const categoryButtons = document.getElementById('categoryButtons');
const allCategoriesView = document.getElementById('allCategoriesView');
const filteredView = document.getElementById('filteredView');
const filteredTitle = document.getElementById('filteredTitle');
const articlesCount = document.getElementById('articlesCount');
const filteredArticlesGrid = document.getElementById('filteredArticlesGrid');
const noResults = document.getElementById('noResults');
const clearFiltersBtn = document.getElementById('clearFiltersBtn');

// Helper function to format date
function formatDate(dateStr, format = 'short') {
    const date = new Date(dateStr);
    if (format === 'long') {
        return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    }
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

// Create Article Card HTML
function createArticleCard(article, compact = false) {
    return `
        <div class="blog-article-card">
            <div class="blog-article-image ${compact ? 'compact' : ''}">
                <img src="${article.image}" alt="${article.title}">
                ${article.isNew ? '<span class="blog-article-new-badge">New</span>' : ''}
            </div>
            <div class="blog-article-content ${compact ? 'compact' : ''}">
                <span class="blog-article-category">${article.category}</span>
                <h3 class="${compact ? 'compact' : ''}">${article.title}</h3>
                ${!compact ? `<p class="blog-article-excerpt">${article.excerpt}</p>` : ''}
                <div class="blog-article-meta">
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
    `;
}

// Create Seasonal Card HTML
function createSeasonalCard(article) {
    const iconSvg = seasonIcons[article.icon] || seasonIcons.sun;
    return `
        <div class="blog-seasonal-card">
            <div class="blog-seasonal-image">
                <img src="${article.image}" alt="${article.title}">
                <div class="blog-seasonal-image-overlay"></div>
                <div class="blog-seasonal-badge">
                    <div class="blog-seasonal-icon">${iconSvg}</div>
                    <span class="blog-seasonal-name">${article.season}</span>
                </div>
            </div>
            <div class="blog-seasonal-content">
                <h3>${article.title}</h3>
                <div class="blog-seasonal-meta">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    ${article.readTime}
                </div>
            </div>
        </div>
    `;
}

// Create News Card HTML
function createNewsCard(article) {
    return `
        <div class="blog-news-card">
            <div class="blog-news-image">
                <img src="${article.image}" alt="${article.title}">
                ${article.isNew ? '<span class="blog-news-badge">New</span>' : ''}
            </div>
            <div class="blog-news-content">
                <div class="blog-news-meta">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>
                    <span>${formatDate(article.date, 'long')}</span>
                </div>
                <h3>${article.title}</h3>
                <p class="blog-news-excerpt">${article.excerpt}</p>
            </div>
        </div>
    `;
}

// Render All Categories View
function renderAllCategoriesView() {
    // Render Travel Tips
    const travelTipsGrid = document.getElementById('travelTipsGrid');
    travelTipsGrid.innerHTML = travelTipsArticles.map(article => createArticleCard(article)).join('');

    // Render Destination Guides (exclude featured)
    const destinationGuidesGrid = document.getElementById('destinationGuidesGrid');
    destinationGuidesGrid.innerHTML = destinationGuides
        .filter(article => !article.featured)
        .map(article => createArticleCard(article, true))
        .join('');

    // Render Seasonal
    const seasonalGrid = document.getElementById('seasonalGrid');
    seasonalGrid.innerHTML = seasonalArticles.map(article => createSeasonalCard(article)).join('');

    // Render Best Time
    const bestTimeGrid = document.getElementById('bestTimeGrid');
    bestTimeGrid.innerHTML = bestTimeArticles.map(article => createArticleCard(article)).join('');

    // Render News
    const newsGrid = document.getElementById('newsGrid');
    newsGrid.innerHTML = newsArticles.map(article => createNewsCard(article)).join('');

    // Render Popular Posts
    const popularPostsContainer = document.getElementById('popularPosts');
    popularPostsContainer.innerHTML = popularPosts.map(post => `
        <div class="blog-popular-post">
            <h4>${post.title}</h4>
            <span>${post.views} views</span>
        </div>
    `).join('');

    // Render Categories Widget
    const categoriesWidget = document.getElementById('categoriesWidget');
    categoriesWidget.innerHTML = categories.map(cat => {
        const count = allArticles.filter(a => a.category === cat.name).length;
        return `
            <button class="blog-category-widget-btn" data-category="${cat.name}">
                <span class="cat-label">
                    ${categoryIcons[cat.icon]}
                    <span>${cat.name}</span>
                </span>
                <span class="cat-count">${count}</span>
            </button>
        `;
    }).join('');

    // Update total articles count
    document.getElementById('totalArticles').textContent = `${allArticles.length}+ Articles`;
}

// Filter articles
function getFilteredArticles() {
    return allArticles.filter(article => {
        const matchesCategory = currentCategory === "All" || article.category === currentCategory;
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });
}

// Update view based on current state
function updateView() {
    const filtered = getFilteredArticles();
    
    if (currentCategory === "All" && !searchQuery) {
        // Show all categories view
        allCategoriesView.classList.remove('hidden');
        filteredView.classList.remove('active');
    } else {
        // Show filtered view
        allCategoriesView.classList.add('hidden');
        filteredView.classList.add('active');

        // Update title
        if (searchQuery) {
            filteredTitle.textContent = `Search Results for "${searchQuery}"`;
        } else {
            filteredTitle.textContent = currentCategory;
        }

        // Update count
        articlesCount.textContent = `${filtered.length} Articles`;

        // Render filtered articles
        if (filtered.length > 0) {
            filteredArticlesGrid.innerHTML = filtered.map(article => createArticleCard(article)).join('');
            filteredArticlesGrid.style.display = '';
            noResults.style.display = 'none';
        } else {
            filteredArticlesGrid.style.display = 'none';
            noResults.style.display = '';
        }
    }

    // Update category buttons
    const buttons = categoryButtons.querySelectorAll('.blog-category-btn');
    buttons.forEach(btn => {
        if (btn.dataset.category === currentCategory) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Event Listeners
function initEventListeners() {
    // Search input
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        updateView();
    });

    // Category buttons
    categoryButtons.addEventListener('click', (e) => {
        const btn = e.target.closest('.blog-category-btn');
        if (btn) {
            currentCategory = btn.dataset.category;
            updateView();
        }
    });

    // View All buttons
    document.querySelectorAll('.blog-view-all-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentCategory = btn.dataset.category;
            updateView();
            // Scroll to top of content
            document.querySelector('.blog-category-filter').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Clear filters button
    clearFiltersBtn.addEventListener('click', () => {
        currentCategory = "All";
        searchQuery = "";
        searchInput.value = "";
        updateView();
    });

    // Categories widget buttons (delegated)
    document.getElementById('categoriesWidget').addEventListener('click', (e) => {
        const btn = e.target.closest('.blog-category-widget-btn');
        if (btn) {
            currentCategory = btn.dataset.category;
            updateView();
        }
    });

    // Newsletter forms
    document.querySelectorAll('#sidebarNewsletterForm, #ctaNewsletterForm').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing with ${email}! You'll receive our latest travel updates.`);
            form.reset();
        });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderAllCategoriesView();
    initEventListeners();
    updateView();
});
