// --------------------------
// themeforest-full.js - COMPLETE FIXED VERSION
// --------------------------

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 DOM Content Loaded - Initializing all functionality');

    // --------------------------
    // SELECTORS
    // --------------------------
    const navLinks = document.querySelector('.nav-links');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    const searchBtn = document.querySelector('.search-btn');
    const authBtn = document.querySelector('.auth-btn');
    const navLinksAll = document.querySelectorAll('.nav-link');
    const mainCategories = document.querySelector('.main-categories');
    const menuToggle = document.querySelector('.menu-toggle');

    // --------------------------
    // ACTIVE NAV LINKS - FIXED VERSION
    // --------------------------
    console.log('🔗 Setting up active navigation links...');
    
    // Get current page - handle different scenarios
    const currentPath = window.location.pathname; // FIXED: Define currentPath
    let currentPage = currentPath.split('/').pop();
    
    // Special handling for index/home page
    if (currentPage === '' || currentPage === 'index.html' || currentPath.endsWith('/')) {
        currentPage = 'index.html';
    }
    
    console.log('📍 Current page:', currentPage);
    console.log('📍 Full path:', currentPath);
    
    navLinksAll.forEach(link => {
        const linkHref = link.getAttribute('href');
        
        // Remove active class from all links first
        link.classList.remove('active');
        
        // Add active class to current page link
        if (linkHref === currentPage) {
            link.classList.add('active');
            console.log('✅ Active link set:', linkHref);
        }
        
        // Click handler to update active state
        link.addEventListener('click', function() {
            navLinksAll.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // --------------------------
    // BACKGROUND SLIDER
    // --------------------------
    // BACKGROUND SLIDER - FIXED
    // --------------------------
// --------------------------
// BACKGROUND SLIDER - SLIDE ANIMATION
// --------------------------
// --------------------------
// MOBILE CATEGORIES MENU - IMPROVED
// --------------------------
function initMobileCategories() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainCategories = document.querySelector('.main-categories');
    const dropdowns = document.querySelectorAll('.dropdown');

    if (menuToggle && mainCategories) {
        // Function to check if mobile view
        const isMobileView = () => window.innerWidth <= 768;

        // Toggle main menu
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            mainCategories.classList.toggle('show');
            
            // Close all dropdowns when opening/closing main menu
            if (!mainCategories.classList.contains('show')) {
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (isMobileView()) {
                if (!mainCategories.contains(e.target) && !menuToggle.contains(e.target)) {
                    mainCategories.classList.remove('show');
                    dropdowns.forEach(dropdown => {
                        dropdown.classList.remove('active');
                    });
                }
            }
        });

        // Mobile dropdown functionality
        dropdowns.forEach(dropdown => {
            const link = dropdown.querySelector('a');
            
            link.addEventListener('click', function(e) {
                if (isMobileView()) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Close other dropdowns
                    dropdowns.forEach(otherDropdown => {
                        if (otherDropdown !== dropdown) {
                            otherDropdown.classList.remove('active');
                        }
                    });
                    
                    // Toggle current dropdown
                    dropdown.classList.toggle('active');
                }
            });
        });

        // Update on resize
        window.addEventListener('resize', function() {
            if (!isMobileView()) {
                // Reset all active states on desktop
                mainCategories.classList.remove('show');
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        });
    }
}

// Initialize mobile categories
initMobileCategories();
    // NAVBAR SCROLL
    // --------------------------
    window.addEventListener('scroll', () => {
        const headerHeight = header?.offsetHeight || 0;
        nav?.classList.toggle('scrolled', window.scrollY > headerHeight);
        if (scrollTopBtn) scrollTopBtn.style.display = window.scrollY > 150 ? 'block' : 'none';
    });

    scrollTopBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    
    // --------------------------
    // SEARCH MODAL
    // --------------------------
    searchBtn?.addEventListener('click', () => {
        if (document.querySelector('.search-overlay')) return;

        const overlay = document.createElement('div');
        overlay.className = 'search-overlay';
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');

        overlay.innerHTML = `
            <div class="search-modal">
                <div class="search-header">
                    <h3 id="search-title">Search Articles</h3>
                    <button class="close-search" aria-label="Close Search">&times;</button>
                </div>
                <div class="search-input-container">
                    <input type="text" class="search-input" placeholder="What are you looking for?">
                    <button class="search-submit" aria-label="Start Search">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                <div class="search-suggestions">
                    <span>Try: Technology, Travel, Lifestyle</span>
                </div>
            </div>`;

        document.body.appendChild(overlay);

        overlay.querySelector('.close-search').addEventListener('click', () => overlay.remove());
        overlay.addEventListener('click', (e) => e.target === overlay && overlay.remove());
        setTimeout(() => overlay.querySelector('.search-input').focus(), 100);
    });

   
    // --------------------------
    // MOBILE MENU
    // --------------------------
    mobileToggle?.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navLinks?.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && !navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
            navLinks?.classList.remove('active');
            mobileToggle?.classList.remove('active');
        }
    });

    // --------------------------
    // CATEGORIES MENU
    // --------------------------
    menuToggle?.addEventListener('click', () => mainCategories?.classList.toggle('show'));
    document.addEventListener('click', (e) => {
        if (!mainCategories?.contains(e.target) && !menuToggle?.contains(e.target)) mainCategories?.classList.remove('show');
    });

    // --------------------------
    // POST SCROLL ANIMATION
    // --------------------------
    const posts = document.querySelectorAll('.post');
    if (posts.length > 0) {
        console.log('📜 Initializing post scroll animations...');
        posts.forEach(p => {
            p.style.opacity = 0;
            p.style.transform = 'translateY(30px)';
            p.style.transition = '0.6s ease';
        });

        const io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.2 });

        posts.forEach(p => io.observe(p));
    }

    // --------------------------
    // HEADER ANIMATION
    // --------------------------
    const mainHead = document.querySelector('.main-head');
    if (mainHead) {
        const headIO = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                mainHead.classList.add('show');
                headIO.disconnect();
            }
        }, { threshold: 0.6 });
        headIO.observe(mainHead);
    }

    // --------------------------
    // TRENDING CAROUSEL
    // --------------------------
    const wrapper = document.getElementById('cards-wrapper');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const paginationDots = document.getElementById('pagination-dots');
    const cards = document.querySelectorAll('.single-card');

    if (wrapper && prevBtn && nextBtn && paginationDots && cards.length > 0) {
        console.log('🔄 Initializing trending carousel...');
        let currentPage = 0;
        const getCardsPerView = () => Math.max(1, Math.floor(wrapper.offsetWidth / (cards[0].offsetWidth + 30)));
        let cardsPerView = getCardsPerView();
        let totalPages = Math.ceil(cards.length / cardsPerView);

        const createDots = () => {
            paginationDots.innerHTML = '';
            for (let i = 0; i < totalPages; i++) {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                if (i === currentPage) dot.classList.add('active');
                dot.addEventListener('click', () => goToPage(i));
                paginationDots.appendChild(dot);
            }
        };

        const updateDots = () => {
            paginationDots.querySelectorAll('.dot').forEach((dot, idx) => dot.classList.toggle('active', idx === currentPage));
        };

        const updateButtons = () => {
            prevBtn.disabled = currentPage === 0;
            nextBtn.disabled = currentPage === totalPages - 1;
            prevBtn.style.opacity = prevBtn.disabled ? '0.5' : '1';
            nextBtn.style.opacity = nextBtn.disabled ? '0.5' : '1';
            prevBtn.style.cursor = prevBtn.disabled ? 'not-allowed' : 'pointer';
            nextBtn.style.cursor = nextBtn.disabled ? 'not-allowed' : 'pointer';
        };

        const goToPage = (page) => {
            if (page < 0 || page >= totalPages) return;
            currentPage = page;
            wrapper.scrollTo({ left: currentPage * cardsPerView * (cards[0].offsetWidth + 30), behavior: 'smooth' });
            updateDots();
            updateButtons();
        };

        nextBtn.addEventListener('click', () => goToPage(currentPage + 1));
        prevBtn.addEventListener('click', () => goToPage(currentPage - 1));

        window.addEventListener('resize', () => {
            cardsPerView = getCardsPerView();
            totalPages = Math.ceil(cards.length / cardsPerView);
            createDots();
            updateButtons();
            if (currentPage >= totalPages) goToPage(0);
        });

        createDots();
        updateButtons();
        setTimeout(() => goToPage(0), 100);
    }

    // --------------------------
    // LATEST POSTS CAROUSEL
    // --------------------------
    const cardList = document.querySelector('.card-list');
    const prevBtnLatest = document.querySelector('.prev-btn');
    const nextBtnLatest = document.querySelector('.next-btn');
    const dotsContainerLatest = document.querySelector('.featured-section .pagination-dots');

    if (cardList && prevBtnLatest && nextBtnLatest && dotsContainerLatest) {
        console.log('🔄 Initializing latest posts carousel...');
        const cardsLatest = document.querySelectorAll('.card');
        const cardsPerViewLatest = 3;
        let currentIndex = 0;
        const totalPagesLatest = Math.ceil(cardsLatest.length / cardsPerViewLatest);

        const createDotsLatest = () => {
            dotsContainerLatest.innerHTML = '';
            for (let i = 0; i < totalPagesLatest; i++) {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToPageLatest(i));
                dotsContainerLatest.appendChild(dot);
            }
        };

        const goToPageLatest = (page) => {
            currentIndex = page;
            cardList.style.transform = `translateX(-${currentIndex * (100 / cardsPerViewLatest)}%)`;
            updateDotsLatest();
        };

        const updateDotsLatest = () => {
            dotsContainerLatest.querySelectorAll('.dot').forEach((dot, idx) => dot.classList.toggle('active', idx === currentIndex));
        };

        prevBtnLatest.addEventListener('click', () => currentIndex > 0 && goToPageLatest(currentIndex - 1));
        nextBtnLatest.addEventListener('click', () => currentIndex < totalPagesLatest - 1 && goToPageLatest(currentIndex + 1));

        createDotsLatest();
    }

    // --------------------------
    // SPARKLE ROTATING TEXT
    // --------------------------
    const explosiveText = document.querySelector('.explosive-text');
    const sparkles = document.querySelectorAll('.sparkle');
    
    if (explosiveText && sparkles.length > 0) {
        console.log('✨ Initializing sparkle text animation...');
        explosiveText.addEventListener('mouseenter', () => {
            sparkles.forEach((s, i) => {
                setTimeout(() => {
                    s.style.animation = 'sparklePop 1.5s ease-out forwards';
                    setTimeout(() => s.style.animation = '', 1500);
                }, i * 200);
            });
        });
    }

    // --------------------------
    // LOAD MORE POSTS FUNCTIONALITY - SIMPLIFIED & FIXED
    // --------------------------
    console.log('📦 Checking for Load More functionality...');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const postsGrid = document.querySelector('.posts-grid');

    // Only initialize if we're on the posts page
    if (loadMoreBtn && postsGrid) {
        console.log('✅ Load More elements found - initializing posts page functionality');

        // Sample data for additional posts
        const additionalPosts = [
            {
                image: 'assets/images/rebe-adelaida-zunQwMy5B6M-unsplash.webp',
                title: 'Bali: Island of Gods',
                description: 'Exploring the spiritual and natural wonders of Bali...'
            },
            {
                image: 'assets/images/dino-reichmuth-A5rCN8626Ck-unsplash.webp',
                title: 'Patagonia: The Edge of the World',
                description: 'Hiking through the dramatic landscapes of southern Chile...'
            },
            {
                image: 'assets/images/luca-bravo-O453M2Liufs-unsplash.webp',
                title: 'Kyoto: Temples and Traditions',
                description: 'Immersing in Japanese culture in the ancient capital...'
            },
            {
                image: 'assets/images/robin-noguier-sydwCr54rf0-unsplash.webp',
                title: 'Amazon Rainforest Expedition',
                description: 'Venturing deep into the world\'s largest tropical rainforest...'
            },
            {
                image: 'assets/images/anders-jilden-cYrMQA7a3Wc-unsplash.webp',
                title: 'Greek Island Hopping',
                description: 'Sailing through the azure waters of the Aegean Sea...'
            },
            {
                image: 'assets/images/daniela-cuevas-t7YycgAoVSw-unsplash.webp',
                title: 'New Zealand: Middle-earth Adventures',
                description: 'Exploring the filming locations of The Lord of the Rings...'
            },
            {
                image: 'assets/images/jonathan-gallegos-_vA2q0-NroU-unsplash.webp',
                title: 'Egypt: Land of Pharaohs',
                description: 'Uncovering ancient mysteries along the Nile River...'
            },
            {
                image: 'assets/images/roman-kraft-g_gwdpsCVAY-unsplash.webp',
                title: 'Canadian Rockies: Majestic Peaks',
                description: 'Hiking through Banff and Jasper National Parks...'
            },
            {
                image: 'assets/images/vaida-tamosauskaite-oJofV8dZd_w-unsplash.webp',
                title: 'Vietnam: From Hanoi to Ho Chi Minh',
                description: 'A journey through Vietnam\'s vibrant cities and countryside...'
            }
        ];

        // Count initial posts
        const initialPostCount = document.querySelectorAll('.post-card').length;
        let loadedPosts = initialPostCount;
        
        console.log(`📊 Initial posts: ${initialPostCount}, Additional posts: ${additionalPosts.length}`);

        loadMoreBtn.addEventListener('click', function() {
            console.log('🎯 Load More button clicked!');

            // Add 9 more posts
            for (let i = 0; i < 9; i++) {
                const postIndex = (loadedPosts + i) % additionalPosts.length;
                const post = additionalPosts[postIndex];
                
                const postCard = document.createElement('div');
                postCard.className = 'post-card';
                
                postCard.innerHTML = `
                    <img src="${post.image}" alt="${post.title}" />
                    <div class="card-content">
                        <h3>${post.title}</h3>
                        <p>${post.description}</p>
                        <a href="single.html" class="post-read">Read More</a>
                    </div>
                `;
                
                postsGrid.appendChild(postCard);
            }
            
            // Update the count
            loadedPosts += 9;
            console.log(`✅ Total posts after loading: ${loadedPosts}`);
            
            // If we've loaded all available posts, disable the button
            if (loadedPosts >= initialPostCount + additionalPosts.length) {
                loadMoreBtn.disabled = true;
                loadMoreBtn.textContent = 'No More Posts';
                loadMoreBtn.style.backgroundColor = '#95a5a6';
                console.log('🛑 All posts loaded, button disabled');
            }
        });

        console.log('✅ Load More functionality initialized successfully!');
    } else {
        console.log('ℹ️  Load More not needed on this page (home page)');
    }

    // --------------------------
    // SCROLL TO TOP FUNCTIONALITY
    // --------------------------
    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.style.display = 'flex';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        });
        
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    console.log('🎉 All functionality initialized successfully!');


