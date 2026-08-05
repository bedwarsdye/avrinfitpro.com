// Wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
    
    // Listen for a click anywhere on the page
    document.body.addEventListener('click', function() {
        const ui = document.getElementById('fakeUI');
        const video = document.getElementById('prankVideo');
        
        if (ui && video) {
            // Hide the fake GitHub layout
            ui.style.display = 'none';
            
            // Show the video and force it to play with sound
            video.style.display = 'block';
            video.play().catch(err => {
                console.log("Browser blocked playback:", err);
            });
        }
    }, { once: true }); // 'once: true' ensures it only fires on the very first click

});