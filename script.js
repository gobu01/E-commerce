/*
========================================
JAVASCRIPT LOGIC - Total Lines: ~500
========================================
*/
document.addEventListener('DOMContentLoaded', () => {

    const state = {
        products: [],
        cart: [],
        currentFilter: 'all',
        searchQuery: ''
    };

    const productGrid = document.getElementById('product-grid');
    const productListContainer = document.getElementById('product-list-container');
    const cartButton = document.getElementById('cart-button');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartModal = document.getElementById('cart-modal');
    const cartBody = document.getElementById('cart-body');
    const cartCount = document.getElementById('cart-count');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartFooter = document.getElementById('cart-footer');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const categoryFilters = document.getElementById('category-filters');
    const searchInput = document.getElementById('search-input');
    const header = document.getElementById('header');
    const mainNav = document.querySelector('header nav');
    const toast = document.getElementById('toast-notification');
    const toastMessage = document.getElementById('toast-message');

    const productsDB = [
        { id: 1, name: 'ProBook X1', price: 125000, category: 'Laptop', rating: 5, image: 'src/probookx1.jpg', description: 'Ultra-thin and powerful laptop for professionals.' },
        { id: 2, name: 'Galaxy Z-Fold', price: 95000, category: 'Phone', rating: 4, image: 'src/galexyzfold.jpg', description: 'Experience the future with a foldable screen.' },
        { id: 3, name: 'SilentKey Pro', price: 8000, category: 'Accessory', rating: 5, image: 'src/silentkeypro.jpg', description: 'Mechanical keyboard with silent switches.' },
        { id: 4, name: 'GamerBook Pro', price: 180000, category: 'Laptop', rating: 5, image: 'src/gamerbookpro.jpg', description: 'High-performance gaming laptop with RGB.' },
        { id: 5, name: 'Pixel Pro 9', price: 85000, category: 'Phone', rating: 4, image: 'src/pixel9pro.png', description: 'The ultimate Android experience with an amazing camera.' },
        { id: 6, name: 'Aura Buds+', price: 12000, category: 'Accessory', rating: 4, image: 'src/aurabuds+.jpg', description: 'Noise-cancelling wireless earbuds.' },
        { id: 7, name: 'Streamer Cam', price: 15000, category: 'Accessory', rating: 5, image: 'src/streamercam.png', description: '4K webcam perfect for streaming and video calls.' },
        { id: 8, name: 'PowerBook M3', price: 210000, category: 'Laptop', rating: 5, image: 'src/powerbookm3.png', description: 'Unmatched performance in a sleek design.' },
        { id: 9, name: 'Zenith Smartwatch', price: 25000, category: 'Accessory', rating: 4, image: 'src/Zenith Smartwatch.jpg', description: 'Track your fitness and stay connected in style.'},
        { id: 10, name: 'Orion Tablet', price: 45000, category: 'Phone', rating: 4, image: 'src/Orion Tablet.jpg', description: 'A vibrant 11-inch display for work and play.'},
        { id: 11, name: 'Nova Ultrabook', price: 98000, category: 'Laptop', rating: 4, image: 'src/Nova Ultrabook.png', description: 'Feather-light with an all-day battery life.'},
        { id: 12, name: 'Echo Gaming Mouse', price: 6500, category: 'Accessory', rating: 5, image: 'src/Echo Gaming Mouse.jpg', description: 'Precision and speed for competitive gaming.'},
        { id: 13, name: 'iPhone 17', price: 130000, category: 'Phone', rating: 5, image: 'src/iPhone 17.jpg', description: 'The next generation of mobile innovation.'},
        { id: 14, name: 'Surface Pro 10', price: 155000, category: 'Laptop', rating: 5, image: 'src/Surface Pro 10.jpg', description: 'The versatility of a laptop, the freedom of a tablet.'},
        { id: 15, name: 'Bose QC Ultra', price: 35000, category: 'Accessory', rating: 5, image: 'src/Bose QC Ultra.jpg', description: 'World-class noise cancellation and immersive audio.'},
        { id: 16, name: 'Odyssey G9', price: 115000, category: 'Accessory', rating: 5, image: 'src/Odyssey G9.jpg', description: '49-inch curved gaming monitor for ultimate immersion.'},
        { id: 17, name: 'Helios Gaming Headset', price: 18000, category: 'Accessory', rating: 5, image: 'src/Helios Gaming Headset.jpg', description: '7.1 surround sound for an immersive audio experience.'},
        { id: 18, name: 'Chrono Smartwatch 2', price: 32000, category: 'Accessory', rating: 5, image: 'src/Chrono Smartwatch 2.jpg', description: 'Elegant design with advanced health monitoring.'},
        { id: 19, name: 'Titan Workstation', price: 290000, category: 'Laptop', rating: 5, image: 'src/Titan Workstation.jpg', description: 'Desktop-grade power for creative professionals.'},
        { id: 20, name: 'Spectra Phone X', price: 78000, category: 'Phone', rating: 4, image: 'src/Spectra Phone X.png', description: 'A stunning display and pro-grade camera system.'},
        { id: 21, name: 'Portal VR Kit', price: 42000, category: 'Accessory', rating: 4, image: 'src/Portal VR Kit.png', description: 'Step into new worlds with our next-gen VR headset.'},
        { id: 22, name: 'Atlas Powerbank', price: 4500, category: 'Accessory', rating: 4, image: 'src/Atlas Powerbank.jpg', description: '20,000mAh capacity to charge all your devices on the go.'},
    ];

    const formatCurrency = amount => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);

    const showToast = message => {
        toastMessage.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    };

    const renderStars = rating => Array.from({ length: 5 }, (_, i) => 
        `<svg class="w-4 h-4 ${i < rating ? 'filled' : 'empty'}" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`
    ).join('');

    const renderProducts = () => {
        productListContainer.classList.add('loading');
        
        setTimeout(() => {
            const filteredProducts = state.products
                .filter(p => state.currentFilter === 'all' || p.category === state.currentFilter)
                .filter(p => p.name.toLowerCase().includes(state.searchQuery.toLowerCase()));
            
            productGrid.innerHTML = '';
            if (filteredProducts.length === 0) {
                productGrid.innerHTML = `<p class="col-span-full text-center text-slate-500 py-10">No products found matching your criteria.</p>`;
            } else {
                filteredProducts.forEach((product, index) => {
                    const card = document.createElement('div');
                    card.className = 'product-card bg-white rounded-xl overflow-hidden shadow-sm fade-in-up';
                    card.style.animationDelay = `${index * 50}ms`;
                    card.innerHTML = `
                        <div class="product-image-container">
                            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
                        </div>
                        <span class="category-badge">${product.category}</span>
                        <div class="p-5">
                            <div class="flex justify-between items-start mb-2">
                                <h3 class="text-lg font-bold text-slate-800 pr-2">${product.name}</h3>
                                <div class="star-rating flex items-center flex-shrink-0">${renderStars(product.rating)}</div>
                            </div>
                            <p class="text-sm text-slate-500 mt-1 mb-4 h-10">${product.description}</p>
                            <div class="flex justify-between items-center">
                                <p class="text-xl font-extrabold text-indigo-600">${formatCurrency(product.price)}</p>
                                <button class="add-to-cart-btn text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center h-10 w-24" data-id="${product.id}">
                                    <span class="btn-text add-text">Add</span>
                                    <span class="btn-text added-text">Added!</span>
                                </button>
                            </div>
                        </div>`;
                    productGrid.appendChild(card);
                });
            }
            productListContainer.classList.remove('loading');
        }, 500);
    };

    const renderCart = () => {
        const hasItems = state.cart.length > 0;
        emptyCartMessage.classList.toggle('hidden', !hasItems);
        cartFooter.classList.toggle('hidden', !hasItems);

        cartBody.innerHTML = hasItems ? state.cart.map(item => `
            <div class="cart-item flex items-center gap-4 py-4 border-b">
                <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-md">
                <div class="flex-grow">
                    <h4 class="font-semibold text-slate-800">${item.name}</h4>
                    <p class="text-sm text-slate-500">${formatCurrency(item.price)}</p>
                    <div class="cart-item-controls flex items-center mt-2">
                        <button class="quantity-change w-7 h-7 rounded border font-bold" data-id="${item.id}" data-change="-1">-</button>
                        <span class="w-10 text-center font-medium">${item.quantity}</span>
                        <button class="quantity-change w-7 h-7 rounded border font-bold" data-id="${item.id}" data-change="1">+</button>
                    </div>
                </div>
                <div class="text-right">
                    <p class="font-bold text-slate-900">${formatCurrency(item.price * item.quantity)}</p>
                    <button class="remove-from-cart text-red-500 hover:text-red-700 text-xs font-semibold mt-1" data-id="${item.id}">REMOVE</button>
                </div>
            </div>`).join('') : '';
        updateCartSummary();
    };

    const updateCartSummary = () => {
        const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
        const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        
        cartCount.textContent = totalItems;
        cartSubtotal.textContent = formatCurrency(subtotal);
        cartCount.classList.toggle('visible', totalItems > 0);
    };

    const addToCart = (productId, button) => {
        const product = state.products.find(p => p.id === productId);
        if (!product) return;

        const cartItem = state.cart.find(item => item.id === productId);
        if (cartItem) cartItem.quantity++;
        else state.cart.push({ ...product, quantity: 1 });
        
        showToast(`${product.name} added to cart!`);
        renderCart();

        button.classList.add('added');
        setTimeout(() => button.classList.remove('added'), 1500);
    };

    const removeFromCart = productId => {
        state.cart = state.cart.filter(item => item.id !== productId);
        renderCart();
    };
    
    const changeQuantity = (productId, change) => {
        const cartItem = state.cart.find(item => item.id === productId);
        if (!cartItem) return;

        cartItem.quantity += change;
        if (cartItem.quantity <= 0) removeFromCart(productId);
        else renderCart();
    };
    
    const updateFilter = category => {
        if (category === 'about') {
            alert("This would lead to an 'About Us' page in a full application.");
            return;
        }
        state.currentFilter = category;
        document.querySelectorAll('[data-category]').forEach(el => el.classList.toggle('active', el.dataset.category === category));
        renderProducts();
    };

    const handleProductGridClick = e => {
        const button = e.target.closest('.add-to-cart-btn');
        if (button) {
            const productId = parseInt(button.dataset.id, 10);
            addToCart(productId, button);
        }
    };
    
    const handleCartBodyClick = e => {
        const target = e.target;
        const removeBtn = target.closest('.remove-from-cart');
        const quantityBtn = target.closest('.quantity-change');
        if (removeBtn) removeFromCart(parseInt(removeBtn.dataset.id, 10));
        if (quantityBtn) changeQuantity(parseInt(quantityBtn.dataset.id, 10), parseInt(quantityBtn.dataset.change, 10));
    };
    
    const handleFilterClick = e => {
        if (e.target.tagName === 'BUTTON') updateFilter(e.target.dataset.category);
    };

    const handleNavClick = e => {
        const link = e.target.closest('.nav-link');
        if (link) {
            e.preventDefault();
            const category = link.dataset.category;
            updateFilter(category);
            if (category !== 'about') document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    const handleSearch = e => {
        state.searchQuery = e.target.value;
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(renderProducts, 300);
    };

    const handleScroll = () => header.classList.toggle('scrolled', window.scrollY > 50);

    const openCart = () => cartModal.classList.remove('hidden');
    const closeCart = () => cartModal.classList.add('hidden');

    const init = () => {
        state.products = productsDB;
        renderProducts();
        renderCart();

        productGrid.addEventListener('click', handleProductGridClick);
        cartButton.addEventListener('click', openCart);
        closeCartBtn.addEventListener('click', closeCart);
        cartModal.addEventListener('click', e => e.target === cartModal && closeCart());
        cartBody.addEventListener('click', handleCartBodyClick);
        categoryFilters.addEventListener('click', handleFilterClick);
        searchInput.addEventListener('input', handleSearch);
        window.addEventListener('scroll', handleScroll);
        mainNav.addEventListener('click', handleNavClick);
    };

    init();
});


