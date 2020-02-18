const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport')

// Start

const app = express();
require('./config/passport');

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
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize())
app.use(passport.session())
app.use(flash());
app.use(function (req, res, next) {
    res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    next();
});

// Global variables

app.use((req, res, next) => {

    res.locals.success_msg = req.flash('success_msg');
    res.locals.err_msg = req.flash('err_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;

    next();
})

// Routes

app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));
app.use(require('./routes/users.routes'));

// Files

app.use(express.static(path.join(__dirname, 'public')));

// Export module
module.exports = app;