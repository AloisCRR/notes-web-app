const { Router } = require('express');
const router = Router();
const { renderSignUp, signUp, renderlogIn, logIn, logOut } = require('../controllers/users.controller')

// Sign up
router.get('/user/signUp', renderSignUp);
router.post('/user/signUp', signUp);

// Sign in
router.get('/user/logIn', renderlogIn);
router.post('/user/logIn', logIn);

// Logout
router.get('/user/logOut', logOut)

module.exports = router;