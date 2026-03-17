'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = 'your_mongo_connection_string';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.error('MongoDB connection error:', err));

// Route initialization
app.get('/api', (req, res) => {
    res.send('API is working!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
