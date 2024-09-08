document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'var(--secondary-color)';
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        }
    });

    // Add hover effect to content sliders
    const contentSliders = document.querySelectorAll('.content-slider');
    contentSliders.forEach(slider => {
        slider.addEventListener('mouseover', (e) => {
            if (e.target.tagName === 'IMG') {
                e.target.style.transform = 'scale(1.05)';
            }
        });

        slider.addEventListener('mouseout', (e) => {
            if (e.target.tagName === 'IMG') {
                e.target.style.transform = 'scale(1)';
            }
        });
    });
});