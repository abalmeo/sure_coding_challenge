const express = require('express');
const app = express();

// Initialize middleware
app.use(express.json({ extended:false }));

// Routes



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
