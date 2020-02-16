const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');

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
app.use(session({
    secret: 'holaholahola',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());

// Global variables

app.use((req,res,next)=>{
    
    res.locals.success_msg = req.flash('success_msg');
    
    next();
})

// Routes

app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));

// Files

app.use(express.static(path.join(__dirname, 'public')));

// Export module
module.exports = app;