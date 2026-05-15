// ===== GALLERY PAGE DATA WITH DESCRIPTIONS (ALL .png) =====
const originalGalleryData = {
    school: [
        { img: 'school-1.png', desc: 'Striving Together for Knowledge' },
        { img: 'school-2.png', desc: 'Students sharing a prayer before lunchtime' },
        { img: 'school-3.png', desc: 'Laughter: the universal language of learning' },
        { img: 'school-4.png', desc: 'Achievement is the result of preparation, hard work, and learning from failure' },
        { img: 'school-5.png', desc: 'The best reward for a parent is seeing their children’s dedication recognized' },
        { img: 'school-6.png', desc: 'From Syntax to Solutions: Peer-to-peer learning is at the heart of our Coding Club' },
        { img: 'school-7.png', desc: 'Fundraising activity by LaSalle Charity Club members at school' },
        { img: 'school-8.png', desc: 'Stronger together' },
        { img: 'school-9.png', desc: 'Different grades, same goal. Whether it’s their first "Hello World" or a complex Python script, the energy in Coding Club is unmatched' },
        { img: 'school-10.png', desc: 'Victory for our bright mind! 🏆 Celebrating our Q&A Challenge winner as they receive their certificate from the Principal' },
        { img: 'school-11.png', desc: 'Determined students, limitless potential' },
        { img: 'school-12.png', desc: 'Happy hearts, bright smiles, strong friendships' },
        { img: 'school-13.png', desc: 'From Syntax to Solutions: Peer-to-peer learning is at the heart of our Coding Club' },
        { img: 'school-14.png', desc: 'Sharing a meal, sharing a smile.La Salle Charity Club' },
        { img: 'school-15.png', desc: 'A shelf filled with students’ lunch boxes' },
        { img: 'school-16.png', desc: 'Look who dropped by for a surprise visit! Elmo had the best time meeting everyone at school' },
        { img: 'school-17.png', desc: 'These student-made instruments prove that music is everywhere if you’re creative enough to build it. 🥁🎶' },
        { img: 'school-18.png', desc: 'A day full of joy, discovery, and beautiful moments by the lake Babogaya' },
        { img: 'school-19.png', desc: 'Seniors ‘26. 🎓' },
        { img: 'school-20.png', desc: 'So proud of our students for coming together to collect clothes and shoes for those who need them most' }
    ],
    events: [
        { img: 'events-1.png', desc: 'Unity in diversity. Proud to see our students embracing their identity and showcasing the beautiful patterns of our shared history. #CultureDay' },
        { img: 'events-2.png', desc: 'A meaningful day of partnership between parents and teachers' },
        { img: 'events-3.png', desc: 'christmass party at school' },
        { img: 'events-4.png', desc: 'Blood Donation Day 2025: Making an impact' },
        { img: 'events-5.png', desc: 'Election Day: Students casting their votes for the next Student President' },
        { img: 'events-6.png', desc: 'Inside the voting booth: Selecting our student leader' },
        { img: 'events-7.png', desc: 'A student gets their finger inked after voting in the student president election' },
        { img: 'events-8.png', desc: 'Students celebrating Culture Day with pride and joy' },
        { img: 'events-9.png', desc: 'Culture Day reminds us that our diversity is our greatest strength.' },
        { img: 'events-10.png', desc: 'Sharing a meal, sharing a smile.La Salle Charity Club' },
        { img: 'events-11.png', desc: 'A week of faith, service, and community. Reflecting on the incredible energy of La Salle Week in our compound' },
        { img: 'events-12.png', desc: 'Courage is not the absence of fear, but the choice to help anyway. Closing his eyes, but opening his heart.#Blood Donation Day 2025' },
        { img: 'events-13.png', desc: 'Seeing our students rewarded by the Principal is an inspiration to the entire compound.' },
        { img: 'events-14.png', desc: 'High school Director presenting certificates of achievement at Girls’ Day celebration.' },
        { img: 'events-15.png', desc: 'Culture, friendship, and school spirit shining brightly on Culture Day' },
        { img: 'events-16.png', desc: 'Culture Day at its best — students united in tradition, color, and happiness' },
        { img: 'events-17.png', desc: 'NovaEra Batch Opening Day' },
        { img: 'events-18.png', desc: 'Elegance and pride on full display during Culture Day. 🌟' },
        { img: 'events-19.png', desc: 'Culture Day at its best — students united in tradition, color, and happiness' },
        { img: 'events-20.png', desc: 'A powerful moment as Grade 12 boys represent their heritage with confidence and respect.' }
    ],
    sports: [
        { img: 'sport-1.png', desc: 'SJS Culture#BasketBall #StJosephAdama' },
        { img: 'sport-2.png', desc: 'Locked in. 🔒⚽ #Saint Joseph Adama Premiere league #HeadToHead #TheBeautifulGame' },
        { img: 'sport-3.png', desc: 'Where dedication meets determination — Saint Joseph Adama Basketball Training' },
        { img: 'sport-4.png', desc: 'Passion on the field, pride in the game — Saint Joseph Adama Premier League' },
        { img: 'sport-5.png', desc: 'Saint Joseph Adama Basketball Team' },
        { img: 'sport-6.png', desc: 'Young talents giving their best on the football field' },
        { img: 'sport-7.png', desc: 'Empowered girls showing strength and teamwork through basketball' },
        { img: 'sport-8.png', desc: 'The last line of defense, the heart of the team' },
        { img: 'sport-9.png', desc: 'Grade 7E students ready for action in their sports suits.' },
        { img: 'sport-10.png', desc: 'Exciting football match between Grade 3 and Grade 4 students filled with energy and teamwork' },
        { img: 'sport-11.png', desc: 'Celebrating the hard work and discipline of our youngest martial artists' },
        { img: 'sport-12.png', desc: 'A perfect shot and two points for Saint Joseph! 🏀🔥' },
        
    ]
};

