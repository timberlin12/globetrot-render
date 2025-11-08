// Contact page functionality with input validation

// Form validation functions
function validateName(name) {
    const trimmed = name.trim();
    if (trimmed.length === 0) {
        return { valid: false, message: 'Name cannot be empty' };
    }
    if (trimmed.length > 100) {
        return { valid: false, message: 'Name must be less than 100 characters' };
    }
    return { valid: true, message: '' };
}

function validateEmail(email) {
    const trimmed = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (trimmed.length === 0) {
        return { valid: false, message: 'Email cannot be empty' };
    }
    if (!emailRegex.test(trimmed)) {
        return { valid: false, message: 'Invalid email address' };
    }
    if (trimmed.length > 255) {
        return { valid: false, message: 'Email must be less than 255 characters' };
    }
    return { valid: true, message: '' };
}

function validatePhone(phone) {
    const trimmed = phone.trim();
    const phoneRegex = /^[\d\s\+\-\(\)]+$/;
    
    if (trimmed.length === 0) {
        return { valid: false, message: 'Phone number cannot be empty' };
    }
    if (!phoneRegex.test(trimmed)) {
        return { valid: false, message: 'Invalid phone number format' };
    }
    if (trimmed.length > 20) {
        return { valid: false, message: 'Phone number must be less than 20 characters' };
    }
    return { valid: true, message: '' };
}

function validateSubject(subject) {
    const trimmed = subject.trim();
    if (trimmed.length === 0) {
        return { valid: false, message: 'Subject cannot be empty' };
    }
    if (trimmed.length > 200) {
        return { valid: false, message: 'Subject must be less than 200 characters' };
    }
    return { valid: true, message: '' };
}

function validateMessage(message) {
    const trimmed = message.trim();
    if (trimmed.length === 0) {
        return { valid: false, message: 'Message cannot be empty' };
    }
    if (trimmed.length > 1000) {
        return { valid: false, message: 'Message must be less than 1000 characters' };
    }
    return { valid: true, message: '' };
}

// Display error message
function showError(fieldId, message) {
    const errorElement = document.getElementById(fieldId + 'Error');
    const inputElement = document.getElementById(fieldId);
    
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = message ? 'block' : 'none';
    }
    
    if (inputElement) {
        if (message) {
            inputElement.classList.add('input-error');
        } else {
            inputElement.classList.remove('input-error');
        }
    }
}

// Clear all errors
function clearErrors() {
    ['name', 'email', 'phone', 'subject', 'message'].forEach(field => {
        showError(field, '');
    });
}

// Show toast notification
function showToast(title, description) {
    const toast = document.getElementById('toast');
    const toastTitle = toast.querySelector('.toast-title');
    const toastDescription = toast.querySelector('.toast-description');
    
    if (toastTitle) toastTitle.textContent = title;
    if (toastDescription) toastDescription.textContent = description;
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    clearErrors();
    
    // Get form values
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Validate all fields
    const validations = {
        name: validateName(formData.name),
        email: validateEmail(formData.email),
        phone: validatePhone(formData.phone),
        subject: validateSubject(formData.subject),
        message: validateMessage(formData.message)
    };
    
    // Check if all validations passed
    let isValid = true;
    for (const [field, validation] of Object.entries(validations)) {
        if (!validation.valid) {
            showError(field, validation.message);
            isValid = false;
        }
    }
    
    // If form is valid, process submission
    if (isValid) {
        // Show success toast
        showToast('Message Sent!', "We'll get back to you within 24 hours.");
        
        // Reset form
        document.getElementById('contactForm').reset();
        
        // In a real application, you would send the data to a server here
        // Example: fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
    }
});

// Real-time validation on input
document.getElementById('name').addEventListener('blur', function() {
    const validation = validateName(this.value);
    if (!validation.valid) {
        showError('name', validation.message);
    } else {
        showError('name', '');
    }
});

document.getElementById('email').addEventListener('blur', function() {
    const validation = validateEmail(this.value);
    if (!validation.valid) {
        showError('email', validation.message);
    } else {
        showError('email', '');
    }
});

document.getElementById('phone').addEventListener('blur', function() {
    const validation = validatePhone(this.value);
    if (!validation.valid) {
        showError('phone', validation.message);
    } else {
        showError('phone', '');
    }
});

document.getElementById('subject').addEventListener('blur', function() {
    const validation = validateSubject(this.value);
    if (!validation.valid) {
        showError('subject', validation.message);
    } else {
        showError('subject', '');
    }
});

document.getElementById('message').addEventListener('blur', function() {
    const validation = validateMessage(this.value);
    if (!validation.valid) {
        showError('message', validation.message);
    } else {
        showError('message', '');
    }
});

// Add smooth scroll animation on load
window.addEventListener('load', () => {
    document.querySelector('.contact-hero').style.opacity = '1';
});