// --------------------------
// FAQ FUNCTIONALITY - WITH NULL CHECKS
// --------------------------
console.log('❓ Checking for FAQ functionality...');

// FAQ Accordion Functionality
const faqItems = document.querySelectorAll('.faq-item');

if (faqItems.length > 0) {
    console.log('✅ FAQ items found - initializing FAQ functionality');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', () => {
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
            });
        }
    });

    // Search Functionality
    const searchInput = document.querySelector('.faq-search-input');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question span');
                const answer = item.querySelector('.faq-answer-content');
                
                if (question && answer) {
                    const questionText = question.textContent.toLowerCase();
                    const answerText = answer.textContent.toLowerCase();
                    
                    if (questionText.includes(searchTerm) || answerText.includes(searchTerm)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    }

    // Category Filter
    const categoryButtons = document.querySelectorAll('.faq-category-btn');
    
    if (categoryButtons.length > 0) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active button
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                const category = this.getAttribute('data-category');
                
                // Filter items
                faqItems.forEach(item => {
                    if (category === 'all' || item.getAttribute('data-category') === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Fade-in Animation on Scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    
    if (fadeElements.length > 0) {
        const fadeInOnScroll = function() {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('visible');
                }
            });
        };
        
        // Initial check
        fadeInOnScroll();
        
        // Check on scroll
        window.addEventListener('scroll', fadeInOnScroll);
    }
    
    console.log('✅ FAQ functionality initialized successfully!');
} else {
    console.log('ℹ️  No FAQ items found - skipping FAQ functionality');
}
}); // End of DOMContentLoaded