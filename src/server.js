const express = require('express');
const path = require('path');

// Start

const app = express();

// Settings

app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));

// Middlewares

app.use(express.urlencoded({extended: false}));

// Global variables



// Routes

app.get('/', (req, res)=>{
    res.send('Hello world');
})

// Files

app.set(express.static(path.join(__dirname, 'public')));

// Export module
module.exports = app;