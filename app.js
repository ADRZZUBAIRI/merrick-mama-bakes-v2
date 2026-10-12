/**
 * MERRICK MAMA BAKES — Artisanal Bakery & Workshop System
 * "Made by a Mama for Your Family"
 */

// 1. BAKERY PRODUCTS
const BAKERY_ITEMS = [
  {
    id: 'buttermilk-sourdough',
    name: 'The Buttermilk Sourdough',
    category: 'breads',
    price: 12.00,
    priceLabel: '$12',
    unit: 'Fresh Loaf (approx. 850g)',
    image: 'images/buttermilk-sandwich-loaf.jpg',
    description: 'Our most beloved everyday family loaf. Cultured organic buttermilk gives the crumb a pillowy softness and subtle creamy richness, making it ideal for kid school lunches, French toast, or warm toasted sandwiches.',
    ingredients: 'Certified Organic Unbleached Wheat Flour, Filtered Water, Cultured Whole Buttermilk, Mature Wild Sourdough Culture, Unrefined Sea Salt.',
    storage: 'Store cut-side down on a wooden breadboard for 4–5 days, or slice and freeze flat in parchment for instant toast.',
    revival: 'Mist lightly with water and warm in a 375°F oven for 6–8 minutes to bring back that crackly bakery crust.'
  },
  {
    id: 'country-boule',
    name: 'Heritage Country Boule',
    category: 'breads',
    price: 11.00,
    priceLabel: '$11',
    unit: 'Round Loaf (approx. 900g)',
    image: 'images/hero-spread.jpg',
    description: 'The rustic sourdough purist’s dream. Crafted with organic bread flour and stoneground whole rye, cold-proofed in cane bannetons for 36 hours and baked in scorching Dutch ovens for a blistered ear and deep wild tang.',
    ingredients: 'Organic Unbleached Wheat Flour, Filtered Water, Stoneground Organic Rye, Mature Sourdough Culture, Pure Sea Salt.',
    storage: 'Keep in paper bag or linen wrap at room temperature. Slices freeze beautifully for months.',
    revival: 'Slice thick and griddle in a cast-iron skillet with salted butter for the ultimate crunch.'
  },
  {
    id: 'nostalgic-pop-tarts',
    name: 'Handmade Sourdough Toaster Pastries',
    category: 'treats',
    price: 18.00,
    priceLabel: '$18',
    unit: 'Box of 4 Pastries',
    image: 'images/sourdough-pop-tarts.jpg',
    description: 'A cleaner, wholesome homage to childhood Saturday mornings. Flaky sourdough pastry filled with slow-simmered organic strawberry fruit reduction or Ceylon brown sugar cinnamon butter, finished with natural fruit glaze.',
    ingredients: 'Organic Flour, Grass-Fed Pasture Butter, Sourdough Starter, Organic Cane Sugar, Real Strawberries or Ceylon Cinnamon + Dark Brown Sugar, Madagascar Vanilla, Sea Salt.',
    storage: 'Keeps on the counter for 4 days in an airtight container.',
    revival: 'Warm in a toaster oven on medium-low for 3 minutes for that fresh-baked pastry aroma.'
  },
  {
    id: 'cinnamon-rolls',
    name: 'Skillet Sourdough Cinnamon Rolls',
    category: 'sweets',
    price: 22.00,
    priceLabel: '$22',
    unit: 'Pan of 6 Giant Rolls',
    image: 'images/sourdough-cinnamon-rolls.jpg',
    description: 'Pillowy, pull-apart sourdough enriched with farm milk and pasture eggs, swirled with fragrant Korintje cinnamon and organic butter, crowned with molten vanilla bean cream cheese icing.',
    ingredients: 'Organic Flour, Whole Milk, Grass-Fed Butter, Sourdough Starter, Pasture Eggs, Organic Cane Sugar, Korintje Cinnamon, Cream Cheese, Real Vanilla Bean Paste, Sea Salt.',
    storage: 'Best enjoyed weekend morning-of. Keeps at room temp for 3 days or refrigerated for 5 days.',
    revival: 'Warm the foil pan in a 350°F oven for 8 minutes until the cream cheese frosting is gooey and melted.'
  },
  {
    id: 'rosemary-focaccia',
    name: 'Garden Rosemary & Garlic Focaccia',
    category: 'savory',
    price: 14.00,
    priceLabel: '$14',
    unit: 'Full 9x13" Sheet',
    image: 'images/artisan-focaccia.jpg',
    description: 'Slow-fermented for two full days to achieve cloud-like bubbling. Hand-dimpled with cold-pressed extra virgin olive oil, sweet slow-roasted garlic cloves, garden rosemary, and flaky Maldon sea salt.',
    ingredients: 'Organic Unbleached Flour, Filtered Water, Cold-Pressed Extra Virgin Olive Oil, Mature Sourdough Culture, Roasted Garlic, Fresh Rosemary, Maldon Sea Salt.',
    storage: 'Wrap tightly in foil at room temp for 3 days. Freezes wonderfully in quarters.',
    revival: 'Warm on oven rack at 400°F for 5 minutes for an ultra-crisp bottom and fragrant interior.'
  },
  {
    id: 'sourdough-cookies',
    name: 'Brown Butter Dark Chocolate Chunk Cookies',
    category: 'sweets',
    price: 16.00,
    priceLabel: '$16',
    unit: 'Box of 6 Jumbo Cookies',
    image: 'images/sourdough-cookies.jpg',
    description: 'Nutty browned pasture butter, puddles of 70% Belgian dark chocolate, and a 48-hour sourdough discard ferment creating deep caramel complexity, finished with crunchy Maldon flakes.',
    ingredients: 'Organic Flour, Grass-Fed Butter, 70% Belgian Dark Chocolate, Organic Dark Brown Sugar, Sourdough Discard, Pasture Eggs, Pure Vanilla, Baking Soda, Flaky Sea Salt.',
    storage: 'Store in an airtight jar for up to a week.',
    revival: 'Warm in oven for 3 minutes at 300°F for molten chocolate pools.'
  },
  {
    id: 'jalapeno-cheddar-boule',
    name: 'Fiery Jalapeño Sharp Cheddar Sourdough',
    category: 'savory',
    price: 14.00,
    priceLabel: '$14',
    unit: 'Artisan Boule (approx. 900g)',
    image: 'images/jalapeno-cheddar.jpg',
    description: 'Laminated during bulk fermentation with generous cubes of 2-year aged Vermont white cheddar that melt into crispy lace along the crust, paired with tangy sliced pickled jalapeños.',
    ingredients: 'Organic Bread Flour, Filtered Water, Aged White Cheddar, Pickled Jalapeño Peppers, Sourdough Starter, Sea Salt.',
    storage: 'Store in bread bag for 3 days, or slice and freeze.',
    revival: 'Toast in a dry skillet with a bit of butter for the ultimate gourmet grilled cheese.'
  },
  {
    id: 'starter-kit',
    name: '“Mabel” Sourdough Starter Kit & Handbook',
    category: 'supplies',
    price: 18.00,
    priceLabel: '$18',
    unit: 'Starter Jar + Printed Guide',
    image: 'images/starter-kit.jpg',
    description: 'Start your own sourdough journey with Nicole’s active 4-year-old mother culture ("Mabel"). Includes feeding flour, wooden spoon, and our 16-page foolproof home baker’s handbook.',
    ingredients: 'Organic Unbleached White Flour, Stoneground Rye, Filtered Water, Active Wild Yeasts & Beneficial Lactic Acid Bacteria.',
    storage: 'Keep in refrigerator with weekly feedings, or feed daily on the counter for weekend baking.',
    revival: 'Feed 1:2:2 ratio (Starter : Water : Flour) at room temperature.'
  }
];

