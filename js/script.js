// ===== MOBILE HAMBURGER MENU =====
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        if (nav) nav.classList.remove('active');
    });
});

// Dropdown toggle for mobile
const dropdown = document.querySelector('.dropdown');
if (dropdown) {
    dropdown.addEventListener('click', (e) => {
        if (window.innerWidth <= 900) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        }
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Form validation for contact page
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message. We will get back to you soon!');
            form.reset();
        });
    }
}
validateForm('contactForm');

// Add active class to current page in navigation
const currentLocation = window.location.pathname;
const navItems = document.querySelectorAll('.nav-links li a');
navItems.forEach(item => {
    if (item.getAttribute('href') === currentLocation.split('/').pop()) {
        item.classList.add('active');
    }
});

// ===== FULLSCREEN IMAGE GALLERY MODAL (HOMEPAGE + ABOUT PAGE) =====
// Create modal HTML only once
let modalCreated = false;
let currentImagesArray = [];
let currentImageIndex = 0;
let currentGalleryTitle = '';

function createModal() {
    if (modalCreated) return;
    
    const modalHTML = `
        <div id="imageModal" class="image-modal">
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div class="modal-header">
                    <h3 id="modalTitle">Gallery</h3>
                </div>
                <div class="modal-image-container">
                    <button class="modal-prev" id="modalPrev">&#10094;</button>
                    <img id="modalImage" src="" alt="Gallery Image">
                    <button class="modal-next" id="modalNext">&#10095;</button>
                </div>
                <div class="modal-counter">
                    <span id="imageCounter">Image 1 of 3</span>
                </div>
                <div class="modal-thumbnails" id="modalThumbnails"></div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    modalCreated = true;
}

// Call create modal on page load
document.addEventListener('DOMContentLoaded', function() {
    createModal();
});

// HOMEPAGE FACILITY GALLERY - Click on any facility card (Computer Lab, Chemistry Lab, etc.)
function openGallery(facilityName) {
    const facilityImagesMap = {
        'computer-lab': ['images/computer-lab-1.png', 'images/computer-lab-2.png', 'images/computer-lab-3.png'],
        'chemistry-lab': ['images/chemistry-lab-1.png', 'images/chemistry-lab-2.png', 'images/chemistry-lab-3.png'],
        'biology-lab': ['images/biology-lab-1.png', 'images/biology-lab-2.png', 'images/biology-lab-3.png'],
        'physics-lab': ['images/physics-lab-1.png', 'images/physics-lab-2.png', 'images/physics-lab-3.png'],
        'library': ['images/library-1.png', 'images/library-2.png', 'images/library-3.png'],
        'open-library': ['images/open-library-2.jpg', 'images/open-library-4.jpg', 'images/open-library-1.jpg'],
        'classroom': ['images/classroom-1.png', 'images/classroom-2.png', 'images/classroom-3.png']
    };
    
    const facilityTitlesMap = {
        'computer-lab': 'Computer Lab',
        'chemistry-lab': 'Chemistry Lab',
        'biology-lab': 'Biology Lab',
        'physics-lab': 'Physics Lab',
        'library': 'Library',
        'open-library': 'Open Library',
        'classroom': 'Smart Classroom'
    };
    
    currentImagesArray = facilityImagesMap[facilityName] || [];
    currentGalleryTitle = facilityTitlesMap[facilityName] || facilityName.replace('-', ' ').toUpperCase();
    currentImageIndex = 0;
    
    if (currentImagesArray.length > 0) {
        showModal();
    } else {
        alert('No images available for this facility.');
    }
}

// ABOUT PAGE GALLERY - Click on KG, Elementary, or High School images
function openAboutGallery(galleryType, index) {
   const aboutImagesMap = {
    'kg': ['images/kg-1.png', 'images/kg-2.png', 'images/kg-3.png'],
    'elementary': ['images/elementary-1.jpg', 'images/elementary-2.jpg', 'images/elementary-3.jpg'],
    'highschool': ['images/highschool-1.png', 'images/highschool-2.jpg', 'images/highschool-3.png'],
    // Add directors
    'director-kg': ['images/director-kg.png'],
    'director-elementary': ['images/director-elementary.jpg'],
    'director-highschool': ['images/director-highschool.jpg']
};
    
    const aboutTitlesMap = {
    'kg': 'Kindergarten Gallery',
    'elementary': 'Elementary School Gallery',
    'highschool': 'High School Gallery',
    // Add directors
    'director-kg': 'Kindergarten Director',
    'director-elementary': 'Elementary School Director',
    'director-highschool': 'High School Director'
};
    
    currentImagesArray = aboutImagesMap[galleryType] || [];
    currentGalleryTitle = aboutTitlesMap[galleryType] || 'Gallery';
    currentImageIndex = index;
    
    if (currentImagesArray.length > 0) {
        showModal();
    }
}

// Show modal with current images
function showModal() {
    const modal = document.getElementById('imageModal');
    if (!modal) {
        createModal();
        setTimeout(showModal, 50);
        return;
    }
    
    updateModalImage();
    updateThumbnails();
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Update modal image and counter
function updateModalImage() {
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const imageCounter = document.getElementById('imageCounter');
    
    if (modalImage && currentImagesArray.length > 0) {
        modalImage.src = currentImagesArray[currentImageIndex];
        if (modalTitle) modalTitle.textContent = currentGalleryTitle;
        if (imageCounter) imageCounter.textContent = `Image ${currentImageIndex + 1} of ${currentImagesArray.length}`;
        
        // Update active thumbnail
        const thumbnails = document.querySelectorAll('.thumb-img');
        thumbnails.forEach((thumb, idx) => {
            if (idx === currentImageIndex) {
                thumb.classList.add('active');
            } else {
                thumb.classList.remove('active');
            }
        });
    }
}

// Create thumbnail images
function updateThumbnails() {
    const modalThumbnails = document.getElementById('modalThumbnails');
    if (!modalThumbnails) return;
    
    modalThumbnails.innerHTML = '';
    currentImagesArray.forEach((imgSrc, idx) => {
        const thumb = document.createElement('img');
        thumb.src = imgSrc;
        thumb.alt = `Thumbnail ${idx + 1}`;
        thumb.classList.add('thumb-img');
        thumb.addEventListener('click', () => {
            currentImageIndex = idx;
            updateModalImage();
        });
        modalThumbnails.appendChild(thumb);
    });
}

// Next image
function nextImage() {
    if (currentImagesArray.length > 0) {
        currentImageIndex = (currentImageIndex + 1) % currentImagesArray.length;
        updateModalImage();
    }
}

// Previous image
function prevImage() {
    if (currentImagesArray.length > 0) {
        currentImageIndex = (currentImageIndex - 1 + currentImagesArray.length) % currentImagesArray.length;
        updateModalImage();
    }
}

// Close modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Set up modal event listeners (run after DOM is ready)
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const modalPrev = document.getElementById('modalPrev');
        const modalNext = document.getElementById('modalNext');
        const closeModalBtn = document.querySelector('.close-modal');
        const modal = document.getElementById('imageModal');
        
        if (modalPrev) modalPrev.addEventListener('click', prevImage);
        if (modalNext) modalNext.addEventListener('click', nextImage);
        if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeModal();
            });
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            const modalElem = document.getElementById('imageModal');
            if (modalElem && modalElem.style.display === 'flex') {
                if (e.key === 'ArrowLeft') prevImage();
                else if (e.key === 'ArrowRight') nextImage();
                else if (e.key === 'Escape') closeModal();
            }
        });
    }, 100);
});

// ===== COUNTING EFFECT FOR STATISTICS (ABOUT PAGE) =====
document.addEventListener('DOMContentLoaded', function() {
    function startCounting() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            if (isNaN(target)) return;
            
            let current = 0;
            let increment = target / 50;
            
            let counter = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target;
                    clearInterval(counter);
                } else {
                    stat.textContent = Math.floor(current);
                }
            }, 30);
        });
    }
    
    function checkAndStartCounting() {
        const statsSection = document.querySelector('.stats-section');
        if (!statsSection) return false;
        
        const rect = statsSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight - 100 && rect.bottom > 0) {
            startCounting();
            return true;
        }
        return false;
    }
    
    if (!checkAndStartCounting()) {
        window.addEventListener('scroll', function onScroll() {
            if (checkAndStartCounting()) {
                window.removeEventListener('scroll', onScroll);
            }
        });
    }
});

// Fix for window resize to reset mobile menu state
window.addEventListener('resize', function() {
    if (window.innerWidth > 900) {
        if (nav) nav.classList.remove('active');
        if (dropdown) dropdown.classList.remove('active');
    }
});

// Preload all images for smoother experience
function preloadImages() {
    const allImages = [
        // Homepage facility images (21 images)
        'images/computer-lab-1.png', 'images/computer-lab-2.png', 'images/computer-lab-3.png',
        'images/chemistry-lab-1.png', 'images/chemistry-lab-2.png', 'images/chemistry-lab-3.png',
        'images/biology-lab-1.png', 'images/biology-lab-2.png', 'images/biology-lab-3.png',
        'images/physics-lab-1.png', 'images/physics-lab-2.png', 'images/physics-lab-3.png',
        'images/library-1.png', 'images/library-2.png', 'images/library-3.png',
        'images/open-library-1.png', 'images/open-library-2.png', 'images/open-library-3.png',
        'images/classroom-1.png', 'images/classroom-2.png', 'images/classroom-3.png',
        // About page images (9 images)
        'images/kg-1.png', 'images/kg-2.png', 'images/kg-3.png',
        'images/elementary-1.png', 'images/elementary-2.png', 'images/elementary-3.png',
        'images/highschool-1.png', 'images/highschool-2.png', 'images/highschool-3.png'
    ];
    
    allImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}
preloadImages();
// ===== STAFF PAGE GALLERY (Click on staff photos to view fullscreen) =====
// ===== STAFF PAGE GALLERY (Click on staff photos to view fullscreen) =====
function openStaffGallery(staffType, index) {
    const staffImagesMap = {
        // Leaders
        'principal': ['images/principal.png'],
        'viceprincipal': ['images/principal.png'],
        // Kindergarten
        'kg-admin': ['images/kg-staff.png'],
        'kg-teachers': ['images/kg-teachers.png'],
        'kg-support': ['images/kg-support-staff.png'],
        // Elementary
        'elementary-admin': ['images/elementary-admin-staff.jpg'],
        'elementary-teachers': ['images/elementary-teachers.png'],
        'elementary-support': ['images/elementary-support-staff.jpg'],
        // High School
        'highschool-admin': ['images/highschool-unit-leader.jpg'],
        'highschool-teachers': ['images/highschool-teachers.png'],
        'highschool-support': ['images/highschool-support-staff.jpg'],
        // Finance Team
        'finance-zegeyech': ['images/finance-zegeyech.jpg'],
        'finance-etagegn': ['images/finance-etagegn.jpg'],
        // Media Coordinator
        'media-coordinator': ['images/media-coordinator.jpg'],
        // Secretaries
        'secretary-alemenesh': ['images/secretary-alemenesh.jpg'],
        'secretary-negat': ['images/secretary-negat.jpg'],
        'secretary-negest': ['images/secretary-negest.jpg'],
        // General Service Technician
        'technician-getachew': ['images/technician-getachew.jpg'],
    };
    
    const staffTitlesMap = {
        'principal': 'School Principal',
        'viceprincipal': 'Vice Principal',
        'kg-admin': 'Kindergarten Admin Staff',
        'kg-teachers': 'Kindergarten Teachers',
        'kg-support': 'Kindergarten Supporting Community',
        'elementary-admin': 'Elementary Admin Staff',
        'elementary-teachers': 'Elementary Teachers',
        'elementary-support': 'Elementary Supporting Community',
        'highschool-admin': 'High School Admin Staff',
        'highschool-teachers': 'High School Teachers',
        'highschool-support': 'High School Supporting Community',
        // Finance Team
        'finance-zegeyech': 'Mrs. Zegeyech Negash - Finance',
        'finance-etagegn': 'Mrs. Etagegn Asrat - Finance',
        // Media Coordinator
        'media-coordinator': 'Bedelu Nigusse- media coordinator',
        // Secretaries
        'secretary-alemenesh': 'Alemenesh Zeleke - Secretary',
        'secretary-negat': 'Negat Gezmu - Secretary',
        'secretary-negest': 'Negest Debele - Secretary',
        // General Service Technician
        'technician-getachew': 'Getachew Ambaye - General Service Technician',
    };
    
    currentImagesArray = staffImagesMap[staffType] || [];
    currentGalleryTitle = staffTitlesMap[staffType] || staffType;
    currentImageIndex = index;
    
    if (currentImagesArray.length > 0) {
        showModal();
    } else {
        alert('No image available for this staff category.');
    }
}