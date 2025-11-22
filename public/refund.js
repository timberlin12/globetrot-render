// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

if (mobileMenuToggle && navMenu) {
  mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (navMenu && mobileMenuToggle && 
      !navMenu.contains(e.target) && 
      !mobileMenuToggle.contains(e.target) && 
      navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