// 2. WORKSHOPS
const WORKSHOP_CLASSES = [
  {
    id: 'ws-beginner',
    title: 'Sourdough from Scratch: Beginner Masterclass',
    meta: '3 Hours • Strictly Capped at 8 Bakers',
    price: 95,
    description: 'Demystify the mystery of sourdough! Nicole guides you hands-on through autolyse, stretch & folds, dough tension, shaping, and Dutch oven baking. You’ll leave with your own banneton of dough ready to bake the next morning!',
    takehome: [
      'Active jar of Nicole’s 4-year starter "Mabel"',
      '10-inch cane banneton proofing basket + linen liner',
      'Stainless steel curved bread scoring lame',
      'Printed 16-page Merrick Mama Handbook',
      'Warm sourdough tasting lunch with compound butters'
    ],
    dates: [
      'Saturday, Nov 8 (10:00 AM – 1:00 PM)',
      'Saturday, Nov 22 (10:00 AM – 1:00 PM)',
      'Saturday, Dec 6 (10:00 AM – 1:00 PM)'
    ]
  },
  {
    id: 'ws-inclusions',
    title: 'Artisan Inclusions & Decorative Scoring',
    meta: '2.5 Hours • Intermediate Bakers',
    price: 110,
    description: 'Learn how to properly laminate inclusions (sharp cheddar, roasted garlic, jalapeños, chocolate) without tearing gluten networks, plus master intricate wheat-stalk scoring and blistered ears.',
    takehome: [
      'Gourmet inclusion ingredients provided (aged cheeses, garlic confit)',
      'Professional metal bench knife scraper',
      'Double-sided razor scoring tools & stencil guides',
      'Freshly baked loaf to take home + proofed inclusion dough'
    ],
    dates: [
      'Sunday, Nov 16 (1:00 PM – 3:30 PM)',
      'Sunday, Dec 14 (1:00 PM – 3:30 PM)'
    ]
  },
  {
    id: 'ws-mama-mini',
    title: 'Mama & Mini: Nostalgic Treats Morning',
    meta: '2 Hours • 1 Adult + 1 Child (Ages 5+)',
    price: 85,
    description: 'A cozy Saturday morning spent baking memories with your little one. Roll out flaky sourdough pastry for organic strawberry toaster pastries and twist golden cinnamon rolls with cream cheese icing.',
    takehome: [
      'Admission for 1 Parent/Guardian + 1 Child',
      'Box of 6 handmade toaster pastries & 4 cinnamon rolls made together',
      'Mini baker’s roller & child-safe pastry cutter',
      'Organic hot cocoa & herbal tea station'
    ],
    dates: [
      'Saturday, Nov 15 (9:30 AM – 11:30 AM)',
      'Saturday, Dec 13 (9:30 AM – 11:30 AM)'
    ]
  }
];

