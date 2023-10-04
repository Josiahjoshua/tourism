// fallback.js
function showFallbackImage() {
    // Hide the iframe
    document.querySelector('iframe').style.display = 'none';

    // Show the fallback image
    document.getElementById('fallbackImage').style.display = 'block';
}

function hideFallbackImage() {
    // Hide the fallback image
    document.getElementById('fallbackImage').style.display = 'none';
}
