const express = require('express');
const router = express.Router();
const authController = require('../contoller/authController');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/home', authController.home);
router.get('/logout', authController.logout);
router.get('/profile', authController.profile);
router.post('/update', authController.updateProfile);
router.post('/delete', authController.deleteUser);

module.exports = router;
