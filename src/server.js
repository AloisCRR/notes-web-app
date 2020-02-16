const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');

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
app.use(methodOverride('_method'));

// Global variables



// Routes

app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));

// Files

app.use(express.static(path.join(__dirname, 'public')));

// Export module
module.exports = app;