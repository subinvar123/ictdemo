
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}


function redirectMobileUsers() {
    if (isMobileDevice()) {
        
        window.location.href = "https://site.wmsp.co.uk/calendar";
    }
}

window.onload = redirectMobileUsers;
