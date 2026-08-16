/* ================================
   VELMORA - MAIN SCRIPT
================================= */

// Sample Products Database
const products = [
    // Fashion
    {
        id: 1,
        name: "Premium Sneakers",
        category: "Fashion",
        price: 129.99,
        rating: 4.8,
        reviews: 324,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect fill='%23222' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='40' fill='%23888' text-anchor='middle' dominant-baseline='middle'%3E👟%3C/text%3E%3C/svg%3E"
    },
    {
        id: 2,
        name: "Classic Backpack",
        category: "Fashion",
        price: 89.99,
        rating: 4.6,
        reviews: 218,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect fill='%23222' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='40' fill='%23888' text-anchor='middle' dominant-baseline='middle'%3E🎒%3C/text%3E%3C/svg%3E"
    },
    {
        id: 3,
        name: "Casual T-Shirt",
        category: "Fashion",
        price: 34.99,
        rating: 4.5,
        reviews: 156,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect fill='%23222' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='40' fill='%23888' text-anchor='middle' dominant-baseline='middle'%3E👕%3C/text%3E%3C/svg%3E"
    },
    {
        id: 4,
        name: "Leather Belt",
        category: "Fashion",
        price: 44.99,
        rating: 4.7,
        reviews: 92,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect fill='%23222' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='40' fill='%23888' text-anchor='middle' dominant-baseline='middle'%3E⌛%3C/text%3E%3C/svg%3E"
    },
    // Beauty
    {
        id: 5,
        name: "Skincare Set",
        category: "Beauty",
        price: 79.99,
        rating: 4.9,
        reviews: 412,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect fill='%23222' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='40' fill='%23888' text-anchor='middle' dominant-baseline='middle'%3E🧴%3C/text%3E%3C/svg%3E"
    },
    {
        id: 6,
        name: "Lipstick Collection",
        category: "Beauty",
        price: 49.99,
        rating: 4.7,
        reviews: 234,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect fill='%23222' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='40' fill='%23888' text-anchor='middle' dominant-baseline='middle'%3E💄%3C/text%3E%3C/svg%3E"
    },
    {
        id: 7,
        name: "Hair Care Kit",
        category: "Beauty",
        price: 59.99,
        rating: 4.6,
        reviews: 178,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect fill='%23222' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='40' fill='%23888' text-anchor='middle' dominant-baseline='middle'%3E💆%3C/text%3E%3C/svg%3E"
    },
    {
        id: 8,
        name: "Perfume",
        category: "Beauty",
        price: 69.99,
        rating: 4.8,
        reviews: 301,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect fill='%23222' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='40' fill='%23888' text-anchor='middle' dominant-baseline='middle'%3E💐%3C/text%3E%3C/svg%3E"
    },
    // Gadgets
    {
        id: 9,
        name: "Wireless Headphones",
        category: "Gadgets",
        price: 149.99,
        rating: 4.9,
        reviews: 523,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect fill='%23222' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='40' fill='%23888' text-anchor='middle' dominant-baseline='middle'%3E🎧%3C/text%3E%3C/svg%3E"
    },
    {
        id: 10,
        name: "Smart Watch",
        category: "Gadgets",
        price: 199.99,
        rating: 4.7,
        reviews: 401,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect fill='%23222' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='40' fill='%23888' text-anchor='middle' dominant-baseline='middle'%3E⌚%3C/text%3E%3C/svg%3E"
    },
    {
        id: 11,
        name: "Phone Stand",
        category: "Gadgets",
        price: 24.99,
        rating: 4.5,
        reviews: 198,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect fill='%23222' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='40' fill='%23888' text-anchor='middle' dominant-baseline='middle'%3E📱%3C/text%3E%3C/svg%3E"
    },
    {
        id: 12,
        name: "USB-C Cable",
        category: "Gadgets",
        price: 12.99,
        rating: 4.6,
        reviews: 342,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect fill='%23222' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='40' fill='%23888' text-anchor='middle' dominant-baseline='middle'%3E🔌%3C/text%3E%3C/svg%3E"
    },
    // Home
    {
        id: 13,
        name: "Desk Lamp",
        category: "Home",
        price: 54.99,
        rating: 4.8,
        reviews: 267,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect fill='%23222' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='40' fill='%23888' text-anchor='middle' dominant-baseline='middle'%3E💡%3C/text%3E%3C/svg%3E"
    },
    {
        id: 14,
        name: "Storage Organizer",
        category: "Home",
        price: 39.99,
        rating: 4.6,
        reviews: 145,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect fill='%23222' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='40' fill='%23888' text-anchor='middle' dominant-baseline='middle'%3E📦%3C/text%3E%3C/svg%3E"
    },
    {
        id: 15,
        name: "Plant Pot",
        category: "Home",
        price: 29.99,
        rating: 4.7,
        reviews: 189,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect fill='%23222' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='40' fill='%23888' text-anchor='middle' dominant-baseline='middle'%3E🪴%3C/text%3E%3C/svg%3E"
    },
    {
        id: 16,
        name: "Coffee Maker",
        category: "Home",
        price: 79.99,
        rating: 4.9,
        reviews: 456,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect fill='%23222' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='40' fill='%23888' text-anchor='middle' dominant-baseline='middle'%3E☕%3C/text%3E%3C/svg%3E"
    }
];

