// Blog Detail 3 - Improved UI JavaScript

const allArticles = [
  {
    id: 1,
    title: "10 Essential Packing Tips for Indian Travel",
    excerpt: "Master the art of packing light while staying prepared for India's diverse climates and cultural expectations.",
    image: "/images/hero-manali.jpg",
    date: "2024-12-05",
    readTime: "6 min read",
    category: "Travel Tips",
    author: "Priya Sharma",
    authorImage: "/images/hero-kerala.jpg",
    views: "12.5K",
    content: `
      <p class="bd3-lead">Traveling to India is an incredible adventure, but packing for such a diverse country can be challenging. From the snowy peaks of the Himalayas to the tropical beaches of Goa, India's climate varies dramatically. Here's your comprehensive guide to packing smart.</p>
      
      <h2 id="layer-clothing">1. Layer Your Clothing</h2>
      <p>India's temperatures can swing dramatically between day and night, especially in northern regions. Pack lightweight layers that you can add or remove as needed. A light jacket or cardigan is essential even during summer for air-conditioned spaces and cool evenings.</p>
      
      <h2 id="breathable-fabrics">2. Choose Breathable Fabrics</h2>
      <p>Cotton and linen are your best friends in India's humid climate. These natural fabrics allow your skin to breathe and dry quickly after washing. Avoid synthetic materials that trap heat and moisture.</p>
      
      <h2 id="modest-clothing">3. Modest Clothing is Key</h2>
      <p>When visiting temples, religious sites, or rural areas, modest clothing is respectful and often required. Pack loose-fitting pants, long skirts, and tops that cover your shoulders. A lightweight scarf is versatile – use it as a cover-up, sun protection, or to filter dust.</p>
      
      <h2 id="walking-shoes">4. Comfortable Walking Shoes</h2>
      <p>You'll be doing a lot of walking on various terrains. Pack comfortable, broken-in walking shoes that you can slip on and off easily for temple visits. Sandals with good arch support are great for casual days.</p>
      
      <h2 id="day-bag">5. Pack a Day Bag</h2>
      <p>A small backpack or crossbody bag is essential for daily excursions. Choose one with secure closures and keep it in front of you in crowded areas.</p>
      
      <h2 id="toiletries">6. Essential Toiletries</h2>
      <p>While most toiletries are available in Indian cities, pack your preferred brands of sunscreen (SPF 50+), insect repellent with DEET, hand sanitizer, and any prescription medications with copies of prescriptions.</p>
      
      <h2 id="electronics">7. Electronics and Adapters</h2>
      <p>India uses Type C and Type D plugs (230V). Bring a universal adapter and a portable charger for your devices. Consider a waterproof phone case for monsoon season or water activities.</p>
      
      <h2 id="pro-tips">Pro Tips</h2>
      <ul>
        <li>Roll clothes instead of folding to save space and reduce wrinkles</li>
        <li>Use packing cubes to organize different categories</li>
        <li>Pack a reusable water bottle – India has many water refill stations</li>
        <li>Bring a small flashlight for power outages</li>
        <li>Pack a travel pillow and eye mask for long train journeys</li>
      </ul>
    `,
    tags: ["packing", "travel tips", "india travel", "backpacking"],
    toc: [
      { id: "layer-clothing", title: "1. Layer Your Clothing" },
      { id: "breathable-fabrics", title: "2. Choose Breathable Fabrics" },
      { id: "modest-clothing", title: "3. Modest Clothing is Key" },
      { id: "walking-shoes", title: "4. Comfortable Walking Shoes" },
      { id: "day-bag", title: "5. Pack a Day Bag" },
      { id: "toiletries", title: "6. Essential Toiletries" },
      { id: "electronics", title: "7. Electronics and Adapters" },
      { id: "pro-tips", title: "Pro Tips" }
    ]
  },
  {
    id: 2,
    title: "Budget Travel Secrets: Explore India Under ₹1000/Day",
    excerpt: "Discover insider tips to experience incredible India without breaking the bank.",
    image: "/images/hero-rajasthan.jpg",
    date: "2024-12-03",
    readTime: "8 min read",
    category: "Travel Tips",
    author: "Rahul Mehta",
    authorImage: "/images/hero-goa.jpg",
    views: "10.2K",
    content: `<p class="bd3-lead">India is one of the most budget-friendly destinations in the world. With careful planning, you can experience the country's rich culture, stunning landscapes, and delicious cuisine for under ₹1000 per day.</p><h2 id="accommodation">Accommodation: ₹200-400/night</h2><p>Hostels and guesthouses offer clean, safe accommodation at incredible prices.</p><h2 id="food">Food: ₹200-300/day</h2><p>Eat where the locals eat! Street food and small restaurants serve authentic meals for ₹30-60.</p><h2 id="transport">Transportation: ₹100-200/day</h2><p>India's extensive train network is incredibly affordable.</p>`,
    tags: ["budget travel", "backpacking", "travel tips"],
    toc: [
      { id: "accommodation", title: "Accommodation" },
      { id: "food", title: "Food" },
      { id: "transport", title: "Transportation" }
    ]
  },
  {
    id: 3,
    title: "Solo Travel Safety Guide for Women in India",
    excerpt: "Comprehensive safety tips and must-know advice for women traveling alone in India.",
    image: "/images/hero-kerala.jpg",
    date: "2024-12-01",
    readTime: "10 min read",
    category: "Travel Tips",
    author: "Ananya Desai",
    authorImage: "/images/hero-manali.jpg",
    views: "9.8K",
    content: `<p class="bd3-lead">India welcomes millions of solo female travelers every year. This guide covers everything you need to know to travel safely and confidently.</p><h2 id="planning">Pre-Trip Planning</h2><p>Research your destinations thoroughly. Some regions like Kerala, Rajasthan's tourist areas are particularly welcoming.</p>`,
    tags: ["solo travel", "women travel", "safety tips"],
    toc: [{ id: "planning", title: "Pre-Trip Planning" }]
  },
  {
    id: 4,
    title: "Complete Kashmir Travel Guide 2024",
    excerpt: "Everything you need to know about visiting paradise on Earth - from Srinagar to Gulmarg.",
    image: "/images/hero-kashmir.jpg",
    date: "2024-11-28",
    readTime: "15 min read",
    category: "Destination Guides",
    author: "Ahmed Khan",
    authorImage: "/images/hero-kashmir.jpg",
    views: "15.3K",
    content: `<p class="bd3-lead">Kashmir, often called "Paradise on Earth," is India's crown jewel. This comprehensive guide covers everything you need for an unforgettable Kashmir experience.</p><h2 id="getting-there">Getting There</h2><p>Srinagar's Sheikh ul-Alam International Airport connects to major Indian cities.</p>`,
    tags: ["kashmir", "srinagar", "destination guide"],
    toc: [{ id: "getting-there", title: "Getting There" }]
  },
  {
    id: 5,
    title: "Kerala Backwaters: A Complete Guide",
    excerpt: "Navigate the serene backwaters with our comprehensive guide to houseboats and hidden gems.",
    image: "/images/hero-kerala.jpg",
    date: "2024-11-25",
    readTime: "12 min read",
    category: "Destination Guides",
    author: "Maya Nair",
    authorImage: "/images/hero-kerala.jpg",
    views: "8.5K",
    content: `<p class="bd3-lead">Kerala's backwaters are a network of interconnected canals, rivers, lakes stretching over 900 kilometers.</p><h2 id="understanding">Understanding the Backwaters</h2><p>The backwaters form a complex network along Kerala's coast.</p>`,
    tags: ["kerala", "backwaters", "houseboat"],
    toc: [{ id: "understanding", title: "Understanding the Backwaters" }]
  }
];

