function onButtonClick(dest) {
    document.location = dest;
}

window.addEventListener('scroll', function() {
    if (window.scrollY === 0) {
        // User has reached the top of the page
        // Now, redirect to the previous page
        redirectToPreviousPage();
    } else if (window.scrollY >= document.body.scrollHeight - document.body.offsetHeight) {
        // User has reached the end of the page
        // Now, redirect to the next page
        redirectToNextPage();
    }
});