// About page functionality

const subsections = {
    mission: {
        icon: `<circle cx="12" cy="12" r="10"></circle>
               <circle cx="12" cy="12" r="6"></circle>
               <circle cx="12" cy="12" r="2"></circle>`,
        title: 'Our Mission',
        content: 'At TravelWorld, our mission is to create unforgettable travel experiences that go beyond ordinary tourism. We are committed to providing exceptional service, personalized itineraries, and seamless travel arrangements that cater to every traveler\'s unique needs. We believe in responsible tourism that respects local cultures, supports local communities, and preserves the natural beauty of destinations for future generations. Our dedicated team works tirelessly to ensure that every journey with us is not just a trip, but a collection of cherished memories that last a lifetime.'
    },
    vision: {
        icon: `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
               <circle cx="12" cy="12" r="3"></circle>`,
        title: 'Our Vision',
        content: 'Our vision is to become India\'s most trusted and innovative travel company, recognized for excellence in customer service and sustainable tourism practices. We aspire to connect millions of travelers with the world\'s most incredible destinations while promoting cultural understanding and environmental conservation. We envision a future where travel transforms lives, bridges cultures, and creates a more connected and compassionate world. Through cutting-edge technology, expert guidance, and unwavering commitment to quality, we aim to redefine the travel industry and set new standards for customer satisfaction.'
    },
    goals: {
        icon: `<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
               <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
               <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
               <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>`,
        title: 'Our Future Goals',
        content: 'Looking ahead, we are focused on expanding our global network of destinations while maintaining our commitment to sustainable and responsible tourism. We plan to introduce innovative travel packages that combine adventure with cultural immersion, implement advanced booking technologies for enhanced customer experience, and strengthen our partnerships with local communities to create more authentic travel experiences. We aim to achieve carbon neutrality in our operations by 2030, expand our team of expert travel consultants, and launch educational programs that promote environmental awareness among travelers. Our goal is to serve over 100,000 happy travelers annually while maintaining the personalized touch that makes TravelWorld special.'
    }
};

// Initialize active section
let activeSection = 'mission';

// Get DOM elements
const subsectionButtons = document.querySelectorAll('.subsection-btn');
const sectionTitle = document.getElementById('sectionTitle');
const sectionContent = document.getElementById('sectionContent');
const sectionIcon = document.getElementById('sectionIcon');

// Function to update active section
function updateActiveSection(section) {
    activeSection = section;
    
    // Update button states
    subsectionButtons.forEach(btn => {
        if (btn.dataset.section === section) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Update content
    const data = subsections[section];
    sectionTitle.textContent = data.title;
    sectionContent.textContent = data.content;
    sectionIcon.innerHTML = data.icon;
}

// Add click event listeners to subsection buttons
subsectionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        updateActiveSection(btn.dataset.section);
    });
});

// Add smooth scroll animation on load
window.addEventListener('load', () => {
    document.querySelector('.about-hero').style.opacity = '1';
});
