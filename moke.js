const express = require('express');
const app = express();
const PORT = 3000;

let onlineCount = 0; // Initialize online count

// Simulate user connections and disconnections
setInterval(() => {
    onlineCount = Math.floor(Math.random() * 100) + 1; // Randomly simulate online count
}, 1000); // Update every second

app.get('/online-count', (req, res) => {
    res.json({ count: onlineCount }); // Respond with online count
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
