document.addEventListener('DOMContentLoaded', () => {
    // Code Copy Functionality
    const copyButton = document.getElementById('copy-button');
    const codeBlock = document.getElementById('code-block');

    if (copyButton && codeBlock) {
        copyButton.addEventListener('click', () => {
            // Create a temporary textarea to copy the code to
            const tempTextArea = document.createElement('textarea');
            tempTextArea.value = codeBlock.textContent;
            document.body.appendChild(tempTextArea);
            tempTextArea.select();
            document.execCommand('copy');
            document.body.removeChild(tempTextArea);

            // Optionally, show a message or change the button text to indicate success
            copyButton.textContent = 'Copied!';
            setTimeout(() => {
                copyButton.textContent = 'Copy to Clipboard';
            }, 2000);
        });
    }

    // Random Background Functionality
    const backgroundImages = [
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

    const randomImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
    document.body.style.backgroundImage = `url(${randomImage})`;
});
