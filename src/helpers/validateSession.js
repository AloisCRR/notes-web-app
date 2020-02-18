const helpers = {};

helpers.isAuthenticated = (req, res, next)=>{
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash('err_msg', 'You need to login to access this page.')
    res.redirect('/user/logIn');
}

module.exports = helpers;