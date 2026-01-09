document.addEventListener('DOMContentLoaded', function() {
    // Initialize any necessary functionality
    
    // Handle gift card exchange button clicks
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('exchange-btn')) {
            e.preventDefault();
            const card = e.target.closest('.gift-card');
            const title = card.querySelector('.gift-title').textContent;
            const value = card.querySelector('.value-amount').textContent;
            
            // In a real app, this would redirect to the exchange page
            alert(`您正在兑换 ${title} (${value})`);
        }
    });
    
    // Mobile menu toggle (to be implemented)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            // Mobile menu toggle logic
        });
    }
    
    // Search functionality
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-box input');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function() {
            const query = searchInput.value.trim();
            if (query) {
                // In a real app, this would redirect to search results
                alert(`搜索: ${query}`);
            }
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query) {
                    // In a real app, this would redirect to search results
                    alert(`搜索: ${query}`);
                }
            }
        });
    }
});