// Get article ID from URL
function getArticleId() {
  const urlParams = new URLSearchParams(window.location.search);
  return parseInt(urlParams.get('id')) || 1;
}

// Format date
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

// Initialize page
function initBlogDetail() {
  const articleId = getArticleId();
  const article = allArticles.find(a => a.id === articleId) || allArticles[0];
  const currentIndex = allArticles.findIndex(a => a.id === articleId);

  // Update page title
  document.title = `${article.title} | TravelWorld Blog`;

  // Hero section
  document.getElementById('bd3-hero-image').src = article.image;
  document.getElementById('bd3-hero-image').alt = article.title;
  document.getElementById('bd3-category').textContent = article.category;
  document.getElementById('bd3-title').textContent = article.title;
  document.getElementById('bd3-excerpt').textContent = article.excerpt;
  document.getElementById('bd3-author-avatar').src = article.authorImage;
  document.getElementById('bd3-author-name').textContent = article.author;
  document.getElementById('bd3-date').querySelector('span').textContent = formatDate(article.date);
  document.getElementById('bd3-readtime').querySelector('span').textContent = article.readTime;
  document.getElementById('bd3-views').querySelector('span').textContent = article.views + ' views';

  // Article content
  document.getElementById('bd3-content').innerHTML = article.content;

  // Tags
  const tagsContainer = document.getElementById('bd3-tags');
  article.tags.forEach(tag => {
    const tagEl = document.createElement('span');
    tagEl.className = 'bd3-tag';
    tagEl.textContent = tag;
    tagsContainer.appendChild(tagEl);
  });

  // Author card
  document.getElementById('bd3-author-card-avatar').src = article.authorImage;
  document.getElementById('bd3-author-card-name').textContent = article.author;

  // Table of contents
  const tocContainer = document.getElementById('bd3-toc');
  if (article.toc) {
    article.toc.forEach(item => {
      const link = document.createElement('a');
      link.href = `#${item.id}`;
      link.className = 'bd3-toc-link';
      link.textContent = item.title;
      tocContainer.appendChild(link);
    });
  }

  // Related articles
  const relatedArticles = allArticles
    .filter(a => a.id !== articleId && a.category === article.category)
    .slice(0, 3);
  
  const relatedContainer = document.getElementById('bd3-related');
  relatedArticles.forEach(related => {
    const item = document.createElement('a');
    item.href = `blog-detail-3.html?id=${related.id}`;
    item.className = 'bd3-related-item';
    item.innerHTML = `
      <img src="${related.image}" alt="${related.title}" class="bd3-related-image">
      <div class="bd3-related-content">
        <p class="bd3-related-title">${related.title}</p>
        <p class="bd3-related-meta">${related.readTime}</p>
      </div>
    `;
    relatedContainer.appendChild(item);
  });

  // Navigation
  const navContainer = document.getElementById('bd3-navigation');
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;

  if (prevArticle) {
    navContainer.innerHTML += `
      <a href="blog-detail-3.html?id=${prevArticle.id}" class="bd3-nav-card prev">
        <div class="bd3-nav-card-inner">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          <div>
            <p class="bd3-nav-label">Previous Article</p>
            <p class="bd3-nav-title">${prevArticle.title}</p>
          </div>
        </div>
      </a>
    `;
  }

  if (nextArticle) {
    navContainer.innerHTML += `
      <a href="blog-detail-3.html?id=${nextArticle.id}" class="bd3-nav-card next">
        <div class="bd3-nav-card-inner">
          <div>
            <p class="bd3-nav-label">Next Article</p>
            <p class="bd3-nav-title">${nextArticle.title}</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>
      </a>
    `;
  }
}

// Progress bar
function updateProgressBar() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  document.getElementById('progress-fill').style.width = progress + '%';
}

// Copy link functionality
function initCopyLink() {
  const copyBtn = document.getElementById('bd3-copy-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', function() {
      navigator.clipboard.writeText(window.location.href).then(() => {
        copyBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
        copyBtn.style.color = '#22c55e';
        setTimeout(() => {
          copyBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
          copyBtn.style.color = '';
        }, 2000);
      });
    });
  }
}

// Newsletter form
function initNewsletterForm() {
  const form = document.getElementById('bd3-newsletter-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const btn = form.querySelector('.bd3-newsletter-btn');
      btn.textContent = 'Subscribed!';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Subscribe';
        btn.disabled = false;
        form.reset();
      }, 3000);
    });
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  initBlogDetail();
  initCopyLink();
  initNewsletterForm();
  window.addEventListener('scroll', updateProgressBar);
});
