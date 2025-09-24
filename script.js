document.addEventListener('DOMContentLoaded', () => {

    // ======================= Product Data ======================= //
    // Expanded data with more items and details for a richer experience.
    const allProductData = {
        dealsOfTheDay: [
            { id: 'deal1', name: "Kanjivaram Silk Saree", meta: "Festive Special", price: 15200, image: "https://placehold.co/600x800/6A0DAD/FFFFFF?text=Kanjivaram+Saree", specs: "Pure silk with zari work. Comes with a matching blouse piece." },
            { id: 'deal2', name: "Handcrafted Jhumkas", meta: "Top Rated", price: 2800, image: "https://placehold.co/600x800/FFD700/000000?text=Gold+Jhumkas", specs: "Gold-plated brass with intricate Meenakari work and pearl drops." },
            { id: 'deal3', name: "Men's Linen Kurta", meta: "Best Seller", price: 3150, image: "https://placehold.co/600x800/87CEEB/000000?text=Linen+Kurta", specs: "100% pure linen, regular fit, mandarin collar. Perfect for casual outings." },
            { id: 'deal4', name: "Printed Cotton Bed-Sheet", meta: "Limited Time Deal", price: 1999, image: "https://placehold.co/600x800/20B2AA/FFFFFF?text=Cotton+Bed-Sheet", specs: "King size, 250 thread count cotton with two pillow covers." },
            { id: 'deal5', name: "Embroidered Clutch Bag", meta: "Trending Now", price: 2500, image: "https://placehold.co/600x800/FF69B4/FFFFFF?text=Clutch+Bag", specs: "Velvet base with zardozi embroidery and a detachable chain strap." },
            { id: 'deal6', name: "Solid Blue Casual Shirt", meta: "40% Off", price: 1250, image: "https://placehold.co/600x800/2E86C1/FFFFFF?text=Casual+Shirt", specs: "Cotton blend, slim fit, full sleeves. Ideal for work and casual wear." },
        ],
        newArrivals: [
            { id: 'new1', name: "Chikankari Kurti", meta: "Just Launched", price: 4200, image: "https://placehold.co/600x800/F5F5DC/000000?text=Chikankari+Kurti", specs: "Hand-embroidered Georgette fabric from Lucknow. Sheer and elegant." },
            { id: 'new2', name: "Bandhgala Suit", meta: "New Collection", price: 18999, image: "https://placehold.co/600x800/000080/FFFFFF?text=Bandhgala+Suit", specs: "Terry rayon fabric, includes jacket and trousers. Perfect for weddings." },
            { id: 'new3', name: "Terracotta Jewelry Set", meta: "Eco-Friendly", price: 1750, image: "https://placehold.co/600x800/A0522D/FFFFFF?text=Terracotta+Set", specs: "Hand-painted baked clay necklace and matching earrings. Lightweight." },
            { id: 'new4', name: "Pashmina Shawl", meta: "Winter Collection", price: 9800, image: "https://placehold.co/600x800/D8BFD8/000000?text=Pashmina+Shawl", specs: "Authentic Cashmere Pashmina from Kashmir. Extremely soft and warm." },
            { id: 'new5', name: "Lehenga Choli Set", meta: "Bridal Wear", price: 22500, image: "https://placehold.co/600x800/E74C3C/FFFFFF?text=Lehenga+Choli", specs: "Net fabric with heavy embroidery, includes lehenga, choli, and dupatta." },
        ],
        boysItems: [
            { id: 'boy1', name: "Boys' Kurta Pajama Set", meta: "Wedding Season", price: 2499, image: "https://placehold.co/600x800/FFA500/000000?text=Boys+Kurta", specs: "Silk blend fabric. Comfortable fit for kids aged 5-12 years." },
            { id: 'boy2', name: "Nehru Jacket for Kids", meta: "Stylish & Modern", price: 1800, image: "https://placehold.co/600x800/B22222/FFFFFF?text=Nehru+Jacket", specs: "Jacquard fabric, can be worn over a kurta or shirt." },
            { id: 'boy3', name: "Kids' Sherwani", meta: "Royal Look", price: 5500, image: "https://placehold.co/600x800/C0C0C0/000000?text=Kids+Sherwani", specs: "Raw silk with intricate embroidery. Comes with matching pajamas." },
            { id: 'boy4', name: "Printed Casual Shirt", meta: "Daily Wear", price: 999, image: "https://placehold.co/600x800/4682B4/FFFFFF?text=Kids+Shirt", specs: "100% cotton, soft and breathable. Machine washable." },
        ],
        jewelryItems: [
            { id: 'jewel1', name: "Uncut Polki Choker Set", meta: "Top Rated", price: 25500, image: "https://placehold.co/600x800/DAA520/FFFFFF?text=Polki+Choker", specs: "High-quality Polki stones with pearl accents. Includes choker and earrings." },
            { id: 'jewel2', name: "Oxidised Silver Bangles", meta: "Bestseller", price: 5200, image: "https://placehold.co/600x800/C0C0C0/000000?text=Silver+Bangles", specs: "Set of 4 handcrafted bangles made from 92.5 Sterling Silver." },
            { id: 'jewel3', name: "Meenakari Peacock Earrings", meta: "Limited Stock", price: 3850, image: "https://placehold.co/600x800/E6BF83/000000?text=Meenakari+Earrings", specs: "Enamel work on a gold-plated base, shaped like a peacock." },
            { id: 'jewel4', name: "Traditional Bridal Nath", meta: "Wedding Special", price: 4100, image: "https://placehold.co/600x800/B22222/FFFFFF?text=Bridal+Nath", specs: "Kundan work with a pearl chain. A must-have for Indian brides." },
        ],
        homeDecorItems: [
            { id: 'decor1', name: "Hand-Carved Wooden Panel", meta: "Made in Rajasthan", price: 7999, image: "https://placehold.co/600x800/A52A2A/FFFFFF?text=Wooden+Panel", specs: "Mango wood wall panel, 24x24 inches. Intricate floral carving." },
            { id: 'decor2', name: "Jaipur Blue Pottery Vase", meta: "Hand-painted", price: 3500, image: "https://placehold.co/600x800/87CEEB/000000?text=Blue+Pottery", specs: "10-inch ceramic vase, perfect for flowers or as a standalone piece." },
            { id: 'decor3', name: "Block Print Cushion Covers", meta: "Set of 5", price: 1850, image: "https://placehold.co/600x800/D2B48C/000000?text=Cushion+Covers", specs: "16x16 inches, cotton fabric. Features traditional Sanganeri block print." },
            { id: 'decor4', name: "Dhokra Art Brass Idol", meta: "Collector's Item", price: 5100, image: "https://placehold.co/600x800/CD7F32/FFFFFF?text=Brass+Idol", specs: "Lost-wax casting technique from Bastar. Represents tribal art." },
        ]
    };
    
    // Combine all products into a single array for easy lookup and search
    const allProducts = Object.values(allProductData).flat();

    // ======================= State Management ======================= //
    let cart = [];
    let wishlist = [];

    // ======================= DOM Element Selection ======================= //
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const cartCountElement = document.getElementById('cart-count');
    const toastContainer = document.getElementById('toast-container');
    const searchInput = document.getElementById('search-input');
    
    // Modal Elements
    const modalOverlay = document.getElementById('quick-view-modal');
    const modalCloseBtn = modalOverlay.querySelector('.modal-close-btn');
    const modalImage = document.getElementById('modal-product-image');
    const modalName = document.getElementById('modal-product-name');
    const modalPrice = document.getElementById('modal-product-price');
    const modalSpecs = document.getElementById('modal-product-specs');
    const modalAddToCartBtn = modalOverlay.querySelector('.add-to-cart-btn');

    // ======================= Functions ======================= //

    /**
     * Renders a list of products into a specified grid container.
     * @param {Array} products - The array of product objects to render.
     * @param {string} gridId - The ID of the container element to render into.
     */
    function renderProducts(products, gridId) {
        const gridContainer = document.getElementById(gridId);
        if (!gridContainer) return;

        // If no products match, show a message
        if (products.length === 0) {
            gridContainer.innerHTML = `<p>No products found.</p>`;
            return;
        }

        gridContainer.innerHTML = products.map(product => {
            const isWishlisted = wishlist.includes(product.id);
            return `
            <div class="product-card" data-product-id="${product.id}">
                <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" data-product-id="${product.id}" aria-label="Add to wishlist">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </button>
                <img src="${product.image.replace('600x800', '400x500')}" alt="${product.name}">
                <div class="product-card-content">
                    <h3>${product.name}</h3>
                    <p class="product-meta">${product.meta}</p>
                    <p class="product-price">₹${product.price.toLocaleString('en-IN')}</p>
                </div>
            </div>
        `}).join('');
    }
    
    /**
     * Shows a toast notification message.
     * @param {string} message - The message to display.
     */
    function showToast(message) {
        if (!toastContainer) return;
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        toastContainer.appendChild(toast);
        // Automatically remove after 3 seconds
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.addEventListener('transitionend', () => toast.remove());
        }, 3000);
    }
    
    /**
     * Adds an item to the cart. If item already exists, show message (future enhancement: increase quantity).
     * @param {string} productId - The ID of the product to add.
     */
    function addToCart(productId) {
        const product = allProducts.find(p => p.id === productId);
        if (!product) return;

        // Check if product is already in cart
        if (cart.find(item => item.id === productId)) {
            showToast(`${product.name} is already in your cart.`);
            return;
        }

        cart.push(product);
        updateCartCount();
        showToast(`${product.name} added to cart!`);
    }

    /**
     * Updates the cart count display in the header.
     */
    function updateCartCount() {
        cartCountElement.textContent = cart.length;
    }

    /**
     * Toggles an item in the wishlist.
     * @param {string} productId - The ID of the product to toggle.
     * @param {HTMLElement} buttonElement - The button element that was clicked.
     */
    function toggleWishlist(productId, buttonElement) {
        const productIndex = wishlist.indexOf(productId);
        const product = allProducts.find(p => p.id === productId);

        if (productIndex > -1) {
            // Item is in wishlist, remove it
            wishlist.splice(productIndex, 1);
            buttonElement.classList.remove('active');
            showToast(`${product.name} removed from wishlist.`);
        } else {
            // Item is not in wishlist, add it
            wishlist.push(productId);
            buttonElement.classList.add('active');
            showToast(`${product.name} added to wishlist!`);
        }
    }

    /**
     * Opens the quick view modal with specific product details.
     * @param {object} product - The product object to display.
     */
    function openModal(product) {
        modalImage.src = product.image;
        modalImage.alt = product.name;
        modalName.textContent = product.name;
        modalPrice.textContent = `₹${product.price.toLocaleString('en-IN')}`;
        modalSpecs.innerHTML = `<p>${product.specs}</p>`;
        
        // Pass product ID to the modal's add to cart button
        modalAddToCartBtn.dataset.productId = product.id;

        modalOverlay.style.display = 'flex';
    }

    /**
     * Closes the quick view modal.
     */
    function closeModal() {
        modalOverlay.style.display = 'none';
    }

    /**
     * Filters and re-renders all product sections based on a search query.
     * @param {string} query - The search term.
     */
    function handleSearch(query) {
        const lowerCaseQuery = query.toLowerCase().trim();

        if (lowerCaseQuery === '') {
            // If search is cleared, render all products
            renderAllSections();
            return;
        }

        const filteredProducts = allProducts.filter(product => 
            product.name.toLowerCase().includes(lowerCaseQuery) ||
            product.meta.toLowerCase().includes(lowerCaseQuery)
        );

        // Display filtered products in the first grid and hide other sections for simplicity
        // A more advanced implementation could render into respective categories.
        document.querySelectorAll('.product-section').forEach((section, index) => {
            const sectionHeader = section.querySelector('.section-header');
            const grid = section.querySelector('.product-grid');
            
            if(index === 0) {
                 section.style.display = 'block';
                 sectionHeader.querySelector('.section-title').innerText = `Search Results for "${query}"`;
                 renderProducts(filteredProducts, grid.id);
            } else {
                section.style.display = 'none';
            }
        });
    }
    
    /**
     * Renders all product sections with their original data.
     */
    function renderAllSections() {
        document.querySelectorAll('.product-section').forEach(section => section.style.display = 'block');
        
        document.querySelector('#deals-section .section-title').innerText = 'Deals of the Day';

        renderProducts(allProductData.dealsOfTheDay, 'product-grid');
        renderProducts(allProductData.newArrivals, 'new-arrivals-grid');
        renderProducts(allProductData.boysItems, 'boys-items-grid');
        renderProducts(allProductData.jewelryItems, 'jewelry-items-grid');
        renderProducts(allProductData.homeDecorItems, 'home-decor-grid');
    }

    // ======================= Event Listeners ======================= //

    // Toggle mobile navigation
    mobileMenuBtn.addEventListener('click', () => mobileNav.classList.toggle('active'));

    // Main content click delegation (for opening modal and wishlist)
    document.querySelector('main').addEventListener('click', (event) => {
        const wishlistBtn = event.target.closest('.wishlist-btn');
        const productCard = event.target.closest('.product-card');

        if (wishlistBtn) {
            // Prevent modal from opening when wishlist is clicked
            event.stopPropagation(); 
            const productId = wishlistBtn.dataset.productId;
            toggleWishlist(productId, wishlistBtn);
        } else if (productCard) {
            const productId = productCard.dataset.productId;
            const product = allProducts.find(p => p.id === productId);
            if (product) {
                openModal(product);
            }
        }
    });

    // Modal Event Listeners
    modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) closeModal();
    });
    modalAddToCartBtn.addEventListener('click', (event) => {
        const productId = event.target.dataset.productId;
        addToCart(productId);
        closeModal();
    });
    
    // Search input listener
    let debounceTimer;
    searchInput.addEventListener('input', (event) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            handleSearch(event.target.value);
        }, 300); // Debounce to avoid firing on every keystroke
    });
    
    // ======================= Initial Page Load ======================= //
    renderAllSections();
});

