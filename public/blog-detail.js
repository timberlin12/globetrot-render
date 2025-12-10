// Blog Detail Page JavaScript

// All Articles Data
const allArticles = [
    {
        id: 1,
        title: "10 Essential Packing Tips for Indian Travel",
        excerpt: "Master the art of packing light while staying prepared for India's diverse climates and cultural expectations.",
        image: "images/hero-manali.jpg",
        date: "2024-12-05",
        readTime: "6 min read",
        category: "Travel Tips",
        author: "Priya Sharma",
        authorImage: "images/hero-kerala.jpg",
        content: `
            <p>Traveling to India is an incredible adventure, but packing for such a diverse country can be challenging. From the snowy peaks of the Himalayas to the tropical beaches of Goa, India's climate varies dramatically. Here's your comprehensive guide to packing smart.</p>
            
            <h2>1. Layer Your Clothing</h2>
            <p>India's temperatures can swing dramatically between day and night, especially in northern regions. Pack lightweight layers that you can add or remove as needed. A light jacket or cardigan is essential even during summer for air-conditioned spaces and cool evenings.</p>
            
            <h2>2. Choose Breathable Fabrics</h2>
            <p>Cotton and linen are your best friends in India's humid climate. These natural fabrics allow your skin to breathe and dry quickly after washing. Avoid synthetic materials that trap heat and moisture.</p>
            
            <h2>3. Modest Clothing is Key</h2>
            <p>When visiting temples, religious sites, or rural areas, modest clothing is respectful and often required. Pack loose-fitting pants, long skirts, and tops that cover your shoulders. A lightweight scarf is versatile – use it as a cover-up, sun protection, or to filter dust.</p>
            
            <h2>4. Comfortable Walking Shoes</h2>
            <p>You'll be doing a lot of walking on various terrains. Pack comfortable, broken-in walking shoes that you can slip on and off easily for temple visits. Sandals with good arch support are great for casual days.</p>
            
            <h2>5. Pack a Day Bag</h2>
            <p>A small backpack or crossbody bag is essential for daily excursions. Choose one with secure closures and keep it in front of you in crowded areas.</p>
            
            <h2>6. Essential Toiletries</h2>
            <p>While most toiletries are available in Indian cities, pack your preferred brands of sunscreen (SPF 50+), insect repellent with DEET, hand sanitizer, and any prescription medications with copies of prescriptions.</p>
            
            <h2>7. Electronics and Adapters</h2>
            <p>India uses Type C and Type D plugs (230V). Bring a universal adapter and a portable charger for your devices. Consider a waterproof phone case for monsoon season or water activities.</p>
            
            <h2>8. Health Essentials</h2>
            <p>Pack a small first-aid kit with basics: band-aids, antiseptic cream, pain relievers, anti-diarrhea medication, and electrolyte packets. A water purification system or tablets is wise for remote areas.</p>
            
            <h2>9. Documentation</h2>
            <p>Keep physical and digital copies of your passport, visa, travel insurance, and hotel bookings. Store copies separately from originals and in cloud storage for emergency access.</p>
            
            <h2>10. Leave Room for Souvenirs</h2>
            <p>India is a shopper's paradise! Leave space in your luggage for textiles, spices, handicrafts, and other treasures you'll discover. Consider packing a foldable duffel bag for extra capacity on your return journey.</p>
            
            <h2>Pro Tips</h2>
            <ul>
                <li>Roll clothes instead of folding to save space and reduce wrinkles</li>
                <li>Use packing cubes to organize different categories</li>
                <li>Pack a reusable water bottle – India has many water refill stations</li>
                <li>Bring a small flashlight for power outages</li>
                <li>Pack a travel pillow and eye mask for long train journeys</li>
            </ul>
        `,
        tags: ["packing", "travel tips", "india travel", "backpacking"]
    },
    {
        id: 2,
        title: "Budget Travel Secrets: Explore India Under ₹1000/Day",
        excerpt: "Discover insider tips to experience incredible India without breaking the bank.",
        image: "images/hero-rajasthan.jpg",
        date: "2024-12-03",
        readTime: "8 min read",
        category: "Travel Tips",
        author: "Rahul Mehta",
        authorImage: "images/hero-goa.jpg",
        content: `
            <p>India is one of the most budget-friendly destinations in the world. With careful planning, you can experience the country's rich culture, stunning landscapes, and delicious cuisine for under ₹1000 per day. Here's how.</p>
            
            <h2>Accommodation: ₹200-400/night</h2>
            <p>Hostels and guesthouses offer clean, safe accommodation at incredible prices. Dormitory beds start from ₹200, while private rooms in budget guesthouses range from ₹400-600. Book directly with properties for the best rates.</p>
            
            <h2>Food: ₹200-300/day</h2>
            <p>Eat where the locals eat! Street food and small restaurants (dhabas) serve authentic, delicious meals for ₹30-60. A filling thali (complete meal) costs ₹80-120. Stick to busy stalls with high turnover for freshness and safety.</p>
            
            <h2>Transportation: ₹100-200/day</h2>
            <p>India's extensive train network is incredibly affordable. Sleeper class trains cover long distances for a fraction of bus costs. For local travel, use shared autos, local buses, or rent a bicycle. Walk wherever possible to discover hidden gems.</p>
            
            <h2>Activities: ₹100-200/day</h2>
            <p>Many of India's best experiences are free or very cheap. Temples, parks, and markets cost nothing. Entry fees to most monuments range from ₹10-50 for Indians. Free walking tours operate in major cities – tip what you can.</p>
            
            <h2>Sample Daily Budget</h2>
            <ul>
                <li>Hostel bed: ₹250</li>
                <li>Breakfast (chai + paratha): ₹40</li>
                <li>Lunch (thali): ₹80</li>
                <li>Dinner (street food): ₹60</li>
                <li>Local transport: ₹100</li>
                <li>Snacks/water: ₹50</li>
                <li>Activities: ₹100</li>
                <li><strong>Total: ₹680</strong></li>
            </ul>
            
            <h2>Money-Saving Tips</h2>
            <ul>
                <li>Travel in shoulder season (September-October, February-March)</li>
                <li>Negotiate prices at markets – start at 50% of asking price</li>
                <li>Carry a reusable water bottle with filter</li>
                <li>Use government buses instead of private tourist buses</li>
                <li>Book train tickets in advance via IRCTC for best prices</li>
            </ul>
        `,
        tags: ["budget travel", "backpacking", "travel tips", "india on a budget"]
    },
    {
        id: 3,
        title: "Solo Travel Safety Guide for Women in India",
        excerpt: "Comprehensive safety tips and must-know advice for women traveling alone in India.",
        image: "images/hero-kerala.jpg",
        date: "2024-12-01",
        readTime: "10 min read",
        category: "Travel Tips",
        author: "Ananya Desai",
        authorImage: "images/hero-manali.jpg",
        content: `
            <p>India welcomes millions of solo female travelers every year. While the country does require extra vigilance, it rewards those who visit with incredible experiences. This guide covers everything you need to know to travel safely and confidently.</p>
            
            <h2>Pre-Trip Planning</h2>
            <p>Research your destinations thoroughly. Some regions like Kerala, Rajasthan's tourist areas, Himachal Pradesh, and Goa are particularly welcoming for solo female travelers. Register with your embassy and share your itinerary with family or friends.</p>
            
            <h2>Dress Appropriately</h2>
            <p>Dressing modestly isn't about restrictions – it's about respect and reducing unwanted attention. Cover your shoulders and knees. Loose-fitting clothes are more comfortable in the heat anyway. Many women carry a scarf to cover up when needed.</p>
            
            <h2>Accommodation Safety</h2>
            <p>Book reputable hotels or hostels with good reviews from female travelers. Request rooms on upper floors away from ground level. Check that door locks work properly. Many hostels have female-only dorms – a great option for solo travelers.</p>
            
            <h2>Transportation Tips</h2>
            <p>Use official prepaid taxis or ride-sharing apps like Uber and Ola that track your journey. On trains, book upper berths in AC coaches or the ladies' compartment. Avoid empty carriages on buses and trains. During day travel, sit near other women or families.</p>
            
            <h2>Trust Your Instincts</h2>
            <p>If something feels wrong, remove yourself from the situation. Don't worry about being polite – your safety comes first. Ignore persistent attention and walk confidently toward crowded, well-lit areas.</p>
            
            <h2>Emergency Contacts</h2>
            <p>Save these numbers in your phone:</p>
            <ul>
                <li>Police: 100</li>
                <li>Women Helpline: 1091</li>
                <li>Tourist Police: 1363</li>
                <li>Emergency: 112</li>
            </ul>
        `,
        tags: ["solo travel", "women travel", "safety tips", "female travel"]
    },
    {
        id: 4,
        title: "Complete Kashmir Travel Guide 2024",
        excerpt: "Everything you need to know about visiting paradise on Earth - from Srinagar to Gulmarg.",
        image: "images/hero-kashmir.jpg",
        date: "2024-11-28",
        readTime: "15 min read",
        category: "Destination Guides",
        featured: true,
        author: "Ahmed Khan",
        authorImage: "images/hero-kashmir.jpg",
        content: `
            <p>Kashmir, often called "Paradise on Earth," is India's crown jewel. From the pristine Dal Lake to the snow-capped peaks of Gulmarg, this comprehensive guide covers everything you need for an unforgettable Kashmir experience.</p>
            
            <h2>Getting There</h2>
            <p>Srinagar's Sheikh ul-Alam International Airport connects to major Indian cities. Flights from Delhi take about 1.5 hours. Alternatively, take the spectacular Jammu-Srinagar Highway by road – a 9-hour journey through stunning mountain passes.</p>
            
            <h2>Best Time to Visit</h2>
            <p>Kashmir transforms with each season:</p>
            <ul>
                <li><strong>Spring (March-May):</strong> Tulip gardens bloom, pleasant weather</li>
                <li><strong>Summer (June-August):</strong> Perfect for trekking and houseboat stays</li>
                <li><strong>Autumn (September-November):</strong> Golden chinar leaves, clear skies</li>
                <li><strong>Winter (December-February):</strong> Snow activities, skiing in Gulmarg</li>
            </ul>
            
            <h2>Must-Visit Places</h2>
            <h3>Srinagar</h3>
            <p>The summer capital enchants with its houseboats on Dal Lake, Mughal gardens, and old city charm. Don't miss a shikara ride at sunset and shopping in the local bazaars for Pashmina shawls and carpets.</p>
            
            <h3>Gulmarg</h3>
            <p>Home to the world's highest gondola ride, Gulmarg is a paradise for adventure seekers. Ski in winter, trek through meadows in summer, and enjoy the stunning views year-round.</p>
            
            <h3>Pahalgam</h3>
            <p>This valley of shepherds offers serene landscapes, river rafting on the Lidder, and trekking routes to Kolahoi Glacier and Tarsar Marsar lakes.</p>
            
            <h2>What to Eat</h2>
            <p>Kashmiri cuisine is a feast:</p>
            <ul>
                <li><strong>Wazwan:</strong> Multi-course feast for special occasions</li>
                <li><strong>Rogan Josh:</strong> Aromatic lamb curry</li>
                <li><strong>Yakhni:</strong> Yogurt-based meat curry</li>
                <li><strong>Kahwa:</strong> Saffron tea with almonds</li>
            </ul>
        `,
        tags: ["kashmir", "srinagar", "gulmarg", "destination guide", "himalaya"]
    },
    {
        id: 5,
        title: "Kerala Backwaters: A Complete Guide",
        excerpt: "Navigate the serene backwaters with our comprehensive guide to houseboats, villages, and hidden gems.",
        image: "images/hero-kerala.jpg",
        date: "2024-11-25",
        readTime: "12 min read",
        category: "Destination Guides",
        author: "Maya Nair",
        authorImage: "images/hero-kerala.jpg",
        content: `
            <p>Kerala's backwaters are a network of interconnected canals, rivers, lakes, and inlets stretching over 900 kilometers. This unique ecosystem supports a distinctive way of life and offers one of India's most tranquil travel experiences.</p>
            
            <h2>Houseboat Experience</h2>
            <p>A kettuvallam (traditional houseboat) stay is the quintessential backwater experience. These converted rice barges offer bedrooms, bathrooms, living areas, and a crew including a cook who prepares fresh Kerala cuisine.</p>
            
            <h2>Best Time to Visit</h2>
            <p>October to March offers pleasant weather and clear skies. Avoid monsoon (June-September) when waterways can flood. August's Nehru Trophy Boat Race is spectacular if you time it right.</p>
            
            <h2>Must-Try Experiences</h2>
            <ul>
                <li>Watch the sunset from your houseboat deck</li>
                <li>Try fresh karimeen (pearl spot fish) cooked in banana leaf</li>
                <li>Witness toddy tapping at dawn</li>
                <li>Visit Alleppey Beach at sunrise</li>
            </ul>
        `,
        tags: ["kerala", "backwaters", "houseboat", "alleppey", "destination guide"]
    },
    {
        id: 6,
        title: "Rajasthan Heritage Tour: Palace to Palace",
        excerpt: "Explore the royal heritage of Rajasthan from Jaipur to Udaipur with detailed itineraries.",
        image: "images/hero-rajasthan.jpg",
        date: "2024-11-22",
        readTime: "14 min read",
        category: "Destination Guides",
        author: "Vikram Singh",
        authorImage: "images/hero-rajasthan.jpg",
        content: `
            <p>Rajasthan, the Land of Kings, offers a journey through centuries of royal heritage. From the pink walls of Jaipur to the romantic lakes of Udaipur, this guide takes you through the best palace experiences in the royal state.</p>
            
            <h2>Jaipur - The Pink City</h2>
            <p>Start your heritage journey in Rajasthan's capital. The City Palace, Hawa Mahal, and Amber Fort showcase Rajput architecture at its finest.</p>
            
            <h2>Jodhpur - The Blue City</h2>
            <p>Mehrangarh Fort rises dramatically above the blue-painted houses of the old city. This impregnable fortress houses an impressive museum of royal artifacts.</p>
            
            <h2>Udaipur - The City of Lakes</h2>
            <p>Often called India's most romantic city, Udaipur captivates with its lakeside palaces.</p>
        `,
        tags: ["rajasthan", "jaipur", "udaipur", "heritage", "palace hotels"]
    },
    {
        id: 7,
        title: "Goa Beyond Beaches: Hidden Experiences",
        excerpt: "Discover the Portuguese heritage, spice plantations, and waterfalls that make Goa special.",
        image: "images/hero-goa.jpg",
        date: "2024-11-20",
        readTime: "10 min read",
        category: "Destination Guides",
        author: "Carlos Fernandes",
        authorImage: "images/hero-goa.jpg",
        content: `
            <p>While Goa's beaches are legendary, the state offers so much more. Portuguese churches, spice plantations, wildlife sanctuaries, and waterfalls await those who venture beyond the sand.</p>
            
            <h2>Portuguese Heritage</h2>
            <p>Goa's 450 years of Portuguese rule left an indelible mark. Old Goa's churches are UNESCO World Heritage sites.</p>
            
            <h2>Spice Plantations</h2>
            <p>Visit a working spice plantation to see how cardamom, vanilla, cinnamon, and black pepper grow.</p>
            
            <h2>Dudhsagar Falls</h2>
            <p>One of India's tallest waterfalls, Dudhsagar plunges 310 meters through lush forest.</p>
        `,
        tags: ["goa", "portuguese heritage", "waterfalls", "wildlife", "hidden gems"]
    },
    {
        id: 8,
        title: "Winter Wonderland: Best December Destinations",
        excerpt: "From snow-capped mountains to warm beaches, find your perfect winter escape in India.",
        image: "images/hero-manali.jpg",
        date: "2024-12-01",
        readTime: "8 min read",
        category: "Seasonal Travel",
        author: "Deepak Kumar",
        authorImage: "images/hero-manali.jpg",
        content: `
            <p>December in India offers incredible diversity – from fresh snowfall in the Himalayas to pleasant sunshine along the coasts.</p>
            
            <h2>For Snow Lovers</h2>
            <h3>Manali, Himachal Pradesh</h3>
            <p>December transforms Manali into a winter wonderland. Fresh snow covers the mountains.</p>
            
            <h3>Gulmarg, Kashmir</h3>
            <p>India's premier ski destination comes alive in December.</p>
            
            <h2>For Beach Escapes</h2>
            <h3>Goa</h3>
            <p>Peak season in Goa means perfect weather and vibrant nightlife.</p>
        `,
        tags: ["winter travel", "december", "snow destinations", "seasonal travel"]
    }
];

