// Contact information data - loaded from JSON file
let contactData = {};

// Load contact data from JSON file
async function loadContactData() {
  try {
    const response = await fetch('data/contacts.json');
    if (!response.ok) throw new Error('Failed to load contacts.json');
    contactData = await response.json();
    
    // Add aliases after loading data
    setupAliases();
  } catch (error) {
    console.error('Error loading contact data:', error);
  }
}

// Setup aliases for common naming variations
function setupAliases() {
  // Global Engine Controls aliases (Mexico and South America)
  contactData['Mexico'] = contactData['Global Engine Controls'];
  contactData['Brazil'] = contactData['Global Engine Controls'];
  contactData['Bolivia'] = contactData['Global Engine Controls'];
  contactData['SouthAmerica'] = contactData['Global Engine Controls'];
  contactData['LatinAmerica'] = contactData['Global Engine Controls'];
  contactData['Latin America and Caribbean'] = contactData['Global Engine Controls'];
  contactData['Caribbean'] = contactData['Global Engine Controls'];
  contactData['Argentina'] = contactData['Global Engine Controls'];
  contactData['Peru'] = contactData['Global Engine Controls'];
  contactData['Chile'] = contactData['Global Engine Controls'];
  contactData['Venezuela'] = contactData['Global Engine Controls'];
  contactData['Colombia'] = contactData['Global Engine Controls'];
  contactData['Ecuador'] = contactData['Global Engine Controls'];

  // Add aliases for Wyoming regions
  contactData['Wyoming_Service_and_Supply_Territory'] = contactData['Western Wyoming'];
  contactData['Wyoming_Serive_Supply'] = contactData['Western Wyoming'];
  contactData['WyomingServiceandSupplyTerritory'] = contactData['Western Wyoming'];
  contactData['Pnuematic_Controls'] = contactData['Western Wyoming'];

  // Add aliases for Utah region (Sivalls company)
  contactData['Sivalls'] = contactData['Utah'];
  contactData['Sivalls_Utah_Territory'] = contactData['Utah'];
  contactData['SivallsUtahTerritory'] = contactData['Utah'];

  // Add aliases for Northeast USA (Alleghany company)
  contactData['Alleghany'] = contactData['Northeast USA'];

  // Add aliases for North Dakota
  contactData['North_Dakota-2'] = contactData['North Dakota'];
  contactData['NorthDakota2'] = contactData['North Dakota'];
  contactData['Primec_Controls'] = contactData['North Dakota'];

  // Add aliases for Montana
  contactData['Primec_Controls_Montana'] = contactData['Montana'];

  // Add aliases for California (Pneumatic Controls)
  contactData['Pnuematic_Controls_California'] = contactData['California'];
  contactData['PneumaticControls'] = contactData['California'];

  // Add aliases for Colorado and Wyoming (Western Sky)
  contactData['Western_Sky'] = contactData['Colorado'];
  contactData['WesternSky'] = contactData['Colorado'];
  contactData['Western_Sky_Wyoming'] = contactData['Wyoming'];

  // Add aliases for Quality Control (Southern USA)
  contactData['Quality_Control'] = contactData['Southern USA'];
  contactData['QualityControl'] = contactData['Southern USA'];

  // Add aliases for Bob Davis regions
  contactData['Bob_Davis-North_Texas'] = contactData['North Texas'];
  contactData['BobDavisNorthTexas'] = contactData['North Texas'];
  contactData['Bob_Davis-East_Texas'] = contactData['East Texas'];
  contactData['BobDavisEastTexas'] = contactData['East Texas'];
  contactData['Bob_Davis-Shreveport'] = contactData['Shreveport'];
  contactData['BobDavisShreveport'] = contactData['Shreveport'];

  // Add aliases for Spindletop Energy Products regions
  contactData['Spindletop_Energy_Products-Oklahoma'] = contactData['Oklahoma'];
  contactData['SpindletopEnergyProductsOklahoma'] = contactData['Oklahoma'];
  contactData['Spindletop_Energy_Products-Houston'] = contactData['Houston'];
  contactData['SpindletopEnergyProductsHouston'] = contactData['Houston'];
  contactData['Spindletop_Energy_Products_New_Iberia'] = contactData['New Iberia'];
  contactData['SpindletopEnergyProductsNewIberia'] = contactData['New Iberia'];

  // Add aliases for Strategic Energy Products regions
  contactData['Strategic_Energy_Products-West_Texas_NM'] = contactData['West Texas'];
  contactData['StrategicEnergyProductsWestTexasNM'] = contactData['West Texas'];
  contactData['Strategic_Energy_Products_South_Texas'] = contactData['South Texas'];
  contactData['StrategicEnergyProductsSouthTexas'] = contactData['South Texas'];

  // Add aliases for Canada (Excite Automation)
  contactData['Canada-Excite_Automation_and_Controls'] = contactData['Canada'];
  contactData['CanadaExciteAutomationandControls'] = contactData['Canada'];
  contactData['Excite_Automation_and_Controls'] = contactData['Canada'];
}