// 3. APPLICATION STATE
const appState = {
  bag: [],
  selectedCategory: 'all'
};

function loadBag() {
  try {
    const saved = localStorage.getItem('mmb_bag');
    if (saved) appState.bag = JSON.parse(saved);
  } catch (e) {
    console.warn(e);
  }
}

function saveBag() {
  try {
    localStorage.setItem('mmb_bag', JSON.stringify(appState.bag));
  } catch (e) {
    console.warn(e);
  }
}

// 4. RENDER MENU
function renderMenu() {
  const container = document.getElementById('menu-container');
  if (!container) return;

  const items = BAKERY_ITEMS.filter(item => {
    return appState.selectedCategory === 'all' || item.category === appState.selectedCategory;
  });

  container.innerHTML = items.map(item => `
    <article class="menu-item-card">
      <div class="menu-item-photo-wrap" onclick="openDetailsModal('${item.id}')" style="cursor: pointer;">
        <img src="${item.image}" alt="${item.name}" class="menu-item-photo" loading="lazy">
      </div>
      <div class="menu-item-body">
        <div class="menu-item-header">
          <h3 class="menu-item-title" onclick="openDetailsModal('${item.id}')" style="cursor: pointer;">${item.name}</h3>
          <span class="menu-item-price">${item.priceLabel}</span>
        </div>
        <p class="menu-item-desc">${item.description}</p>
        <div class="menu-item-foot">
          <button class="menu-item-details-btn" onclick="openDetailsModal('${item.id}')">View Details & Care</button>
          <button class="menu-item-add-btn" onclick="addToBag('${item.id}')">Add to Bag</button>
        </div>
      </div>
    </article>
  `).join('');
}