// Get article ID from URL
function getArticleIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id')) || 1;
}

// Find article by ID
function findArticle(id) {
    return allArticles.find(article => article.id === id) || allArticles[0];
}

// Get related articles
function getRelatedArticles(currentId, category) {
    return allArticles
        .filter(article => article.id !== currentId && article.category === category)
        .slice(0, 3);
}

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Render article content
function renderArticle(article) {
    // Update hero background
    document.getElementById('heroBackground').style.backgroundImage = `url('${article.image}')`;
    
    // Update meta info
    document.getElementById('articleCategory').textContent = article.category;
    document.getElementById('articleTitle').textContent = article.title;
    document.getElementById('articleAuthor').textContent = article.author;
    document.getElementById('articleDate').textContent = formatDate(article.date);
    document.getElementById('articleReadTime').textContent = article.readTime;
    
    // Update page title
    document.title = `${article.title} | TravelWorld Blog`;
    
    // Update article content
    document.getElementById('articleContent').innerHTML = article.content;
    
    // Update tags
    const tagsContainer = document.getElementById('articleTags');
    tagsContainer.innerHTML = '<i class="fas fa-tag"></i>';
    article.tags.forEach(tag => {
        tagsContainer.innerHTML += `<span class="blog-tag">${tag}</span>`;
    });
    
    // Update author info
    document.getElementById('authorImage').src = article.authorImage;
    document.getElementById('authorName').textContent = article.author;
}

