document.addEventListener('DOMContentLoaded', () => {
    // Show the popup message after 2 seconds
    setTimeout(() => {
        document.getElementById('popup-message').style.opacity = 1;
    }, 2000); // 2000 milliseconds = 2 seconds

    // Add click event to close button
    document.getElementById('close-btn').addEventListener('click', () => {
        document.getElementById('popup-message').style.opacity = 0;
    });
});
