document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const resources = document.querySelectorAll('.resource-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            resources.forEach(resource => {
                if (filterValue === 'all' || resource.getAttribute('data-type') === filterValue) {
                    resource.style.display = 'block';
                } else {
                    resource.style.display = 'none';
                }
            });
        });
    });
    
    // Search functionality
    const searchInput = document.getElementById('library-search');
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        resources.forEach(resource => {
            const title = resource.querySelector('h3').textContent.toLowerCase();
            const description = resource.querySelector('.description').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                resource.style.display = 'block';
            } else {
                resource.style.display = 'none';
            }
        });
    });
}); 