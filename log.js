document.addEventListener('DOMContentLoaded', function() {
    // Send a request to the server to log visitor details
    fetch('http://localhost:3000/log', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });
});
