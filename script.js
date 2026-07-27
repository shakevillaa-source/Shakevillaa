// Shake Villa Menu Data extracted from image
const menuItems = [
  // Left Column (70 / 90)
  { id: 1, name: "Butter Scotch", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400" },
  { id: 2, name: "Blueberry", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90", img: "https://images.unsplash.com/photo-1553787499-6f9133860278?w=400" },
  { id: 3, name: "Strawberry", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
  { id: 4, name: "Vanilla", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400" },
  { id: 5, name: "Litchi", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400" },
  { id: 6, name: "Mango", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
  { id: 7, name: "Kiwi", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400" },
  { id: 8, name: "Green Apple", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400" },
  { id: 9, name: "Black Currant", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90", img: "https://images.unsplash.com/photo-1553787499-6f9133860278?w=400" },
  { id: 10, name: "Banana", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400" },
  { id: 11, name: "Mixed Fruit", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
  { id: 12, name: "Guava", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90", img: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400" },
  { id: 13, name: "Pineapple", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
  { id: 14, name: "Custard", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400" },
  { id: 15, name: "Choco Chips", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400" },
  { id: 16, name: "Kitkat", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400" },
  { id: 17, name: "Chocolate", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400" },

  // Bottom Section (70 / 90)
  { id: 18, name: "Pista", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90", img: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=400" },
  { id: 19, name: "Badam", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90", img: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=400" },
  { id: 20, name: "Kaser Badam", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90", img: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=400" },
  { id: 21, name: "Kesar Syrup", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90", img: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=400" },
  { id: 22, name: "Rasmalai", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90", img: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=400" },
  { id: 23, name: "Dubble Chocolate", category: "Thick Shake", priceSmall: "₹70", priceLarge: "₹90", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400" },

  // Right Column (90 / 110 & Premium Options)
  { id: 24, name: "Dasheri Aam", category: "Thick Shake", priceSmall: "₹90", priceLarge: "₹110", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
  { id: 25, name: "Crush Blueberry", category: "Thick Shake", priceSmall: "₹90", priceLarge: "₹110", img: "https://images.unsplash.com/photo-1553787499-6f9133860278?w=400" },
  { id: 26, name: "Caramel Salted", category: "Thick Shake", priceSmall: "₹90", priceLarge: "₹110", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400" },
  { id: 27, name: "English Toffee", category: "Thick Shake", priceSmall: "₹90", priceLarge: "₹110", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400" },
  { id: 28, name: "Belgian Dark Chocolate", category: "Thick Shake", priceSmall: "₹90", priceLarge: "₹110", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400" },
  { id: 29, name: "Tropical Trio", category: "Thick Shake", priceSmall: "₹90", priceLarge: "₹110", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
  { id: 30, name: "Strawberry Swirl", category: "Thick Shake", priceSmall: "₹90", priceLarge: "₹110", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
  { id: 31, name: "Rose Faluda Drizzle", category: "Thick Shake", priceSmall: "₹90", priceLarge: "₹110", img: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=400" },
  { id: 32, name: "Masala Badam", category: "Thick Shake", priceSmall: "₹90", priceLarge: "₹110", img: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=400" },
  { id: 33, name: "Dry Choco Brownie", category: "Thick Shake", priceSmall: "₹100", priceLarge: "₹120", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400" },
  { id: 34, name: "Peanut Nutella Brownie", category: "Thick Shake", priceSmall: "₹100", priceLarge: "₹120", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400" },
  { id: 35, name: "Redvelvet Cheese", category: "Thick Shake", priceSmall: "₹140", priceLarge: "₹120", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400" },
  { id: 36, name: "Kitkat Brownie", category: "Thick Shake", priceSmall: "₹140", priceLarge: "₹120", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400" },
  { id: 37, name: "Oreo Brownie", category: "Thick Shake", priceSmall: "₹140", priceLarge: "₹120", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400" },
  { id: 38, name: "Chocolate Brownie", category: "Thick Shake", priceSmall: "₹140", priceLarge: "₹120", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400" },
  { id: 39, name: "Mung Fali Brownie", category: "Thick Shake", priceSmall: "₹140", priceLarge: "₹120", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400" },
  { id: 40, name: "Cookie Caramel Brownie", category: "Thick Shake", priceSmall: "₹150", priceLarge: "₹170", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400" },
  { id: 41, name: "Shakevilla Premium", category: "Thick Shake", priceSmall: "₹160", priceLarge: "₹180", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400" }
];

const container = document.getElementById('menu-container');

function displayItems(items) {
  if (!container) return;
  
  container.innerHTML = items.map(item => `
    <div class="card">
      <img src="${item.img}" alt="${item.name}" loading="lazy" />
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
  `).join('');
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