function parseColorString(str) {
  if (!str) return null;
  str = ('' + str).trim().toLowerCase();
  if (str === 'none' || str === 'transparent') return null;

  if (str[0] === '#') {
    let hex = str.slice(1);
    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
    if (hex.length !== 6) return null;
    const int = parseInt(hex, 16);
    return [(int >> 16) & 255, (int >> 8) & 255, int & 255];
  }

  const m = str.match(/rgba?\(([^)]+)\)/);
  if (m) {
    const parts = m[1].split(',').map(s => parseFloat(s.trim()));
    return parts.slice(0, 3);
  }

  try {
    const d = document.createElement('div');
    d.style.color = str;
    document.body.appendChild(d);
    const cs = window.getComputedStyle(d).color;
    document.body.removeChild(d);
    const mm = cs.match(/rgb\(([^)]+)\)/);
    if (mm) return mm[1].split(',').map(s => parseFloat(s.trim()));
  } catch (e) {}
  
  return null;
}

function isTargetGrey(rgb) {
  if (!rgb || rgb.length < 3) return false;
  const [r, g, b] = rgb.map(v => Number(v));
  return (Math.abs(r - 199) <= 3 && Math.abs(g - 200) <= 3 && Math.abs(b - 202) <= 3);
}

function getEffectiveColors(el) {
  const cs = window.getComputedStyle(el);
  const fill = cs && cs.fill ? cs.getPropertyValue('fill') : null;
  const stroke = cs && cs.stroke ? cs.getPropertyValue('stroke') : null;
  return { fill, stroke };
}

function findRegionName(element) {
  // Normalize a string for comparison (lowercase, remove spaces, punctuation, etc.)
  const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Check element id first
  if (element.id) {
    const normalizedId = normalize(element.id);
    console.log('Checking element ID:', element.id, '-> normalized:', normalizedId);
    
    for (const key in contactData) {
      const normalizedKey = normalize(key);
      // Check if ID contains the key or key contains the ID (more flexible matching)
      if (normalizedId.includes(normalizedKey) || normalizedKey.includes(normalizedId)) {
        console.log('✓ Matched:', element.id, '->', key);
        return key;
      }
    }
  }
  
  // Check parent groups up the tree
  let parent = element.parentElement;
  let depth = 0;
  while (parent && parent.tagName !== 'svg' && depth < 10) {
    if (parent.id) {
      const normalizedParentId = normalize(parent.id);
      console.log('Checking parent ID:', parent.id, '-> normalized:', normalizedParentId, '(depth:', depth + ')');
      
      for (const key in contactData) {
        const normalizedKey = normalize(key);
        // Check if parent ID contains the key or key contains the parent ID
        if (normalizedParentId.includes(normalizedKey) || normalizedKey.includes(normalizedParentId)) {
          console.log('✓ Matched parent:', parent.id, '->', key);
          return key;
        }
      }
    }
    parent = parent.parentElement;
    depth++;
  }
  
  console.warn('✗ No match found for element:', element.id || 'no-id', 'Check console logs above for attempted matches');
  return null;
}

