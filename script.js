// Function to check screen size and redirect if necessary
function checkScreenSize() {
    // Get the width of the screen
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Redirect to a different URL based on screen size
    if (screenWidth > 900) {
        window.location.href = "https://breakersneaker.github.io/MesilotHatora/";
    }

    setTimeout(function() {
        console.log('on dunction');
    }, 0);
}




// Call the function on page load and whenever the window is resized
window.onload = checkScreenSize;
window.onresize = checkScreenSize;