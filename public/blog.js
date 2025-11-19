// Blog Page Functionality

let currentCategory = 'all';
let currentSearchQuery = '';

// Category Filter Buttons
const categoryButtons = document.querySelectorAll('.category-btn');
const blogPosts = document.querySelectorAll('.blog-post-card');
const featuredPost = document.getElementById('featuredPost');
const noResults = document.getElementById('noResults');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active state
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Get selected category
        currentCategory = button.dataset.category;
        
        // Filter posts
        filterPosts();
    });
});

// Sidebar Category Buttons
const sidebarCategoryButtons = document.querySelectorAll('.sidebar-category-btn');
sidebarCategoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        
        // Find and click the corresponding main category button
        const mainCategoryButton = document.querySelector(`.category-btn[data-category="${category}"]`);
        if (mainCategoryButton) {
            mainCategoryButton.click();
            
            // Scroll to top of blog posts
            document.querySelector('.blog-main').scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Search Functionality
const searchInput = document.getElementById('blogSearch');
searchInput.addEventListener('input', (e) => {
    currentSearchQuery = e.target.value.toLowerCase();
    filterPosts();
});

// Filter Posts Function
function filterPosts() {
    let visibleCount = 0;
    
    // Handle featured post visibility
    if (currentCategory === 'all' && currentSearchQuery === '') {
        featuredPost.style.display = 'block';
    } else {
        featuredPost.style.display = 'none';
    }
    
    // Filter blog posts
    blogPosts.forEach(post => {
        const postCategory = post.dataset.category;
        const postTitle = post.querySelector('h3').textContent.toLowerCase();
        const postExcerpt = post.querySelector('p').textContent.toLowerCase();
        
        const matchesCategory = currentCategory === 'all' || postCategory === currentCategory;
        const matchesSearch = currentSearchQuery === '' || 
                            postTitle.includes(currentSearchQuery) || 
                            postExcerpt.includes(currentSearchQuery);
        
        if (matchesCategory && matchesSearch) {
            post.style.display = 'block';
            visibleCount++;
        } else {
            post.style.display = 'none';
        }
    });
    
    // Show/hide no results message
    if (visibleCount === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
    }
}

// Newsletter Form Submission
const newsletterForm = document.getElementById('newsletterForm');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    
    if (emailInput.value) {
        alert('Thank you for subscribing to our newsletter! 🎉');
        emailInput.value = '';
    }
});

// Smooth scroll for read more links
const readMoreLinks = document.querySelectorAll('.read-more-link');
readMoreLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // In a real application, this would navigate to the full article
        alert('Full article coming soon!');
    });
});

// Featured post read article button
const featuredReadBtn = document.querySelector('.featured-post .btn');
if (featuredReadBtn) {
    featuredReadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Full article coming soon!');
    });
}

// Popular posts click handlers
const popularPostItems = document.querySelectorAll('.popular-post-item');
popularPostItems.forEach(item => {
    item.addEventListener('click', () => {
        alert('Article coming soon!');
    });
    item.style.cursor = 'pointer';
});

// Add hover effects to blog post cards
blogPosts.forEach(post => {
    const postImage = post.querySelector('.blog-post-image img');
    
    post.addEventListener('mouseenter', () => {
        postImage.style.transform = 'scale(1.1)';
    });
    
    post.addEventListener('mouseleave', () => {
        postImage.style.transform = 'scale(1)';
    });
});
