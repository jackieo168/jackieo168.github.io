function onButtonClick(dest) {
    document.location = dest;
}

window.addEventListener('scroll', function() {
    if (window.scrollY >= document.body.scrollHeight - document.body.offsetHeight) {
        // User has reached the end of the page
        // Now, redirect to the next page
        redirectToNextPage();
    }
});