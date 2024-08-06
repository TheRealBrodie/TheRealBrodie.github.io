document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-button');

    // Array of random URLs
    const randomUrls = [
        'https://TheRealBrodie.github.io/scripts.html',
        'https://random.org' 
    ];

    ctaButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        // Get a random URL from the array
        const randomUrl = randomUrls[Math.floor(Math.random() * randomUrls.length)];
        // Redirect to the random URL
        window.location.href = randomUrl;
    });
});
