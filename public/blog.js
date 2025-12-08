// Blog Page Functionality

// All articles data
const allArticles = [
    // Travel Tips
    { id: 1, title: "10 Essential Packing Tips for Indian Travel", excerpt: "Master the art of packing light while staying prepared for India's diverse climates.", image: "images/hero-manali.jpg", date: "Dec 5, 2024", readTime: "6 min", category: "travel-tips" },
    { id: 2, title: "Budget Travel Secrets: Explore India Under ₹1000/Day", excerpt: "Discover insider tips to experience incredible India without breaking the bank.", image: "images/hero-rajasthan.jpg", date: "Dec 3, 2024", readTime: "8 min", category: "travel-tips" },
    { id: 3, title: "Solo Travel Safety Guide for Women in India", excerpt: "Comprehensive safety tips and must-know advice for women traveling alone.", image: "images/hero-kerala.jpg", date: "Dec 1, 2024", readTime: "10 min", category: "travel-tips" },
    
    // Destination Guides
    { id: 4, title: "Complete Kashmir Travel Guide 2024", excerpt: "Everything you need to know about visiting paradise on Earth.", image: "images/hero-kashmir.jpg", date: "Nov 28, 2024", readTime: "15 min", category: "destination-guides", featured: true },
    { id: 5, title: "Kerala Backwaters: A Complete Guide", excerpt: "Navigate the serene backwaters with our comprehensive guide.", image: "images/hero-kerala.jpg", date: "Nov 25, 2024", readTime: "12 min", category: "destination-guides" },
    { id: 6, title: "Rajasthan Heritage Tour: Palace to Palace", excerpt: "Explore the royal heritage of Rajasthan from Jaipur to Udaipur.", image: "images/hero-rajasthan.jpg", date: "Nov 22, 2024", readTime: "14 min", category: "destination-guides" },
    { id: 7, title: "Goa Beyond Beaches: Hidden Experiences", excerpt: "Discover the Portuguese heritage, spice plantations, and waterfalls.", image: "images/hero-goa.jpg", date: "Nov 20, 2024", readTime: "10 min", category: "destination-guides" },
    
    // Seasonal Travel
    { id: 8, title: "Winter Wonderland: Best December Destinations", excerpt: "From snow-capped mountains to warm beaches, find your perfect winter escape.", image: "images/hero-manali.jpg", date: "Dec 1, 2024", readTime: "8 min", category: "seasonal-travel", season: "Winter" },
    { id: 9, title: "Monsoon Magic: Rainy Season Travel Guide", excerpt: "Experience India's dramatic monsoon season with waterfall treks.", image: "images/hero-kerala.jpg", date: "Jun 15, 2024", readTime: "9 min", category: "seasonal-travel", season: "Monsoon" },
    { id: 10, title: "Summer Escapes: Beat the Heat Destinations", excerpt: "Cool hill stations and coastal retreats to escape summer heat.", image: "images/hero-kashmir.jpg", date: "Apr 10, 2024", readTime: "7 min", category: "seasonal-travel", season: "Summer" },
    { id: 11, title: "Spring Blooms: Flower Festival Destinations", excerpt: "Witness nature's colorful display from Valley of Flowers to Shillong.", image: "images/about-hero.jpg", date: "Mar 1, 2024", readTime: "6 min", category: "seasonal-travel", season: "Spring" },
    
    // Best Time to Visit
    { id: 12, title: "Best Time to Visit Goa: Month-by-Month Guide", excerpt: "Plan your Goa trip perfectly with insights on weather and events.", image: "images/hero-goa.jpg", date: "Nov 15, 2024", readTime: "10 min", category: "best-time" },
    { id: 13, title: "When to Visit Kashmir: Seasonal Comparison", excerpt: "Compare spring tulips, summer meadows, autumn colors, and winter snow.", image: "images/hero-kashmir.jpg", date: "Nov 10, 2024", readTime: "12 min", category: "best-time" },
    { id: 14, title: "Ladakh Travel Calendar: Best Months Revealed", excerpt: "Navigate Ladakh's extreme climate with our detailed planning guide.", image: "images/hero-manali.jpg", date: "Nov 5, 2024", readTime: "11 min", category: "best-time" },
    
    // News & Updates
    { id: 15, title: "New Direct Flights to Leh Announced for 2025", excerpt: "Major airlines expand connectivity to Ladakh with new routes.", image: "images/hero-kashmir.jpg", date: "Dec 6, 2024", readTime: "3 min", category: "news", isNew: true },
    { id: 16, title: "Goa Tourism Launches Eco-Friendly Initiative", excerpt: "New sustainability program aims to make Goa a model destination.", image: "images/hero-goa.jpg", date: "Dec 4, 2024", readTime: "4 min", category: "news", isNew: true },
    { id: 17, title: "Kerala Wins Best Wellness Destination Award", excerpt: "God's Own Country recognized globally for Ayurvedic tourism.", image: "images/hero-kerala.jpg", date: "Dec 2, 2024", readTime: "3 min", category: "news" },
    { id: 18, title: "Rajasthan Palace Hotels Introduce Heritage Walks", excerpt: "Experience royal history with new guided heritage experiences.", image: "images/hero-rajasthan.jpg", date: "Nov 30, 2024", readTime: "5 min", category: "news" }
];

