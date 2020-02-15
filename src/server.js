const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');

// Start

const app = express();

// Settings

app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', handlebars({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Middlewares

app.use(express.urlencoded({ extended: false }));

// Global variables



// Routes

app.get('/', (req, res) => {
    res.render('index');
});

// Files

app.use(express.static(path.join(__dirname, 'public')));

// Export module
module.exports = app;