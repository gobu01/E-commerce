document.addEventListener('DOMContentLoaded', () => {

    // --- DATA ---
    const featuredProducts = [
        { id: 1, name: 'Royal Blue Banarasi Saree', price: '14,999', image: 'https://placehold.co/400x500/000080/FFFFFF?text=Banarasi+Saree' },
        { id: 2, name: 'Handcrafted Kundan Necklace', price: '8,500', image: 'https://placehold.co/400x500/FFD700/000000?text=Kundan+Set' },
        { id: 3, name: 'Chikankari Embroidered Kurta', price: '4,250', image: 'https://placehold.co/400x500/ADD8E6/000000?text=Chikankari+Kurta' },
        { id: 4, name: 'Paisley Print Pashmina Shawl', price: '6,800', image: 'https://placehold.co/400x500/800080/FFFFFF?text=Pashmina+Shawl' }
    ];
    
    const newArrivals = [
        { id: 5, name: 'Emerald Green Lehenga Choli', price: '22,500', image: 'https://placehold.co/400x500/006A4E/FFFFFF?text=Lehenga' },
        { id: 6, name: 'Classic Jodhpuri Suit', price: '18,999', image: 'https://placehold.co/400x500/36454F/FFFFFF?text=Jodhpuri' },
        { id: 7, name: 'Antique Temple Jhumkas', price: '9,750', image: 'https://placehold.co/400x500/B87333/FFFFFF?text=Jhumkas' },
        { id: 8, name: 'Printed Silk Scarf', price: '2,100', image: 'https://placehold.co/400x500/C71585/FFFFFF?text=Silk+Scarf' }
    ];

    // --- STATE ---
    let cartItemCount = 0;

    // --- REFERENCES ---
    const productGrid = document.getElementById('product-grid');
    const newArrivalsGrid = document.getElementById('new-arrivals-grid');
    const cartCountElement = document.getElementById('cart-count');
    const toastContainer = document.getElementById('toast-container');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');

    // --- FUNCTIONS ---
    
    /**
     * Renders product cards into a specified grid.
     * @param {HTMLElement} gridElement - The grid to render products in.
     * @param {Array} productList - The list of products to render.
     */
    function renderProducts(gridElement, productList) {
        gridElement.innerHTML = productList.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-card-content">
                    <h3>${product.name}</h3>
                    <p>₹${product.price}</p>
                    <button data-product-id="${product.id}" class="add-to-cart-btn">
                        Add to Cart
                    </button>
                </div>
            </div>
        `).join('');
    }

    /**
     * Shows a notification toast message.
     * @param {string} message - The message to display.
     */
    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        toastContainer.appendChild(toast);
        
        setTimeout(() => toast.remove(), 3000);
    }
    
    /**
     * Handles clicks within the main content area for adding items to cart.
     */
    function handleMainClick(event) {
        const button = event.target.closest('.add-to-cart-btn');
        if (button && !button.disabled) {
            cartItemCount++;
            cartCountElement.textContent = cartItemCount;
            
            const cartButton = document.getElementById('cart-button');
            cartButton.style.transform = 'scale(1.25)';
            setTimeout(() => { cartButton.style.transform = 'scale(1)'; }, 200);

            showToast('Item added to your cart!');
            
            button.textContent = 'Added!';
            button.disabled = true;
        }
    }

    /**
     * Toggles the mobile navigation menu.
     */
    function toggleMobileMenu() {
        mobileNav.classList.toggle('active');
    }
    
    // --- INITIALIZATION & EVENT LISTENERS ---
    renderProducts(productGrid, featuredProducts);
    renderProducts(newArrivalsGrid, newArrivals);
    
    document.querySelector('main').addEventListener('click', handleMainClick);
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
});