// Shake Villa Menu Data - Auto Image Generator Unsplash API ke sath
const menuItems = [
  // Left Column
  { id: 1, name: "Butter Scotch", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90" },
  { id: 2, name: "Blueberry", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90" },
  { id: 3, name: "Strawberry", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90" },
  { id: 4, name: "Vanilla", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90" },
  { id: 5, name: "Litchi", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90" },
  { id: 6, name: "Mango", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90" },
  { id: 7, name: "Kiwi", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90" },
  { id: 8, name: "Green Apple", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90" },
  { id: 9, name: "Black Currant", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90" },
  { id: 10, name: "Banana", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90" },
  { id: 11, name: "Mixed Fruit", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90" },
  { id: 12, name: "Guava", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90" },
  { id: 13, name: "Pineapple", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90" },
  { id: 14, name: "Custard", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90" },
  { id: 15, name: "Choco Chips", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90" },
  { id: 16, name: "Kitkat", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90" },
  { id: 17, name: "Chocolate", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90" },

  // Bottom Section
  { id: 18, name: "Pista", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90" },
  { id: 19, name: "Badam", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90" },
  { id: 20, name: "Kaser Badam", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90" },
  { id: 21, name: "Kesar Syrup", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90" },
  { id: 22, name: "Rasmalai", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90" },
  { id: 23, name: "Dubble Chocolate", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90" },

  // Right Column
  { id: 24, name: "Dasheri Aam", category: "Thick Shake", priceSmall: "₹90", priceLarge: "₹110" },
  { id: 25, name: "Crush Blueberry", category: "Thick Shake", priceSmall: "₹90", priceLarge: "₹110" },
  { id: 26, name: "Caramel Salted", category: "Thick Shake", priceSmall: "₹90", priceLarge: "₹110" },
  { id: 27, name: "English Toffee", category: "Thick Shake", priceSmall: "₹90", priceLarge: "₹110" },
  { id: 28, name: "Belgian Dark Chocolate", category: "Thick Shake", priceSmall: "₹90", priceLarge: "₹110" },
  { id: 29, name: "Tropical Trio", category: "Thick Shake", priceSmall: "₹90", priceLarge: "₹110" },
  { id: 30, name: "Strawberry Swirl", category: "Thick Shake", priceSmall: "₹90", priceLarge: "₹110" },
  { id: 31, name: "Rose Faluda Drizzle", category: "Thick Shake", priceSmall: "₹90", priceLarge: "₹110" },
  { id: 32, name: "Masala Badam", category: "Thick Shake", priceSmall: "₹90", priceLarge: "₹110" },
  { id: 33, name: "Dry Choco Brownie", category: "Thick Shake", priceSmall: "₹100", priceLarge: "₹120" },
  { id: 34, name: "Peanut Nutella Brownie", category: "Thick Shake", priceSmall: "₹100", priceLarge: "₹120" },
  { id: 35, name: "Redvelvet Cheese", category: "Thick Shake", priceSmall: "₹140", priceLarge: "₹120" },
  { id: 36, name: "Kitkat Brownie", category: "Thick Shake", priceSmall: "₹140", priceLarge: "₹120" },
  { id: 37, name: "Oreo Brownie", category: "Thick Shake", priceSmall: "₹140", priceLarge: "₹120" },
  { id: 38, name: "Chocolate Brownie", category: "Thick Shake", priceSmall: "₹140", priceLarge: "₹120" },
  { id: 39, name: "Mung Fali Brownie", category: "Thick Shake", priceSmall: "₹140", priceLarge: "₹120" },
  { id: 40, name: "Cookie Caramel Brownie", category: "Thick Shake", priceSmall: "₹150", priceLarge: "₹170" },
  { id: 41, name: "Shakevilla Premium", category: "Thick Shake", priceSmall: "₹160", priceLarge: "₹180" }
];

const container = document.getElementById('menu-container');

function displayItems(items) {
  if (!container) return;
  
  container.innerHTML = items.map(item => {
    // Har item ke naam ke hisab se alag photo load karne ke liye dynamic link
    const dynamicImg = `https://source.unsplash.com/400x300/?${encodeURIComponent(item.name + " milkshake")}`;
    
    return `
      <div class="card">
        <img src="${dynamicImg}" alt="${item.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400'" />
        <div class="card-details">
          <div class="card-title">${item.name}</div>
          <div class="card-bottom">
            <div class="price">
              <span style="font-size:0.8rem; color:#ff4e50; font-weight:bold;">S:</span> ${item.priceSmall} | 
              <span style="font-size:0.8rem; color:#ff4e50; font-weight:bold;">L:</span> ${item.priceLarge}
            </div>
            <button class="order-btn">Order</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function filterCategory(cat) {
  const buttons = document.querySelectorAll('.cat-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  if (window.event && window.event.target) {
    window.event.target.classList.add('active');
  }

  if (cat === 'all') {
    displayItems(menuItems);
  } else {
    const filtered = menuItems.filter(item => item.category.toLowerCase() === cat.toLowerCase());
    displayItems(filtered);
  }
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
  displayItems(menuItems);
});
