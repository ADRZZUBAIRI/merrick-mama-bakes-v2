/**
 * MERRICK MAMA BAKES — Artisan Sourdough Micro-Bakery
 * Zero-Slop Script: Dynamic Menu Catalog, Category Filtering & 1-Click Intake
 */

const BAKERY_ITEMS = [
  {
    id: 'buttermilk-sourdough',
    name: 'The Buttermilk Sourdough',
    category: 'breads',
    price: '$12',
    meta: 'Cultured Whole Buttermilk • Pillowy Crumb',
    image: 'images/buttermilk-sandwich-loaf.jpg',
    description: 'Our signature everyday family loaf. Cultured organic buttermilk gives the crumb a pillowy softness and subtle creamy tang, making it ideal for kid school lunches, French toast, or grilled cheese.'
  },
  {
    id: 'country-boule',
    name: 'Heritage Country Boule',
    category: 'breads',
    price: '$11',
    meta: 'Organic Bread Flour & Stoneground Rye',
    image: 'images/hero-spread.jpg',
    description: 'The rustic sourdough purist’s boule. Crafted with unbleached organic flours, cold-proofed in cane bannetons for 36 hours and baked in cast iron for a blistered ear and deep wild tang.'
  },
  {
    id: 'nostalgic-pop-tarts',
    name: 'Sourdough Toaster Pastries',
    category: 'treats',
    price: '$18',
    meta: 'Box of 4 • Flaky Laminated Crust',
    image: 'images/sourdough-pop-tarts.jpg',
    description: 'A wholesome homage to childhood Saturday mornings. Flaky sourdough pastry layered with slow-simmered organic strawberry fruit reduction or Ceylon brown sugar cinnamon, finished with fruit glaze.'
  },
  {
    id: 'cinnamon-rolls',
    name: 'Skillet Sourdough Cinnamon Rolls',
    category: 'sweets',
    price: '$22',
    meta: 'Pan of 6 • Vanilla Bean Cream Icing',
    image: 'images/sourdough-cinnamon-rolls.jpg',
    description: 'Pillowy pull-apart sourdough enriched with pasture butter, swirled with fragrant Ceylon cinnamon and brown sugar, crowned with molten vanilla bean cream cheese frosting.'
  },
  {
    id: 'rosemary-focaccia',
    name: 'Garden Rosemary Focaccia',
    category: 'savory',
    price: '$14',
    meta: 'Full 9x13" Sheet • Cold-Pressed EVOO',
    image: 'images/artisan-focaccia.jpg',
    description: 'Slow-fermented for two full days to achieve cloud-like bubbling. Hand-dimpled with cold-pressed extra virgin olive oil, sweet slow-roasted garlic cloves, garden rosemary, and flaky sea salt.'
  },
  {
    id: 'sourdough-cookies',
    name: 'Brown Butter Dark Choc Cookies',
    category: 'sweets',
    price: '$16',
    meta: 'Box of 6 Jumbo • Maldon Sea Salt',
    image: 'images/sourdough-cookies.jpg',
    description: 'Nutty browned pasture butter, puddles of 70% Belgian dark chocolate, and a 48-hour sourdough discard ferment creating deep caramel complexity, finished with crunchy sea salt flakes.'
  },
  {
    id: 'jalapeno-cheddar-boule',
    name: 'Jalapeño Sharp Cheddar Boule',
    category: 'savory',
    price: '$14',
    meta: '2-Year Aged White Cheddar Cubes',
    image: 'images/jalapeno-cheddar.jpg',
    description: 'Laminated during bulk fermentation with generous cubes of sharp white cheddar that melt into crispy lace along the crust, paired with tangy sliced pickled jalapeños.'
  },
  {
    id: 'starter-kit',
    name: '“Mabel” Starter Kit & Handbook',
    category: 'supplies',
    price: '$18',
    meta: 'Active 4-Year Starter + Printed Guide',
    image: 'images/starter-kit.jpg',
    description: 'Start your own sourdough journey with Nicole’s active 4-year mother culture ("Mabel"). Includes feeding flour, wooden feeding spoon, and a foolproof 16-page home baker’s handbook.'
  }
];

// Render Menu Cards
function renderMenu(items) {
  const container = document.getElementById('menu-grid');
  if (!container) return;

  container.innerHTML = items.map(item => `
    <article class="bake-card">
      <div class="bake-card-photo">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
      </div>
      <div class="bake-card-content">
        <div class="bake-card-top">
          <h3 class="bake-card-title">${item.name}</h3>
          <span class="bake-card-price">${item.price}</span>
        </div>
        <div class="bake-card-meta">${item.meta}</div>
        <p class="bake-card-desc">${item.description}</p>
        <button class="bake-card-cta" onclick="quickSelectBake('${item.name} (${item.price})')">
          <span>Reserve for Pickup</span>
          <span>→</span>
        </button>
      </div>
    </article>
  `).join('');
}

// Category Filter Handling
function initCategoryFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      if (filter === 'all') {
        renderMenu(BAKERY_ITEMS);
      } else {
        const filtered = BAKERY_ITEMS.filter(item => item.category === filter);
        renderMenu(filtered);
      }
    });
  });
}

// 1-Click Item Selection to Order Intake Slip
function quickSelectBake(itemString) {
  const textarea = document.getElementById('res-items');
  const orderSection = document.getElementById('order');

  if (textarea) {
    if (textarea.value.trim().length > 0) {
      textarea.value += '\n• ' + itemString;
    } else {
      textarea.value = '• ' + itemString;
    }
    orderSection.scrollIntoView({ behavior: 'smooth' });
    textarea.focus();
  }
}

// Workshop Reservation Helper
function quickSelectWorkshop(workshopTitle) {
  const textarea = document.getElementById('res-items');
  const select = document.getElementById('res-day');
  const orderSection = document.getElementById('order');

  if (select) {
    select.value = 'workshop';
  }

  if (textarea) {
    textarea.value = 'Workshop Inquiry: ' + workshopTitle + '\nNumber of guests: \nPreferred weekend: ';
    orderSection.scrollIntoView({ behavior: 'smooth' });
    textarea.focus();
  }
}

// Form Submission Simulation
function initReservationForm() {
  const form = document.getElementById('reservation-form');
  const successMsg = document.getElementById('reservation-success');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      successMsg.classList.add('visible');
      form.reset();
      successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  renderMenu(BAKERY_ITEMS);
  initCategoryFilters();
  initReservationForm();
});
