document.addEventListener('DOMContentLoaded', () => {
    console.log('ePlus AI Showcase Loaded');

    // Add scroll reveal animations later
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        
        // Simple fade in on load
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300);
    });
});
