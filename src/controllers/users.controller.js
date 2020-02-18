const usrCtrl = {};
const User = require('../models/user');
const passport = require('passport');

usrCtrl.renderSignUp = (req, res) => {
    res.render('users/signup');
}

usrCtrl.signUp = async (req, res) => {
    const { name, email, password, conf_password } = req.body;
    const errors = [];
    if (password != conf_password) {
        errors.push({ text: 'Passwords does not match' });
    }
    if (password.length <= 5) {
        errors.push({ text: 'Password too weak, it must be at least 6 characters' });
    }
    if (errors.length > 0) {
        res.render('users/signup', { errors });
    } else {
       const userEmail = await User.findOne({email});
       if (userEmail) {
           req.flash('err_msg', 'This mail was already registered.')
           res.redirect('back');
       } else {
           const newUser = new User({name,email,password});
           newUser.password = await newUser.cryptPass(password);
           await newUser.save();
           req.flash('success_msg', 'Signup complete!')
           res.redirect('/user/logIn');
       }
    }
}

usrCtrl.renderlogIn = (req, res) => {
    res.render('users/login');
}

usrCtrl.logIn = passport.authenticate('local',{
    failureRedirect: '/user/logIn',
    successRedirect: '/notes',
    failureFlash: true
})

usrCtrl.logOut = (req, res) => {
    req.logout();
    req.flash('success_msg', 'Thanks for using the website!');
    res.redirect('/');
}

module.exports = usrCtrl;