// Render related articles
function renderRelatedArticles(currentId, category) {
    const related = getRelatedArticles(currentId, category);
    const container = document.getElementById('relatedArticles');
    
    container.innerHTML = related.map(article => `
        <a href="blog-detail.html?id=${article.id}" class="blog-related-item">
            <img src="${article.image}" alt="${article.title}" class="blog-related-img">
            <div>
                <h4 class="blog-related-title">${article.title}</h4>
                <p class="blog-related-time">${article.readTime}</p>
            </div>
        </a>
    `).join('');
}

// Render article navigation
function renderNavigation(currentId) {
    const currentIndex = allArticles.findIndex(a => a.id === currentId);
    const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
    const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;
    
    const navContainer = document.getElementById('articleNav');
    let navHTML = '';
    
    if (prevArticle) {
        navHTML += `
            <a href="blog-detail.html?id=${prevArticle.id}" class="blog-nav-card">
                <i class="fas fa-arrow-left"></i>
                <div>
                    <p class="blog-nav-label">Previous Article</p>
                    <p class="blog-nav-title">${prevArticle.title}</p>
                </div>
            </a>
        `;
    }
    
    if (nextArticle) {
        navHTML += `
            <a href="blog-detail.html?id=${nextArticle.id}" class="blog-nav-card next">
                <div>
                    <p class="blog-nav-label">Next Article</p>
                    <p class="blog-nav-title">${nextArticle.title}</p>
                </div>
                <i class="fas fa-arrow-right"></i>
            </a>
        `;
    }
    
    navContainer.innerHTML = navHTML;
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    const articleId = getArticleIdFromUrl();
    const article = findArticle(articleId);
    
    renderArticle(article);
    renderRelatedArticles(article.id, article.category);
    renderNavigation(article.id);
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        });
    }
    
    // Social share buttons
    document.querySelectorAll('.blog-social-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.getElementById('articleTitle').textContent);
            
            if (btn.querySelector('.fa-facebook-f')) {
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
            } else if (btn.querySelector('.fa-twitter')) {
                window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
            } else if (btn.querySelector('.fa-linkedin-in')) {
                window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`, '_blank');
            }
        });
    });
});