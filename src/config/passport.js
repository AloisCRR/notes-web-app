const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done)=>{
    
    // Looking for registered email
    const user = await User.findOne({email});
    if(!user){
        return done(null, false, { message: 'You are not registered.' })
    } else {
        // Compare passwords
        const matchpass = await user.matchPass(password)
        if (matchpass) {
            return done(null, user)
        } else {
            done(null, false, { message: 'Password do not match'})
        }
    }

}));

passport.serializeUser((user, done) =>{
    done(null, user._id)
});

passport.deserializeUser((id, done)=>{
    User.findById(id, (err, user)=>{
        done(err, user);
    })
});