// Shuffle function (Fisher-Yates algorithm)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Create shuffled version of all categories (random order on every refresh)
let galleryData = {
    school: shuffleArray([...originalGalleryData.school]),
    events: shuffleArray([...originalGalleryData.events]),
    sports: shuffleArray([...originalGalleryData.sports])
};

let currentCategory = 'school';
let currentPage = 1;
const imagesPerPage = 12;

// Function to render gallery
function renderGallery() {
    const images = galleryData[currentCategory];
    if (!images || images.length === 0) {
        document.getElementById('galleryGrid').innerHTML = '<div class="no-images">No images available in this category.</div>';
        document.getElementById('galleryPagination').innerHTML = '';
        return;
    }
    
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const currentImages = images.slice(startIndex, endIndex);
    const totalPages = Math.ceil(images.length / imagesPerPage);
    
    // Build gallery grid HTML with descriptions
    let gridHTML = '';
    currentImages.forEach((item, idx) => {
        const fullPath = `images/${item.img}`;
        const globalIndex = startIndex + idx;
        gridHTML += `
            <div class="gallery-item" data-category="${currentCategory}" data-index="${globalIndex}">
                <img src="${fullPath}" alt="${item.desc}" loading="lazy">
                <div class="gallery-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
                <div class="gallery-caption">
                    <p>${item.desc}</p>
                </div>
            </div>
        `;
    });
    
    document.getElementById('galleryGrid').innerHTML = gridHTML;
    
    // Add click event to each gallery item
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const category = item.dataset.category;
            const index = parseInt(item.dataset.index);
            openGalleryFromCategory(category, index);
        });
    });
    
    // Render pagination
    renderPagination(totalPages);
}

