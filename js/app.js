// Contact information data for each region
const contactData = {
  'Canada': {
    company: 'Excite Automation & Controls',
    logo: 'img/logos/excite.png',
    contacts: [{
      area: 'Canada',
      phone: '403-800-7015',
      email: 'info@excitautomation.com',
      address: '170, 8489 40th Street SE, Calgary, Alberta T2C 2P1'
    }]
  },
  'North Dakota': {
    company: 'Primec Controls',
    logo: 'img/logos/primec.png',
    contacts: [{
      area: 'North Dakota and Eastern Montana',
      phone: '403-800-7015',
      email: 'info@primeccontrols.com',
      address: '5048 Bennett Industrial Drive, Williston, ND 58803'
    }]
  },
  'Montana': {
    company: 'Primec Controls',
    logo: 'img/logos/primec.png',
    contacts: [{
      area: 'North Dakota and Eastern Montana',
      phone: '403-800-7015',
      email: 'info@primeccontrols.com',
      address: '5048 Bennett Industrial Drive, Williston, ND 58803'
    }]
  },
  'Western Wyoming': {
    company: 'Wyoming Service & Supply',
    logo: 'img/logos/wyss.png',
    contacts: [{
      area: 'Western Wyoming',
      phone: '307-382-2717',
      email: 'wyss@sweetwaterhsa.com',
      address: '207 Mesa Drive, Rock Springs, WY, USA'
    }]
  },
  'Northeast USA': {
    company: 'Alleghany',
    logo: 'img/logos/alleghany.png',
    contacts: [{
      area: 'Kentucky, Ohio, West Virginia, Pennsylvania, Maryland, Delaware, New Jersey, New York, Connecticut, Rhode Island, Massachusetts, Vermont, New Hampshire, and Maine',
      phone: '412-385-1080',
      email: '',
      address: '67037 Executive Dr, St. Clairsville, OH 43950'
    }]
  },
  'California': {
    company: 'Pneumatic Controls',
    logo: 'img/logos/pneumatic.png',
    contacts: [{
      area: 'California',
      phone: '661-325-1200',
      email: 'info@pneumaticcontrol.com',
      address: '1200 34th Street, Bakersfield, CA 93301'
    }]
  },
  'Utah': {
    company: 'Sivalls',
    logo: 'img/logos/sivalls.png',
    contacts: [{
      area: 'Utah',
      phone: '435-789-9696',
      email: 'vernal@sivalls.com',
      address: '409 S 800 E, Vernal, Utah 84078'
    }]
  },
  'Colorado': {
    company: 'Western Sky',
    logo: 'img/logos/westernsky.png',
    contacts: [{
      area: 'Northern Colorado and Southeast Wyoming',
      phone: '970-203-4279',
      email: 'jchick@westernskyenergy.com',
      address: '501 6th Street, Greeley, CO 80631'
    }]
  },
  'Wyoming': {
    company: 'Western Sky',
    logo: 'img/logos/westernsky.png',
    contacts: [{
      area: 'Northern Colorado and Southeast Wyoming',
      phone: '970-203-4279',
      email: 'jchick@westernskyenergy.com',
      address: '501 6th Street, Greeley, CO 80631'
    }]
  },
  'Oklahoma': {
    company: 'Spindletop Energy Products',
    logo: 'img/logos/spindletop.png',
    contacts: [{
      area: 'Oklahoma and Texas Panhandle',
      phone: '405-504-9006',
      email: 'sales-okc@spindletopep.com',
      address: '424 S Eagle Ln, Oklahoma City, OK 73128'
    }]
  },
  'Texas Panhandle': {
    company: 'Spindletop Energy Products',
    logo: 'img/logos/spindletop.png',
    contacts: [{
      area: 'Oklahoma and Texas Panhandle',
      phone: '405-504-9006',
      email: 'sales-okc@spindletopep.com',
      address: '424 S Eagle Ln, Oklahoma City, OK 73128'
    }]
  },
  'North Texas': {
    company: 'Bob Davis Sales',
    logo: 'img/logos/bobdavis.png',
    contacts: [{
      area: 'North Texas',
      phone: '817-641-0500',
      email: 'jacksboro@bobdavissales.com',
      address: '956 S Main Street, Jacksboro, TX 76458'
    }]
  },
  'East Texas': {
    company: 'Bob Davis Sales',
    logo: 'img/logos/bobdavis.png',
    contacts: [{
      area: 'East Texas',
      phone: '903-984-3093',
      email: 'kilgore@bobdavissales.com',
      address: '214 E Danville Street, Kilgore, TX 75662'
    }]
  },
  'Shreveport': {
    company: 'Bob Davis Sales',
    logo: 'img/logos/bobdavis.png',
    contacts: [{
      area: 'Northern Louisiana',
      phone: '318-222-7121',
      email: 'shreveport@bobdavissales.com',
      address: '1728 N Market Street, Shreveport, LA 71107'
    }]
  },
  'New Iberia': {
    company: 'Spindletop Energy Products',
    logo: 'img/logos/spindletop.png',
    contacts: [{
      area: 'Southwest Louisiana',
      phone: '337-443-0630',
      email: 'sales-louisiana@spindletopep.com',
      address: '1215 S. Import Drive, New Iberia, LA 70560'
    }]
  },
  'Southern USA': {
    company: 'Quality Control Products',
    logo: 'img/logos/qualitycontrol.png',
    contacts: [{
      area: 'Southeast Louisiana, Southern Mississippi, and Southwest Alabama',
      phone: '504-392-9464',
      email: 'pcallegan@qcp-llc.com',
      address: '5201 Westbank Expressway, Suite 101, Marrero, Louisiana 70072'
    }]
  },
  'Houston': {
    company: 'Spindletop Energy Products',
    logo: 'img/logos/spindletop.png',
    contacts: [{
      area: 'Southeast Texas and Gulf Coast',
      phone: '832-856-4500',
      email: 'sales-houston@spindletopep.com',
      address: '17535 Roberts Road Hockley, TX 77447'
    }]
  },
  'West Texas': {
    company: 'Strategic Energy Products',
    logo: 'img/logos/strategic.png',
    contacts: [{
      area: 'West Texas and Southeast New Mexico',
      phone: '432-561-5654',
      email: 'info@sep-usa.com',
      address: '401 Lufkin Road, Odessa, TX 79765'
    }]
  },
  'South Texas': {
    company: 'Strategic Energy Products',
    logo: 'img/logos/strategic.png',
    contacts: [{
      area: 'South Texas',
      phone: '832-482-8207',
      email: 'info@sep-usa.com',
      address: '200 Eurostar Blvd, Pleasanton, TX 78064'
    }]
  },
  'Mexico': {
    company: 'Global Engine Controls',
    logo: 'img/logos/gec.png',
    contacts: [
      {
        area: 'Latin America and Caribbean',
        phone: '832-278-5437',
        email: 'mmorales@gec-lac.com',
        address: ''
      },
      {
        area: 'Mexico',
        phone: '+ 52 993 220 6136',
        email: 'msanchez@gec-lac.com',
        address: ''
      },
      {
        area: 'Bolivia',
        phone: '+ 591 6 448 1682',
        email: 'bportugal@gec-lac.com',
        address: ''
      },
      {
        area: 'Brazil',
        phone: '+ 55 48 99927 9852',
        email: 'lmenezes@gec-lac.com',
        address: ''
      }
    ]
  },
  'South America': {
    company: 'Global Engine Controls',
    logo: 'img/logos/gec.png',
    contacts: [
      {
        area: 'Latin America and Caribbean',
        phone: '832-278-5437',
        email: 'mmorales@gec-lac.com',
        address: ''
      },
      {
        area: 'Mexico',
        phone: '+ 52 993 220 6136',
        email: 'msanchez@gec-lac.com',
        address: ''
      },
      {
        area: 'Bolivia',
        phone: '+ 591 6 448 1682',
        email: 'bportugal@gec-lac.com',
        address: ''
      },
      {
        area: 'Brazil',
        phone: '+ 55 48 99927 9852',
        email: 'lmenezes@gec-lac.com',
        address: ''
      }
    ]
  }
};

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
  // Check element id
  if (element.id) {
    for (const key in contactData) {
      if (element.id.toLowerCase().includes(key.toLowerCase().replace(/\s+/g, ''))) {
        return key;
      }
    }
  }
  
  // Check parent groups
  let parent = element.parentElement;
  while (parent && parent.tagName !== 'svg') {
    if (parent.id) {
      for (const key in contactData) {
        if (parent.id.toLowerCase().includes(key.toLowerCase().replace(/\s+/g, ''))) {
          return key;
        }
      }
    }
    parent = parent.parentElement;
  }
  
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

(function init() {
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
})();