// Global State
let cart = [];
let wishlist = [];
let currentPage = 'home'; // Track current page

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    loadWishlist();
    setupEventListeners();
    detectCurrentPage();
    renderFeaturedProducts();
});

// ================================
// UTILITY FUNCTIONS
// ================================

function detectCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('fashion.html')) currentPage = 'fashion';
    else if (path.includes('beauty.html')) currentPage = 'beauty';
    else if (path.includes('gadgets.html')) currentPage = 'gadgets';
    else if (path.includes('home.html')) currentPage = 'home';
    else if (path.includes('shop.html')) currentPage = 'shop';
    else currentPage = 'index';
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    if (toastMessage) toastMessage.textContent = message;
    if (toast) {
        toast.classList.add('active');
        setTimeout(() => toast.classList.remove('active'), 3000);
    }
}

function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price);
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;
    let stars = '★'.repeat(fullStars);
    if (hasHalf) stars += '½';
    return stars;
}

function getProductsByCategory(category) {
    if (category === 'All' || category === 'Featured') {
        return products.slice(0, 8);
    }
    return products.filter(p => p.category === category);
}

// ================================
// PRODUCT RENDERING
// ================================

function renderProduct(product) {
    const isInWishlist = wishlist.some(item => item.id === product.id);
    
    return `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <button class="wishlist-btn ${isInWishlist ? 'active' : ''}" 
                        data-product-id="${product.id}"
                        aria-label="Add to wishlist">
                    ${isInWishlist ? '❤' : '♡'}
                </button>
            </div>
            <div class="product-info">
                <p class="product-category">${product.category}</p>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">
                    ${generateStars(product.rating)} (${product.reviews})
                </div>
                <div class="product-footer">
                    <span class="product-price">${formatPrice(product.price)}</span>
                    <button class="add-to-cart-btn" data-product-id="${product.id}">
                        Add
                    </button>
                </div>
            </div>
        </div>
    `;
}

function renderFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    if (!container) return;
    
    const featured = products.slice(0, 8);
    container.innerHTML = featured.map(renderProduct).join('');
    attachProductListeners(container);
}

function renderProductGrid(containerSelector, products) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    
    if (products.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">No products found</p>';
        return;
    }
    
    container.innerHTML = products.map(renderProduct).join('');
    attachProductListeners(container);
}

function attachProductListeners(container) {
    // Add to Cart
    container.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(btn.dataset.productId);
            const product = products.find(p => p.id === productId);
            if (product) {
                addToCart(product);
                showToast(`${product.name} added to cart!`);
            }
        });
    });

    // Wishlist
    container.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const productId = parseInt(btn.dataset.productId);
            toggleWishlist(productId);
        });
    });
}

// ================================
// CART FUNCTIONS
// ================================

function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartUI();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

function updateCartQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, quantity);
        saveCart();
        updateCartUI();
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem('cart');
    cart = saved ? JSON.parse(saved) : [];
    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }

    const cartItemsContainer = document.getElementById('cartItems');
    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="cart-empty"><p>Your cart is empty</p></div>';
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
                <div class="cart-item-quantity">
                    <button data-product-id="${item.id}" class="qty-btn qty-minus">−</button>
                    <span>${item.quantity}</span>
                    <button data-product-id="${item.id}" class="qty-btn qty-plus">+</button>
                </div>
                <div class="cart-item-remove" data-product-id="${item.id}">Remove</div>
            </div>
        </div>
    `).join('');

    updateCartTotal();

    // Attach listeners
    cartItemsContainer.querySelectorAll('.qty-plus').forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = parseInt(btn.dataset.productId);
            const item = cart.find(i => i.id === productId);
            if (item) updateCartQuantity(productId, item.quantity + 1);
        });
    });

    cartItemsContainer.querySelectorAll('.qty-minus').forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = parseInt(btn.dataset.productId);
            const item = cart.find(i => i.id === productId);
            if (item) updateCartQuantity(productId, item.quantity - 1);
        });
    });

    cartItemsContainer.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = parseInt(btn.dataset.productId);
            removeFromCart(productId);
        });
    });
}

function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const cartTotal = document.getElementById('cartTotal');
    if (cartTotal) cartTotal.textContent = formatPrice(total);
}

// ================================
// WISHLIST FUNCTIONS
// ================================

function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = wishlist.findIndex(item => item.id === productId);
    
    if (existingIndex > -1) {
        wishlist.splice(existingIndex, 1);
        showToast('Removed from wishlist');
    } else {
        wishlist.push(product);
        showToast(`${product.name} added to wishlist!`);
    }

    saveWishlist();
    updateWishlistUI();
}

function saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function loadWishlist() {
    const saved = localStorage.getItem('wishlist');
    wishlist = saved ? JSON.parse(saved) : [];
}

function updateWishlistUI() {
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        const productId = parseInt(btn.dataset.productId);
        const isInWishlist = wishlist.some(item => item.id === productId);
        
        btn.classList.toggle('active', isInWishlist);
        btn.textContent = isInWishlist ? '❤' : '♡';
    });
}

// ================================
// SEARCH FUNCTIONALITY
// ================================

function searchProducts(query) {
    const lowerQuery = query.toLowerCase();
    return products.filter(p =>
        p.name.toLowerCase().includes(lowerQuery) ||
        p.category.toLowerCase().includes(lowerQuery)
    );
}

// ================================
// EVENT LISTENERS
// ================================

function setupEventListeners() {
    // Mobile Menu
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn?.addEventListener('click', () => {
        navLinks?.classList.toggle('active');
    });

    // Search
    const searchBtn = document.getElementById('searchBtn');
    const searchPanel = document.getElementById('searchPanel');
    const closeSearch = document.getElementById('closeSearch');
    const searchInput = document.getElementById('searchInput');

    searchBtn?.addEventListener('click', () => {
        searchPanel?.classList.add('active');
        searchInput?.focus();
    });

    closeSearch?.addEventListener('click', () => {
        searchPanel?.classList.remove('active');
    });

    searchInput?.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchPanel?.classList.remove('active');
        }
    });

    // Cart
    const cartBtn = document.getElementById('cartBtn');
    const cartDrawer = document.getElementById('cartDrawer');
    const closeCart = document.getElementById('closeCart');
    const overlay = document.getElementById('overlay');
    const checkoutBtn = document.getElementById('checkoutBtn');

    cartBtn?.addEventListener('click', () => {
        cartDrawer?.classList.add('active');
        overlay?.classList.add('active');
    });

    closeCart?.addEventListener('click', () => {
        cartDrawer?.classList.remove('active');
        overlay?.classList.remove('active');
    });

    overlay?.addEventListener('click', () => {
        cartDrawer?.classList.remove('active');
        overlay?.classList.remove('active');
    });

    checkoutBtn?.addEventListener('click', () => {
        if (cart.length === 0) {
            showToast('Cart is empty');
            return;
        }
        showToast('Proceeding to checkout...');
        setTimeout(() => {
            alert(`Order Total: ${formatPrice(cart.reduce((sum, item) => sum + (item.price * item.quantity), 0))}\n\nThank you for shopping at Velmora!`);
        }, 500);
    });

    // Wishlist
    const wishlistBtn = document.getElementById('wishlistBtn');
    wishlistBtn?.addEventListener('click', () => {
        if (wishlist.length === 0) {
            showToast('No items in wishlist');
        } else {
            showToast(`${wishlist.length} items in wishlist`);
        }
    });

    // Navigation Links - Update Active State
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(link => {
        if (link.href.includes(window.location.pathname)) {
            link.classList.add('active');
        }
    });
}

// ================================
// CATEGORY PAGE FUNCTIONS
// ================================

if (currentPage === 'fashion') {
    document.addEventListener('DOMContentLoaded', () => {
        const products = getProductsByCategory('Fashion');
        renderProductGrid('.products-grid', products);
    });
}

if (currentPage === 'beauty') {
    document.addEventListener('DOMContentLoaded', () => {
        const products = getProductsByCategory('Beauty');
        renderProductGrid('.products-grid', products);
    });
}

if (currentPage === 'gadgets') {
    document.addEventListener('DOMContentLoaded', () => {
        const products = getProductsByCategory('Gadgets');
        renderProductGrid('.products-grid', products);
    });
}

if (currentPage === 'home') {
    document.addEventListener('DOMContentLoaded', () => {
        const products = getProductsByCategory('Home');
        renderProductGrid('.products-grid', products);
    });
}

if (currentPage === 'shop') {
    document.addEventListener('DOMContentLoaded', () => {
        const shopProductGrid = document.getElementById('shopProductGrid');
        if (shopProductGrid) {
            renderProductGrid('#shopProductGrid', products);
        }

        // Shop page specific features
        const sortSelect = document.getElementById('sortProducts');
        const shopSearch = document.getElementById('shopSearch');
        const categoryFilters = document.querySelectorAll('.category-filter');

        sortSelect?.addEventListener('change', (e) => {
            const sorted = [...products];
            switch(e.target.value) {
                case 'price-low':
                    sorted.sort((a, b) => a.price - b.price);
                    break;
                case 'price-high':
                    sorted.sort((a, b) => b.price - a.price);
                    break;
                case 'rating':
                    sorted.sort((a, b) => b.rating - a.rating);
                    break;
                case 'name':
                    sorted.sort((a, b) => a.name.localeCompare(b.name));
                    break;
            }
            renderProductGrid('#shopProductGrid', sorted);
        });

        shopSearch?.addEventListener('input', (e) => {
            const results = searchProducts(e.target.value);
            renderProductGrid('#shopProductGrid', results);
        });

        categoryFilters.forEach(btn => {
            btn.addEventListener('click', () => {
                categoryFilters.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const category = btn.dataset.category;
                const filtered = category === 'All' 
                    ? products 
                    : products.filter(p => p.category === category);
                renderProductGrid('#shopProductGrid', filtered);
            });
        });
    });
}
