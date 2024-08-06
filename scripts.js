document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.getElementById('copy-button');
    const codeBlock = document.getElementById('code-block');

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
});