// 5. RENDER WORKSHOPS
function renderWorkshops() {
  const container = document.getElementById('workshops-list');
  if (!container) return;

  container.innerHTML = WORKSHOP_CLASSES.map(ws => `
    <div class="workshop-invitation-card">
      <div class="workshop-class-meta">${ws.meta}</div>
      <h3 class="workshop-class-title">${ws.title}</h3>
      <p class="workshop-class-desc">${ws.description}</p>
      
      <div class="workshop-takehome-title">What You Take Home:</div>
      <ul class="workshop-takehome-items">
        ${ws.takehome.map(t => `<li>${t}</li>`).join('')}
      </ul>

      <div class="workshop-date-wrap">
        <label style="display: block; font-size: 0.74rem; text-transform: uppercase; font-weight: 700; color: var(--text-muted); margin-bottom: 4px;">Choose Date:</label>
        <select class="workshop-date-select" id="date-for-${ws.id}">
          ${ws.dates.map(d => `<option value="${d}">${d}</option>`).join('')}
        </select>
      </div>

      <div class="workshop-card-bottom">
        <div>
          <span class="workshop-price-num">$${ws.price}</span>
          <span style="font-size: 0.8rem; color: var(--text-muted);"> / seat</span>
        </div>
        <button class="btn-warm" style="padding: 8px 18px; font-size: 0.84rem;" onclick="openWorkshopBooking('${ws.id}')">
          Reserve Seat
        </button>
      </div>
    </div>
  `).join('');
}

// 6. BREAD BAG (CART)
function addToBag(itemId, customOpts = {}) {
  const item = BAKERY_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  const existing = appState.bag.find(b => b.id === itemId && b.slicing === (customOpts.slicing || 'Whole Loaf'));
  if (existing) {
    existing.quantity += 1;
  } else {
    appState.bag.push({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
      slicing: customOpts.slicing || 'Whole Loaf'
    });
  }

  saveBag();
  updateBagUI();
  showToastNotice(`Added ${item.name} to your bread bag`);
}

function updateBagQuantity(idx, change) {
  if (!appState.bag[idx]) return;
  appState.bag[idx].quantity += change;
  if (appState.bag[idx].quantity <= 0) {
    appState.bag.splice(idx, 1);
  }
  saveBag();
  updateBagUI();
}

function updateBagUI() {
  const totalQty = appState.bag.reduce((sum, item) => sum + item.quantity, 0);
  const pill = document.getElementById('cart-pill');
  if (pill) pill.textContent = totalQty;

  const scrollContainer = document.getElementById('bag-items-list');
  const totalAmount = document.getElementById('bag-total-amount');
  const orderBtn = document.getElementById('bag-order-btn');

  if (!scrollContainer) return;

  if (appState.bag.length === 0) {
    scrollContainer.innerHTML = `
      <div style="text-align: center; padding: 48px 16px; color: var(--text-muted);">
        <p style="font-family: var(--font-serif); font-size: 1.15rem; color: var(--text-dark); margin-bottom: 6px;">Your bread bag is empty</p>
        <p style="font-size: 0.88rem; margin-bottom: 18px;">Browse our freshly baked loaves and nostalgic treats to reserve for the weekend.</p>
        <button class="btn-subtle" onclick="closeCartDrawer(); document.getElementById('menu').scrollIntoView({behavior: 'smooth'});">Browse Menu</button>
      </div>
    `;
    if (totalAmount) totalAmount.textContent = '$0.00';
    if (orderBtn) orderBtn.disabled = true;
    return;
  }

  if (orderBtn) orderBtn.disabled = false;

  const subtotal = appState.bag.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  scrollContainer.innerHTML = appState.bag.map((item, idx) => `
    <div class="cart-item-row">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-sub">${item.slicing} • $${item.price} ea</div>
      </div>
      <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 6px;">
        <div class="cart-qty-toggle">
          <button onclick="updateBagQuantity(${idx}, -1)">−</button>
          <span>${item.quantity}</span>
          <button onclick="updateBagQuantity(${idx}, 1)">+</button>
        </div>
        <div style="font-weight: 600; font-size: 0.92rem; color: var(--text-dark);">$${(item.price * item.quantity).toFixed(2)}</div>
      </div>
    </div>
  `).join('');

  if (totalAmount) totalAmount.textContent = `$${subtotal.toFixed(2)}`;
}

function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer-backdrop');
  if (drawer) drawer.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer-backdrop');
  if (drawer) drawer.classList.remove('open');
  document.body.style.overflow = '';
}

