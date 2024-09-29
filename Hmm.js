// Example function to get the actual number of people online
function getPeopleOnline() {
    // Here you would typically fetch from an API or database
    // For example: fetch('/api/people-online').then(response => response.json()).then(data => { ... });

    // For demonstration, we will use a static number
    return 42; // Replace this with actual logic to get the number
}

// Function to update the displayed number
function updatePeopleOnline() {
    const peopleOnline = getPeopleOnline(); // Get the actual number
    document.getElementById('peopleOnline').innerText = `How much people online: ${peopleOnline}`;
}

// Update every second
setInterval(updatePeopleOnline, 1000);
