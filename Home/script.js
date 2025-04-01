document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('.button-row');
    let hoverCount = 0;
  
    rows.forEach(row => {
      // Hover event
      row.addEventListener('mouseover', () => {
        hoverCount++;
        if (hoverCount === 1) {
          row.setAttribute('data-variant', 'variant2');
        } else if (hoverCount === 2) {
          row.setAttribute('data-variant', 'variant6');
        } else if (hoverCount === 3) {
          row.setAttribute('data-variant', 'variant8');
          hoverCount = 0; // Reset after third hover
        }
      });
  
      // Press event
      row.addEventListener('mousedown', () => {
        if (row.getAttribute('data-variant') === 'variant2') {
          row.setAttribute('data-variant', 'variant3');
        } else if (row.getAttribute('data-variant') === 'variant6') {
          row.setAttribute('data-variant', 'variant7');
        }
      });
  
      // Click event
      row.addEventListener('click', () => {
        row.setAttribute('data-variant', 'variant4');
      });
  
      // Mouse move outside
      row.addEventListener('mouseout', () => {
        if (row.getAttribute('data-variant') === 'variant4') {
          row.setAttribute('data-variant', 'variant5');
        } else {
          row.setAttribute('data-variant', 'default');
        }
      });
    });
  });