// Function to render pagination buttons
function renderPagination(totalPages) {
    if (totalPages <= 1) {
        document.getElementById('galleryPagination').innerHTML = '';
        return;
    }
    
    let paginationHTML = '';
    
    if (currentPage > 1) {
        paginationHTML += `<button class="page-btn" data-page="${currentPage - 1}">‹ Prev</button>`;
    }
    
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
            paginationHTML += `<button class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
        } else if (i === currentPage - 3 || i === currentPage + 3) {
            paginationHTML += `<span class="page-dots">...</span>`;
        }
    }
    
    if (currentPage < totalPages) {
        paginationHTML += `<button class="page-btn" data-page="${currentPage + 1}">Next ›</button>`;
    }
    
    document.getElementById('galleryPagination').innerHTML = paginationHTML;
    
    document.querySelectorAll('.page-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const page = parseInt(btn.dataset.page);
            if (!isNaN(page)) {
                currentPage = page;
                renderGallery();
                document.querySelector('.gallery-grid-section').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Function to open gallery image in fullscreen modal (with description)
function openGalleryFromCategory(category, index) {
    const images = galleryData[category];
    if (images && images.length > 0) {
        const fullImages = images.map(item => `images/${item.img}`);
        const descriptions = images.map(item => item.desc);
        
        currentImagesArray = fullImages;
        currentImageDescriptions = descriptions;
        currentGalleryTitle = category.charAt(0).toUpperCase() + category.slice(1) + ' Gallery';
        currentImageIndex = index;
        showModalWithDescription();
    }
}

// Enhanced modal function with description support
function showModalWithDescription() {
    const modal = document.getElementById('imageModal');
    if (!modal) {
        createModal();
        setTimeout(showModalWithDescription, 50);
        return;
    }
    
    updateModalImageWithDescription();
    updateThumbnailsWithDescription();
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function updateModalImageWithDescription() {
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const imageCounter = document.getElementById('imageCounter');
    const modalDescription = document.getElementById('modalDescription');
    
    if (modalImage && currentImagesArray.length > 0) {
        modalImage.src = currentImagesArray[currentImageIndex];
        if (modalTitle) modalTitle.textContent = currentGalleryTitle;
        if (imageCounter) imageCounter.textContent = `Image ${currentImageIndex + 1} of ${currentImagesArray.length}`;
        
        if (modalDescription && currentImageDescriptions && currentImageDescriptions[currentImageIndex]) {
            modalDescription.textContent = currentImageDescriptions[currentImageIndex];
            modalDescription.style.display = 'block';
        } else if (modalDescription) {
            modalDescription.style.display = 'none';
        }
        
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

function updateThumbnailsWithDescription() {
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
            updateModalImageWithDescription();
        });
        modalThumbnails.appendChild(thumb);
    });
}

// Override next/prev to work with description
nextImage = function() {
    if (currentImagesArray.length > 0) {
        currentImageIndex = (currentImageIndex + 1) % currentImagesArray.length;
        updateModalImageWithDescription();
    }
};

prevImage = function() {
    if (currentImagesArray.length > 0) {
        currentImageIndex = (currentImageIndex - 1 + currentImagesArray.length) % currentImagesArray.length;
        updateModalImageWithDescription();
    }
};

// Enhance modal HTML to include description element
function enhanceModalWithDescription() {
    const modalContent = document.querySelector('.modal-content');
    if (modalContent && !document.getElementById('modalDescription')) {
        const descriptionDiv = document.createElement('div');
        descriptionDiv.className = 'modal-description';
        descriptionDiv.id = 'modalDescription';
        const modalCounter = document.querySelector('.modal-counter');
        if (modalCounter) {
            modalCounter.insertAdjacentElement('afterend', descriptionDiv);
        }
    }
}

// Initialize gallery when page loads
document.addEventListener('DOMContentLoaded', function() {
    enhanceModalWithDescription();
    renderGallery();
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchCategory(btn.dataset.category);
        });
    });
});

function switchCategory(category) {
    currentCategory = category;
    currentPage = 1;
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    renderGallery();
}

// Store descriptions globally
let currentImageDescriptions = [];