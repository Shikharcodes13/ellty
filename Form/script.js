document.addEventListener('DOMContentLoaded', () => {
    const allPagesCheckbox = document.getElementById('all-pages');
    const pageCheckboxes = document.querySelectorAll('input[name="pages"]:not(#all-pages)');
    const doneBtn = document.querySelector('.done-btn');

    // Toggle all checkboxes when "All pages" is checked/unchecked
    allPagesCheckbox.addEventListener('change', (e) => {
        pageCheckboxes.forEach(checkbox => {
            checkbox.checked = e.target.checked;
        });
    });

    // Update "All pages" checkbox based on individual selections
    pageCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            if (!checkbox.checked && allPagesCheckbox.checked) {
                allPagesCheckbox.checked = false;
            } else {
                const allChecked = Array.from(pageCheckboxes).every(cb => cb.checked);
                allPagesCheckbox.checked = allChecked;
            }
        });
    });

    // Handle done button click
    doneBtn.addEventListener('click', () => {
        const selected = [];
        if (allPagesCheckbox.checked) {
            selected.push('All pages');
        } else {
            pageCheckboxes.forEach(cb => {
                if (cb.checked) selected.push(`Page ${cb.value}`);
            });
        }
        
        // Dispatch event with selection data
        const event = new CustomEvent('pagesSelected', {
            detail: { pages: selected.length ? selected : ['None selected'] }
        });
        document.dispatchEvent(event);
        
        console.log('Selection:', event.detail.pages.join(', '));
    });
});