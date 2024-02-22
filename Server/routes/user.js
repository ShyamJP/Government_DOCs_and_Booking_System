// const router = require('express');
const express = require('express')
const router = express.Router();
const {signup, login} = require('../controllers/user');
const {userMiddleware} = require('../middleware/user')

router.post('/signup',signup);
router.post('/login', login, userMiddleware);
router.post('/book',userMiddleware,booking);

module.exports = router;
