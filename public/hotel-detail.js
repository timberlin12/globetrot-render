// Hotel data
const hotelImages = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
    "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800",
    "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800",
    "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
];

const hotelData = {
    name: "The Grand Palace Hotel",
    location: "Mumbai, Maharashtra",
    pricePerNight: 8500,
    rating: 4.8,
    reviews: 245,
    description: "Experience luxury and comfort at The Grand Palace Hotel. Located in the heart of Mumbai, our hotel offers world-class amenities and impeccable service. Whether you're here for business or leisure, enjoy our spacious rooms, fine dining restaurants, and state-of-the-art facilities.",
    amenities: [
        "Free High-Speed Wifi",
        "24/7 Room Service",
        "Swimming Pool",
        "Spa & Wellness Center",
        "Fitness Center",
        "Restaurant & Bar",
        "Business Center",
        "Valet Parking",
        "Airport Shuttle",
        "Concierge Service",
        "Conference Rooms",
        "Laundry Service",
    ],
    roomFeatures: [
        "Air Conditioning",
        "Flat Screen TV",
        "Mini Bar",
        "Coffee/Tea Maker",
        "Safe Deposit Box",
        "Premium Bedding",
        "Work Desk",
        "Complimentary Toiletries",
    ],
    inclusions: [
        "Daily breakfast buffet",
        "Free WiFi throughout property",
        "Welcome drink on arrival",
        "Daily housekeeping",
        "Complimentary newspaper",
        "Access to fitness center",
    ],
    exclusions: [
        "Airport transfers (available on request)",
        "Room service charges",
        "Spa treatments",
        "Minibar consumption",
        "Laundry services",
        "Additional meal charges",
    ],
    policies: [
        "Check-in: 2:00 PM | Check-out: 12:00 PM",
        "Cancellation: Free cancellation up to 48 hours before check-in",
        "Children under 12 stay free with existing bedding",
        "Pets are not allowed",
        "Smoking is prohibited in all rooms",
        "Valid ID proof required at check-in",
    ],
    nearbyAttractions: [
        { name: "Gateway of India", distance: "2.5 km" },
        { name: "Marine Drive", distance: "1.8 km" },
        { name: "Colaba Causeway", distance: "3 km" },
        { name: "Chhatrapati Shivaji Terminus", distance: "4 km" },
    ],
};

let selectedImageIndex = 0;
let checkInDate = null;
let checkOutDate = null;
let numRooms = 1;

// Get amenity icon
function getAmenityIcon(amenity) {
    const lowerAmenity = amenity.toLowerCase();
    
    if (lowerAmenity.includes('wifi')) {
        return `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
            <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
            <line x1="12" y1="20" x2="12.01" y2="20"/>
        </svg>`;
    }
    if (lowerAmenity.includes('restaurant') || lowerAmenity.includes('service')) {
        return `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
            <line x1="6" y1="1" x2="6" y2="4"/>
            <line x1="10" y1="1" x2="10" y2="4"/>
            <line x1="14" y1="1" x2="14" y2="4"/>
        </svg>`;
    }
    if (lowerAmenity.includes('pool') || lowerAmenity.includes('spa')) {
        return `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M2 6s1.5-2 5-2 5 2 5 2 1.5-2 5-2 5 2 5 2v12s-1.5 2-5 2-5-2-5-2-1.5 2-5 2-5-2-5-2V6z"/>
        </svg>`;
    }
    return `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
        <line x1="9" y1="9" x2="9.01" y2="9"/>
        <line x1="15" y1="9" x2="15.01" y2="9"/>
    </svg>`;
}

// Initialize page
function initializePage() {
    // Set hotel info
    document.getElementById('hotelName').textContent = hotelData.name;
    document.getElementById('hotelLocation').textContent = hotelData.location;
    document.getElementById('hotelRating').textContent = hotelData.rating;
    document.getElementById('hotelReviews').textContent = `(${hotelData.reviews} reviews)`;
    document.getElementById('hotelDescription').textContent = hotelData.description;
    
    // Populate amenities
    const amenitiesList = document.getElementById('amenitiesList');
    amenitiesList.innerHTML = hotelData.amenities.map(amenity => `
        <div class="amenity-item">
            <div class="amenity-icon">
                ${getAmenityIcon(amenity)}
            </div>
            <span>${amenity}</span>
        </div>
    `).join('');
    
    // Populate room features
    const featuresList = document.getElementById('roomFeaturesList');
    featuresList.innerHTML = hotelData.roomFeatures.map(feature => `
        <div class="feature-item">
            <svg class="feature-check" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
            </svg>
            <span>${feature}</span>
        </div>
    `).join('');
    
    // Populate inclusions
    const inclusionsList = document.getElementById('inclusionsList');
    inclusionsList.innerHTML = hotelData.inclusions.map(item => `
        <li class="inclusion-item">
            <svg class="inclusion-check" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
            </svg>
            <span>${item}</span>
        </li>
    `).join('');
    
    // Populate exclusions
    const exclusionsList = document.getElementById('exclusionsList');
    exclusionsList.innerHTML = hotelData.exclusions.map(item => `
        <li class="exclusion-item">
            <svg class="exclusion-x" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
            <span>${item}</span>
        </li>
    `).join('');
    
    // Populate policies
    const policiesList = document.getElementById('policiesList');
    policiesList.innerHTML = hotelData.policies.map(policy => `
        <li class="policy-item">
            <svg class="policy-check" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
            </svg>
            <span>${policy}</span>
        </li>
    `).join('');
    
    // Populate nearby attractions
    const attractionsList = document.getElementById('attractionsList');
    attractionsList.innerHTML = hotelData.nearbyAttractions.map(attraction => `
        <div class="attraction-item">
            <span class="attraction-name">${attraction.name}</span>
            <span class="attraction-distance">${attraction.distance}</span>
        </div>
    `).join('');
    
    // Set minimum date for check-in to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('checkIn').setAttribute('min', today);
    
    // Set initial price display
    document.getElementById('pricePerNight').textContent = `₹${hotelData.pricePerNight.toLocaleString()}`;
    updateTotalPrice();
}