const categoryNames = {
    'all': 'All Articles',
    'travel-tips': 'Travel Tips',
    'destination-guides': 'Destination Guides',
    'seasonal-travel': 'Seasonal Travel',
    'best-time': 'Best Time to Visit',
    'news': 'News & Updates'
};

let currentCategory = 'all';
let currentSearchQuery = '';

// DOM Elements
const categoryButtons = document.querySelectorAll('.category-btn-new');
const allCategoriesView = document.getElementById('allCategoriesView');
const filteredView = document.getElementById('filteredView');
const filteredArticlesGrid = document.getElementById('filteredArticlesGrid');
const filteredTitle = document.getElementById('filteredTitle');
const articlesCount = document.getElementById('articlesCount');
const noResults = document.getElementById('noResults');
const searchInput = document.getElementById('blogSearch');
const viewAllButtons = document.querySelectorAll('.view-all-btn');
const sidebarCatButtons = document.querySelectorAll('.sidebar-cat-btn');
const clearFiltersBtn = document.getElementById('clearFiltersBtn');

// Category button click handler
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        currentCategory = button.dataset.category;
        filterArticles();
    });
});

// View All button click handler
viewAllButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        const correspondingBtn = document.querySelector(`.category-btn-new[data-category="${category}"]`);
        if (correspondingBtn) {
            correspondingBtn.click();
        }
    });
});

// Sidebar category button click handler
sidebarCatButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        const correspondingBtn = document.querySelector(`.category-btn-new[data-category="${category}"]`);
        if (correspondingBtn) {
            correspondingBtn.click();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});

// Search functionality
searchInput.addEventListener('input', (e) => {
    currentSearchQuery = e.target.value.toLowerCase();
    filterArticles();
});

// Clear filters button
if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', () => {
        currentCategory = 'all';
        currentSearchQuery = '';
        searchInput.value = '';
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector('.category-btn-new[data-category="all"]').classList.add('active');
        filterArticles();
    });
}

// Filter articles function
function filterArticles() {
    if (currentCategory === 'all' && currentSearchQuery === '') {
        allCategoriesView.classList.remove('hidden');
        filteredView.classList.add('hidden');
        return;
    }

    allCategoriesView.classList.add('hidden');
    filteredView.classList.remove('hidden');

    const filtered = allArticles.filter(article => {
        const matchesCategory = currentCategory === 'all' || article.category === currentCategory;
        const matchesSearch = currentSearchQuery === '' || 
                            article.title.toLowerCase().includes(currentSearchQuery) || 
                            article.excerpt.toLowerCase().includes(currentSearchQuery);
        return matchesCategory && matchesSearch;
    });

    // Update title and count
    filteredTitle.textContent = currentSearchQuery ? `Search Results for "${currentSearchQuery}"` : categoryNames[currentCategory];
    articlesCount.textContent = `${filtered.length} Articles`;

    // Render articles
    if (filtered.length > 0) {
        noResults.classList.add('hidden');
        filteredArticlesGrid.innerHTML = filtered.map(article => createArticleCard(article)).join('');
        
        // Add hover effects
        addCardHoverEffects();
    } else {
        noResults.classList.remove('hidden');
        filteredArticlesGrid.innerHTML = '';
    }
}

// Create article card HTML
function createArticleCard(article) {
    return `
        <article class="article-card">
            <div class="article-card-image">
                <img src="${article.image}" alt="${article.title}">
                ${article.isNew ? '<span class="new-badge">New</span>' : ''}
            </div>
            <div class="article-card-content">
                <span class="article-category">${categoryNames[article.category]}</span>
                <h3>${article.title}</h3>
                <p>${article.excerpt}</p>
                <div class="article-meta">
                    <span><i class="far fa-calendar"></i> ${article.date}</span>
                    <span><i class="far fa-clock"></i> ${article.readTime}</span>
                </div>
            </div>
        </article>
    `;
}

// Add hover effects to cards
function addCardHoverEffects() {
    const cards = document.querySelectorAll('.article-card, .article-card-compact, .seasonal-card, .news-card');
    cards.forEach(card => {
        const img = card.querySelector('img');
        if (img) {
            card.addEventListener('mouseenter', () => {
                img.style.transform = 'scale(1.1)';
            });
            card.addEventListener('mouseleave', () => {
                img.style.transform = 'scale(1)';
            });
        }
    });
}

// Newsletter form submissions
const newsletterForms = document.querySelectorAll('#sidebarNewsletterForm, #ctaNewsletterForm');
newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = form.querySelector('input[type="email"]');
        if (emailInput.value) {
            alert('Thank you for subscribing to our newsletter! 🎉');
            emailInput.value = '';
        }
    });
});

// Initialize hover effects on page load
document.addEventListener('DOMContentLoaded', () => {
    addCardHoverEffects();
});

// Card click handlers
document.addEventListener('click', (e) => {
    const card = e.target.closest('.article-card, .article-card-compact, .seasonal-card, .news-card, .featured-article, .popular-post-item');
    if (card && !e.target.closest('button') && !e.target.closest('a')) {
        alert('Full article coming soon!');
    }
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});