function showModal(regionName) {
  const data = contactData[regionName];
  if (!data) {
    console.warn('No contact data for region:', regionName);
    return;
  }

  const modal = document.getElementById('contact-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalLogo = document.getElementById('modal-logo');
  const modalContacts = document.getElementById('modal-contacts');

  modalTitle.textContent = data.company;
  modalLogo.src = data.logo;
  modalLogo.alt = data.company + ' Logo';

  modalContacts.innerHTML = '';
  data.contacts.forEach(contact => {
    const contactDiv = document.createElement('div');
    contactDiv.className = 'contact-item';
    
    let html = '';
    if (contact.area) {
      html += `
        <div class="contact-field">
          <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <div>
            <div class="contact-label">Area</div>
            <div class="contact-value">${contact.area}</div>
          </div>
        </div>
      `;
    }
    if (contact.phone) {
      html += `
        <div class="contact-field">
          <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <div>
            <div class="contact-label">Phone</div>
            <div class="contact-value">${contact.phone}</div>
          </div>
        </div>
      `;
    }
    if (contact.email) {
      html += `
        <div class="contact-field">
          <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <div>
            <div class="contact-label">Email</div>
            <div class="contact-value">${contact.email}</div>
          </div>
        </div>
      `;
    }
    if (contact.address) {
      html += `
        <div class="contact-field">
          <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <div>
            <div class="contact-label">Address</div>
            <div class="contact-value">${contact.address}</div>
          </div>
        </div>
      `;
    }
    
    contactDiv.innerHTML = html;
    modalContacts.appendChild(contactDiv);
  });

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('contact-modal');
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

// Initialize the application
async function initApp() {
  // Load contact data first
  await loadContactData();
  
  const container = document.getElementById('map-container');
  fetch('img/maps.svg')
    .then(r => {
      if (!r.ok) throw new Error('SVG fetch failed: ' + r.status);
      return r.text();
    })
    .then(svgText => {
      container.innerHTML = svgText;
      const svg = container.querySelector('svg');
      if (!svg) throw new Error('No <svg> found in the file');

      const elements = svg.querySelectorAll('path,rect,circle,ellipse,polygon,polyline');
      elements.forEach(el => {
        if (el.closest('defs')) return;

        const cs = getEffectiveColors(el);
        const explicitFill = el.getAttribute('fill');
        const candidateFill = parseColorString(explicitFill || cs.fill);

        const fillMatch = isTargetGrey(candidateFill);

        if (fillMatch) {
          el.classList.add('interactive-region');
          el.style.pointerEvents = 'visiblePainted';
          el.style.cursor = 'pointer';

          const origFill = el.style.fill || cs.fill || '';
          const origStroke = el.style.stroke || cs.stroke || '';
          const origStrokeWidth = el.style.strokeWidth || window.getComputedStyle(el).strokeWidth || '0.5px';

          el.dataset.originalFill = origFill;
          el.dataset.originalStroke = origStroke;
          el.dataset.originalStrokeWidth = origStrokeWidth;

          const applyHighlight = () => {
            el.classList.add('popout');
            el.style.fill = '#ff3b30';
            el.style.stroke = '#ff3b30';
            el.style.strokeWidth = '1.5px';
            el.style.isolation = 'isolate';
          };

          const removeHighlight = () => {
            el.classList.remove('popout');
            el.style.fill = el.dataset.originalFill;
            el.style.stroke = el.dataset.originalStroke;
            el.style.strokeWidth = el.dataset.originalStrokeWidth;
            el.style.isolation = '';
          };

          el.addEventListener('mouseenter', applyHighlight, false);
          el.addEventListener('mouseleave', removeHighlight, false);
          el.addEventListener('focus', applyHighlight);
          el.addEventListener('blur', removeHighlight);
          el.addEventListener('touchstart', applyHighlight, { passive: true });
          el.addEventListener('touchend', removeHighlight, { passive: true });

          // Add click handler to show modal
          el.addEventListener('click', () => {
            const regionName = findRegionName(el);
            if (regionName) {
              showModal(regionName);
            }
          });

          if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0');
          if (el.id && !el.getAttribute('role')) el.setAttribute('role', 'img');
        }
      });
    })
    .catch(err => {
      console.warn('Could not inline SVG:', err);
      const img = document.createElement('img');
      img.src = 'img/maps.svg';
      img.alt = 'Map';
      img.style.width = '100%';
      container.appendChild(img);
    });

  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    const modal = document.getElementById('contact-modal');
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close modal on escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}

// Start the application
initApp();