// 7. ORDER TICKET (Simulated cottage order submission)
function handleGenerateOrderTicket() {
  if (appState.bag.length === 0) return;

  const pickupSelect = document.getElementById('bag-pickup-select');
  const pickupTime = pickupSelect ? pickupSelect.value : 'Friday Porch Pickup (2 PM - 6 PM)';
  const notes = document.getElementById('bag-notes') ? document.getElementById('bag-notes').value : '';
  const total = appState.bag.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const ticketId = 'MMB-' + Math.floor(1000 + Math.random() * 9000);

  closeCartDrawer();

  const modalInner = document.getElementById('ticket-modal-inner');
  if (modalInner) {
    modalInner.innerHTML = `
      <div style="padding: 38px;">
        <span class="eyebrow">Weekly Bake Reservation</span>
        <h2 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--text-dark); margin-bottom: 8px;">Order Ticket #${ticketId}</h2>
        <p style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 24px;">Your order request has been generated for Merrick Mama Bakes.</p>

        <div style="background-color: var(--bg-primary); padding: 18px; border-radius: 10px; border: 1px solid var(--border-soft); margin-bottom: 20px;">
          <div style="font-size: 0.74rem; text-transform: uppercase; font-weight: 700; color: var(--accent-gold); margin-bottom: 4px;">Pickup Window:</div>
          <div style="font-size: 0.95rem; font-weight: 600; color: var(--text-dark);">${pickupTime}</div>
          <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 2px;">Porch location in Merrick, NY (11566)</div>
        </div>

        <div style="margin-bottom: 24px;">
          <div style="font-size: 0.74rem; text-transform: uppercase; font-weight: 700; color: var(--text-muted); margin-bottom: 8px;">Reserved Items:</div>
          ${appState.bag.map(item => `
            <div style="display: flex; justify-content: space-between; font-size: 0.92rem; padding: 6px 0; border-bottom: 1px solid var(--border-subtle);">
              <span>${item.quantity}× ${item.name} (${item.slicing})</span>
              <span style="font-weight: 600;">$${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          `).join('')}
          <div style="display: flex; justify-content: space-between; font-family: var(--font-serif); font-size: 1.2rem; font-weight: 600; padding-top: 14px;">
            <span>Total to pay upon pickup:</span>
            <span>$${total.toFixed(2)}</span>
          </div>
        </div>

        <div style="background-color: var(--bg-gold-tint); padding: 14px; border-radius: 8px; font-size: 0.85rem; color: var(--text-body); margin-bottom: 24px;">
          <strong>Payment & Porch Details:</strong> As a home cottage bakery, Nicole accepts payment via <strong>Venmo</strong> (@Nicole-Crites), <strong>Zelle</strong>, or cash in the porch drop-box.
        </div>

        <div style="display: flex; flex-direction: column; gap: 10px;">
          <a href="mailto:nicoleycrites@hotmail.com?subject=Bake%20Order%20Ticket%20%23${ticketId}&body=${encodeURIComponent(buildOrderMailto(ticketId, pickupTime, notes, total))}" class="btn-warm" style="width: 100%;">
            Send Order Directly to Nicole (nicoleycrites@hotmail.com)
          </a>
          <button class="btn-subtle" onclick="closeTicketModal()">Close Window</button>
        </div>
      </div>
    `;

    document.getElementById('ticket-modal').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  appState.bag = [];
  saveBag();
  updateBagUI();
}

function buildOrderMailto(ticketId, pickupTime, notes, total) {
  let body = `Hi Nicole,\n\nI'd love to place an order for this week's bake!\nOrder Reference: #${ticketId}\nPickup Window: ${pickupTime}\n\nITEMS:\n`;
  appState.bag.forEach(item => {
    body += `- ${item.quantity}x ${item.name} [${item.slicing}] - $${(item.price * item.quantity).toFixed(2)}\n`;
  });
  body += `\nTOTAL: $${total.toFixed(2)}\n`;
  if (notes) body += `Special Requests: ${notes}\n`;
  body += `\nPlease send me your porch pickup address in Merrick. Thank you!`;
  return body;
}

function closeTicketModal() {
  document.getElementById('ticket-modal').classList.remove('open');
  document.body.style.overflow = '';
}

// 8. PRODUCT DETAILS MODAL
function openDetailsModal(itemId) {
  const item = BAKERY_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  const modalInner = document.getElementById('product-modal-inner');
  if (modalInner) {
    const isLoaf = item.category === 'breads';

    modalInner.innerHTML = `
      <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 280px; object-fit: cover;">
      <div style="padding: 32px;">
        <span class="eyebrow">${item.category.toUpperCase()}</span>
        <h2 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--text-dark); margin-bottom: 8px;">${item.name}</h2>
        <p style="font-size: 0.98rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 20px;">${item.description}</p>

        <div style="background-color: var(--bg-primary); padding: 16px; border-radius: 8px; border: 1px solid var(--border-soft); margin-bottom: 20px;">
          <div style="font-size: 0.74rem; text-transform: uppercase; font-weight: 700; color: var(--accent-gold); margin-bottom: 4px;">100% Honest Ingredients</div>
          <div style="font-size: 0.88rem; color: var(--text-dark);">${item.ingredients}</div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 24px; font-size: 0.82rem; color: var(--text-muted);">
          <div style="background-color: var(--bg-primary); padding: 12px; border-radius: 8px;">
            <strong style="display: block; color: var(--text-dark); margin-bottom: 2px;">🥖 Storage</strong>
            ${item.storage}
          </div>
          <div style="background-color: var(--bg-primary); padding: 12px; border-radius: 8px;">
            <strong style="display: block; color: var(--text-dark); margin-bottom: 2px;">🔥 Crust Revival</strong>
            ${item.revival}
          </div>
        </div>

        ${isLoaf ? `
          <div style="margin-bottom: 20px;">
            <label style="display: block; font-size: 0.76rem; text-transform: uppercase; font-weight: 700; color: var(--text-muted); margin-bottom: 6px;">Loaf Slicing Preference:</label>
            <select id="modal-slice-pref" style="width: 100%; padding: 10px; background-color: var(--bg-primary); border: 1px solid var(--border-soft); border-radius: 8px; font-size: 0.88rem; color: var(--text-dark);">
              <option value="Whole Loaf">Whole Loaf (Recommended for maximum freshness & crust)</option>
              <option value="Thick Sliced">Thick Sliced for Kids Sandwiches & Toast</option>
            </select>
          </div>
        ` : ''}

        <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 18px; border-top: 1px solid var(--border-soft);">
          <div style="font-family: var(--font-serif); font-size: 1.5rem; font-weight: 600; color: var(--text-dark);">$${item.price.toFixed(2)}</div>
          <button class="btn-warm" onclick="addModalItemToBag('${item.id}')">Add to Bread Bag</button>
        </div>
      </div>
    `;

    document.getElementById('product-modal').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function addModalItemToBag(itemId) {
  const sliceEl = document.getElementById('modal-slice-pref');
  const slicing = sliceEl ? sliceEl.value : 'Whole Loaf';
  addToBag(itemId, { slicing });
  closeDetailsModal();
}

function closeDetailsModal() {
  document.getElementById('product-modal').classList.remove('open');
  document.body.style.overflow = '';
}

// 9. WORKSHOP BOOKING
function openWorkshopBooking(workshopId) {
  const ws = WORKSHOP_CLASSES.find(w => w.id === workshopId);
  if (!ws) return;

  const dateSelect = document.getElementById(`date-for-${workshopId}`);
  const chosenDate = dateSelect ? dateSelect.value : ws.dates[0];

  const modalInner = document.getElementById('workshop-modal-inner');
  if (modalInner) {
    modalInner.innerHTML = `
      <div style="padding: 36px;">
        <span class="eyebrow">Kitchen Gathering</span>
        <h2 style="font-family: var(--font-serif); font-size: 1.7rem; color: var(--text-dark); margin-bottom: 6px;">${ws.title}</h2>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 20px;">Session: <strong>${chosenDate}</strong> in Nicole’s Merrick Kitchen</p>

        <form onsubmit="handleWorkshopReservation(event, '${ws.id}', '${chosenDate}')">
          <div style="margin-bottom: 14px;">
            <label style="display: block; font-size: 0.78rem; text-transform: uppercase; font-weight: 600; margin-bottom: 4px;">Your Full Name *</label>
            <input type="text" id="ws-user-name" required style="width: 100%; padding: 10px 12px; border: 1px solid var(--border-soft); border-radius: 8px;">
          </div>
          <div style="margin-bottom: 14px;">
            <label style="display: block; font-size: 0.78rem; text-transform: uppercase; font-weight: 600; margin-bottom: 4px;">Email Address *</label>
            <input type="email" id="ws-user-email" required style="width: 100%; padding: 10px 12px; border: 1px solid var(--border-soft); border-radius: 8px;">
          </div>
          <div style="margin-bottom: 14px;">
            <label style="display: block; font-size: 0.78rem; text-transform: uppercase; font-weight: 600; margin-bottom: 4px;">Cell Phone (for class reminder) *</label>
            <input type="tel" id="ws-user-phone" required style="width: 100%; padding: 10px 12px; border: 1px solid var(--border-soft); border-radius: 8px;">
          </div>
          <div style="margin-bottom: 22px;">
            <label style="display: block; font-size: 0.78rem; text-transform: uppercase; font-weight: 600; margin-bottom: 4px;">Dietary Restrictions or Notes</label>
            <textarea id="ws-user-notes" rows="2" style="width: 100%; padding: 10px 12px; border: 1px solid var(--border-soft); border-radius: 8px;"></textarea>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--border-soft); padding-top: 16px;">
            <div style="font-family: var(--font-serif); font-size: 1.4rem; font-weight: 600; color: var(--text-dark);">$${ws.price}</div>
            <button type="submit" class="btn-warm">Confirm Reservation</button>
          </div>
        </form>
      </div>
    `;

    document.getElementById('workshop-modal').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function handleWorkshopReservation(e, wsId, date) {
  e.preventDefault();
  const name = document.getElementById('ws-user-name').value;
  const email = document.getElementById('ws-user-email').value;
  const phone = document.getElementById('ws-user-phone').value;
  const notes = document.getElementById('ws-user-notes').value;
  const ws = WORKSHOP_CLASSES.find(w => w.id === wsId);

  closeWorkshopBooking();
  showToastNotice(`Seat reserved for ${name}! Nicole will email you shortly.`);

  // Open prefilled email
  const subject = encodeURIComponent(`Workshop Reservation: ${ws.title} - ${name}`);
  const body = encodeURIComponent(`Hi Nicole,\n\nI just registered for your workshop:\nClass: ${ws.title}\nDate: ${date}\nName: ${name}\nPhone: ${phone}\nNotes: ${notes}\n\nLooking forward to baking with you!`);
  window.open(`mailto:nicoleycrites@hotmail.com?subject=${subject}&body=${body}`, '_blank');
}

function closeWorkshopBooking() {
  document.getElementById('workshop-modal').classList.remove('open');
  document.body.style.overflow = '';
}

// 10. CUSTOM INQUIRY
function openInquiryModal() {
  document.getElementById('inquiry-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeInquiryModal() {
  document.getElementById('inquiry-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function handleInquirySubmit(e) {
  e.preventDefault();
  const name = document.getElementById('inq-name').value;
  const email = document.getElementById('inq-email').value;
  const event = document.getElementById('inq-event').value;
  const notes = document.getElementById('inq-notes').value;

  closeInquiryModal();
  showToastNotice('Inquiry submitted! Nicole will reply within 24 hours.');

  const subject = encodeURIComponent(`Custom Bake Inquiry - ${name}`);
  const body = encodeURIComponent(`Hi Nicole,\n\nI'm reaching out about a custom bake order for: ${event}\nDetails: ${notes}\nFrom: ${name} (${email})`);
  window.open(`mailto:nicoleycrites@hotmail.com?subject=${subject}&body=${body}`, '_blank');
}

// 11. TOAST
function showToastNotice(text) {
  const toast = document.getElementById('toast-message');
  if (!toast) return;
  toast.textContent = text;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// 12. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  loadBag();
  renderMenu();
  renderWorkshops();
  updateBagUI();

  // Tab filters
  document.querySelectorAll('.menu-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.menu-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      appState.selectedCategory = btn.dataset.cat;
      renderMenu();
    });
  });

  // Cart Drawer open/close
  const toggleBtn = document.getElementById('cart-toggle');
  const closeBtn = document.getElementById('cart-close');
  const backdrop = document.getElementById('cart-drawer-backdrop');
  const orderBtn = document.getElementById('bag-order-btn');

  if (toggleBtn) toggleBtn.addEventListener('click', openCartDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeCartDrawer);
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeCartDrawer();
    });
  }
  if (orderBtn) orderBtn.addEventListener('click', handleGenerateOrderTicket);
});
