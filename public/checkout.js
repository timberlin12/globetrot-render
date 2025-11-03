// Get booking data from localStorage
let bookingData = null;

// Check if booking data exists
function loadBookingData() {
    const storedData = localStorage.getItem('bookingData');
    if (!storedData) {
        // Redirect to home if no booking data
        window.location.href = 'index.html';
        return;
    }
    
    bookingData = JSON.parse(storedData);
    displayBookingData();
    calculatePrices();
}

// Get booking icon based on type
function getBookingIcon(type) {
    const icons = {
        tour: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
        </svg>`,
        hotel: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>`,
        transport: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/>
            <polygon points="12 17 19 17 17 22 7 22 5 17 12 17"/>
        </svg>`
    };
    return icons[type] || icons.tour;
}

// Get booking details based on type
function getBookingDetails(data) {
    switch (data.type) {
        case 'tour':
            return {
                label: 'Tour Package',
                details: [
                    { label: 'Tour Date', value: data.date || 'Not specified' },
                    { label: 'Number of Persons', value: data.quantity || 1 },
                    { label: 'Duration', value: data.duration || 'Not specified' }
                ]
            };
        case 'hotel':
            return {
                label: 'Hotel Booking',
                details: [
                    { label: 'Check-in', value: data.checkIn || 'Not specified' },
                    { label: 'Check-out', value: data.checkOut || 'Not specified' },
                    { label: 'Number of Rooms', value: data.quantity || 1 }
                ]
            };
        case 'transport':
            return {
                label: 'Transport Booking',
                details: [
                    { label: 'Pickup Date', value: data.pickupDate || 'Not specified' },
                    { label: 'Return Date', value: data.returnDate || 'Not specified' },
                    { label: 'Duration', value: `${data.quantity || 1} days` }
                ]
            };
        default:
            return {
                label: 'Booking',
                details: []
            };
    }
}

// Display booking data in the summary
function displayBookingData() {
    if (!bookingData) return;

    const details = getBookingDetails(bookingData);
    
    // Update icon
    document.getElementById('bookingIcon').innerHTML = getBookingIcon(bookingData.type);
    
    // Update booking info
    document.getElementById('bookingLabel').textContent = details.label;
    document.getElementById('bookingName').textContent = bookingData.name;
    
    const locationEl = document.getElementById('bookingLocation');
    if (bookingData.location) {
        locationEl.textContent = bookingData.location;
        locationEl.style.display = 'block';
    } else {
        locationEl.style.display = 'none';
    }
    
    // Update booking details
    const detailsContainer = document.getElementById('bookingDetails');
    detailsContainer.innerHTML = details.details.map(detail => `
        <div class="booking-detail-row">
            <span class="detail-label">${detail.label}</span>
            <span class="detail-value">${detail.value}</span>
        </div>
    `).join('');
}

// Calculate and display prices
function calculatePrices() {
    if (!bookingData) return;

    const subtotal = bookingData.price;
    const serviceFee = subtotal * 0.05;
    const taxes = subtotal * 0.12;
    const total = subtotal + serviceFee + taxes;

    document.getElementById('subtotal').textContent = `₹${subtotal.toLocaleString()}`;
    document.getElementById('serviceFee').textContent = `₹${serviceFee.toLocaleString()}`;
    document.getElementById('taxes').textContent = `₹${taxes.toLocaleString()}`;
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

// Format card number with spaces
function formatCardNumber(value) {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
        return parts.join(' ');
    } else {
        return value;
    }
}

// Format expiry date
function formatExpiryDate(value) {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    
    if (v.length >= 2) {
        return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    
    return v;
}

// Add input formatting
document.addEventListener('DOMContentLoaded', () => {
    loadBookingData();

    const cardNumberInput = document.getElementById('cardNumber');
    const expiryDateInput = document.getElementById('expiryDate');

    cardNumberInput.addEventListener('input', (e) => {
        e.target.value = formatCardNumber(e.target.value);
    });

    expiryDateInput.addEventListener('input', (e) => {
        e.target.value = formatExpiryDate(e.target.value);
    });
});

// Handle form submission
document.getElementById('checkoutForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const termsCheckbox = document.getElementById('terms');
    if (!termsCheckbox.checked) {
        showToast('Please accept the terms and conditions to proceed.', 'error');
        return;
    }

    const confirmBtn = document.getElementById('confirmBtn');
    confirmBtn.disabled = true;
    confirmBtn.textContent = 'Processing...';

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    showToast('Booking Confirmed! Your booking has been successfully confirmed. Confirmation email sent.', 'success');

    // Clear booking data
    localStorage.removeItem('bookingData');

    // Redirect to home page after 1.5 seconds
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
});

// Example function to set booking data (call this from tour/hotel/transport detail pages)
function setBookingData(data) {
    localStorage.setItem('bookingData', JSON.stringify(data));
}

// Export for use in other pages
window.setBookingData = setBookingData;