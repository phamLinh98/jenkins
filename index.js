const express = require('express');
const app = express();
const PORT = 4000;

// Function để test
function add(a, b) {
    return a + b;
}

app.get('/', (req, res) => {
    res.json({ message: 'Hello from Jenkins CI!' });
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = { app, add };