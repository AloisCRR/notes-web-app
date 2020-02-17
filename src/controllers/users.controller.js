const usrCtrl = {};

usrCtrl.renderSignUp = (req, res) => {
    res.render('users/signup');
}

usrCtrl.signUp = (req, res) => {
    res.send('Signed up');
}

usrCtrl.renderlogIn = (req, res) => {
    res.render('users/login');
}

usrCtrl.logIn = (req, res) => {
    res.send('Logged in');
}

usrCtrl.logOut = (req, res) => {
    res.send('Logged out');
}

module.exports = usrCtrl;