// Change main image
function changeMainImage(index) {
    if (index !== undefined) {
        selectedImageIndex = index;
    } else {
        selectedImageIndex = (selectedImageIndex + 1) % hotelImages.length;
    }
    document.getElementById('mainImage').src = hotelImages[selectedImageIndex];
}

// Calculate nights
function calculateNights() {
    if (!checkInDate || !checkOutDate) return 1;
    const diff = new Date(checkOutDate) - new Date(checkInDate);
    return Math.max(1, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

// Update total price
function updateTotalPrice() {
    const nights = calculateNights();
    const total = hotelData.pricePerNight * numRooms * nights;
    
    document.getElementById('numNights').textContent = nights;
    document.getElementById('displayRooms').textContent = numRooms;
    document.getElementById('totalAmount').textContent = `₹${total.toLocaleString()}`;
}

// Show toast notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast toast-${type} toast-show`;
    
    setTimeout(() => {
        toast.className = 'toast';
    }, 4000);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    initializePage();
    
    // Check-in date change
    document.getElementById('checkIn').addEventListener('change', (e) => {
        checkInDate = e.target.value;
        const checkOutInput = document.getElementById('checkOut');
        
        // Set minimum check-out date to one day after check-in
        if (checkInDate) {
            const minCheckOut = new Date(checkInDate);
            minCheckOut.setDate(minCheckOut.getDate() + 1);
            checkOutInput.setAttribute('min', minCheckOut.toISOString().split('T')[0]);
            
            // Reset check-out if it's before the new minimum
            if (checkOutDate && new Date(checkOutDate) <= new Date(checkInDate)) {
                checkOutInput.value = '';
                checkOutDate = null;
            }
        }
        
        updateTotalPrice();
    });
    
    // Check-out date change
    document.getElementById('checkOut').addEventListener('change', (e) => {
        checkOutDate = e.target.value;
        updateTotalPrice();
    });
    
    // Number of rooms change
    document.getElementById('numRooms').addEventListener('input', (e) => {
        numRooms = Math.max(1, parseInt(e.target.value) || 1);
        e.target.value = numRooms;
        updateTotalPrice();
    });
    
    // Book now button
    document.getElementById('bookNowBtn').addEventListener('click', () => {
        if (!checkInDate || !checkOutDate) {
            showToast('Please select check-in and check-out dates', 'error');
            return;
        }
        
        const nights = calculateNights();
        const total = hotelData.pricePerNight * numRooms * nights;
        
        // Format dates for display
        const checkInFormatted = new Date(checkInDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        const checkOutFormatted = new Date(checkOutDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        // Store booking data for checkout page
        const bookingData = {
            type: 'hotel',
            name: hotelData.name,
            price: total,
            quantity: numRooms,
            checkIn: checkInFormatted,
            checkOut: checkOutFormatted,
            location: hotelData.location,
        };
        
        localStorage.setItem('bookingData', JSON.stringify(bookingData));
        window.location.href = 'checkout.html';
    });
    
    // Send enquiry button
    document.querySelector('.btn-enquiry').addEventListener('click', () => {
        const name = document.getElementById('enquiryName').value;
        const email = document.getElementById('enquiryEmail').value;
        const phone = document.getElementById('enquiryPhone').value;
        const message = document.getElementById('enquiryMessage').value;
        
        if (!name || !email || !phone) {
            showToast('Please fill in all required fields', 'error');
            return;
        }
        
        // Here you would typically send the enquiry to a server
        showToast('Enquiry sent successfully! We will contact you soon.', 'success');
        
        // Clear form
        document.getElementById('enquiryName').value = '';
        document.getElementById('enquiryEmail').value = '';
        document.getElementById('enquiryPhone').value = '';
        document.getElementById('enquiryMessage').value = '';
    });
});

// Export for use in HTML onclick
window.changeMainImage = changeMainImage;