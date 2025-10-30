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
})();
