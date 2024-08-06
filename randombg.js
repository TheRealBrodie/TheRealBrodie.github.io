document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'https://files.enderman.ch/wallpapers/Clean.png',
        'https://files.enderman.ch/wallpapers/Peak.jpg',
        'https://files.enderman.ch/wallpapers/Tent.png',
        'https://files.enderman.ch/wallpapers/Breeze.png',
        'https://files.enderman.ch/wallpapers/Sunset.png'
    ];

    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.querySelector('.hero').style.backgroundImage = `url(${randomImage})`;
});
