document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-links li a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            // Do not prevent the default link behavior
            // event.preventDefault(); 

            // No need to manually set the 'active' class, as it will be handled by the browser when navigating to a new page
        });
    });
});
