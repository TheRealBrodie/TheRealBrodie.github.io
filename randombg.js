document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'https://files.enderman.ch/wallpapers/Clean.png',
        'https://files.enderman.ch/wallpapers/Peak.jpg',
        'https://files.enderman.ch/wallpapers/Antarctic.jpg',
        'https://files.enderman.ch/wallpapers/Moon.jpg',
        'https://files.enderman.ch/wallpapers/Sunset.png',
        'https://files.enderman.ch/wallpapers/Into%20the%20Trees.jpg',
        'https://files.enderman.ch/wallpapers/Evening%20Mountain.jpg',
        'https://files.enderman.ch/wallpapers/Snowy%20Spruce.jpg',
        'https://files.enderman.ch/wallpapers/Ocean%20Rocks.jpg',
        'https://files.enderman.ch/wallpapers/Mountain.png',
        'https://files.enderman.ch/wallpapers/Winter.jpg',
        'https://files.enderman.ch/wallpapers/Sky.jpg'
    ];

    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.querySelector('.hero').style.backgroundImage = `url(${randomImage})`;
});
